import fs from 'node:fs'
import path from 'node:path'
import type { SyncOptions } from 'execa'
import { execaCommandSync } from 'execa'
import { afterEach, beforeAll, expect, test } from 'vitest'

const CLI_PATH = path.join(__dirname, '..')

const projectName = 'test-app'
const genPath = path.join(__dirname, projectName)
const genPathWithSubfolder = path.join(__dirname, 'subfolder', projectName)

const run = (args: string[], options?: SyncOptions) => {
  return execaCommandSync(`node ${CLI_PATH} ${args.join(' ')}`, {
    env: { ...process.env, _VITE_TEST_CLI: 'true' },
    ...options,
  })
}

// Helper to create a non-empty directory
const createNonEmptyDir = (overrideFolder?: string) => {
  // Create the temporary directory
  const newNonEmptyFolder = overrideFolder || genPath
  fs.mkdirSync(newNonEmptyFolder, { recursive: true })

  // Create a package.json file
  const pkgJson = path.join(newNonEmptyFolder, 'package.json')
  fs.writeFileSync(pkgJson, '{ "foo": "bar" }')
}

// Basic starter template
const templateFiles = fs
  .readdirSync(path.join(CLI_PATH, 'template-basic'))
  // _gitignore is renamed to .gitignore, _npmignore to .npmignore, _npmrc to .npmrc
  .map((filePath) => {
    if (filePath === '_gitignore') return '.gitignore'
    if (filePath === '_npmignore') return '.npmignore'
    if (filePath === '_npmrc') return '.npmrc'
    return filePath
  })
  .sort()

// Doks starter template
const templateFilesDoks = fs
  .readdirSync(path.join(CLI_PATH, 'template-doks'))
  .map((filePath) => {
    if (filePath === '_gitignore') return '.gitignore'
    if (filePath === '_npmignore') return '.npmignore'
    if (filePath === '_npmrc') return '.npmrc'
    return filePath
  })
  .sort()

const clearAnyPreviousFolders = () => {
  if (fs.existsSync(genPath)) {
    fs.rmSync(genPath, { recursive: true, force: true })
  }
  if (fs.existsSync(genPathWithSubfolder)) {
    fs.rmSync(genPathWithSubfolder, { recursive: true, force: true })
  }
}

beforeAll(() => clearAnyPreviousFolders())
afterEach(() => clearAnyPreviousFolders())

test('prompts for the project name if none supplied', () => {
  const { stdout } = run(['--interactive'])
  expect(stdout).toContain('Project name:')
})

test('prompts for the template if none supplied when target dir is current directory', () => {
  fs.mkdirSync(genPath, { recursive: true })
  const { stdout } = run(['.', '--interactive'], { cwd: genPath })
  expect(stdout).toContain('Select a template:')
})

test('prompts for the template if none supplied', () => {
  const { stdout } = run([projectName, '--interactive'])
  expect(stdout).toContain('Select a template:')
})

test('prompts for the template on not supplying a value for --template', () => {
  const { stdout } = run([projectName, '--interactive', '--template'])
  expect(stdout).toContain('Select a template:')
})

test('prompts for the template on supplying an invalid template', () => {
  const { stdout } = run([
    projectName,
    '--interactive',
    '--template',
    'unknown',
  ])
  expect(stdout).toContain(
    `"unknown" isn't a valid template. Please choose from below:`,
  )
})

test('asks to overwrite non-empty target directory', () => {
  createNonEmptyDir()
  const { stdout } = run([projectName, '--interactive'], { cwd: __dirname })
  expect(stdout).toContain(`Target directory "${projectName}" is not empty.`)
})

test('asks to overwrite non-empty target directory with subfolder', () => {
  createNonEmptyDir(genPathWithSubfolder)
  const { stdout } = run([`subfolder/${projectName}`, '--interactive'], {
    cwd: __dirname,
  })
  expect(stdout).toContain(
    `Target directory "subfolder/${projectName}" is not empty.`,
  )
})

test('asks to overwrite non-empty current directory', () => {
  createNonEmptyDir()
  const { stdout } = run(['.', '--interactive'], { cwd: genPath })
  expect(stdout).toContain(`Current directory is not empty.`)
})

test('successfully scaffolds a project based on basic starter template', () => {
  const { stdout } = run(
    [projectName, '--interactive', '--no-immediate', '--template', 'basic'],
    {
      cwd: __dirname,
    },
  )
  const generatedFiles = fs.readdirSync(genPath).sort()

  // Assertions
  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
  expect(templateFiles).toEqual(generatedFiles)
})

test('successfully scaffolds a project with subfolder based on doks starter template', () => {
  const { stdout } = run(
    [
      `subfolder/${projectName}`,
      '--interactive',
      '--no-immediate',
      '--template',
      'doks',
    ],
    {
      cwd: __dirname,
    },
  )
  const generatedFiles = fs.readdirSync(genPathWithSubfolder).sort()

  // Assertions
  expect(stdout).toContain(`Scaffolding project in ${genPathWithSubfolder}`)
  expect(templateFilesDoks).toEqual(generatedFiles)
})

test('successfully scaffolds a project based on doks starter template', () => {
  const { stdout } = run([projectName, '--template', 'doks'], {
    cwd: __dirname,
  })
  const packageJsonFile = fs.readFileSync(
    path.join(genPath, 'package.json'),
    'utf-8',
  )

  // Assertions
  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
  expect(packageJsonFile).toContain('"name":')
})

test('works with the -t alias', () => {
  const { stdout } = run(
    [projectName, '--interactive', '--no-immediate', '-t', 'basic'],
    {
      cwd: __dirname,
    },
  )
  const generatedFiles = fs.readdirSync(genPath).sort()

  // Assertions
  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
  expect(templateFiles).toEqual(generatedFiles)
})

test('accepts command line override for --overwrite', () => {
  createNonEmptyDir()
  const { stdout } = run(['.', '--interactive', '--overwrite', 'ignore'], {
    cwd: genPath,
  })
  expect(stdout).not.toContain(`Current directory is not empty.`)
})

test('skip prompts when --no-interactive is passed', () => {
  createNonEmptyDir()
  const { stdout } = run([projectName, '--no-interactive'], { cwd: genPath })
  expect(stdout).not.toContain('Project name:')
  expect(stdout).toContain('Done. Now run:')
})

test('return help usage how to use create-thulite', () => {
  const { stdout } = run(['--help'], { cwd: __dirname })
  const message = 'Usage: create-thulite [OPTIONS]... [DIRECTORY] [TEMPLATE]'
  expect(stdout).toContain(message)
})

test('return help usage how to use create-thulite with -h alias', () => {
  const { stdout } = run(['--h'], { cwd: __dirname })
  const message = 'Usage: create-thulite [OPTIONS]... [DIRECTORY] [TEMPLATE]'
  expect(stdout).toContain(message)
})

test('package.json project name is set correctly', () => {
  const { stdout } = run([projectName, '--template', 'basic'], {
    cwd: __dirname,
  })

  const packageJsonPath = path.join(genPath, 'package.json')
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8')
  const packageJson = JSON.parse(packageJsonContent)

  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
  expect(packageJson.name).toBe(projectName)
})

test('accepts immediate flag', () => {
  const { stdout } = run([projectName, '--template', 'basic', '--immediate'], {
    cwd: __dirname,
  })
  expect(stdout).not.toContain('Install and start now?')
  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
  expect(stdout).toContain('Installing dependencies')
})

test('accepts immediate flag and skips install prompt', () => {
  const { stdout } = run([projectName, '--template', 'basic', '--no-immediate'], {
    cwd: __dirname,
  })
  expect(stdout).not.toContain('Install and start now?')
  expect(stdout).not.toContain('Installing dependencies')
  expect(stdout).toContain(`Scaffolding project in ${genPath}`)
})
