/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/bPTEBPfI
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';


    game.load.spritesheet('player', 'assets/sprites/reginanuova_fin.png', 62.9, 90);
    game.load.spritesheet('fen_vola', 'assets/sprites/fen_vola.png', 62, 70);
    game.load.spritesheet('fen_salta', 'assets/sprites/fenicottero_salta.png', 62, 70);
    game.load.image('platform', 'assets/sprites/platform.png');
    game.load.spritesheet('fungo', 'assets/sprites/fungo movimento.png', 100, 80);
    game.load.image('platform', 'assets/sprites/platform.png');
    game.load.image('bunkersfondo', 'assets/sprites/bunkersfondo.png');
    game.load.image('siepe_sfondo', 'assets/sprites/siepesfondo.png');
    game.load.image('platform2', 'assets/sprites/piattaforma_bosco.png');
    game.load.image('siepe', 'assets/sprites/siepeverde-1.png');
    game.load.image('box', 'assets/sprites/poggiapiedi.png');
    game.load.image('muro', 'assets/sprites/muromattoni.png');
    game.load.image('catena', 'assets/sprites/catena.png');
    game.load.image('copertina', 'assets/render/copertina.png');
    game.load.image('bunkersx', 'assets/sprites/bunkersx.png');
    game.load.image('bunkerc', 'assets/sprites/bunkerc.png');
    game.load.image('bunkerdx', 'assets/sprites/bunkerdx.png');
    game.load.image('bunkercsx', 'assets/sprites/bunkercsx.png');
    game.load.image('bunkercdx', 'assets/sprites/bunkercdx.png');
    game.load.image('tunnel', 'assets/sprites/tunnel.png');
    game.load.image('tunnelx2', 'assets/sprites/tunnelx2.png');
    game.load.image('tunnelx3', 'assets/sprites/tunnelx3.png');
    game.load.image('roseto', 'assets/sprites/roseto.png');
    game.load.image('roseto2', 'assets/sprites/roseto2.png');
    game.load.image('roseto3', 'assets/sprites/roseto3.png');
    game.load.image('rosetoalto', 'assets/sprites/rosetoalto.png');
    game.load.image('drink', 'assets/sprites/drinkme.png');
    game.load.image('jumpon', 'assets/sprites/jumpon.png');
    game.load.image('danger', 'assets/sprites/danger.png');
    game.load.image('jump', 'assets/sprites/jumpingmushroom.png');
    game.load.image('pavimento', 'assets/sprites/pavimentorifatto2.png');
    game.load.image('terreno1', 'assets/sprites/terreno1.png');
    game.load.image('terreno2', 'assets/sprites/terreno2.png');
    game.load.image('pzgrosso', 'assets/sprites/pozionearancione.png');
    game.load.image('pzpiccolo', 'assets/sprites/pozioneblu.png');
    game.load.image('fen_grosso', 'assets/sprites/fenicottero_rosa.png');
    game.load.image('home', 'assets/sprites/icona_home2.png');
    game.load.image('muro_castello', 'assets/sprites/muro_castello.png');
    game.load.image('arazzo', 'assets/sprites/arazzotutorial.png');
    game.load.image('gabbia', 'assets/sprites/gabbia.png');
    game.load.image('alberi', 'assets/sprites/alberi.png');
    game.load.spritesheet('alberogatto', 'assets/sprites/albero3.png',664, 791);
    game.load.image('scrittaflamingo', 'assets/sprites/scrittaflamingo.png');
    game.load.image('creditsnoi', 'assets/render/creditsnoi.png');
    game.load.image('scena1', 'assets/render/SCENA1.png');
    game.load.image('scena3', 'assets/render/SCENA3.png');
    game.load.image('scena2', 'assets/render/SCENA2.png');
    game.load.image('scena4', 'assets/render/SCENA4.png');
    game.load.image('scena5', 'assets/render/SCENA5.png');
    game.load.image('vinto', 'assets/render/VINTO.png');
    game.load.image('perso', 'assets/render/PERSO.png');
    game.load.image('sfondobianco', 'assets/sprites/sfondobianco.png');
    game.load.spritesheet('fuoco', 'assets/sprites/fuoco1.png', 90, 85);
    game.load.spritesheet('fuoco2', 'assets/sprites/fuoco2.png', 143, 98);
    game.load.spritesheet('fuoco3', 'assets/sprites/fuoco3.png', 124, 112);
    game.load.spritesheet('checkpoint_fin', 'assets/sprites/checkpoint_fin.png', 80, 108);
    game.load.spritesheet('confusione', 'assets/sprites/confusione.png', 31, 28);
    game.load.spritesheet('fenicottero', 'assets/sprites/icona_fen_sheet.png', 32, 38);
    game.load.spritesheet('rosa', 'assets/sprites/rosa_check.png', 40, 60);
    game.load.spritesheet('vita', 'assets/sprites/cuore_vita2.png', 34, 30);
    game.load.spritesheet('regina_state','assets/sprites/facce_regina.png', 34,34);
    game.load.spritesheet('negative','assets/sprites/enemy_move.png', 46,86);
    game.load.spritesheet('negative2','assets/sprites/enemy2_move.png', 46,86);
    game.load.spritesheet('brucaliffo', 'assets/sprites/brucaliffo.png', 140, 100);
    game.load.spritesheet('nuvola1', 'assets/sprites/nuvola1.png', 60, 50);
    game.load.spritesheet('nuvola2', 'assets/sprites/nuvola2.png', 60, 50);
    game.load.spritesheet('nuvola3', 'assets/sprites/nuvola3.png', 60, 50);
    game.load.spritesheet('candela', 'assets/sprites/candela.png', 40, 90);
    game.load.spritesheet('play', 'assets/render/play.png', 98, 32);
    game.load.spritesheet('credits', 'assets/render/credits.png', 325.5, 37);
    game.load.spritesheet('story', 'assets/render/story.png', 115.5, 32);
    game.load.spritesheet('playagain', 'assets/render/TASTO(VINTO).png', 202.6, 32);
    game.load.spritesheet('playagainperso', 'assets/render/TASTO(PERSO).png', 202.6, 32);
    game.load.image('playstory', 'assets/sprites/playstoria.png');
    game.load.spritesheet('home_home', 'assets/sprites/HOME.png', 186, 63);
    game.load.spritesheet('resume', 'assets/sprites/RESUME.png', 257, 63);
    game.load.image('sinistra', 'assets/sprites/sx.png');
    game.load.image('destra', 'assets/sprites/dx.png');
    game.load.image('cielo', 'assets/sprites/sfondocielo.png');


}


var drink;
var danger;
var jump;
var player;
var vita1;
var vita2;
var vita3;
var home;
var copertina;
var vita = 3;
var fenicottero1;
var fenicottero2;
var fenicottero_rosa1;
var fenicottero_rosa2;
var fenicottero_rosa3;
var fenicottero_rosa4;
var fenicottero_rosa5;
var fenicottero_rosa6;
var fenicottero_rosa7;
var fenicottero_rosa8;
var fenicottero_rosa9;
var fenicottero_rosa10;
var bunkerc;
var bunkersx;
var bunkerdx;
var bunkercsx;
var bunkercdx;
var fen_presi = 0;
var pzpiccolo;
var pzgrosso;
var pz;
var pz1;
var pz2;
var vuoto;
var box;
var muro;
var pavimento;
var terreno1;
var terreno2;
var tunnel;
var negative;
var negative2;
var negative3;
var negative4;
var negative5;
var negative6;
var negative7;
var negative8;
var negative9;
var negative10;
var negative11;
var negative12;
var platforms;
var platform_move;
var platform_move2;
var platform_move3;
var platform_move4;
var platform_move5;
var platform_move6;
var platform_move7;
var platform_move8;
var platform_move9;
var platforms2;
var siepi;
var cursors;
var jumpButton;
var saltone = false;
var saltino = false;
var move = -1;
var move2 = -1;
var move3 = 1;
var move4= -1;
var move5= -1;
var move6= -1;
var move7= -1;
var move8= -1;
var move9= 1;
var move10 = -1;
var move11 = 1;
var move12 = 1;
var move13 = -1;
var move14 = 1;
var move15 = -1;
var move16 = -1;
var move17 = -1;
var move18 = -1;
var move19 = -1;
var move20 = -1;
var move21 = -1;
var p = 0;
var p1 = 0;
var rosa;
var checkpoint_x;
var checkpoint_y;
var bad_move;
var pausa=true;
var pozione=false;
var going_left = false;
var presa= false;
var follow = false;
var move_fen = -1;
var move_fen2 = -1;
var inverti=false;
var brucaliffo;
var saltodellafede=false;
var volo = false;
var schifo= false;
var confusione;


function create() {


    cielo=game.add.sprite (1232, 0, 'cielo');
    cielo2=game.add.sprite (1232+10000, 0, 'cielo');
    muro_castello = game.add.sprite(-40, 0, 'muro_castello');

    arazzo = game.add.sprite(180, 1100,'arazzo');



    candela1 = game.add.sprite(30, 1180, 'candela');
    candela1.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela1.animations.play('fuoco');

    candela3 = game.add.sprite(430, 1180, 'candela');
    candela3.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela3.animations.play('fuoco');

    candela4 = game.add.sprite(630, 1180, 'candela');
    candela4.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela4.animations.play('fuoco');

    candela5 = game.add.sprite(830, 1180, 'candela');
    candela5.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela5.animations.play('fuoco');

    candela6 = game.add.sprite(1030, 1180, 'candela');
    candela6.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela6.animations.play('fuoco');

    candela7 = game.add.sprite(30, 550, 'candela');
    candela7.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela7.animations.play('fuoco');

    candela8 = game.add.sprite(230, 550, 'candela');
    candela8.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela8.animations.play('fuoco');

    candela9 = game.add.sprite(430, 550, 'candela');
    candela9.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela9.animations.play('fuoco');

    candela10 = game.add.sprite(630, 550, 'candela');
    candela10.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela10.animations.play('fuoco');

    candela11 = game.add.sprite(830, 550, 'candela');
    candela11.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela11.animations.play('fuoco');

    candela12 = game.add.sprite(1030, 550, 'candela');
    candela12.animations.add('fuoco', [0, 1, 2, 1], 6, true);
    candela12.animations.play('fuoco');

    catena = game.add.sprite(1000, 1000, 'catena');
    catena2 = game.add.sprite(300, 600, 'catena');

    siepesfondo = game.add.sprite(1271,1083, 'siepe_sfondo');
    bunkersfondo = game.add.sprite(4000, 1400-155-53, 'bunkersfondo');

    alberi = game.add.sprite(15300, 1460-785, 'alberi');
    alberogatto = game.add.sprite(18300, 1460-775, 'alberogatto');
    alberogatto.animations.add('smile', [0,1],2,true);
    alberogatto.animations.play('smile');


    n1 = game.add.sprite(15620, 900, 'nuvola1');
    n1.animations.add('fumo', [0,1], 3, true);
    n1.animations.play('fumo');

    n2 = game.add.sprite(15820, 1100, 'nuvola2');
    n2.animations.add('fumo', [0,1], 3, true);
    n2.animations.play('fumo');

    n3 = game.add.sprite(15890, 950, 'nuvola3');
    n3.animations.add('fumo', [0,1], 3, true);
    n3.animations.play('fumo');

    n4 = game.add.sprite(15850, 750, 'nuvola2');
    n4.animations.add('fumo', [0,1], 3, true);
    n4.animations.play('fumo');

    n5 = game.add.sprite(16050, 650, 'nuvola1');
    n5.animations.add('fumo', [0,1], 3, true);
    n5.animations.play('fumo');

    n6 = game.add.sprite(16000, 850, 'nuvola3');
    n6.animations.add('fumo', [0,1], 3, true);
    n6.animations.play('fumo');

    n7 = game.add.sprite(16200, 950, 'nuvola1');
    n7.animations.add('fumo', [0,1], 3, true);
    n7.animations.play('fumo');

    n8 = game.add.sprite(16150, 700, 'nuvola3');
    n8.animations.add('fumo', [0,1], 3, true);
    n8.animations.play('fumo');

    n9 = game.add.sprite(16250, 1000, 'nuvola2');
    n9.animations.add('fumo', [0,1], 3, true);
    n9.animations.play('fumo');

    n10 = game.add.sprite(16200, 500, 'nuvola3');
    n10.animations.add('fumo', [0,1], 3, true);
    n10.animations.play('fumo');

    n11 = game.add.sprite(16220, 1100, 'nuvola1');
    n11.animations.add('fumo', [0,1], 3, true);
    n11.animations.play('fumo');

    n12 = game.add.sprite(16300, 340, 'nuvola3');
    n12.animations.add('fumo', [0,1], 3, true);
    n12.animations.play('fumo');

    n13 = game.add.sprite(16370, 790, 'nuvola2');
    n13.animations.add('fumo', [0,1], 3, true);
    n13.animations.play('fumo');

    n14 = game.add.sprite(16440, 450, 'nuvola1');
    n14.animations.add('fumo', [0,1], 3, true);
    n14.animations.play('fumo');

    n15 = game.add.sprite(16400, 1010, 'nuvola3');
    n15.animations.add('fumo', [0,1], 3, true);
    n15.animations.play('fumo');

    n16 = game.add.sprite(16500, 900, 'nuvola2');
    n16.animations.add('fumo', [0,1], 3, true);
    n16.animations.play('fumo');

    n17 = game.add.sprite(16570, 375, 'nuvola3');
    n17.animations.add('fumo', [0,1], 3, true);
    n17.animations.play('fumo');

    n18 = game.add.sprite(16620, 850, 'nuvola1');
    n18.animations.add('fumo', [0,1], 3, true);
    n18.animations.play('fumo');

    n19 = game.add.sprite(16700, 940, 'nuvola2');
    n19.animations.add('fumo', [0,1], 3, true);
    n19.animations.play('fumo');

    n20 = game.add.sprite(16760, 1100, 'nuvola3');
    n20.animations.add('fumo', [0,1], 3, true);
    n20.animations.play('fumo');

    n21 = game.add.sprite(16830, 900, 'nuvola1');
    n21.animations.add('fumo', [0,1], 3, true);
    n21.animations.play('fumo');

    n22 = game.add.sprite(16890, 1300, 'nuvola1');
    n22.animations.add('fumo', [0,1], 3, true);
    n22.animations.play('fumo');

    n23 = game.add.sprite(16940, 750, 'nuvola2');
    n23.animations.add('fumo', [0,1], 3, true);
    n23.animations.play('fumo');

    n24 = game.add.sprite(17000, 520, 'nuvola3');
    n24.animations.add('fumo', [0,1], 3, true);
    n24.animations.play('fumo');

    n25 = game.add.sprite(17100, 850, 'nuvola2');
    n25.animations.add('fumo', [0,1], 3, true);
    n25.animations.play('fumo');

    n26 = game.add.sprite(17170, 1270, 'nuvola1');
    n26.animations.add('fumo', [0,1], 3, true);
    n26.animations.play('fumo');

    n27 = game.add.sprite(16660, 472, 'nuvola3');
    n27.animations.add('fumo', [0,1], 3, true);
    n27.animations.play('fumo');

    n28 = game.add.sprite(16598, 607, 'nuvola1');
    n28.animations.add('fumo', [0,1], 3, true);
    n28.animations.play('fumo');

    n29 = game.add.sprite(17000, 276, 'nuvola3');
    n29.animations.add('fumo', [0,1], 3, true);
    n29.animations.play('fumo');

    n30 = game.add.sprite(16900, 320, 'nuvola2');
    n30.animations.add('fumo', [0,1], 3, true);
    n30.animations.play('fumo');

    n31 = game.add.sprite(17145, 1009, 'nuvola1');
    n31.animations.add('fumo', [0,1], 3, true);
    n31.animations.play('fumo');

    n32 = game.add.sprite(17200, 709, 'nuvola3');
    n32.animations.add('fumo', [0,1], 3, true);
    n32.animations.play('fumo');

    n33 = game.add.sprite(17345, 796, 'nuvola2');
    n33.animations.add('fumo', [0,1], 3, true);
    n33.animations.play('fumo');

    n34 = game.add.sprite(17275, 566, 'nuvola1');
    n34.animations.add('fumo', [0,1], 3, true);
    n34.animations.play('fumo');

    n35 = game.add.sprite(17412, 686, 'nuvola2');
    n35.animations.add('fumo', [0,1], 3, true);
    n35.animations.play('fumo');

    n36 = game.add.sprite(17390, 921, 'nuvola3');
    n36.animations.add('fumo', [0,1], 3, true);
    n36.animations.play('fumo');

    n37 = game.add.sprite(17471, 863, 'nuvola2');
    n37.animations.add('fumo', [0,1], 3, true);
    n37.animations.play('fumo');

    n38 = game.add.sprite(17555, 1010, 'nuvola1');
    n38.animations.add('fumo', [0,1], 3, true);
    n38.animations.play('fumo');

    n39 = game.add.sprite(17503, 736, 'nuvola3');
    n39.animations.add('fumo', [0,1], 3, true);
    n39.animations.play('fumo');

    n40 = game.add.sprite(17598, 1156, 'nuvola1');
    n40.animations.add('fumo', [0,1], 3, true);
    n40.animations.play('fumo');

    n41 = game.add.sprite(17639, 986, 'nuvola2');
    n41.animations.add('fumo', [0,1], 3, true);
    n41.animations.play('fumo');

    n42 = game.add.sprite(17683, 676, 'nuvola3');
    n42.animations.add('fumo', [0,1], 3, true);
    n42.animations.play('fumo');

    n43 = game.add.sprite(17747, 867, 'nuvola1');
    n43.animations.add('fumo', [0,1], 3, true);
    n43.animations.play('fumo');

    n44 = game.add.sprite(17481, 1111, 'nuvola2');
    n44.animations.add('fumo', [0,1], 3, true);
    n44.animations.play('fumo');

    n45 = game.add.sprite(17700, 1200, 'nuvola3');
    n45.animations.add('fumo', [0,1], 3, true);
    n45.animations.play('fumo');

    n46 = game.add.sprite(17841, 1170, 'nuvola1');
    n46.animations.add('fumo', [0,1], 3, true);
    n46.animations.play('fumo');

    n47 = game.add.sprite(17805-150, 1100, 'nuvola2');
    n47.animations.add('fumo', [0,1], 3, true);
    n47.animations.play('fumo');

    n48 = game.add.sprite(17469, 1237, 'nuvola1');
    n48.animations.add('fumo', [0,1], 3, true);
    n48.animations.play('fumo');

    n49 = game.add.sprite(17517, 1300, 'nuvola3');
    n49.animations.add('fumo', [0,1], 3, true);
    n49.animations.play('fumo');

    n50 = game.add.sprite(15630, 1380, 'nuvola2');
    n50.animations.add('fumo', [0,1], 3, true);
    n50.animations.play('fumo');

    n51= game.add.sprite(15590, 980, 'nuvola3');
    n51.animations.add('fumo', [0,1], 3, true);
    n51.animations.play('fumo');


    n52 = game.add.sprite(15684, 1100, 'nuvola1');
    n52.animations.add('fumo', [0,1], 3, true);
    n52.animations.play('fumo');

    n53 = game.add.sprite(15760, 1250, 'nuvola2');
    n53.animations.add('fumo', [0,1], 3, true);
    n53.animations.play('fumo');

    n54 = game.add.sprite(15764, 1000, 'nuvola3');
    n54.animations.add('fumo', [0,1], 3, true);
    n54.animations.play('fumo');





    drink = game.add.sprite(1750,1163-72, 'drink');
    drink.angle=-25;
    jumpon = game.add.sprite(1450,1365, 'jumpon');
    danger = game.add.sprite(4890,1355, 'danger');
    jump = game.add.sprite(10600,1380, 'jump');
    jump.angle=-15;
    player = game.add.sprite(225, 1300, 'player');
    player.animations.add('left', [9, 8, 9, 7], 10, true);
    player.animations.add('right', [0, 1, 0,2], 10, true);
    player.animations.add('jumpr', [3,1], 10, true);
    player.animations.add('jumpl', [6,9], 10, true);
    player.animations.add('mutander', [4], 10, true);
    player.animations.add('mutandel', [5], 10, true);
    player.animations.stop();

    brucaliffo = game.add.sprite(15420, 1210, 'brucaliffo');
    brucaliffo.animations.add('smoking', [0,1], 3, true);
    brucaliffo.animations.play('smoking');

    negative = game.add.sprite(1650, 1300,'negative');
    negative.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative.animations.play('walk');

    negative2 = game.add.sprite(1650+1100, 1300,'negative2');
    negative2.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative2.animations.play('walk');

    negative3 = game.add.sprite(5485, 600,'negative');
    negative3.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative3.animations.play('walk');

    negative4 = game.add.sprite(7600, 1300,'negative2');
    negative4.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative4.animations.play('walk');

    negative5 = game.add.sprite(7980, 1300,'negative');
    negative5.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative5.animations.play('walk');

    negative6 = game.add.sprite(12100, 795,'negative2');
    negative6.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative6.animations.play('walk');

    negative7 = game.add.sprite(12570, 795,'negative');
    negative7.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative7.animations.play('walk');

    negative8 = game.add.sprite(11800,995,'negative');
    negative8.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative8.animations.play('walk');

    negative9 = game.add.sprite(12500, 995,'negative');
    negative9.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative9.animations.play('walk');

    negative10 = game.add.sprite(12000, 1095,'negative');
    negative10.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative10.animations.play('walk');

    negative11 = game.add.sprite(14200, 700,'negative');
    negative11.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative11.animations.play('walk');

    negative12 = game.add.sprite(19350, 700,'negative');
    negative12.animations.add('walk', [0, 1, 0, 2], 7, true);
    negative12.animations.play('walk');


    fenicottero_rosa1 = game.add.sprite(1900, 1300, 'fen_salta');
    fenicottero_rosa1.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa1.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa2 = game.add.sprite(3500, 750,'fen_salta');
    fenicottero_rosa2.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa2.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa3 = game.add.sprite(4240, 1300,'fen_salta');
    fenicottero_rosa3.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa3.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa4 = game.add.sprite(6005, 400,'fen_salta');
    fenicottero_rosa4.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa4.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa5 = game.add.sprite(8780, 200,'fen_salta');
    fenicottero_rosa5.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa5.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa6 = game.add.sprite(10900, 600,'fen_vola');
    fenicottero_rosa6.animations.add('volor', [3,4], 10, true);
    fenicottero_rosa6.animations.add('volol', [1,2], 10, true);
    fenicottero_rosa7 = game.add.sprite(12330, 600,'fen_salta');
    fenicottero_rosa7.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa7.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa8 = game.add.sprite(14850, 0,'fen_salta');
    fenicottero_rosa8.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa8.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa9 = game.add.sprite(16690, 200,'fen_salta');
    fenicottero_rosa9.animations.add('saltor', [5,4,5,3], 10, true);
    fenicottero_rosa9.animations.add('saltol', [0,1,0,2], 10, true);
    fenicottero_rosa10 = game.add.sprite(18500, 1400,'fen_vola');
    fenicottero_rosa10.animations.add('volol', [1,2], 10, true);
    fenicottero_rosa10.animations.add('volor', [3,4], 10, true);


    bunkersx = game.add.sprite(4000, 1400-45,'bunkersx');
    bunkerc = game.add.sprite(4125, 1400-155-53,'bunkerc');
    bunkerdx = game.add.sprite(4425-41, 1400-45,'bunkerdx');
    bunkercdx = game.add.sprite(4425-41, 1400-156,'bunkercdx');
    bunkercsx = game.add.sprite(4125, 1400-156,'bunkercsx');


    roseto = game.add.sprite(5000, 1410, 'roseto');
    roseto2 = game.add.sprite(13600, 1410, 'roseto2');
    roseto3 = game.add.sprite(16050,1410, 'roseto3');
    rosetoalto = game.add.sprite(8750, 815+64+7, 'rosetoalto');

    fungo = game.add.sprite(10700, 1400, 'fungo');
    fungo.animations.add('pulsa', [0,1, 0, 1], 4, true);
    fungo.animations.play('pulsa');
    fungo2 = game.add.sprite(13500, 1400, 'fungo');
    fungo2.animations.add('pulsa', [0,1, 0, 1], 4, true);
    fungo2.animations.play('pulsa');

    //_________________LIVELLO 7______________________________________________//

    ziqqurat = game.add.physicsGroup();
    z1=ziqqurat.create(11570, 1315, 'tunnelx3');
    z1.body.setSize(1536,63,0,7);
    z2=ziqqurat.create(11740, 1155, 'tunnel');
    z2.body.setSize(512, 63, 0, 7);
    z3=ziqqurat.create(12422, 1155, 'tunnel');
    z3.body.setSize(512, 63, 0, 7);
    z4=ziqqurat.create(11825, 995, 'tunnelx2');
    z4.body.setSize(1024, 63, 0, 7);
    ziqqurat.setAll('body.immovable', true);


    //_______________FINE LIVELLO 7___________________________________________//

    checkpoint_fin = game.add.sprite(20100, 1475-108,'checkpoint_fin');
    checkpoint_fin.animations.add('frufru', [0, 1], 2, true);
    checkpoint_fin.animations.add('frufrured', [2, 3], 2, true);
    checkpoint_fin.animations.play('frufru');
    fuoco = game.add.sprite(20050, 1070,'fuoco');
    fuoco.animations.add('bum', [0, 1, 2, 3, 4, 5], 10, true);
    fuoco.frame=0;
    fuoco2 = game.add.sprite(20000, 1202,'fuoco2');
    fuoco2.animations.add('bum', [0, 1, 2, 3, 4], 10, true);
    fuoco2.frame=0;
    fuoco3 = game.add.sprite(20190, 1200,'fuoco');
    fuoco3.animations.add('bum', [0, 1, 2, 3, 4, 5], 10, true);
    fuoco3.frame=0;
    fuoco4 = game.add.sprite(20070, 1000,'fuoco2');
    fuoco4.animations.add('bum', [0, 1, 2, 3, 4], 10, true);
    fuoco4.frame=0;
    fuoco5 = game.add.sprite(19980, 1300,'fuoco3');
    fuoco5.animations.add('bum', [0, 1, 2, 3, 4, 5], 10, true);
    fuoco5.frame=0;
    fuoco6 = game.add.sprite(20120, 1154,'fuoco3');
    fuoco6.animations.add('bum', [0, 1, 2, 3, 4, 5], 10, true);
    fuoco6.frame=0;

    box = game.add.sprite(800, 1408, 'box');
    gabbia = game.add.sprite(10, 1345, 'gabbia');
    game.physics.arcade.enable(gabbia);
    gabbia.body.setSize(128-32, 34,30,  32*3+16);
    gabbia.body.immovable = true;
    muro1 = game.add.sprite(1192+80, 500, 'muro');
    muro1.scale.setTo(-1);
    terreno1 = game.add.sprite(1247, 1467, 'terreno1');
    terreno2 = game.add.sprite(1247+9964, 1467, 'terreno2');
    rosa = game.add.sprite(2000, 1420, 'rosa');
    rosa.frame = 0;
    rosa1 = game.add.sprite(4735, 1270, 'rosa');
    rosa1.frame = 0;
    rosa2 = game.add.sprite(10300, 1420, 'rosa');
    rosa2.frame = 0;
    rosa3 = game.add.sprite(15450, 1420, 'rosa');
    rosa3.frame = 0;
    rosa4 = game.add.sprite(17850, 1420, 'rosa');
    rosa4.frame = 0;
    pzgrosso = game.add.sprite(1850,1163-26, 'pzgrosso');
    player.pz = game.add.sprite(20,-35,'pzgrosso');
    pzgrosso1 = game.add.sprite(9900,1275, 'pzgrosso');
    player.pz = game.add.sprite(20,-35,'pzgrosso');
    pzpiccolo = game.add.sprite(3800,1443, 'pzpiccolo');
    player.pz1 = game.add.sprite(20,-35,'pzpiccolo');
    pzpiccolo1 = game.add.sprite(8600,1035, 'pzpiccolo');
    player.pz1 = game.add.sprite(20,-35,'pzpiccolo');
    pzgrosso2 = game.add.sprite(12335,1000-30, 'pzgrosso');
    player.pz2 = game.add.sprite(20,-35,'pzgrosso');







    game.physics.arcade.enable(player);
    game.physics.arcade.enable(box);
    game.physics.arcade.enable(fungo2);
    game.physics.arcade.enable(muro1);
    game.physics.arcade.enable(terreno1);
    game.physics.arcade.enable(terreno2);
    game.physics.arcade.enable(fungo);
    game.physics.arcade.enable(negative);
    game.physics.arcade.enable(negative2);
    game.physics.arcade.enable(negative3);
    game.physics.arcade.enable(negative4);
    game.physics.arcade.enable(negative5);
    game.physics.arcade.enable(negative6);
    game.physics.arcade.enable(negative7);
    game.physics.arcade.enable(negative8);
    game.physics.arcade.enable(negative9);
    game.physics.arcade.enable(negative10);
    game.physics.arcade.enable(negative11);
    game.physics.arcade.enable(negative12);
    game.physics.arcade.enable(fenicottero_rosa1);
    game.physics.arcade.enable(fenicottero_rosa2);
    game.physics.arcade.enable(fenicottero_rosa3);
    game.physics.arcade.enable(fenicottero_rosa4);
    game.physics.arcade.enable(fenicottero_rosa5);
    game.physics.arcade.enable(fenicottero_rosa6);
    game.physics.arcade.enable(fenicottero_rosa7);
    game.physics.arcade.enable(fenicottero_rosa8);
    game.physics.arcade.enable(fenicottero_rosa9);
    game.physics.arcade.enable(fenicottero_rosa10);
    game.physics.arcade.enable(rosa);
    game.physics.arcade.enable(rosa1);
    game.physics.arcade.enable(rosa2);
    game.physics.arcade.enable(rosa3);
    game.physics.arcade.enable(rosa4);
    game.physics.arcade.enable(checkpoint_fin);
    game.physics.arcade.enable(pzgrosso);
    game.physics.arcade.enable(pzgrosso1);
    game.physics.arcade.enable(pzgrosso2);
    game.physics.arcade.enable(pzpiccolo);
    game.physics.arcade.enable(pzpiccolo1);
    game.physics.arcade.enable(bunkerdx);
    game.physics.arcade.enable(bunkersx);
    game.physics.arcade.enable(bunkerc);
    game.physics.arcade.enable(bunkercdx);
    game.physics.arcade.enable(bunkercsx);
    game.physics.arcade.enable(roseto);
    game.physics.arcade.enable(roseto2);
    game.physics.arcade.enable(roseto3);
    game.physics.arcade.enable(rosetoalto);
    game.physics.arcade.enable(ziqqurat);




    player.body.collideWorldBounds = true;
    box.body.collideWorldBounds = true;
    fungo2.body.collideWorldBounds = true;
    fenicottero_rosa1.body.collideWorldBounds = true;
    fenicottero_rosa2.body.collideWorldBounds = true;
    fenicottero_rosa3.body.collideWorldBounds = true;
    fenicottero_rosa4.body.collideWorldBounds = true;
    fenicottero_rosa5.body.collideWorldBounds = true;
    fenicottero_rosa6.body.collideWorldBounds = true;
    fenicottero_rosa7.body.collideWorldBounds = true;
    fenicottero_rosa8.body.collideWorldBounds = true;
    fenicottero_rosa9.body.collideWorldBounds = true;
    fenicottero_rosa10.body.collideWorldBounds = true;
    negative.body.collideWorldBounds = true;


    terreno1.body.setSize(9964, 63, 0, 7);
    terreno2.body.setSize(9964, 63, 0, 7);


    game.world.setBounds(0,0,20500,1536);
    game.camera.follow(player);

    box.body.gravity.y = 500;
    fungo.body.gravity.y = 0;
    fungo2.body.gravity.y = 0;
    negative.body.gravity.y = 500;
    negative2.body.gravity.y = 500;
    negative3.body.gravity.y = 500;
    negative4.body.gravity.y = 500;
    negative5.body.gravity.y = 500;
    negative6.body.gravity.y = 500;
    negative7.body.gravity.y = 500;
    negative8.body.gravity.y = 500;
    negative9.body.gravity.y = 500;
    negative10.body.gravity.y = 500;
    negative11.body.gravity.y = 500;
    negative12.body.gravity.y = 1000;
    fenicottero_rosa1.body.gravity.y = 400;
    fenicottero_rosa2.body.gravity.y = 400;
    fenicottero_rosa3.body.gravity.y = 400;
    fenicottero_rosa4.body.gravity.y = 400;
    fenicottero_rosa5.body.gravity.y = 400;
    fenicottero_rosa6.body.gravity.y = 0;
    fenicottero_rosa7.body.gravity.y = 400;
    fenicottero_rosa8.body.gravity.y = 400;
    fenicottero_rosa9.body.gravity.y = 400;
    fenicottero_rosa10.body.gravity.y = 400;


//___________________ piattaforme_inizio _____________________________________//



    platforms = game.add.physicsGroup();
    platforms.create(980, 1450, 'platform');
    platforms.create(900, 1280, 'platform'); //primo piano
    platforms.create(700, 1125, 'platform'); //secondo piano
    platforms.create(400, 860, 'platform');  //quarto
    platforms.create(900, 720, 'platform');  //-1

    pavimento = game.add.sprite(-14, 1536-64, 'pavimento');
    game.physics.arcade.enable(pavimento);


    muro = game.add.sprite(1192, 660, 'muro');
    game.physics.arcade.enable(muro);

    platforms.setAll('body.immovable', true);

    platform_move = game.add.sprite(300, 1020, 'platform')//terzo piano mobile
    game.physics.arcade.enable(platform_move);
    platform_move.body.immovable = true;

    platforms2 = game.add.physicsGroup();
    pl = platforms2.create(1600, 1315, 'platform2');
    pl.body.setSize(128, 50, 0, 7);
    pl1 = platforms2.create(1800, 1163, 'platform2');
    pl1.body.setSize(128, 50, 0, 7);
    pl2=platforms2.create(2700, 1315, 'platform2');
    pl2.body.setSize(128, 50, 0, 7);
    pl3=platforms2.create(2900, 1163, 'platform2');
    pl3.body.setSize(128, 50, 0, 7);
    pl4=platforms2.create(2700, 1011, 'platform2');
    pl4.body.setSize(128, 50, 0, 7);
    pl5=platforms2.create(3500, 859, 'platform2');
    pl5.body.setSize(128, 50, 0, 7);
    pl6=platforms2.create(4700, 1320, 'platform2');
    pl6.body.setSize(128, 50, 0, 7);
    pl7=platforms2.create(5450, 700, 'platform2');
    pl7.body.setSize(128, 50, 0, 7);
    pl8=platforms2.create(6450, 670, 'platform2');
    pl8.body.setSize(128, 50, 0, 7);
    pl9=platforms2.create(6600, 800, 'platform2');
    pl9.body.setSize(128, 50, 0, 7);
    pl10=platforms2.create(6750, 930, 'platform2');
    pl10.body.setSize(128, 50, 0, 7);
    pl11=platforms2.create(6900, 1060, 'platform2');
    pl11.body.setSize(128, 50, 0, 7);
    pl12=platforms2.create(7050, 1190, 'platform2');
    pl12.body.setSize(128, 50, 0, 7);
    pl13=platforms2.create(7200, 1320, 'platform2');
    pl13.body.setSize(128, 50, 0, 7);
    pl14 = platforms2.create(8150, 1320, 'platform2');
    pl14.body.setSize(128, 50, 0, 7);
    pl15=platforms2.create(8750, 815, 'platform2');//fen sopra tunnel
    pl15.body.setSize(128, 50, 0, 7);
    pl16=platforms2.create(13890, 1000, 'platform2'); //LVL8
    pl16.body.setSize(128, 50, 0, 7);
    pl17=platforms2.create(14850, 350, 'platform2');//fenicottero8
    pl17.body.setSize(128, 50, 0, 7);
    pl18=platforms2.create(15400, 1300, 'platform2');//piattaforma brucaliffo foresta
    pl18.body.setSize(128, 50, 0, 7);
    pl19=platforms2.create(16050, 1315, 'platform2');//foresta
    pl19.body.setSize(128, 50, 0, 7);
    pl20=platforms2.create(16250, 1163, 'platform2');//foresta
    pl20.body.setSize(128, 50, 0, 7);
    pl21=platforms2.create(16650, 848, 'platform2');//foresta fenicottero
    pl21.body.setSize(128, 50, 0, 7);
    pl22=platforms2.create(16650+150, 848+130, 'platform2');//fenicottero
    pl22.body.setSize(128, 50, 0, 7);
    pl23=platforms2.create(16650+150+150, 848+130+130, 'platform2');//fenicottero
    pl23.body.setSize(128, 50, 0, 7);
    pl24=platforms2.create(16650+150+150+150, 848+130+130+130, 'platform2');//fenicottero
    pl24.body.setSize(128, 50, 0, 7);
    pl25=platforms2.create(16650+150+150+150+150, 848+130+130+130+130, 'platform2');//ultimo gradino fenicottero 9
    pl25.body.setSize(128, 50, 0, 7);
    pl26=platforms2.create(18700, 1315, 'platform2');//fenicottero 10
    pl26.body.setSize(128, 50, 0, 7);
    pl27=platforms2.create(18900, 1163, 'platform2');//fenicottero 10
    pl27.body.setSize(128, 50, 0, 7);
    pl28=platforms2.create(18700, 1011, 'platform2');//fenicottero 10
    pl28.body.setSize(128, 50, 0, 7);
    pl29=platforms2.create(19000, 600, 'platform2');//fenicottero 10
    pl29.body.setSize(128, 50, 0, 7);
    pl30 = platforms2.create(12300, 755, 'platform2'); // ziqqurattop
    pl30.body.setSize(128, 50, 0, 7);
    pl31 = platforms2.create(14850, 755+95, 'platform2'); // ziqqurattop
    pl31.body.setSize(128, 50, 0, 7);



    platforms2.setAll('body.immovable', true);
    platforms2.setAll('body.setSize', 128, 50, 0, 7);

    platform_move2 = game.add.sprite(2900, 859, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move2);
    platform_move2.body.immovable = true;
    platform_move2.body.setSize(128, 50, 0, 7);

    platform_move3 = game.add.sprite(3700, 859, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move3);
    platform_move3.body.immovable = true;
    platform_move3.body.setSize(128, 50, 0, 7);

    platform_move4 = game.add.sprite(4905, 1000, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move4);
    platform_move4.body.immovable = true;
    platform_move4.body.setSize(128, 50, 0, 7);

    platform_move5 = game.add.sprite(5105, 900, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move5);
    platform_move5.body.immovable = true;
    platform_move5.body.setSize(128, 50, 0, 7);

    platform_move6 = game.add.sprite(5700, 700, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move6);
    platform_move6.body.immovable = true;
    platform_move6.body.setSize(128, 50, 0, 7);

    platform_move7 = game.add.sprite(6080, 550, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move7);
    platform_move7.body.immovable = true;
    platform_move7.body.setSize(128, 50, 0, 7);

    platform_move8 = game.add.sprite(14150, 792, 'platform2')//livello 8 y
    game.physics.arcade.enable(platform_move8);
    platform_move8.body.immovable = true;
    platform_move8.body.setSize(128, 50, 0, 7);

    platform_move9 = game.add.sprite(14500, 500, 'platform2')//livello 8 x
    game.physics.arcade.enable(platform_move9);
    platform_move9.body.immovable = true;
    platform_move9.body.setSize(128, 50, 0, 7);

    platform_move10 = game.add.sprite(16050, 1004, 'platform2')//livello 9
    game.physics.arcade.enable(platform_move10);
    platform_move10.body.immovable = true;
    platform_move10.body.setSize(128, 50, 0, 7);

    platform_move11 = game.add.sprite(19000, 860, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move11);
    platform_move11.body.immovable = true;
    platform_move11.body.setSize(128, 50, 0, 7);

    platform_move12 = game.add.sprite(19300, 859, 'platform2')//terzo piano mobile
    game.physics.arcade.enable(platform_move12);
    platform_move12.body.immovable = true;
    platform_move12.body.setSize(128, 50, 0, 7);

    platform_move13 = game.add.sprite(18700, 600, 'platform2')//terzo piano mobile
      game.physics.arcade.enable(platform_move13);
      platform_move13.body.immovable = true;
      platform_move13.body.setSize(128, 50, 0, 7);

      platform_move14 = game.add.sprite(14850+200, 400, 'platform2')//scendi fen8
        game.physics.arcade.enable(platform_move14);
        platform_move14.body.immovable = true;
        platform_move14.body.setSize(128, 50, 0, 7);

        platform_move15 = game.add.sprite(14850-200, 800, 'platform2')//scendi fen8
          game.physics.arcade.enable(platform_move15);
          platform_move15.body.immovable = true;
          platform_move15.body.setSize(128, 50, 0, 7);


          conf = game.add.sprite(0, 0, 'confusione');
          conf.frame = 1;
          game.physics.arcade.enable(conf);
          conf.body.setSize(1,1,14,50);

    siepi = game.add.physicsGroup();
    siepi.create(2200, 1410-128, 'siepe');

    siepi.setAll('body.immovable', true);

    tunnel = game.add.physicsGroup();
    t1=tunnel.create(8350, 1180+5, 'tunnel');
    t1.body.setSize(512, 63, 0, 7);
    t2=tunnelmorte = tunnel.create(8550, 1060, 'tunnel');
    t2.body.setSize(512, 63, 0, 7);
    t3=tunnel.create(8750+700, 1300, 'tunnel');
    t3.body.setSize(512, 63, 0, 7);
    t4=tunnel.create(8350+560, 1180+5, 'tunnel');
    t4.body.setSize(512, 63, 0, 7);


    tunnel.setAll('body.immovable', true);





    muro.body.immovable = true;
    muro1.body.immovable = true;
    pavimento.body.immovable = true;
    terreno1.body.immovable = true;
    terreno2.body.immovable = true;
    rosa.body.immovable = true;
    rosa1.body.immovable = true;
    rosa2.body.immovable = true;
    checkpoint_fin.body.immovable = true;
    rosa3.body.immovable = true;
    rosa4.body.immovable = true;
    bunkerc.body.immovable = true;
    bunkerdx.body.immovable = true;
    bunkersx.body.immovable = true;
    bunkercsx.body.immovable = true;
    bunkercdx.body.immovable = true;
    roseto.body.immovable = true;
    roseto2.body.immovable = true;
    roseto3.body.immovable = true;
    rosetoalto.body.immovable = true;
    fungo.body.immovable = true;
    fungo2.body.immovable = true;

// piattaforme_fine //


    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

//Interfaccia//

    vita1 = game.add.sprite(20, 60, 'vita');
    vita1.frame = 0;
    vita1.fixedToCamera = true;
    vita2 = game.add.sprite(60, 60, 'vita');
    vita2.frame = 0;
    vita2.fixedToCamera = true;
    vita3 = game.add.sprite(100, 60, 'vita');
    vita3.frame = 0;
    vita3.fixedToCamera = true;


    fenicottero1 = game.add.sprite(180, 20, 'fenicottero');
    fenicottero1.frame = 0;
    fenicottero1.alpha=0.7;
    fenicottero1.fixedToCamera = true;
    fenicottero2 = game.add.sprite(220, 20, 'fenicottero');
    fenicottero2.frame = 0;
    fenicottero2.alpha=0.7;
    fenicottero2.fixedToCamera = true;
    fenicottero3 = game.add.sprite(260, 20, 'fenicottero');
    fenicottero3.frame = 0;
    fenicottero3.alpha=0.7;
    fenicottero3.fixedToCamera = true;
    fenicottero4 = game.add.sprite(300, 20, 'fenicottero');
    fenicottero4.frame = 0;
    fenicottero4.alpha=0.7;
    fenicottero4.fixedToCamera = true;
    fenicottero5 = game.add.sprite(340, 20, 'fenicottero');
    fenicottero5.frame = 0;
    fenicottero5.alpha=0.7;
    fenicottero5.fixedToCamera = true;
    fenicottero6 = game.add.sprite(380, 20, 'fenicottero');
    fenicottero6.frame = 0;
    fenicottero6.alpha=0.7;
    fenicottero6.fixedToCamera = true;
    fenicottero7 = game.add.sprite(420, 20, 'fenicottero');
    fenicottero7.frame = 0;
    fenicottero7.alpha=0.7;
    fenicottero7.fixedToCamera = true;
    fenicottero8 = game.add.sprite(460, 20, 'fenicottero');
    fenicottero8.frame = 0;
    fenicottero8.alpha=0.7;
    fenicottero8.fixedToCamera = true;
    fenicottero9 = game.add.sprite(500, 20, 'fenicottero');
    fenicottero9.frame = 0;
    fenicottero9.alpha=0.7;
    fenicottero9.fixedToCamera = true;
    fenicottero10 = game.add.sprite(540, 20, 'fenicottero');
    fenicottero10.frame = 0;
    fenicottero10.alpha=0.7;
    fenicottero10.fixedToCamera = true;

    regina_states = game.add.sprite(60, 20, 'regina_state');
    regina_states.frame=2;
    regina_states.fixedToCamera = true;



    home = game.add.sprite(1024-30-40, 20, 'home');
    home.fixedToCamera = true;
    home.inputEnabled = true;
    home.events.onInputUp.add(function () {
        game.paused = true;
        home.kill();
      sfondobianco.revive();
      home_home.revive();
      resume.revive();
    });


     sfondobianco = game.add.sprite(0, 0, 'sfondobianco');
     sfondobianco.fixedToCamera =true;
     sfondobianco.alpha=0.2;

     home_home= game.add.sprite(512-53.75, 384+35, 'home_home');
     home_home.fixedToCamera = true;
     home_home.frame=0;
     home_home.inputEnabled = true;
     home_home.events.onInputOver.add(function () {
       home_home.frame = 1;
     });
     home_home.events.onInputOut.add(function (){
       home_home.frame = 0;
     });
     home_home.events.onInputUp.add(function () {

        game.paused = false;
         game.state.restart();
         inverti=false;
         schifo=false;
         saltone =false;
         saltino=false;
         fen_presi=0;
         vita=3;
         going_left=false;
         saltodellafede=false;
         volo=false;
         p = 0;
         p1 = 0;
         presa=false;
         follow=false;
         pausa=true;
     });

     resume= game.add.sprite(512-89.25, 384-63-35, 'resume');
     resume.fixedToCamera = true;
     resume.frame=0;
     resume.inputEnabled = true;
     resume.events.onInputOver.add(function () {
       resume.frame = 1;
     });
     resume.events.onInputOut.add(function (){
       resume.frame = 0;
     });
     resume.events.onInputUp.add(function () {


        sfondobianco.kill();
        resume.kill();
        home_home.kill();
        game.paused = false;
        home.revive();
        console.log('clicked');
     });


//MENU
scrittaflamingo=game.add.sprite(0,0,'scrittaflamingo');
scrittaflamingo.fixedToCamera = true;

perso=game.add.sprite(0,0,'perso');
perso.fixedToCamera = true;
playagainperso= game.add.sprite(512-100.5, 120, 'playagainperso');
playagainperso.fixedToCamera = true;
playagainperso.frame=0;
playagainperso.inputEnabled = true;

playagainperso.events.onInputOver.add(function () {
  playagainperso.frame = 1;
  console.log('over');
});

playagainperso.events.onInputOut.add(function (){
  playagainperso.frame = 0;
});
playagainperso.events.onInputUp.add(function () {

    vinto.kill();
    playagainperso.kill();
    game.state.restart();
    inverti=false;
    schifo=false;
    saltone =false;
    saltino=false;
    fen_presi=0;
    vita=3;
    going_left=false;
    saltodellafede=false;
    volo=false;
    p = 0;
    p1 = 0;
    presa=false;
    follow=false;
    pausa=true;
});


vinto = game.add.sprite(0, 0, 'vinto');
vinto.fixedToCamera = true;

playagain= game.add.sprite(512-100.5, 738-32, 'playagain');
playagain.fixedToCamera = true;
playagain.frame=0;
playagain.inputEnabled = true;

playagain.events.onInputOver.add(function () {
  playagain.frame = 1;
  console.log('over');
});

playagain.events.onInputOut.add(function (){
  playagain.frame = 0;
});
playagain.events.onInputUp.add(function () {

    vinto.kill();
    playagain.kill();
    game.state.restart();
    inverti=false;
    schifo=false;
    saltone =false;
    saltino=false;
    fen_presi=0;
    vita=3;
    going_left=false;
    saltodellafede=false;
    volo=false;
    p = 0;
    p1 = 0;
    presa=false;
    follow=false;
    pausa=true;
});

scena5 = game.add.sprite(0, 0, 'scena5');
scena5.fixedToCamera =true;

playstory =game.add.sprite(1024-30-128, 384-36, 'playstory');
playstory.fixedToCamera =true;
playstory.inputEnabled = true;
playstory.events.onInputUp.add(function () {
  scena5.kill();
  sx5.kill();
  playstory.kill();
  vinto.kill();
  playagain.kill();
  sfondobianco.kill();
  home_home.kill();
  resume.kill();
  playagainperso.kill();
  perso.kill();
  fuoco.kill();
  fuoco2.kill();
  fuoco3.kill();
  fuoco4.kill();
  fuoco5.kill();
  fuoco6.kill();
  scrittaflamingo.kill();
  pausa=false;
});

sx5 = game.add.sprite(30, 384-34, 'sinistra');
sx5.fixedToCamera = true;
sx5.inputEnabled = true;
sx5.events.onInputUp.add(function () {
  scena5.kill();
  sx5.kill();
  scena4.revive();
  sx4.revive();
  dx4.revive();
});

scena4 = game.add.sprite(0, 0, 'scena4');
scena4.fixedToCamera =true;
dx4 = game.add.sprite(1024-30-46, 384-34, 'destra');
dx4.fixedToCamera = true;
dx4.inputEnabled = true;
dx4.events.onInputUp.add(function () {
  scena4.kill();
  dx4.kill();
  sx4.kill();
  scena5.revive();
  sx5.revive();
});
sx4 = game.add.sprite(30, 384-34, 'sinistra');
sx4.fixedToCamera = true;
sx4.inputEnabled = true;
sx4.events.onInputUp.add(function () {
  scena4.kill();
  dx4.kill();
  sx4.kill();
  scena3.revive();
  sx3.revive();
  dx3.revive();

});

scena3 = game.add.sprite(0, 0, 'scena3');
scena3.fixedToCamera =true;
dx3 = game.add.sprite(1024-30-46, 384-34, 'destra');
dx3.fixedToCamera = true;
dx3.inputEnabled = true;
dx3.events.onInputUp.add(function () {
  scena3.kill();
  dx3.kill();
  sx3.kill();
  scena4.revive();
  dx4.revive();
  sx4.revive();
});
sx3 = game.add.sprite(30, 384-34, 'sinistra');
sx3.fixedToCamera = true;
sx3.inputEnabled = true;
sx3.events.onInputUp.add(function () {
  scena3.kill();
  dx3.kill();
  sx3.kill();
  scena2.revive();
  sx2.revive();
  dx2.revive();
});

scena2 = game.add.sprite(0, 0, 'scena2');
scena2.fixedToCamera =true;
dx2 = game.add.sprite(1024-30-46, 384-34, 'destra');
dx2.fixedToCamera = true;
dx2.inputEnabled = true;
dx2.events.onInputUp.add(function () {
  scena2.kill();
  dx2.kill();
  sx2.kill();
  scena3.revive();
  dx3.revive();
  sx3.revive();
});
sx2 = game.add.sprite(30, 384-34, 'sinistra');
sx2.fixedToCamera = true;
sx2.inputEnabled = true;
sx2.events.onInputUp.add(function () {
  scena2.kill();
  dx2.kill();
  sx2.kill();
  scena1.revive();
  sx1.revive();
  dx1.revive();
});


scena1 = game.add.sprite(0, 0, 'scena1');
scena1.fixedToCamera =true;

dx1 = game.add.sprite(1024-30-46, 384-34, 'destra');
dx1.fixedToCamera = true;
dx1.inputEnabled = true;
dx1.events.onInputUp.add(function () {
  scena1.kill();
  dx1.kill();
  sx1.kill();
  scena2.revive();
  dx2.revive();
  sx2.revive();
});
sx1 = game.add.sprite(30, 384-34, 'sinistra');
sx1.fixedToCamera = true;
sx1.inputEnabled = true;
sx1.events.onInputUp.add(function () {
  sx1.kill();
  dx1.kill();
  copertina.revive();
  play.revive();
  credits.revive();
  story.revive();
  story.frame=0;
  creditsnoi.revive();
  home2.revive();
});

creditsnoi = game.add.sprite(0, 0, 'creditsnoi');
creditsnoi.fixedToCamera =true;

home2 = game.add.sprite(1024-30-40, 20, 'home');
home2.fixedToCamera = true;
home2.inputEnabled = true;
home2.events.onInputUp.add(function () {
  copertina.revive();
  credits.revive();
  play.revive();
  credits.frame = 0;
  story.revive();
});

copertina = game.add.sprite(0, 0, 'copertina');
copertina.fixedToCamera =true;
//copertina.inputEnabled = true;


play = game.add.sprite(1024-30-98, 738-37-60-32-32, 'play');
play.frame = 0;
play.fixedToCamera = true;
play.inputEnabled = true;

play.events.onInputOver.add(function () {
  play.frame = 1;
});
play.events.onInputOut.add(function (){
  play.frame = 0;
});
play.events.onInputUp.add(function () {
    pausa=false;
    copertina.kill();
    play.kill();
    credits.kill();
    creditsnoi.kill();
    home2.kill();
    story.kill()
    scena1.kill();
    dx1.kill();
    sx1.kill();
    dx2.kill();
    sx2.kill();
    dx3.kill();
    sx3.kill();
    dx4.kill();
    sx4.kill();
    sx5.kill();
    playstory.kill();
    scena2.kill();
    scena3.kill();
    scena4.kill();
    scena5.kill();
    vinto.kill();
    sfondobianco.kill();
    home_home.kill();
    resume.kill();
    playagain.kill();
    playagainperso.kill();
    perso.kill();
    fuoco.kill();
    fuoco2.kill();
    fuoco3.kill();
    fuoco4.kill();
    fuoco6.kill();
    fuoco5.kill();
    scrittaflamingo.kill();
});

credits = game.add.sprite(1024-30-325.5, 738-37, 'credits');
credits.frame = 0;
credits.fixedToCamera = true;
credits.inputEnabled = true;

credits.events.onInputOver.add(function () {
  credits.frame = 1;
});
credits.events.onInputOut.add(function (){
  credits.frame = 0;
});
credits.events.onInputUp.add(function () {
    pausa=true;
    copertina.kill();
    play.kill();
    credits.kill();
    story.kill();
});

story = game.add.sprite(1024-30-116.5, 738-37-30-32, 'story');
story.frame = 0;
story.fixedToCamera = true;
story.inputEnabled = true;

story.events.onInputOver.add(function () {
  story.frame = 1;
});
story.events.onInputOut.add(function (){
  story.frame = 0;
});
story.events.onInputUp.add(function () {
    pausa=true;
    copertina.kill();
    play.kill();
    credits.kill();
    story.kill();
    creditsnoi.kill();
    home2.kill();
    scena1.revive();
    scena2.revive();
    scena3.revive();
    scena4.revive();
    scena5.revive();
    dx1.revive();
    sx1.revive();
    dx2.revive();
    sx2.revive();
    dx3.revive();
    sx3.revive();
    dx4.revive();
    sx4.revive();
    sx5.revive();
    playstory.revive();
});

    startTime = game.time.time;


}


function p(pointer) {
  console.log(pointer.event);
}

function update () {

    player.body.gravity.y = 500;

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, fungo);
    game.physics.arcade.collide(player, terreno1);
    game.physics.arcade.collide(player, terreno2);
    game.physics.arcade.collide(fungo, terreno1);
    game.physics.arcade.collide(fungo, terreno2);
    game.physics.arcade.collide(player, bunkerc);
    game.physics.arcade.collide(player, bunkerdx);
    game.physics.arcade.collide(player, bunkersx);
    game.physics.arcade.collide(player, bunkercsx);
    game.physics.arcade.collide(player, bunkercdx);
    game.physics.arcade.collide(player, tunnel);
    game.physics.arcade.collide(player, ziqqurat);
    game.physics.arcade.collide(player, gabbia);
    game.physics.arcade.collide(box, gabbia);
    game.physics.arcade.collide(box, platforms);
    game.physics.arcade.collide(gabbia, pavimento);
    game.physics.arcade.collide(player, platform_move);
    game.physics.arcade.collide(player, platform_move2);
    game.physics.arcade.collide(player, platform_move3);
    game.physics.arcade.collide(player, platform_move4);
    game.physics.arcade.collide(player, platform_move5);
    game.physics.arcade.collide(player, platform_move6);
    game.physics.arcade.collide(player, platform_move7);
    game.physics.arcade.collide(player, platform_move8);
    game.physics.arcade.collide(player, platform_move9);
    game.physics.arcade.collide(player, platform_move10);
    game.physics.arcade.collide(player, platform_move11);
    game.physics.arcade.collide(player, platform_move12);
    game.physics.arcade.collide(player, platform_move13);
    game.physics.arcade.collide(player, platform_move14);
    game.physics.arcade.collide(player, platform_move15);
    game.physics.arcade.collide(player, platforms2);
    game.physics.arcade.collide(player, siepi);
    game.physics.arcade.collide(player, box, checkpoint_0);
    game.physics.arcade.collide(player, fungo2);
    game.physics.arcade.collide(platforms, box);
    game.physics.arcade.collide(platforms, muro);
    game.physics.arcade.collide(pavimento, player);
    game.physics.arcade.collide(pavimento, box);
    game.physics.arcade.collide(terreno1, fungo2);
    game.physics.arcade.collide(terreno2, fungo2);
    game.physics.arcade.collide(player, muro);
    game.physics.arcade.collide(player, muro1);
    game.physics.arcade.collide(muro, box);
    game.physics.arcade.collide(fenicottero_rosa1, terreno1);
    game.physics.arcade.collide(fenicottero_rosa1, pavimento);
    game.physics.arcade.collide(fenicottero_rosa2, terreno1);
    game.physics.arcade.collide(fenicottero_rosa2, pavimento);
    game.physics.arcade.collide(fenicottero_rosa2, platforms2);
    game.physics.arcade.collide(fenicottero_rosa3, terreno1);
    game.physics.arcade.collide(fenicottero_rosa3, bunkerc);
    game.physics.arcade.collide(fenicottero_rosa3, bunkercsx);
    game.physics.arcade.collide(fenicottero_rosa3, bunkercdx);
    game.physics.arcade.collide(fenicottero_rosa4, platform_move7);
    game.physics.arcade.collide(fenicottero_rosa5, platforms2);
    game.physics.arcade.collide(fenicottero_rosa7, platforms2);
    game.physics.arcade.collide(fenicottero_rosa8, platforms2);
    game.physics.arcade.collide(fenicottero_rosa9, platforms2);
    game.physics.arcade.collide(fenicottero_rosa10, terreno2);
    game.physics.arcade.collide(negative, terreno1);
    game.physics.arcade.collide(negative2, terreno1);
    game.physics.arcade.collide(negative3, platforms2);
    game.physics.arcade.collide(negative4, terreno1);
    game.physics.arcade.collide(negative4, terreno2);
    game.physics.arcade.collide(negative5, terreno1);
    game.physics.arcade.collide(negative5, terreno2);
    game.physics.arcade.collide(negative6, ziqqurat);
    game.physics.arcade.collide(negative7, ziqqurat);
    game.physics.arcade.collide(negative8, ziqqurat);
    game.physics.arcade.collide(negative9, ziqqurat);
    game.physics.arcade.collide(negative10, ziqqurat);
    game.physics.arcade.collide(negative11, platform_move8);
    game.physics.arcade.collide(negative12, platform_move12);
    game.physics.arcade.collide(pzgrosso, platforms2);


    game.physics.arcade.overlap(player, negative, kill);
    game.physics.arcade.overlap(player, negative2, kill);
    game.physics.arcade.overlap(player, negative3, kill);
    game.physics.arcade.overlap(player, negative4, kill);
    game.physics.arcade.overlap(player, negative5, kill);
    game.physics.arcade.overlap(player, negative6, kill);
    game.physics.arcade.overlap(player, negative7, kill);
    game.physics.arcade.overlap(player, negative8, kill);
    game.physics.arcade.overlap(player, negative9, kill);
    game.physics.arcade.overlap(player, negative10, kill);
    game.physics.arcade.overlap(player, negative11, kill);
    game.physics.arcade.overlap(player, negative12, kill);
    game.physics.arcade.overlap(player, roseto, kill2);
    game.physics.arcade.overlap(player, roseto2, kill2);
    game.physics.arcade.overlap(player, roseto3, kill2);
    game.physics.arcade.overlap(player, rosetoalto, kill2);
    game.physics.arcade.overlap(player, rosa, checkpoint_1);
    game.physics.arcade.overlap(player, rosa1, checkpoint_2);
    game.physics.arcade.overlap(player, rosa2, checkpoint_3);
    game.physics.arcade.overlap(player, rosa3, checkpoint_4);
    game.physics.arcade.overlap(player, rosa4, checkpoint_5);
    game.physics.arcade.overlap(player, checkpoint_fin, checkpoint_end);
    game.physics.arcade.overlap(player, fenicottero_rosa1, prendi_fenicottero1);
    game.physics.arcade.overlap(player, fenicottero_rosa2, prendi_fenicottero2);
    game.physics.arcade.overlap(player, fenicottero_rosa3, prendi_fenicottero3);
    game.physics.arcade.overlap(player, fenicottero_rosa4, prendi_fenicottero4);
    game.physics.arcade.overlap(player, fenicottero_rosa5, prendi_fenicottero5);
    game.physics.arcade.overlap(player, fenicottero_rosa6, prendi_fenicottero6);
    game.physics.arcade.overlap(player, fenicottero_rosa7, prendi_fenicottero7);
    game.physics.arcade.overlap(player, fenicottero_rosa8, prendi_fenicottero8);
    game.physics.arcade.overlap(player, fenicottero_rosa9, prendi_fenicottero9);
    game.physics.arcade.overlap(player, fenicottero_rosa10, prendi_fenicottero10);
    game.physics.arcade.overlap(player, pzgrosso, grosso);
    game.physics.arcade.overlap(player, pzgrosso1, grosso);
    game.physics.arcade.overlap(player, pzgrosso2, grosso);
    game.physics.arcade.overlap(player, pzpiccolo, piccolo);
    game.physics.arcade.overlap(player, pzpiccolo1, piccolo);

    player.body.velocity.x = 0;
    box.body.velocity.x = 0;
    fungo2.body.velocity.x = 0;
    fungo.body.velocity.x = 0;
    platform_move.body.velocity.x = 150*move;
    platform_move2.body.velocity.x = 150*move2;
    platform_move3.body.velocity.y = 150*move2;
    platform_move4.body.velocity.y = 150*move3;
    platform_move5.body.velocity.x = 150*move3;
    platform_move5.body.velocity.y = 150*move4;
    platform_move6.body.velocity.y = 150*move5;
    platform_move7.body.velocity.x = 350*move6;
    platform_move8.body.velocity.y = 150*move13;
    platform_move9.body.velocity.x = 150*move15;
    platform_move10.body.velocity.x = 400*move16;
    platform_move11.body.velocity.x = 300*move17;
    platform_move12.body.velocity.y = 300*move18;
    platform_move13.body.velocity.x = 300*move19;
    platform_move14.body.velocity.y = 300*move20;
    platform_move15.body.velocity.y = 300*move21;
    negative.body.velocity.x = 100*move;
    negative2.body.velocity.x = 90*move;
    negative4.body.velocity.x = 100*move;
    negative6.body.velocity.x = 150*move8;
    negative7.body.velocity.x = 150*move9;
    negative8.body.velocity.x = 150*move10;
    negative9.body.velocity.x = 150*move11;
    negative10.body.velocity.x = 150*move12;
    negative11.body.velocity.x = 0;
    fenicottero_rosa1.body.velocity.x = 100*bad_move;
    fenicottero_rosa6.body.velocity.x = 300*move_fen;
    fenicottero_rosa6.body.velocity.y = 300*move_fen2;


    conf.body.x=player.body.x+30;
    conf.body.y=player.body.y+15;


    fenicottero_rosa10.body.velocity.y= 0;
  if(player.body.x>18200 && fenicottero_rosa10.body.y>800){
              fenicottero_rosa10.body.velocity.y=-300;
              volo=true;
            }else{
              fenicottero_rosa10.body.velocity.y=0;
              fenicottero_rosa10.body.gravity.y=0;
            }
            if (volo==true && player.body.x>18700 && player.body.y<1100) {
              if(fenicottero_rosa10.body.y>500)
              fenicottero_rosa10.body.velocity.y=-300;
              console.log(fenicottero_rosa10.body.y);
            }
            if(volo==true && player.body.x<18100){
              if(fenicottero_rosa10.body.y<1400)
              fenicottero_rosa10.body.velocity.y=300;

            }
            if (fenicottero_rosa10.body.y<1399 && player.body.x<18500) {
              fenicottero_rosa10.animations.play('volol');
            }
            if (fenicottero_rosa10.body.y>1399) {
              fenicottero_rosa10.frame = 0;
            }
            if (player.body.x>18500){
              fenicottero_rosa10.animations.play('volor');
            }

            if(player.body.x<1900){
              fenicottero_rosa1.animations.play('saltol');
            }
            if(player.body.x>1900){
              fenicottero_rosa1.animations.play('saltor');
            }
            if(player.body.x<3500){
              fenicottero_rosa2.animations.play('saltol');
            }
            if(player.body.x>3500){
              fenicottero_rosa1.animations.play('saltor');
            }
            if(player.body.x<4240){
              fenicottero_rosa3.animations.play('saltol');
            }
            if(player.body.x>4240){
              fenicottero_rosa3.animations.play('saltor');
            }
            if(player.body.x<6005){
              fenicottero_rosa4.animations.play('saltol');
            }
            if(player.body.x>6005){
              fenicottero_rosa4.animations.play('saltor');
            }
            if(player.body.x<8780){
              fenicottero_rosa5.animations.play('saltol');
            }
            if(player.body.x>8780){
              fenicottero_rosa5.animations.play('saltor');
            }
            if(player.body.x<12300){
              fenicottero_rosa7.animations.play('saltol');
            }
            if(player.body.x>12300){
              fenicottero_rosa7.animations.play('saltor');
            }
            if(player.body.x<14850){
              fenicottero_rosa8.animations.play('saltol');
            }
            if(player.body.x>14850){
              fenicottero_rosa8.animations.play('saltor');
            }
            if(player.body.x<16690){
              fenicottero_rosa9.animations.play('saltol');
            }
            if(player.body.x>16690){
              fenicottero_rosa9.animations.play('saltor');
            }



//_______________PLATFORM CHE SI MUOVONO______________________________________//
    if(platform_move.x < 100)
    move = 1
    if(platform_move.x > 400)
    move = -1

    if(platform_move2.x < 2850)
    move2 = 1
    if(platform_move2.x > 3350)
    move2 = -1

    if(platform_move3.y < 759)
    move2 = 1
    if(platform_move3.y > 1200)
    move2 = -1

    if(platform_move4.y < 500)
    move3 = 1
    if(platform_move4.y > 2000)
    move3 = -1

    if(platform_move5.y < 700){
    move4 = 1;
    move3 = -1;
  }
    if(platform_move5.y > 950){
    move4 = -1;
    move3 = 1;
  }
  if(platform_move6.y < 200){
  move5= 1;
  }
  if(platform_move6.y > 700){
  move5 = -1;
  }

  if(platform_move7.x < 5930){
  move6= 1;
  }
  if(platform_move7.x > 6280){
  move6 = -1;
  }

  if(platform_move8.y > 972){
    move13=-1;
  }
  if(platform_move8.y < 572){
    move13=+1;
  }

  if(platform_move9.x < 14300) {
    move15=1;
  }
  if(platform_move9.x > 14700) {
    move15=-1;
  }

  if(platform_move10.x < 16050){
    move16= 1;
  }
  if(platform_move10.x > 16050+400){
    move16 = -1;
  }

  if(platform_move11.x < 18900){
  move17= 1;
  }
  if(platform_move11.x > 19100){
  move17 = -1;
  }
  if(platform_move12.y < 650){
  move18= 1;
  }
  if(platform_move12.y > 1000){
  move18 = -1;
  }
  if(platform_move13.x < 18500){
  move19= 1;
  }
  if(platform_move13.x > 18800){
  move19 = -1;
  }
  if(platform_move14.y < 350){
  move20= 1;
  }
  if(platform_move14.y > 755){
  move20 = -1;
  }
  if(platform_move15.y < 945){
  move21= 1;
  }
  if(platform_move15.y > 1350){
  move21 = -1;
  }

//_______________FINE PLATFORM CHE SI MUOVNO__________________________________//

//if (player.body.x> 10200 && player.body.x<10300 && player.body.y>400 && player.body.y<1500){
  //player.body.velocity.y = -500;}
  if(player.body.touching.down && fungo.body.touching.up){
    player.body.velocity.y = -1000;
  }
//____________________________________________________________________________//

    if(player.body.x>7600 && player.body.x<8200){
    follow=true
  }
    else if (player.body.x<7600 || player.body.x>8200){
      follow= false;
      negative5.body.velocity.x=0;
    }

    if(follow){
      negative5.body.velocity.x =player.x-negative5.x;
    }

//_______________NEMICI CHE SI MUOVONO________________________________________//
    if(negative.x < 1450){
    move = 1;
    negative.animations.play('walk');
    }
    if(negative.x > 1850){
    move = -1
    negative.animations.play('walk');
    }

    if(negative2.x < 1750+800){
    move = 1;
    negative2.animations.play('walk');
    }
    if(negative2.x > 2150+800){
    move = -1
    negative2.animations.play('walk');
    }

    if(negative4.x < 7700){
    move7 = 1;
    negative4.animations.play('walk');
    }
    if(negative4.x > 7400){
    move7 = -1
    negative4.animations.play('walk');
    }

    if(negative6.x<11900){
      move8 = 1;
      negative6.animations.play('walk');
    }
    if(negative6.x>12770){
      move8 = -1;
      negative6.animations.play('walk');
    }

    if(negative7.x<11900){
      move9 = +1;
      negative7.animations.play('walk');
    }
    if(negative7.x>12770){
      move9 = -1;
      negative7.animations.play('walk');
    }

    if(negative8.x<11750){
      move10 = +1;
      negative8.animations.play('walk');
    }
    if(negative8.x>12220){
      move10 = -1;
      negative8.animations.play('walk');
    }

    if(negative9.x<12430){
      move11 = +1;
      negative9.animations.play('walk');
    }
    if(negative9.x>12910){
      move11 = -1;
      negative9.animations.play('walk');
    }

    if(negative10.x<11570){
      move12 = +1;
      negative10.animations.play('walk');
    }
    if(negative10.x>13000){
      move12 = -1;
      negative10.animations.play('walk');
    }

    //if(negative11.x<14150){
    //  move14 = 1;
    //  negative11.animations.play('walk');
    //}
    //if(negative11.x>14300){
    //  move14 = -1;
    //  negative11.animations.play('walk');
    //  }

//_______________FINE NEMICI CHE SI MUOVONO___________________________________//


    if (Math.random()<0.05 && fenicottero_rosa1.body.onFloor() || fenicottero_rosa1.body.touching.down){
    fenicottero_rosa1.body.velocity.y = -350*Math.random();
    }
    if(fenicottero_rosa1.x < 1900 && (fenicottero_rosa1.body.onFloor() || fenicottero_rosa1.body.touching.down))
    bad_move = 1;
    if(fenicottero_rosa1.x > 2000 && (fenicottero_rosa1.body.onFloor() || fenicottero_rosa1.body.touching.down))
    bad_move = -1;

    if (Math.random()<0.05 && fenicottero_rosa2.body.onFloor() || fenicottero_rosa2.body.touching.down){
    fenicottero_rosa2.body.velocity.y = -350*Math.random();
    }
    if (Math.random()<0.05 && fenicottero_rosa3.body.onFloor() || fenicottero_rosa3.body.touching.down){
    fenicottero_rosa3.body.velocity.y = -350*Math.random();
    }
    if (Math.random()<0.05 && fenicottero_rosa5.body.onFloor() || fenicottero_rosa5.body.touching.down){
    fenicottero_rosa5.body.velocity.y = -350*Math.random();
    }
    if (Math.random()<0.05 && fenicottero_rosa7.body.onFloor() || fenicottero_rosa7.body.touching.down){
    fenicottero_rosa7.body.velocity.y = -350*Math.random();
    }
    if (Math.random()<0.05 && fenicottero_rosa8.body.onFloor() || fenicottero_rosa8.body.touching.down){
    fenicottero_rosa8.body.velocity.y = -350*Math.random();
    }
    if (Math.random()<0.05 && fenicottero_rosa9.body.onFloor() || fenicottero_rosa9.body.touching.down){
    fenicottero_rosa9.body.velocity.y = -350*Math.random();
    }

//_______________FENICOTTERO CHE SVOLAZZA_____________________________________//
    if (Math.random()<0.05 && fenicottero_rosa6.body.x<10800) {
      move_fen = 1;
      fenicottero_rosa6.animations.play('volor');
    }
    if (Math.random()<0.05 && fenicottero_rosa6.body.x>11100) {
      move_fen = -1;
      fenicottero_rosa6.animations.play('volol');
    }
    if (Math.random()<0.05 && fenicottero_rosa6.body.y<500) {
      move_fen2 = 1;
    }
    if (Math.random()<0.05 && fenicottero_rosa6.body.y>700) {
      move_fen2 = -1;
    }
//_______________FINE FENICOTTERO CHE SVOLAZZA________________________________//


if (cursors.left.isDown && pausa==false)
{
    if(inverti==false){
    player.body.velocity.x = -250;
    going_left = true;
  }else{
    player.body.velocity.x = 250;
    going_left = false;
  }
}
else if (cursors.right.isDown && pausa==false)
{
    if(inverti==false){
    player.body.velocity.x = 250;
    going_left = false;
  }else{
    player.body.velocity.x = -250;
    going_left = true;
  }
}

if (cursors.left.isDown && player.body.touching.down && pausa==false)
{
    if(inverti==false){
    player.animations.play('left');
  } else {

    player.animations.play('right');
  }
}
else if (cursors.right.isDown && player.body.touching.down && pausa==false)
{
    if(inverti==false){
    player.animations.play('right');
  }else{

    player.animations.play('left');
  }
}
else {
  player.animations.stop();
}

    if((pozione==false && player.body.touching.up && bunkerdx.body.touching.down) ||(pozione==false && player.body.touching.up && bunkercdx.body.touching.down) || (pozione==false && player.body.touching.up && bunkersx.body.touching.down)||(pozione==false && player.body.touching.up && bunkercsx.body.touching.down)){
      vita=vita-1;
      if(vita>0){
      if(vita==2)
      vita3.frame = 1;
      if(vita==1){
      vita3.frame=1;
      vita2.frame = 1;}
      console.log("move to ", checkpoint_x, checkpoint_y)
      player.x = checkpoint_x
      player.y = checkpoint_y
      normale()
      normale1()
    } else {
      player.kill();
      vita1.frame= 1;
      vita2.frame = 1;
      vita3.frame = 1;
      perso.revive();
      playagainperso.revive();
    }

    }

    if((pozione==false && player.body.touching.up && tunnelmorte.body.touching.down)){
      vita=vita-1;
      if(vita>0){if(vita==2)
      vita3.frame = 1;
      if(vita==1){
      vita3.frame=1;
      vita2.frame = 1;}
      console.log("move to ", checkpoint_x, checkpoint_y)
      player.x = checkpoint_x
      player.y = checkpoint_y
      normale()
      normale1()
    } else {
      player.kill();
      vita1.frame= 1;
      vita2.frame = 1;
      vita3.frame = 1;
      perso.revive();
      playagainperso.revive();
    }

    }

    if (jumpButton.isDown && (player.body.onFloor() || (player.body.touching.down))&& pausa==false)
    {
        player.body.velocity.y = -400-100*saltone+180*saltino;


    }

    if(player.body.x>1280 && player.body.x<1350 && player.body.y<1300||player.body.x>14850+328 && player.body.x<14850+378 && player.body.y<1300 ||player.body.x>14850+158&& player.body.x<14850+208 && player.body.y<1300 && player.body.y>800 ){
      saltodellafede=true;
      player.body.velocity.x=0;
      console.log('funziona');
    }else{
      saltodellafede=false;
    }

    if(!player.body.onFloor() && ! player.body.touching.down && saltodellafede==false)
      if(going_left)
        player.animations.play('jumpl');
      else
        player.animations.play('jumpr');

        if(!player.body.onFloor() && ! player.body.touching.down && saltodellafede==true)
          if(going_left)
            player.animations.play('mutandel');
          else
            player.animations.play('mutander');

    if (player.body.touching.down && fungo2.body.touching.up) {
      player.body.velocity.y = -700;//fungo

//_______________SALTI DELLA FEDE________________________________//
    if (play.input.pointerOver())
    {
      play.frame = 1;
    }
    else {
      play.frame = 0;
    }



    }

    if(player.body.x<15300){
      schifo=false;
      console.log('schifo'+schifo);
    }
    if(player.body.x>17900){
      schifo=true;
      console.log('schifo'+schifo);
    }
    if(schifo==false&&inverti==true&&player.body.x<15200){
      inverti=false;
      conf.frame=1;
    }//x della piattaforma che ci sarà per risalire al fenicottero
}




function piccolo (player, pzpiccolo) {

    presa=true;
    pozione=true;
    pzpiccolo.kill();
    if (p1==0) {
      player.addChild(player.pz1);
    } else {
      player.pz1.revive();
    }
    saltino = true;
    player.scale.setTo(0.5);
    game.time.events.add(6000, normale1);
    game.time.events.add(6000, rimettipozione);
}

function checkpoint_0(){

  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");
}

function checkpoint_1(){
  rosa.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

}

function checkpoint_2(){

  rosa1.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

}

function checkpoint_3(){

  rosa2.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

}

function checkpoint_4(){

  rosa3.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

if(schifo==false){

  inverti=true;
  conf.frame=0;
  console.log('conf'+conf.frame);

}
if(schifo==true){
  inverti = false;
  conf.frame=1;
  console.log('conf'+conf.frame);
}


}

function checkpoint_5(){

  rosa4.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

  if(schifo==false){
    inverti=false;
    conf.frame=1;
    console.log('conf'+conf.frame);
  }
  if(schifo==true){
    inverti=true;
    conf.frame=0;
    console.log('conf'+conf.frame);
  }




}
function checkpoint_end(){

  checkpoint_fin.animations.play('frufrured');

  if(fen_presi==10){

    fuoco.revive();
    fuoco2.revive();
    fuoco3.revive();
    fuoco4.revive();
    fuoco5.revive();
    fuoco6.revive();
    fuoco.animations.play('bum');
    fuoco2.animations.play('bum');
    fuoco3.animations.play('bum');
    fuoco4.animations.play('bum');
    fuoco5.animations.play('bum');
    fuoco6.animations.play('bum');
    game.time.events.add(4500, congrat);

  }else{
    scrittaflamingo.revive();
    game.time.events.add(7000, flamingo);
  }
  //rosa2.frame = 1;
  checkpoint_x = player.x;
  checkpoint_y = player.y;
  console.log("checkpointing");

}
function congrat(){
  playagain.revive();
  vinto.revive();
}
function flamingo(){
  scrittaflamingo.kill();
}

function kill (player, negative) {


  if(player.body.touching.down && negative.body.touching.up){
        negative.kill()
        player.body.velocity.y= -100;
      }
        else {
        vita= vita-1;
        if(vita>0){if(vita==2)
        vita3.frame = 1;
        if(vita==1){
        vita3.frame=1;
        vita2.frame = 1;}
        console.log("move to ", checkpoint_x, checkpoint_y)
        player.x = checkpoint_x
        player.y = checkpoint_y
        normale()
        rimettipozione()
        normale1()
      } else {
        if(vita==0){
        player.kill();
        vita1.frame= 1;
        vita2.frame = 1;
        vita3.frame =1;
        perso.revive();
        playagainperso.revive();}
      }
    }
}

function kill2 (player, roseto) {



        vita= vita-1;
        if(vita>0){
        if(vita==2)
        vita3.frame = 1;
        if(vita==1){
        vita3.frame=1;
        vita2.frame = 1;}
        console.log("move to ", checkpoint_x, checkpoint_y)
        player.x = checkpoint_x
        player.y = checkpoint_y
        normale()
        rimettipozione()
        normale1()
      } else {
        if(vita==0){
        player.kill();
        vita1.frame= 1;
        vita2.frame = 1;
        vita3.frame = 1;
        perso.revive();
        playagainperso.revive();}
      }
    }



function prendi_fenicottero1 (player, fenicottero_rosa1) {
  fenicottero_rosa1.kill();
  fen_presi++;
  fenicottero1.frame = 1;
  fenicottero1.alpha=1;
  if(fen_presi==3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero2 (player, fenicottero_rosa2) {
  fenicottero_rosa2.kill();
  fen_presi++;
  fenicottero2.frame = 1;
  fenicottero2.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}
function prendi_fenicottero3 (player, fenicottero_rosa2) {
  fenicottero_rosa3.kill();
  fen_presi++;
  fenicottero3.frame = 1;
  fenicottero3.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}
function prendi_fenicottero4 (player, fenicottero_rosa2) {
  fenicottero_rosa4.kill();
  fen_presi++;
  fenicottero4.frame = 1;
  fenicottero4.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}
function prendi_fenicottero5 (player, fenicottero_rosa2) {
  fenicottero_rosa5.kill();
  fen_presi++;
  fenicottero5.frame = 1;
  fenicottero5.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero6 (player, fenicottero_rosa2) {
  fenicottero_rosa6.kill();
  fen_presi++;
  fenicottero6.frame = 1;
  fenicottero6.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero7 (player, fenicottero_rosa2) {
  fenicottero_rosa7.kill();
  fen_presi++;
  fenicottero7.frame = 1;
  fenicottero7.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero8 (player, fenicottero_rosa2) {
  fenicottero_rosa8.kill();
  fen_presi++;
  fenicottero8.frame = 1;
  fenicottero8.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero9 (player, fenicottero_rosa2) {
  fenicottero_rosa9.kill();
  fen_presi++;
  fenicottero9.frame = 1;
  fenicottero9.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function prendi_fenicottero10 (player, fenicottero_rosa2) {
  fenicottero_rosa10.kill();
  fen_presi++;
  fenicottero10.frame = 1;
  fenicottero10.alpha=1;
  console.log(fen_presi);
  if(fen_presi===3)
  regina_states.frame=3;
  if(fen_presi==6)
  regina_states.frame=1;
  if(fen_presi==9)
  regina_states.frame=0;

}

function grosso (player, pzgrosso) {

  presa= true;
  pozione=true;
  pzgrosso.kill();
  if (p==0) {
    player.addChild(player.pz);
    console.log('hai ragione Alessia')
  } else {
    player.pz.revive();
  }
  saltone = true;
  player.body.velocity.y = -200;
  player.scale.setTo(1.3);
  game.time.events.add(6000, normale);
  game.time.events.add(6000, rimettipozione);

}

function normale () {

  if(presa==true){
  p++;
  } else {
    p=0;
  }

  player.scale.setTo(1);
  if(p>0)
  player.pz.kill();

  saltone = false;
  player.body.velocity.y = 0;
  pozione=false;

  console.log(p)
}


function normale1 () {

  if(presa==true){
  p1++;
  }
  player.scale.setTo(1);
  if(p1>0)
  player.pz1.kill();
  saltino= false;
  player.body.velocity.y = -300;
  pozione=false;


}

function rimettipozione () {
  pzgrosso.reset(1850,1163-26);
  pzgrosso1.reset(9900,1275);
  pzgrosso2.reset(12335,1000-30);
  if(player.body.x>4166 && player.body.x<4425-41){
    pzpiccolo.reset(4240,1443);
  }

  else {
    pzpiccolo.reset(3800,1443);
    pzpiccolo1.reset(8600,1035);
  }
}









function render () {

}
