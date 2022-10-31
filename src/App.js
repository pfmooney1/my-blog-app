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
		const Locations = {
			"homepage": <Homepage />,
			"blogposts": <Post />,
			"settings": <Settings />,
			"write": <Write postText={postText} updatePostText={updatePostText} />,
		};
		return Locations[userLocation];
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