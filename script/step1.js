let pipette = document.querySelector("#pipette")
let psol = document.querySelector("#pipettesol")
let msol = document.querySelector("#msolution")
let mcyl = document.querySelector("#mcylinder")
let ms =document.querySelector("#ms")
let dwater = document.querySelector("#distilled")
let dsol = document.querySelector("#dwatersol")
let sb = document.querySelector("#sulphuric")
let ss = document.querySelector("#sulphuricsol")
let sc = document.querySelector("#sulcap")

let d1 = document.querySelector("#dsolsmall1")
let d2 = document.querySelector("#dsolsmall2")
let d3 = document.querySelector("#dsolsmall3")
let d4 = document.querySelector("#dsolsmall4")
let d5 = document.querySelector("#dsolsmall5")

let m100 = document.querySelector("#m100")


let changeins = "Click on measuring cylinder to place this measured solution into S1 labelled dessicator"
let changeins1 = "Click on distilled water bottle to measure 90mL of distilled water" 
let changeins2 = "Click again on pipette to take 10mL more sulphuric acid "
let changeins3 = "Click again on pipette to take 20mL more sulphuric acid "
let changeins4 = "Click on pipette to take 10mL sulphuric acid and pour it in measuring cylinder"
let dessicator=1
let dsoltest1="translate(-222%,-120%) rotate(-25deg)"
let dsoltest2="translate(-219%,-130%) rotate(-25deg)"
let dsolheight="20%"
// let msolheight="27%"
let mtest=m100
let mtestleft="32.9%"
let mtestleft1="33%"
let msolleft="34%"
let msolleft1="31.7%"
let msolbottom="47.2%"
let msolbottom1="49%"
// let msolbottom2="11%"
let dessi=d5
let msleft="39.1%"
let ssolheight="15%"
let psolheight="10%"
let msolheight="2%"


function diswater(){
    if(f==1){
        f=2
        dwater.style.transform="translate(-150%,-80%) rotate(-25deg)"
        dsol.style.transform=dsoltest1
        // "translate(-222%,-120%) rotate(-25deg)"
        setTimeout(function(){
            ms.style.visibility="visible"
            setTimeout(function(){
                msol.style.height="27%"
                dsol.style.height=dsolheight
                dsol.style.transform=dsoltest2
                // "translate(-219%,-130%) rotate(-25deg)"
                setTimeout(function(){
                    mcyl.style.transitionDuration="0s"
                    msol.style.transitionDuration="0s"
                    msol.style.visibility="hidden"
                    mcyl.style.visibility="hidden"
                    mtest.style.visibility="visible"
                    // m100.style.transitionDuration="1s"
                    dwater.style.transform="translate(0%,0%) rotate(0deg)"
                    dsol.style.transform="translate(0%,0%) rotate(0deg)"
                    ms.style.visibility="hidden"
                    f=3
                    // if(dessicator==1){
                    //     ins.innerText=changeins4
                    // }
                    // else{
                    // }
                    ins.innerText=changeins
                },1000)
            },500)
        },1000)

    }
}


function measure(){
    if(f==3){
        f=4
        m100.style.transitionDuration="1s"
        m100.style.top="24%"
        mcyl.style.top="24%"
        msol.style.bottom=msolbottom
        setTimeout(function(){
            m100.style.left=mtestleft
            mcyl.style.left=mtestleft
            msol.style.left=msolleft
            setTimeout(function(){
                m100.style.rotate="25deg"
                mcyl.style.rotate="25deg"
                msol.style.rotate="25deg"
                // mtestleft+=0.1
                m100.style.left=mtestleft1
                mcyl.style.left=mtestleft1
                ms.style.left=msleft
                ms.style.top="27.5%"
                ms.style.height="55%"
                setTimeout(function(){
                    m100.style.transitionDuration="0s"
                    ms.style.visibility="visible"
                    msol.style.visibility="visible"
                    mcyl.style.visibility="visible"
                    m100.style.visibility="hidden"
                    msol.style.transitionDuration="1s"
                    mcyl.style.transitionDuration="1s"
                    setTimeout(function(){
                        msol.style.height="0%"
                        msol.style.left=msolleft1
                        msol.style.bottom=msolbottom1
                        m100.style.rotate="0deg"
                        dessi.style.height="4.7%"
                        setTimeout(function(){
                            ms.style.visibility="hidden"
                            mcyl.style.left="8%"
                            mcyl.style.rotate="0deg"
                            msol.style.rotate="0deg"
                            msol.style.left="9.1%"
                            m100.style.left="8%"
                            setTimeout(function(){
                                mcyl.style.top="60%"
                                ms.style.top="55%"
                                msol.style.bottom="11%"
                                m100.style.top="60%"
                                ms.style.left="10.7%"
                                ms.style.height="31%"
                                f=5
                                ins.innerText=changeins4
                                dessiicator1()
                                if(dessicator==6){
                                    ins.innerText="click on Next button"
                                    startbutton.style.visibility="visible"
                                    startbutton.innerText="Next"
                                }
                            },1000)
                        },1000)
                    },100)
                },1000)
            },1000)
        },1000)
    }
}








function pipette1(){
    if(f==5){
        f=6
        pipette.style.rotate="0deg"
        pipette.style.transform="translate(0%,-250%)"
        setTimeout(function(){
            pipette.style.transform="translate(190%,-250%)"
            sc.style.transform="translate(0%,-50%)"
            setTimeout(function(){
                sc.style.transform="translate(50%,-50%) rotate(60deg)"
                pipette.style.transform="translate(190%,-100%)"
                setTimeout(function(){
                    psol.style.height=psolheight
                    ss.style.height=ssolheight
                    setTimeout(function(){
                        pipette.style.transform="translate(190%,-250%)"
                        psol.style.bottom="58%"
                        sc.style.transform="translate(0%,-50%) rotate(0deg)"
                        setTimeout(function(){
                            pipette.style.transform="translate(-650%,-250%)"
                            psol.style.left="10.0%"
                            sc.style.transform="translate(0%,0%)"
                            setTimeout(function(){
                                pipette.style.transform="translate(-650%,-150%)"
                                psol.style.bottom="32.5%"
                                setTimeout(function(){
                                    psol.style.height="0%"
                                    msol.style.height=msolheight
                                    setTimeout(function(){
                                        pipette.style.transform="translate(-650%,-250%)"
                                        psol.style.left="20.9%"
                                        setTimeout(function(){
                                            pipette.style.transform="translate(0%,-250%)"
                                            psol.style.bottom="21%"
                                            setTimeout(function(){
                                                pipette.style.transform="translate(0%,0%)"
                                                pipette.style.rotate="-90deg"
                                                if(trial==0){
                                                    trial=1
                                                    f=5
                                                    psolheight="10%"
                                                    msolheight="6.5%"
                                                    ins.innerText=changeins2
                                                    if(dessicator==4 || dessicator==5){
                                                        ins.innerText=changeins3
                                                        psolheight="18.5%"
                                                        msolheight="8.6%"
                                                    }
                                                }
                                                else if(trial==1){
                                                    if(dessicator==4){
                                                        f=5
                                                        psolheight="10%"
                                                        msolheight="12%"
                                                        ins.innerText=changeins2
                                                        trial=2
                                                    }
                                                    else if(dessicator==5){
                                                        console.log(msolheight)
                                                        f=5
                                                        if(msolheight=="8.6%"){
                                                            trial=1
                                                            psolheight="18.5%"
                                                            msolheight="15%"
                                                            ins.innerText=changeins3
                                                        }
                                                        else{
                                                            psolheight="10%"
                                                            msolheight="18.5%"
                                                            ins.innerText=changeins2
                                                            trial=2

                                                        }
                                                    }
                                                    // else if(dessicator==2){
                                                    //     f=5
                                                    //     psolheight="18.5%"
                                                    //     msolheight="5%"
                                                    // }
                                                    else{
                                                        f=1
                                                        ins.innerText=changeins1
                                                        msolheight="4%"
                                                    }
                                                    console.log(f)
                                                }
                                                else{
                                                    f=1
                                                    ins.innerText=changeins1 
                                                     msolheight="4%"
                                                     console.log(f)
                                                }
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



function dessiicator1(){
    if(dessicator==1){
        dessicator=2
        dessi=d4
        dsol.style.height="20%"
        dsolheight="18%"
        dsoltest1="translate(-219%,-130%) rotate(-25deg)"
        dsoltest2="translate(-218%,-145%) rotate(-25deg)"
        mtest=m100
        mtestleft="44.9%"
        mtestleft1="45%"
        msolleft="46%"
        msolleft1="43.7%"
        msolbottom="47.2%"
        msolbottom1="49%"
        msleft="51.1%"
        ssolheight="15%"
        changeins="Click on measuring cylinder to place this measured solution into S2 labelled dessicator"
        changeins4="Click on pipette to take 20mL sulphuric acid and pour it in measuring cylinder"


    }
    else if(dessicator==2){
        dessicator=3
        dessi=d3
        dsol.style.height="18%"
        dsolheight="16%"
        dsoltest1="translate(-218%,-145%) rotate(-25deg)"
        dsoltest2="translate(-215%,-163%) rotate(-25deg)"
        mtest=m100
        mtestleft="56.9%"
        mtestleft1="57%"
        msolleft="58%"
        msolleft1="55.7%"
        msolbottom="47.2%"
        msolbottom1="49%"
        msleft="63.1%"
        ssolheight="13%"
        psolheight="18.5%"
        trial=0
        changeins="Click on measuring cylinder to place this measured solution into S3 labelled dessicator"
        changeins1 = "Click on distilled water bottle to measure 70mL of distilled water" 
        
    }

    else if(dessicator==3){
        dessicator=4
        dessi=d2
        dsol.style.height="16%"
        dsolheight="14%"
        dsoltest1="translate(-215%,-163%) rotate(-25deg)"
        dsoltest2="translate(-210%,-188%) rotate(-25deg)"
        mtest=m100
        mtestleft="68.9%"
        mtestleft1="69%"
        msolleft="70%"
        msolleft1="67.7%"
        msolbottom="47.2%"
        msolbottom1="49%"
        msleft="75.1%"
        ssolheight="11%"
        psolheight="18.5%"
        trial=0
        changeins="Click on measuring cylinder to place this measured solution into S4 labelled dessicator"
        changeins1 = "Click on distilled water bottle to measure 50mL of distilled water" 
    }
    

    else if(dessicator==4){
        dessicator=5
        dessi=d1
        dsol.style.height="14%"
        dsolheight="13%"
        dsoltest1="translate(-210%,-188%) rotate(-25deg)"
        dsoltest2="translate(-210%,-203%) rotate(-25deg)"
        mtest=m100
        mtestleft="80.9%"
        mtestleft1="81%"
        msolleft="82%"
        msolleft1="79.7%"
        msolbottom="47.2%"
        msolbottom1="49%"
        msleft="87.1%"
        ssolheight="9%"
        psolheight="18.5%"
        trial=0
        changeins="Click on measuring cylinder to place this measured solution into S5 labelled dessicator"
        changeins1 = "Click on distilled water bottle to measure 30mL of distilled water" 
    }
    

    else if(dessicator=="5"){
        dessicator=6
        f=100
    }


}