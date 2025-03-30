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
	const questionIndex = 13;
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
function InitQuestion14()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 13;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('b5vDkaER6JA=', 452, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b5vDkaER6JA=', 452, -1000, 1000),DecodeDecimal('q2cnqFWq1lA=', 452, -1000, 1000),DecodeDecimal('q2cnqFWq1lA=', 452, -1000, 1000));
    question.num = 14;
    question.answers.length = 0;
    question.shortTextQuestion = "Anallizza il video e rispondi.  ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('J6PU5WQZMX8=', 452, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Cavallo Virtuoso Indossava degli Stivali Scuri e Lucenti";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('2iMSPXlsZ6g=', 454, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Cavallo Virtuoso Scivolò in Centro A Milano, Tutti Risero e Poi Applaudirono";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('z2G99o+cbCM=', 815, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Il Gatto della Storia si chiamava Juan";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('f++zh8M/yZ4=', 817, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Cavallo Virtuoso era Spagnolo";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('f++zh8M/yZ4=', 819, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Cavallo Virtuoso era Odiato da Tutti :(";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('SoeA9Z/Rb8U=', 821, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "Cavallo Virtuoso non Aveva Muscoli";
    question.answers.push(answer5);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);
    ClearBooleanChoice(questionIndex,5);

}






