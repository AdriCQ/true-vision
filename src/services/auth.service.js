import axios from '../http-common';

const BASE_URL = '/cuenta';

export function AuthService() {
    return {
        /**
         * login
         * @param Number user 
         * @returns 
         */
        login: (user) => axios.get(`${BASE_URL}/${user}`),
    }
}