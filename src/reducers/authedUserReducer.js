import {SET_AUTHED_USER } from "../actions/authUser";

const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }
}

export default authedUser