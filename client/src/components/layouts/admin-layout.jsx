import { NavLink, Outlet, Navigate } from "react-router-dom"
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { useAuth } from "../../store/auth"

const AdminLayout = () => {

  const {user, isLoading} =useAuth();

  if(isLoading) {
    return <h1>Laoding...</h1>
  }
  
  if(!user.isAdmin){
    return <Navigate to="/" />; 
  }


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Admin Panel
          </h1>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            <NavItem to="/admin/users" icon={<FaUser />} text="Users" />
            <NavItem to="/admin/contacts" icon={<FaMessage />} text="Contacts" />
            <NavItem to="/service" icon={<FaRegListAlt />} text="Services" />
            <NavItem to="/" icon={<FaHome />} text="Home" />
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

const NavItem = ({ to, icon, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 ${
          isActive ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600" : ""
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      {text}
    </NavLink>
  </li>
)

export default AdminLayout

