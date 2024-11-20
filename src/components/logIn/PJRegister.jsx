import React, { useState } from "react";
import axios from "axios";

const PJRegister = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusCnpj, setStatusCnpj] = useState("Não verificado");

  const clearInputs = () => {
    setName("");
    setAge("");
    setCpf("");
    setAddress("");
    setEmail("");
    setPhone("");
    setStatusCnpj("Não verificado");
  };

  const validarCnpj = async () => {
    try {
      const url = `https://api.invertexto.com/v1/validator?token=15763%7C3An2WSJwxe18y0whxntzgPyVpIsY6afK&value=${cnpj}`;
      const response = await axios.get(url);
      if (response.data.valid) {
        setStatusCnpj("Válido");
        return true;
      } else {
        setStatusCnpj("Inválido");
        return false;
      }
    } catch (error) {
      console.error("Erro ao validar o CPF:", error);
      setStatusCnpj("Erro na validação");
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

    const isCpfValid = await validarCnpj();
    if (!isCpfValid) {
      alert("CNPJ inválido. Por favor, verifique os dados.");
      return;
    }

    alert("Formulário enviado com sucesso!");
    clearInputs();
  };

  return (
    <div className="login-container">
      <h1>Registre-se como Pessoa Juridica</h1>
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
          CNPJ:
          <input type="text" name="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
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
          Registre-se como Pessoa Fisica
          <a href="/register"> Aqui</a>
        </p>
      </form>
    </div>
  );
};

export default PJRegister;
