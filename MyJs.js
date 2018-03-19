var gamestatus = 1;
var dicednum = 0;
var newposition = 0;
var gameinprogress;
var gameinprogress2 = true;
var newposition2 = 0;
var player1 = $('<img src="images/player.png" id="player" width="100" height="100">')
var player2 = $('<img src="images/playertwo.png" id="playertwo" width="100" height="100">')
var playertwomove = $('<button type="button" class="move2 btn btn-primary">Move Player2</button>')
var snd = new Audio("https://www.soundjay.com/button/sounds/button-7.mp3");
var snd1 = new Audio("images/doyou.wav");
var snd2 = new Audio("images/TADA.wav");
var doyou = new Audio("https://www.soundjay.com/button/sounds/button-09.mp3");
var descend = new Audio("https://www.soundjay.com/button/sounds/button-2.mp3");
var ascend = new Audio("https://www.soundjay.com/button/sounds/button-14.mp3");
var rolls1=0;
var rolls2=0;




function result1() {
        var tbody11 = $('.player1dice')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2">Player One Rolled  ' + dicednum  +"!</td>")
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
         rolls1++;
         if(rolls1===16){
             $(".player1dice").empty();
             rolls1=0;
              tbody11.append(trow);
        tbody11.children().last().append(tcol2);
                      rolls1++;

         }
        return [trow, tcol2],rolls1;
    }
function victoryresult1() {
        var tbody11 = $('.player1dice')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2">Player One Won!!</td>')
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
        rolls1++;

        return [trow, tcol2],rolls1;
    }    
function defeatresult1() {
        var tbody11 = $('.player1dice')
        var trow = $('<tr class="trow"></tr>')
         var tcol2 = $('<td class="tcol2">Player One Lost!!</td>')
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
             rolls2++;
        
        return [trow, tcol2],rolls2;
    }

function result2() {
        var tbody11 = $('.player2dice')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2">Player Two Rolled  ' + dicednum  +"!</td>")
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
                         rolls2++;
       if(rolls2===16){
             $(".player2dice").empty();
           rolls2=0;
           tbody11.append(trow);
        tbody11.children().last().append(tcol2);
                    rolls2++;

           
           
         }
        return [trow, tcol2],rolls2;
    }

function victoryresult2() {
        var tbody11 = $('.player2dice')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2">Player Two Won!!</td>')
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
        return [trow, tcol2];
    }
function defeatresult2() {
        var tbody11 = $('.player2dice')
        var trow = $('<tr class="trow"></tr>')
        var tcol2 = $('<td class="tcol2">Player Two Lost!!</td>')
        tbody11.append(trow);
        tbody11.children().last().append(tcol2);
        return [trow, tcol2];
    }



var score1=0;
$('#score1').text(score1)
var score2=0;
$('#score2').text(score2)






 /////Initialize Game
$('.Start').on('click', function () { 
    snd.play();
    $('#player2').fadeIn(555);
    $('#player').fadeIn(555);
    switchy(newposition)
    switchy2(newposition2)
    $('#Statement').text('Game Started!')
    $('#player').css('transform', 'scaleX(-1)')
    $('#playertwo').css('transform', 'scaleX(-1)')
    $('#A1').prepend(player1)
    $('#A1').prepend(player2)
    return gameinprogress = true, gamestatus = 1, newposition = 0, newposition2 = 0;
});


/////Throw the dice
$('.dice').on('click', function () {
    if (gameinprogress === true && gameinprogress2 === true) {
        snd1.play();
        dicednum = getRandomInt(6);
        gameinprogress2 = false;
        if (newposition < 31 && gamestatus === 1) {
            result1()
            switchy(newposition)
            $('#player').fadeOut(555);
            $('#Statement').text('Player One rolled  ' + dicednum);
            return gamestatus = 0, newposition = (dicednum + newposition)

        } else if (newposition2 < 31 && gamestatus === 2) {
            result2()
            switchy2(newposition2)
            $('#playertwo').fadeOut(555);
            $('#Statement').text('Player two rolled  ' + dicednum);
            return gamestatus = 1, newposition2 = (dicednum + newposition2)


        } else return newposition = 0, newposition2 = 0;

    }
});

////// Move Players
function move() {
    if (gamestatus === 0 && gameinprogress === true && gameinprogress2 === false) {
        gameinprogress2 = true;
        doyou.play();
        $('#player').fadeIn(555);
        switchy(newposition)
        gamestatus = 2
    } else if (gamestatus === 1 && gameinprogress === true && gameinprogress2 === false) {
        gameinprogress2 = true;
        doyou.play();
        $('#playertwo').fadeIn(555);
        switchy2(newposition2)
        gamestatus = 1
    }

    if ((newposition >= 29 || newposition2 >= 29) && gameinprogress === true) {
        snd2.play()
        gameinprogress = false;
        if (newposition >= 29) {
            $('#Statement').text('Congratulations! Player One wins!');
            victoryresult1()
            defeatresult2()
            score1++;
            $('#score1').text(score1)
           $('.START').text('Restart')
        } else if (newposition2 >= 29){
            $('#Statement').text('Congratulations! Player two wins!');
         victoryresult2()
            defeatresult1()
            score2++;
            $('#score2').text(score2)
        $('.START').text('Restart')
}
        return score1,score2;
    }

}



$('.move').on('click', move);
$('.move2').on('click', move);




function Asendto22() {
    ascend.play()
    $('#player').css('transform', 'scaleX(1)')
    $('#A22').prepend(player1)
    return newposition = 21;
}

function Asendto29() {
    ascend.play()
    $('#A29').prepend(player1)
    return newposition = 28;
}

function Asendto8() {
    ascend.play()
    $('#player').css('transform', 'scaleX(1)')
    $('#A8').prepend(player1)
    return newposition = 7;
}

function Asendto26() {
    ascend.play()
    $('#A26').prepend(player1)
    return newposition = 25;
}

function Descendto7() {
    descend.play()
    $('#A7').prepend(player1)
    return newposition = 6;
}

function Descendto4() {
    descend.play()
    $('#A4').prepend(player1)
    return newposition = 3;
}

function Descendto1() {
    descend.play()
    $('#A1').prepend(player1)
    return newposition = 0;
}

function Descendto9() {
    descend.play()
    $('#A9').prepend(player1)
    return newposition = 8;
}

function Asend2to22() {
    ascend.play()
    $('#playertwo').css('transform', 'scaleX(1)')
    $('#A22').prepend(player2)
    return newposition2 = 21;
}

function Asend2to29() {
    ascend.play()
    $('#A29').prepend(player2)
    return newposition2 = 28;
}

function Asend2to8() {
    ascend.play()
    $('#playertwo').css('transform', 'scaleX(1)')
    $('#A8').prepend(player2)
    return newposition2 = 7;
}

function Asend2to26() {
    ascend.play()
    $('#A26').prepend(player2)
    return newposition2 = 25;
}

function Descend2to7() {
    descend.play()
    $('#A7').prepend(player2)

    return newposition2 = 6;
}

function Descend2to4() {
    descend.play()
    $('#A4').prepend(player2)
    return newposition2 = 3;
}

function Descend2to1() {
    descend.play()
    $('#A1').prepend(player2)
    return newposition2 = 0;
}

function Descend2to9() {
    descend.play()

    $('#A9').prepend(player2)
    return newposition2 = 8;
}

function getRandomInt(max) {
    return Math.floor((Math.random() * Math.floor(max)) + 1);
}


function ascendto22() {
    $('#A3').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Asendto22, 1000)
}

function ascendto29() {
    $('#A20').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Asendto29, 1000)
}

function ascendto8() {
    $('#A5').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Asendto8, 1000)
}

function ascendto26() {
    $('#A11').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Asendto26, 1000)
}

function descendto7() {
    $('#A19').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Descendto7, 1000)
}

function descendto4() {
    $('#A17').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Descendto4, 1000)
}

function descendto1() {
    $('#A27').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Descendto1, 1000)
}

function descendto9() {
    $('#A21').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
    setTimeout(Descendto9, 1000)
}

function ascend2to22() {
    $('#A3').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Asend2to22, 1000)
}

function ascend2to29() {
    $('#A20').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Asend2to29, 1000)
}

function ascend2to8() {
    $('#A5').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Asend2to8, 1000)
}

function ascend2to26() {
    $('#A11').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Asend2to26, 1000)
}

function descend2to7() {
    $('#A19').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Descend2to7, 1000)
}

function descend2to4() {
    $('#A17').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Descend2to4, 1000)
}

function descend2to1() {
    $('#A27').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Descend2to1, 1000)
}

function descend2to9() {
    $('#A21').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
    setTimeout(Descend2to9, 1000)
}


function switchy(newposition) {
    switch (newposition) {
        case 0:
            return $('#A1').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 1:
            return $('#A2').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 2:
            return ascendto22()
        case 3:
            return $('#A4').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 4:
            return ascendto8()
        case 5:
            return $('#A6').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 6:
            return $('#A7').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 7:
            return $('#A8').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 8:
            return $('#A9').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 9:
            return $('#A10').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 10:
            return ascendto26()
        case 11:
            return $('#A12').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 12:
            return $('#A13').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 13:
            return $('#A14').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 14:
            return $('#A15').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 15:
            return $('#A16').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 16:
            return descendto4()
        case 17:
            return $('#A18').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 18:
            return descendto7()
        case 19:
            return ascendto29()
        case 20:
            return descendto9()
        case 21:
            return $('#A22').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 22:
            return $('#A23').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 23:
            return $('#A24').prepend(player1), $('#player').css('transform', 'scaleX(1)')
        case 24:
            return $('#A25').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 25:
            return $('#A26').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 26:
            return descendto1()
        case 27:
            return $('#A28').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 28:
            return $('#A29').prepend(player1), $('#player').css('transform', 'scaleX(-1)')
        case 29:
            return $('#A30').prepend(player1), $('#player').css('transform', 'scaleX(-1)'), $('#Statement').text("Game is over!"), gamestatus = 0


        default:

            return $('#Statement').text("Game is over!"), $('#A30').prepend(player1), gamestatus = 0;

    }
}

function switchy2(newposition2) {
    switch (newposition2) {
        case 0:
            return $('#A1').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 1:
            return $('#A2').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 2:
            return ascend2to22()
        case 3:
            return $('#A4').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 4:
            return ascend2to8()
        case 5:
            return $('#A6').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 6:
            return $('#A7').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 7:
            return $('#A8').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 8:
            return $('#A9').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 9:
            return $('#A10').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 10:
            return ascend2to26()
        case 11:
            return $('#A12').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 12:
            return $('#A13').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 13:
            return $('#A14').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 14:
            return $('#A15').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 15:
            return $('#A16').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 16:
            return descend2to4()
        case 17:
            return $('#A18').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 18:
            return descend2to7()
        case 19:
            return ascend2to29()
        case 20:
            return descend2to9()
        case 21:
            return $('#A22').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 22:
            return $('#A23').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 23:
            return $('#A24').prepend(player2), $('#playertwo').css('transform', 'scaleX(1)')
        case 24:
            return $('#A25').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 25:
            return $('#A26').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 26:
            return descend2to1()
        case 27:
            return $('#A28').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 28:
            return $('#A29').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)')
        case 29:
            return $('#A30').prepend(player2), $('#playertwo').css('transform', 'scaleX(-1)'), $('#Statement').text("Game is over!"), gamestatus = 0


        default:

            return $('#Statement').text("Game is over!"), $('#A30').prepend(player2), gamestatus = 0;

    }
}
