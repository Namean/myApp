data;

function makeWebRequest(method, url) {
//    method = typeof method !== 'undefined' ? method : 'GET';
    console.log('making web request');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    setTimeout(() => {
        console.log("Data fetch successful!");
        data = xhr.response;
    }, 500);
    
}

