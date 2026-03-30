class Rectangle{
    constructor(l,b){
        this.l = l;
        this.b = b;
    }

    getArea(){
        console.log(`Area = ${this.l*this.b}`);
    }

    getPeri(){
        console.log(`Perimeter = ${2*(this.l+this.b)}`);
    }
}

const obj = new Rectangle(5,5);
obj.getArea();
obj.getPeri();