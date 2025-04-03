# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Figma Wireframes

https://www.figma.com/design/c3TgqL3EPtx4lkzb7Ey5z4/Remix-Austin-Meetup-Website?node-id=0-1

## Getting Started

### Installation

Install Bun (if you don't already have it):

```bash
# macOS
brew install oven-sh/bun/bun

# Linux
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1|iex"
```

Install the dependencies:

```bash
bun install
```

### Development

Run an initial database migration:

```bash
bun run db:migrate
```

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

Deployment is done using the Wrangler CLI.

First, you need to create a d1 database in Cloudflare.

```sh
bunx wrangler d1 create <name-of-your-database>
```

Be sure to update the `wrangler.toml` file with the correct database name and id.

You will also need to [update the `drizzle.config.ts` file](https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit), and then run the production migration:

```sh
bun run db:migrate-production
```

To build and deploy directly to production:

```sh
bun run deploy
```

To deploy a preview URL:

```sh
bun wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
bun wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
