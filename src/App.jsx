import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUpPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        
          <Routes>
            <Route path="/signup" element={<SignUp />} />
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


