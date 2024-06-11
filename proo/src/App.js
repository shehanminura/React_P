import './App.css';
import Main from './Components/Main';

const myData = [
  {
    name:'shehan',
    city:'galle',
    position:'Web Developer'
  },
  {
    name:'hasaranga',
    city:'mathara',
    position:'App Developer'
  },
  {
    name:'achine',
    city:'Kandy',
    position:'React Developer'
  },
  {
    name:'kaushi',
    city:'colombo',
    position:'Java Developer'
  },
]

function App() {
  return (
    <>
    <div>
      SMH React
     <h1>Shehan Minura</h1>
    </div>

    <p>DP Codeing</p>

    {myData.map((ele) => {
      return <p> <Main name={ele.name} city={ele.city} position={ele.position} /> </p>

    })}
    </>
  );
}

export default App;
