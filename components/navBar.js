import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand">
      <i class="fas fa-book-reader"></i> Vocab-YOU-lary
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" id="show-cards">View Vocab</a>
          <li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="create-card">Create an Entry</a>
          </li>
        </ul>
      </div>
      <span class="navbar-text">
        <div id="logout-button"></div>
      </span>
    </div>
  </nav>
  `;

  renderToDom('#navigation', domString);
};

export default navBar;
