import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"

const Layout = ({admin, setAdmin}) => {
    return(
        <>
        <Navbar admin={admin} setAdmin={setAdmin}/>
        <Outlet/>
        </>
    )
}

export default Layout