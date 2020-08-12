function btnShow(val){
    document.getElementById("output-screen").value+=val;
}
function allClear(){
    document.getElementById("output-screen").value="";
}
function deletingOneByOne(){
    var value = document.getElementById("output-screen").value;
    document.getElementById("output-screen").value = value.slice(0,-1);
}
function btnEqual(){
    var text = document.getElementById("output-screen").value;
    var result = eval(text)
    document.getElementById("output-screen").value = result;
}