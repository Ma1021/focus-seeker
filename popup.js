const startBtn = document.querySelector('#start');
const hr = document.querySelector('input#hr');
const min = document.querySelector('input#min');
const sec = document.querySelector('input#sec');

const minusOneSec = (timer, callback) => {
    if(timer === 0){
        callback();
        return;
    }
    setTimeout(() => {
        if(timer > 0){
            minusOneSec(timer - 1, callback);
        }
    }, 1000);
}


startBtn.addEventListener('click', () => {
    const hour = hr.value;
    const minute = min.value;
    const second = sec.value;

    const timer = hour * 3600 + minute * 60 + second;
    minusOneSec(timer, () => {alert('timer end!')});
})