import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showCards } from '../pages/vocabCards';
import { getWords } from '../api/words';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import sortCards from '../events/sort';

const startApp = (user) => { // add user in parameters!!
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getWords(user.uid).then(showCards);
  sortCards(user);
};

export default startApp;
