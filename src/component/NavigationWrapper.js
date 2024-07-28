import { Outlet } from "react-router-dom";
import Navbar from "./MainNavigation";
const NavigationWrapper=()=>{
    return(<>
    <Navbar/>
    <Outlet/>
    </>)
}
export default NavigationWrapper