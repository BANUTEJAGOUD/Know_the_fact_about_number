
let userInputEl=document.getElementById("userInput");
let spinnerEl=document.getElementById("spinner");
let factEl=document.getElementById("fact");
function fetchApi(value){
    let url=`https://apis.ccbp.in/numbers-fact?number=${value}`;
    let options={
        method:"GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        spinnerEl.classList.toggle("d-none");
        let {fact}=data;
        factEl.textContent=fact;
    });
}
function displayResult(event){
    let value=userInputEl.value;
    if(event.key==="Enter" && value===""){
        alert("please enter a valid number");
    }
    else if(event.key==="Enter" && value!==""){
        spinnerEl.classList.toggle("d-none");
        fetchApi(value);
    }
}
userInputEl.addEventListener("keydown",displayResult);