# create-hyas

CLI for setting up a new Hyas project.

## Requirements

- [Node.js](https://nodejs.org/) — v16.17.0 or higher

## Usage

Run the following command, and follow the prompts.

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

### Options

Use arguments for:

- the directory to create the project in (use `.` to scaffold in the current directory)
- the template to use (add `-recommended` to include recommended plugins)

### Templates

Currently:

- `bolt`
- `doks`
- `bootstrap-starter`
- `default-starter`

### Recommended plugins

Currently:

- [@hyas-seo](https://github.com/gethyas/seo)
- [@hyas-images](https://github.com/gethyas/images)

### Example

Run the following command to scaffold a Doks project with recommended plugins.

With npm:

```bash
npm create hyas@latest my-doks-site -- --template doks-recommended
```

With Yarn:

```bash
yarn create hyas my-doks-site --template doks-recommended
```

With pnpm:

```bash
pnpm create hyas my-doks-site --template doks-recommended
```

### Community templates

Use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the [community templates](https://gethyas.com/themes/community/).

```bash
npx degit user/project my-project
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```

## Credits

CLI setup is based on [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).
