
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
  var can=document.querySelector("#can")

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

//绘制水波纹

var ctx=can.getContext("2d")
var waterColor=["#c6cacf","#294970","#4a515a"]

var angle=0;

window.requestAimFrames=(function(){
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        function( callback ){
        window.setTimeout(callback, 1000 / 60);
       };
 })();

 loop();

function loop(){

      ctx.clearRect(0, 0, can.width, can.height)
      angle++;

    for(var i=0;i<waterColor.length;i++){

        var deg=(angle+i*45)*Math.PI/180
        var detalLeftH= 20*Math.sin(deg)-20;
        var detalRightH=50*Math.cos(deg)-10;

        ctx.fillStyle=waterColor[i];
        ctx.beginPath();
        ctx.moveTo(0,can.height/2+detalLeftH)

        ctx.bezierCurveTo(can.width/2,can.height/2+detalLeftH-10,
                          can.width/2,can.height/2+detalLeftH-20,
                          can.width, can.height/2+detalRightH
                         )
        ctx.lineTo(can.width, can.height)
        ctx.lineTo(0, can.height)
        ctx.lineTo(0, can.height/2+detalLeftH)
        ctx.closePath();
        ctx.fill()

    }
    requestAnimationFrame(loop)
}




}
