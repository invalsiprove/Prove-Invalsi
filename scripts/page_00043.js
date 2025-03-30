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
	const questionIndex = 42;
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
function InitQuestion43()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 42;
    var weight = DecodeNumber('De6hgI1eOLQ=', 1223, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('De6hgI1eOLQ=', 1223, -1000, 1000),DecodeDecimal('K2/skrx7e8s=', 1223, -1000, 1000),DecodeDecimal('K2/skrx7e8s=', 1223, -1000, 1000));
    question.num = 43;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa la frase.  ";
    question.noChoice = false;
    choice = $('#idGap43_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(3);
    valuation[0] = unescape(DecodeString('Z1ZwxWz96Iw='));
    valuation[1] = unescape(DecodeString('wlCHBzTWK/A='));
    valuation[2] = unescape(DecodeString('8arb4CiU2UdPDSk3I8M/9Q=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}


/* Code generated function */
function ClearQuestion43()
{
    ClearFillTheGap(43,0);

}






