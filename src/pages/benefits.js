import React from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import SEO from "../components/seo"
import "../styles/styles.scss"
const Benefits = () => {
  return (
    <>
      <SEO title="Benefits" />
      <Banner
        url="https://cdn.pixabay.com/photo/2016/10/10/22/36/seychelles-1730082_960_720.jpg"
        title="Grandes beneficios"
        description="Tienes la oportunidad de ganar viajes nacionales e
                internacionales, campañas especiales, entrenamientos exclusivos,
                joyas, autos y mucho más..."
        button=""
      />
      <section className="cards">
        <div className="container-fluid">
          <h3 className="text-center p-4">Obtén muchos premios y más...</h3>
          <div className="cards__gridcol-lg-12 row text-center justify-content-center align-items-center">
            <div className="col-12 col-md-6">
              <Card
                url="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9uZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                title="Dinero"
                description="Genera ingresos y si ya tienes, duplicalos con Natura Red Omega.
     "
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                title="Familia"
                description="Disfruta de más tiempo con tu familia"
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://cio.com.mx/wp-content/uploads/2018/11/natura.jpg"
                title="Productos"
                description="Obten descuentos increíbles y productos gratis
     "
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://images.unsplash.com/photo-1604156425963-9be03f86a428?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                title="Bonos"
                description="Pueden ganar bonos anuales de hasta $50,000
     "
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                url="https://images.unsplash.com/photo-1531181616225-f8e50c1ab53e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                title="Autos"
                description="Natura Red Omega te brinda la posibilidad de ganar un auto último modelo. 
     "
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://loqueva.com/wp-content/uploads/2018/08/NATURA-STAND-BAFWEEK-1-1024x683.jpg"
                title="Eventos"
                description="Disfruta de cenas y eventos donde premiamos tu dedicación y esfuerzo
     "
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://images.unsplash.com/photo-1583157048761-ac1dba033233?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                title="Cruceros"
                description="Gana viajes en cruceros increíbles
     "
              />
            </div>
            <div className="col-12 col-md-3">
              <Card
                url="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                title="Negocio propio"
                description="Olvídate de las jornadas laborales, trabaja desde la comodidad de tu hogar
     "
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                url="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                title="Viajes"
                description="Conoce las mejores playas de México, Natura Red Omega recompensa tu esfuerzo. 
     "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits
