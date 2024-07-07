import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
function IceCreamView() {
  const [value, setvalue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice Creams -{numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(event) => setvalue(parseInt(event.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice Creams
      </button>
    </div>
  );
}

export default IceCreamView;
