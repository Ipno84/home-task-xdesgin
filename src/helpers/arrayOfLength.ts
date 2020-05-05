/**
 * Helper function, it return and array of string, its length is defined by the param length passed to the method
 *
 * @export
 * @param {number} length
 * @returns {string[]}
 */
export default function arrayOfLength(length: number): string[] {
    return Object.keys(Array.from({ length }));
}
