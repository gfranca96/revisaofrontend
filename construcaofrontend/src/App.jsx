import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Representante from './pages/Representante'
import AcaoSocial from './pages/AcaoSocial'
import Parceiro from './pages/Parceiro'
import Erro404 from './pages/Erro404'
import Login from './pages/Login'
import Principal from './components/Principal'
import './App.css'
import UserContext from './contexts/UserContext'
import Perfil from './pages/Perfil'
import NovoForm from './pages/NovoForm'
import HomeList from './pages/HomeList'
import Editar from './pages/Editar'



export default function App() {
  const { logado } = useContext(UserContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {logado ?
          <>
          <Route path="/" element={<Principal />}>
            <Route index element={<Home />} />
            <Route path="perfil/:id" element={<Perfil />} />
            <Route path="editar/:key" element={<Editar />} />
            <Route path="tarefas" element={<NovoForm />} />
            <Route path="listatarefas" element={<HomeList />}/>
            <Route path="parceiro" element={<Parceiro />}/> 
            <Route path="acaosocial/:id" element={<AcaoSocial />}/>
          </Route>
          </>
          :
        <Route index element={<Login />}/>
        }
        <Route path="*" element={<Erro404 />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

