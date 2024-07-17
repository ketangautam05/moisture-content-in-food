

let dp1 = document.querySelector("#dp1")
let dp2 = document.querySelector("#dp2")
let dp3 = document.querySelector("#dp3")
let dp4 = document.querySelector("#dp4")
let dp5 = document.querySelector("#dp5")

let petri1 = document.querySelector("#petri1")
let petri2 = document.querySelector("#petri2")
let petri3 = document.querySelector("#petri3")
let petri4 = document.querySelector("#petri4")
let petri5 = document.querySelector("#petri5")

let pbread1 = document.querySelector("#pbread1")
let pbread2 = document.querySelector("#pbread2")
let pbread3 = document.querySelector("#pbread3")
let pbread4 = document.querySelector("#pbread4")
let pbread5 = document.querySelector("#pbread5")
let bread = document.querySelector("#bread")

let lid = document.querySelector("#lid")
let lid1 = document.querySelector("#lid1")
let lid2 = document.querySelector("#lid2")
let lid3 = document.querySelector("#lid3")
let lid4 = document.querySelector("#lid4")


let rbread = document.querySelector("#rbread")
let sbread = document.querySelector("#sbread")
let echimty = document.querySelector("#echimty")


let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")

let observe = document.querySelector("#observe")
let obtext = document.querySelector("#obtext")


let petridish = petri1
let pbread = pbread1
let petrileft = "39.5%"
let pbreadleft = "39.5%"
let sttrial = "1st"
let deslid = lid4







function on1(){
    if(f==102){
        reading.style.opacity="100%"
        f=103
        ins.innerText="Place a petridish on weighing scale"
    }
}


function pt1(){
    if(f==103){
        f=104
        petridish.style.top="72%"
        setTimeout(function(){
            petridish.style.left="10%"
            setTimeout(function(){
                if(petridish==petri1){
                    reading.innerText="03.65"
                    f=105
                    ins.innerText="Tare the weighing scale"
                }
                else{
                    reading.innerText="00.00"
                    f=106
                    ins.innerText="Again click on Fork to weigh another 10g of bread"
                }
            },1000)
        },1000)
    }
}

function tare1(){
    if(f==105){
        f=106
        reading.innerText="00.00"
        ins.innerText="Click on Fork to weigh 10g of bread"
    }
}

function echimty1(){
    if(f==106){
        f=107
        rbread.style.top="76%"
        rbread.style.left="23%"
        sbread.style.top="76%"
        sbread.style.left="23%"
        rbread.style.visibility="visible"
        sbread.style.visibility="visible"

        echimty.style.top="79%"
        echimty.style.rotate="-29deg"
        setTimeout(function(){
            echimty.style.left="23.5%"
            setTimeout(function(){
                echimty.style.opacity="0%"
                rbread.style.opacity="100%"
                setTimeout(function(){
                    rbread.style.top="60%"
                    echimty.style.top="63%"
                    setTimeout(function(){
                        echimty.style.left="11%"
                        rbread.style.left="11%"
                        setTimeout(function(){
                            echimty.style.opacity="100%"
                            rbread.style.opacity="0%"
                            pbread.style.opacity="100%"
                            reading.innerText="05.06"
                            setTimeout(function(){
                                echimty.style.left="23.5%"
                                echimty.style.top="79%"
                                setTimeout(function(){
                                    echimty.style.opacity="0%"
                                    sbread.style.opacity="100%"
                                    setTimeout(function(){
                                        sbread.style.top="60%"
                                        echimty.style.top="63%"
                                        setTimeout(function(){
                                            echimty.style.left="11%"
                                            sbread.style.left="11%"
                                            setTimeout(function(){
                                                echimty.style.opacity="100%"
                                                sbread.style.opacity="0%"
                                                // pbread.style.opacity="100%"
                                                reading.innerText="10.00"
                                                setTimeout(function(){
                                                    echimty.style.left="12%"
                                                    echimty.style.top="90%"
                                                    echimty.style.rotate="0deg"
                                                    pbread.style.top="60%"
                                                    petridish.style.top="62%"
                                                    reading.innerText="-03.65"
                                                    setTimeout(function(){
                                                        pbread.style.left=pbreadleft
                                                        petridish.style.left=petrileft
                                                        setTimeout(function(){
                                                            pbread.style.top="75%"
                                                            petridish.style.top="77%"
                                                            testing()
                                                            closelid()
                                                        },1000)
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}



function testing(){
    if(sttrial=="1st"){
        sttrial="2nd"
        petridish=petri2
        pbread=pbread2
        f=103
        petrileft="51.5%"
        pbreadleft="51.5%"
        ins.innerText="Place another petridish on weighing scale"

    }
    else if(sttrial=="2nd"){
        sttrial="3rd"
        petridish=petri3
        pbread=pbread3
        f=103
        petrileft="63.5%"
        pbreadleft="63.5%"
        ins.innerText="Place another petridish on weighing scale"

    }
    else if(sttrial=="3rd"){
        sttrial="4th"
        petridish=petri4
        pbread=pbread4
        f=103
        petrileft="75.5%"
        pbreadleft="75.5%"
        ins.innerText="Place another petridish on weighing scale"

    }
    else if(sttrial=="4th"){
        sttrial="5th"
        petridish=petri5
        pbread=pbread5
        f=103
        petrileft="87.5%"
        pbreadleft="87.5%"
        ins.innerText="Place another petridish on weighing scale"

    }
    else if(sttrial=="5th"){
        sttrial="6th"
        f=200
        rbread.style.visibility="hidden"
        sbread.style.visibility="hidden"
        ins.innerText="Weigh and observe the samples after 3 days"
    }
}


function closelid(){
    if(deslid==lid4){
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="37%"
            setTimeout(function(){
                deslid.style.top="60%"
                deslid=lid3
            },1000)
        },1000)
    }
    else if(deslid==lid3){
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="49%"
            setTimeout(function(){
                deslid.style.top="60%"
                deslid=lid2
            },1000)
        },1000)
    }
    else if(deslid==lid2){
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="61%"
            setTimeout(function(){
                deslid.style.top="60%"
                deslid=lid1
            },1000)
        },1000)
    }
    else if(deslid==lid1){
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="73%"
            setTimeout(function(){
                deslid.style.top="60%"
                deslid=lid
            },1000)
        },1000)
    }
    else if(deslid==lid){
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="85%"
            setTimeout(function(){
                deslid.style.top="60%"
                deslid="none"
                // observe.style.visibility="visible"
                startbutton.style.visibility="visible"
                setTimeout(function(){
                    startbutton.innerText="Next"
                    ins.innerText="Click on Next button "
                },1000)
            },1000)
        },1000)
    }
}




function observer(){
    observe.style.visibility="visible"
    observe.style.opacity="100%"
    bread.style.visibility="hidden"
    echimty.style.visibility="hidden"
    setTimeout(function(){
        observe.style.opacity="0%"
        if(f==400){
            tablesdiv.style.opacity="100%"
        }
        setTimeout(function(){
            observe.style.visibility="hidden"
        },1000)
    },5000)

}













function plates(){
    if(f==100){
        f=101
        dp1.style.bottom="30%"
        dp2.style.bottom="30%"
        dp3.style.bottom="30%"
        dp4.style.bottom="30%"
        dp5.style.bottom="30%"
        setTimeout(function(){
            dp1.style.left="38.5%"
            dp2.style.left="50.5%"
            dp3.style.left="62.5%"
            dp4.style.left="74.5%"
            dp5.style.left="86.5%"
            setTimeout(function(){
                dp1.style.bottom="20%"
                dp2.style.bottom="20%"
                dp3.style.bottom="20%"
                dp4.style.bottom="20%"
                dp5.style.bottom="20%"
                ins.innerText="Turn on the Weighing Scale"
                f=102
            },1000)
        },1000)
    }
}