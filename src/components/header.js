import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Header() {
	return (
		<header>
			{/* className={location.pathname === "post" ? "chosen" : undefined} */}
			
			<Link to="/" 
				className="button-nav">
				<i className="fas fa-home"></i>
			</Link>
			
			<Link to="/post"
				className="button-nav">
				<i className="fas fa-book"></i>
			</Link>

			<Link to="/write"
				className="button-nav">
				<i className="fas fa-pencil-alt"></i>
			</Link>

			<Link to="/settings"
				className="button-nav">
				<i className="fas fa-wrench"></i>
			</Link>
		</header>
	);
}


export default Header;