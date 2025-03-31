// import { useState } from 'react';
// import axios from 'axios';
// import { z } from 'zod';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState<string | null>(null);

//   // Define Zod schema for validation
//   const signUpSchema = z.object({
//     email: z.string().email({ message: 'Invalid email address.' }),
//     password: z
//       .string()
//       .min(6, { message: 'Password must be at least 6 characters long.' }),
//   });

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setMessage(null); // Clear previous messages

//     try {
//       // Validate input using Zod
//       const validatedData = signUpSchema.parse({ email, password });

//       // If validation succeeds, send the data to the server
//       const response = await axios.post('http://localhost:3000/user/register', validatedData);
//       setMessage(`User created successfully! ID: ${response.data.id}`);
//     } catch (error: any) {
//       // Handle Zod validation errors
//       if (error instanceof z.ZodError) {
//         setMessage(error.errors[0]?.message || 'Validation failed.');
//       } 
//       // Handle server errors
//       else if (error.response && error.response.status === 409) {
//         setMessage('User with this email already exists.');
//       } else if (error.response && error.response.status === 400) {
//         setMessage('Email and password are required.');
//       } else {
//         setMessage('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: '#f7f9fc',
//         padding: '2rem',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '300px',
//           width: '30%',
//           padding: '2rem',
//           textAlign: 'center',
//           backgroundColor: 'white',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           borderRadius: '8px',
//           margin: '1rem',
//         }}
//       >
//         <h1 style={{ marginBottom: '3rem' }}>Sign Up</h1>
//         <form
//           onSubmit={handleSubmit}
//           style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
//         >
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               padding: '0.75rem',
//               fontSize: '1rem',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginBottom: '0.5rem',
//             }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               padding: '0.75rem',
//               fontSize: '1rem',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginBottom: '0.5rem',
//             }}
//           />
//           <button
//             type="submit"
//             style={{
//               padding: '0.75rem',
//               fontSize: '1rem',
//               backgroundColor: '#2B3A67',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               marginTop: '1rem',
//             }}
//           >
//             Register
//           </button>
//         </form>
//         {message && (
//           <p
//             style={{
//               marginTop: '1.5rem',
//               color: 'red',
//               padding: '0.5rem',
//               backgroundColor: '#ffe6e6',
//               borderRadius: '4px',
//             }}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SignUp;



import { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const signUpSchema = z.object({
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    try {
      const validatedData = signUpSchema.parse({ email, password });
      const response = await axios.post('http://localhost:3000/user/register', validatedData);
      setMessage(`User created successfully! ID: ${response.data.id}`);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        setMessage(error.errors[0]?.message || 'Validation failed.');
      } else if (error.response) {
        const status = error.response.status;
        if (status === 409) setMessage('User with this email already exists.');
        else if (status === 400) setMessage('Email and password are required.');
        else setMessage('An unexpected error occurred. Please try again.');
      } else {
        setMessage('Network error. Please check your internet connection.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f9fc', padding: '2rem' }}>
      <div style={{ maxWidth: '300px', width: '30%', padding: '2rem', textAlign: 'center', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', margin: '1rem' }}>
        <h1 style={{ marginBottom: '3rem' }}>Sign Up</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.75rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '0.5rem' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.75rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '0.5rem' }}
          />
          <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', backgroundColor: '#2B3A67', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>
            Register
          </button>
        </form>
        {message && <p style={{ marginTop: '1.5rem', color: 'red', padding: '0.5rem', backgroundColor: '#ffe6e6', borderRadius: '4px' }}>{message}</p>}
      </div>
    </div>
  );
}

export default SignUp;
