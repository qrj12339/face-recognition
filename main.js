//https://teachablemachine.withgoogle.com/models/0_TIx0_RZ/
Webcam .set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }) ;

    
}
console.log("ml5 version:" , ml5.version);https
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0_TIx0_RZ/model.json",modelloaded());
function modelloaded()
{
    console.log("Model has been initialized.")
}