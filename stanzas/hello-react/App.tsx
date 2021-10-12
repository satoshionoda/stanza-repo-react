import React, { useState } from "react";

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
      <button onClick={handleClick}>Click this</button>
    </div>
  );
};

export default App;
