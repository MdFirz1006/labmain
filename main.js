const form1 = document.querySelector("form")
const inner_input = document.querySelectorAll(".inner_input")
const error_text = document.querySelectorAll(".error_text")
const submit_btn = document.querySelectorAll(".submit_btn")
const inner_div = document.querySelectorAll(".inner_div")
const wrap_div = document.querySelectorAll(".container1")
console.log(submit_btn)
//listening event

const component = ["CPU","monitor","kayboard","mouse"]
let compArr = []
let arr = []
function showMsg(ranNum,arr) {
    
    submit_btn.forEach(function (item, i) {   
        item.addEventListener("click", (e) => {
            console.log("index valu is", i)
            console.log("div value is", e.currentTarget.getAttribute("id"))
            if (i == e.target.getAttribute("id")) {
                if (ranNum==1) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "cpu Problem"
                        }
                    })
                }
                if (ranNum==2) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "All is okk"
                        }
                    })
                }
                if (ranNum==3) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "All is okk"
                        }
                    })
                }
                if (ranNum==4) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "Monitor Problem"
                        }
                    })
                }
                if (ranNum==5) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "Mouse Problem"
                        }
                    })
                }
                if (ranNum==6) {
                    error_text.forEach(function (val, id) { 
                        console.log("errortext id is", val.getAttribute("id"))
                        console.log("errortext id",id)
                        if (val.getAttribute("id")==e.currentTarget.getAttribute("id")) {
                           val.textContent = "keyboard Problem"
                        }
                    })
                }
               
            }
            
        })
    });
    

    
}

function errorMsg(inputArr) {

    let ranNum = Math.round(Math.random() * 6)
    showMsg(ranNum,inputArr)
}
// inner_div.addEventListener("change", (e) => {
//     arr.push(e.target.value)
//     errorMsg(arr)
// })


for (const value of inner_div) {
    console.log(value)
    value.addEventListener("change", (e) => { 
        arr.push(e.target.value)
        errorMsg(arr)
    })
}