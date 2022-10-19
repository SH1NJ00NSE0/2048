import Block from "./components/Block";
import ''
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="score-wrapper">
					<div className="wrapper">
						<p className="score-title">score</p>
					</div>
					<div className="wrapper">
						<h1 className="score-value">0</h1>
					</div>
				</div>
				<table className="table">
					<tbody>
						<tr className="row">
							<Block value={2}></Block>
							<Block value={4}></Block>
							<Block value={8}></Block>
							<Block value={16}></Block>
						</tr>
						<tr className="row">
							<Block value={32}></Block>
							<Block value={64}></Block>
							<Block value={128}></Block>
							<Block value={256}></Block>
						</tr>
						<tr className="row">
							<Block value={512}></Block>
							<Block value={1024}></Block>
							<Block value={2048}></Block>
							<Block value={false}></Block>
						</tr>
						<tr className="row">
							<Block value={false}></Block>
							<Block value={false}></Block>
							<Block value={false}></Block>
							<Block value={false}></Block>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
