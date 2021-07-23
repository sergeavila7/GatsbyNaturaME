import React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Banner from "../components/Banner"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../styles/styles.scss"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Banner
      url="https://www.modaes.es/files//000_2016/natura/natura-oficinas-728.jpg"
      title="Natura Red Omega"
      description=""
      button=" Conoce nuestras marcas..."
      href="https://www.natura.com.mx/nuestras-marcas"
    />
    <section className="anuncio">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8 offset-md-2 ">
            <h3>
              <span>
                <strong>¿Por qué elegir Natura?</strong>
              </span>
            </h3>
            <p className="text-left">
              Nuestro negocio ayuda a inspirar a que las personas encuentren su
              libertidad financiera, crecimiento personal y profesionasl
              mediante la mejor oportunidad de vida en redes de mercadeo.
            </p>
            <h3 className="pt-4">
              <span>
                <strong>Emprende tu Negocio Propio con Natura</strong>
              </span>
            </h3>
            <p className="text-left">
              Genera ingresos de forma fácil, tú decides tus jornadas de
              trabajo. Ser emprendedor esta al alcance de tus manos y Natura te
              ayuda a lograrlo.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="family">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-6 text-left pt-5">
            <h3 className="text-left">
              Natura ha logrado cambiar la vida de miles de familias Mexicanas
            </h3>
            <p className="d-none d-lg-block">
              Tú puedes formar parte de ello y nosotros te ayudamos.
            </p>
            <button className="btn btn-warning">
              <Link className="text-decoration-none" to="/contact">
                ¡Contáctanos!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
