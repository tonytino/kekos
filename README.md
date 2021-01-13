# Kekos

Utility package used to easily apply key code support for key press events you'd like to potentially fire a callback in response to.
## Getting Started

```bash
npm i kekos
```

## Example Usage

```jsx
import React from "react";
import kekos from "@tonytino/kekos";
import "./App.css";

function App() {
  // Configure your kekos handler
  const onDeleteKeyDown = kekos({
    // Keys permitted to invoke the callback
    keys: ["Backspace"],
    // Callback to invoke
    callback: () => alert("Deleting the card. 🚮"),
  });

  // Pass kekos handler to React Keyboard Event API (e.g. onKeyDown)
  // https://reactjs.org/docs/events.html#keyboard-events
  return <div className="card" onKeyDown={onDeleteKeyDown} tabIndex="0" />;
}

export default App;
```
