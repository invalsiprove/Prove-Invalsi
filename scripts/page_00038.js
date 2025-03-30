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
	const questionIndex = 37;
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
function InitQuestion38()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 37;
    var weight = DecodeNumber('dgqdSfbITwQ=', 675, 0, 99999);
    var numOfAnswers = 7;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oOvygeRobfU=', 511, -1000, 1000),DecodeDecimal('Yw5Vxy2TOzs=', 511, -1000, 1000),DecodeDecimal('Yw5Vxy2TOzs=', 511, -1000, 1000));
    question.num = 38;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa la frase.  ";
    question.noChoice = false;
    choice = $('#idGap38_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/flaxAwR5EK0qOl2kRC6lBoyOPc+u9GX'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap38_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lILBm+VRpTbxGSAo'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap38_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0EllmSaTkhY='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap38_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZhV5cf4pZJU='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap38_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('971AB2BTC/U='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap38_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oDh2KjjijkA='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap38_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WhEhC00bwZanUKsnZvl7oQ=='));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    return question;

}


/* Code generated function */
function ClearQuestion38()
{
    ClearFillTheGap(38,0);
    ClearFillTheGap(38,1);
    ClearFillTheGap(38,2);
    ClearFillTheGap(38,3);
    ClearFillTheGap(38,4);
    ClearFillTheGap(38,5);
    ClearFillTheGap(38,6);

}






