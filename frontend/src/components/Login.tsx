// import { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setMessage(null); // Clear previous messages

//     try {
//       const response = await axios.post('http://localhost:3000/user/login', { email, password });
//       setMessage(`Login successful! Welcome back, ${response.data.user.email}`);
//     } catch (error: any) {
//       if (error.response && error.response.status === 401) {
//         setMessage('Invalid email or password.');
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
//         height: '100vh', // Full height of the viewport
//         backgroundColor: '#f7f9fc',
//         padding: '2rem', // Padding around the container
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '300px',
//           width: '30%',
//           padding: '2rem',
//           textAlign: 'center',
//           backgroundColor: 'white', // Optional card background
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow
//           borderRadius: '8px', // Optional border radius
//           margin: '1rem', // Margin between card and outer container
//         }}
//       >
//         <h1 style={{ marginBottom: '3rem' }}>Welcome back!</h1>
//         <form
//           onSubmit={handleSubmit}
//           style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
//         >
//           <input
//             type="email"
//             placeholder="UID"
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
//             Login
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

// export default Login;
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

// Define the schema using Zod
const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:3000/user/login', data);
      alert(`Login successful! Welcome back, ${response.data.user.email}`);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password.');
      } else if (error.response && error.response.status === 400) {
        alert('Email and password are required.');
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full height of the viewport
        backgroundColor: '#f7f9fc',
        padding: '2rem', // Padding around the container
      }}
    >
      <div
        style={{
          maxWidth: '300px',
          width: '30%',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: 'white', // Optional card background
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow
          borderRadius: '8px', // Optional border radius
          margin: '1rem', // Margin between card and outer container
        }}
      >
        <h1 style={{ marginBottom: '3rem' }}>Welcome back!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="email"
            placeholder="UID"
            {...register('email')}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '0.5rem',
            }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '0.5rem',
            }}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.password.message}</p>
          )}

          <button
            type="submit"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: '#2B3A67',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
