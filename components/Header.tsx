'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
    const path = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/education", label: "Education" },
        { href: "/skill", label: "Skill" },
        { href: "/projects", label: "Projects" },
        { href: "/research", label: "Research" },
    ];

    return (
        <header className="bg-background shadow-lg border border-white">
            <div className="flex justify-between p-2 pl-10 pr-10 items-center text-lg relative">
                {/* Logo */}
                <div className="border-2 rounded-lg border-foreground p-4 hover:bg-primary transition-colors">
                    <Link href="/">
                        <strong>@sleepytmzd</strong>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:scale-120 transition-transform text-xl p-6 ${
                                path === link.href ? "scale-120 font-semibold" : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(prev => !prev)}>
                        {isMobileMenuOpen ? <div className="border-2 hover:bg-primary border-foreground rounded-lg p-2"><X className="h-6 w-6" /></div> : <div className="border-2 hover:bg-primary border-foreground rounded-lg p-2"><Menu className="h-6 w-6" /></div>}
                    </button>
                </div>

                {/* Theme Toggle */}
                <div className="ml-4">
                    <ModeToggle />
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-6 mt-2 w-48 bg-background border rounded-lg shadow-lg z-50 md:hidden">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 hover:bg-primary transition-colors ${
                                    path === link.href ? "font-semibold" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}
