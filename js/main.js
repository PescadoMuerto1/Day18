'use strict'

var gBallSize = 100

function onBallClick(elBall){
    if(gBallSize === 400) gBallSize = 100
    gBallSize += 50
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.style.backgroundColor = getRandomColor()
}