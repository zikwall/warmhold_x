import React, {useEffect} from 'react';

const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: Function) => {
    useEffect(
        () => {
            const listener = (e: MouseEvent | TouchEvent) => {
                // Do nothing if clicking ref's element or descendent elements
                if (ref.current && e.target instanceof Element && !ref.current.contains(e.target)) {
                    callback();
                }
            };

            document.addEventListener('click', listener, true);
            document.addEventListener('touchend', listener, true);

            return () => {
                document.removeEventListener('click', listener, true);
                document.removeEventListener('touchend', listener, true);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [[ref, callback]]
    );
};

export default useOutsideClick;