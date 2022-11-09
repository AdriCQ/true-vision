import { get, set } from './helper';

export function PatientStore() {
    const STORAGE_KEY = 'patients';

    return {
        getMe: get(`${STORAGE_KEY}/me`),
        setMe: (me) => set(`${STORAGE_KEY}/me`, me),
    }
}