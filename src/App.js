import "./App.css";
import { React, Component, useEffect, useState } from "react";
import cloneDeep from "clone-deep";
import { useEvent } from "./util";

function App() {
	const UP_ARROW = 38;
	const DOWN_ARROW = 40;
	const LEFT_ARROW = 37;
	const RIGHT_ARROW = 39;

	const [data, setData] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);

	const Block = ({ num }) => {
		const { blockStyle } = style;
		const brown100 = "#FAF8EF";
		const brown200 = "#CDC0B4";
		const brown300 = "#BBADA1";
		const brown400 = "#7A7168";
		const block2 = "#EEE6DB";
		const block4 = "#ECE0C8";
		const block8 = "#EFB27C";
		const block16 = "#F49669";
		const block32 = "#F37D63";
		const block64 = "#F46042";
		const block128 = "#E74A2A";
		const block256 = "#F2D67A";
		const block512 = "#F9CE4B";
		const block1024 = "#F6BC0B";
		const block2048 = "#E5B318";
		return (
			<div
				style={{
					...blockStyle,
					color: num === 2 || num === 4 ? brown400 : brown100,
					backgroundColor:
						num === 2
							? block2
							: num === 4
							? block4
							: num === 8
							? block8
							: num === 16
							? block16
							: num === 32
							? block32
							: num === 64
							? block64
							: num === 128
							? block128
							: num === 256
							? block256
							: num === 512
							? block512
							: num === 1024
							? block1024
							: num === 2048
							? block2048
							: brown200,
					fontSize:
						num < 10
							? 58
							: num < 100
							? 52
							: num < 1000
							? 42
							: 32,
				}}
			>
				{num !== 0 ? num : ""}
			</div>
		);
	};

	const style = {
		blockStyle: {
			height: 90,
			width: 90,
			margin: 10,
			display: "flex",
			borderRadius: 5,
			justifyContent: "center",
			alignItems: "center",
			fontWeight: "600",
		},
	};

	const initialize = () => {
		let newGrid = cloneDeep(data);
		console.table(newGrid);
		addNumber(newGrid);
		console.table(newGrid);
		addNumber(newGrid);
		console.table(newGrid);
		setData(newGrid);
	};

	const addNumber = newGrid => {
		let added = false;
		let gridFull = false;
		let attempts = 0;
		while (!added) {
			if (gridFull) {
				break;
			}
			let rand1 = Math.floor(Math.random() * 4);
			let rand2 = Math.floor(Math.random() * 4);
			attempts++;
			if (newGrid[rand1][rand2] === 0) {
				newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
				added = true;
			}
			// if (attempts > 100) {
			// 	gridFull = true;
			// 	let gameOverr = checkIfGameOver(data);
			// 	if (gameOverr) {
			// 		alert("game over");
			// 		setGameOver(true);
			// 	}
			// 	setGameOver(true);
			// }
		}
	};

	const swipeLeft = dummy => {
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 0; i < 4; i++) {
			let b = newArray[i];
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast++;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						b[fast] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const swipeRight = dummy => {
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 3; i >= 0; i--) {
			let b = newArray[i];
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast--;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						b[fast] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const swipeUp = dummy => {
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 0; i < 4; i++) {
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						b[fast][i] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldData) !== JSON.stringify(b)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const swipeDown = dummy => {
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 3; i >= 0; i--) {
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						b[fast][i] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(b) !== JSON.stringify(oldData)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const checkIfGameOver = () => {
		let checker = swipeLeft(true);
		if (JSON.stringify(data) !== JSON.stringify(checker)) {
			return false;
		}

		let checker2 = swipeDown(true);
		if (JSON.stringify(data) !== JSON.stringify(checker2)) {
			return false;
		}

		let checker3 = swipeRight(true);
		if (JSON.stringify(data) !== JSON.stringify(checker3)) {
			return false;
		}

		let checker4 = swipeUp(true);
		if (JSON.stringify(data) !== JSON.stringify(checker4)) {
			return false;
		}
		return true;
	};

	const handleKeyDown = event => {
		if (gameOver) {
			return;
		}
		switch (event.keyCode) {
			case UP_ARROW:
				swipeUp();
				break;
			case DOWN_ARROW:
				swipeDown();
				break;
			case LEFT_ARROW:
				swipeLeft();
				break;
			case RIGHT_ARROW:
				swipeRight();
				break;
			default:
				break;
		}
		let gameOverr = checkIfGameOver();
		if (gameOverr) {
			alert("game over");
			setGameOver(true);
		}
	};

	const resetGame = () => {
		const emptyGrid = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];
		addNumber(emptyGrid);
		addNumber(emptyGrid);
		setData(emptyGrid);
	};

	useEffect(() => {
		initialize();
	}, []);

	useEvent("keydown", handleKeyDown);

	return (
		<div className="container">
			<div className="score-container">
				<div className="score-title">score</div>
				<div className="score-value">13296</div>
			</div>
			<div className="board">
				{data.map((row, oneIndex) => {
					return (
						<div style={{ display: "flex" }} key={oneIndex}>
							{row.map((digit, index) => (
								<Block num={digit} key={index}></Block>
							))}
						</div>
					);
				})}
				{gameOver && <div>GAME OVER</div>}
				<div onClick={resetGame}>NEW GAME</div>
			</div>
		</div>
	);
}

export default App;
