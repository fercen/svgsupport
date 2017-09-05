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


const svgCurve = "M 7.4575727,89.217058 C 18.254535,104.86736 38.631902,115.29821 46.418058,88.005495 51.559832,69.982101 -8.9114372,49.819194 41.373827,34.720485 c 22.539381,-6.767699 19.600116,81.110175 33.049307,77.947995 9.396851,-2.20939 20.855159,-73.924488 33.176586,-74.638688 12.32143,-0.7143 9.91117,3.877251 24.19688,1.734391 14.28572,-2.14286 -37.114358,46.684255 -21.05693,74.577547 5.17421,8.9881 51.63687,-34.239786 12.41117,-35.267881";
const coilCurve = "M 28.418238,94.520359 C 9.6682386,56.127499 58.953953,23.448929 42.882524,46.841779 26.811095,70.234639 -3.0103329,99.163229 20.918238,107.19893 c 23.928572,8.0357 61.785715,-35.000001 49.464286,-41.250001 -12.321429,-6.25 -18.035714,57.142801 -5.714286,56.428601 12.321429,-0.7143 18.75,-51.428601 33.035715,-53.571461 14.285717,-2.14286 -6.785715,70.892861 13.035717,45.535661 19.82142,-25.357091 34.46428,-84.999951 21.25,-86.785661";

const pathSvg = Snap("#path");
const path = pathSvg.select("path");

let pathStatus = false;

const pathAnimate = function () {
    let target = coilCurve;
    if(pathStatus){
        target = svgCurve;
    }
    path.animate({
        d: target
    }, 2000, mina.elastic, pathAnimate);
    pathStatus = !pathStatus;
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