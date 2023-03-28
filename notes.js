const { default: chalk } = require('chalk')
const fs=require('fs')
//const getNotes=()=>{
//    return "Your notes..."
//}

const addNotes =(title,body)=>{
    const notes=loadNotes()
    //const dublicateNotes = notes.filter(function(note){
        //return note.title === title
    //})
    //const dublicateNotes = notes.filter((note)=> note.title===title)
    const dublicateNotes = notes.find((note)=> note.title===title) // stops when it finds the element.
    if(!dublicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note Added!')
    }
    else{
        console.log('Note title Taken!')
    }
    //console.log(notes)
}

const loadNotes =()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON=databuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes =(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNotes =(title)=>{
    const notes=loadNotes()
    const notestokeep = notes.filter(function(note){
        return note.title!==title
    })
    if(notestokeep.length < notes.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notestokeep)
    }
    else{
        console.log(chalk.red.inverse("No note found!"))
    }
}

const listNotes = ()=>{
    const notes=loadNotes()
    
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title)=>{
    const notes=loadNotes()
    const Noteforprint = notes.find((note)=> note.title===title)
    if(!Noteforprint){
        console.log(chalk.red.inverse("Note Not Found!"))
    }
    else{
        console.log(chalk.green.inverse(Noteforprint.title))
        console.log(Noteforprint.body)
    }
}
module.exports={
    //getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}