import { CREATE_MESSAGE } from "./actionTypes";

// Create Message
export const createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

export default createMessage;