import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx'
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import LoginRegister from './components/CreateAccount.jsx/LoginRegister.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';
import OriginalPakistanWearPage from './pages/OriginalPakistanWearPage/OriginalPakistanWearPage.jsx';
import FileUpload from './components/FileUpload/FileUpload.jsx';
import { AuthProvider } from './Store/auth.jsx';
import Logout from './components/Logout/Logout.jsx';

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
        path: "/logout",
        element: <Logout/>,
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
  <AuthProvider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </AuthProvider>  
)
