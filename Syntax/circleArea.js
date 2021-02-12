function circleArea(input) {
    if (typeof (input) != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`);
    } else {
        let area = (Math.PI * input * input).toFixed(2);
        console.log (area);
    }
}
circleArea(5);
circleArea('name');