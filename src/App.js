import Block from "./components/Block";
import "./App.css";
import { Component, useEffect, useState } from "react";
import { Row, Col } from "antd";

function App() {
	let [score, changeScore] = useState(0);

	return (
		<div className="App">
			<div className="container">
				<div className="score-wrapper">
					<div className="wrapper">
						<p className="score-title">score</p>
					</div>
					<div className="wrapper">
						<h1 className="score-value">{score}</h1>
					</div>
				</div>
				<div className="table">
					<div className="row">
						<Block value={2}></Block>
						<Block value={4}></Block>
						<Block value={8}></Block>
						<Block value={16}></Block>
					</div>
					<div className="row">
						<Block value={32}></Block>
						<Block value={64}></Block>
						<Block value={128}></Block>
						<Block value={256}></Block>
					</div>
					<div className="row">
						<Block value={512}></Block>
						<Block value={1024}></Block>
						<Block value={2048}></Block>
						<Block value={false}></Block>
					</div>
					<div className="row">
						<Block value={false}></Block>
						<Block value={false}></Block>
						<Block value={false}></Block>
						<Block value={false}></Block>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
