const informasiyaAl=document.querySelector(".informaton-btn_1")
const informasiya=document.querySelector(".none_information")
const closeX=document.querySelector(".close_information")

const informasiyaAlFunc=function(){
    if(informasiya.className==="none_information information_close"){
        informasiya.className="none_information information_open"
    }else if( informasiya.className="none_information information_open"){
        informasiya.className="none_information information_close"
    }
    console.log("a")
}
informasiyaAl.addEventListener("click",informasiyaAlFunc)

const closeXFunc=function(){
    informasiya.className="none_information information_close"
}
closeX.addEventListener("click",closeXFunc)

const countries =function(){
    fetch("https://restcountries.com/v3.1/all").then((rp)=>{ return rp.json()}).then((data)=>console.log(data))
}

countries()