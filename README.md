# OpenBourse

## Structure

```
apps/
  waitlist/ # Waitlist app (TanStack Start)
  web/      # Web app (TanStack Start)
packages/
  ui/       # Design system (shadcn/ui + Base UI + Tailwind CSS)
```

Add a UI component (from `apps/web`, installs into `packages/ui`):

```sh
cd apps/web && npx shadcn@latest add <component>
```

## Development

```sh
pnpm install                     # Install dependencies
pnpm nx dev @openbourse/web      # Start the web app dev server (http://localhost:3000)
pnpm nx dev @openbourse/waitlist # Start the waitlist dev server (http://localhost:3001)
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
