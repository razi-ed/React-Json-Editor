import React from "react";
import ReactDOM from "react-dom";
import JsonViewEdit from "./JsonEditor";
import Data from "./data";

function App() {
  const link_ = (
    <a href={"https://www.npmjs.com/package/react-json-view"} target={"_blank"}>
      ~~rjv~~
    </a>
  );
  return (
    <div>
      <h2>React Json Editor - made of &nbsp;{link_}</h2>
      <JsonViewEdit
        data={Data}
        style={{
          padding: "10px",
          borderRadius: "3px",
          margin: "10px 0px",
          minWidth: "300px"
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
