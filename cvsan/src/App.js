//import logo from './logo.svg';
import style from './App.module.css';

function App() {
  return (
    <div className = {style.div}>
      <header className = {style.head} >
        <h1> Santiago Fernandez </h1>
        <h2 className = {style.sub}> Full Stack Developer </h2>
      </header>
      
      <div className={style.contact}>
          <h5>  sannlfernandez8@gmail.com</h5>
          <h5>Cel. +54 1156337228</h5>
          <h5> Buenos Aires - Argentina. </h5>
      </div>

      <div className={style.contact1}>
        
        
        <h5> <a href='http://www.linkedin.com/in/santiago-fernandez896'> Linkedin</a></h5>
        <h5> <a href='https://portfoliosf896.netlify.app'> Portfolio</a> </h5>
        <h5> <a href='https://github.com/San896'>Github</a> </h5>
      </div>


      <div className = {style.p}>
      <p>
      Full Stack Developer con formación como Desarrollador Web. Experiencia trabajando en JS, Base de datos, servidores, UI , UX y Scrum entre otras tecnologías del sector.<br/>
Trabaje en conjunto en equipo en una  SPA, orientada a una instituion deportiva/academica con un e-comerce integrado, autenticacion con Auth0 entre mas funcionalidades, mi aporte fue completo en base de datos back y front. Tambien trabaje individualemten en una SPA sobre recetas de comida y otra sobre el clima, te invito a mi  <a href='https://portfoliosf896.netlify.app'> Portfolio</a><br/>
Con pensamiento creativo, empatia, trabajo en equipo, autonomia y buena resolucion de problemas. 
      </p>
      </div>


      <h4 className={style.titles}> TECNOLOGIAS: </h4>
      <p className={style.titles}>   SQL | PostgreSql | Sequelize | Node.js | Express | JavaScript | HTML | CSS | Bootstrap | React | Redux | Scrum | Git | Cloudinary.    </p>

      <h4 className={style.titles}> PROYECTOS: </h4>
      <div>
      <h5 className={style.titles}> Full Stack Web Developer – “AthenasClub App” </h5>
      <h6 className={style.titles}> Henry Bootcamp, Buenos Aires, Argentina</h6>
      <h6 className={style.titles}> Oct 2022 – Nov 2022 </h6>
      <ul >
        <li>Diseñar y desarrollar una Single Page Aplication(SPA),  orientada a una institucion deportiva, Cuenta con un e-commerce integrado, pasarela de pagos de mercado pago, tambien con autenticacion de usuarios con Auth0, incluye un dashboard para el administrador y usuarios. Creacion y organizacion de productos, imagenes subidas a Cloudinary, reviews de los productos entre muchas mas funcionalidades. </li>
        <li>Tecnologias usadas en la SPA: Front React, Redux, Bootstrap y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize. </li>
        <a href='https://proyecto-final-one-murex.vercel.app/'> Deploy </a> <br/>
       <a href='https://github.com/MATarg81/proyecto-final'> Repositorio </a> 
      </ul>
      </div>


      <div>
      <h5 className={style.titles}> Full Stack Web Developer – “Food App” </h5>
      <h6 className={style.titles}> Henry Bootcamp, Buenos Aires, Argentina</h6>
      <h6 className={style.titles}> Sept. 2022 - Oct. 2022  </h6>
      <ul>
        <li>Diseñar y desarrollar una App sobre Recetas de comida, las cual  incluye búsquedas, filtrados, ordenamientos por tipos de receta, nivel de salud, nombre, entre otras. Tambien cuenta con un formulario controlado para la creacion de recetas. Fue creada utilzando una APi externa.  </li>
        <li>Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.  </li>
        <a href='https://sansfoodapp.netlify.app/'> Deploy </a> <br/>
       <a href='https://github.com/San896/PIFood'> Repositorio </a> 
      </ul>
      </div>

      <h4  className={style.titles}> EDUCACIÓN PROFESIONAL  </h4>
      <ul>
        <li> Full Stack Web Developer. Henry Bootcamp. +800 horas de cursado teórico-práctico. 2021-2022. </li>
        <li> 3 años de carrea en Ingenieria Electromecanica- UNGS(Universidad Nacional de Gral Sarmiento) </li>
      </ul>

      <h4 className={style.titles}>EXPERIENCIA PROFESIONAL/OTRAS EXPERIENCIAS</h4>
      <ul>
        <h5>Productor Asesor de Seguros – RF Asesores/Productores de seguros </h5>
        <h6> 2014 – 2023(actualidad)    </h6>
        <li> 8 años de experiencia en atencion al cliente, trabajo en equipo. Administracion de polizas, cobros, siniestros, tanto de vehiculos, hogares, comercios, como de vida. Manejo de multiples plataformas de distintas compañias de seguros </li>

        <h5>Emprendimiento, venta de baterias de vehiculos</h5>
        <h6>  2020 - 2022 </h6>
        <li>Emprendimiento, venta de baterias para vehiculos, testeos, asesoramientos</li>
      </ul>

      <h4  className={style.titles}> EDUCACIÓN COMPLEMENTARIA  </h4>
      <ul>
        <li> Escuela de Javascript. Platzi. 2021. </li>
      </ul>


      <h4  className={style.titles}> IDIOMAS </h4>
      <ul>
        <li>  Inglés - B2 Upper Intermediate(EFSET) </li>
        <li>  Portugues - Basic </li>
      </ul>

      <h4  className={style.titles}> COMPETENCIAS </h4>
      <ul>
        <li> Creatividad </li>
        <li> Trabajo en equipo </li>
        <li> Resolutivo </li>
        <li> Resiliencia </li>
        <li> Pasiencia </li>
        <li> Buena capacidad de comunicación. </li>
      </ul>

      
    </div>
  );
}

export default App;
