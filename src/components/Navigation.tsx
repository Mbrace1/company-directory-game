
import { Link } from "react-router"

type Props = {}

export default function Navigation({}: Props) {
  return (
    <header className="top-0 left-0 absolute z-index-2 w-full bg-amber-50 p-6">
        <nav className="flex flex-row justify-between">
            <li>
                <Link to="/">Home</Link>
            </li>
            <ul className="flex flex-row justify-around">
                <li className="px-4">
                    <Link to="/people">People</Link>
                </li>
                <li className="px-4">
                    <Link to="/departments">Departments</Link>
                </li>
                <li className="px-4">
                    <Link to="/locations">Locations</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}