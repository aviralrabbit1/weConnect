### 1. Create a new Next.js project integrated with typescript and tailwind with
```sh
bunx --bun create-next-app@latest my-app --typescript --tailwind --esline
```
### 2. Setup shadcn-ui
```sh
bunx --bun shadcn-ui@latest init
```
I'm using `default`, `slate` and `yes`(for using css variables).

### 3. Routing

#### Terminology:-
- Tree: A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.
- Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).
- Root: The first node in a tree or subtree, such as a root layout.
- Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.

#### Usage System :- 
- **Folder structure**: represents a route segment that maps to a URL segment. To create a nested route, We can nest folders inside each other. A special `page.tsx` (show UI unique to a route) file is used to make route segments publicly accessible. `layouts.tsx` to show UI shared across multiple routes.
- **Route Group**: Folders prevented from being included in the route's URL path, by wrapping a folder's name in parenthesis: `(folderName)`. To create multiple root layouts, remove the top-level `layout.tsx` file, and add a `layout.tsx` file inside each route group.
- **Dynamic Routing**: can be created by wrapping a folder's name in square brackets: `[folderName]`, for example, `[id]`. These segments are passed as the params prop to layout, page, route, and generateMetadata functions.
- **generateStaticParams**: Can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time. Example -
  ```ts
    export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
 
    return posts.map((post) => ({
        slug: post.slug,
        }))
    }
  ```


Create -
- `app\(root)\layout.tsx`: Basic structure of the app (Header, Main[Children Components] Footer, etc.)
- `app\(root)\(home)\page.tsx`: Home page
- `app\(root)\meeting\[id]\page.tsx`: 
  
  ```ts
    // Dynamic Routing segment = [id]
    const Meeting = ({ params }: {params: { id: string}}) => {
        return (
            <div>Meeting Room: #{params.id}</div>
        )
    }
    export default Meeting
  ```

