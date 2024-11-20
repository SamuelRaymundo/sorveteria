import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusCpf, setStatusCpf] = useState("Não verificado");

  const clearInputs = () => {
    setName("");
    setAge("");
    setCpf("");
    setAddress("");
    setEmail("");
    setPhone("");
    setStatusCpf("Não verificado");
  };

  const validarCpf = async () => {
    try {
      const url = `https://api.invertexto.com/v1/validator?token=15763%7C3An2WSJwxe18y0whxntzgPyVpIsY6afK&value=${cpf}`;
      const response = await axios.get(url);
      if (response.data.valid) {
        setStatusCpf("Válido");
        return true;
      } else {
        setStatusCpf("Inválido");
        return false;
      }
    } catch (error) {
      console.error("Erro ao validar o CPF:", error);
      setStatusCpf("Erro na validação");
      return false;
    }
  };

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age || !cpf || !address || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (isNaN(age) || age <= 0) {
      alert("Idade deve ser um número positivo.");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      alert("Telefone deve conter apenas números.");
      return;
    }

    if (!validarEmail(email)) {
      alert("E-mail inválido. Por favor, insira um e-mail válido.");
      return;
    }

    const isCpfValid = await validarCpf();
    if (!isCpfValid) {
      alert("CPF inválido. Por favor, verifique os dados.");
      return;
    }

    const formData = {
      name,
      age,
      cpf,
      address,
      email,
      phone
    }

    alert("Formulário enviado com sucesso!");
    clearInputs();
  };

  return (
    <div className="login-container">
      <h1>Registre-se como Pessoa Física</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Idade:
          <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </label>
        <label>
          Endereço:
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Telefone/Celular:
          <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <input type="submit" value="Registrar" />
        <p>
          Registre-se como Pessoa Jurídica
          <a href="/pjregister"> Aqui</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
