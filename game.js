var gamepattern=[];
var buttonColours=["red","blue","green","yellow"];
var userpattern=[];
var lebel=1;
var flag=1;
$(document).on("keypress",function(event){
  if(event.key=="a"&&flag){
    flag=0;
    nextSequence();
  }//if(con):
             
  else{
    if(cheak_arr()==0){
      lebel=1;
      userpattern=[];
      gamepattern=[];
      nextSequence();
    }
  }
});
$(".btn").click(function(){
  var patt=$(this).attr("id");
  userpattern.push(patt);
  $("#"+patt).addClass("pressed");
  setTimeout(function(){
  $("#"+patt).removeClass("pressed");
  },50);
  playsound(patt);
  if(cheak_arr()){
    if(userpattern.length==gamepattern.length){
    userpattern=[];
    setTimeout(nextSequence,1000);
  }
  }
  else{
    $("#level-title").text("wrong,press any key to play again");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    playsound("wrong");
  }
});
function nextSequence(){
    $("#level-title").text("Level "+lebel);
    var randomnumber=Math.floor(Math.random()*4);
    var randomchoosecolor=buttonColours[randomnumber];
    gamepattern.push(randomchoosecolor);
    $("#"+randomchoosecolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchoosecolor);
    lebel=lebel+1
}
function playsound(name){
  var adi=new Audio(name+".mp3");
    adi.play();
}
function cheak_arr(){
  for(var i=0;i<userpattern.length;i++){
    if(userpattern[i]!=gamepattern[i]){
      return 0;
    }
  }
  return 1;
}