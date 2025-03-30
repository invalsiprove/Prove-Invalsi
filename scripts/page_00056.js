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
	const questionIndex = 55;
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
function InitQuestion56()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 55;
    var weight = DecodeNumber('xvtY4CnoFmo=', 726, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xvtY4CnoFmo=', 726, -1000, 1000),DecodeDecimal('b0wLOLymPWc=', 726, -1000, 1000),DecodeDecimal('b0wLOLymPWc=', 726, -1000, 1000));
    question.num = 56;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa la frase.  ";
    question.noChoice = false;
    choice = $('#idGap56_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+XeyheoBuAt2V4ugBGgc7PjvbRI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap56_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xiqhK+o5uk4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap56_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DCtCQ0+mD9+udFCTEhpvfp77/CY='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}


/* Code generated function */
function ClearQuestion56()
{
    ClearFillTheGap(56,0);
    ClearFillTheGap(56,1);
    ClearFillTheGap(56,2);

}






