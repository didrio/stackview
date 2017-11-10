document.addEventListener('keypress', event => {
  if (event.key === '`') {
    if (document.getElementById('willDance')) {
      const willExists = document.getElementById('willDance');
      if (willExists.style.display === 'none') willExists.style.display = 'block';
      else willExists.style.display = 'none';
    } else {
      const will = document.createElement('div');
      will.style.zIndex = '100008';
      will.innerHTML = '<img style="width: 100%" src="https://media.giphy.com/media/l4EpjkhCRjTH4LBjG/giphy.gif">';
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
  
  if (event.key === '!') {
    if (document.getElementById('fellowsDance')) {
      const fellowsExists = document.getElementById('fellowsDance');
      if (fellowsExists.style.display === 'none') fellowsExists.style.display = 'block';
        else fellowsExists.style.display = 'none';
    } else {
      const fellows = document.createElement('div');
      fellows.style.zIndex = '100002';
      fellows.innerHTML = '<img style="width: 100%" src="https://media.giphy.com/media/xUOxeRHnT4k38H3WEg/giphy.gif">';
      fellows.style.position = 'fixed';
      fellows.style.width = '100%';
      fellows.style.height = '100%';
      fellows.style.top = '0';
      fellows.style.left = '0';
      fellows.style.display = 'block';
      fellows.id = 'fellowsDance';
      document.body.appendChild(fellows);
    }
  }

  if (event.key === '@') {
    if (document.getElementById('schnoDance')) {
      const schnoExists = document.getElementById('schnoDance');
      if (schnoExists.style.display === 'none') schnoExists.style.display = 'block';
      else schnoExists.style.display = 'none';
    } else {
      const schno = document.createElement('div');
      schno.style.zIndex = '100002';
      schno.innerHTML = '<img style="width: 100%" src="https://media.giphy.com/media/l1KdbwaSjiGqkYzEA/giphy.gif">';
      schno.style.position = 'fixed';
      schno.style.width = '100%';
      schno.style.height = '100%';
      schno.style.top = '0';
      schno.style.left = '0';
      schno.style.display = 'block';
      schno.id = 'schnoDance';
      document.body.appendChild(schno);
    }
  }
});

const port = chrome.runtime.connect({name: "port"});

port.postMessage({url: window.location.origin});

port.onMessage.addListener(function(msg) {

  if (document.getElementById('sweetestteriyaki')) {
    const existingModal = document.getElementById('sweetestteriyaki');
    const existingBackModal = document.getElementById('sweeterteriyaki');
    const existingLogo = document.getElementById('teriyakilogo');
    if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
    else existingModal.style.display = 'none';
    if (existingBackModal.style.display === 'none') existingBackModal.style.display = 'flex';
    else existingBackModal.style.display = 'none';
    if (existingLogo.style.display === 'none') existingLogo.style.display = 'flex';
    else existingLogo.style.display = 'none';
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
  modalBox.style.top = '16.5vh';
  modalBox.style.left = '25vw';
  modalBox.style.padding = '20px';
  modalBox.style.borderRadius = '10px';
  modalBox.style.border = '2px solid black';
  modalBox.style.zIndex = '100001';
  modalBox.id = 'sweetestteriyaki';
  modalBox.style.overflowY = 'scroll';
  modalBox.style.display = 'flex';
  modalBox.style.flexWrap = 'wrap';
  modalBox.style.justifyContent = 'space-around';
  let counter = 0;
  for (let i = 1; i < elements.length; i += 2) {
    let link = 'https://stackshare.io/';
    if (elements[i].href) {
      let route = String(elements[i].href.match(/(io\/.+)|(com\/.+)/gi));
      if (route.includes('io\/')) link += route.slice(3);
      else if (route.includes('com\/')) link += route.slice(4);
    } else link += elements[i].innerHTML.split(' ').join('-');
    const modalItem = document.createElement('a');
    modalItem.href = link;
    modalItem.setAttribute("target", "_blank");
    logos[counter].children[0].style.width = '100px';
    modalItem.innerHTML += logos[counter].innerHTML + '<br>';
    modalItem.innerHTML += elements[i].innerHTML;
    modalItem.style.fontSize = '1.2em';
    modalItem.style.fontWeight = '800';
    modalItem.style.outline = 'none';
    modalItem.style.color = '#777';
    modalItem.style.textOverflow = 'ellipsis';
    modalItem.style.overflow = 'hidden';
    modalItem.style.display = 'flex';
    modalItem.style.flexDirection = 'column';
    modalItem.style.justifyContent = 'center';
    modalItem.style.alignItems = 'center';
    modalItem.style.borderRadius = '5px';
    modalItem.style.backgroundColor = '#EFEFEF';
    modalItem.style.margin = '10px';
    modalItem.style.padding = '13px';
    modalItem.style.maxWidth = '127px';
    modalItem.style.maxHeight = '30%';
    modalItem.style.textAlign = 'center';
    modalItem.style.cursor = 'pointer';
    modalItem.classList.add('modal-item');
    modalBox.append(modalItem);
    counter++;
  }
  const logo = document.createElement('div');
  logo.innerHTML = '<img style="border-right: 2px solid black; border-left: 2px solid black; border-top: 2px solid black; border-top-left-radius: 25px; border-top-right-radius: 25px" src="https://i.imgur.com/Slex0th.png">';
  logo.style.zIndex = '100002';
  logo.style.top = 'calc(16.5vh - 120px)';
  logo.style.left = 'calc(50vw - 250px)';
  logo.style.position = 'fixed';
  logo.id = 'teriyakilogo';
  modal.appendChild(modalBox);
  document.body.appendChild(modal);
  document.body.appendChild(logo);
});