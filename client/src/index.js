import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './reducers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './components/login/Login'
import { Registration } from './components/registration/Registration'

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'registration',
            element: <Registration />
         },
      ],
   },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
)

