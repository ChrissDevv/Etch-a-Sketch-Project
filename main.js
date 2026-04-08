  const mainDiv = document.querySelector('#container');
    for(let i = 0; i < 256; i++){
    //create a div element and append it to #container
    const newDiv = document.createElement('div');
      mainDiv.appendChild(newDiv);
    }
    console.log('hello')