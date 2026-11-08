import { Outlet, RouterProvider } from "react-router";
import Header from "./Commponent/Header";
import Router from "./router/router";
import Footer from "./Commponent/Footer";


const App = () => {
  return ( 
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
   );
}
 
export default App;