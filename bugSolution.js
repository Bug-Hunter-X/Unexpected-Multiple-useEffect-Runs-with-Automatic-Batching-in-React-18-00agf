```javascript
import { useState, useLayoutEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    // This effect runs after every render, synchronously after all DOM mutations.
    console.log('Component rendered with count:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```