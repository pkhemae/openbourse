# OpenBourse

Plateforme open-source d'information financière et boursière — une alternative libre à Zonebourse.

## Stack

- Monorepo [Nx](https://nx.dev) avec workspaces [pnpm](https://pnpm.io) et TypeScript project references
- App web : [TanStack Start](https://tanstack.com/start) (à venir, dans `apps/`)

## Structure

```
apps/       # Applications (web, etc.)
packages/   # Librairies partagées
```

## Développement

```sh
pnpm install                     # Installer les dépendances
pnpm nx graph                    # Visualiser le graphe des projets
pnpm nx typecheck <projet>       # Typecheck d'un projet
pnpm nx build <projet>           # Build d'un projet
pnpm nx run-many -t typecheck    # Typecheck de tous les projets
pnpm nx sync                     # Synchroniser les TypeScript project references
```

Générer une librairie partagée :

```sh
pnpm nx g @nx/js:lib packages/<nom> --importPath=@openbourse/<nom>
```
