//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 34;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 34;
    var weight = DecodeNumber('XKlpWjE4aSU=', 537, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XKlpWjE4aSU=', 537, -1000, 1000),DecodeDecimal('sjK6vJ3fS48=', 537, -1000, 1000),DecodeDecimal('sjK6vJ3fS48=', 537, -1000, 1000));
    question.num = 35;
    question.answers.length = 0;
    question.shortTextQuestion = "Scrivi la risposta corretta.  ";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearOpenAns(questionIndex);

}






