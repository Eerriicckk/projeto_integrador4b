import React, { useState } from 'react';

const Cadastro = () => {
  const [form, setForm] = useState({
    nomeCompleto: '',
    telefone: '',
    endereco: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert('Voluntário cadastrado');
    setForm({
      nomeCompleto: '',
      telefone: '',
      endereco: '',
    });
  };

  const isFormValid = form.nomeCompleto && form.telefone && form.endereco;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="nomeCompleto">1.Nome Completo</label>
          <input
            style={styles.input}
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            placeholder="Digite seu nome completo"
            value={form.nomeCompleto}
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="telefone">2.Telefone</label>
          <input
            style={styles.input}
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            value={form.telefone}
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="endereco">3.Endereço</label>
          <input
            style={styles.input}
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Digite seu endereço"
            value={form.endereco}
            onChange={handleChange}
          />
        </div>
        <button
          style={isFormValid ? styles.button : styles.buttonDisabled}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url('/imagens/fundo_cadastros.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '400px', 
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%', 
    textAlign: 'left', 
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: '100%', 
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box', 
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px', 
  },
  buttonDisabled: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
    marginTop: '20px', 
  },
};

export default Cadastro;
