Kitbook can open Tools in either a popup or a [Document Picture-in-Picture](https://developer.chrome.com/docs/web-platform/document-picture-in-picture) window. When the window is opened, the `/tools` route will send a message that it's ready, at which point the currently selected component's details will be sent. When a different component is selected, it's details will also be sent to the same Tools window, updating its view.