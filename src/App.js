import logo from './PHOTO-2023-08-17-22-37-40.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
      </header>
    </div>
  );
}

export default App;
