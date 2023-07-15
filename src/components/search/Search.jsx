import React from "react";
import { Form } from "react-bootstrap";

export default function Search() {
  return (
    <div className="main">
      <header className="page-header">
        <h1 className="page-title"> Animales </h1>
        <p className="page-description">
          {" "}
          Paragraph lorem ipsum dolor inline text link sit amet consectetuer
          adispicing elit.
        </p>
      </header>
      <Form.Group className="mb-3" controlId="formGroupFilter">
        <Form.Select
          style={{
            backgroundColor: "white",
            height: "55px",
            width: "98%",
            marginLeft: "20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
          aria-label="Filtrar Por"
        >
          <option>Filtrar por</option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupSelecionne">
        <Form.Select
          style={{
            backgroundColor: "#EBEBEB",
            height: "55px",
            width: "98%",
            marginLeft: "20px",
            marginTop: "-10px",
            borderRadius: "5px",
          }}
          aria-label="Filtrar Por"
        >
          <option className="select-option" value="">
            Seleccione{" "}
          </option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}
