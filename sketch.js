let example = [];

function setup(){
  createCanvas(500,500);
  for(let i = 0; i<100; i++){
    example.push(floor(random(0,100)));
  }
}

function draw(){
  background(51);
  stroke(255);
  fill(255);
  strokeWeight(2);
  for(let i=0; i<example.length; i++){
    line(4*i,0,4*i,4*example[i]);
  }
}

function isSorted(L){
  let ok = true;
  for(let i=1; i<L.length; i++){
    if(L[i-1] > L[i]){
      ok = false;
      break;
    }
  }
  return ok;
}

function swap(L,i,j){
  let temp = L[i];
  L[i] = L[j];
  L[j] = temp;
}

function bubbleSort(L){
  //let LL = L;
  for(let i=0; i<L.length; i++){
    for(let j=i+1; j<L.length; j++){
      if(L[i] > L[j]){
        console.log("IF");
        swap(L,i,j);
      }
    }
  }
  //return LL;
}
