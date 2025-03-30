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
	const questionIndex = 29;
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
function InitQuestion30()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 29;
    var weight = DecodeNumber('VDv1f86ttqE=', 825, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VDv1f86ttqE=', 825, -1000, 1000),DecodeDecimal('T45nlXmJiF8=', 825, -1000, 1000),DecodeDecimal('T45nlXmJiF8=', 825, -1000, 1000));
    question.num = 30;
    question.answers.length = 0;
    question.shortTextQuestion = "Scrivi la risposta corretta.  ";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearOpenAns(questionIndex);

}






