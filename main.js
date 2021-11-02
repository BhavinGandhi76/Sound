function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZDoKsnZ0W/model.json", modelloaded);
}

function modelloaded(){
    classifier.classify(gotresult);
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML= "I can Hear-"+result[0].label;
        document.getElementById("result_confidence").innerHTML= "Accuracy-"+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
        image = document.getElementById("image");
        if(result[0].label=="Bark"){
            image.src="Dog.png";
        }
        else if(result[0].label=="Meow"){
            image.src="Cat.jpg";
        }
        else if(result[0].label=="Moo"){
            image.src="cow_gif.gif";
        }
        else if(result[0].label=="Roar"){
            image.src="Tiger.gif";
        }
    
    }
}