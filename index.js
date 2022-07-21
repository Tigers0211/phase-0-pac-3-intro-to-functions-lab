function shout(string) {
    return string.toUpperCase();
  }

function whisper(string){
    return string.toLowerCase()
}

function logShout(sentence){
    console.log(sentence.toUpperCase())
}

function logWhisper(sentence){
    console.log(sentence.toLowerCase())
}


function sayHiToHeadphonedRoommate(sentence){
    if (sentence === sentence.toLowerCase()){
        return "I can\'t hear you!" 
    } 
    if (sentence === sentence.toUpperCase()){
        return "YES INDEED!"
    }
    if (sentence === "Let's have dinner together!")
        return "I would love to!"
}