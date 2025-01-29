
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();

     
      setError({ username: '', password: '', general: '' });

      let isValid = true;
      let newError = { username: '', password: '', general: '' };

      
      if (!username.trim()) {
          newError.username = 'Username is required!';
          isValid = false;
      }
      if (!password.trim()) {
          newError.password = 'Password is required!';
          isValid = false;
      }

      
      if (!isValid) {
          setError(newError);
          return;
      }

     
      if (username === 'user' && password === 'password') {
          setIsLoggedIn(true); 
      } else {
          setError({ ...newError, general: 'Invalid username or password' });
      }
    };

   

    return (
        <div >
            {isLoggedIn ? (
                // If logged in, show Welcome message
                <div >
                  <h1>Login Page</h1>
                    <h2>Welcome, user</h2>
                    
                </div>
            ) : (
                
                <form onSubmit={handleSubmit} >
                    <h1>Login Page</h1>
                    {error && <div >{error}</div>}
                    <br></br>
                    <div >
                        <label htmlFor="username" >Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
                            placeholder="Username"
                        />
                    </div>

                    <div >
                        <label htmlFor="password" >Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                           
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" >Submit</button>

                    
                </form>
            )}
        </div>
    );
}

export default App;
