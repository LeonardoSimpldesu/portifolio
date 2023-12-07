import React from "react";
import styles from "./Contact.module.css";
import Title from "../../components/Title";
import ContactForm from "../../components/ContactForm";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.header}>
                <Title>Entre em Contato Comigo</Title>
                <p className={styles.description}>
          Estou à disposição para discutir oportunidades de colaboração,
          responder a consultas e explorar projetos inovadores. Preencha o
          formulário abaixo, e entrarei em contato rapidamente para discutir
          como posso contribuir para o sucesso do seu projeto.
                </p>
            </div>
            <div className={styles.forms}>
                <div className={styles.information}>
                    <h3>Informações para contato</h3>
                    <p>Outras formas de me contatar</p>

                    <div className={styles.options}>
                        <ContactForm
                            title="Telefone"
                            information="+55 31 98378-1618"
                        >
                            <FaPhoneAlt />
                        </ContactForm>
                        <ContactForm
                            title="E-mail"
                            information="leonardodesouzaalmeidas@gmail.com"
                        >
                            <FaEnvelope />
                        </ContactForm>
                        <ContactForm
                            title="Endereço"
                            information="Belo Horizonte - MG"
                        >
                            <FaLocationArrow />
                        </ContactForm>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.form_text}>
                        <label htmlFor="">Assunto Do E-mail</label>
                        <input type="text" />
                    </div>
                    <div className={styles.form_text}>
                        <label htmlFor="">Seu E-mail</label>
                        <input type="text" />
                    </div>
                    <div className={styles.form_text}>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </div>
                    <div className={styles.form_text}>
                        <label htmlFor="">Telefone</label>
                        <input type="text" />
                    </div>
                    <div className={styles.form_message}>
                        <label htmlFor="">Mensagem</label>
                        <textarea type="text-box" rows="5" cols="33"/>
                    </div>
                </form>
            </div>
        </section>
    );
}
