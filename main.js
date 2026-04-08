  const mainDiv = document.querySelector('#container');
   
    function createGrid(size){
        for(let i = 0; i < size; i++){

    const newDiv = document.createElement('div');
      mainDiv.appendChild(newDiv);
      newDiv.addEventListener('mouseover',()=>{
        newDiv.style.background = 'red'; })
        }
    }
    createGrid(16);

    document.querySelector('#theButton').addEventListener('click', () => {
        let NumOfSquares = prompt( ' How many squares per side would you like?');
        mainDiv.innerHTML = "";
        createGrid(NumOfSquares);
    });
