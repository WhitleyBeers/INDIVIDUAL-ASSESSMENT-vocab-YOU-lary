import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const btnString = '<button class="btn btn-success btn-md mb-4 id="filter">Filter Button</button><button class="btn btn-primary btn-md mb-4 id="filter2">Second Filter Button</button>';
  const domString = '<h3>You haven\'t created any vocabulary cards yet! Click \'Create an Entry\' above to get started.</h3>';
  renderToDom('#filter-buttons', btnString);
  renderToDom('#cards-container', domString);
};

const showCards = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-md mb-4 id="filter">Filter Button</button><button class="btn btn-primary btn-md mb-4 id="filter2">Second Filter Button</button>';
  renderToDom('#filter-buttons', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.definition}</h6>
        <hr>
        <i class="fas fa-edit btn btn-outline-info" id="edit-card-btn--${item.firebaseKey}"></i>
        <i class="fas fa-trash-alt btn btn-outline-danger" id="delete-card-btn--${item.firebaseKey}"></i>
        <hr>
        <h6 class="card-footer text-muted">${item.language_tech}</h6>
      </div>
    </div>
    `;
  });
  renderToDom('#cards-container', domString);
};

export { emptyCards, showCards };
