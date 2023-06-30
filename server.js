// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
const cron=require('node-cron')
function delay(callback){
    cron.schedule('* * * * * *', ()=>{
        setTimeout(callback,2000)
    })
}
function myCallback(){
    console.log('Hello am running after every 2 seconds');
}
delay(myCallback)

/*Write a JavaScript program that creates a class called 
'Employee' with properties for name and salary. Include a 
method to calculate annual salary. Create a subclass called 
'Manager' that inherits from the 'Employee' class and adds 
an additional property for department. Override the annual 
salary calculation method to include bonuses for managers. 
Create two instances of the 'Manager' class and calculate 
their annual salary.*/

class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }

    calculateAnnualSalary(){
        return this.salary*12
    }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this.department=department
    }
    calculateAnnualSalary(){
        return super.calculateAnnualSalary()+1000
    }
}
const manager1=new Manager('Haron Mburu',50000,'Technician')
const manager2=new Manager('James Njonjo',60000,'Security')

console.log(manager1.calculateAnnualSalary());
console.log(manager2.calculateAnnualSalary());

// Write a JavaScript program to find the leap years in a given range of years.
function findLeapYear(startYear,endYear){
    let leapYears=[]
    for(let year=startYear;year<=endYear;year++){
        if(year%4===0 &&(year%100 !==0 ||year %400===0)){
            leapYears.push(year)
        }
    }
    return leapYears
}

console.log(findLeapYear(2000,2022));

/*
Write a JavaScript program that takes an array with mixed data 
type and calculates the sum of all numbers.

Test Data :
([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
([2, 3, 0, 5, 7, 8, true, false]) -> 25

Expected Output:
Original array: 2,11,3,a2,false,5,7,1
Sum all numbers of the said array: 18
Original array: 2,3,0,5,7,8,true,false
Sum all numbers of the said array: 25
*/
function sumNumbers(arr){
    let sum=0

    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==='number'){
            sum+=arr[i]
        }
    }
    return sum
}
let arr1=[2,"11",3,"a2",false,5,7,1]
let arr2=[2,3,0,5,7,8,true,false]

console.log(`Original array: ${arr1.join(',')}`);
console.log(`Sum of all numbers of the array 1 : ${sumNumbers(arr1)}`);

console.log(`Original array: ${arr2.join(',')}`);
console.log(`Sum of all numbers of the array 2 : ${sumNumbers(arr2)}`);