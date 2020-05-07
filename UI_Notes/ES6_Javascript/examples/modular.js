//calculator.js
export class Calculator {
        constructor(num1,num2){
            this.num1=num1;
            this.num2=num2;
        }
        add(){
            return this.num1+this.num2;
        }
        subtract(){
            return this.num1-this.num2;
        }
    }
    //module_demo.js
    import * as calculator from "./calculator";
    var sum=calculator.add(831,967);
    console.log("Sum is "+sum);
    var dif=calculator.subtract(1035-497);
    console.log("Difference is "+dif);
    