
function setup(){
    // function that runs only once
    createCanvas(800, 500);
//TO GET RID OF THE BORDERS 
    noStroke();



    // function that runs repeatedly
    background(73);
    generateStacks();
}
function draw(){
  //we call the function 
    // stackOfCircles(100,200,"#F000E0");
    // stackOfCircles(400,300,"#fdc34f");

}

    //we create a loop to generate 10 stacks
function generateStacks(){
    // i=i+1 c la m^ chose que i++
    for(let i = 0; i < 10; i ++){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = random(0, 255);
        stackOfCircles(randomX, randomY, randomColor)
    }  
    }      







//we create a function to display a stack of circles
function stackOfCircles(posX, posY , color){
    fill(color);
    for (let i = 0; i < 10; i = i +1 ){
        circle(posX, posY + i*10, 20);    
    }
}
function mousePressed(){
    fill("#4e1389");
    circle(mouseX, mouseY,50);
}