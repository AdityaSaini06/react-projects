import UserContextProvider from "./context/userContextProvider"


function App() {
  
  return (
    <UserContextProvider>
      <h1>HELLO WORLD</h1>
    </UserContextProvider>
  )
}

export default App
