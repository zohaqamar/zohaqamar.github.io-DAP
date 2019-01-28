function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	frameRate(1)

}

function draw() {
	background(0, 0, 10);
	




	for (var x = 0; x < hour(); x +=1) {

		let xhrec = Math.random()*700;
		fill(Math.random()*140,0, Math.random()*255);
		rect(xhrec, 50, 10, 100) 

	}	


for (var x = 0; x < minute(); x +=1) {

		let xmrec = Math.random()*700;
		fill(0, Math.random(.4,1)*255, 100);
		rect(xmrec, 300, 5, 50) 

	}	

for (var x = 0; x < second(); x +=1) {

		let xsrec = Math.random()*700;
		fill(255, Math.random(0.8,1)*255, 0);
		rect(xsrec, 500, 3, 30) 

	}	

}