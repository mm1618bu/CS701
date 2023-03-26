(function() {

  window.onload = init;

  var src, target, msg;

  var senators = [];
  
   
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
