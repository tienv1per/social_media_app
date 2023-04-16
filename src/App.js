import "./App.css"
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
        {/* <Home /> */}
        {/* <Profile/> */}
        <Auth/>
    </div>
  );
}

export default App;
