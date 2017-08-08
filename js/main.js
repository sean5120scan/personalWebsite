
window.onload=function(){
  var nav=document.querySelector("#nav")
  var navLis=nav.querySelectorAll("li");
  var pageGroup=document.querySelector("#pageGroup");
  var wrap=document.querySelector("#wrap");
  var pages=pageGroup.querySelectorAll(".page")


  var prevBtn=document.querySelector(".prev")
  var nextBtn=document.querySelector(".next")
  var winHeight=document.documentElement.clientHeight
  var curIndex=1;


  pageGroup.style.height=wrap.style.height=document.documentElement.clientHeight+"px";

  prevBtn.onclick=function(){
    if(curIndex==1){

    return

    }
      var curPage=document.getElementById("page"+curIndex)
      curPage.style.transform="rotateX(120deg)"
      curIndex--
      var prevPage=document.getElementById("page"+curIndex)
      prevPage.style.transform="rotateX(0deg)";


  }

  nextBtn.onclick=function(){
          if(curIndex==pages.length){

             return
          }
      var curPage=document.querySelector("#page"+curIndex)

      curPage.style.transform="rotateX(-120deg)"
      curIndex++
      var nextPage=document.querySelector("#page"+curIndex)
      nextPage.style.transform="rotateX(0deg)";

  }

//弹性导航
  var navSpeed=0;
  var leftVal=0;

  var lastNavli=navLis[navLis.length-1];

  lastNavli.innerHTML=navLis[0].innerHTML;

  makeMoveNav(navLis,lastNavli)  //首页导航

  function makeMoveNav(navs,lastLi){

      lastLi.innerHTML=navs[0].innerHTML;
      for(var i=0;i<navs.length-1;i++){
          navs[i].onmouseover=function(){
             moveflexNav(lastLi,this.offsetLeft)
             lastLi.innerHTML=this.innerHTML
          }
      }
  }

  function moveflexNav(ele,target){

     clearInterval(ele.timer);

     ele.timer=setInterval(function(){

        navSpeed+=(target-ele.offsetLeft)/8;
        navSpeed*=0.7;
        leftVal+=navSpeed;
        ele.style.left=leftVal+"px"

     },30)
  }

//page2 点击查看个人详情
var pInfoEles=document.querySelectorAll(".pInfo");
var submit=document.querySelector(".submit");
submit.onoff=false;
submit.addEventListener("click",function(){
this.onoff=!this.onoff;
for(var i=0;i<pInfoEles.length;i++){
      if(submit.onoff){
        pInfoEles[1].style.transform="rotateZ(10deg)"
        pInfoEles[2].style.transform="rotateZ(20deg)"
      }else{
        pInfoEles[i].style.transform="rotateZ(0deg)"
      }
}

})





}
