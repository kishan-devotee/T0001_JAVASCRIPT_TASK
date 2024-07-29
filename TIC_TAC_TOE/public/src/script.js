let mainContainer = document.createElement( "div" );
mainContainer.id = "main-container";
mainContainer.className = "container";
document.body.appendChild( mainContainer );

let boxGroupOne = document.createElement( "div" );
let boxGroupTwo = document.createElement( "div" );
let boxGroupThree = document.createElement( "div" );
let msgBox = document.createElement( "div" );
let msg = document.createElement( "h1" );
let restartBtn = document.createElement( "button" );
mainContainer.append( boxGroupOne, boxGroupTwo, boxGroupThree, msgBox );

boxGroupOne.className = "box-group";
boxGroupTwo.className = "box-group";
boxGroupThree.className = "box-group";
msgBox.className = "msg-box";
msg.className = "msg";
restartBtn.className = "restart";

msgBox.append( msg, restartBtn );
restartBtn.textContent = "Restart";
msg.textContent = "O Turn...";

for ( let i = 1; i <= 9; i++ ) {
  let box = document.createElement( "div" );
  box.className = "box";
  box.id = i.toString(  );
  if ( i <= 3 ) {
    boxGroupOne.appendChild( box );
  } else if ( i <= 6 ) {
    boxGroupTwo.appendChild( box );
  } else {
    boxGroupThree.appendChild( box );
  }
}

const winPossibilities = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

let boxClick = new Audio( "/public/assets/click.mp3" );
let wrongClick = new Audio( "/public/assets/wrong.mp3" );
let over = new Audio( "/public/assets/win.mp3" );

const isWinner = (  ) => {
  for ( const condition of winPossibilities ) {
    const [a, b, c] = condition;
    const boxOne = document.getElementById( a.toString(  ) );
    const box_two = document.getElementById( b.toString(  ) );
    const box_three = document.getElementById( c.toString(  ) );

    if ( 
      boxOne.textContent &&
      boxOne.textContent === box_two.textContent &&
      boxOne.textContent === box_three.textContent
     ) {
      over.play(  );
      let boxes = document.querySelectorAll( ".box" );
      boxes.forEach( ( box ) => {
        box.style.pointerEvents = "none";
        box.style.opacity = "0.5";
      } );
      boxOne.style.backgroundColor = "yellow";
      box_two.style.backgroundColor = "yellow";
      box_three.style.backgroundColor = "yellow";
      boxOne.style.transform = "scale( 1.3 )";
      box_two.style.transform = "scale( 1.3 )";
      box_three.style.transform = "scale( 1.3 )";

      boxOne.style.opacity = "1";
      box_two.style.opacity = "1";
      box_three.style.opacity = "1";

      let msg = document.querySelector( ".msg" );
      if ( inputValue ) {
        msg.textContent = " 'O' Is Win ";
      } else {
        msg.textContent = " 'X' Is Win ";
      }
      return true;
    }
  }
  return false;
};

const checkDraw = (  ) => {
  let boxes = document.querySelectorAll( ".box" );
  for ( let box of boxes ) {
    if ( box.textContent === "" ) {
      return false;
    }
  }
  return true;
};

let boxGroup = document.querySelectorAll( ".box-group" );
let inputValue = false;

boxGroup.forEach( ( child ) => {
  child.addEventListener( "click", ( e ) => {
    let selectBox = e.target;
    if ( selectBox.textContent ) {
      wrongClick.play(  );
      return;
    }
    boxClick.play(  );
    selectBox.textContent = inputValue ? "X" : "O";
    document.querySelector( ".msg" ).textContent = `${
      inputValue ? "O" : "X"
    } Turn...`;

    inputValue = !inputValue;

    if ( !isWinner(  ) ) {
      if ( checkDraw(  ) ) {
        let msg = document.querySelector( ".msg" );
        msg.textContent = "Game Draw!";
        over.play(  );
        let boxes = document.querySelectorAll( ".box" );
        boxes.forEach( ( box ) => {
          box.style.pointerEvents = "none";
          box.style.opacity = "0.5";
        } );
      }
    }
  } );
} );

document
  .querySelector( ".restart" )
  .addEventListener( "click", (  ) => window.location.reload(  ) );