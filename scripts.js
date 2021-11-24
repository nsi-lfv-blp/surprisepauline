

var mondic = {
	"A":"⊓", "B":"𝓵", "C":"⊃", "D":"д", "E":"⊂", "F":"ʌ", "G":"◻", "H":"𝖣", "I":"|", "J":"ᐯ", "K":"@", "L":"↓", "M":"✓",
	"N":"-", "O":"Ω", "P":"⥾", "Q":"𓈊", "R":"○", "S":"𐦬", "T":"T", "U":"♓︎", "V":"=", "W":"≡", "X":"⟷", "Y":"ଌ", "Z":"🔗"
	}

function copyotp() {
	var copyText = document.getElementById("output");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert(copyText.value + " à été copié!");
}

function encode() {
	var inpt = document.getElementById("message").value;
	var oupt = document.getElementById("output");
	var fmsg = "";
	
	for (let i = 0; i < inpt.length; i++) {
		let letter = inpt.charAt(i);

		if (letter in mondic) {
			fmsg += mondic[letter];
			
		} else if (letter.toUpperCase() in mondic) {
			fmsg += mondic[letter.toUpperCase()];

			
		} else {
			fmsg += letter;
		}
	}
	
	oupt.value = fmsg;
}

document.getElementById("message").oninput = function() {encode()}
document.getElementById("copy").onclick = function() {copyotp()}