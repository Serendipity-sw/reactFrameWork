const UPDATE='update'
const DELETE='del'

export function reduxData(store = {}, action) {
    switch (action.type) {
        case UPDATE:
            let newState=store,
                actionKey=action.key
            if (!newState[actionKey]) {
                newState[actionKey]={}
            }
            delete action['type']
            delete action['key']
            for (let actionKey in action) {
                newState[actionKey][actionKey]=action[actionKey]
            }
            return newState
        case DELETE:
                delete newState[action.key]
            return newState
        default:
            return store
    }
}