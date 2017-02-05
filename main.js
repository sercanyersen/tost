let clcNu = 2;

function tostMaker(id) {

	const cl1 = clcNu;

	if (cl1 % 2 === 0) {
		document.getElementById(id).style.visibility = 'hidden';
		clcNu++;
	} else {
		document.getElementById(id).style.visibility = 'visible';
		clcNu++;
	}
	
}

document.getElementById('1').onclick = function(){tostMaker(2);}

document.getElementById('2').onclick = function(){tostMaker(5);}

document.getElementById('5').onclick = function(){tostMaker(3);}

document.getElementById('3').onclick = function(){tostMaker(4);}

document.getElementById('4').onclick = function(){tostMaker(1);}
