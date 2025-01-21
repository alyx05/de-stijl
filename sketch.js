function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{
	
	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(250, 100, 400, 400);

	//set the fill colour to white
	fill(255, 255, 255);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the white rectangles
	rect(120, 100, 130, 170);
	rect(120, 280, 130, 220);
	rect(250, 500, 350, 150);
	rect(600, 500, 50, 67);

	//set the fill colour to blue
	fill(0, 110, 200);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the blue rectangle 
	rect(120, 500, 130, 150);

	//set the fill colour to yellow
	fill(255, 255, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the yellow rectangle 
	rect(600, 577, 50, 73);

}