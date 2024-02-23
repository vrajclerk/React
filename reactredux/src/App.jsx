import { useSelector,useDispatch } from 'react-redux';
import './App.css'
import { incNumber,decNumber } from './action/index';

function App() {
  const  myState=useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch(); // dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

  return (
    <>
      <div className="container">
        <h1>Increament/Decreament counter</h1>

      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() =>dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
        <a className='quantity_plus' title='Increament'
        onClick={() =>dispatch(incNumber())}><span>+</span></a>
      </div>
      </div>
    </>
  )
}

export default App
