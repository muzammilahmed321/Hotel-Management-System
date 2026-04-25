import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Head";
import Footer from "./Component/Header/Footer/Footer";

export default function Layout() {
    return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>  
        </>
    );
}