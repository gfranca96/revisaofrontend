import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Representante from './pages/Representante'
import AcaoSocial from './pages/AcaoSocial'
import Parceiro from './pages/Parceiro'
import Erro404 from './pages/Erro404'
import Login from './pages/Login'
import Principal from './components/Principal'
import './App.css'



export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioID, setusuarioID] = useState();

  function handleLogin() {
    setLogado(true);
    setusuarioID(100);
  }

  function handleLogout() {
    setLogado(false);
    setusuarioID(null);
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          {logado ?
          <>
          <Route path="/" element={<Principal usuarioID={usuarioID}onLogout={handleLogout} />}>
            <Route index element={<Home />} />
            <Route path="representante" element={<Representante />}/>
            <Route path="parceiro" element={<Parceiro />}/> 
            <Route path="acaosocial/:id" element={<AcaoSocial />}/>
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

