import React from "react";
import CakeView from "./features/cake/CakeView";
import UserView from "./features/user/UserView";
import IceCreamView from "./features/icecream/IceCreamView";

function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
