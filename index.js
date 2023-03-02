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