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
	const questionIndex = 4;
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
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('8WjW62eMh/E=', 205, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8WjW62eMh/E=', 205, -1000, 1000),DecodeDecimal('Rcq5i4Bj6bA=', 205, -1000, 1000),DecodeDecimal('Rcq5i4Bj6bA=', 205, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "Seleziona la risposta corretta.  Che animale � Macachini Bananini?  ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('juahDO0B2tg=', 207, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Macaco (dovrebbe essere bianco ma questo � pi� bello)  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('juahDO0B2tg=', 209, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Scimmia Cappuccino  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DLCEvCoQQe4=', 211, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Black Jack ??  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}






