import * as React from "react";
import {BlueButtonLink} from "./misc";
import {useState} from "react";

export function Header() {
    const [expanded, setExpanded] = useState(false);
    const onToggleExpand = () => {
        setExpanded(!expanded);
    }
    return <div className="sec-hero">
        <header className={'header clearfix' + (expanded ? ' header-nav-expanded' : '')}>
            <div className="wrapper">
                <a href="/" className="header-logo-link">
                    <svg className="header-logo-img" width="175" height="24">
                        <use href="./img/icons.svg#logo"></use>
                    </svg>
                </a>
                <nav className={'header-nav' + (expanded ? ' header-nav-expanded2' : '')}>
                    <ul className="header-nav-menu">
                        <li className="header-nav-item"><a href="/" className="header-nav-link">Features</a></li>
                        <li className="header-nav-item"><a href="/" className="header-nav-link">About</a></li>
                        <li className="header-nav-item"><a href="/" className="header-nav-link">Contact</a></li>
                        <li className="header-nav-item"><a href="/" className="btn-link">Get the app</a></li>
                    </ul>
                </nav>
                <button type="button" className="btn-header-nav" style={{color: 'blue'}} onClick={onToggleExpand}>
                    <svg width="24" height="24">
                        <use href="./img/icons.svg#burger"></use>
                    </svg>
                </button>
            </div>
        </header>
        <section>
            <div className="wrapper">
                <div className="clearfix sec-hero-inner tbl-mb-collapse">
                    <div className="hero-left tbl-cell">
                        <h1 className="sec-title">You can buy anything with <strong className="text-blue">COINCASH</strong></h1>
                        <p className="subtitle">The easiest way to use your cryptocurrencies for everyday purchases.</p>
                        <BlueButtonLink href={""} text="Download now for free"/>
                    </div>
                    <div className="hero-right tbl-cell">
                        <div className="half-circle-wrap">
                            <div className="circle-bg"></div>
                        </div>
                        <div className="circle-img-wrap">
                            <img className="circle-img" src="./img/iphone-cropped.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export function SecBlueSlogan({text}: {text: string}) {
    return <div className="blue-sec">
        <div className="wrapper-small">
            <p className="blue-sec-text subtitle-big">{text}</p>
        </div>
    </div>
}
