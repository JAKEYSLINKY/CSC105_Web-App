//var newfruite = ["pear", "mango", "banana"]
// function loadFruits() {
// 	var listFruit = "";
// 	for (let i = 0; i < newfruite.length; i++) {
// 		listFruit += "<li>" + newfruite[i] + "</li>";
// 	}
// 	document.getElementById("fruits").innerHTML = listFruit;
//}

function Rubka() {
	var fruite = prompt("What is your favourite fruite?");
	document.getElementById("fruits").innerHTML += "<li>" + fruite + "</li>";
	// newfruite.push(fruite);
	// loadFruits();
}


