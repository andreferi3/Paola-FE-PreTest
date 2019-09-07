import axios from 'axios'

const url = 'https://randomuser.me/api/'

export const getPerson = () => {
    return {
        type: 'GET_PERSON',
        payload: axios.get(url)
    }
}
