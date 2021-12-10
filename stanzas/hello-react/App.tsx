import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const App = ({ sayTo }: { sayTo: string }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const handleClick = () => {
    increment();
  };

  return (
    <div>
      <p>
        Hello <i>{sayTo}</i>
      </p>
      <p>{count} time(s) clicked</p>
      <Button onClick={handleClick}>Click this</Button>
    </div>
  );
};

export default App;
