# Objective

This project was created to better understande the usage of ContextAPI and how it can solve the prop drilling problem.

It was created following [this](https://www.youtube.com/watch?v=FsCBw9X9U84&ab_channel=GuilhermeRodz) tutorial.

# App

The idea is to have two main components: `Counter` and `Mirror`.

The `Mirror` one, would basically mirror the behavior and the state managed by the `Counter`.

# Context

The idea behind it is to use the `useContext` React default API by exposing a hook (`useCount`).

This hook will be creating a context using the `createContext` from the React API lib by called: `CounterContext`.

This context will be used by another React component called `CountProvider` which would be using the `...Provider`, which would be exposing the `values`.
