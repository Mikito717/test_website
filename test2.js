var text = "並ラーメン";
var add_text = "並";
document.getElementById('myButton').addEventListener('click', function () {
    text = add_text + text;
    var insert = document.getElementById("myDiv");
    insert.textContent = text;
    //alert('You added the ramen!');
});
