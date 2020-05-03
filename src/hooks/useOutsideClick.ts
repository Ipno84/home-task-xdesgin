import { useEffect } from 'react';

export default function useOutsideClick(
    ref: React.MutableRefObject<HTMLDivElement | undefined>,
    handler: Function
) {
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
