import { useEffect } from 'react';

export default function useOutsideClick(
    ref: React.MutableRefObject<HTMLDivElement | undefined>,
    handler: Function
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node))
                return;
            handler(event);
        };
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
}
