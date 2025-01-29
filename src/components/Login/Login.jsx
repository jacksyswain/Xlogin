// import {
//   Fragment,
//   useState,
// } from 'react';

// import {
//   Box,
//   Button,
//   Typography,
// } from '@mui/material';

// const Login = () => {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [error, setError] = useState(false);
//   const [login, setLogin] = useState(false);

//   const validate = () => {
//     if (form.username !== "user") {
//       setError(true);
//       return false;
//     }
//     if (form.password !== "password") {
//       setError(true);
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const handleForm = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log(form)
//       setLogin(true);
//     }
//   };

//   const handleValue = (e) => {
//     const { name, value } = e.target;
//     setError(false);
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

  
//   // useEffect(() => {
//   //   const timeoutId = setTimeout(() => setError(false), 4000);

//   //   return () => clearTimeout(timeoutId);
//   // }, [error]);

//   return (
//     <Fragment>
//       {!login ? (
//         <form onSubmit={handleForm}>
//           <Box display="flex" flexDirection="column" gap={2}>
//             {error && (
//               <Typography color="error" variant="body2">
//                 Invalid Username and password
//               </Typography>
//             )}
//             <label htmlFor="username">UserName:</label>
//             <input
//               id="username"
//               name="username"
//               value={form.username}
//               onChange={handleValue}
//               required
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleValue}
//               required
//             />
//             <Button type="submit" variant="contained" color="primary">
//               Submit
//             </Button>
//           </Box>
//         </form>
//       ) : (
//         <Fragment>
//           <Typography variant="h5">Welcome, user!</Typography>
//           <Button
//             onClick={() => {
//               setLogin(false);
//               setForm({ username: "", password: "" });
//             }}
//             variant="contained"
//             color="primary"
//           >
//             Logout
//           </Button>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const XLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [error,setError]=useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
  if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div >

    <h1>Login Page</h1>
    {message ? (<h3>{message}</h3>) : 
      <form onSubmit={handleSubmit}>
      {error && <p style={{ marginTop: "1rem" }}>{error}</p>}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
      }
    </div>
  );
};

export default XLogin;
