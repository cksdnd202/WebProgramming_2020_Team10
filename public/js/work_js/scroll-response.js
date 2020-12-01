const sideList = document.querySelectorAll(".mv-list a");
const divList = document.querySelectorAll(".poster-img");

window.addEventListener('scroll',function(){
    let nowScroll = document.documentElement.scrollTop;
    if(nowScroll > 140 && nowScroll <= 720){
        listWhite();
        sideList[0].classList.add("active");
    }
    else if(nowScroll > 720 && nowScroll <= 1400){
        listWhite();
        sideList[1].classList.add("active");
    }
    else if(nowScroll > 1400 && nowScroll <= 2100){
        listWhite();
        sideList[2].classList.add("active");
    }
    else if(nowScroll > 2100 && nowScroll <= 2800){
        listWhite();
        sideList[3].classList.add("active");
    }
    else if(nowScroll > 2800 && nowScroll <= 3400){
        listWhite();
        sideList[4].classList.add("active");
    }
    else if(nowScroll > 3400 && nowScroll <= 4000){
        listWhite();
        sideList[5].classList.add("active");
    }
    else if(nowScroll > 4000 && nowScroll <= 4700){
        listWhite();
        sideList[6].classList.add("active");
    }
    else if(nowScroll > 4700 && nowScroll <= 5400){
        listWhite();
        sideList[7].classList.add("active");
    }
    else if(nowScroll > 5400 && nowScroll <= 6000){
        listWhite();
        sideList[8].classList.add("active");
    }
    else if(nowScroll > 6000){
        listWhite();
        sideList[9].classList.add("active");
    }
    else{
        listWhite();
    }
    console.log(nowScroll);

})
//145,550

function listWhite(){
    sideList.forEach((current)=>{
        current.classList.remove("active");
    });
}