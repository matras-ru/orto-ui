import { selfInstall } from '@/utils';

export default {
    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    }
};
