const $loginBtn = document.querySelector('.login-btn');
$loginBtn.addEventListener('click', validation);

function validation() {
    const id = document.querySelector('#user_id').value;
    const pw = document.querySelector('#user_pw').value;

    if (id === "" || pw === "") {
        alert('아이디와 비밀번호를 입력해주세요.')
        return ;
    }

    const params = {
        user_id: id,
        user_pw: pw
    };

    // Post
    const $form = document.createElement('form');
    const url = '../../php/login/Login.php'

    $form.setAttribute('method', 'post');
    $form.setAttribute('action', url);
    document.charset = 'utf-8';

    for (let key in params) {
        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        $form.appendChild(hiddenField);
    }

    document.body.appendChild($form);
    $form.submit();
}