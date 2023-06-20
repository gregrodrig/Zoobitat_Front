import React, { Component } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default class Encabezado extends Component {
  render() {
    const { titulo, info } = this.props;

    const handleGoBack = () => {
      window.history.back();
    };

    if (info == null) {
      return (
        <div>
          <header
            className="contacto-header"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="btn rounded-circle"
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  border: "none",
                  width: "40px",
                  height: "40px",
                }}
                onClick={handleGoBack}
              >
                <FaArrowLeft />
              </button>
              <h1
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginRight: "20px",
                }}
              >
                {titulo}
              </h1>
            </div>
          </header>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <header className="contacto-header">
            <h1 className="contacto-title">{titulo}</h1>
            <p className="contacto-description">{info}</p>
          </header>
          <br />
        </div>
      );
    }
  }
}
