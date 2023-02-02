import './App.css';
import FormItems from './components/formItem/formItem';
import ItemList from './components/itemList/itemList';
import Grocery from './components/images/groceryStore.jpg';
import Navigation from './components/navigation/nav';
import BootstrapComponent from './components/bootstrapComponent/bootstrapComp';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className='parent'>
      <div className='child'>
      <FormItems></FormItems>
      <ItemList></ItemList>
      </div>
      <img className='groceryPhoto' src={Grocery} alt="grocery"/>
      </div>
      <BootstrapComponent></BootstrapComponent>
    </div>
  );
}

export default App;
