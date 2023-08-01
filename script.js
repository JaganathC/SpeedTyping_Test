let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl=document.getElementById("spinner");

spinnerEl.classList.toggle("d-none")
let count=0;
function clock(){
    count+=1;
    timerEl.textContent=count;
    
}
let countervalue= setInterval(clock,1000);
function getQuote(){
    let url="https://apis.ccbp.in/random-quote";
    let options={
        method:"GET",
    }
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
          spinnerEl.classList.add("d-none");
        let quote=jsonData.content;
        quoteDisplayEl.textContent=quote;
      });
  

}
getQuote();
clock();

submitBtnEl.onclick=function(){
    if(quoteInputEl.value===quoteDisplayEl.textContent){
        resultEl.textContent="You typed in "+count+" seconds";
        clearInterval(countervalue);
        resultEl.classList.add("respa");
    }else{
        resultEl.textContent="You typed incorrect sentence";
        clearInterval(countervalue);
        resultEl.classList.add("respa");
    }
};

resetBtnEl.onclick=function(){
    spinnerEl.classList.remove("d-none");
    getQuote();
    clock();
    count=0;
    resultEl.textContent="";
    quoteInputEl.value="";
    
}
