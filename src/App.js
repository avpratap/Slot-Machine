// import React, { useState } from "react";

// // const debugEl = document.getElementById('debug'),
// // 			// Mapping of indexes to icons: start from banana in middle of initial position and then upwards
// // 			iconMap = ["ICON 1", "ICON 2", "ICON 3"],
// 			// Width of the icons
			
  


// function App (){

//   const icon_width = 170,	
// 			      icon_height = 115.2,
//             num_icons = 15,
//             time_per_icon = 10,
//             indexes = [0, 0, 0, 0, 0];



// const roll = (reel, offset = 0) => {
// 	const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
//   var style = getComputedStyle(reel);
//   const backgroundPositionY = parseFloat(style["background-position-y"]);
  

//   reel.style.transition = `background-position ${(14 * delta) * time_per_icon}ms`;
// reel.style.backgroundPosition = `0px ${backgroundPositionY + delta * icon_height}px`;


// }

// function rollAll() {
// 	// debugEl.textContent = 'rolling...';
// 	const reelsList = document.querySelectorAll('.slots > .reel');
//   [...reelsList].map((reel, i) => {
//     console.log(reel, i);
//     roll(reel, i);
//   })
// }
// rollAll();

//     return(
//     <div class="slots">
//       <div class="reel"></div>
//       <div class="reel"></div>
//       <div class="reel"></div>
//       <div class="reel"></div>
//       <div class="reel"></div>
//     </div>);
    
// }




// export default App;




import React from "react";

function App () {
  const icon_height = 115.2;
  const num_icons = 15;
  const time_per_icon = 10;

  const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style["background-position-y"]);

    reel.style.transition = `background-position ${(14 * delta) * time_per_icon}ms`;
    reel.style.backgroundPosition = `0px ${backgroundPositionY + delta * icon_height}px`;
  }

  const rollAll = () => {
    const reelsList = document.querySelectorAll('.slots > .reel');
    [...reelsList].map((reel, i) => {
      console.log(reel, i);
      roll(reel, i);
    })
  }

  return (
    <div className="container">
      <h2>SLOT MACHINE</h2>
      <div className="slots">
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
      </div>

      {/* Add circular button with an image below the slots */}
      <button className="circular-button" onClick={rollAll}>
        
      </button>
    </div>
  );
}

export default App;

