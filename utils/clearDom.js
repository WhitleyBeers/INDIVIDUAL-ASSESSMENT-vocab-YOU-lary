const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#cards-container').innerHTML = '';
};

export default clearDom;
