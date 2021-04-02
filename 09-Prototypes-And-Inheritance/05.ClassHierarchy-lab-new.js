function solve(){
    class Figure {
        units = 'cm';

        get area() {
        }

        changeUnits(input){
        }
        toString(){
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure{
        constructor(r) {
            super();
            this.r = r;
        }

        get area(){
          return (Math.PI * this.r * this.r);
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.r}`;
        }

        changeUnits(input) {
            super.changeUnits(input);
            if (input ==='m'){
                if (this.units ==='cm'){
                    this.r *= 100;
                }else if (this.units === 'mm'){
                    this.r *= 1000;
                }
            }else if(input === 'cm'){
                if (this.units === 'm'){
                    this.r /= 10;
                }else if(this.units === 'mm'){
                    this.r *= 10;
                }
            }else if (input === 'mm'){
                if (this.units === 'cm'){
                    this.r *= 10;
                }else if (this.units === 'm'){
                    this.r *= 1000;
                }
            }
            this.units = input;
        }
    }

    class Rectangle extends Figure{
        constructor(w, h, inputUnits) {
            super();
            if (inputUnits === 'mm'){
                w *= 10;
                h *= 10;
            }else if (inputUnits === 'm'){
                w /= 100;
                h /= 100;
            }
            this.width = w;
            this.height = h;
            this.units = inputUnits;
        }
        get area(){
            return (this.width * this.height);
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }

        changeUnits(input) {
            super.changeUnits(input);

            if (this.units ==='mm'){
                if (input === 'cm'){
                    this.width /= 10;
                    this.height /= 10;
                }else if (input === 'm'){
                    this.width /= 1000;
                    this.height /= 1000;
                }
            }else if(this.units === 'cm'){
                if (input === 'mm'){
                  this.width *= 10;
                  this.height *= 10;
                }else if (input === 'm'){
                    this.width /= 100;
                    this.height /= 100;
                }
            }else if (this.units === 'm') {
                if (input === 'cm'){
                    this.width *= 100;
                    this.height *= 100;
                }else if (input === 'mm'){
                    this.width *= 1000;
                    this.height *= 1000;
                }
            }
            this.units = input;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

// solve();

// console.log('create circle: ---------------')
// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
// console.log('create rectangle: ----------------');
// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
// console.log('circle change units -----------------');
// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
// console.log('rect change units -------------');
// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
