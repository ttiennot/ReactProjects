import React, { useState } from 'react';
import './LoginForm.css'; // Assurez-vous d'importer le fichier de style CSS correspondant

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (password === '1234') {
      setErrorMessage('Vous êtes connecté');
    } else if (password === '') {
      setErrorMessage('Entrez un mot de passe');
    } else {
      setErrorMessage('Mot de passe incorrect');
    }
  };

  // Condition pour déterminer la classe CSS en fonction du mot de passe et de la soumission du formulaire
  const containerClassName = formSubmitted && password === '1234' ? 'red-container' : '';

  return (
    <div className={containerClassName}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login :</label>
          <input type="text" value={login} onChange={handleLoginChange} required />
        </div>
        <div>
          <label>Password :</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <button type="submit">Se connecter</button>
        </div>
      </form>
      <div>{errorMessage && <div>{errorMessage}</div>}</div>
    </div>
  );
}

export default LoginForm;
