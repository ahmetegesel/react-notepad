import { get as getBase, post as postBase } from './base'

const dummyNotes = [{
  id: 1,
  title: 'First Note',
  content: 'First Note Content'
}];

const BASE_URL = process.env.REACT_APP_NOTE_API_URL;

const get = getBase(BASE_URL);
const post = postBase(BASE_URL);

export const signin = (username, password) => {
  return post('/auth/signin', { body: { username, password } });
}
export const signup = (userData) => {
  return post('/auth/signup', { body: userData });
}

const dummyNoteApi = {
  getNotes() {
    return Promise.resolve(dummyNotes);
  },
  getNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = dummyNotes.find(note => note.id.toString() === id);

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
        const noteIndex = note.id && dummyNotes.findIndex(nextNote => nextNote.id.toString() === note.id.toString());

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
