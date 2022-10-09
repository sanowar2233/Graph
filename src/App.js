import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Grandpa from './Components/Grandpa/Grandpa';
import Graph from './Components/Graph/Graph';

function App() {
  const router=createBrowserRouter([
    {path:'/', element: <Main></Main> ,children:([
      {path:'/home',
      loader:()=>fetch('tshirt.json'),
       element:<Home></Home>},
       {
        path:'/grandpa',element:<Grandpa></Grandpa>
       },
       {path:'/graph',element:<Graph></Graph>}
    ])}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
