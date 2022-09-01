img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
     load = loadImage("dog_cat.jpg");
}

function draw()
{
image(load, 0 ,0 , 640, 300);

if(status != "")
{
    for(i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status: Object Detected";
        fill("red");
        percent = floor(object[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
        noFill();
        stroke("red");
        rect(object[i].x , object[i].y , object[i].width, object[i].height);
    }
}
}

function modelloaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.log(error);
}
console.log(results);
objects = results;
}