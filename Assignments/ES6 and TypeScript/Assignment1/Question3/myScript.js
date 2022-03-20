let order = {
    id:123,
    title:"Question3",
    price:500000,
    printOrder(){
        return this.id+" "+this.title+" "+this.price;
    },
    getPrice(){
        return this.price;
    }
};

let copy = Object.assign(order);
console.log(copy.printOrder());
console.log(copy.getPrice());