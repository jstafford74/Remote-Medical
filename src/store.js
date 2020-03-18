import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as formReducer } from 'redux-form';


// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);



const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)

export default store;