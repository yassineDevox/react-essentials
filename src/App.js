import React, { useState } from "react";
import Child from "./components/child";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Child /> : null}
      <button onClick={() => setShow(false)}>kill</button>
    </>
  );
};

export default App;
