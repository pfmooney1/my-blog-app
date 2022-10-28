import React from 'react';

function Header(props) {
	return (
		<header>
			<button onClick={() => props.clickHandler("homepage")}>
				<i className="fas fa-home"></i>
			</button>
			<button onClick={() => props.clickHandler("blogposts")}>
				<i className="fas fa-book"></i>
			</button>
			<button onClick={() => props.clickHandler("write")}>
				<i className="fas fa-pencil-alt"></i>
				</button>
			{/* <button><i className="fas fa-edit"></i></button> */}
			{/* <button><i className="far fa-file-alt"></i></button> */}
			{/* <button><i className="fas fa-trash-alt"></i></button> */}
			<button onClick={() => props.clickHandler("settings")}>
				<i className="fas fa-wrench"></i>
			</button>
		</header>
	);
}


export default Header;