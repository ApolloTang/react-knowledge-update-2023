import hmrComponent from './hmr-component'

const hmrContainer = document.createElement('div')
document.body.appendChild(hmrContainer);

let hmrElement = hmrComponent()
hmrContainer.appendChild(hmrElement)

if (module.hot) {
  module.hot.accept("./hmr-component.js", function () {
    console.log("Accepting the updated hot reloaded module!");
    hmrContainer.removeChild(hmrElement);
    hmrElement = hmrComponent(); // Re-render the "component" to update the click handler
    hmrContainer.appendChild(hmrElement);
  });
}
