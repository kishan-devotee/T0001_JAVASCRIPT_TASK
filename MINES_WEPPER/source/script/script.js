
    const boxX = 19;
    const boxY = 15;
    const boxSize = 60;
    const arr = [];
    const randomBombSpaces = [];
    const bombCount = 50;

    //Create Boxes
    const createBox = (x, y) => {
        const box = document.createElement('div');
        box.style.position = 'absolute';
        box.id = `${x+1}${y+1}`;
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = 'gray';
        box.style.left = `${x * boxSize}px`;
        box.style.top = `${y * boxSize}px`;
        return box;
    }
    
    //Cerate Layout Of Boxes
    const boxContainer = document.querySelector('.container');
    for (let x = 0; x < boxX; x++) {
        for (let y = 0; y < boxY; y++) {
            const box = createBox(x, y);
            boxContainer.appendChild(box);
            arr.push([x+1,y+1])
        }
    }


    //Box Clicker
    boxContainer.addEventListener('click',(e)=> {
        console.log(e.target.id);
    })

    //print Number Func
    const printNumber = (index) => {
        let getLeftElement = index.toString().split("")
        getLeftElement[0] = getLeftElement[0] - 1;
       getLeftElement[0] = getLeftElement[0].toString()

       let centerTop = document.getElementById(`${index.toString().length === 2 ? (index-1) : (index)}`)
       let centerBottom = document.getElementById(`${index.toString().length === 2? (index+1) : (index+boxX)}`)
       let rightTop = document.getElementById(`${index.toString().length === 2? (index-boxX-1) : (index-boxX)}`)
       let rightBottom = document.getElementById(`${index.toString().length === 2? (index+boxX+1) : (index+boxX)}`)
       let leftTop = document.getElementById(`${index.toString().length === 2? (index-boxX-1) : (index-boxX)}`)
       let leftBottom = document.getElementById(`${index.toString().length === 2? (index+boxX-1) : (index+boxX)}`)
       let centerLeft = document.getElementById(`${getLeftElement}`)
       let centerRight = document.getElementById(`${index.toString().length === 2? (index+1) : (index+1)}`)

    // console.log(centerTop.innerText  !== null);
    //   if (centerTop.innerText !== null) centerTop.innerHTML  = "<span><b>1</b></span>"
    //   if (centerBottom.innerText !== null) centerBottom.innerHTML = "<span><b>1</b></span>"
    //   if (rightTop.innerText !== null)  rightTop.innerHTML = "<span><b>1</b></span>"
    //   if (rightBottom.innerText !== null)  rightBottom.innerHTML = "<span><b>1</b></span>"
    //   if (leftTop.innerText !== null)  leftTop.innerHTML = "<span><b>1</b></span>"
    //   if (leftBottom.innerText !== null) leftBottom.innerHTML = "<span><b>1</b></span>"
    //   if (centerLeft.innerText !== null)  centerLeft.innerHTML = "<span><b>1</b></span>"
    //   if (centerRight.innerText !== null)  centerRight.innerHTML = "<span><b>1</b></span>"
    }

    //Random Bomb Generator
const randomBomb = async() => {
   try {
    let randomIndex = Math.floor(Math.random() * Number(boxX.toString() + boxY.toString())+1);
    let randomBombSpace = Array.from(randomIndex.toString()).join("");
    document.getElementById(`${randomBombSpace}`).innerHTML = "<span>&#128163;</span>" 
    if (!randomBombSpaces.includes(randomIndex) && randomIndex.toString().length >= 2) {
    randomBombSpaces.push(randomIndex);   
    }

    printNumber(randomIndex)
  

   } catch (error) {
    console.log("Error To Set Bomb",error.message);
   }
}

let i = 1;
while (randomBombSpaces.length < bombCount) {
randomBomb()
i++;
}

console.log(randomBombSpaces);

