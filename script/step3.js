

let deslidleft = "37%"
let readupdate = "10.08"
let day = 3


function review(){
    if(f==200){
        f=201
        deslid.style.top="55%"
        setTimeout(function(){
            deslid.style.left="35%"
            setTimeout(function(){
                deslid.style.top="83%"
                petridish.style.top="62%"
                pbread.style.top="60%"
                setTimeout(function(){
                    petridish.style.left="10%"
                    pbread.style.left="10%"
                    setTimeout(function(){
                        petridish.style.top="72%"
                        pbread.style.top="70%"
                        setTimeout(function(){
                            reading.innerText=readupdate
                            ins.innerText="Note down the weight of the sample shown in the weighing scale's screen"
                            setTimeout(function(){
                                ins.innerText="Click on petridish to replace it in the dessicator"
                                f=202
                            },8000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}


function reverse(){
    if(f==202){
        f=203
        petridish.style.top="62%"
        pbread.style.top="60%"
        reading.innerText="-03.65"
        setTimeout(function(){
            petridish.style.left=petrileft
            pbread.style.left=pbreadleft
            setTimeout(function(){
                petridish.style.top="77%"
                pbread.style.top="75%"
                deslid.style.top="55%"
                setTimeout(function(){
                    deslid.style.left=deslidleft
                    setTimeout(function(){
                        deslid.style.top="60%"
                        f=204
                        change()
                        ins.innerText=st3
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}



function change(){
    if(deslid==lid4){
        deslid=lid3
        petridish=petri2
        pbread=pbread2
        petrileft="51.5%"
        pbreadleft="51.5%"
        deslidleft="49%"
        st3="Click on dessicator S2's lid to open it and take out the sample"
        f=200
        if(day==3){
            readupdate="09.80"
        }
        else if(day==6){
            readupdate="09.71"
        }
        else if(day==9){
            readupdate="09.62"
        }
    }
    else if(deslid==lid3){
        deslid=lid2
        petridish=petri3
        pbread=pbread3
        petrileft="63.5%"
        pbreadleft="63.5%"
        deslidleft="61%"
        st3="Click on dessicator S3's lid to open it and take out the sample"
        f=200
        if(day==3){
            readupdate="09.52"
        }
        else if(day==6){
            readupdate="09.22"
        }
        else if(day==9){
            readupdate="09.02"
        }
    }
    else if(deslid==lid2){
        deslid=lid1
        petridish=petri4
        pbread=pbread4
        petrileft="75.5%"
        pbreadleft="75.5%"
        deslidleft="73%"
        st3="Click on dessicator S4's lid to open it and take out the sample"
        f=200
        if(day==3){
            readupdate="09.24"
        }
        else if(day==6){
            readupdate="08.94"
        }
        else if(day==9){
            readupdate="08.52"
        }
    }
    else if(deslid==lid1){
        deslid=lid
        petridish=petri5
        pbread=pbread5
        petrileft="87.5%"
        pbreadleft="87.5%"
        deslidleft="85%"
        f=200
        st3="Click on dessicator S5's lid to open it and take out the sample"
        if(day==3){
            readupdate="09.15"
        }
        else if(day==6){
            readupdate="08.82"
        }
        else if(day==9){
            readupdate="08.13"
        }
    }
    else if(deslid==lid){
        deslid=lid4
        f=300
        if(day==3){
            day=6
            obtext.innerText="After 6 days."
            st3="Weigh the samples agin after 6 days"
            readupdate = "10.11"
            deslidleft="37%"
        }
        else if(day==6){
            day=9
            obtext.innerText="After 9 days."
            st3="Weigh the samples agin after 9 days"
            readupdate = "10.21"
            deslidleft="37%"
        }
        else if(day==9){
            f=400
            startbutton.innerText="Observations"
            obtext.innerText="Observation Table"
            obtext.style.top="5%"
            st3="Click on 'Observation' button to see all observations"
            tablesdiv.style.visibility="visible"
        }
        setTimeout(function(){
            startbutton.style.visibility="visible"
            ins.innerText="Click on Next button"
            if(day==9){
                ins.innerText=st3
            }
        },5000)
    }
}