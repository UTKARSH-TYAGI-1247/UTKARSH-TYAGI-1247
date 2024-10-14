/*let a=()=>{
    console.log("Arrow Function");
};

let b=()=>console.log("Arrow function 2");

b();
a();

let c=(x,y)=>
{
    return x+y;
}
let res=c('Rahul',"Ravi");
let res1=c(12,32);
console.log(res,res1)

function display(){
    let p1=document.querySelectorAll('p');
    p1[0].innerHTML="I am in para";
    p1[0].style.backgroundColor="yellow";
    p1[1].innerHTML="I am in 2nd para";
    p1[1].style.backgroundColor="red";
}

let changeheader = () => {
    let head1 = document.querySelector('h1');
    head1.textContent = "Title is changed";
    let a1 = docume.querySelector("a");
    a1.setAttribbute("href","https://altu.ac.in");
    a1.innerHTML = "AKTU Website";
};*/

let addcontent = () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a new div';
    const body = document.querySelector('body');
    body.appendChild(newDiv);

};
