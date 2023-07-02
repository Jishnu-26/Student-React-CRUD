import { React } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
// import Home from "./Components/Home";
import Userlisting from "./Components/Userlisting";
import Adduser from "./Components/Adduser";
import Updateuser from "./Components/Updateuser";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className="text-2xl font-semibold pl-2 h-14  text-white bg-orange-400">
          <div className="pt-3">
          {/* <Link className="mr-2" to={"/"}>Home</Link> */}
          <Link to={"/user"}>User</Link>
          </div>
        </div>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route> */}
          <Route path="/user" element={<Userlisting></Userlisting>}></Route>
          <Route path="/user/add" element={<Adduser></Adduser>}></Route>
          <Route
            path="/user/edit/:id"
            element={<Updateuser></Updateuser>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className='' position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
