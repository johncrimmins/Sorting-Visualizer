import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import Canvas from './Canvas';


var xPositions = []
var yHeights = []
const NUMLINES = 100

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

const draw = context => {

  context.fillStyle = "rgb(0, 0, 0)";
  for (var i = 0; i < 100; i+=1) {
    const height = getRandomInt(500) 
    context.fillRect(i * 10, 0, 10, height);
    xPositions.push(i*10);
    yHeights.push(height);
  }

  context.clearRect(0,0,800, 500)

  yHeights = mergeSort(yHeights)

  for (var i = 0; i < xPositions.length; i++) {
    context.fillRect(xPositions[i], 0, 10, yHeights[i])
  }

  console.log(yHeights)

};

function App() {
  return (
    <div className="App">
      <Controls />
      <Canvas draw={draw} numLines={NUMLINES}  />
    </div>
  );
}

export default App;
