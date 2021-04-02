class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo){
        let x1 = pointOne.x;
        let y1 = pointOne.y;
        let x2 = pointTwo.x;
        let y2 = pointTwo.y;
        let dy = y2 - y1;
        let dx = x2 - x1;

        return Math.sqrt(dx**2 + dy**2);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
