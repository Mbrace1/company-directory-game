
import { NavLink } from "react-router"

type Props = {}

export default function Navigation({}: Props) {
  return (
    <header className="top-0 left-0 absolute z-index-2 w-full bg-amber-50 p-4 h-16">
        <nav className="flex flex-row justify-between">
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"}>
                    Home
                </NavLink>
            </li>
            <ul className="flex flex-row justify-around">
                <li className="px-4">
                <NavLink to="/people" className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"}>
                    People
                </NavLink>
                </li>
                <li className="px-4">
                <NavLink to="/departments" className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"}>
                    Departments
                </NavLink>
                </li>
                <li className="px-4">
                <NavLink to="/locations" className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"}>
                    Locations
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}