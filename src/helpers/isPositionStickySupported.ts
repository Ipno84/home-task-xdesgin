export default function isPositionStickySupported(): boolean {
    const prop: string = 'position:';
    const value: string = 'sticky';
    const prefixes: string[] = ['-webkit-', '-moz-', '-o-', '-ms-'];

    let el: HTMLAnchorElement = document.createElement('a');
    let mStyle: CSSStyleDeclaration = el.style;
    mStyle.cssText =
        prop + prefixes.join(value + ';' + prop).slice(0, -prop.length);

    return mStyle.position.indexOf(value) !== -1;
}
