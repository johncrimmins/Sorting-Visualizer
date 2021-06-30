import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import Canvas from './Canvas';



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const draw = context => {


  var xPositions = []
  var yHeights = []

  context.fillStyle = "rgb(0, 0, 0)";
  for (var i = 0; i < 100; i+=1) {
    const height = getRandomInt(500) 
    context.fillRect(i * 10, 0, 10, height);
    xPositions.push(i*10);
    yHeights.push(height);
  }
  console.log(xPositions)
  console.log(yHeights)

  context.clearRect(0,0,800, 500)

  for (var i = 0; i < xPositions.length; i++) {
    context.fillRect(xPositions[i], 0, 10, yHeights[i])
  }
};

function App() {
  return (
    <div className="App">
      <Controls />
      <Canvas draw={draw} numLines={100} />
    </div>
  );
}

export default App;
