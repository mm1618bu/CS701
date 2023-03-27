(function() {
  window.onload = init;

  var src, target, msg;
  var senators = [];

  function init() {
    src = document.getElementById("members");
    target = document.getElementById("dropLists");
    msg = document.getElementById("msg");
    var democratDropZone = document.getElementById("democrats");
    var republicanDropZone = document.getElementById("republicans");

    // Add drag and drop event listeners
    src.addEventListener('dragstart', dragStartHandler);
    target.addEventListener('dragover', dragOverHandler);
    target.addEventListener('drop', dropHandler);
    democratDropZone.addEventListener("dragenter", dragEnterDemocratsHandler);
    democratDropZone.addEventListener("drop", dropDemocratsHandler);
    republicanDropZone.addEventListener("dragenter", dragEnterRepublicansHandler);
    republicanDropZone.addEventListener("drop", dropRepublicansHandler);

    // Read data from partyList.xml
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xmlData = this.responseText;

        // Convert XML to JSON
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlData, "text/xml");
        var json = xmlToJson(xmlDoc);

        // Store JSON in local storage
        localStorage.setItem("partyList", JSON.stringify(json));

        // Display JSON in console
        // console.log(json.senators.senator);
        var json2 = json.senators.senator;
        json2.forEach(item=> {
             console.log(item.name["#text"]);
             src.innerHTML += `<li draggable="true" data-party=${item.party["#text"]} > ${item.name["#text"]} </li>`
        })
        
      }
    };
    xmlhttp.open("GET", "partyList.xml", true);

    xmlhttp.send();
  }

  function dragStartHandler(e) {
    e.dataTransfer.setData("text", e.target.innerHTML);
    var party = getParty(e.target.innerHTML);
    console.log('party data--',  e.target.getAttribute("data-party"))
    e.dataTransfer.setData("party", e.target.getAttribute("data-party"));
  }
  
  function getParty(item) {
    var partyList = JSON.parse(localStorage.getItem("partyList"));
    var senators = partyList.senators.senator;
    for (var i = 0; i < senators.length; i++) {
      if (senators[i].name["#text"] === item) {
        return senators[i].party["#text"];
      }
    }
    return null;
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var node = document.createElement("LI");
    //node.innerHTML = data;
    //e.target.appendChild(node);
  }
  function dragEnterDemocratsHandler(e) {
    e.preventDefault();
    var party = e.dataTransfer.getData("party");
    console.log('party', party)
    if (party === "Democrat") {
      e.target.classList.add("drag-over");
    }
  }
  
  function dropDemocratsHandler(e) {
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    var party = e.dataTransfer.getData("party");
    if (party === "Democrat") {


      // get sub items
      var node = document.createElement("LI");
      node.innerHTML = data;
      e.target.appendChild(node);
    }
  }
  
  function dragEnterRepublicansHandler(e) {
    var partyList = JSON.parse(localStorage.getItem("partyList"));
    var senators = partyList.senators.senator;
    var republicanFound = false;
  
    senators.forEach(function(senator) {
      if (senator.party === "Republican") {
        republicanFound = true;
        return;
      }
    });
  
    var party = e.dataTransfer.getData("party");
    if (republicanFound && party === "Republican") {
      e.preventDefault();
      e.target.classList.add("over");
    }
  }
  
  function dropRepublicansHandler(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var targetList = e.target.querySelector("ul");
   
    var party = e.dataTransfer.getData("party");
    console.log("gd repu----", {e: e.dataTransfer, eleent: e.target, party, data}, e.dataTransfer.get)
  

    if (party === "Republican") {
      var node = document.createElement("LI");
      node.innerHTML = data;
      e.target.appendChild(node);
    }

    /*
    if (targetList) {
      targetList.innerHTML += "<li>" + data + "</li>";
      var sourceList = document.getElementById("members");
      var item = sourceList.querySelector("li:contains(" + data.trim() + ")");
      item.parentNode.removeChild(item);
    } */
  }


  function xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }
})();
