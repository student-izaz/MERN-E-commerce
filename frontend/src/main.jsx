import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx'
import Main from './pages/Main.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import LoginRegister from './components/CreateAccount.jsx/LoginRegister.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';
// import OriginalPakistanWear from './pages/OriginalPakistanWearPage/OriginalPakistanWearPage.jsx';
import OriginalPakistanWearPage from './pages/OriginalPakistanWearPage/OriginalPakistanWearPage.jsx';
import FileUpload from './components/FileUpload/FileUpload.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CategoryList />,
      },
      {
        path: "/",
        element: <CategoryList />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/my-account",
        element: <LoginRegister/>
      },
      {
        path: "/product/:productId",
        element: <SingleProductPage/>
      },
      {
        path: "/product-category/original_pakistan_wear",
        element: <OriginalPakistanWearPage/>
      },
      {
        path: "/file-upload",
        element: <FileUpload/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
