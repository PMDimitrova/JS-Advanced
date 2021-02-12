
function fn(x1, y1, x2, y2) { 
 
  let getDistance = (x1, y1, x2, y2) => { 
  let xs = x2 - x1;
    let ys = y2 - y1;       
    
    xs *= xs;
    ys *= ys;
  return Math.sqrt(xs + ys);
  };
 
  if(Number.isInteger(getDistance(x1, y1, 0, 0))){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
  }
  if(Number.isInteger(getDistance(x2, y2, 0, 0))){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
  }
  if(Number.isInteger(getDistance(x1, y1, x2, y2))){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
  }
}
fn(3, 0, 0, 4);