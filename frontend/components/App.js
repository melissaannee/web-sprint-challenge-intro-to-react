import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [data, setData] = useState([]);
	console.log("DATA", data);

	const fetch = async (url, setter) => {
		await axios
			.get(url)
			.then((data) => {
				setter(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const mergedData = async () => {
		let newData = people.map((value) => {
			let newObj = {
				id: value.id,
				name: value.name,
			};
			let homePlanet = planets.find((planet) => {
				return planet.id === value.homeworld;
			});
			newObj.homeworldName = homePlanet.name;
			return newObj;
		});

		setData(newData);
	};

	useEffect(() => {
		fetch(urlPeople, setPeople);
		fetch(urlPlanets, setPlanets);
	}, []);

	useEffect(() => {
		if (people.length && planets.length) {
			mergedData();
		}
	}, [people, planets]);

	console.log(data);

	return (
		<div>
			<h2>Star Wars Characters</h2>
			<p>
				See the README of the project for instructions on completing this
				challenge
			</p>
			{/* ❗ Map over the data in state, rendering a Character at each iteration */}
			{data.map((value) => {
				return <Character key={value.id} data={value} />;
			})}
		</div>
	);
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
