// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// div.addEventListener("click",function(){
//     console.log("div is clicked ");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropaagtion();
//     console.log("ul is clicked ");
// })
// for (li of lis) {
//     li.addEventListener("click",function(event){
//     event.stopPropaagtion();
//         console.log("li is clicked ");
//     })
// }
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText ="delete";
    delbtn.classList.add("del");
    li.appendChild(delbtn);
   
    ul.append(li);
    inp.value = "";   
   
})
// let delbtns = document.querySelectorAll(".del");
// for (dx of delbtns) {
//     dx.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
    // console.log("button clicked");
})