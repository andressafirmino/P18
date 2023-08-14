import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUpPage";
import SignIn from "./pages/SingInPage";
import HomePage from "./pages/HomePage";
import MePage from "./pages/MePage";
import AuthProvider from "./context/auth";
import AddPage from "./pages/AddPage";
import ProductById from "./pages/ProductById";
import CategoryPage from "./pages/CategoryPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/produto/:id" element={<ProductById />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/me" element={<MePage />} />
            <Route path="/adicionar" element={<AddPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  width: 100vw;
  height: 100%;
  background-color: #FFFFFF;
`


