function clickevent()
{
 var name=document.getElementById("name").value;
 document.write("Hi "+name);
}
function findlar()
{
 var first=parseInt(document.getElementById("f").value);
 var second=parseInt(document.getElementById("s").value);
 if(first>second)
 {
  document.write(first+" is larger.");
 }
 else
 {
  document.write(second+" is larger.");
 }
}