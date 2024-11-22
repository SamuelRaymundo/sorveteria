import React, { useState } from "react";
import axios from "axios";

const Pjregister = () => {
  const [name, setName] = useState("");
  const [tipoEmpresa, setTipoEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusCnpj, setStatusCnpj] = useState("Não verificado");

  const clearInputs = () => {
    setName("");
    setTipoEmpresa("");
    setCnpj("");
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

    if (!name || !tipoEmpresa|| !cnpj || !address || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
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

    const formData = {
        name,
        tipoEmpresa,
        cnpj,
        address,
        email,
        phone
    }

    console.log(formData);
    

    alert("Formulário enviado com sucesso!");
    clearInputs();
  };

  return (
    <div className="register">
      <h1>Seja um fornecedor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
            <span>Tipo da Empresa:</span>
            <select name="tipoEmpresa"
            onChange={(e) => setTipoEmpresa(e.target.value)}
            value={tipoEmpresa}>
                <option value="MEI">MEI</option>
                <option value="LTDA">LTDA</option>
                <option value="SS">SS</option>
                <option value="SA">SA</option>
            </select>
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
          É um cliente?
          <a href="/pfregister"> Clique aqui</a>
        </p>
      </form>
    </div>
  );
};

export default Pjregister;
