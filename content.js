document.addEventListener('keypress', event => {
  if (event.key === '`') {
    if (document.getElementById('willDance')) {
      const willExists = document.getElementById('willDance');
      if (willExists.style.display === 'none') willExists.style.display = 'block';
      else willExists.style.display = 'none';
    } else {
      const will = document.createElement('div');
      will.style.zIndex = '100002';
      will.innerHTML = '<img style="width: 100%" src="https://media.giphy.com/media/l4EpjkhCRjTH4LBjG/giphy.gif">ksjdhfkjdsg';
      will.style.position = 'fixed';
      will.style.width = '100%';
      will.style.height = '100%';
      will.style.top = '0';
      will.style.left = '0';
      will.style.display = 'block';
      will.id = 'willDance';
      document.body.appendChild(will);
    }
  }
});

const port = chrome.runtime.connect({name: "port"});

port.postMessage({url: window.location.origin});

port.onMessage.addListener(function(msg) {

  if (document.getElementById('sweetestteriyaki')) {
    const existingModal = document.getElementById('sweetestteriyaki');
    const existingBackModal = document.getElementById('sweeterteriyaki');
    if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
    else existingModal.style.display = 'none';
    if (existingBackModal.style.display === 'none') existingBackModal.style.display = 'flex';
    else existingBackModal.style.display = 'none';
    return;
  }

  const inner = $.parseHTML(msg.message)[46].outerHTML;
  var doc = document.implementation.createHTMLDocument("example");
  doc.documentElement.innerHTML = inner;
  const elements = doc.getElementsByClassName('stack-service-name-under');
  const logos = [...doc.getElementsByClassName('stack-service-logo')];

  const modal = document.createElement('div');
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.zIndex = '100000';
  modal.style.display = 'block';
  modal.id = 'sweeterteriyaki';
  const modalBox = document.createElement('div');
  modalBox.style.width = '50vw';
  modalBox.style.height = '75vh';
  modalBox.style.backgroundColor = 'white';
  modalBox.style.position = 'fixed';
  modalBox.style.top = '12.5vh';
  modalBox.style.left = '25vw';
  modalBox.style.padding = '20px';
  modalBox.style.borderRadius = '10px';
  modalBox.style.zIndex = '100001';
  modalBox.id = 'sweetestteriyaki';
  modalBox.style.overflowY = 'scroll';
  modalBox.style.display = 'flex';
  modalBox.style.flexWrap = 'wrap';
  modalBox.style.justifyContent = 'space-around';
  let counter = 0;
  for (let i = 0; i < elements.length; i++) {
    if (i % 2 !== 0) {
      const modalItem = document.createElement('div');
      logos[counter].children[0].style.width = '100px';
      modalItem.innerHTML += logos[counter].innerHTML + '<br>';
      modalItem.innerHTML += elements[i].innerHTML;
      modalItem.style.fontSize = '1.2em';
      modalItem.style.display = 'flex';
      modalItem.style.flexDirection = 'column';
      modalItem.style.justifyContent = 'center';
      modalItem.style.alignItems = 'center';
      modalItem.style.borderRadius = '5px';
      modalItem.style.backgroundColor = '#EFEFEF';
      modalItem.style.margin = '10px';
      modalItem.style.padding = '13px';
      modalItem.style.maxWidth = '127px';
      modalItem.style.textAlign = 'center';
      modalBox.append(modalItem);
      counter++;
    };
  }
  modal.appendChild(modalBox);
  document.body.appendChild(modal);
});
