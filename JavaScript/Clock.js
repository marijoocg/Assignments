function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Center circle
    // TODO: make the central black circle
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    //TODO: Make sure you show all the numbers
    var ang;
    var num =1;
    for ( let num=1; num < 13; num++){
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.fillStyle = '#333';
        ctx.textAlign="center";
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
    
}

function drawTime(ctx, radius){
    // TODO: Calculate the angles of every hand depending on the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    hour=hour%12;
    drawHand(ctx, (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)), radius*0.5, radius*0.07);
    //minute
    drawHand(ctx, (minute*Math.PI/30) + (second*Math.PI/(30*60)), radius*0.8, radius*0.07);
    // second
    drawHand(ctx, second*Math.PI/30, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
setInterval(drawClock, 1000);