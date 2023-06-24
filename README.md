# create-hyas

Official CLI for scaffolding a new Hyas project.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/create-hyas?style=flat-square)](https://www.npmjs.com/package/create-hyas)

## Requirements

- [Node.js](https://nodejs.org/) — `v16.12.0` or higher

## How to use

With npm:

```bash
npm create hyas@latest
```

With Yarn:

```bash
yarn create hyas
```

With pnpm:

```bash
pnpm create hyas
```

Then follow the prompts!

### Options

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Doks project, run:

```bash
# npm (extra double-dash is needed)
npm create hyas@latest my-doks-project -- --template doks

# Yarn
yarn create hyas my-doks-project --template doks

# pnpm
pnpm create hyas my-doks-project --template doks
```

You can use `.` for the project name to scaffold in the current directory.

### Templates

Currently supported template presets include:

- `doks`
- `bolt`
- `bootstrap-starter`
- `bootstrap-starter-recommended`
- `default-starter`
- `default-starter-recommended`

### Variants

The `-recommended` variants include the recommended plugins, currently:

- [@hyas-seo](https://github.com/gethyas/seo)
- [@hyas-images](https://github.com/gethyas/images)

### Community templates

You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the [community templates](https://gethyas.com/templates/community/).

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

## Credits

This npm package is based on:

- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
