import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let deferredPrompt: any; // Allows to show the install prompt
  let setupButton: any;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (setupButton == undefined) {
      setupButton = document.getElementById("setup_button");
    }
    // Show the setup button
    setupButton.style.display = "inline";
    setupButton.disabled = false;
  });

  function installApp() {
    // Show the prompt
    deferredPrompt.prompt();
    setupButton.disabled = true;
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("PWA setup accepted");
        // hide our user interface that shows our A2HS button
        setupButton.style.display = "none";
      } else {
        console.log("PWA setup rejected");
      }
      deferredPrompt = null;
    });
  }

  return (
    <div className="App">
      {/* <button
        id="setup_button"
        style={{ display: "none" }}
        onClick={installApp}
      >
        Instalar App
      </button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
