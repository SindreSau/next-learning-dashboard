# Next.js dashboard

This is a simple dashboard built with Next.js, Drizzle ORM, and Tailwind CSS.
The goal is to learn how to build a dashboard with Next.js and host it on AWS.

## Drizzle Cheat sheet

### Open drizzle studio

```bash
npx drizzle-kit studio
```

### Other drizzle-kit commands

Push to database

```bash
npx drizzle-kit push
```

Generate schema

```bash
npx drizzle-kit generate
```

Migrate schema

```bash
npx drizzle-kit migrate
```

### Run index.ts file

This is useful for seeding,

```bash
bun src/index.ts
```

or

```bash
pnpm run src/index.ts
```
