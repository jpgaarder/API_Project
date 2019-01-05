$(document).ready(function () {

var  bccWebcam = ["http://udottraffic.utah.gov/1_devices/aux16212.jpeg", "http://udottraffic.utah.gov/1_devices/aux16214.jpeg", "http://udottraffic.utah.gov/1_devices/aux16216.jpeg"];
var lccWebcam = ["http://udottraffic.utah.gov/1_devices/aux16265.jpeg", "http://udottraffic.utah.gov/1_devices/aux16267.jpeg", "http://udottraffic.utah.gov/1_devices/aux16269.jpeg"];
var lccWebcamtext = [];
var lccResortCam = ["https://media.alta.com/resources/mtncam/Superior.jpg", "https://media.alta.com/resources/mtncam/Highrustler.jpg", "https://media.alta.com/resources/mtncam/Greeley.jpg", "https://media.alta.com/resources/mtncam/Devilscastle.jpg", "https://media.alta.com/resources/mtncam/sugar_peak.jpg", "https://media.alta.com/resources/mtncam/collins_dtc.jpg", "https://media.alta.com/resources/mtncam/Albion.jpg"];
var lccResortCamText = ["Mount Superior Mountain Cam", "High Rustler Mountain Cam", "East Greeley Mountain Cam", "Devil’s Castle Mountain Cam", "Sugarloaf Peak Mountain Cam", "Salt Lake Valley", "Albion Basin Mountain Cam"];
var camIndex = 0;
var resortcamIndex = 0;

$(".webcams").on("click", function () {
    console.log(event);
    $("#webcams").attr("src", lccWebcam[camIndex]);
console.log(lccWebcam[camIndex]);
console.log(camIndex);
camIndex++;
    if (camIndex === lccWebcam.length) {
        camIndex = 0;
    }
});
$(".resortcam").on("click", function () {
    console.log(event);
    $(".resortcam").attr("src", lccResortCam[resortcamIndex]);
    $(".resort-text").html(lccResortCamText[resortcamIndex]);
console.log(lccWebcam[camIndex]);
console.log(camIndex);
resortcamIndex++;
    if (resortcamIndex === lccResortCam.length) {
        resortcamIndex = 0;
    }
});
});