/**Zoha Qamar, zoq2001, Spring 2018**/

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	frameRate(1)
	ranh=Math.random()
	ranm=Math.random()
	rans=Math.random()
	noStroke()

}

function draw() 
	background(240, 240, 255);
	




	for (var x = 0; x < hour(); x +=1) {

		let xhrec = x*700;
		fill(ranh*240,0, Math.random(0,.2)*255);
		rect(50+x*(750/24), 50, 10, 100) 


	}	


for (var x = 0; x < minute(); x +=1) {

		let xmrec = x*700;
		fill(0, Math.random(.4,1)*255, 100);
		rect(50+x*(750/60), 300, 5, 50) 

	}	

for (var x = 0; x < second(); x +=1) {

		let xsrec = x*700;
		fill(255, Math.random(0.8,1)*255, 0);
		rect(50+x*(750/60), 500, 3, 30) 

	}	

}