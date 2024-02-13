music_1="";
music_2="";
rightwrist_X="";
rightwrist_Y="";
leftwrist_X="";
leftwrist_Y="";
scoreleftwrist="";

function preload(){
    music_1=loadSound("music.mp3");
    music_2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(325,150);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',got_poses);
}
function got_poses(results){

    if(results.length>0){
        console.log(results);

        rightwrist_X=results[0].pose.rightWrist.x;
        rightwrist_Y=results[0].pose.rightWrist.y;

        scoreleftwrist= results[0].pose.keypoints[9].score;
        leftwrist_X=results[0].pose.leftWrist.x;
    leftwrist_Y=results[0].pose.leftWrist.y;

    console.log("leftwrist x="+leftwrist_X+"leftwrist y="+"rightwrist");
    }
}
function model_loaded(){
    console.log("model loaded");
}
function draw(){
    image(video,0,0,600,400);

music_1.isPlaying();

    fill("red");
    stroke("red");
 
    if(scoreleftwrist > 0.2){

        circle(leftwrist_X,leftwrist_Y,20);
        music_2.stop();
        if(music_1){

           music_1.play() ;
           music_1.setVolume(1);
           music_1.rate(0.8);
           document.getElementById("song").innerHTML="Song - Harry potter remix";
        }
    }


}
