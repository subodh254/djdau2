beliver ="";
harry_poter = "";

leftWristX = "0";
leftWristY = "0";
rightWristX="0";
rightWristY = "0";

leftWristsocre ="0";
songStatus ="";

function preload()
{
  beliver =  loadSound("song1.mp3");
   harry_poter =  loadSound("song2.mp3");

  

}


function setup(){
    canvas = createCanvas(600,500);
  canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);


}


function gotPoses(results){
 console.log(results);

leftWristsocre = results[0].pose.keypoints[9].score;
console.log("left Wrist Score ="+leftWristsocre);
songStatus = results[0].pose.keypoints[9].score;

  if(results.length>0){
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX ="+leftWristX+"leftWristY = "+leftWristY);


    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+rightWristX+"rightWristY="+rightWristY);

  }
}

function isPlaying(){
  song_beliver.isPlaying();

}
function modelLoaded(){
  console.log("poseNet is inescelized");
}
 function draw(){
image(video,0,0,600,)



fill("#f5120a");
stroke("#080000");


if(leftWristsocre > 0.2){
  circle(leftWristX,leftWristY,20);
  harry_poter.stop();
  if(songStatus == false){
    beliver.play();
    document.getElementById("song_name").innerHTML = "Playing beliver";
  }
}


}



function beliver1(){
    beliver.play();
    document.getElementById("song_name").innerHTML = "Beliver";
}

function harry()
{

   
    harry_poter.play();
    document.getElementById("song_name").innerHTML ="Harry poter them song ";
}


