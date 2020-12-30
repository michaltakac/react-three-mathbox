# react-three-mathbox

Steven Wittens's great [MathBox](https://gitgud.io/unconed/mathbox/) adapted into [react-three-fiber ecosystem](https://github.com/pmndrs/react-three-fiber). You can read more about it [in his blog on Acko.net](http://acko.net/blog/mathbox2/).

*Note: this repo uses submodules, clone it with `--recursive` or do a `git submodule update --init` after cloning.*

## Featured dependencies

* [React](https://reactjs.org/)
* [Three.js](https://threejs.org/)
* [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for threejs on the web and react-native
* [@react-three/drei](https://github.com/react-spring/drei) – useful helpers for react-three-fiber
* [react-spring](https://github.com/react-spring/react-spring) – a spring-physics-based animation library
* [react-use-gesture](https://github.com/react-spring/react-use-gesture) – mouse/touch gestures
* [shadergraph](https://github.com/unconed/shadergraph) - Functional GLSL linker

* For the development/example purposes, we use [react-three-gui](https://github.com/birkir/react-three-gui), a graphical user interface for changing variable states in React

## Development

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

## How to contribute

Pull requests are most welcome! I'm in a process of rewriting MathBox into TypeScript and change it to use React with [react-three-fiber](https://github.com/pmndrs/react-three-fiber).

If you like this project, please consider helping out. All contributions are welcome as well as donations to Opencollective, or in crypto:

- BTC: 1PTV4AxHoDjd4wxuuRw6RVurxgJMgwZskn
- LTC: LUBd3XLRd9dK6B1EVrsnFnaz8cGCeDgwWq
- ETH: 0x3b5c52380b1C142FbCCf195C1E000Fa071490adF
