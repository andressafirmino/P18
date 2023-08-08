import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUpPage";
import SignIn from "./pages/SingInPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
`


