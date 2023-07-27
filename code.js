function startTimerHandler(e) {
    Enabler.startTimer('My Timer');
}
document.getElementById('start-timer').addEventListener('click',
startTimerHandler, false);

function stopTimerHandler(e) {
    Enabler.stopTimer('My Timer');
}
document.getElementById('stop-timer').addEventListener('click',
stopTimerHandler, false);