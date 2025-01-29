import { useState } from 'react';

import Login from './components/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SeatSelection /> */}
    <Login />
    </>
  )
}

export default App
