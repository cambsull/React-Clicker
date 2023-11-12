
import './App.css';
import CreateElement from './utilities/element/CreateElementUtil.js';

function App(){
  return (
    <>
      {CreateElement.CreateCustomElement({elementText: 'Building One', className: 'buildingButton', elementType: 'button'})}
    </>
  )  
}

export default App;