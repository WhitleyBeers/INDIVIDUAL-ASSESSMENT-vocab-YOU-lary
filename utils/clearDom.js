const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#cards-container').innerHTML = '';
  document.querySelector('#sort').innerHTML = '';
};

export default clearDom;
