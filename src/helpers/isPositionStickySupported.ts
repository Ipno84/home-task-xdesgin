/**
 * Helper function, it detect if the current browser supports position sticky native css rule
 *
 * @export
 * @returns {boolean}
 */
export default function isPositionStickySupported(): boolean {
    const prefix: string[] = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
    const test: CSSStyleDeclaration = document.head.style;

    for (let i = 0; i < prefix.length; i += 1) {
        test.position = `${prefix[i]}sticky`;
    }

    return test.position === 'sticky' ? true : false;
}
