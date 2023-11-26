<script>
    let info = [
        {
            title: "La Torre Imperial",
            data: "En un rincón mágico llamado Tango Oriental, se alza con majestuosidad la Torre Imperial. Inspirada por la rica historia de monumentos emblemáticos, esta estructura es un testimonio vivo de la colaboración cultural. Su base, adornada con detalles tradicionales, narra la historia de una dinastía ancestral. La parte vertical, con una elegancia moderna, representa la evolución a lo largo del tiempo. Rodeada por un entorno armonioso que fusiona vitalidad urbana y serenidad, la Torre Imperial se convierte en un punto de encuentro global. Este monumento celebra la diversidad y honra el legado de dos culturas únicas en una expresión arquitectónica excepcional.",
            img: "general/Leonardo_Diffusion_XL_Project_Description_I_imagine_a_unique_s_0.jpg",
            tags: [
                { info: "Histórico", color: "#007bff" },
                { info: "Cultural", color: "#28a745" },
                { info: "Arquitectura", color: "#ffc107" }
            ],
            location:"Gran Tango Oriental, vuteho 988"
        },
        {
            title: "Los Arcos de la Armonía",
            data: "En el corazón de Tango Oriental, destaca con majestuosidad la estructura conocida como los Arcos de la Armonía. Dos arcos blancos, delicadamente ornamentados, enmarcan la entrada a un espacio sereno y encantador. En el centro, se alza un pequeño palacio de inspiración ancestral, y sobre él, un obelisco intrincadamente tallado se eleva hacia el cielo. La Plaza de la Armonía se convierte en un refugio de tranquilidad, donde los elementos arquitectónicos equilibrados crean un ambiente atemporal, evocando la gracia y la elegancia en cada detalle.",
            img: "home/Leonardo_Diffusion_XL_Descripcin_del_ProyectoImagino_una_estru_1.jpg",
            tags: [
                { info: "Arte", color: "#6610f2" },
                { info: "Religioso", color: "#dc3545" },
                { info: "Paisajístico", color: "#20c997" }
            ], 
            location:"Plaza de la Armonia, Av. Yrygohyu 34 BIS"
        },
        {
            title: "Barihan",
            data: "En el corazón de Barihan, un rincón mágico donde las montañas abrazan lagos cristalinos, la arquitectura encantadora se mezcla con una cultura vibrante y jardines exquisitos. Este lugar se distingue por sus paisajes pintorescos que cautivan con la majestuosidad de sus picos nevados y la tranquilidad de sus aguas. Las calles empedradas te guían a través de una arquitectura única, donde tejados intrincados y fachadas coloridas dan vida a una escena visual fascinante. La cultura florece en festivales animados, fusionando tradiciones locales con expresiones artísticas contemporáneas. Los jardines, auténticos oasis, exhiben la exuberancia de la flora mientras la hospitalidad local, arraigada en sonrisas cálidas, te invita a descubrir la autenticidad de la comunidad de Barihan.",
            img: "home/Leonardo_Diffusion_XL_It_generates_an_extraordinarily_realisti_1.jpg",
            tags: [
                { info: "Natural", color: "#28a745" },
                { info: "Cultural", color: "#ffc107" },
                { info: "Festivales", color: "#6610f2" }
            ]
            ,
            location:"Barihan, Norte de Tango Oriental"
        },
        {
            title: "Pogpo Buhan",
            data: "Sumérgete en la asombrosa belleza de un descubrimiento natural y un tesoro arquitectónico que se fusionan en una única imagen. La escena captura la grandiosidad de un fenómeno natural desconocido hasta ahora y la espléndida arquitectura de un antiguo templo que se erige en la región.",
            img: "general/_fef5bb7e-7528-49e1-a2a9-1f87ea625744.jpeg",
            tags: [
                { info: "Natural", color: "#28a745" },
                { info: "Arquitectura", color: "#ffc107" },
                { info: "Misterioso", color: "#6c757d" },
                { info: "Histórico", color: "#007bff" }
            ],
            location:"Oeste de Tango Oriental"
        }
    ];
</script>

<div class="container mt-5">
    
    <hgroup>
        <h1 class="text-center mb-4 text-primary">Lugares que Tienes que Visitar</h1>
        <p class="lead">Explora nuestra selección de lugares fascinantes en Tango Oriental. Desde monumentos históricos hasta paisajes naturales impresionantes, descubre la diversidad de experiencias que te esperan en nuestra hermosa nación imaginaria. Sumérgete en la rica fusión de culturas que define cada rincón, y déjate cautivar por la magia que estos destinos tienen para ofrecer.</p>
    </hgroup>
    
    

    <div class="row">
        {#each info as item}
            <div class="col-md-6 mb-4">
                <div class="shadow p-4">
                    <img src="{item.img}" class="card-img-top" alt="{item.title}">
                    <div class="card-body pt-3">
                        <h3 class="card-title">{item.title}</h3>
                        <span class="text-primary">{item.location}</span>
                        <p class="card-text lead pt-2">{item.data}</p>
                    </div>
                    <div class="d-flex mx-2 mt-3">
                        {#each item.tags as t}
                            <small style="background-color: {t.color}" class="px-2 text-white mx-2">{t.info}</small>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
