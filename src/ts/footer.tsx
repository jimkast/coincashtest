import * as React from "react";
import {TmplSingleFieldForm} from "./misc";
import {useState} from "react";
import {Modal} from "./modal";

export function Footer() {
    return <div className="home-sec sec-footer">
        <div className="wrapper">
            <section className="sec-signup">
                <div className="wrapper">
                    <h2 className="sec-title">Get started <strong className="text-blue">today</strong></h2>
                    <p className="subtitle">Signup to receive email updates on new product announcements, special promotion sales and more.</p>
                    <FooterSignupForm/>
                </div>
            </section>
            <footer className="footer clearfix">
                <div className="footer-left">
                    <a href="/" className="link-white">
                        <svg className="header-logo-img" width="175" height="24">
                            <use href="./img/icons.svg#logo"></use>
                        </svg>
                    </a>
                </div>
                <div className="footer-right">
                    <ul className="footer-menu">
                        <li className="footer-menu-item"><a className="footer-link" href="">Privacy policy</a></li>
                        <li className="footer-menu-item"><a className="footer-link" href="">Terms and conditions</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
}


export function FooterSignupForm() {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    function submit(e) {
        e.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalVisible(true);
        }, 800);

    }
    return <form className={'footer-signup-form' + (loading ? ' form-loading' : '')} method="post" action="/signup" onSubmit={submit} noValidate>
        <TmplSingleFieldForm inputName="email"
                             label="Email"
                             placeholder="Enter your email"
                             btnText="Sign up"/>
        <div hidden={!modalVisible}>
            <Modal onClose={() => setModalVisible(false)} html={<>
                <h3 className="h3">Thank you for your registration!</h3>
                <p>You have successfully signup up! <br/> We will be notified after any update.</p>
            </>}/>
        </div>
    </form>
}



