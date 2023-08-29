let stopW = false;
let milis = 0;
let second = 0;
let timer = null;
let app = document.getElementById('app');
app.innerText = second + 's: ' + milis;
console.log("AM")
function startStopW() {
    console.log("PM")
    if (!stopW) {
        timer = setInterval(() => {
            milis += 1;
            if (milis / 100 == 1) {
                second += 1;
                milis = 0
            }
            app.innerText = second + 's: ' + milis;
            stopW = true;
        }, 10);
    }

}
function stopStopW() {
    clearInterval(timer)
    timer = null;
    stopW = false;
}
function resetStopW() {
    stopStopW();
    milis = 0;
    second = 0
    app.innerText = second + 's: ' + milis;
}