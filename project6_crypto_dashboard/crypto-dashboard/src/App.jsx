import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction.jsx'
import Support from './pages/Support/Support.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
{
path: "/",
element: <Dashboard />,
},

{
  path: "/transactions",
  element: <Transaction />
},

{
  path: "/support",
  element: <Support />
}
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
       {/* <Dashboard /> */}
    </>
  )
}

export default App