import React, {useRef} from 'react';
import useOutsideClick from "./outside";
import useEscapeClick from "./escape";

export interface CloseWrapperProps {
    onEscapeOutside: Function;
    children: React.ReactNode
}

const CloseWrapper = ({onEscapeOutside, children}: CloseWrapperProps) => {
    const closeRef = useRef<HTMLInputElement>(null);

    useOutsideClick(closeRef, onEscapeOutside);
    useEscapeClick(closeRef, onEscapeOutside);

    return (
        <div ref={closeRef}>
            {children}
        </div>
    );
};

export default CloseWrapper;