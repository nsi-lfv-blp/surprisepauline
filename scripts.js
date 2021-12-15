

var mondic = {
	"A":"⊓", "B":"𝓵", "C":"⊃", "D":"д", "E":"⊂", "F":"ʌ", "G":"◻", "H":"𝖣", "I":"|", "J":"ᐯ", "K":"@", "L":"↓", "M":"✓",
	"N":"-", "O":"Ω", "P":"⥾", "Q":"𓈊", "R":"○", "S":"𐦬", "T":"T", "U":"♓︎", "V":"=", "W":"≡", "X":"⟷", "Y":"ଌ", "Z":"🔗"
	};

var alphaparle = "agblecrucehacadeelvetofloktromarvaroectepodotiopbemo";
var alphnorm = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var dicparl = {};

for (let i = 0; i < alphnorm.length; i++) {
	dicparl[alphnorm.slice(i,i+1)] = alphaparle.slice(i*2,i*2+2);
}


function copyotp() {
	var copyText = document.getElementById("output");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert(copyText.value + " à été copié!");
}

function encode(mode) {
	var inpt = document.getElementById("message").value;
	var oupt = document.getElementById("output");
	var fmsg = "";
	
	if (mode === "W"){
		var dic = mondic;
	} else if (mode === "R"){
		var dic = dicparl;
	};
	
	for (let i = 0; i < inpt.length; i++) {
		let letter = inpt.charAt(i);

		if (letter in mondic) {
			fmsg += dic[letter].toUpperCase();
			
		} else if (letter.toUpperCase() in mondic) {
			fmsg += dic[letter.toUpperCase()];

			
		} else {
			fmsg += letter;
		}
	}
	
	return fmsg;
}

let mode = "W";

function optmode(cmode) {
	if (cmode === "W"){
		return "R";
	} else if (cmode === "R"){
		return "W";
	};
}

function changeBorder (cmode){
	var inpbox = document.getElementById("message");
	var oupbox = document.getElementById("output");
	
	if (cmode == "W"){
		inpbox.style.outline = "solid black";
		oupbox.style.outline = "solid black";
		
	} else if (cmode == "R"){
		inpbox.style.outline = "solid white";
		oupbox.style.outline = "solid white";
	};
}

function changeMode(){
	mode = optmode(mode);
	changeBorder(mode);
	encode();
}

function speak() {
	var msg = new SpeechSynthesisUtterance();
	msg.lang = 'fr-FR';
	msg.text = encode("R");
	window.speechSynthesis.speak(msg);
	console.log("pipi");
}

document.getElementById("message").oninput = function() {document.getElementById("output").value = encode(mode)}
document.getElementById("copy").onclick = function() {copyotp()}
document.getElementById("tts").onclick = function() {speak()}
document.getElementById("output").onclick = function() {changeMode()}

