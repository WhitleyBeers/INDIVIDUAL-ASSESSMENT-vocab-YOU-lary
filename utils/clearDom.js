const clearDom = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#cards-container').innerHTML = '';
};

export default clearDom;
