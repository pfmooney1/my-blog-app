import React from 'react';

function Write(props) {
	function updatePage() {
		let text = document.getElementById("textZone").value;
		props.updatePostText(text);
	}

	return (
		<div className="write-screen">
			<textarea 
				id="textZone"
				placeholder="Click to begin writing."
				onChange={updatePage}
				value={props.postText}
			>
			</textarea>
		</div>
	);
}

export default Write;