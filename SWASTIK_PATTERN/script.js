
const getSwastikPattern = (val) => {
    console.log(+val.toString().length);

    let middleOfVal = Math.ceil(val/2)

    if (val % 2 === 0) {
        alert("Please Enter only Odd Number")
        return;
    }

    for (let i = 1; i <= val; i++) {
        
        if (middleOfVal === i ) {
            for (let j = 1; j <= val; j++) {
                if (j <= 9) {
                    if (j === 1) {
                        for (let l = 1; l <= middleOfVal; l++) {                          
                          l === middleOfVal ?  document.write(` &nbsp;&nbsp;${middleOfVal - l + 1}`) : document.write(` &nbsp;&nbsp;${middleOfVal - l + 1} <br/>`)
                        }
                    } else {
                        document.write(` &nbsp;&nbsp;${j}`)
                    }
                } else {
                    document.write(` ${j}`)
                    
                }
            }
        } else {
            if (i <= 9) {
                if (i === 1) {
                    for (let t = 1; t <= middleOfVal ; t++) {
                       t === 1 ? document.write("&nbsp;".repeat((val*2)+(middleOfVal-3)),` ${t}`) : document.write("&nbsp;&nbsp;" ,t) 
                    }
                } else {
                    document.write("&nbsp;".repeat((val*2)+(middleOfVal-3)),` ${i}`)  
                }
            } else {
                if (i === val) {
                    for (let b = middleOfVal+1; b <= val; b++) {
                        b === middleOfVal+1 ? document.write("&nbsp;&nbsp;&nbsp;&nbsp;" ,` ${b}`) : document.write("&nbsp;" ,`${b}`);   
                    } 
                } else {
                    document.write("&nbsp;".repeat((val*2)+(middleOfVal-3)),i)   
                }             
            }
        }
        document.write("<br/>")
        
    }
}



getSwastikPattern(19)