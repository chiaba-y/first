const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let count = 0;
let score = 0;
let _keys = {};
let input = {};
let ballX = 100;
let ballY = 100;
let ballRadius = 30;
let startX = 70;
let startY = 70;
let startSize = 60;
let goalX = canvas.width-130;
let goalY = canvas.height-130;
let goalSize = 60;
let goalPlaceX = canvas.width-100;
let goalPlaceY = canvas.height-100;
let hasDisplayedGoalText = false;
let isMovable = true;
const walkSpeed = 4;

function timer() {
    if(!hasDisplayedGoalText) {
        count++
        setTimeout(timer, 1000);
    }
}
timer();

function MoveBall() {
    if(isMovable) {
        if(ballX > ballRadius) if(input.left) ballX -= walkSpeed;
        if(ballX < canvas.width - ballRadius) if(input.right) ballX += walkSpeed;
        if(ballY > ballRadius) if(input.up) ballY -= walkSpeed;
        if(ballY < canvas.height - ballRadius) if(input.down) ballY += walkSpeed;
    }
}

function goal() {
    if(ballX === goalPlaceX && ballY === goalPlaceY) {
        if(!hasDisplayedGoalText) {
            hasDisplayedGoalText = true;
            isMovable = false;
            setTimeout( () => {
                ballX = 100;
                ballY = 100;
                hasDisplayedGoalText = false;
                isMovable = true;
                timer();
                count = 0;
            }, 2000);
        }
    }
}

function _setEventListener() {
    const _keyEvent = e => {
        e.preventDefault();
        for(let key in _keys) {
            switch(e.type) {
                case 'keydown' :
                    if(e.key === _keys[key]) input[key] = true;
                    break;
                case 'keyup' :
                    if(e.key === _keys[key]) input[key] = false;
                    break;
            }
        }
    }
    addEventListener('keydown', _keyEvent, {passive: false});
    addEventListener('keyup', _keyEvent, {passive: false});
}

function start() {
    keybind('up', 'ArrowUp');
    keybind('down', 'ArrowDown');
    keybind('right', 'ArrowRight');
    keybind('left', 'ArrowLeft');

    draw();

    _setEventListener();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawTime();
    drawStart();
    drawGoal();
    drawWall();
    drawBall();
    MoveBall();
    drawGoalText();
    goal();
    requestAnimationFrame(draw);
}

function keybind(name, key) {
    _keys[name] = key;
    input[name] = false;
}

start();