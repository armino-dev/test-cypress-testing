const eraseDiv = () => {
  const myDiv = $('#toBeErased');
  myDiv.children('p').fadeOut(300, () => {
    myDiv.fadeOut(600, () => {
      myDiv.remove();
    });
  })
}

const addMyDiv = () => {
  const myDiv = $(`<div id="toBeErased">
    <p>This div and all its content will be erased. <br />Click the button bellow to erase it.</p>
  </div>`);
  if (!document.querySelectorAll('#toBeErased').length) {
    $('div.container').append(myDiv);
  }
};


$(document).ready(() => {
  addMyDiv();
  $('button#btnEraseDiv').on('click', () => {
    eraseDiv();
  });

});
