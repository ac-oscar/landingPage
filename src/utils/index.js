import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const LINKS = [
    { title: 'Inicio', url: '#inicio' },
    { title: 'Servicios', url: '#servicios' },
    { title: 'Testimonios', url: '#testimonios' }
];


export const CAROUSEL_IMAGES = [
    <StaticImage src="../images/image_1.jpeg" alt="image 1" className="Carousel__Image"/>,
    <StaticImage src="../images/image_2.jpeg" alt="image 2" className="Carousel__Image"/>,
    <StaticImage src="../images/image_3.jpeg" alt="image 3" className="Carousel__Image"/>
];

export const SERVICES = [
    {
        title       : 'Amarres',
        description : 'A veces un solo error puede transformar tu vida en un abismo y tu felicidad en sufrimiento, te despiertas todas las mañanas arrepintiéndote de esa equivocación y que ese día nunca hubiera sucedido. Tus noches se convierten en pesadillas y te desvelas pensando que tu ser amado se ha alejado y nunca más regresará o volverá a ser el mismo. Este poderoso ritual revive la llama del amor y crea lazos tan fuertes que tu pareja regresara rendida a tus pies y totalmente enamorada y arrepentida.'
    },
    {
        title       : 'Endulzamientos',
        description : 'Tenemos el conocimiento y la experiencia para hacer que su ser amado regrese ante usted.',
        direction   : 'right'
    },
    {
        title       : 'Uniones del mismo sexo.',
        description : 'Sientes una fuerte atracción hacia esa persona con la cual tienes poca relación o ni siquiera conoces, pero percibes una conexión que nunca antes habías sentido? Este es el ritual de seducción por excelencia, donde la persona deseada sentirá una fuerte energía y atracción hacia ti.'
    },
    {
        title       : 'Retornos',
        description : 'Para que tu ser amado vuelva donde ti, te ame y te pida pedón',
        direction   : 'right'
    },
];
