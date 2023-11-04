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

	const [colorofLightRed, setColorOfLightRed] = useState("red")
	function changeColorRed(){
		setColorOfLightRed("red")
	if (colorofLightRed === "red"  || "black"){
		setColorOfLightYellow("black")
		setColorOfLightGreen("black")
	} else {
		setColorOfLightRed("red")
	}

	}
	const [colorofLightGreen, setColorOfLightGreen] = useState("green")
	function changeColorGreen(){
		setColorOfLightGreen("green")
	if (colorofLightGreen === "green" || "black"){
		setColorOfLightYellow("black")
		setColorOfLightRed("black")
	} else {
		setColorOfLightGreen("green")
	}

	}

	const [colorofLightYellow, setColorOfLightYellow] = useState("yellow")
	function changeColorYellow(){
		setColorOfLightYellow("yellow")
	if (colorofLightYellow === "yellow"  || "black"){
		setColorOfLightGreen("black")
		setColorOfLightRed("black")
	} else {
		setColorOfLightYellow("yellow")}

	};

	function restart(){
		setColorOfLightRed("red");
		setColorOfLightYellow("yellow");
		setColorOfLightGreen("green");
	};
	
	
	function ramdomColors() {
		let colors = ["blue", "grey", "green", "gold", "hotpink", "aqua", "darkviolet", "lawngreen", "orange", "peru", "red", "yellow", "white", "LightBlue", "Tan", "PaleTurquoise", "LightSkyBlue",`AliceBlue`,`AntiqueWhite`,`Aqua`,`Aquamarine`,`Azure`,`Beige`,`Bisque`,`Black`,`BlanchedAlmond`,`Blue`,`BlueViolet`,`Brown`,`BurlyWood`,`CadetBlue`,`Chartreuse`,`Chocolate`,`Coral`,`CornflowerBlue`,`Cornsilk`,];
		let ramdomNumber1 = Math.floor(Math.random() * colors.length);
		let color1 = colors[ramdomNumber1];

		let ramdomNumber2 = Math.floor(Math.random() * colors.length);
		let color2 = colors[ramdomNumber2]

		let ramdomNumber3 = Math.floor(Math.random() * colors.length);
		let color3 = colors[ramdomNumber3]
		
		setColorOfLightRed(color1)
		setColorOfLightYellow(color2)
		setColorOfLightGreen(color3)

		if (color1 === "gold" && color2 === "gold" && color3 === "gold"){
			return alert("Bieeeeeeen eres un ganadoooor!")
		}

		
		
		

	};
	
	




	return (
		<>
		<div className="tubo"></div>
		<div className="container">
		<button className="bombillo mt-2" onClick={redLight} style={{backgroundColor: colorofLightRed, boxShadow: shadowRedLight }}></button>
		<button className="bombillo" onClick={yellowLight} style={{backgroundColor: colorofLightYellow, boxShadow: shadowYellowLight }}></button>
		<button className="bombillo mb-2"onClick={greeLight} style={{backgroundColor: colorofLightGreen, boxShadow: shadowGreenLight }} ></button>
		</div>
		<div className="contenedorDeBotones">
		<button className="botoncolor" onClick={changeColorRed} style={{backgroundColor: colorofLightRed}}>Stop</button>
		<button className="botoncolor" onClick={changeColorYellow} style={{backgroundColor: colorofLightYellow}}>Caution</button>
		<button className="botoncolor" onClick={changeColorGreen} style={{backgroundColor: colorofLightGreen}}>Go!</button>
		<button className="botonrestartramdom" onClick={restart}>Restart</button>
		<button className="botonrestartramdom" onClick={ramdomColors}>Ramdom Color</button>
		</div>
		</>
	);
};

export default Home;
