var members = document.querySelectorAll('.member-container');
var container;

function pop(event) {
    if (event.path[1].className === 'member-container') {
        container = event.path[1];
    }   else if (event.path[0].className === 'member-container'){
        container = event.path[0];
    }   else{}

    container.style.backgroundColor = '#EF476F';
    container.firstElementChild.style.display = 'block';
    container.lastElementChild.style.filter = 'brightness(50%)';
}

function unpop(event) {
    container.style.backgroundColor = 'transparent';
    container.firstElementChild.style.display = 'none';
    container.lastElementChild.style.filter = 'brightness(100%)';
}

for (var i = 0; i < members.length; i++) {
    members[i].addEventListener('mouseleave', unpop);
    members[i].addEventListener('mouseover', pop);
}