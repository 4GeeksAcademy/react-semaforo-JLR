import React, { useState } from "react";




const Home = () => {
	const [shadowRedLight, setShadowRedLight] = useState("none")
	function redLight(){
		setShadowRedLight("none")
	if (shadowRedLight === "none"){
		setShadowRedLight("0px 0px 60px white")
		setShadowYellowLight("none")
		setShadowGreenLight("none")
		setShadowPurpleLight("none")
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
		setShadowPurpleLight("none")
		
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
		setShadowPurpleLight("none")
	} else {
		setShadowGreenLight("none")
	}
	};

	const [shadowPurpleLight, setShadowPurpleLight] = useState("none")
	function purpleLight(){
		setShadowPurpleLight("none")
	if (shadowPurpleLight === "none"){
		setShadowPurpleLight("0px 0px 60px white")
		setShadowRedLight("none")
		setShadowYellowLight("none")
		setShadowGreenLight("none")
	} else {
		setShadowPurpleLight("none")
	}
	};

	
	const[LabelofLightPurple, setLabelOfLightPurple] = useState("Agregar color!")
	const[colorofLightPurple, setColorOfLightPurple] = useState("none")
	function changeColorPurple(){
		setColorOfLightPurple("block")
		setLabelOfLightPurple("Volver")

		if (colorofLightPurple === "block"){
			setColorOfLightPurple("none")
			setLabelOfLightPurple("Agregar Color!")
		}
	}

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
		setColorOfLightPurple("none");

	};

	
	
	
	function ramdomColors() {
		let colors = ["blue", "grey", "green", "gold", "hotpink", "aqua", "darkviolet", "lawngreen", "orange", "peru", "red", "yellow", "LightBlue", "Tan", "PaleTurquoise", "LightSkyBlue",`AliceBlue`,`AntiqueWhite`,`Aqua`,`Aquamarine`,`Azure`,`Beige`,`Bisque`,`BlanchedAlmond`,`Blue`,`BlueViolet`,`Brown`,`BurlyWood`,`CadetBlue`,`Chartreuse`,`Chocolate`,`Coral`,`CornflowerBlue`,`Cornsilk`];
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
		<button className="bombillo mt-1" onClick={redLight} style={{backgroundColor: colorofLightRed, boxShadow: shadowRedLight }}></button>
		<button className="bombillo mt-1" onClick={yellowLight} style={{backgroundColor: colorofLightYellow, boxShadow: shadowYellowLight }}></button>
		<button className="bombillo mt-1 mb-1"onClick={greeLight} style={{backgroundColor: colorofLightGreen, boxShadow: shadowGreenLight }} ></button>
		<button className="bombillo mb-1" onClick={purpleLight} style={{backgroundColor: "purple", boxShadow: shadowPurpleLight, display: colorofLightPurple}}></button>
		</div>
		<div className="contenedorDeBotones">
		<button className="botoncolor" onClick={changeColorRed} style={{backgroundColor: colorofLightRed}}>Stop</button>
		<button className="botoncolor" onClick={changeColorYellow} style={{backgroundColor: colorofLightYellow}}>Caution</button>
		<button className="botoncolor" onClick={changeColorGreen} style={{backgroundColor: colorofLightGreen}}>Go!</button>
		</div>
		<div className="contenedorDeBotones2 mt-1">
		<button className="botonrestartramdom" onClick={restart}>Restart</button>
		<button className="botonrestartramdom" onClick={ramdomColors}>Ramdom Color</button>
		<button className="purpleBoton" onClick={changeColorPurple}>{LabelofLightPurple}</button>
		</div>
		</>
	);
};

export default Home;
