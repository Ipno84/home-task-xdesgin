import { useEffect } from 'react';

/**
 * React hook, it allowsto perform an action if the element clicked is not contained in the one referenced by the ref param
 *
 * @export
 * @param {(React.MutableRefObject<HTMLDivElement | HTMLButtonElement | undefined>)} ref
 * @param {Function} handler
 */
export default function useOutsideClick(
    ref: React.MutableRefObject<HTMLDivElement | HTMLButtonElement | undefined>,
    handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
): void {
    useEffect(() => {
        const clickListener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node))
                return;
            handler(event);
        };
        const keyClickListener = (event: KeyboardEvent) => {
            if (event.key === 'Escape') handler(event);
        };
        document.addEventListener('click', clickListener);
        document.addEventListener('keyup', keyClickListener);
        return () => {
            document.removeEventListener('click', clickListener);
            document.removeEventListener('keyup', keyClickListener);
        };
    }, [ref, handler]);
}
