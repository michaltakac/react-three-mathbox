# Notes on MathBox in React and react-three-fiber

React handles declarative representation of virtual DOM. With React + react-three-fiber, lot of functionality (like React's hooks) can be used to build similar features as there were custom-coded in original MathBox project.

Currently, we're trying to allow user to write code in JSX that will provide MathBox primitives... something like this:

```jsx
<root focus={3}>
  <camera proxy={true} position={[0, 0, 3]} />
  <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
    <axis axis={1} width={3} color="black" />
    <axis axis={2} width={3} color="black" />
    <grid width={2} divideX={20} divideY={10} />
    <interval expr={(emit, x, i, t) => {
          emit(x, Math.sin(x + t));
        }} width={64} channels={2} />
    <line width={5} color="#3090FF" />
    <point size={8} color="#3090FF" />
    <interval expr={(emit, x, i, t) => {
          emit(x, 0);
          emit(x, -Math.sin(x + t));
        }} width={64} channels={2} items={2} />
    <vector end={true} width={5} color="#50A000" />
    <scale divide={10} />
    <ticks width={5} size={15} color="black" />
    <format digits={2} weight="bold" />
    <label color="red" zIndex={1} />
  </cartesian>
  <play target="cartesian" to={2} loop={true} pace={5} script={[{props: {range: [[-2, 2], [-1, 1]]}}, {props: {range: [[-4, 4], [-2, 2]]}}, {props: {range: [[-2, 2], [-1, 1]]}}]} />
</root>
```
