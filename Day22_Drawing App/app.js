const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const button = document.getElementById("button");
let mouseDown = false;

function start(event) {

    mouseDown = true;
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    context.moveTo(mouseX, mouseY); //start from this position
    context.beginPath(); //begin the drawing path

}

function stop() {

    mouseDown = false;

}

function draw(event) {

    if (mouseDown) {

        const mouseX = event.clientX - canvas.offsetLeft;
        const mouseY = event.clientY - canvas.offsetTop;
        const color = document.getElementById("hex").value;
        const lineWidthNumber = document.getElementById("lineWidthNumber").value;

        context.lineWidth = lineWidthNumber; //line width
        context.strokeStyle = color; //line color
        context.lineCap = "round"; //the style of the end caps

        context.lineTo(mouseX, mouseY); //to this position
        context.stroke(); //draw

    }
}



//add Event Listeners
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mousemove', draw);


//reload page on button click

button.addEventListener('click', function() {
    //location.reload();
    history.go(0);
});