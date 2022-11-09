import { userStore } from '@/store/users.store';
import { ROUTES } from './names';

export function specialistGuard(to, from, next) {
    const profile = userStore().getProfile();
    if (profile && profile.rol === 'E')
        next();
    else {
        next({
            name: ROUTES.LOGIN
        })
    }
}