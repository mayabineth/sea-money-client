import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Error from "./pages/Error";
import ProtectedRoute from "./ProtectedRoute";
import SharedLayout from "./pages/dashboard/SharedLayout";
import Movements from "./pages/dashboard/Movements";
import Connections from "./pages/dashboard/Connections";
import SystemMes from "./pages/dashboard/SystemMes";
import Assets from "./pages/dashboard/Assets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Movements />} />
          <Route path="assets" element={<Assets />} />
          <Route path="connections" element={<Connections />} />
          <Route path="system-messages" element={<SystemMes />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
