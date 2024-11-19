import React, { useState, useRef } from 'react'
import "./LogIn.css"

const LogIn = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [cpf, setCpf] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const letterInputRef = useRef(null)


  return (
    <div className="login-container">
      <h1>Registre-se como pessoa Fisica</h1>
      <form>
        <label>
          Nome:
          <input type="text"
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          // ref={letterInputRef}
          />
        </label>
        <label>
          Idade:
          <input type="text"
          name='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Cpf:
          <input type="text"
          mask="999.999.999-99"
          name='cpf'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label>
          Endereço:
          <input type="text"
          name='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          E-Mail:
          <input type="email"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Telefone/Celular:
          <input type="text"
          mask="(99) 99999-9999"
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <input type="submit" value="Registrar"/>
        <p>
          Registre se como Pessoa juridica
          <a href="/pjregister"> Aqui</a>
        </p>
      </form>
     

    </div>
  )
}

export default LogIn