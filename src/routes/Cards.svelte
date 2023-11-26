<script>
    import { goto } from '$app/navigation';


export  let cards = [
    ];
  
export let updateselected = ()=>{}
    let selected = 0;
  
    function scrollToSelected() {
      const container = document.querySelector('.card-slider');
      const cardWidth = container.clientWidth * 0.35; // Ancho de cada tarjeta
      container.scrollLeft = selected * cardWidth;
      updateselected(selected);
      goto(cards[selected].url);
    }
  </script>
  
  <div class="card-slider">
    {#each cards as card, index}
      <div class="cardb"
        on:click={() => {
          selected = index;
          scrollToSelected(); // Llama a la función para hacer scroll al elemento seleccionado
        }}
        style="padding:{(selected == index ? '10px 20px' : '40px 20px')};"
      >
        <div class="carditem align-items-end" style="background-image: url('{card.banner2}');">
          <div class="tarjeta p-4">
            <strong>{card.resumecard}</strong>
            <p>{card.littlecard}</p>
          </div>
        </div>
      </div>
    {/each}
  </div> 
  {#if selected > 0}
    <button  class="round-button" on:click={() => {
      selected--;
      scrollToSelected();
    }} >← 이전의</button>
    {:else}
    <button  class="round-button" disabled> ← 이전의</button>
  {/if}
  {#if selected < cards.length -1}         
      <button  class="round-button" on:click={() => {
        selected++;
        scrollToSelected();
      }} >수행원 → </button>
    {:else}
    <button  class="round-button" disabled>수행원 →</button>
  {/if}

  <style>
    .card-slider {
      display: flex;
      overflow-x: scroll;
      width:140%;
      scroll-behavior: smooth; /* Agregando scroll suave */
    }
  
    .cardb {
      flex: 0 0 35%;
      transition: all 0.5s ease-in-out;
      height:440px;
      overflow: hidden;
      padding: 30px;
    }
  
    .carditem {
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      background-size: cover;
    }
  
    .tarjeta {
      color: white;
      background: rgb(255, 72, 72);
      background: linear-gradient(180deg, rgba(255, 72, 72, 0) 0%, rgba(0, 0, 0, .7082808123249299) 100%);
      width: 100%;
    }
    /* Estilo para el botón */
    .round-button {
      background-color: rgba(0, 0, 0, 0.2); /* Negro semi transparente */
      color: white; /* Texto en color blanco */
      border: none; /* Sin bordes */ 
      border-radius: 5px;      
      padding: 10px 30px; /* Ajusta el relleno según sea necesario */
      cursor: pointer; /* Cambia el cursor al pasar sobre el botón */ 
    }
    /* Estilo para quitar el contorno cuando el botón está enfocado */
    .round-button:focus {
      outline: none;
    }
/* Estilo para el botón deshabilitado */
    .round-button:disabled {
      opacity: 0.5; /* Ajusta la opacidad según sea necesario */
      cursor: not-allowed; /* Cambia el cursor a "no permitido" */
    }
  </style>
   