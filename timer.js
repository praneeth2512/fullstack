function countdown(seconds) {
    let counter = seconds;

    const intervalId = setInterval(() => {
        if (counter > 0) {
            console.log(`Time left: ${counter} second(s)`);
            counter--;
        } else {
            console.log("⏰ Countdown finished!");
            clearInterval(intervalId);
        }
    }, 1000);
}

// Start a countdown from 10 seconds
countdown(10);
