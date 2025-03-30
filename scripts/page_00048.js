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
	const questionIndex = 47;
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
function InitQuestion48()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 47;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('wMsEu1qXacY=', 988, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wMsEu1qXacY=', 988, -1000, 1000),DecodeDecimal('fZJXzkzkC9Y=', 988, -1000, 1000),DecodeDecimal('fZJXzkzkC9Y=', 988, -1000, 1000));
    question.num = 48;
    question.answers.length = 0;
    question.shortTextQuestion = "Anallizza il video e rispondi.  ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('wMsEu1qXacY=', 988, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Il cactus aveva la testa da Ippopotamo e aveva dei sandali giganti";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('wMsEu1qXacY=', 990, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Lui cammina solo quando il vento scuote";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('JBb2dLNKb6Y=', 992, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Il Video è ambientato sotto il sole cocente nel deserto";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('1FvIv13XhuE=', 994, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Lui camminava anche se sentiva dolore";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('yHyRvF1+2SY=', 832, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Il cesso della storia si chiama Osvaldo";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('1XOaTuf5pkI=', 834, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "Lui accetta il suo Destino";
    question.answers.push(answer5);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);
    ClearBooleanChoice(questionIndex,5);

}






