//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

function App() {
  return (
    <>
    {productsArr.map((item)=>(
      <div>
        <img src={item.imageUrl} alt={item.title}/>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
        <Button>Add To Cart</Button>
      </div>
    )

    )}
    
    </>

  );
}

export default App;
