Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
webcam = document.getElementById("webcam")
Webcam.attach("#webcam")

function takepic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img src='" + data_uri + "' id='taken_image'>"
    })
}
console.log("ml5 version:" + ml5.version)

classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ji5_GK0cA/model.json",modelloaded)

function modelloaded(){
    console.log("MODEL IS LOADED!!!!")
}

function identify(){
    img=document.getElementById("taken_image")
    classifier.classify(img,gotresult)
}

function gotresult(error,output){
    if(error){
        console.error(error)
    }
    else{
        console.log(output)
        document.getElementById("object_ans").innerHTML=output[0].label
        document.getElementById("Accuracy").innerHTML=output[0].confidence.toFixed(3)

    }
}