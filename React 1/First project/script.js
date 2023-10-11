
// Defining a location in HTML (like a div with an ID of "root") where React application will be attached.
const rootElement = document.getElementById("root")

// React and React.createElement
const element = React.createElement("div", {
className: "container",
children: "You are welcome!",
})

// ReactDOM and ReactDOM.render
const reactRoot = ReactDOM.createRoot(rootElement)

reactRoot.render(element)
