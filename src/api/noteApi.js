const dummyNotes = [{
  id: 1,
  title: 'First Note',
  content: 'First Note Content'
}];

const dummyNoteApi = {
  getNotes() {
    return Promise.resolve(dummyNotes);
  },
  getNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = dummyNotes.find(note => note.id.toString() === id);
        console.log(note)

        if (!note) {
          return reject(new Error('Note not found'));
        }

        return resolve(note);
      }, 200)
    })
  },
  saveNote(note) {
    return new Promise(resolve => {
      setTimeout(() => {
        const noteIndex = dummyNotes.findIndex(nextNote => nextNote.id === note.id);

        if (noteIndex > -1) {
          dummyNotes.splice(noteIndex, 1, note);
          return resolve(note);
        }
        const noteToSave = {
          ...note,
          id: new Date().getMilliseconds(),
        };
        dummyNotes.push(noteToSave);
        return resolve(noteToSave);
      }, 200)
    })
  }
};

export default dummyNoteApi;
