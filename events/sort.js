import { getAbc, getOldest, getNewest } from '../api/words';
import { showCards } from '../pages/vocabCards';

const sortCards = (user) => {
  document.querySelector('#sort').addEventListener('change', (e) => {
    if (e.target.value.includes('abc')) {
      getAbc(user.uid).then(showCards);
    } else if (e.target.value.includes('oldest')) {
      getOldest(user.uid).then(showCards);
    } else if (e.target.value.includes('newest')) {
      getNewest(user.uid).then(showCards);
    }
  });
};

export default sortCards;
