import React from "react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import "../styles/styles.scss"

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_kuhfpkf",
        "template_glcdt3z",
        e.target,
        "user_xZG2GDssDD05TPUzSnMNO"
      )
      .then(
        result => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje Enviado con Exito!",
            text: "Pronto nos pondremos en contacto contigo",
          })
        },
        error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        }
      )
    e.target.reset()
  }
  return (
    <section className="contact m-5">
      <div className="container">
        <div class="container-form row justify-content-center align-items-center">
          <form className="form-contact col-lg-12" onSubmit={sendEmail}>
            <h3 className="text-center p-4">Contacto</h3>
            <div className="input-container mb-3">
              <i class="icon fas fa-user"></i>{" "}
              <input
                className="input-text"
                type="text"
                name="Name"
                placeholder="Introduce tu nombre(s)"
                required
                pattern="[a-zA-ZÀ-ÿ\s]{1,25}"
                title="Username should only contain lowercase letters. e.g. Juan"
              />
            </div>
            <div className="input-container mb-3">
              <i class="icon fas fa-user-friends"></i>
              <input
                className="input-text"
                type="text"
                name="Lastname"
                placeholder="Introduce tu apellidos"
                required
                pattern="[a-zA-ZÀ-ÿ\s]{1,60}"
                title="Username should only contain lowercase letters. e.g. Juan"
              />
            </div>

            <div className="input-container mb-3">
              <i class="icon fas fa-envelope"></i>
              <input
                className="input-text"
                type="email"
                name="Email"
                placeholder="Introduce tu correo electronico"
                required
                pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,6})$"
                title="Ingrese una cuenta de correo valida. example@example.com"
              />
            </div>

            <div className="input-container mb-3">
              <i class="icon fas fa-phone-alt"></i>
              <input
                className="input-text"
                type="phone"
                name="Phone"
                placeholder="Introduce tu número telefonico"
                required
                pattern="[0-9]{10,12}"
                title="Ingrese un numero telefonico valido de 10 digitos."
              />
            </div>

            <div className="textarea-container mb-3">
              <i class="icon fas fa-envelope-open-text"></i>
              <textarea
                className="textarea"
                name="msg"
                placeholder="Escribe tu mensaje"
                required
              />
            </div>

            <div className="input-container mb-3">
              <input class="submit-btn" type="submit" name="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
