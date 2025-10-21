let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia); //in generate new trivia btn, newTrivia is the function that is run when click

let answerBtn = document.querySelector('#js-tweet').addEventListener('click', newAnswer);

let current = {
    question: "",
    answer: "",
}   //put into newTrivia and takes the info from there puts it into here so that we can put this into answer and have question and answer pairs

const endpoint= "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newTrivia() {  //getQuote on assignment, async tells it to operate separately
    //console.log("success");

    try {   //try to do this thing and if it works then do one thing but if not do something else
        const response = await fetch(endpoint); //tries to go get the question answer file and trigger response
        if (!response.ok) {//if the response is not ok we'll throw error
            throw Error(response.statusText);
        }
        const json = await response.json(); //if they do fetch something then wait for the command and when it resolves assign it to json
        console.log(json);
        displayTrivia(json["question"]);  //just takes the question part and runs it through displayTrivia
        current.question = json["question"];
        current.answer = json["answer"];
        console.log(current.question);
        console.log(current.answer);
    }   
    catch (err) {
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayTrivia(question) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector('#js-answer-text');
    questionText.textContent = question;    // take something out of json variable and put it into displayTrivia to update the button
    answerText.textContent = "" //resets the question so that answers aren't the same as past questions, when rerun, both the question and answer resets
}

function newAnswer() {
    //console.log("success == answer!");
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

newTrivia(); // calls the function and puts it on immediately when it loads