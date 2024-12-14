var heading = React.createElement("h1", { id: "parent" }, "Hello React"); //1st args- elemt, 2nd args - atibutes, 3rd args - child element
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);