import { React, useState } from "react";
import "../App.css";

function Rank(props) {
	const [rankOpen, setRankOpen] = useState(false);

	return (
		<div>
			{rankOpen ? (
				<div>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
					/>
					<button className="rank">RANK</button>
					<div className="modal">
						<h1 className="rank-title">Rank</h1>
						<div className="close-container">
							<p
								className="close-button"
								onClick={() => setRankOpen(false)}>
								<span class="material-symbols-rounded">close</span>
							</p>
						</div>
						<div className="rank-board"></div>
					</div>
				</div>
			) : (
				<button className="rank" onClick={() => setRankOpen(true)}>
					RANK
				</button>
			)}
		</div>
	);
}

export default Rank;
