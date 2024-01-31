//your JS code here. If required.
// Get the element with id "level"
const targetElement = document.getElementById('level');
function calculateDOMLevel(element) {
    let level = 0;
    let parent = element.parentElement;
    while (parent) {
        level++;
        parent = parent.parentElement;
    }

    return level;
}

const domLevel = calculateDOMLevel(targetElement);

alert(`The level of the element is: ${domLevel}`);

