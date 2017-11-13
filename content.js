(function stackview() {
  const port = chrome.runtime.connect({ name: "port" });

  port.postMessage({url: window.location.origin});

  port.onMessage.addListener(function (msg) {

    if (document.getElementById('stackviewmodal')) {
      const existingModal = document.getElementById('stackviewmodal');
      if (existingModal.style.display === 'none') existingModal.style.display = 'flex';
      else existingModal.style.display = 'none';
      return;
    }

    const inner = $.parseHTML(msg.message)[46].outerHTML;
    var doc = document.implementation.createHTMLDocument("example");
    doc.documentElement.innerHTML = inner;
    const elements = doc.getElementsByClassName('stack-service-name-under');
    const logos = [...doc.getElementsByClassName('stack-service-logo')];

    const modalBox = document.createElement('div');
    modalBox.style.width = '25vw';
    modalBox.style.maxWidth = '25vw';
    modalBox.style.height = '100vh';
    modalBox.style.backgroundColor = 'white';
    modalBox.style.position = 'fixed';
    modalBox.style.top = '0vh';
    modalBox.style.left = '75vw';
    modalBox.style.borderLeft = '2px solid #1271ED';
    modalBox.style.zIndex = '611991';
    modalBox.id = 'stackviewmodal';
    modalBox.style.overflowY = 'scroll';
    modalBox.style.overflowX = 'hidden';
    modalBox.style.display = 'flex';
    modalBox.style.flexDirection = 'column';
    modalBox.style.alignItems = 'flex-start';
    modalBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    const header = document.createElement('div');
    header.innerHTML = '<img style="width: 120px; margin: 15px" src="https://s3-us-west-2.amazonaws.com/didr.io/images/header.png">';
    modalBox.appendChild(header);
    let counter = 0, nthChildCounter = 0;
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
      logos[counter].children[0].style.width = '32px';
      modalItem.innerHTML += logos[counter].innerHTML;
      modalItem.innerHTML += '<span style="width: 20px"></span>';
      modalItem.innerHTML += elements[i].innerHTML;
      modalItem.style.fontSize = '1.2em';
      modalItem.style.fontWeight = '800';
      modalItem.style.outline = 'none';
      modalItem.style.color = '#777';
      modalItem.style.textOverflow = 'ellipsis';
      modalItem.style.overflow = 'hidden';
      modalItem.style.display = 'flex';
      modalItem.style.flexShrink = '0';
      modalItem.style.justifyContent = 'flex-start';
      modalItem.style.alignItems = 'center';
      if (nthChildCounter % 2 === 0) modalItem.style.backgroundColor = '#EFEFEF';
      modalItem.style.padding = '0 15px';
      modalItem.style.width = '100%';
      modalItem.style.height = '50px';
      modalItem.style.textAlign = 'center';
      modalItem.style.cursor = 'pointer';
      modalItem.classList.add('modal-item');
      modalBox.append(modalItem);
      counter++;
      nthChildCounter++;
    }
    document.body.appendChild(modalBox);
  });
})();