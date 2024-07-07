const store = require("./app/store");
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

const fetchUsers = require("./features/user/userSlice").fetchUsers;
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(5));

// unsubscribe();
