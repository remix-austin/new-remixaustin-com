# React Router v7 Framework Mode

## Critical Rules

### 🚨 Type Imports - ALWAYS follow this pattern:
```tsx
// ✅ CORRECT - Always use this:
import type { Route } from "./+types/product-details";

// ❌ NEVER use relative paths:
// import type { Route } from "../+types/product-details";  // WRONG!
```

**If you see TypeScript errors about missing types:**
1. Run `bun run typecheck` to generate types
2. NEVER try to "fix" by changing the import path

## Bash Commands
- `bun run dev`: Start development server (auto-generates types)
- `bun run build`: Build the project
- `bun run typecheck`: Generate route types
- `bun run start`: Start production server

## Core Packages
- `react-router` - Main routing package (NOT react-router-dom)
- `@react-router/dev` - Development tools
- `@react-router/node` - Node.js adapter
- `@react-router/serve` - Production server

## Route Configuration
Routes are defined in `app/routes.ts`:
```tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:id", "routes/product.tsx"),
] satisfies RouteConfig;
```

## Route Module Pattern
```tsx
import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  return { product: await getProduct(params.id) };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```

## Type-Safe Navigation
Always use `href()` for dynamic URLs:
```tsx
import { Link, href } from "react-router";

// ✅ Type-safe
<Link to={href("/products/:id", { id: product.id })}>View</Link>

// ❌ Never manually construct URLs
<Link to={`/products/${product.id}`}>View</Link>
```

## Layout Routes
Use `<Outlet />` to render child routes:
```tsx
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav>Navigation</nav>
      <Outlet /> {/* Renders child route */}
    </div>
  );
}
```

## Code Style
- Import from `"react-router"` not `"react-router-dom"`
- Use generated types from `./+types/[routeName]`
- Use `href()` for all dynamic route construction
- Use `Form` component for form submissions
- Use loaders/actions for data fetching, not useEffect

## Workflow
1. After adding/renaming routes, run `bun run typecheck`
2. Use descriptive kebab-case file names (e.g., `product-details.tsx`)
3. Organize routes by feature, not by convention
4. Let TypeScript infer loader/action return types

## Common Mistakes to Avoid
- Using React Router v6 patterns (`<Routes>`, `<Route element={}>`)
- Manual data fetching in components instead of loaders
- Creating custom Route type definitions
- Using react-router-dom package
- Forgetting to run typecheck after route changes
- Trying to use `children` prop instead of `<Outlet />`

## Testing Instructions
- Test route navigation with type-safe `href()` calls
- Verify loaders/actions handle errors properly
- Check that forms work without JavaScript (progressive enhancement)
- Ensure error boundaries catch and display errors appropriately

## Environment Setup
- TypeScript: Add `.react-router/types/**/*` to `tsconfig.json` include array
- Dev server auto-generates types on file changes
- Production builds require explicit `bun run typecheck`

## Important Notes
- Types are auto-generated in `.react-router/types/` directory
- Route configuration in `app/routes.ts` is the source of truth
- Both server and client loaders can coexist (client takes priority)
- Forms automatically work without JavaScript when using `<Form>`