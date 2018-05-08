/*function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange(el, function() {
    
});

window.addEventListener('DOMContentLoaded', handler, false); 
window.addEventListener('load', handler, false); 
window.addEventListener('scroll', handler, false); 
window.addEventListener('resize', handler, false); 
*/
// the callback function that will be fired
// when the element apears in the viewport
function onEntry(entry) {
  entry.forEach((change) => {
      let el = change.target.querySelector('img');
      if(el.getAttribute('src')==''){
            el.setAttribute('src', "https://unsplash.it/200/300/?random&q="+Math.random());
        }
  });
}

// list of options
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
const container = document.querySelector("#container");
// instantiate a new Intersection Observer

let articles = []; 
for(let i=0; i<500; i++){
    let t = document.querySelector('template').content;
    let c = t.cloneNode(true);
    c.querySelector('h1').innerHTML+=" "+i;
    //articles.push(c);
    container.appendChild(c)
}
articles = Array.from(container.querySelectorAll('section'));
function order(){
    articles.reverse();
    console.log(articles[0])
    //console.log(articles)
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    //document.body.innerHTML='';
    articles.forEach(e=>container.appendChild(e))
}

let elements = container.querySelectorAll('section');

for (let elm of elements) {
  observer.observe(elm);
}