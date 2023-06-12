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


const studendBox=document.querySelector(".box")
const form =document.querySelector(".form")
const search=document.querySelector(".search_input")
const formBtn=document.querySelector(".form-btn")

form.addEventListener("submit",function(e){
    e.preventDefault()
})



const searchFunc=function(){
    const searchValue=search.value.toLowerCase().trim()
    const studendFunc=function(name){
        fetch(`https://restcountries.com/v3.1/name/${name}`).then((rp)=> {return rp.json()})
        .then(([data])=>{
            console.log(data)
            const html=`<img class="student_flag" src="${data.flags.png}" alt="">
            <h4 class="student_flag-name">${data.name.common}</h4>
            <h4 class="student_number">Tələbə sayı:${data.population}</h4>`
       studendBox.insertAdjacentHTML("beforeend",html)
        })
        
    }
    studendFunc(`${searchValue}`)
}




// const request = new XMLHttpRequest()

// request.open("GET","https://restcountries.com/v3.1/all")
// request.send()

// const searchFunc=function(){
//     const [data]=JSON.parse(this.responseText)
//     console.log(data);
//     const html=`<img class="student_flag" src="${data.flags.png}" alt="">
//              <h4 class="student_flag-name">${data.name.common}</h4>`
//            studendBox.insertAdjacentHTML("beforeend",html)
// }

// request.addEventListener('load',searchFunc)


formBtn.addEventListener("click",function(){
    searchFunc()
    
})

