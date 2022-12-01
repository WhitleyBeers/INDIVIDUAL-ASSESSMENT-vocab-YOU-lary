import { createWord, getWords, updateWord } from '../api/words';
import { showCards } from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-word')) {
      // console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const payload = {
        title: document.querySelector('#word_title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language').value,
        uid: user.uid,
        time_submitted: new Date().toLocaleString()
      };

      // console.warn(payload);
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showCards);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#word_title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language').value,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
