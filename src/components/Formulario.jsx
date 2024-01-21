import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function Formulario({ setAlert }) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const VALIDATE_EMAIL =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const validateForm = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      setAlert({
        error: true,
        msg: "Las contraseñas no coinciden !",
        color: "warning",
      });
      return;
    }
    if (name === "" || email === "" || password === "" || repassword === "") {
      setAlert({
        error: true,
        msg: "Completa todos los campos!",
        color: "danger",
      });
      return;
    }
    if (!VALIDATE_EMAIL.test(email)) {
      setAlert({
        error: true,
        msg: "El email debe tener el formato correcto!",
        color: "danger",
      });
      return;
    }
    setAlert({
      error: false,
      msg: "Cuenta creada existosamente !",
      color: "success",
    });
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
    return;
  };
  return (
    <>
      <Form onSubmit={validateForm} noValidate>
        <Form.Control
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nombre"
        />
        <Form.Control
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="tu@email.com"
        />
        <Form.Control
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Contraseña"
        />
        <Form.Control
          type="password"
          id="repassword"
          onChange={(e) => setRePassword(e.target.value)}
          value={repassword}
          placeholder="Confirma tu contraseña"
        />
        <Button className="button" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}
export default Formulario;
