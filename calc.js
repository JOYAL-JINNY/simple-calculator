function add(){
    var first=document.getElementById("one").value;
    var second=document.getElementById("two").value;
    console.log(first);
    console.log(second);
    var result=Number(first)+Number(second);
    console.log(result);
    document.getElementById("res").textContent="RESULT:"+result;
}
function sub(){
    var first=document.getElementById("one").value;
    var second=document.getElementById("two").value;
    console.log(first);
    console.log(second);
    var result=Number(first)-Number(second);
    console.log(result);
    document.getElementById("res").textContent="RESULT:"+result;
}
function mult(){
    var first=document.getElementById("one").value;
    var second=document.getElementById("two").value;
    console.log(first);
    console.log(second);
    var result=Number(first)*Number(second);
    console.log(result);
    document.getElementById("res").textContent="RESULT:"+result;
}
function div(){
    var first=document.getElementById("one").value;
    var second=document.getElementById("two").value;
    console.log(first);
    console.log(second);
    var result=Number(first)/Number(second);
    console.log(result);
    document.getElementById("res").textContent="RESULT:"+result;
}
function cl()
{
    document.getElementById("res").textContent="RESULT:";
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
}