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

    var listLeft52;
    var listLeftHtml52;
    var listRight52;
    var orderLeft52;
    var orderRight52;



$(document).ready(function ()
{
	const questionIndex = 52;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft52 = new CreateListLeft52();
    listLeftHtml52 = new CreateListLeftHtml52();
    listRight52 = new CreateListRight52();
    orderLeft52 = new ShuffleMatchingOrder(listLeft52.length);
    orderRight52 = new ShuffleMatchingOrder(listRight52.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft52, listLeftHtml52, listRight52, orderLeft52, orderRight52, "idDD52", textSelect, hideLeftDropdown);
    $('#matching52').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft52);
    var maxRightSize = GetMaxSizeRightColumn(listRight52);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft52, "idDD52", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft52, "idDD52", hideLeftDropdown);


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
function InitQuestion53()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 52;
    var weight = DecodeNumber('0zdEz738Uz8=', 1034, 0, 99999);
    var numOfAnswers = 14;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0zdEz738Uz8=', 1034, -1000, 1000),DecodeDecimal('96X//oHWJSo=', 1034, -1000, 1000),DecodeDecimal('96X//oHWJSo=', 1034, -1000, 1000));
    question.num = 53;
    question.answers.length = 0;
    question.shortTextQuestion = "Collega le parole tra di loro correttamente.";
    question.noChoice = false;
    for (i = 0; i < orderLeft52.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD52", i);
        choice[1] = GetSelextedItemRight("idDD52", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft52.length; j++)
        {
            if (listLeft52[j] === choice[0])
            {
                valuation.push(listRight52[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion53()
{
    ClearMatching("idDD52", 0);
    ClearMatching("idDD52", 1);
    ClearMatching("idDD52", 2);
    ClearMatching("idDD52", 3);
    ClearMatching("idDD52", 4);
    ClearMatching("idDD52", 5);
    ClearMatching("idDD52", 6);
    ClearMatching("idDD52", 7);
    ClearMatching("idDD52", 8);
    ClearMatching("idDD52", 9);
    ClearMatching("idDD52", 10);
    ClearMatching("idDD52", 11);
    ClearMatching("idDD52", 12);
    ClearMatching("idDD52", 13);

}


/* Code generated function */
function CreateListLeft52()
{
    this.length = 14;
    this[0] = unescape(DecodeString("w3+gR6MM7BNO7HCK86Wl7fx5Kno="));
    this[1] = unescape(DecodeString("PQzadaMkU0u4bjfOizw8z6q/vRo="));
    this[2] = unescape(DecodeString("IC+d3AyCL7+N69D/ch8wiQ=="));
    this[3] = unescape(DecodeString("VZVIKT5JBLyz/an/hCJDnFAZ+Cg="));
    this[4] = unescape(DecodeString("A9LlbGJhO8u/EUqFvCEvD4GBYnA="));
    this[5] = unescape(DecodeString("/SRmot3Z3tipIeljnceQqzdUUNgHqGjL"));
    this[6] = unescape(DecodeString("f+ht1SyAajBRz0afvEKs4XUzbijlY9LH"));
    this[7] = unescape(DecodeString("OZZncxuV4clQsAn4+PohYzxZCTA="));
    this[8] = unescape(DecodeString("7T/7xseVi1tG9Wr4iemWjQ=="));
    this[9] = unescape(DecodeString("+GsQ3ptq9K+rP2S/0DKeUgZPjtc="));
    this[10] = unescape(DecodeString("q008znQhyyqX1YSl"));
    this[11] = unescape(DecodeString("KsBxeoRwzuiATOu45UaaY0PcbTldNLkk"));
    this[12] = unescape(DecodeString("QFd2fTAHhrYdQd8soG36Eg=="));
    this[13] = unescape(DecodeString("w3+gR6MM7BNO7HCK86Wl7fx5Kno="));

}

/* Code generated function */
function CreateListRight52()
{
    this.length = 14;
    this[0] = unescape(DecodeString("rijhGIxCNpm0Fl5t"));
    this[1] = unescape(DecodeString("ETXSeyWpNV0="));
    this[2] = unescape(DecodeString("wdkiimBQVww="));
    this[3] = unescape(DecodeString("ZQbRRPrYY+E="));
    this[4] = unescape(DecodeString("GprsKDxDrj8="));
    this[5] = unescape(DecodeString("cmc1yEMWwP50CA8ErdhzAQ=="));
    this[6] = unescape(DecodeString("jZ95mSApn8M="));
    this[7] = unescape(DecodeString("4JAVWEePas0="));
    this[8] = unescape(DecodeString("fUHWKNIsCGeG2bfigU17aA=="));
    this[9] = unescape(DecodeString("gRyqTvJG7FkW6Mc3"));
    this[10] = unescape(DecodeString("mMYDQ8N3wW0="));
    this[11] = unescape(DecodeString("J6z8XJmQZWU="));
    this[12] = unescape(DecodeString("MMlqPbol1hJoOs5W"));
    this[13] = unescape(DecodeString("rijhGIxCNpm0Fl5t"));

}

/* Code generated function */
function CreateListLeftHtml52()
{
    this.length = 14;

}





