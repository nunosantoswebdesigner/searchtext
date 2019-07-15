 function myFunction() {

    var input
    var filter;
    var ul;
    var li;
    var a;
    var i;
    var txtValue;
    
    input = document.getElementById("myInput");
    //console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    ul = document.getElementById("myUL");
    //console.log(ul);
    li = ul.getElementsByTagName("li");
    console.log(li);
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a);
        txtValue = a.textContent || a.innerText;
        //console.log(txtValue);
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            //console.log(i);
        } else {
            li[i].style.display = "none";
            //console.log(i);
        }
    }
}
