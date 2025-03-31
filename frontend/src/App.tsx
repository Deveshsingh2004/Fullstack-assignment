import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';

// function App() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//       {isLogin ? <Login /> : <SignUp />}
//       <button
//         onClick={() => setIsLogin(!isLogin)}
//         style={{
//           marginTop: '1rem',
//           padding: '0.5rem',
//           fontSize: '1rem',
//           backgroundColor: '#6c757d',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Switch to {isLogin ? 'Sign Up' : 'Login'}
//       </button>
//     </div>
//   );
// }

// export default App;



function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      {isLogin ? <Login /> : <SignUp />}
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: '2rem', padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default App;
