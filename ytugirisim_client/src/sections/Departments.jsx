const Departments = () => {
    return (
        <div className="acord-container bd-grid" id="deps">
            <h2 className="section-title">Departmanlarımız</h2>
            <div className="accordion">
                <div className="accordion-item" id="question1">
                    <a className="accordion-link" href="#question1">
                        <div className="flex">
                            <h3>Tanıtım Departmanı</h3>
                        </div>
                        <i className="icon ion-md-arrow-forward" />
                        <i className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <p>
                            Tanıtım departmanı, kulübün ve etkinliklerinin
                            tanıtımını yapar. Bu departman sosyal medya, web
                            siteleri veya diğer yollarla kulübün ve
                            etkinliklerinin duyurulmasını sağlar.
                        </p>
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question2">
                    <a className="accordion-link" href="#question2">
                        <div className="flex">
                            <h3>Sponsorluk Departmanı</h3>
                        </div>
                        <i className="icon ion-md-arrow-forward" />
                        <i className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <p>
                            Sponsorluk departmanı, kulübün finansmanı için
                            sponsorlar arar. Bu departman, kulübün etkinlikleri
                            veya programları için sponsorlar bulur ve
                            sponsorlarla anlaşmalar yapar.
                        </p>
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question3">
                    <a className="accordion-link" href="#question3">
                        <div className="flex">
                            <h3>Akademi Departmanı</h3>
                        </div>
                        <i className="icon ion-md-arrow-forward" />
                        <i className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <p>
                            Akademi departmanı, kulüp üyelerine girişimcilik ve
                            işletme konularında eğitim veren dersler, seminerler
                            veya atölyeler sunar. Bu departman ayrıca kulüp
                            üyelerine mentorluk veya staj imkanları sağlar.
                        </p>
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question4">
                    <a className="accordion-link" href="#question4">
                        <div>
                            <h3>Etkinlik Departmanı</h3>
                        </div>
                        <i className="icon ion-md-arrow-forward" />
                        <i className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <p>
                            Etkinlik departmanı, üniversitenin girişimcilik
                            kulübünün etkinliklerinin planlaması, düzenlenmesi
                            ve gerçekleştirilmesi için sorumludur. Bu departman,
                            üniversitenin girişimcilik ekosistemi içinde
                            etkileşim sağlamak için konferanslar, seminerler,
                            hackathonlar veya yarışmalar gibi etkinlikler
                            düzenler.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Departments;
