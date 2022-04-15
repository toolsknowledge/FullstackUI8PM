window.onresize = my_fun;
window.onload = my_fun;
function my_fun(){
    document.getElementById("size").innerHTML = "Width :"+window.innerWidth;
}