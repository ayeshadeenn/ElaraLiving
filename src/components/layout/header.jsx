import { useState} from "react";
import { NavLink } from "react-router-dom";
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

            /* Logo */
            <NavLink to="/" className="text-sm tracking-[0.08em]">Elara Living</NavLink>

         </div>

        </header>
    )
}

export default Header;



