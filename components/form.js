import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Type your word here</label>
        <input type="text" class="form-control" id="word_title" placeholder="Type your word here..." value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Type the definition here..." value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">Select a Language</label>
        <select class="form-control" id="language" required>
          <option value="">Select a Language</option>
          <option value="html">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Create Vocabulary Card</button>
    </form>
  `;
  renderToDom('#form-container', domString);
};

export default addWordForm;
