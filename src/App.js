import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Homepage from './components/homepage.js';
import Settings from './components/settings.js';
import Header from './components/header.js';
import Write from './components/write';
import Footer from './components/footer.js';
import Post from './components/blog-post';

import './App.css';

function App() {
	let [postText, updatePostText] = useState(() => {
		const saved = localStorage.getItem("postText");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	useEffect(() => {
		localStorage.setItem("postText", JSON.stringify(postText));
	}, [postText]);

	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="post" element={<Post />} />
				<Route path="write" element={<Write postText={postText} updatePostText={updatePostText} />} />
				<Route path="settings" element={<Settings />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;