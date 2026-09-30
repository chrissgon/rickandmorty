![Rick And Morty](./public/thumb.png)

# Rick And Morty

Explore dimensions, characters and episodes about Rick and Morty multiverse 🌌🚀

## 🌍 Translations

- [English](https://github.com/chrissgon/rickandmorty/blob/main/README.md)
- [Português Brasileiro](https://github.com/chrissgon/rickandmorty/blob/main/README-pt-BR.md)

## ⚠️ Requirements

This project uses [Bun](https://bun.sh/): the lockfile is `bun.lockb`. You can also use [Node](https://nodejs.org/en) with npm (`npm install`, `npm run build`), but npm does not read `bun.lockb`, so it resolves the dependency versions again.

## 🎨 Stack

- [React](https://react.dev/), [Redux Toolkit](https://redux-toolkit.js.org/) and [React Router](https://reactrouter.com/v6), built with [Vite](https://vitejs.dev/).
- [Perfect UI](https://perfectui.dev) 1.0.0 for the components (cards, buttons, inputs) and the light and dark colors.
- [Tailwind CSS](https://tailwindcss.com/) 3 alongside Perfect UI, for layout and spacing. Preflight is off and the colors point to Perfect UI's `--pui-*` tokens, so both follow the same color mode (`tailwind.config.ts`).
- [Inter](https://rsms.me/inter/), self-hosted from `@fontsource-variable/inter`: no request to a font CDN.
- [Bootstrap Icons](https://icons.getbootstrap.com/), self-hosted: only the 17 icons the app uses, bundled into the CSS (`src/icons.css`). To add one, follow the note at the top of that file.
- The color mode is remembered: dark on the first visit, and the choice made with the moon/sun button is kept in the `pui-mode` cookie and applied before the page paints.
- Data from the public [Rick and Morty API](https://rickandmortyapi.com/).

## 📦 Install

- Clone the repository.

```bash
git clone git@github.com:chrissgon/rickandmorty.git
```

## 🚀 Quick Start

- Install dependencies.

```bash
bun install --frozen-lockfile
```

- Run application.

```bash
bun run dev
```

- Lint the code (fails on any warning).

```bash
bun run lint
```

- Build for production (type check, then Vite build into `dist/`), and serve the build locally.

```bash
bun run build
bun run preview
```

## 📝 Anotations

Application hosted in <a href="http://localhost:5173/">http://localhost:5173/</a> with `bun run dev`, and in <a href="http://localhost:4173/">http://localhost:4173/</a> with `bun run preview`.

## 🔗 References

- [Figma Design](<https://www.figma.com/file/1TK4NdE2NmVVz8tdz4CFso/Rick-and-Morty-(Community)>)
- [Perfect UI](https://perfectui.dev)
- [Redux JS](https://redux.js.org/introduction/getting-started)
- [React Router](https://reactrouter.com/v6)
- [React Course](https://www.youtube.com/playlist?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR)

## 💪🏻 Contribution

This project is open source and welcomes community contributions. Feel free to fork, implement improvements, and submit a pull request. Every contribution is valued and appreciated!

Feel free to explore the source code, provide feedback, and report any issues you encounter.

## ❤️ Authors

- [@chrissgon](https://www.github.com/chrissgon)
