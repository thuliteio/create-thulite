# create-thulite

Official CLI for scaffolding a new Thulite project.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/create-thulite?style=flat-square)](https://www.npmjs.com/package/create-thulite)

## Requirements

- [Node.js](https://nodejs.org/) — `v20.11.0` or higher

## How to use

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
pnpm create thulite@latest
```

Then follow the prompts!

## Options

You can also directly specify the project name and the template you want to use via additional command line options. Use `.` for the project name to scaffold in the current directory. For example, to scaffold a Doks project, run:

### npm

```bash
npm create thulite@latest my-doks-project -- --template doks
```

### Yarn

```bash
yarn create thulite my-doks-project --template doks
```

### pnpm

```bash
pnpm create thulite@latest my-doks-project --template doks
```

## Templates

Currently supported template presets include:

- `vermeer`
- `doks`
- `bolt`
- `tailwindcss-starter`
- `tailwindcss-starter-rec`
- `bootstrap-starter`
- `bootstrap-starter-rec`
- `basic-starter`
- `basic-starter-rec`

### Variants

The `-rec` variants include the recommended integrations, currently:

- [@thulite-seo](https://github.com/thuliteio/seo)
- [@thulite-images](https://github.com/thuliteio/images)

## Community templates

You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the [community themes](https://thulite.io/themes/community/).

### npm

```bash
npx degit user/repo my-project
```

### Yarn

```bash
yarn dlx degit user/repo my-project
```

### pnpm

```bash
pnpm dlx degit user/repo my-project
```

## Credits

This npm package is based on:

- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
