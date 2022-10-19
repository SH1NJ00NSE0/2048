import logo from "./logo.svg";
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
						<h1 className="score-value">13296</h1>
					</div>
				</div>
				<table className="table">
					<tbody>
						<tr className="row">
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
						</tr>
						<tr className="row">
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
						</tr>
						<tr className="row">
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
						</tr>
						<tr className="row">
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
							<td className="block"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
