import axios from '../http-common';

export function PatientServices() {

    const BASE_URL = '/paciente';

    return {
        /**
         * findByUser
         * @param Number user 
         * @returns 
         */
        findByUser: (user) => axios.get(`${BASE_URL}/getByUser/${user}`),
        /**
         * getImages
         * @param Number ci 
         * @returns 
         */
        getImages: (ci) => axios.get(`${BASE_URL}/${ci}/imagenes`),
        /**
         * remove
         * @param Number ci 
         * @returns 
         */
        remove: (ci) => axios.delete(`${BASE_URL}/${ci}`),
        /**
         * postPhoto
         * @param {*} imageUrl 
         * @param {*} params 
         * @returns 
         */
        postPhoto: (imageUrl, params) => axios.post(`${BASE_URL}/${imageUrl}`, params)

    }
}