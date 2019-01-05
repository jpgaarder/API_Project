$(document).ready(function () {

    var  bccWebcam = ["http://udottraffic.utah.gov/1_devices/aux16212.jpeg", "http://udottraffic.utah.gov/1_devices/aux16214.jpeg", "http://udottraffic.utah.gov/1_devices/aux16216.jpeg"];
    var bccResortCam = ["https://webcams.solitudemountain.com/mbl.jpg?_ga=2.97001238.82562490.1546581151-733033467.1545066333", "https://webcams.solitudemountain.com/LCMC.jpg?_ga=2.265286150.82562490.1546581151-733033467.1545066333", "https://webcams.solitudemountain.com/rh1.jpg?_ga=2.65065895.82562490.1546581151-733033467.1545066333", "https://webcams.solitudemountain.com/ph.jpg?_ga=2.102684424.82562490.1546581151-733033467.1545066333" ]  
    var bccResortCamText = ["Solitude Moonbeam Lodge", "Solitude Last Chance", "Solitude Roundhouse Cam", "Solitude Powderhorn" ]
    var camIndex = 0;
    var resortcamIndex = 0;
    
    $(".webcams").on("click", function () {
        console.log(event);
        $("#webcams").attr("src", bccWebcam[camIndex]);
    console.log(bccWebcam[camIndex]);
    console.log(camIndex);
    camIndex++;
        if (camIndex === bccWebcam.length) {
            camIndex = 0;
        }
    });
    $(".resortcam").on("click", function () {
        console.log(event);
        $(".resortcam").attr("src", bccResortCam[resortcamIndex]);
        $(".resort-text").html(bccResortCamText[resortcamIndex]);
    console.log(bccWebcam[camIndex]);
    console.log(camIndex);
    resortcamIndex++;
        if (resortcamIndex === bccResortCam.length) {
            resortcamIndex = 0;
        }
    });
    });