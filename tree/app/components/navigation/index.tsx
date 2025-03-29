"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
        </>
    );
};

export default Navigation;

/* navbar and sidebar base from https://github.com/AnastasiiaPirus/source-code-for-blogs/tree/main/next-navigation-bar*/

