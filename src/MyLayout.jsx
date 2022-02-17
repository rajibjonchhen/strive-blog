import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./components/footer";

const MyLayout = ({children}) => {
return(<>
<Navbar/>
{children}
<Footer/>
</>)
}
export default MyLayout