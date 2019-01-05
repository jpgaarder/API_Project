$(document).ready(function () {

    var pcRoadcam = ["http://udottraffic.utah.gov/1_devices/RWIS%20Parleys-Summit-all.gif", "http://udottraffic.utah.gov/1_devices/aux9236.jpeg", "http://udottraffic.utah.gov/1_devices/SR-224-MP-8-all.gif?rand=0.21056954796652083", "http://udottraffic.utah.gov/1_devices/aux15874.jpeg"];
    var pcRoadcamText = ["Parleys Summit", "SR 224 Kimball Junction", "SR 224 @ Canyons", "Old Town Park City"]
    var pcResortcam = ["https://timecam.tv/mediablock/timestreams/vailresort/canyons-snow-stake-cam~640/hour/2019_01_04_07/canyons-snow-stake-cam~640_2019_01_04_07_00_00_00.jpg", "https://timecam.tv/mediablock/timestreams/vailresort/park-city-resort~640/hour/2019_01_04_20/park-city-resort~640_2019_01_04_20_00_00_00.jpg", "https://b7.hdrelay.com/camera/d4d8b786-d517-4069-bb09-ccc679b553a5/snapshot"]
    var pcResortcamText = ["Canyons Snow Board", "PCMR Snow Board", "Park City"]
    var camIndex = 0;
    var resortcamIndex = 0;

    $(".webcams").on("click", function () {
        $(".webcams").attr("src", pcRoadcam[camIndex]);
        $(".roadcam-text").html(pcRoadcamText[camIndex]);
        camIndex++;
        if (camIndex === pcRoadcam.length) {
            camIndex = 0;
        }
    });
    $(".resortcam").on("click", function () {
        $(".resortcam").attr("src", pcResortcam[resortcamIndex]);
        $(".resort-text").html(pcResortcamText[resortcamIndex]);
        resortcamIndex++;
        if (resortcamIndex === pcResortCam.length) {
            resortcamIndex = 0;
        }
    });
});