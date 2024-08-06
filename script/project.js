
var hmessage=["उपकरणों पर माउस ले जा कर उनसे स्वयं को परिचित कराएं.....फिर प्रयोग शुरू करने के लिए आगे बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर पर पावर बटन दबाएं",
"फ़ंक्शन नॉब घुमाएँ और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए सेल-कॉन्स्ट नॉब घुमाएँ",
"फ़ंक्शन नॉब घुमाएँ और MHOS मोड पर वापस सेट करें",
"अब आसुत जल द्वारा चालकता सेल को साफ करें",
"अब चालकता सेल को अलग-अलग सांद्रता वाले प्रत्येक सोडियम क्लोराइड घोल में एक-एक करके डुबोएं",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"प्रत्येक हाइड्रो क्लोरिक एसिड घोल के लिए रीडिंग लिखें",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"सोडियम एसीटेट घोल के लिए रीडिंग लिखें",
"सभी रेटिंग, मान और गणना देखने के लिए observations बटन दबाएँ"]

var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment",
"Turn on the main switch",
"Press the power button on conductometer",
"Rotate FUNCTION knob and set on CELL-CONST mode",
"Rotate CELL-CONST knob to set cell constant",
"Rotate FUNCTION knob and set back on MHOS mode",
"Now clean the conductivity cell by Distilled water",
"Now dip conductivity cell in each sodium chloride solution of different concentration one by one",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for each Hydro Chloric acid solution",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for Sodium acetate solution",
"press observations button to see all readings, values and calculations"]



let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let tablesdiv = document.querySelector("#tablesdiv")
let inftext = document.querySelector("#inftext")

let statuses = 0
let f=0
let trial=1
let st3

function start(){
    if(statuses==0){
        startlab.style.visibility="hidden"
        statuses=1
        startbutton.style.visibility="hidden"
        f=1
        ins.innerText="Click on distilled water bottle to measure 100mL of distilled water"
    }
    else if(f==100){
        stp1.style.visibility="hidden"
        stp2.style.visibility="visible"
        startbutton.style.visibility="hidden"
        mcyl.style.visibility="hidden"
        ins.innerText=" Click on plates to place them into dessicators"
    }
    else if(f==200){
        startbutton.style.visibility="hidden"
        observer()
        deslid=lid4
        petridish=petri1
        pbread=pbread1
        petrileft="39.5%"
        pbreadleft="39.5%"
        st3="Click on dessicator S1's lid to open it and take out the sample"
        ins.innerText=st3

    }
    else if(f==300){
        startbutton.style.visibility="hidden"
        observer()
        deslid=lid4
        petridish=petri1
        pbread=pbread1
        petrileft="39.5%"
        pbreadleft="39.5%"
        st3="Click on dessicator S1's lid to open it and take out the sample"
        ins.innerText=st3
        f=200
    }
    else if(f==400){
        startbutton.style.visibility="hidden"
        observer()
        tablesdiv.style.opacity="100%"
        f=500
        setTimeout(function(){
            ins.innerText="Click 'Inference' button to see the experiment Outcome"
            startbutton.innerText="Inference"
            startbutton.style.visibility="visible"
        },5000)
    }
    else if(f==500){
        observe.style.visibility="visible"
        observe.style.opacity="100%"
        obtext.style.top="5%"
        obtext.style.left="40%"
        obtext.style.fontSize="5vw"
        startbutton.style.visibility="hidden"
        obtext.innerText="Inference"
        tablesdiv.style.opacity="0%"
        setTimeout(function(){
            inftext.style.opacity="100%"
            tablesdiv.style.visibility="hidden"
        },2000)
    }
}



start()

