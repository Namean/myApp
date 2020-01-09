function makeWebRequest(method, url) {
    //    method = typeof method !== 'undefined' ? method : 'GET';
    console.log('making web request');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    setTimeout(() => {
        console.log("Data fetch successful!");
        data = JSON.parse(xhr.response);
        console.log(data);
        main();
    }, 1500);
}


function Note(title, body) {
    let d = new Date();
    this.title = title.trim();
    this.body = body.trim();
    this.timestamp = d.getTime();
}

function addData(arg) {
    console.log('adding data');
    data.push(arg);
}

let btn = document.querySelector('button');
btn.onclick();


function main() {
    let note = new Note(
        "Activate phone today",
        " Head down to T-mobile to get your phone on."
    );

    addData(note);
}



