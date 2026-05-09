import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Landing from "./pages/Landing";
import Home from "./features/posts/Home";
import Dashboard from "./features/patches/Dashboard";
import Profile from "./features/users/Profile";
import Forge from "./pages/Forge";
import Signal from "./features/posts/Signal";
import Discover from "./features/posts/Discover";
import PatchPage from "./features/patches/PatchPage";
import UserProfile from "./features/users/UserProfile";


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