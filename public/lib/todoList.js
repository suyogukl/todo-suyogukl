const delete = function(id){
  let xml = new XMLHttpRequest();
  xml.open("POST","/deleteTodo");
  xml.addEventListener("load",function(){
  })
  xml.send("itemId=1");
}
