// To open and close the calculator
var lc = 0;
function launchCalc()
{
	if (lc%2 == 0){
		Calc = window.open("myCalc.html","Calculator","width=330,height=375");
	} else {
		Calc.close();
	}
	lc += 1
}

// A simple calculator (For 2 numbers only)
var x = "";
var y = "";
var z = "";
var count = 0;
var operator = "";

function calc(e)
{
	document.getElementById("1").value = 1;
	document.getElementById("2").value = 2;
	document.getElementById("3").value = 3;
	document.getElementById("4").value = 4;
	document.getElementById("5").value = 5;
	document.getElementById("6").value = 6;
	document.getElementById("7").value = 7;
	document.getElementById("8").value = 8;
	document.getElementById("9").value = 9;
	document.getElementById("0").value = 0;
	document.getElementById("11").value = ".";
	document.getElementById("12").value = "%";
	document.getElementById("13").value = "/";
	document.getElementById("14").value = "*";
	document.getElementById("15").value = "-";
	document.getElementById("16").value = "+";
	document.getElementById("17").value = "=";
	
	if (count == 0) {
		if (Number(e.id) <= 11) {
			x = x + document.getElementById(e.id).value;
			document.getElementById("inOut").innerHTML = x;
		} else if (Number(e.id) == 12) {
			x = Number(x)/100;
			document.getElementById("inOut").innerHTML = x.toFixed(8);
		} else if (Number(e.id) <= 16) {
			operator = document.getElementById(e.id).value;
			document.getElementById("inOut").innerHTML = operator;
			count +=1
		}
	} else {
		if (Number(e.id) <= 11) {
			y = y + document.getElementById(e.id).value;
			document.getElementById("inOut").innerHTML = y;
		} else if (Number(e.id) == 12) {
			y = Number(y)/100;
			document.getElementById("inOut").innerHTML = y.toFixed(8);
		}  else if (Number(e.id) <= 16) {
			document.getElementById("inOut").innerHTML = "Not permitted!";
		}
	}	

	if (Number(e.id) == 17) {
		if (operator == "/") {
			z = Number(x) / Number(y);
			document.getElementById("inOut").innerHTML = "= " + z.toFixed(8);
		} else if (operator == "*") {
			z = Number(x) * Number(y);
			document.getElementById("inOut").innerHTML = "= " + z.toFixed(8);
		} else if (operator == "-") {
			z = Number(x) - Number(y);
			document.getElementById("inOut").innerHTML = "= " + z.toFixed(8);
		} else if (operator == "+") {
			z = Number(x) + Number(y);
			document.getElementById("inOut").innerHTML = "= " + z.toFixed(8);
		}
	} else if (Number(e.id) == 18) {
		x = "";
		y = "";
		z = 0;
		count = 0;
		operator = "";
		document.getElementById("inOut").innerHTML = "..Cleared...Cleared..";
	}
};