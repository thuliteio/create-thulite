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

- `doks`
- `bootstrap-starter`
- `no-theme`

### Recommended plugins

Currently:

- [@hyas-seo](https://github.com/h-enk/hyas-seo)
- [@hyas-images](https://github.com/h-enk/hyas-images)

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

## Credits

CLI setup is based on [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).
