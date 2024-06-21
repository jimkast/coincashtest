import * as React from "react";
import {ReactNode} from "react";

export function Modal({html, onClose}: {html: string | ReactNode, onClose?: () => void}) {
    function modalClose() {
        if (typeof onClose === 'function') {
            onClose();
        }
    }
    return <div className="modal">
        <div className="modal-frame" onClick={modalClose}/>
        <div className="modal-box">
            <div className="modal-close" data-modal-close="" onClick={modalClose}/>
            {html}
        </div>
    </div>
}
