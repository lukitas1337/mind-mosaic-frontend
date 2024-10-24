import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navBar flex justify-between items-center px-10 py-6 border-[#1e1e1e] border-b-[1px]">
            <div>
                <p>
                    <Link
                        to="/"
                        className="text-2xl font-normal font-italiana border-[#1e1e1e]"
                    >
                        mind Mosaic
                    </Link>
                </p>
            </div>
            <ul className="navLinks text-base flex gap-5 font-monda border-[#1e1e1e]">
                <li>
                    <Link to="/" className="hover:text-gray-600">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/blogs" className="hover:text-gray-600">
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-gray-600">
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
