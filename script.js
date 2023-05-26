const informasiyaAl=document.querySelector(".informaton-btn_1")
const informasiya=document.querySelector(".none_information")
const closeX=document.querySelector(".close_information")
const countInfo=document.querySelector(".country_information")
const countBtn=document.querySelector(".country_btn")
const flags=document.querySelector(".flags")

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


const countBtnFunc=function(){
    if(countInfo.className==="country_information country_information-rotate_right"){
        countInfo.className="country_information country_information-rotate"
    }else{
        countInfo.className="country_information country_information-rotate_right"
    }

    if(flags.className==="flags"){
        flags.className="flags flag_rotate"
    }else{
        flags.className="flags"
    }
}

countBtn.addEventListener("click",countBtnFunc)















// const countries =function(){
//     fetch("https://restcountries.com/v3.1/all").then((rp)=>{ return rp.json()}).then(([data])=>{
//         const newData=data
//     console.log(newData)
//         // const html=`<div class="olkeler">${newData.flags.png}</div>`
//         // countInfo.insertAdjacentHTML("beforeend",html)
//     })
    
   
// }

// countBtn.addEventListener("click",countries)
//  countries(`Serbia`)

// const countries =function(){
//     fetch("https://restcountries.com/v3.1/all").then((rp)=>{ return rp.json()}).then((data)=>{console.log(data)})
    
   
// }
// countries("Azerbaijan")