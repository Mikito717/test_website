let text="並ラーメン";
const add_text="並";
document.getElementById('myButton')!.addEventListener('click', function() {
  text = add_text + text;
  let insert = document.getElementById("myDiv")!;
  insert.textContent = text;
  //alert('You added the ramen!');
});