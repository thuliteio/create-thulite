# create-hyas

CLI for setting up a new Hyas project.

## Requirements

- [Node.js](https://nodejs.org/) — v16.17.0 or higher

## Usage

Create a new Hyas project

with npm:

```bash
npm create hyas@latest
```

with Yarn:

```bash
yarn create hyas
```

with pnpm:

```bash
pnpm create hyas
```

Then follow the prompts.

### Options

Use arguments for:

- the directory to create the project in
- the template to use

#### Directory

You can use `.` to scaffold in the current directory.

#### Template

Currently, you can use:

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


## Community Templates

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
