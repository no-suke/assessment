'use strict';
const assessmentButton = document.getElementById('assessment');
const usernameInput = document.getElementById('user-name');
const resultdivided = document.getElementById('result-divided');
const tweetdivided = document.getElementById('tweet-divided');
const answers = [
    '{username}のいいところは見た目',
    '{username}のいいところは声',
    '{username}のいいところは手',
    '{username}のいいところは足',
    '{username}のいいところは心'
]

function assessment(username){
    let sumOfCharCode = 0;
    for (let i =0;i<username.length;i++){
        sumOfCharCode = sumOfCharCode + username.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{username\}/g,username);

    return result;


}

assessmentButton.onclick = () => {
    while(resultdivided.firstChild){
        resultdivided.removeChild(resultdivided.firstChild);
    }

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultdivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(usernameInput.value);
    paragraph.innerText = result;
    resultdivided.appendChild(paragraph);
};
