import React, { useState } from "react";


const Home = () => {
	const [shadowRedLight, setShadowRedLight] = useState("none")
	function redLight(){
		setShadowRedLight("none")
	if (shadowRedLight === "none"){
		setShadowRedLight("0px 0px 60px white")
		setShadowYellowLight("none")
		setShadowGreenLight("none")
	} else {
		setShadowRedLight("none")
		
		
	}
	};

	const [shadowYellowLight, setShadowYellowLight] = useState("none")
	function yellowLight(){
		setShadowYellowLight("none")
	if (shadowYellowLight === "none"){
		setShadowYellowLight("0px 0px 60px white")
		setShadowRedLight("none")
		setShadowGreenLight("none")
		
	} else {
		setShadowYellowLight("none")
	}
	};

	const [shadowGreenLight, setShadowGreenLight] = useState("none")
	function greeLight(){
		setShadowGreenLight("none")
	if (shadowGreenLight === "none"){
		setShadowGreenLight("0px 0px 60px white")
		setShadowRedLight("none")
		setShadowYellowLight("none")
	} else {
		setShadowGreenLight("none")
	}
	};


	return (
		<>
		<div className="tubo"></div>
		<div className="container">
		<button className="bombillo mt-2" onClick={redLight} style={{backgroundColor: "red", boxShadow: shadowRedLight }}></button>
		<button className="bombillo" onClick={yellowLight} style={{backgroundColor: "yellow", boxShadow: shadowYellowLight }}></button>
		<button className="bombillo mb-2"onClick={greeLight} style={{backgroundColor: "green", boxShadow: shadowGreenLight }} ></button>
		</div>
		</>
	);
};

export default Home;
