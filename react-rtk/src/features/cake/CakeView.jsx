import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
function CakeView() {
  const [value, setvalue] = useState(1);
  // state cake reducer(key) property
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(event) => setvalue(parseInt(event.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
    </div>
  );
}

export default CakeView;
