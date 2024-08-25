import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import {createBrowserRouter, Outlet, Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/Layout';
import ThemeContextProvider from './context/ThemeContextProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]}]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
    
  );
}

export default App;
