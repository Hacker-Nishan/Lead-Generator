
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    
    renderLead()
    inputEl.value=""
    console.log(myLeads)
    
})

function renderLead(){
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem;
    
}

// function renderLeads(){
//     //create element
//     //set text content
//     //append to ul

//     //Good code
//     let listItems = ""
// for (let i=0; i < myLeads.length; i++){
//     listItems += "<li>" + myLeads[i] + "</li>"
// }
// ulEl.innerHTML = listItems
// console.log(listItems)
// }

//Bad code
// for(let i=0; i < myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }
// console.log(ulEl)
// }











