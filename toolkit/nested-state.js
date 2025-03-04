const redux = require("redux");
const produce = require("immer").produce;
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const initialState = {
  name: "srb",
  address: {
    street: "121 main",
    city: "Barwani",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
