let player = videojs('my-video');
player.ready(function(){
    var settings = this.textTrackSettings;
    settings.setValues({
        "backgroundColor": "#000",
        "backgroundOpacity": "0.5",
        "edgeStyle": "none",
        
    });
    settings.updateDisplay();
});