// this is a comment
/* this is our multi-line comment.
line 1
line 2 
*/



/* data type
1) primary
    a)Number  - 4,5,2.5
    b)String  - 'a', 'neeraj sharma', 'adwitiya', '5,6'
    c)Boolean  - true, false
    d)Undefined  - 
    e)Null
    
2)composite/complex
    a)array - group of similar data 
    b)object -
*/

// console.log(typeof(false));

// variable declaration
// let or var or const
// let a=5;
// console.log(a);
// const pi=3.14;

/* operators
  a)arithmatic operator(+,-,*,/,**,%)
  modulo(%) gives us remainder
  5%2 = 1
  b)comparison operator(<,>,==) they give us true or false
  c)logical operator(&&, ||)
  a        b        ans(&&)    ans(||)
  true      true      true      true
  true      false      false    true
  false      true      false    true
  false      false      false    false
  
  d)assignment operator(=)
  e)typeof()
  */


// if-else condition

// let a=5;
// if(a%2==0){
//   console.log("hello i am even");
// }
// else{
//   console.log("hello i am odd");
// }

// let a=10;
// if(a<=5){
//   console.log("number is small");
// }
// else if(a>=10){
//   console.log("number is larger")
// }
// else{
//   console.log("number is medium");
// }

// let a = 3;
// if(a%2==0 && a%3==0){
//   console.log("success");
// }
// else{
//   console.log("fail");
// }

// let a = 3;
// if(a%2==0 || a%3==0){
//   console.log("success");
// }
// else{
//   console.log("fail");
// }


/* loops
types of loops:
  1)while
  2)for
  3)do-while
  
*/

// let a=100;
// let tmp = 1;
// while(tmp<=a){
//   console.log(tmp);
//   tmp++;
// //   tmp=tmp+1;
// //   tmp+=1;
// }


// let tmp=1
// for(;tmp<=100;tmp++){
//   console.log(tmp);
// }

// let a=100
// let tmp=1;
// do{
//   console.log(tmp);
//   tmp++;
// }while(tmp<=a);

/*loop control statement
1)break
2)continue
*/

// let a=0;
// while(a<100){
//   a++;
//   if(a==10){
//     break;
//   }
//   console.log(a);
// }
// for(let a=1;a<100;a++){
//   if(a==10){
//     continue;
//   }
//   console.log(a);
// }

// let a=5;
// for(let tmp=1;tmp<=10;tmp++){
//   console.log(a*tmp);
// }


// let a=5;
// a=null;
// typeof a


// let car1="audi";
// let car2="benz";
// let car3="BMW";


// let carList = ['audi','benz','BMW'];
// carList.push("swift")
// // console.log(carList[2]);

// for(let tmp=0;tmp<4;tmp++){
//   console.log(carList[tmp]);
// }
// carList.length

// function oddEven(n){
//   if(n%2==0){
//     console.log("number is even");
//   }
//   else{
//     console.log("number is odd");
//   }
// }



// oddEven(6)
// oddEven(9)



// function addOne(n){
//   return n+1;
// }

// let result = addOne(5);
// console.log(result);

// objects

// let car = {
//   type : 'hybrid',
//   name : 'maruti',
//   color : 'white',
//   start : function(){
//     console.log("car has started");
// //     return "car has stared";
//   },
//   stop : function(){
//     console.log("car has stopped");
//   }  
// }

// console.log(car.start())

// let person = {
//   fname : "neeraj",
//   lname : "sharma",
//   age : "22",
//   fullName : function(){
//     return this.fname+" "+ this.lname;
//   },
//   intro : function(){
//     return "hello my name is "+ this.fname+" "+ this.lname+" and i am "+ this.age+" year old."
//   }
// }

// console.log(person.fullName())
// console.log(person.intro())


let fname="neeraj";
let lname="sharma";
let fullName=fname+ " " +lname;
console.log(fullName);















