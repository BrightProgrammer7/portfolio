import { useEffect } from "react";
import { INFO } from "../data";
import { Footer, Logo, Navbar, Socials } from "../components";

function Contact() {
  useEffect(() => {
    document.title = `Contact | ${INFO.main.title}`;
    window.scrollTo(0, 0);
  }, []);
  return (
    <><div className="page-content">
      <Navbar active="contact" />
      <div className="content-wrapper">
        <div className="contact-logo-container">
          <div className="contact-logo">
            <Logo width={46} />
          </div>
        </div>

        <div className="contact-container">
          <div className="title contact-title">
            Restons en contact : Moyens de me contacter
          </div>

          <div className="subtitle contact-subtitle">
            Merci de votre intérêt pour me contacter. Je suis ouvert à vos commentaires, questions et suggestions. Si vous avez une question ou un commentaire spécifique, n`hésitez pas à m`envoyer un e-mail directement à l`adresse suivante :
            &nbsp;{" "}
            <a href={`mailto:${INFO.main.email}`}>
              {INFO.main.email}
            </a>
            . Je m`efforce de répondre à tous les messages dans les 24 heures, bien que cela puisse prendre plus de temps pendant les périodes chargées. Vous pouvez également utiliser le formulaire de contact sur mon site web pour me joindre. Il vous suffit de remplir les champs requis et je vous répondrai dès que possible. Enfin, si vous préférez me contacter via les réseaux sociaux, vous pouvez me trouver sur :{" "}
            <a
              href={INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              {INFO.socials.instagram}
            </a></div>
        </div>

        <div className="contact-container">
          <div className="contact-socials">
            <Socials />
          </div>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div></>
  )
}

export default Contact