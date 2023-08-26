# Inka

react logger.

concept:


## Example

index.ts

```ts
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InkaProvider>
      <App />
    </InkaProvider>
  </React.StrictMode>
);
```

output log

```tsx
import { InkaProvider } from 'inka';

const App = () => (
  const inka = useInka();

  return (
    <button onClick={() => {inka.info("hello")}}>click me</button>
  )
);
```


output jsx

```tsx
import { InkaProvider } from 'inka';

const App = () => (
  const inka = useInka();

  useEffect(() => {
    inka.jsx(<div>hello</div>);
  }, []);

  return (
    <>hello</>
  )
);
```