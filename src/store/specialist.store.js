import { get, set } from './helper';

export function SpecialistStore() {
    const STORAGE_KEY = 'specialist';

    return {
        getSpecialist: get(`${STORAGE_KEY}/specialist`),
        setSpecialist: (specialist) => set(`${STORAGE_KEY}/specialist`, specialist),
        getPatients: get(`${STORAGE_KEY}/patients`),
        setPatients: (patients) => set(`${STORAGE_KEY}/patients`, patients),
    }
}