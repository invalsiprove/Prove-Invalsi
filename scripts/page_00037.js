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
	const questionIndex = 36;
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
function InitQuestion37()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 36;
    var weight = DecodeNumber('35bmylGB7AY=', 947, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('35bmylGB7AY=', 947, -1000, 1000),DecodeDecimal('Z+eJE6YmQ2E=', 947, -1000, 1000),DecodeDecimal('Z+eJE6YmQ2E=', 947, -1000, 1000));
    question.num = 37;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa la frase.  ";
    question.noChoice = false;
    choice = $('#idGap37_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('K6dzH7zNJL8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap37_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bf7bzbH8kng='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}


/* Code generated function */
function ClearQuestion37()
{
    ClearFillTheGap(37,0);
    ClearFillTheGap(37,1);

}






