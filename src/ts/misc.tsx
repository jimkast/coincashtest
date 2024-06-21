import * as React from 'react';
import {FormEventHandler, useState} from "react";
import {isValidEmail} from "./util";


export interface BtnLink {
    href: string;
    text: string;
}

export function BlueButtonLink(o: BtnLink) {
    return <a className="btn-link" href={o.href}>{o.text}</a>
}

export interface InputProps {
    label: string;
    initialValue?: string;
    inputName?: string;
    placeholder?: string;
    disabled?: boolean;
}

export interface DataSingleFieldForm extends InputProps {
    btnText: string;
}

export function TmplSingleFieldForm(o: DataSingleFieldForm) {
    const [value, setValue] = useState(o.initialValue);
    const [disabled, setDisabled] = useState(!o.initialValue);
    const [error, setError] = useState('');
    const [pristine, setPristine] = useState(true);
    const validate = () => {
        const valid = isValidEmail(value);
        if (valid) {
            setError('');
        } else {
            setError('Invalid email format.');
        }
        return valid;
    }
    const onInput: FormEventHandler = function (e) {
        setValue((e.target as HTMLInputElement).value)
        setDisabled(!(e.target as HTMLInputElement).value);
        if (!pristine) {
            validate();
        }
    }
    const btnOnClick: FormEventHandler = function (e) {
        setPristine(false);
        if (!validate()) {
            e.preventDefault();
        }
    }
    return <div className="btnfield-wrap">
        <div className="btnfield">
            <label className="btnfield-left">
                <span className="hidden">{o.label}</span>
                <input type="email" className="inp inp-trans" value={o.initialValue} name={o.inputName} placeholder={o.placeholder} onInput={onInput} required/>
            </label>
            <div className="btnfield-right">
                <button className="btn btn-loader" disabled={disabled} onClick={btnOnClick}>{o.btnText}</button>
            </div>
        </div>
        {error && <p className="err-msg">{error}</p>}
    </div>

}

