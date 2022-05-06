import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/auth";
import { Private } from "./components/Private";

const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                <Route  exact path="/login" element={<Login/>}/> 
                <Route  exact path="/" element=
                {<Private><Home /></Private>}/> 
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;