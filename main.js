nosex=0;
nosey=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function draw()
{
    background('#FFC6C1');
}
function modelLoaded()
{
    console.log('posenet is initialized');
}
function gotPose(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);
    }
}
