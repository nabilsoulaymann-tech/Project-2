
window.addEventListener('load',function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display='none'
})
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
  
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='none'
}
let total=parseFloat(localStorage.getItem('pizza-pasta-item')) || 0;
let buybtns=document.getElementsByClassName('buy-btn');
let buybtnsarray=Array.from(buybtns);
buybtnsarray.forEach(button => {
    button.addEventListener('click',function(){
        button.style.backgroundColor='red';
        button.textContent='Added!'
let parent = this.parentElement;
let price = parent.querySelector('.price');
total=total+parseFloat(price.textContent);
localStorage.setItem('pizza-pasta-item',total);
console.log(total)
    })
});

function displayTotal(){
    alert('Your total is : $'+total)
};
document.getElementById('clearTotal').addEventListener('click',function(){
    total=0;
localStorage.removeItem('pizza-pasta-item')});
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    
    const watcher = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop watching once it fades in
            }
        });
    }, { threshold: 0.1 });

    cells.forEach(cell => {
        watcher.observe(cell);
    });
});