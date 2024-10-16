/*let num=[1,2,3,4,45,5,44];
let newnum=num.map(x=>x*2);
console.log(newnum)
let product=num.reduce((x,y)=>x*y,1);
console.log(product);
 const student = [
     { name: 'Abc', Score: 98 },
     { name: 'Hjk', Score: 95 },
     { name: 'Tyc', Score: 90 },
 ];
 let scores = student.map(x => x.Score);
 console.log(scores);
 const tscore = student.filter(x=>x.Score%10==0).reduce((sum,student)=> sum+student.Score,0);
 console.log("Total score : ", tscore);
*//*
let num = [12,3,3,4,4,4,4,98];
num.forEach((x) => console.log(x * 2));
sayhello = () =>
{
    console.log("I am in Hello func");
};
console.log("Start");
setTimeout(sayhello, 3000);
console.log("End");
setTimeout(sayhello,6000);*/

console.log("Start");
setTimeout(() => {
    console.log("first");
    setTimeout(() => {
        console.log("Second");
        setTimeout(() => {
            console.log("Third");
            setTimeout(() =>{
                console.log("Fourth");
            },4000);
        },3000);
    },2000);
},1000);
console.log("Completed");