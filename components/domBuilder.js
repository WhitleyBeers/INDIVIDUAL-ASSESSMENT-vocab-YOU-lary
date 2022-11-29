import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-buttons"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="cards-container"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
