<script>
import { isSimilar, read, shuffle } from '$lib/aux';
import Question from './Question.svelte';
import Responces from './Responces.svelte';
import {questionss}     from "$lib/questionss"
let step = -1;


let questions = questionss[0]; 

let resp = ""
let status = ""

function start(){
    questions.qry = shuffle( questions.qry)
    step = 0
    read(questions.qry[step].query,activateMicrophone,'es')
}

function home(){
     resp = ""
    status = ""
    step = -1;
}

function next(){
    read(questions.qry[step].query,activateMicrophone,'es')
}
function skip(){
    status = "Skip"             
    step+=1            
    recognition.onend = () => { 
        if (step < questions.qry.length ) next()
    }
    recognition.stop();   
} 



let  recognition 
let catchError = 0
function activateMicrophone() {
    status = "청취... - Escuchando..."
    if (!recognition) recognition = new webkitSpeechRecognition() || new SpeechRecognition();    

    recognition.lang = 'ko-KR'; // Configuración para escuchar en inglés
    
    recognition.onresult = (event) => {
        const respuestaUsuario = event.results[0][0].transcript;
        console.log('Usuario dijo:', respuestaUsuario);
        resp = respuestaUsuario                 
    };
    
    recognition.onerror = (event) => {
        console.error('Error al reconocer la voz:', event.error);
        catchError+=1
        if(catchError > 100){
            recognition.stop();             
            alert("Hay un error con el microfono")
        } 
    };
    
    recognition.onend = () => { 
        console.log('Fin de la grabación'); 
        if(resp == "깡충깡충"){
            status = "next"            
            step+=1            
            if (step < questions.qry.length ) next()
        }
        else if(isSimilar(resp,questions.qry[step].answer)){
            status = "Ok"            
            step+=1
            
            if (step < questions.qry.length ) next()
        }else{            
            status = "Error,청취..."
            recognition.start();
        }
    };
    
    recognition.start();
}
 


function readRes(text){ 
    status = "Stop"
    recognition.onend = () => { 
        read(text.split("|")[0],activateMicrophone)
    }
    recognition.stop();     
}


</script>  
<section class="p-4">
    <div>        
        <br>
        {#if step < 0 }
        <Question text={"배우다 Orientñol"}></Question>
        <br>
        <select bind:value={questions}  >
            {#each questionss as question}
                <option value={question}>
                    {question.title}  - {question.qry.length}, 💙 0 
                </option>
            {/each}
        </select>       
            <button on:click={start}> 배우다 - Aprender </button>            

        {:else if step <  questions.qry.length }    
            
                <Question text={questions.qry[step].query}></Question>
                <br>
                    <span class="text-info">
                        {status}
                    </span>         
                <br>
                You: <strong ><i >{resp}</i></strong>       
                <br>
                <div class="row">
                    <Responces readRes={readRes} answers={questions.qry[step].answers}></Responces>
                </div>    

                <div class="d-flex justify-content-between">
                              
                 
                    <button on:click={skip}>깡충깡충  | (kanchun kanchun) - saltar</button> 

                </div>
                
        {:else}            
                <Question text={"매우 좋은! | Exelente!"}></Question>
                <br>
                <button on:click={start}>다시 - Otra vez</button>            
                <button on:click={home}>시작 - Inicio</button>            
        {/if}
        
    </div>
</section>

<style>
    section{
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }
    button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
select {
  padding: 10px 80px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

option {
  font-size: 16px;
}
.reportar{
    cursor: pointer;
}
</style>