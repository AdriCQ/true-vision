import axios from '../http-common';

/**
 * SpecialistService
 * @returns 
 */
export function SpecialistService() {
    const BASE_URL = '/especialista';

    return {
        /**
         * getByUser
         * @param user 
         * @returns 
         */
        getByUser: (user) => axios.get(`${BASE_URL}/getByUser/${user}`),
        /**
         * getPatients
         * @param ci 
         * @returns 
         */
        getPatients: (ci) => axios.get(`${BASE_URL}/${ci}/pacientes`)
    }
}