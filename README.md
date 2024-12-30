# Unexpected useEffect Runs in React 18

This repository demonstrates a subtle bug related to React 18's automatic batching of state updates. In the `bug.js` file, you'll find a component where a `useEffect` hook unexpectedly runs multiple times, even though the state updates only once.

The `bugSolution.js` file shows how to resolve this issue by leveraging React's `useLayoutEffect` hook when necessary to guarantee that effects run after layout operations.

## Setup

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

## Solution

The solution is to use `useLayoutEffect` instead of `useEffect`. `useLayoutEffect` is a variation of `useEffect` that runs synchronously after all DOM mutations.  This ensures the effect is triggered appropriately after layout operations related to state updates complete.

## Additional Considerations

This issue highlights the importance of understanding React's automatic batching mechanism. While it usually improves performance, it can lead to unexpected behavior in some cases. It is crucial to carefully consider the timing of side effects and state updates, especially in components with complex state interactions.