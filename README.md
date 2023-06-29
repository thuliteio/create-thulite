# create-hyas

Official CLI for scaffolding a new Hyas project.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/create-hyas?style=flat-square)](https://www.npmjs.com/package/create-hyas)

## Requirements

- [Node.js](https://nodejs.org/) — `v16.12.0` or higher

## How to use

### npm

```bash
npm create hyas@latest
```

### Yarn

```bash
yarn create hyas
```

### pnpm

```bash
pnpm create hyas@latest
```

Then follow the prompts!

## Options

You can also directly specify the project name and the template you want to use via additional command line options. Use `.` for the project name to scaffold in the current directory. For example, to scaffold a Doks project, run:

### npm

```bash
npm create hyas@latest my-doks-project -- --template doks
```

### Yarn

```bash
yarn create hyas my-doks-project --template doks
```

### pnpm

```bash
pnpm create hyas@latest my-doks-project --template doks
```

## Templates

Currently supported template presets include:

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

- [@hyas-seo](https://github.com/gethyas/seo)
- [@hyas-images](https://github.com/gethyas/images)

## Community templates

You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the [community templates](https://gethyas.com/templates/community/). 

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
