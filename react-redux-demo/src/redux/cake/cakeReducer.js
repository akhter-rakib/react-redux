import { BUY_CAKE } from "../CakeType"

const initalState = {
    numberOfCake: 10
}

const cakeReducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state
    }
}
export default cakeReducer