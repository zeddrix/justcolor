## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. In my case, I used the `@sveltejs/adapter-static` for the Github Pages environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Deploying
Everything is already set and taken care of by the _deploy_ command found in the __package.json__ file. So all you have to do to have changes appear on site is:

```bash
npm run deploy
```