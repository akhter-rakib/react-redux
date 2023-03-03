const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'; // indicate type of the action
// Action is an object that has a type property

// {
//     type: BUY_CAKE,
//     info: 'First Redux Action'
// }
//----------------------------------------------
//action creator simply create an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

const initialState = {
    numberOfCake: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state
    }
}

// redux-store
const store = createStore(reducer)
console.log('initiate state', store.getState())
const unSubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unSubscribe();
