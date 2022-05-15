function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
}

function drawTime() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Time: '+count, canvas.width-70, 25);
}

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score: '+score, 8, 25);
}

function drawWall() {
    ctx.beginPath();
    ctx.moveTo(startX + startSize, startY);
    ctx.lineTo(goalX + goalSize, startY);
    ctx.lineTo(goalX + goalSize, goalY)
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(startX, startY + startSize);
    ctx.lineTo(startX, goalY + goalSize);
    ctx.lineTo(goalX, goalY + goalSize)
    ctx.closePath();
    ctx.stroke();
}

function drawStart() {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + startSize, startY);
    ctx.lineTo(startX + startSize, startY + startSize);
    ctx.lineTo(startX, startY + startSize);
    ctx.fillStyle = "#008080";
    ctx.fill();
}

function drawGoal() {
    ctx.beginPath();
    ctx.moveTo(goalX, goalY);
    ctx.lineTo(goalX + goalSize, goalY);
    ctx.lineTo(goalX + goalSize, goalY + goalSize);
    ctx.lineTo(goalX, goalY + goalSize);
    ctx.fillStyle = "#FF3333";
    ctx.fill();
}

function drawGoalText() {
    if(hasDisplayedGoalText) {
        ctx.font = '50px Arial';
        ctx.fillStyle = '#000000';
        ctx.fillText('ゴール', 230, 270);
    }
}