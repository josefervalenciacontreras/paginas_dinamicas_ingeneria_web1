function myFunction() {
    var input, filter, div, li, a, i, txtValue,col;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName("row");
    col = div.getElementByClassName("col");
    for (i = 0; i < col.length; i++) {
        a = col[i].getElementsByClassName("row")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            col[i].style.display = "";
        } else {
            col[i].style.display = "none";
        }
    }
}