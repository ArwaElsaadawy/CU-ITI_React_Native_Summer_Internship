var data;
var xhrBand = new XMLHttpRequest();
xhrBand.open("GET","../data/rockbands.json");
xhrBand.send('');
xhrBand.onreadystatechange = function(){
    if(xhrBand.readyState == 4){
        if(xhrBand.status == 200){
            data = JSON.parse(xhrBand.responseText);
            var keys = Object.keys(data)
            console.log(data)
            for(let i=0; i<keys.length; i++ ){
                document.getElementById("band").innerHTML += "<option value='" + keys[i] + "'>" + keys[i] + "</option>";
            }
        }
    }
}


function showArtists(selectElement){   
    var selectedValue = selectElement.value.trim();
    if (selectedValue != "") {
        var art = data[selectedValue]
        console.log(art);
        document.getElementById("artist").innerHTML = "";
        for (let i = 0; i < art.length; i++) {
            var artist = art[i];
            document.getElementById("artist").innerHTML += "<option value='" + artist.value + "'>" + artist.name + "</option>";
        } 
        
    }   
}

function openPage(selectElement){
    var selectedValue = selectElement.value;
    window.mywin = open(selectedValue,"","width=300,height=300");

}