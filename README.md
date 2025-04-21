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

```zsh
# macOS
brew install oven-sh/bun/bun

# Windows
winget install Oven-sh.Bun

# Linux
curl -fsSL https://bun.sh/install | bash
```

Install the dependencies:

```zsh
bun install
```

### Development

Run an initial database migration:

```zsh
bun run db:migrate:dev
```

Start the development server with HMR:

```zsh
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build.

```zsh
bun run build
```

## Deployment

Deployment is done using the Wrangler CLI.

First, you need to create a D1 database in Cloudflare.

```zsh
bunx wrangler d1 create new-remixaustin-com-d1
```

Then update the [`wrangler.jsonc`](wrangler.jsonc) file with the correct `database_name` and `database_id`.

You will also need to add the following environment variables to the [`.env`](.env.example) file and as Cloudflare build secrets.

```env
CLOUDFLARE_ACCOUNT_ID=cloudflare_account_id
CLOUDFLARE_DATABASE_ID=cloudflare_database_id
CLOUDFLARE_TOKEN=clouflare_token
```

You will also have to update the commands to build and deploy in the Cloudflare Dashboard.

| Name                                 | Command               |
|:-------------------------------------|:----------------------|
| Build command                        | `bun run build`       |
| Deploy command                       | `bun run deploy:prod` |
| Non-production branch deploy command | `bun run deploy:dev`  |

Next, run the production database migration.

```zsh
bun run db:migrate:prod
```

Finally, you can deploy the application to Cloudflare.

```zsh
bun run deploy:prod
```

The website is deployed automatically when versions are tagged. See the [deploy.yml](.github/workflows/deploy.yml) file for more information.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
