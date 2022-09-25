import * as React from 'react'
import image_1 from '../images/IMG-20220915-WA0052.jpg'
import image_2 from '../images/IMG-20220915-WA0054.jpg'
import image_3 from '../images/IMG-20220915-WA0055.jpg'
import image_4 from '../images/IMG-20220915-WA0053.jpg'
import video_1 from '../videos/VID-20220915-WA0043.mp4'
import video_2 from '../videos/VID-20220915-WA0057.mp4'
import video_3 from '../videos/VID-20220915-WA0058.mp4'

export const LINKS = [
    { title: 'Inicio', url: '#inicio' },
    { title: 'Servicios', url: '#servicios' },
    { title: 'Testimonios', url: '#testimonios' }
];

export const VIDEO_TESTIMONIALS = [
    {
        video: (
            <video className="testimonial" controls>
                <source src={video_1} type="video/mp4"></source>
            </video>
        )
    },
    {
        video: (
            <video className="testimonial" controls>
                <source src={video_2} type="video/mp4"></source>
            </video>
        )
    },
    {
        video: (
            <video className="testimonial" controls>
                <source src={video_3} type="video/mp4"></source>
            </video>
        )
    }
];

export const TEXT_TESTIMONIALS = [
    {
        text: '1. Mi nombre es Máximo, quería dejar mi testimonio sobre el trabajo que me han ofrecido, Cada día que pasa estoy más satisfecho de haber buscado ayuda, de aceptar que ya no podía solo. Mis problemas eran muchos, pero el principal era estar lejos de mi familia y de mi hogar, tpdp se me fue de las manos, pero sabía que estando cerca de ellos podía encontrar mi norte. Puse todo en sus manos y seguí sus pasos y concejos, además de no sentirme solo volví a tener contacto con mi familia y hoy estamos renovando la relación y con un futuro muy prometedor, muchas gracias Alisha por esta nueva oportunidad que me brindó en todo momento.'
    },
    {
        text: '2. Quiero dejar mi testimonio y mis palabras de agradecimiento hacia la maestra quien se ocupó de mi caso cuando nadie pudo darme solución, no me dejo de lado y me dio la posibilidad de confiar en que todo se iba a solucionar. Mi esposo se alejó de mi después de 15 años de estar juntos y de construir una vida y una familia, mucha gente se interpuso en nuestra relación y eso nos dejó debastados. Para empezar, me guió para tener calma y estabilizarme entre tanto sufrimiento, me acompañó en el proceso y me trajo de vuelta a la persona que amo, soy muy feliz y estoy muy agradecida a ti y a tu bello trabajo.'
    },
    {
        text: '3. Hola, tenía bastante tiempo que deseaba a mi compañero de trabako, él no se fijaba en mí, solo me saludaba pero nada más. No dudé en hacer algo al respecto y buscar ayuda de la lic. Alisha, ahí fue donde me di cuenta de que tome la mejor decisión, luego de bastantes percances con el dinero, pude darle comienzo al trabajo y obtener los resultados que tanto quería, realmente estoy muy agradecida.'
    },
    {
        text: '4. Quiero dejar en claro lo importante de cómo trabaja Alisha Kumari, todo lo que brinda desde el comienzo más su atención personalizada de 24 horas, no solo recuperé a mi ser amado, sino que también su acompañamiento fue constante, siempre agradecida a usted querida maestra.'
    },
    {
        text: '5. Luego de 3 años de divorciados con el padre de mis 2 hijas y ver que él se paseaba con diferentes mujeres, me di cuenta que realmente no soportaba que no estuviera a mi lado. Acudí a la Lic. Alisha Kumari para que él regrese con nosotras, su familia. Dicho y hecho no tardó ni cinco días en hablar con mis hijas y pedir ayuda para que le dé una segunda oportunidad, realmente no tengo como agradecer todo lo que realizó por mí.'
    },
    {
        text: '6. Luego de 17 años de casados con mi mujer habíamos perdido la pasión, ya no había ni besos ni hablar de tener relaciones. Encontré la web de Alisha por google, me hizo una lectura donde ví tal cual mi vida. Me explicó sobre realizar un endulzamiento para volver a tener a esa mujer interesada en mí y llena de pasión, en apenas el tercer día de ritual comencé a ver los primeros resultados y quedé súper contenta all legar al séptimo día y ver los resultados definitivos.'
    },
    {
        text: '7. hola quiero dejar mi testimonio soy Alexis y tenía un compañero de mi trabajo que me volvía loco a la cual él actuaba indiferente conmigo, luego de indagar de su situación me enteré que él era gay igual que yo, me decidí a encararlo a la cual fui rechazado, les juro ,e sentí muy mal. Luego decidí buscar ayuda hasta que encontré a la Lic. Alisha, ella fue muy atenta y comprensiva donde con su ayuda realizando un amarre sexual pude estar con esa persona que tanto amaba y amo, hoy actualmente somos pareja y estamos muy bien jusntos, realmente recomiendo a la licenciada.'
    }
]

export const SERVICES = [
    {
        title       : 'Amarres',
        description : 'A veces un solo error puede transformar tu vida en un abismo y tu felicidad en sufrimiento, te despiertas todas las mañanas arrepintiéndote de esa equivocación y que ese día nunca hubiera sucedido. Tus noches se convierten en pesadillas y te desvelas pensando que tu ser amado se ha alejado y nunca más regresará o volverá a ser el mismo. Este poderoso ritual revive la llama del amor y crea lazos tan fuertes que tu pareja regresara rendida a tus pies y totalmente enamorada y arrepentida.',
        imageUrl    : image_1
    },
    {
        title       : 'Endulzamientos',
        description : 'Tenemos el conocimiento y la experiencia para hacer que su ser amado regrese ante usted.',
        direction   : 'right',
        imageUrl    : image_2
    },
    {
        title       : 'Uniones del mismo sexo.',
        description : 'Sientes una fuerte atracción hacia esa persona con la cual tienes poca relación o ni siquiera conoces, pero percibes una conexión que nunca antes habías sentido? Este es el ritual de seducción por excelencia, donde la persona deseada sentirá una fuerte energía y atracción hacia ti.',
        imageUrl    : image_3
    },
    {
        title       : 'Retornos',
        description : 'Para que tu ser amado vuelva donde ti, te ame y te pida pedón',
        direction   : 'right',
        imageUrl    : image_4
    },
];
