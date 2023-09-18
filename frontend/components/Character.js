import React, { useState } from "react";

function Character({ data }) {
	// ❗ Create a state to hold whether the homeworld is rendering or not
	const [showHomeworld, setShowHomeworld] = useState(false);
	// ❗ Create a "toggle" click handler to show or remove the homeworld
	const toggle = () => {
		setShowHomeworld(!showHomeworld);
	};

	return (
		<div className="character-card" onClick={toggle}>
			<h3 className="character-name">{data.name}</h3>
			{showHomeworld ? (
				<p>
					Planet: <span className="character-planet">{data.homeworldName}</span>
				</p>
			) : null}
			{/* Use the same markup with the same attributes as in the mock */}
		</div>
	);
}

export default Character;
