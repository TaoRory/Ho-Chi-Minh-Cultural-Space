document.getElementById('next').onclick = function() {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').insertBefore(lists[0], null);
};
document.getElementById('prev').onclick = function() {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};