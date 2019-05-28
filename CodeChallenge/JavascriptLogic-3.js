// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.
function HEXToRGB(num) {
	let asc = num.charCodeAt();
	if(asc < 58) {
		return asc - 48;
	} else {
		return asc - 55;
	}
}

function RGBToHEX(num) {
	if(num < 10) {
		return String.fromCharCode(num + 48);
	} else {
		return String.fromCharCode(num + 55);
	}
}

function HEX_RGB(colorString) {
	// debugger;
	// HEX or RGB
	if(colorString.length == 7) {
		// HEX to RGB
		// #FFFAFA = 255 250 250
		let RGB = "";
		for(let i = 1; i < colorString.length; i = i + 2) {
			RGB = RGB.concat(
				HEXToRGB(colorString[i]) * 16 + 
				HEXToRGB(colorString[i + 1]) + " "
			);
		}
		RGB = RGB.trim();
		return RGB;
	}
	else {
		// RGB to HEX
		// 255 250 250 = #FFFAFA 
		let HEX = "#";
		for(let i = 0; i < colorString.length; i = i + 4) {
			let num = 100 * colorString[i] + 
					  10 * colorString[i + 1] + 
					  1 * colorString[i + 2];
			HEX = HEX.concat(
				RGBToHEX(Math.floor(num / 16)) + 
				RGBToHEX(num % 16)
			);	
		}
		return HEX;
	}
}

//test1
HEX_RGB("#FFFAFA");
//test2
HEX_RGB("255 250 250");

