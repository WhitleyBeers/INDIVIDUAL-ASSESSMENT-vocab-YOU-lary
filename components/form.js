import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-10">
      <div class="form-group col-sm-6">
        <label for="word_title">Add a word</label>
        <input type="text" class="form-control" id="word_title" placeholder="Type your word here..." value="${obj.title || ''}" required>
      </div>
      <div class="form-group col-sm-6">
        <label for="definition">Define your word</label>
        <input type="text" class="form-control" id="definition" placeholder="Type the definition here..." value="${obj.definition || ''}" required></input>
      </div>
      <div class="form-group col-sm-6">
        <label for="language">Select a Language</label>
        <select class="form-control" id="language" required>
          <option value="">Select a Language</option>
          <option value="HTML" ${obj.language_tech === 'HTML' ? 'selected' : ''}>HTML</option>
          <option value="CSS" ${obj.language_tech === 'CSS' ? 'selected' : ''}>CSS</option>
          <option value="JavaScript" ${obj.language_tech === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-word">Submit</button>
    </form>
  `;
  renderToDom('#form-container', domString);
};

export default addWordForm;
