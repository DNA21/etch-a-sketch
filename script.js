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
        container.appendChild(newRow);
    }
}

divGrid(32)