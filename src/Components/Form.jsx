import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // formulario |lo mismo que hace dos semanas|
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // send
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // <<<>>>
    if (name.length <= 5) {
      setError("El nombre completo debe tener mas de 5 caracteres.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Por favor ingresa un email valido.");
      return;
    }

    // pos++
    setError("");
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes via mail`);
    setFormData({ name: "", email: "" }); // clean
  };

  return (
    <div>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
