import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/hotellogo.png";
export default function Header() {
    return (
        <header className="shadow sticky top-0 z-50 bg-white">
            <nav className="px-4 lg:px-6 py-3">
                
                <div className="flex items-center justify-between max-w-screen-xl mx-auto">

                     {/* Logo */}
                    <Link to="/" className="flex items-center">
                 <img src={logo} className="h-12" alt="Logo" />
                     </Link>

                    {/* NAV LINKS (FIXED VISIBILITY) */}
                    <div className="flex space-x-6 text-lg font-medium">

                        <NavLink
                            to="/"
                            end
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                fontWeight: isActive ? "700" : "400"
                            })}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                fontWeight: isActive ? "700" : "400"
                            })}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                fontWeight: isActive ? "700" : "400"
                            })}
                        >
                            Contact
                        </NavLink>
                         <NavLink
                            to="/event"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                fontWeight: isActive ? "700" : "400"
                            })}
                        >
                            Event & Dining
                        </NavLink>

                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm border rounded"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/signup"
                            className="px-4 py-2 text-sm bg-orange-600 text-white rounded"
                        >
                            Sign up
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}