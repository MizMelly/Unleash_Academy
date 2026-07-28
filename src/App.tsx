import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import Events from "./components/pages/Events";
import Resources from "./components/pages/Resources";
import Contact from "./components/pages/Contact";

import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Intentions from "./components/pages/auth/Intentions";

import Dashboard from "./components/pages/dashboard/Dashboard";
import Lesson from "./components/pages/Lesson";

import ProtectedRoute from "./components/dashboard/ProtectedRoute";

// Admin Pages
import AdminDashboard from "./components/pages/admin/Dashboard";
import Courses from "./components/pages/admin/Courses";
import Students from "./components/pages/admin/Students";


function App() {
  return (
    <Routes>
      {/* ================= Public ================= */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= Student ================= */}

      <Route element={<ProtectedRoute />}>
        <Route path="/intentions" element={<Intentions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lesson/:id" element={<Lesson />} />
      </Route>

      {/* ================= Admin ================= */}

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;