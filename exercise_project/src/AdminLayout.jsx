import { Outlet } from "react-router-dom"
import AdminNavbar from "./components/admin/AdminNavbar"

const AdminLayout = (setAdmin) => {
    return(
        <>
        <AdminNavbar setAdmin={setAdmin}/>
        <Outlet/>
        </>
    )
}

export default AdminLayout