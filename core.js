//  class Calculator{
//     constructor (num) {
//        this.calcNum = num;
//        this.num1 = `num1-${this.calcNum}`
//        this.num2 = `num2-${this.calcNum}`
//        this.operator = `operator-${this.calcNum}`
//        this.result = `result-${this.calcNum}` 
//     }

//     createElement() {
//         let input1 = document.createElement('input');
//         input1.className = 'input1';
//         input1.id = 'num1';
//         document.body.append(input1)

//         let input2 = document.createElement('input');
//         input2.className = 'input2';
//         input2.id = 'num2';
//         document.body.append(input2);

//         let oper = document.createElement('input');
//         oper.className = 'oper';
//         oper.setAttribute('type', 'operator');
//         document.body.append(oper)

//         let button =document.createElement('button')
//         button.textContent='result'
//         button.id='button'
//         document.body.append(button)
       

//         let result =document.createElement('span')
//         result.id='span'
//         document.body.append(result)

//         this.num1 = document.getElementById('num1')

//         button.addEventListener('solve', function(){
//             console.log('hello')
//         })

//     }
// }
// let calc = new Calculator(1)
// calc.createElement()



class Calculator{
    constructor(num) {
       this.calcNum = num;
       this.num1 = `num1-${this.calcNum}`
       this.num2 = `num2-${this.calcNum}`
       this.operand = `operator-${this.calcNum}`
       this.result = `result-${this.calcNum}` 
    }
 createElement = () => {
     let div = document.createElement('div');
     div.className = 'container'
     document.body.prepend(div);

     let input1 = document.createElement('input');
     input1.className = 'input1'
     input1.id = this.num1;
     input1.value = '2'
     div.append(input1);
    
     let inputOp = document.createElement('input');
     inputOp.id = this.operand;
     inputOp.className = 'operand'
     inputOp.value = '+'
     div.append(inputOp);

     let input2 = document.createElement('input');
     input2.id = this.num2;
     input2.className = 'input2'
     input2.value = '2'
     div.append(input2);


     let btn = document.createElement('button');
     btn.innerHTML = 'result'
     btn.addEventListener('click', this.solve);
     btn.className = 'btn'
     div.append(btn)

    let result = document.createElement('span')
    result.id= this.result
    result.className = 'result2'
    div.append(result)
}

 solve = () => {
     let num1 = document.getElementById(this.num1);
     let operand = document.getElementById(this.operand);
     let num2 = document.getElementById(this.num2);
     let result = document.getElementById(this.result)


   

     switch(operand.value) {
         case '+':
            return result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
              break;
         case '-':
            return result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            break;
         case  '/':
            return result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            break;
         case  '*':
            return result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            break;
            default:  
            break;            
     }
     
   }
}

let calc = new Calculator(1);
calc.createElement();
let calc2 = new Calculator(2);
calc2.createElement()
