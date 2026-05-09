import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Forge from "./pages/Forge";
import Signal from "./pages/Signal";
import Discover from "./pages/Discover";
import PatchPage from "./pages/PatchPage";
import UserProfile from "./pages/UserProfile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forge" element={<Forge />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/user/:email" element={<UserProfile />} />
        <Route path="/patch/:patchId" element={<PatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}