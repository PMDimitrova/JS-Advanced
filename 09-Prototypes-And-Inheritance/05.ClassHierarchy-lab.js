function result() {

    class Figure {
        units = 'cm';
        area = 0;
        get area() {
            return 0;
        }
        set area(input){
            return this.area = input;
        }

        changeUnits(input) {
            // this.units = input;
            let currentArea = this.area;
            if (input === 'm'){
                if(this.units === 'cm'){
                    this.area =  currentArea/ 100;
                }else if (this.units === 'mm'){
                    this.area = currentArea / 1000;
                }
            }else if (input === 'cm'){
                if(this.units === 'm'){
                    this.area = currentArea * 100;
                }else if (this.units === 'mm'){
                    this.area = currentArea / 10;
                }
            }else { //units ==='mm'
                if(this.units === 'cm'){
                    this.area = currentArea * 10;
                }else if (this.units === 'm'){
                    this.area = currentArea * 1000;
                }
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.r = r;
        }

        get area() {
            return (Math.PI * this.r * this.r);
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.r}`;
        }


    }

    class Rectangle extends Figure {
        constructor(width, height, inputUnits) {
            super();

            this.width = width;
            this.height = height;
            if(this.units != inputUnits){
                this.changeUnits(inputUnits);
            }

        }

        get area() {
            return (this.width * this.height);
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    // return{
    //     Figure,
    //     Circle,
    //     Rectangle
    // }

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

}

//examples
result();

