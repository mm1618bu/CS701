(function() {

    window.onload = init;

    var senators = [];

    var src, target, msg;
    
     
    function init(){
        src = document.getElementById("members");
        target = document.getElementById("dropLists");
        msg = document.getElementById("msg");
    
        src.ondragstart = dragStartHandler;
        src.ondragend = dragEndHandler;
        src.ondrag = dragHandler;
        src.onEnterDem = dragEnterDemocratsHandler;
        src.ondropDem = dropDemocratsHandler;
    }

    // Function to parse XML to JSON
function xmlToJson(xml) {
    let obj = {};
    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let i = 0; i < xml.attributes.length; i++) {
          const attribute = xml.attributes[i];
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj = xml.nodeValue;
    }
  
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes[i];
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] === "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === "undefined") {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }
  console.log(xmlToJson);
  // Load XML file using XMLHttpRequest
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // Parse XML to JSON
        const json = xmlToJson(xmlhttp.responseXML);

        // Save JSON to local storage
        localStorage.setItem("senator", JSON.stringify(json));

        // Retrieve JSON from local storage and display in console
        senators = JSON.parse(localStorage.getItem("senator"));
        console.log(senators);
        for (let i = 0; i < senators.length; i++) {
            console.log(senators[i].name["#text"]);
        }
    }
    
}
  xmlhttp.open("GET","partyList.xml", true);
  xmlhttp.send();
  

    function dragStartHandler(e) {
        e.target.classList.add("members");
    }

    function dragEndHandler(e) {
        e.target.classList.remove("dropLists");
        msg.innerHTML = "Drop Here";

    }

    function dragHandler(e) {
        msg.innerHTML = "Dragging " + e.target.innerHTML;
        msg.innerHTML = "Dragging " + e.target.id;

    }

    function dragEnterDemocratsHandler(e) {
        msg.innerHTML = "Drag Entering" + e.target.id;
        e.preventDefault();
    }


    function dropDemocratsHandler(e) {
        
    }


    function dragEnterRepublicansHandler(e) {
        
    }


    function dropRepublicansHandler(e) {
        
    }


   

})();

   