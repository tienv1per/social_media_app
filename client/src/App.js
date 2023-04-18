import { useSelector } from "react-redux";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  console.log(user);
  return (
    <div className="App">
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user?<Navigate to = "home"/>:<Navigate to="Auth"/>}/>
            <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />}/>
            <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="../auth" />}/>
            <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
