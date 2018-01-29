//Step 1
import {createStore} from 'redux';
import reducer from './ducks/reducer';

export default createStore(reducer);