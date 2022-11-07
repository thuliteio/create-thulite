# create-hyas

CLI for setting up a new Hyas project.

## Requirements

- [Node.js](https://nodejs.org/) — v16.17.0 or higher

## Usage

Run `create` command and follow the prompts.

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

- the directory to create the project in
- the template to use

#### Directory

Use `.` to scaffold in the current directory.

#### Templates

Currently:

- `doks`
- `bootstrap-starter`
- `no-theme`

Add `-recommended` to include recommended plugins, currently:

- [@hyas-seo](https://github.com/h-enk/hyas-seo)
- [@hyas-images](https://github.com/h-enk/hyas-images)

#### Example

For example, to scaffold a Doks project with recommended plugins, run:

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
