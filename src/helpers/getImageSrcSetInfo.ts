interface SetInfo {
    srcSet?: string;
    src: string;
}

/**
 * Helper function that allows to construct image sources using path informations
 *
 * @export
 * @param {string} imagePath
 * @param {string} imageExt
 * @param {number} set
 * @returns {(SetInfo | {}})}
 */
export default function getImageSrcSetInfo(
    imagePath: string,
    imageExt: string,
    set: number
): SetInfo | {} {
    if (!imagePath || !imageExt) return {};
    if (!set || set < 2) {
        return {
            src: imagePath + imageExt,
        };
    }
    const imageSet: string[] = Object.keys(
        Array.from({ length: set })
    ).map((e: string) => (e === '0' ? '' : `@${Number(e) + 1}x`));
    return {
        srcSet: imageSet
            .map(
                (e: string, i: number): string =>
                    `${imagePath}${e}${imageExt} ${i / 2 + 1}x`
            )
            .join(', '),
        src: imagePath + imageExt,
    };
}
