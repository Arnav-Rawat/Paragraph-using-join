function getPara1(){
    var inputs= [];
    for(var i=1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para1_inputbox" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getPara2(){
    var inputs= [];
    for(var i=1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para2_inputbox" + i).value);
    }
    document.getElementById("showParagraph2").innerHTML= inputs.join(". ");
}