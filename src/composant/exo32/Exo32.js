import React, { useState } from 'react';
import Enfant from './Enfant';
function Exo32() {
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

  return (
    <div>
      {/* Rend le composant Enfant avec la valeur de formSubmitted */}
      <Enfant formSubmitted={formSubmitted} />
      
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

export default Exo32;
