import React from "react"
import Banner from "../components/Banner"
import Form from "../components/Form"
import SEO from "../components/seo"
import "../styles/styles.scss"
const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Banner
        url="https://cdn.pixabay.com/photo/2017/10/17/10/03/contact-2860030_960_720.jpg"
        title="Integrate al equipo"
        description="¿Te gustaría ser parte de nuestro equipo de más de 6.300 colaboradores?"
        button={
          <a href="mailto:elenaalvarez.redomega@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">
            Contáctanos y te guíamos en el proceso...
          </a>
        }
      />
      <Form />
    </>
  )
}

export default Contact
