//Create a large square gird with smaller square divs
//16x16 is the default size

function divGrid(number){
    let row =0;
    const width = 500/number
    number = number * number  // Area of divs in grid
    const container = document.querySelector('#container');
    for (row; row < number; row++){
        let newRow = document.createElement('div');
        newRow.setAttribute('id',row)
        newRow.setAttribute('class', 'divGrid')
        newRow.style.cssText = 'width: ' + width + 'px'
        newRow.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "purple";
        })
        container.appendChild(newRow);
    }
}

// Initalizes grid to 16x16.  Can be changed by the slider
divGrid(16)

//Slider that will determine the size of the grid

const slider = document.getElementById('grid-slider');
const output = document.getElementById('num-output');
output.textContent = slider.value + ' x ' + slider.value;

// clears the grid everytime the slider chages values
function clearGrid(){
    let removeClass = document.querySelectorAll('.divGrid');
    removeClass.forEach(div => {
        div.remove();
    })
}

// Adds event listener to change size of grid if/when the slider is changed
// works when mouse is either clicked down or up
['mouseup', 'mousedown'].forEach( function(evt) {
    slider.addEventListener(evt, function() {
        clearGrid();
        divGrid(this.value);
        slider.oninput = function(){
            output.textContent = this.value + ' x ' + this.value;
        }
    })
})

