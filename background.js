chrome.runtime.onConnect.addListener(function(port) {

  port.onMessage.addListener(function(msg) {
    const parsed = String(msg.url.match(/(\/\/www\.\w+\.)|(\/\/\w+\.)/gi)).replace('www\.', '').slice(2, -1);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://stackshare.io/${parsed}/${parsed}`);
    xhr.onreadystatechange = handleReady;
    xhr.send();
    function handleReady() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chrome.browserAction.onClicked.addListener(tab => {
          port.postMessage({message: xhr.responseText});
        });
      }
    }
  });
});
