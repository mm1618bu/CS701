(function() {
  window.onload = init;

  var src, target, msg;
  var senators = [];

  function init() {
    src = document.getElementById("members");
    target = document.getElementById("dropLists");
    msg = document.getElementById("msg");

    src.ondragstart = dragStartHandler;
    src.ondragend = dragEndHandler;
    src.ondrag = dragHandler;
    src.onEnterDem = dragEnterDemocratsHandler;
    src.ondropDem = dropDemocratsHandler;

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
           src.innerHTML += `<li> ${item.name["#text"]} </li>`
      })
      
      }
    };
    xmlhttp.open("GET", "partyList.xml", true);

    xmlhttp.send();
  }
function convertToJson(xml) {
  var senators = [];
  var xmlDoc = xml.responseXML;
  var senatorList = xmlDoc.getElementsByTagName("senator");
  for (var i = 0; i < senatorList.length; i++) {
    var senator = {};
    senator.name = senatorList[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    senator.party = senatorList[i].getElementsByTagName("party")[0].childNodes[0].nodeValue;
    senators.push(senator);
    console.log(senator.name);
  }
  return JSON.stringify(senators);
}

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

  function dropDemocratsHandler(e) {}

  function dragEnterRepublicansHandler(e) {}

  function dropRepublicansHandler(e) {}

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
