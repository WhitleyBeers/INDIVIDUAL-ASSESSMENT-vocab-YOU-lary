# Vocab-YOU-lary  [![Netlify Status](https://api.netlify.com/api/v1/badges/fa1de939-5560-473d-93b6-10ae6a4fd2be/deploy-status)](https://app.netlify.com/sites/wb-vocab-you-lary/deploys)

Vocab-YOU-lary can help you keep track of the new terms you're learning along with their definitions and the languages they belong to.

[View App](https://wb-vocab-you-lary.netlify.app/#)

## About the User
- The ideal user for this application is a student
- They are learning a LOT of new information in their bootcamp and are having a hard time remembering the terms they'll need to utilize on a day-to-day basis
- The problem this app solves for them is it allows them to create vocabulary cards that include the terms, their definitions, and the languages they belong to, and can utilize these cards for referencing and studying

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Persistent, user-specific data
- Sign in and out using Google Authentication
- The user can create new vocabulary cards and enter their terms and definitions, and choose a lanuage from a drop-down menu
- The user can either edit or delete their vocabulary cards using buttons that appear at the bottom of their cards
- The user can filter their cards by the language
- The user can sort their vocabulary cards alphabetically, oldest, or newest

## Video Walkthrough of Vocab-YOU-lary <!-- A loom link is sufficient -->
[https://www.loom.com/share/829b90d831ea441ba2db6bea724af210](https://www.loom.com/share/341d36fe2cb54aa180a3fd193a30f69d)

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://wb-vocab-you-lary.netlify.app/#)
- [Wireframes](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP)
- [Project Board (Using GitHub milestones and issues)](https://github.com/WhitleyBeers/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary/issues?q=is%3Aissue+is%3Aclosed)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
```
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
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="600" alt="Sign in" src="https://user-images.githubusercontent.com/112125700/205161979-4668b875-c56d-4005-9e94-f3254fb19a68.png">
<img width="600" alt="Navbar" src="https://user-images.githubusercontent.com/112125700/205162791-32d88073-da2d-49c5-ac24-2f183c37404d.png">

## Contributors
- [Whitley Beers](https://github.com/WhitleyBeers)
