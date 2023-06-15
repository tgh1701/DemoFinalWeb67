import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  const currentUser = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;
  const isAdmin = currentUser ? currentUser.isAdmin : false;

  return (
    <Router>
      {isAdmin && <Topbar />}
      <div className="container">
        {isAdmin && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAdmin && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
          <Route
            path="/"
            element={
              currentUser ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
