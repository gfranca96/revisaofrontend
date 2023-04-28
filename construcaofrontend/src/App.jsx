import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Sobre from './pages/Sobre'
import Novo from './pages/Novo'
import Erro404 from './pages/Erro404'
import Login from './pages/Login'
import Principal from './components/Principal'


export default function App() {
  const [logado, setLogado] = useState(false);

  function handleLogin() {
    setLogado(true);
  }

  function handleLogout() {
    setLogado(false);
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          {logado ?
          <>
          <Route path="/" element={<Principal onLogout={handleLogout} />}>
            <Route index element={<Home />} />
            <Route path="pedidos" element={<Pedidos />}/>
            <Route path="novo" element={<Novo />}/> 
            <Route path="sobre" element={<Sobre />}/>
            </Route>
          </>
          :
        <Route path="/Login" element={<Login onLogin={handleLogin} />}/>
        }
        <Route path="*" element={<Erro404 />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

