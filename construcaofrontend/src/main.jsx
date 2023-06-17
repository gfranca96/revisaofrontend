import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { UserContextProvider } from './contexts/UserContext'
import { TaskContextProvider } from './contexts/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
