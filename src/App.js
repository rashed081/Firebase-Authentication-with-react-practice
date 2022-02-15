import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Shipping from "./Components/Shipping/Shipping";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Private Route/PrivateRoute";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/shipping"
            element={
              <PrivateRoute>
                <Shipping />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/place-order"
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
