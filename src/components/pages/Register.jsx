import '../register/Register.css';
import axios from "axios";
import {useState} from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const clearInputs = () => {
    setName("");
    setAge("");
    setCpf("");
    setAddress("");
    setEmail("");
    setPhone("");
    ("Não verificado");
  };

  const validarCpf = async () => {
    try {
      const url = `https://api.invertexto.com/v1/validator?token=15763%7C3An2WSJwxe18y0whxntzgPyVpIsY6afK&value=${cpf}`;
      const response = await axios.get(url);
      if (response.data.valid) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro ao validar o CPF:", error);
      ("Erro na validação");      return false;
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

    console.log(formData );
    

    alert("Formulário enviado com sucesso!");
    clearInputs();
  };

  return (
    <div className="register">
      <h1>Crie sua conta</h1>
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
          Quer ser um fornecedor?
          <a href="/pjregister"> Clique aqui</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
