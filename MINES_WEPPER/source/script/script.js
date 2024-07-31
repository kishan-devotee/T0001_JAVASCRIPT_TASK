
    const boxX = 15;
    const boxY = 10;
    const boxSize = 60;
    const arr = [];
    const randomBombSpaces = [];
    const bombCount = 10;

    //Create Boxes
    const createBox = (x, y) => {
        const box = document.createElement('div');
        box.style.position = 'absolute';
        box.id = `${x+1}${y+1}`;
        box.className = `${x+1},${y+1}`
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = 'rgb(113, 193, 113)';
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

    //Get Value For Print Number 
    const getElement = (index,condition) => {
        let getThreeVal = function (val) {
            if (val > (boxX * boxY) + boxX) {
                let p1 = val.toString()[0]
                let p2 = val.toString()[1] + val.toString()[2]
                return Array.of(p1,p2)
            }
            let p1 = val.toString()[0] + val.toString()[1]
            let p2 = val.toString()[2] 
            return Array.of(p1,p2)
        }

        const getVal = (val) => {
            if (val.toString().length === 4) {
                let p1 = val.toString()[0] + val.toString()[1]
                let p2 = val.toString()[2] + val.toString()[3]
                return Array.of(p1,p2)
            }
            return val.toString().split("")
        } 

        let getEle = index.toString().length == 3 ? getThreeVal(index) : getVal(index);
        // console.log(getEle,index);
        

        if (condition == "left")  getEle[0] = +getEle[0] - 1;
        if (condition == "right")  getEle[0] = +getEle[0] + 1;
        if (condition == "top")  getEle[1] = +getEle[1] - 1;
        if (condition == "bottom")  getEle[1] = +getEle[1] + 1;

        getEle[0] = getEle[0].toString()
        return getEle.join("")
    }

    //print Number Func
    const printNumber = (index) => {
        let centerTop = document.getElementById(`${getElement(index,"top")}`)
        let centerBottom = document.getElementById(`${getElement(index,"bottom")}`)
        let centerLeft = document.getElementById(`${getElement(index,"left")}`)
        let centerRight = document.getElementById(`${getElement(index,"right")}`)
        
        let leftTopId = getElement(index,"left").split("")
        leftTopId[1] = leftTopId[1] - 1;
        let leftBottomId = getElement(index,"left").split("")
        leftBottomId[1] = +leftBottomId[1] + 1;
        let rightTopId = getElement(index,"right").split("")
        rightTopId[1] = rightTopId[1] - 1;
        let rightBottomId = getElement(index,"right").split("")
        rightBottomId[1] = +rightBottomId[1] + 1;
        
        let leftTop = document.getElementById(`${leftTopId = leftTopId.join("")}`)
        let leftBottom = document.getElementById(`${leftBottomId = leftBottomId.join("")}`)
        let rightTop = document.getElementById(`${rightTopId = rightTopId.join("")}`)
        let rightBottom = document.getElementById(`${rightBottomId = rightBottomId.join("")}`)
        
       
        if (centerLeft.innerHTML != "&#128163;" )  centerLeft.innerHTML = `${centerLeft.innerHTML ? +centerLeft.innerHTML + 1 : 1}`  
        if (centerRight.innerHTML != "&#128163;" )   centerRight.innerHTML = `${centerRight.innerHTML ? +centerRight.innerHTML + 1 : 1}`
        if (centerTop.innerHTML != "&#128163;" )   centerTop.innerHTML = `${centerTop.innerHTML ? +centerTop.innerHTML + 1 : 1}`
        if (centerBottom.innerHTML != "&#128163;" )   centerBottom.innerHTML = `${centerBottom.innerHTML? +centerBottom.innerHTML + 1 : 1}`
        if (leftTop.innerHTML != "&#128163;" )   leftTop.innerHTML = `${leftTop.innerHTML ? +leftTop.innerHTML + 1 : 1}` 
        if (rightTop.innerHTML != "&#128163;" )   rightTop.innerHTML = `${rightTop.innerHTML ? +rightTop.innerHTML + 1 : 1}` 
        if (leftBottom.innerHTML != "&#128163;" )   leftBottom.innerHTML = `${leftBottom.innerHTML ? +leftBottom.innerHTML + 1 : 1}` 
        if (rightBottom.innerHTML != "&#128163;" )    rightBottom.innerHTML = `${rightBottom.innerHTML ? +rightBottom.innerHTML + 1 : 1}` 
        } 

    //Random Bomb Generator
    const randomMines = async() => {
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
     randomMines()
     i++;
     }




