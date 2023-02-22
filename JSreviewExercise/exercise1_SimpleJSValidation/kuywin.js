
function SubmitFunction() {
	let pattern = /^[A-Z]/
	let name = document.getElementById("name").value;
	//document.getElementById("text").innerHTML = name;
	//console.log(name);
	if(pattern.test(name)){
		console.log("YES ja geng mak")
	}
	else{
		console.log("nope")
	}
}

// function Validate(){
//     let pattern = /^[A-Z]/
//     let username = document.getElementById("name").value
//     if(pattern.test(username)){
//         console.log("String's first character is uppercase");
//     }
//     else{
//         console.log("String's first character is not uppercase");
//     }
// }
