const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PERSON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PERSON_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_PERSON_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.results
            }
        default:
            return state
    }
}