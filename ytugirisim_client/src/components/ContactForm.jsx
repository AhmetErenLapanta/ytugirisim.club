import React from "react";

const ContactForm = () => {
    return (
        <div className="bd-grid">
            <h2 className="section-title">İletişime Geç!</h2>
            <div className="contact__container bd-grid">
                <form
                    className="contact__form"
                    method="post"
                    action="https://formspree.io/f/mrgvboln"
                >
                    <input
                        type="text"
                        placeholder="İsim"
                        className="contact__input"
                        name="name_client"
                    />
                    <input
                        type="mail"
                        placeholder="Email"
                        className="contact__input"
                        name="email"
                    />
                    <input
                        type="tel"
                        placeholder="Telefon Numarası"
                        className="contact__input"
                        name="Tel"
                    />
                    <textarea
                        name="message"
                        id
                        cols={0}
                        rows={10}
                        className="contact__input"
                        placeholder="Açıklama"
                        defaultValue={""}
                    />
                    <button type="submit" className="contact__button button">
                        Gönder
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
