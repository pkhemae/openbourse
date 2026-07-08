# OpenBourse

## Structure

```
apps/
  web/      # Web app (TanStack Start)
packages/   # Shared libraries
```

## Development

```sh
pnpm install                     # Install dependencies
pnpm nx dev @openbourse/web      # Start the web app dev server (http://localhost:3000)
pnpm nx build @openbourse/web    # Build the web app for production
pnpm nx start @openbourse/web    # Serve the production build
pnpm nx graph                    # Visualize the project graph
pnpm nx run-many -t typecheck    # Typecheck all projects
pnpm nx sync                     # Sync TypeScript project references
```

Generate a shared library:

```sh
pnpm nx g @nx/js:lib packages/<name> --importPath=@openbourse/<name>
```
