import React from "react";
import Tasks from "./components/Tasks";
import StoreContext from "./context/storeContext";
import store from "./store/store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
