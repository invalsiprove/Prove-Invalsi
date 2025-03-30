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
	const questionIndex = 25;
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
function InitQuestion26()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 25;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('R8DlVe1UvnI=', 841, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R8DlVe1UvnI=', 841, -1000, 1000),DecodeDecimal('UlbQuBpmCQ0=', 841, -1000, 1000),DecodeDecimal('UlbQuBpmCQ0=', 841, -1000, 1000));
    question.num = 26;
    question.answers.length = 0;
    question.shortTextQuestion = "Seleziona Vero o Falso.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('R8DlVe1UvnI=', 841, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "HOTSPOT, PLS BRO... I NEED HOTSPOT!";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('OAPOP1tBHz4=', 843, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "FOOD BRO, FOOOD, PLS BRO FOOD!";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('diEwAM5ABWU=', 845, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "NOOO NIKOTINE, GIVE ME NIKOTINE, I NEED NIKOTINEE!";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('lc+0z/boRYY=', 847, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "NOOOO, I NEED ALCOL, BRO, GIVE ME ALCOL NOW, PLS!";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('C4+LWuVrtNE=', 849, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "CAFFEINE, GIVE ME COFFEINA, PLS!";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('C4+LWuVrtNE=', 851, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "BROO, I NEED CHOCCOLATE, PLS BRO, CHOCCOLATE, GIVE ME CHOCCOLATE!";
    question.answers.push(answer5);
    choice = GetBooleanChoice(questionIndex,6);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 6);
    valuation = DecodeNumber('0iX3MICKTtc=', 853, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer(choice, valuation, 1, 0, '');
    answer6.shortTextAnswer = "NOOO BRO, PLS, GIVE ME DRUGS, I NEED DRUGG!";
    question.answers.push(answer6);
    choice = GetBooleanChoice(questionIndex,7);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 7);
    valuation = DecodeNumber('pFQe4aFJbD8=', 855, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer7 = new Answer(choice, valuation, 1, 0, '');
    answer7.shortTextAnswer = "BRO I NEED VAPE, PLS GIVE ME VAPE, I NEED SMOKE, PLS BRO!";
    question.answers.push(answer7);
    choice = GetBooleanChoice(questionIndex,8);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 8);
    valuation = DecodeNumber('lqwyy53Fyko=', 857, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer8 = new Answer(choice, valuation, 1, 0, '');
    answer8.shortTextAnswer = "BROO, PLS I NEED FORTNITE, PLS BRO, LEAVE ME PLAY FORTNITE!";
    question.answers.push(answer8);
    choice = GetBooleanChoice(questionIndex,9);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 9);
    valuation = DecodeNumber('H7V4+3KKoIQ=', 859, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer9 = new Answer(choice, valuation, 1, 0, '');
    answer9.shortTextAnswer = "I NEED HOMOSEXUAL! BRO I NEED OMOSEXUAL! PLS";
    question.answers.push(answer9);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);
    ClearBooleanChoice(questionIndex,5);
    ClearBooleanChoice(questionIndex,6);
    ClearBooleanChoice(questionIndex,7);
    ClearBooleanChoice(questionIndex,8);
    ClearBooleanChoice(questionIndex,9);

}






