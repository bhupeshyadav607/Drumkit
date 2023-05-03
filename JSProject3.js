var ee=document.getElementById("ee");
var rr=document.getElementById("rr");
var ff=document.getElementById("ff");
var gg=document.getElementById("gg");
var vv=document.getElementById("vv");
var bb=document.getElementById("bb");
var hh=document.getElementById("hh");
var jj=document.getElementById("jj");
var ii=document.getElementById("ii");
var kk=document.getElementById("kk");


//function eau(){
//    let ee=document.getElementById("ee");
//    if(ee.paused){
//        ee.play();
//    }else{
//        ee.pause();
//    }
//    
//}

 
function animateCOR(){
        let c=document.getElementById("crash");
        c.style.transform='rotate(0deg) scale(1.1)';
        c.addEventListener('transitionend',()=>{
                //console.log("transitionended");
                c.style.transform='rotate(-7deg) scale(1.1)';
        });      
}

function animateHihat(){
        let h=document.getElementById("hihat");
        h.style.top='135px';
        h.addEventListener('transitionend',()=>{
                //console.log("transition ended");
                h.style.top='130px';
        });
}


window.addEventListener('keydown',function(i){
    //console.log(i.key);
    switch(i.key){
        case 'e':ee.currentTime=0
                ee.play();
                animateCOR();
                break;
        case 'r':rr.currentTime=0
                rr.play();
                animateCOR();
                break;
        case 'f':ff.currentTime=0
                ff.play();
                break;
        case 'g':gg.currentTime=0
                gg.play();
                    break;
        case 'v':vv.currentTime=0
                vv.play();
                break;
        case 'b':bb.currentTime=0
                bb.play();
                break;
        case 'h':hh.currentTime=0
                hh.play();
                break;
        case 'j':jj.currentTime=0
                jj.play();
                break;
        case 'i':ii.currentTime=0
                ii.play();
                animateHihat();
                break;
        case 'k':kk.currentTime=0
                kk.play();
                animateHihat();
                break;
        default:return;
    }
});

//window.addEventListener('keyup',pauseall);
//
//function pauseall(k){
//    //console.log(k.key);
//    switch(k.key){
//        case 'e':ee.pause();
//                ee.currentTime=0;
//                break;
//        case 'r':rr.pause();
//                rr.currentTime=0;
//                break;
//        case 'f':ff.pause();
//                ff.currentTime=0;
//                break;
//        case 'g':gg.pause();
//                gg.currentTime=0;
//                    break;
//        case 'v':vv.pause();
//                vv.currentTime=0;
//                break;
//        case 'b':bb.pause();
//                bb.currentTime=0;
//                break;
//        case 'h':hh.pause();
//                hh.currentTime=0;
//                break;
//        case 'j':jj.pause();
//                jj.currentTime=0;
//                break;
//        case 'i':ii.pause();
//                ii.currentTime=0;
//                break;
//        case 'k':kk.pause();
//                kk.currentTime=0;
//                break;
//        default:return;
//    }
//}
