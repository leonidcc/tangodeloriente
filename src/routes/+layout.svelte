<script>
    import Cards from './Cards.svelte';
    import "./style.css"

    let selected = 0;

    let data = [
    {
        ligth: "Descubre la",
        bold: "República Tango del Oriente",
        description: "En esta tierra mágica, las suaves notas del tango se mezclan con la elegancia del Oriente",
        banner: "/home/fondo.jpeg",
        banner2: "/home/fondo2.jpeg",
        resumecard: "Inicio",
        littlecard: "La puerta a un mundo fascinante",
        url:"/"
    },
    {
        ligth: "Explora nuestro",
        bold: "Idioma",
        description: "Sumérgete en la riqueza lingüística de la República de Tango del Oriente. Descubre el encanto de nuestras palabras y expresiones, una sinfonía de sonidos que une dos culturas.",
        banner: "/home/idioma.jpeg",
        banner2: "/home/idioma2.jpeg",
        resumecard: "Idioma",
        littlecard: "Palabras que conectan dos mundos",
        url:"idioma"
    },
    {
        ligth: "Aprende el idioma con",
        bold: "Juegos Interactivos",
        description: "Diviértete mientras aprendes el idioma de la República de Tango del Oriente. Nuestros juegos interactivos te sumergirán en una experiencia educativa única y entretenida.",
        banner: "/home/playgame.png",
        banner2: "/home/playgame2.png",
        resumecard: "Aprende Jugando",
        littlecard: "Diversión educativa para todos",
        url:"aprende"
    },
    {
        ligth: "Explora nuestra",
        bold: "Historia, Arte y Tradición",
        description: "Desde una lucha por la libertad hasta el nacimiento de una nación única, descubre la rica historia que da forma a la República de Tango del Oriente.",
        banner: "/home/portada.png",
        banner2: "/home/portada2.png",
        resumecard: "Historia,  Arte y Tradición",
        littlecard: "Una lucha de libertad",
        url:"historia"
    }, 
    {
        ligth: "Descubre",
        bold: "Construcciones Emblemáticas",
        description: "Maravíllate con las construcciones que dan forma al horizonte de la República de Tango del Oriente. Desde modernos rascacielos hasta antiguos templos, cada estructura cuenta una historia única.",
        banner: "/home/Leonardo_Diffusion_XL_Descripcin_del_ProyectoImagino_una_estru_1.jpg",
        banner2: "/home/Leonardo_Diffusion_XL_Descripcin_del_ProyectoImagino_una_estru_12.jpg",
        resumecard: "Construcciones Emblemáticas",
        littlecard: "Historia en cada piedra",
        url:"descubre"
    },
    {
        ligth: "Saborea la",
        bold: "Gastronomía",
        description: "Explora el festín de sabores que ofrece la República de Tango del Oriente. Desde platos tradicionales hasta fusiones culinarias únicas, cada bocado es un viaje gastronómico inolvidable.",
        banner: "/home/Leonardo_Diffusion_XL_Generate_a_realistic_image_that_captures_2.jpg",
        banner2: "/home/Leonardo_Diffusion_XL_Generate_a_realistic_image_that_captures_22.jpg",
        resumecard: "Gastronomía",
        littlecard: "Sinfonía de sabores auténticos",
        url:"gastronomia"
    },
    {
        ligth: "Agradecemos tu",
        bold: "Visita",
        description: "Nos sentimos agradecidos por tu interés en la República de Tango del Oriente. ¡Esperamos que hayas disfrutado de tu viaje virtual! Siempre eres bienvenido.",
        banner: "/home/ia.jpeg",
        banner2: "/home/ia2.jpeg",
        resumecard: "Agradecimiento",
        littlecard: "감사합니다 (Gracias)",
        url:"ia"
    },
    
];


function updateselected(x){
    selected = x
}

</script>

<section style="background-image: url({data[selected].banner})">  
    <div class="glass d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row ">
                <div class="col-5  text-white  d-flex justify-content-center align-items-center">
                    <div class="">

                        <h1 class="display-4">
                            <span>{data[selected].ligth}</span>
                            <strong class="fw-bold">
                                {data[selected].bold}
                            </strong>                        
                        </h1>         
                        <br>           
                        <p class="lead">{data[selected].description}</p>
                    </div>
                </div>
                <div class="col-7">
                    <Cards cards={data} updateselected={updateselected}></Cards>
                </div>
                
            </div>
        </div>
    </div>
</section>

<div class="page">
    <slot></slot>
</div>


<div class=" bg-light py-5"> 
    
    <footer class="container text-center">
        <div id="footer-content">
            <div class="language-section">            
                <p>¡Gracias por visitar nuestro sitio web! Esperamos que haya disfrutado de su experiencia.</p>
            </div>
            <div class="language-section">            
                <p>우리 웹 사이트를 방문해 주셔서 감사합니다! 즐거운 경험을 하셨기를 바랍니다.</p>
            </div>
        </div>
    </footer>

</div>


<style> 
.page{
    min-height: 300px;
}
    .glass{
        background-color: rgba(0,0,0,.6);
        width: 100vw;
        height: 85vh;
        overflow: hidden;
    }
    section{
       
        background-size: cover;
        width: 100vw;
        height: 85vh;
        background-repeat: no-repeat; 
        background-position: 100% 20%;
        background-attachment: fixed;
    } 
    *{
				font-family: 'Roboto', sans-serif;
			}
</style>