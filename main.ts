// Rollercoaster

let rollercoaster = Snap("#rollercoaster");

let text = rollercoaster.select("textPath");

let rollercoasterStatus = false;

let rollercoasterAnimate = function() {
    let target = "70%";

    if(rollercoasterStatus){
        target = "30%";
    }

    text.animate({
        startOffset: target
    }, 2000, mina.elastic, rollercoasterAnimate);
    rollercoasterStatus = !rollercoasterStatus;
};

rollercoasterAnimate();


let ants = Snap("#ants");

let antsText = ants.select("text");

let antsAnimate = function () {
    antsText.attr({strokeDashoffset: 0});
    antsText.animate({
        strokeDashoffset: 30
    }, 1000, mina.linear, antsAnimate);
};

antsAnimate();

const polylineSvg = Snap("#polyline");
const polyline = polylineSvg.select("polyline");

let polylineStatus = false;

const polylineAnimate = function () {
    let target = "5,125 75,25 145,125";
    if(polylineStatus){
        target = "25,25 50,150 75,10";
    }
    polyline.animate({
        points: target
    }, 2000, mina.elastic, polylineAnimate);
    polylineStatus = !polylineStatus;
};

polylineAnimate();


const curves = ["m 18.687822,106.56344 c 7.071068,17.67767 19.950513,32.07234 38.385797,29.29442 C 75.508903,133.07994 88.388348,113.38197 85.35789,102.27029 82.327433,91.158614 73.993674,79.54186 58.33631,72.72333 42.678945,65.904801 28.536809,52.267741 32.57742,39.893372 36.61803,27.519004 52.022856,15.902249 65.659916,15.144635 79.296975,14.387021 86.873119,22.215703 94.449263,33.327381"
    , "m 17.080679,16.742011 c 18.856783,0.891956 34.207063,35.97853 39.814368,53.758706 8.078142,25.614937 11.141415,66.769573 11.141415,66.769573 5.309326,0.7814 19.011642,-31.36934 26.72842,-57.939817 6.609318,-22.757266 11.892728,-51.285371 3.883966,-53.722815 -12.453365,-3.790145 -2.832953,13.215622 10.761062,14.536978 5.06563,0.492385 13.53464,-1.500362 32.71792,-18.424398"
    , "M 113.68782,23.527725 C 109.50889,10.848253 86.220422,3.8916674 69.573618,11.929288 48.599015,22.056513 35.652941,39.606759 32.85789,59.948861 c -2.422392,17.629934 -1.7162,69.476099 24.942706,76.881609 6.78789,1.88559 34.472586,-1.56826 42.812534,-17.29424 11.24054,-21.195372 12.71777,-42.521782 9.86821,-46.713023 -2.77927,-4.087854 -52.179647,-7.393219 -37.10351,18.539888"];

const pathSvg = Snap("#jsMorph");
const path = pathSvg.select("path");

let index = 0;

const pathAnimate = function () {
    let target = curves[index];

    path.animate({
        d: target
    }, 750, mina.easeinout, pathAnimate);
    index++;
    index %= curves.length;
};

pathAnimate();


const beatingSvg = Snap("#beating");
const circle = beatingSvg.select("circle");
const image = beatingSvg.select("image");
let beatStatus = false;
const beatAnimate = function () {
    if(!beatStatus){
        circle.animate({
            r: 50
        }, 1000, mina.easeinout);
        image.animate({
            width: 150,
            height: 150,
            x: -75,
            y: -75
        }, 1000, mina.easeinout);
    }else{
        circle.animate({
            r: 37.5
        }, 1000, mina.easeinout);
        image.animate({
            width: 75,
            height: 75,
            x: -37.5,
            y: -37.5
        }, 1000, mina.easeinout);
    }
    beatStatus = ! beatStatus;
};
setInterval(beatAnimate, 1000);

const initializeCanvas = function () {
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    ctx.font = "18px Arial";
    ctx.fillText("Canvas rendering", 5, 30);
    ctx.font = "60px Arial";
    ctx.fillText("OK!", 30, 90);


}();