import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout> <p>Home Page</p></Layout>} />
        <Route path="/search" element={<Layout> <p>Sign In Page</p></Layout>} />
        <Route path="/sign-in" element={<Layout> <SignIn /> </Layout>} />
        <Route path="/register" element={<Layout> <Register /> </Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
