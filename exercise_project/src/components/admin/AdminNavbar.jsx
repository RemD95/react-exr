
const AdminNavbar = (setAdmin) => {
    return (
        <nav>
            <div>
                <Link to="/">Admin Home</Link>
            </div>
            <button onClick={()=>{setAdmin(false)}}>logOut</button>
        </nav>
    )
}

export default AdminNavbar