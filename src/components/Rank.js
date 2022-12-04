import { React, useState } from "react";
import "../App.css";

function Rank(props) {
	const [rankOpen, setRankOpen] = useState(false);

	// const showRank = () => {
	// 	if (rankOpen) setRankOpen(false);
	// 	else setRankOpen(true);
	// 	console.log("hello : " + rankOpen);
	// };

	return (
		<div>
			{rankOpen ? (
				<div>
					<button className="rank">RANK</button>
					<div className="modal">
						<h1 className="rank-title">Rank</h1>
						<div className="close-container">
							<p className="close-button" onClick={() => setRankOpen(false)}>
								close
							</p>
						</div>
						<div className="rank-board">
						</div>
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
