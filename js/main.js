console.log("OC-Transpo load/parse XML experiment.");

function parseData(xmlID){
    var insertPoint = document.getElementById("oct-updates");
    var octInput = document.getElementById(xmlID);
    var events = octInput.getElementsByTagName('item');

    for(var i=0;i<events.length;i++){
        //console.log(events[i]);
        var title = getFirstNodeData(events[i],'title');
        console.log("Processing "+title);

        var container = document.createElement('article');
        container.appendChild(document.createTextNode(title));

        insertPoint.appendChild(container);

    }


    //insertPoint.appendChild("test");
}

function main(){
    parseData("oct-data-en"); //rss/channel/item
    console.log("Done.");
}

function getFirstNodeData(node, tag){
    return node.getElementsByTagName(tag)[0].firstChild.data;
}

/*

// Cannot load external XML, especially while loading index as a file.
function loadOCTData(){

    language = (lang)? lang : "en";
    console.log("Loading "+language);

    var OCT = new XMLHttpRequest();
    OCT.addEventListener("load", processOCTData);
    OCT.open('GET',('./data/oct-fr.xml'),true);
    OCT.send(null);
}

function processOCTData(){
    console.log("Processing OCT Data...");
}



*/

window.addEventListener('load',main);
