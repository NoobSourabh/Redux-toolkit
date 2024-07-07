import React from "react";

function App() {
  return (
    <>
      <div className="bg-slate-300 h-screen">
        <div className="flex justify-center pt-40 ">
          <div className="bg-gray-50 p-4  rounded-lg text-center">
            <h1 className="font-bold">Counter</h1>
            <div className="flex p-4 m-4">
              <button className="px-4 bg-blue-400 rounded-2xl mx-2 ">+</button>
              <button className="px-4 bg-blue-400 rounded-2xl mx-2">-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
