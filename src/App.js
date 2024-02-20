import logo from './logo.svg';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './Pages/Shop';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Shop/>
    }
  ])
  return (
    <div className=''>
      <Navbar/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
