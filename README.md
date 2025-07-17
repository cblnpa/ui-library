# ui-library

A sleek, forward‑thinking component system for React and React Native—because why juggle two libraries when you can have one that does it all? 🚀

## Description

This mono‑repo houses a multiplatform UI library built in layers:

1. **Design Tokens** (`@ui-library/design-tokens`)  
   – Central source of truth for colors, typography, spacing & shadows.
2. **Core Primitives** (`@ui-library/ui-core`)  
   – Agnostic building blocks (`Box`, `Text`, etc.) that don’t care if you’re on web or mobile.
3. **Web Wrappers** (`@ui-library/ui-web`)  
   – Styled‑components–powered `<Button>`, `<Card>`, and friends for the browser.
4. **Mobile Wrappers** (`@ui-library/ui-mobile`)  
   – React Native–flavored components with touch feedback and a11y built in.

## 🚀 Features

- **Single source** for both **web** and **mobile** UI
- **Design tokens** powered by Style Dictionary (WIP)
- **TypeScript** with project references for fast, type‑safe builds
- **Built‑in** accessibility, theming, and responsive defaults
- **Monorepo** with Yarn 4 Plug’n’Play and Workspaces

## 💾 Prerequisites

- Node.js >= 22
- Yarn 4
- Git

## 🛠 Installation

1. Clone the repo:

```bash
  git clone git@github.com:YOUR_USERNAME/ui-library.git
  cd ui-library
```

2. Install dependencies:

```bash
  yarn install
```

## 📦 Build

Generate the transpiled output (JS + type declarations + tokens) for all packages:

```bash
yarn workspaces foreach --all --topological --parallel run build
```

**What’s going on here?**

`yarn workspaces foreach`
Runs a command in each workspace under `packages/`.

`--all`
Includes every workspace, even if there’s no dependency graph.

`--topological`
Builds in dependency order:

1. `design-tokens`
2. `ui-core`
3. `ui-mobile`
4. `ui-web`

`--parallel`
Runs independent builds at the same time for a speed boost.

`run build`
Executes each package’s `"build"` script, which typically does:

1. Clean previous output
2. Compile TypeScript (`tsc -b`) → `dist/_.js`, `dist/_.d.ts`

After this, you’ll have fresh dist/ folders in:

```bash
packages/design-tokens/dist/
packages/ui-core/dist/
packages/ui-web/dist/
packages/ui-mobile/dist/
```

## 🔧 Scripts

## 📖 Usage

Install the package you need in your project:

### For web

```bash
npm install @ui-library/ui-web styled-components react react-dom
```

### For mobile

```bash
npm install @ui-library/ui-mobile styled-components react-native
```

Then import:

```tsx
import { Box, Text } from '@ui-library/ui-core';
import { Button } from '@ui-library/ui-mobile'; // mobile
import { Button } from '@ui-library/ui-web'; // web
```

## 🤝 Contributing

WIP
