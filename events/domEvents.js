import { getWords, deleteWord, getSingleWord } from '../api/words';
import addWordForm from '../components/form';
import { emptyCards, showCards } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#cards-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showCards);
        });
      }
    }

    // TODO: CLICK EVENT EDITING/UPDATING A CARD
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-card')) {
      addWordForm();
    }
    if (e.target.id.includes('show-cards')) {
      getWords(user.uid).then((wordArray) => {
        if (wordArray.length) {
          showCards(wordArray);
        } else {
          emptyCards();
        }
      });
    }
  });
};

export default domEvents;
