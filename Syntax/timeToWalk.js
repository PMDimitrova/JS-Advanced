function solveMe(steps, lengthOfStepMeters, speedKmH) {
    let distanceInMeters = steps * lengthOfStepMeters;
    let breaksInMinutes = Math.floor((distanceInMeters) / 500);
    let breaksInSeconds = breaksInMinutes * 60;
    let speedMetersPerSecond = speedKmH /3.6;

    let timeWalkingSeconds = distanceInMeters * speedMetersPerSecond;

    let totalTimeInSeconds = timeWalkingSeconds + breaksInSeconds;

    console.log(formatting(totalTimeInSeconds));

    function formatting(seconds) {
    var sec_num = parseInt(seconds, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

}


solveMe(4000, 0.60, 5);