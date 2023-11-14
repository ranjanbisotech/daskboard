// import React, { useState } from 'react';
// import './Login.css';
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

// export const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://10.11.12.122:8000/PortalWork-0.0.1-SNAPSHOT/Bisotech_India/acquiring/PortalLogin/V1', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });

//       const data = await response.json();
//       setResponseMessage(data.message);
//       console.log('Response Data:', data);
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage('An error occurred during login.');
//     }
//   };

//   return (
//     <section>
//       <form>
//         <h1>Login</h1>
//         <div className="inputbox">
//           <ion-icon name="mail-outline"></ion-icon>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//           <label>User Name</label>
//         </div>
//         <div className="inputbox">
//           <ion-icon name="lock-closed-outline"></ion-icon>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <label>Password</label>
//         </div>
//         <div className="forget">
//           <label>
//             <input type="checkbox" />Remember Me
//           </label>
//           <a href="#">Forget Password</a>
//         </div>
//         <button type="button" onClick={handleLogin}>
//           Log in
//         </button> 
//         {responseMessage && <div>{responseMessage}</div>}
//       </form>
//     </section>
//   );
// };










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.11.12.122:8000/PortalWork-0.0.1-SNAPSHOT/Bisotech_India/acquiring/PortalLogin/V1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok && data.authenticated) {
        navigate('/home'); // Redirect to the Home component route
      } else {
        alert('Wrong username or password'); // Show an alert for incorrect credentials
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred during login.');
    }
  };

  return (
    <section>
      <form>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label>User Name</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />Remember Me
          </label>
          <a href="#">Forget Password</a>
        </div>
        <button type="button" onClick={handleLogin}>
          Log in
        </button> 
        {responseMessage && <div>{responseMessage}</div>}
      </form>
    </section>
  );
};