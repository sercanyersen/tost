/*document.getElementsByClassname('circle').onclick = function () {
	document.getElementsByClassname('circle').style.visibility = 'hidden';
}*/

let clcNu = 2;



document.getElementById('1').onclick = function () {

	const cl1 = clcNu

	if (cl1 % 2 === 0) {
		document.getElementById('2').style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById('2').style.visibility = 'visible';
		clcNu++;
	}
	
}

document.getElementById('2').onclick = function () {

	const cl1 = clcNu

	if (cl1 % 2 === 0) {
		document.getElementById('5').style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById('5').style.visibility = 'visible';
		clcNu++;
	}
	
}

document.getElementById('5').onclick = function () {

	const cl1 = clcNu

	if (cl1 % 2 === 0) {
		document.getElementById('3').style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById('3').style.visibility = 'visible';
		clcNu++;
	}
	
}

document.getElementById('3').onclick = function () {

	const cl1 = clcNu

	if (cl1 % 2 === 0) {
		document.getElementById('4').style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById('4').style.visibility = 'visible';
		clcNu++;
	}
	
}

document.getElementById('4').onclick = function () {

	const cl1 = clcNu

	if (cl1 % 2 === 0) {
		document.getElementById('1').style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById('1').style.visibility = 'visible';
		clcNu++;
	}
	
}