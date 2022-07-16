import React from 'react'
import './About.css'

function About() {
  return (
    <div className='container-fluid text-center pt-5'>
        <h1 className='title-about'>SOBRE MI</h1>
        <h5 className='mx-auto mt-3' style={{width:"55rem"}}>
            Acutalmente estoy estudiando la carrera Tecnicatura en Programación en 
            Sistemas con el objetivo de seguir adquiriendo y reforzar conocimientos. Comencé 
            de forma autodidacta, luego realicé un curso de Programación Web FullStack en Digital House 
            en el que logré aprender con mayor profundidad una gran variedad de tecnologias.
        </h5>
        <h5 className='mt-4 mx-auto' style={{width:"55rem"}}>
            Soy una persona a la que le gusta aprender y le interesa la idea de aprender
            cada dia nuevas tecnologias o herramientas que sean de utilidad.Es por eso que 
            continuo ampliando mis conocimientos mediante cursos, como por ejemplo de Udemy o 
            a traves de YouTube, al mismo tiempo armo proyectos poniendo a prueba dichos conocimientos.
        </h5>
        <a href='./pdf' target="_blank">
            <button>
                - Mi CV -
            </button>
        </a>
    </div>
  )
}

export default About