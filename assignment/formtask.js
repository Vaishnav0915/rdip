function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}



function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function abs(form){
    form.display.value = Math.abs(form.display.value);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {

    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
function validation() {
    var name = document.getElementById('name');
    var cname = /^[^0-9][A-Za-z]+$/;
    var cmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var cphone = /^\d{10}$/;
    if ((document.getElementById('mobileno').value).match(cphone)) {
        return true;
    } else {
        alert("enter valid mobile number");
        //return false;
    }
    if ((name.value).match(cname)) {
        return true;
    } else {
        alert("enter valid name");
    }
    if ((document.getElementById('email').value).match(cmail)) {
        return true;
    } else {
        alert("enter valid email");
    }
}
function palindrome() {

    var str = document.getElementById("string").value;
    var s = "";
    for (i = str.length - 1; i >= 0; i--) {
        s = s + str[i];
    }
    if (str == s) {
        document.write(str + " " + " is a palindrome");
        return str + "palindrome";
    } else {
        document.write(str + " " + " is not a palindrome");
        return str + "not palindome";
    }
}

function anagram() {
    var s1 = document.getElementById("string1").value;
    var s2 = document.getElementById("word").value;
    if (s1.length !== s2.length) 
    {
        return false;
    }
    var s1Char = s1.split('').sort();
    var s2Char = s2.split('').sort();
    s1Char.forEach(function(_curChar, index) 
    {
        if (s2Char[index] !== _curChar) 
        {
            document.write("not anagram");
            return false;
        }
    });
    document.write("anagram");
    return true;
}

function random() {
    num1 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("p").value = num1;
    alert(num1);
    num2 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("r").value = num2;
    alert(num2);
    mod1 = num1 % 10;
    mod2 = num2 % 10;
    alert("mod1 is" + mod1);
    alert("mod2 is" + mod2);
    if (mod1 == '1') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '2') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '3') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '4') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '5') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '6') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '7') {
        object1 = "3";
        alert("object1 is" + object1);
    } else if (mod1 == '8') {
        object1 = "3";
        alert("object1 is" + object1);
    } else if (mod1 == '9') {
        object1 = "3";
        alert("object1 is " + object1);
    } else {
        object1 = "3";
        alert("object1 is " + object1);
    }
    if (mod2 == '1') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '2') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '3') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '4') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '5') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '6') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '7') {
        object2 = "3";
        alert("object2 is " + object2);
    } else if (mod2 == '8') {
        object2 = "3";
        alert("object2 is " + object2);
    } else if (mod2 == '9') {
        object2 = "3";
        alert("object2 is " + object2);
    } else {
        object2 = "3";
        alert("object2 is " + object2);
    }
    switch (object1) {
        case '1':
            object1 = "human";
            alert("human");
            break;
        case '2':
            object1 = "cockroch";
            alert("cockroch");
            break;
        case '3':
            object1 = "nuclear bomb";
            alert("nuclear bomb");
            break;
    }
    switch (object2) {
        case '1':
            object2 = "human";
            alert("human");
            break;
        case '2':
            object2 = "cockroch";
            alert("cockroch");
            break;
        case '3':
            object2 = "nuclear bomb";
            alert("nuclear bomb");
            break;
    }
    if (object1 == "human" && object2 == "cockroch") {
        document.write("human survives");
        return "human survives";
    } else if (object1 == "cockroch" && object2 == "human") {
        document.write("human survives");
        return "human survives";
    } else if (object1 == "cockroch" && object2 == "nuclear bomb") {
        document.write("cockroch survives");
        return "cockroch survives";
    } else if (object1 == "nuclearbomb" && object2 == "cockroch") {
        document.write("cockroch survives");
        return "cockroch survives";
    } else if (object1 == "human" && object2 == "nuclear bomb") {
        document.write("human dies");
        return "human dies";
    } else if (object1 == "nuclear bomb" && object2 == "human") {
        document.write("human dies");
        return "human dies";
    } else {
        document.write("tie");
        return "tie";
    }
}