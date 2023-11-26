export function read(texto, onEndCallback, language = 'en') {
  console.log("Speaking");
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(texto);

  utterance.rate = 1;
  utterance.pitch = 1;

  let selectedVoice;
  if (language === 'es') {
      selectedVoice = synth.getVoices().find(voice => voice.lang === 'es-ES');
  } else {
    selectedVoice = synth.getVoices().find(voice => voice.lang === 'ko-KR');
  }
  
  utterance.voice = selectedVoice;
  
  utterance.onend = onEndCallback;
  
  synth.speak(utterance);
}


export function isSimilar(textoDicho, textoCorrecto) {
    if(textoDicho == textoCorrecto) return true;
    textoDicho = textoDicho.toLowerCase()
    textoCorrecto = textoCorrecto.toLowerCase()
    const cleanTextDicho = textoDicho.toLowerCase().replace(/[^\w\s]/g, ''); // Remover signos de puntuación
    const cleanTextCorrecto = textoCorrecto.toLowerCase().replace(/[^\w\s]/g, '');

    const wordsDicho = cleanTextDicho.split(/\s+/).filter(word => word.length > 0); // Convertir a array de palabras
    const wordsCorrecto = cleanTextCorrecto.split(/\s+/).filter(word => word.length > 0);

    const setDicho = new Set(wordsDicho);
    const setCorrecto = new Set(wordsCorrecto);

    const intersection = new Set([...setDicho].filter(x => setCorrecto.has(x)));
    const union = new Set([...setDicho, ...setCorrecto]);

    const similarity = intersection.size / union.size;

    return similarity >= 0.8;
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }