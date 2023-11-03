import React, { useState } from "react";


const Home = () => {
	const [shadowRedLight, setShadowRedLight] = useState("none")
	function redLight(){
		setShadowRedLight("none")
	if (shadowRedLight === "none"){
		setShadowRedLight("10px 5px 5px black")
	} else {
		setShadowRedLight("none")
	}
	};

	const [shadowYellowLight, setShadowYellowLight] = useState("none")
	function yellowLight(){
		setShadowYellowLight("none")
	if (shadowYellowLight === "none"){
		setShadowYellowLight("10px 5px 5px black")
	} else {
		setShadowYellowLight("none")
	}
	};

	const [shadowGreenLight, setShadowGreenLight] = useState("none")
	function greeLight(){
		setShadowGreenLight("none")
	if (shadowGreenLight === "none"){
		setShadowGreenLight("10px 5px 5px black")
	} else {
		setShadowGreenLight("none")
	}
	};


	return (
		<>
		<button onClick={redLight} style={{backgroundColor: "red", boxShadow: shadowRedLight }}>Rojo</button>
		<button onClick={yellowLight} style={{backgroundColor: "yellow", boxShadow: shadowYellowLight }}>Amarillo</button>
		<button onClick={greeLight} style={{backgroundColor: "green", boxShadow: shadowGreenLight }} >Verde</button>
		</>
	);
};

export default Home;
