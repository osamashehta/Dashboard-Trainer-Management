import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Course from "./pages/Course";
import Trainer from "./pages/Trainer";
import NotFound from "./pages/NotFound";
import CourseDetails from "./pages/CourseDetails";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Course />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:details"
            element={
              <ProtectedRoute>
                <CourseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainers"
            element={
              <ProtectedRoute>
                <Trainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
