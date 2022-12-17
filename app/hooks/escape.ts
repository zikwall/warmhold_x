import React, {useEffect} from 'react';

const useEscapeClick = (ref: React.RefObject<HTMLInputElement>, callback: Function) => {
    useEffect(
        () => {
            const listener = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    callback();
                }
            };

            document.addEventListener("keydown", listener, true);

            return () => {
                document.addEventListener("keydown", listener, true);
            };
        },
        [[ref, callback]]
    );
};

export default useEscapeClick;