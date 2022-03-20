class fibonacciSeries{
    constructor(previousNumber=1,currentNumber=1){
        this.previousNumber=previousNumber,
        this.currentNumber=currentNumber
    }

    previousNumber = Symbol("firstNumber");
    currentNumber = Symbol("secondNumber");

    next(){
        let next = this.previousNumber+this.currentNumber;
        this.previousNumber = this.currentNumber;
        this.currentNumber = next;
        return next;
    }
}
let series = new fibonacciSeries;
console.log(series.next());