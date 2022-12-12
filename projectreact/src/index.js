import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from "./login";
import Firstpage from "./firstpage";
import Signup from "./Signup";
import Home from "./home";
import Upload from "./upload";
import Forgotpassword from "./forgotpassword";

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Firstpage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Upload" element={<Upload/>}></Route>
            </Routes>
        </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);