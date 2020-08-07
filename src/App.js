import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

function App() {
  const { triggerUserAction } = useStoreActions((actions) => actions.user);

  useEffect(() => {
    triggerUserAction();
  }, []);
  return (
    <div className="App">
      <h1>hi there</h1>
    </div>
  );
}

export default App;
