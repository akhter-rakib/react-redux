const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'; // indicate type of the action
const BUY_ICECREAM = 'BUY_ICECREAM';
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

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

const initialIceCreamState = {
    numberOfIceCream: 15
}

const inititateCakeState = {
    numberOfCake: 10
}

const cakeReducer = (state = inititateCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
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
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe();
