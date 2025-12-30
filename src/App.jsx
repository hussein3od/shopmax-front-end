import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Details from "./pages/details";
import AboutUs from "./pages/aboutUs";
import Cart from "./pages/cart";
import Contact from "./pages/contact";

function App() {
  const auth = localStorage.getItem("auth") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/home" replace /> : <Landing />} />
        
        <Route path="/login" element={auth ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/signup" element={auth ? <Navigate to="/home" replace /> : <Signup />} />

        <Route path="/home" element={<ProtectedRoute auth={auth}><Home /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute auth={auth}><Cart /></ProtectedRoute>} />

        <Route path="/details/:id" element={<Details />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
