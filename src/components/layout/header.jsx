import { useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Search,
    Heart,
    ShoppingCart,
    Menu, //for mobile view
    X
} from "lucide-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [

        {label: "Home", path: "/"},
        {label: "Shop", path: "/shop"},
        {label: "About", path: "/about"},
        {label: "Contact", path: "/contact"}
    
    ];

    return (
        <header className= "relative bg-elara-header">
            <div className="mx-auto flex min-h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-12">

                {/* Logo */}
                <NavLink to="/" className="text-sm tracking-[0.08em]">Elara Living</NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-[11px] uppercase tracking-wide transition-opacity ${
                                isActive
                                    ? "opacity-100"
                                    : "opacity-70 hover:opacity-100"
                                }`
                            }
                        >
                {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/*Icons*/}
                <div className="flex items-center gap-5">
                    <button
                        type="button"
                        aria-label="Search"
                        className="transition-opacity hover:opacity-60"
                    >
                        <Search size={18} strokeWidth={1.5} />
                    </button>

                    <Link
                        to="/wishlist"
                        aria-label="Wishlist"
                        className="transition-opacity hover:opacity-60"
                    >
                        <Heart size={18} strokeWidth={1.5} />
                    </Link>

                    <Link
                        to="/cart"
                        aria-label="Shopping cart"
                        className="transition-opacity hover:opacity-60"
                    >
                        <ShoppingCart size={18} strokeWidth={1.5} />
                    </Link>
                    </div>

            </div>
        </header>

    )
}

export default Header;



