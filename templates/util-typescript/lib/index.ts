import { isNumber } from './component/a';

/**
 * a simple add function
 * @param a
 * @param b
 * @returns
 */
export function add(a: number, b: number) {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        return Number.NaN;
    }
}

export { isNumber } from './component/a';
