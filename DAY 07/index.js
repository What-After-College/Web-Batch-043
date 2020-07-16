// function iseven(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let x = 16;

// if(iseven(x)){
//     console.log("this is an even number");
// }
// else{
//     console.log("this is an odd number");
// }



// function lcm(x, y){
//     let i=1;
//     while(true){
//         if(i%x==0 && i%y==0){
//             return i;
//         }
//         else{
//             i++;
//         }
//     }
    
// }

// let x = 3, y = 1000;

// let result = lcm(x, y);
// console.log(result);

// function add(x, y){
//     return x+y; 
// }

// let x = 3, y = 1000;

// let result = add(x, y);
// console.log(result);

// let complex = {
//     realPart : "5",
//     imgPart : "5",
//     show : function(){
//         return this.realPart + " + " + this.imgPart + "i";
//     }
// };


// console.log(complex.show());

// let person = {
//     firstName : "neeraj",
//     lastName : "sharma",
//     eyeColor : "brown",
//     fullName : function(){
//         return this.firstName + this.lastName
//     }
// }

// console.log(person.fullName());

// let person = new Object();
// person.firstName = "neeraj";
// person.lastName = "sharma";
// person.age = 28;

// delete person.age;
// // console.log(Object.values(person));
// for (x in person){
//     console.log(person[x]); //console.log(person.x)
// }

// console.log("hello".toUpperCase());


//------------------------------ get keyword

// let person = {
//     fname : "neeraj",
//     lname : "sharma",
//     get fullname(){
//         return this.fname+this.lname;
//     }
// }

// console.log(person.fullname)




//------------------------------ set keyword

// let person = {
//     fname : "neeraj",
//     lname : "",
//     set lastname(name){
//         this.lname = name;
//     }
// }


// person.lastname = "sharma";

// console.log(person.lname)



