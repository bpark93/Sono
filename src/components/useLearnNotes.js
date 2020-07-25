import {AsyncStorage} from 'react-native'

const NOTES = 'notes_list'
const endOfNoteIndicator = '%$%'

const addNote = async (id, content, timestamp) => {
    try {
        let notesList = await getNotes(id)
        if (notesList===[]){
            // Start a new array
            const newList = {
                time: Math.floor(timestamp),
                note: content
            }
            const newListString = JSON.stringify(newList)
            await AsyncStorage.setItem(`learn_notes_${id}`, newListString.concat(endOfNoteIndicator))
        } else{
            const newNote = {
                time: Math.floor(timestamp),
                note: content
            }
            notesList.unshift(JSON.stringify(newNote));
            const newListString = notesList.join(endOfNoteIndicator);
            await AsyncStorage.setItem(`learn_notes_${id}`, newListString);
        }
    }
    catch (error){
        console.log(error)
    }
}

const deleteNote = async (id, note) => {
    try{
        let notesList = await getNotes(id)
        const noteString = JSON.stringify(note)
        const filteredNoteArray = notesList.filter(item => item!=noteString)
        const newListString = filteredNoteArray.join(endOfNoteIndicator);
        await AsyncStorage.setItem(`learn_notes_${id}`, newListString)
    }
    catch(error){
        console.log(error)
    }
}

const editNote = async (id, note, time, original) => {
    try{
        console.log('hi')
        let notesList = await getNotes(id)
        const originalString = JSON.stringify(original)
        console.log(originalString)
        const newString = JSON.stringify({time:time, note:note})
        console.log(newString)
        const filteredNoteArray = notesList.map(item => {
            if (item===originalString){
                return newString
            }
            else {return item}
        })
        console.log(filteredNoteArray)
        const newListString = filteredNoteArray.join(endOfNoteIndicator);
        await AsyncStorage.setItem(`learn_notes_${id}`, newListString)
    }
    catch(error){
        console.log(error)
    }
}

const getNotes = async (id) => {
    try {
        const notesList = await AsyncStorage.getItem(`learn_notes_${id}`)
        if (notesList===null){
            return [];
        }
        else {
            const notesArray = notesList.split(endOfNoteIndicator)
            return notesArray;
        }
    }
    catch(error){
        console.log(error)
    }
}

export {addNote, deleteNote, editNote, getNotes};
