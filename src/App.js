import logo from './assets/logo.svg';
import Homepage from './components/homepage.js';
import Settings from './components/settings.js';
import Header from './components/header.js';
import Write from './components/write';
import Footer from './components/footer.js';
import Post from './components/blog-post';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	let [userLocation, updateUserLocation] = useState("homepage");
	let [postText, updatePostText] = useState(() => {
		const saved = localStorage.getItem("postText");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	function returnLocationComponent() {
		if (userLocation == "homepage") {
			return <Homepage />
		}
		if (userLocation == "blogposts") {
			return <Post />
		}
		if (userLocation == "settings") {
			return <Settings />
		}
		if (userLocation == "write") {
			return <Write 
				postText = {postText}
				updatePostText = {updatePostText}
			/>
		}
	}
	useEffect(() => {
		localStorage.setItem("postText", JSON.stringify(postText));
	}, [postText]);

	return (
		<div className="App">
			<Header clickHandler={updateUserLocation} userLocation={userLocation} />
			{returnLocationComponent()}
			<Footer />
		</div>
	);
}

export default App;