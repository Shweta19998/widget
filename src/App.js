import logo from "./logo.svg";

import "./App.css";
import Modal from "react-modal";
import React, { useState } from "react";
import "./Style.css";
import img from "./Images/bg-img.jpg";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  if (modalIsOpen) {
    return (
      // widget
      <div className="App">
        <Modal
          className="formWidget"
          isOpen={modalIsOpen}
          style={{
            overlay: {
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "1900px 1200px",
            },
          }}
        >
          <h1 className="form-text">Form</h1>
          <div className="form-div">
            <h2>Please Upload your Aadhaar Card</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-credit-card-2-front-fill card-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
            </svg>
            <p className="form-para">Click the button below to upload </p>
          </div>
          {/* form */}
          <form>
            <input
              className="btn btn-dark"
              type="file"
              name="picture"
              id="choosefile"
            ></input>

            <label className="button-style1" for="choosefile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2-square select-icon"
                viewBox="0 0 16 16"
              >
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              Select File to Upload{" "}
            </label>
            <button
              className="button-style2 btn btn-dark"
              onClick={() => setModalIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-upload upload-icon"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
              Upload
            </button>
          </form>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1> congratulation File Uploaded successfully</h1>
      </div>
    );
  }
}

export default App;
