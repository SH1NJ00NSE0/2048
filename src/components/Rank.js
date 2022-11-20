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
						<p onClick={() => setRankOpen(false)}>X</p>
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
