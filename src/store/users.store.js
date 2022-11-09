import { get, set } from './helper';

export function userStore() {
    const STORAGE_KEY = 'user';
    return {
        getProfile: () => get(`${STORAGE_KEY}/profile`),
        setProfile: (profile) => set(`${STORAGE_KEY}/profile`, profile),
    }
}