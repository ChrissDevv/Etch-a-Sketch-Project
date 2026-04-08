  const mainDiv = document.querySelector('#container');
   
    function createGrid(size){
        let squareSize = 960 / size ; 
        for(let i  = 0; i < size * size; i++){

    const newDiv = document.createElement('div');
      mainDiv.appendChild(newDiv);
      newDiv.addEventListener('mouseover',()=>{
        newDiv.style.background = 'red'; })
        newDiv.style.width = squareSize + 'px';
        newDiv.style.height = squareSize + 'px';
        }
    }
    createGrid(16);

    document.querySelector('#theButton').addEventListener('click', () => {
        let NumOfSquares = prompt( ' How many squares per side would you like?');
        mainDiv.innerHTML = "";
        createGrid(NumOfSquares);
    });
