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
	const questionIndex = 51;
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
function InitQuestion52()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 51;
    var weight = DecodeNumber('AsWSzZRCYRI=', 1024, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AsWSzZRCYRI=', 1024, -1000, 1000),DecodeDecimal('zBFd19tAsrI=', 1024, -1000, 1000),DecodeDecimal('zBFd19tAsrI=', 1024, -1000, 1000));
    question.num = 52;
    question.answers.length = 0;
    question.shortTextQuestion = "Qual'è/Quali sono i tuoi preferiti?";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearOpenAns(questionIndex);

}






