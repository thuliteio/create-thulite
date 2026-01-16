# Thulite CLI

Official CLI for scaffolding a new Thulite project.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/create-thulite?style=flat-square)](https://www.npmjs.com/package/create-thulite)

## Requirements

- [Node.js](https://nodejs.org/) — `v20.19.0` or higher

## Usage

### npm

```bash
npm create thulite@latest
```

### Yarn

```bash
yarn create thulite
```

### pnpm

```bash
pnpm create thulite
```

### bun

```bash
bun create thulite
```

### Deno

```bash
deno init --npm thulite
```

Then follow the prompts!

## Options

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Thulite + Doks project, run:

### npm

```bash
npm create thulite@latest my-project -- --template doks
```

### Yarn

```bash
yarn create thulite my-project --template doks
```

### pnpm

```bash
pnpm create thulite my-project --template doks
```

### bun

```bash
bun create thulite my-project --template doks
```

### Deno

```bash
deno init --npm thulite my-project --template doks
```

## Project name

You can use `.` for the project name to scaffold in the current directory.

## Templates

Templates with recommended integrations (SEO and Images):

- `doks`
- `bolt`
- `tailwindcss-rec`
- `bootstrap-rec`
- `basic-rec`

Templates without recommended integrations:

- `tailwindcss`
- `bootstrap`
- `basic`

## Help

You can view all available options and templates using the help command:

### npm

```bash
npx create-thulite@latest --help
```

### Yarn

```bash
yarn create thulite --help
```

### pnpm

```bash
pnpm create thulite --help
```

### bun

```bash
bun create thulite --help
```

### Deno

```bash
deno init --npm thulite --help
```

## Troubleshooting

### Windows Permission Errors with Yarn

If you encounter `EPERM: operation not permitted` errors when using Yarn on Windows, try one of these solutions:

1. **Run as Administrator**: Right-click PowerShell and select "Run as Administrator"

2. **Use npm instead**:

   ```bash
   npm create thulite@latest my-project -- --template doks
   ```

3. **Fix .yarnrc permissions**:

   ```powershell
   $yarnrcPath = "$env:USERPROFILE\.yarnrc"
   if (Test-Path $yarnrcPath) {
       icacls $yarnrcPath /grant "$env:USERNAME:(F)"
   }
   ```

4. **Delete problematic .yarnrc** (if safe to do so):

   ```powershell
   Remove-Item "$env:USERPROFILE\.yarnrc" -Force
   ```

## Credits

This npm package is based on:

- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
