
function show(input){

    document.getElementById("txt").value+=input;
}


function reset()
{
    document.getElementById("txt").value="";
}
function cal()
{
    let output = eval(document.getElementById("txt").value);
    document.getElementById("txt").value=output;

}
function del()
{
    let res = document.getElementById("txt").value.slice(0,-1);
    document.getElementById("txt").value=res;

}