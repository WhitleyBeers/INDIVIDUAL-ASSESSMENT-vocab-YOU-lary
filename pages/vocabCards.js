import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const btnString = '<div class="btn-group" role="group" aria-label="Basic mixed styles example"><button type="button" class="btn btn-warning">Show All</button><button type="button" class="btn btn-success">HTML</button><button type="button" class="btn btn-primary">CSS</button><button type="button" class="btn btn-danger">JavaScript</button></div>';
  const domString = '<h3>You haven\'t created any vocabulary cards yet! Click \'Create an Entry\' above to get started.</h3>';
  renderToDom('#filter-buttons', btnString);
  renderToDom('#cards-container', domString);
};

const showCards = (array) => {
  clearDom();
  const btnString = '<div class="btn-group" role="group" aria-label="Basic mixed styles example"><button type="button" id="show-all" class="btn btn-warning">Show All</button><button type="button" id="show-html" class="btn btn-success">HTML</button><button type="button" id="show-css" class="btn btn-primary">CSS</button><button type="button" id="show-javascript" class="btn btn-danger">JavaScript</button></div>';
  renderToDom('#filter-buttons', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 22rem;">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
        <hr>
        <h5 class="text-muted">${item.language_tech}</h5>
        <hr>
        <h6 class="card-subtitle mb-2">${item.definition}</h6>
        <div class="card-footer">
          <button class="btn btn-outline-success" id="edit-card-btn--${item.firebaseKey}">
            <i class="fas fa-edit"></i>
          </button>
        <button class="btn btn-outline-danger" id="delete-card-btn--${item.firebaseKey}">
          <i class="fas fa-trash-alt"></i>
        </button>
        </div>
      </div>
    </div>
    `;
  });
  renderToDom('#cards-container', domString);
};

export { emptyCards, showCards };
