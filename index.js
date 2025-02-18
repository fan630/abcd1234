function countdown(seconds) {
    let counter = seconds;
    
    const interval = setInterval(() => {
        console.log(`剩餘時間: ${counter} 秒`);
        counter--;
        
        if (counter < 0) {
            clearInterval(interval);
            console.log("倒數結束!");
        }
    }, 1000);
}

function startTimer() {
    let time = 10; // 設定倒計時 10 秒
    console.log("計時器開始!");
    countdown(time);
}

// 啟動計時器
startTimer();
