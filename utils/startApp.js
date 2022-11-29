import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { emptyCards } from '../pages/vocabCards';

const startApp = (user) => { // add user in parameters!!
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // getBooks(user.uid).then(showBooks);
  emptyCards();
};

export default startApp;
