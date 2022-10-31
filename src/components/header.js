import React from 'react';

function Header(props) {
	return (
		<header>
			<button 
				onClick={() => props.clickHandler("homepage")}
				className={props.userLocation === "homepage" ? "chosen" : undefined}>
				<i className="fas fa-home"></i>
			</button>
			<button 
				onClick={() => props.clickHandler("blogposts")}
				className={props.userLocation === "blogposts" ? "chosen" : undefined}>
				<i className="fas fa-book"></i>
			</button>
			<button 
				onClick={() => props.clickHandler("write")}
				className={props.userLocation === "write" ? "chosen" : undefined}>
				<i className="fas fa-pencil-alt"></i>
			</button>
			<button 
				onClick={() => props.clickHandler("settings")}
				className={props.userLocation === "settings" ? "chosen" : undefined}>
				<i className="fas fa-wrench"></i>
			</button>
			{/* <button><i className="fas fa-edit"></i></button> */}
			{/* <button><i className="far fa-file-alt"></i></button> */}
			{/* <button><i className="fas fa-trash-alt"></i></button> */}
		</header>
	);
}


export default Header;