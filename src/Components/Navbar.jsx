import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <>
		<header><div className="max-width">
			<div className="logo"><a href="">Say<span>yad.</span></a></div>
			<nav ref={navRef}>
				<a><Link to="Home">Home</Link></a>
				<a><Link to="Featured">Featured</Link></a>
				<a><Link to="Store">Store</Link> </a>
				<a><Link to="About">About Us</Link></a>
				{/* <a><Link to="Contact">Contact</Link></a> */}
				<a href="contact" className="contact-btn">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button></div>
		</header>
    <Outlet/>
    </>
	);
}

export default Navbar;