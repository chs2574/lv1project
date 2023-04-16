import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [a, setA] = useState(["제목1", "제목2", "제목3"]);
	const [b, setB] = useState(["내용1", "내용2", "내용3"]);
	const [title, Settitle] = useState(0);
	const [userinput, Setuserinput] = useState("");
	const [usercontentinput, Setusercontentinput] = useState("");
	const [donea, setdoneA] = useState(["제목1", "제목2", "제목3"]);
	const [doneb, setdoneB] = useState(["내용1", "내용2", "내용3"]);
	return (
		<div className='App'>
			<div className='blackNav'>
				<h4>TO-DO LIST</h4>
			</div>
			제목:
			<input
				onChange={(event) => {
					Setuserinput(event.target.value);
				}}></input>
			내용:
			<input
				onChange={(event) => {
					Setusercontentinput(event.target.value);
				}}></input>
			<button
				onClick={() => {
					let copy1 = [...a];
					let copy2 = [...b];
					copy1.unshift(userinput);
					copy2.unshift(usercontentinput);
					setA(copy1);
					setB(copy2);
				}}>
				입력!
			</button>
			<h2 className='underbar'>해야할 일!</h2>
			{a.map((todolist, i) => {
				return (
					<div
						className='todolist'
						key={i}>
						<h4>{todolist}</h4>
						<p>{b[i]}</p>
						<button
							onClick={() => {
								let copy1 = [...a];
								let copy2 = [...b];
								copy1.splice(i, 1);
								copy2.splice(i, 1);
								setA(copy1);
								setB(copy2);
							}}>
							삭제
						</button>
						<button
							onClick={() => {
								let copy1 = [...a];
								let copy2 = [...b];
								let removedItem1 = copy1.splice(i, 1)[0];
								let removedItem2 = copy2.splice(i, 1)[0];
								let copy3 = [...donea];
								let copy4 = [...doneb];
								copy3.unshift(removedItem1);
								copy4.unshift(removedItem2);
								setA(copy1);
								setB(copy2);
								setdoneA(copy3);
								setdoneB(copy4);
							}}>
							DONE!
						</button>
					</div>
				);
			})}
			<div>
				<h2 className='underbar'>끝낸 일!</h2>
				{donea.map((donelist, i) => {
					return (
						<div
							className='todolist'
							key={i}>
							<h4>{donelist}</h4>
							<p>{doneb[i]}</p>
							<button
								onClick={() => {
									let copy3 = [...donea];
									let copy4 = [...doneb];
									copy3.splice(i, 1);
									copy4.splice(i, 1);
									setdoneA(copy3);
									setdoneB(copy4);
								}}>
								삭제
							</button>
							<button
								onClick={() => {
									let copy1 = [...a];
									let copy2 = [...b];
									let copy3 = [...donea];
									let copy4 = [...doneb];
									let removeditem1 = copy3.splice(i, 1);
									let removeditem2 = copy4.splice(i, 1);
									setdoneA(copy3);
									setdoneB(copy4);
									copy1.unshift(removeditem1);
									copy2.unshift(removeditem2);
									setA(copy1);
									setB(copy2);
								}}>
								Return!
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
