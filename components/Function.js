import SoundPlayer from 'react-native-sound-player';
const playSound = (name) => {
    try {
      SoundPlayer.playSoundFile(name, 'wav');
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  }

  const timeDifference = (earlierDate, laterDate) => {
      var oDiff = new Object();
  
      //  Calculate Differences
      //  -------------------------------------------------------------------  //
      var nTotalDiff = laterDate - earlierDate;
  
      oDiff.days = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
      nTotalDiff -= oDiff.days * 1000 * 60 * 60 * 24;
  
      oDiff.hours = Math.floor(nTotalDiff / 1000 / 60 / 60);
      nTotalDiff -= oDiff.hours * 1000 * 60 * 60;
  
      oDiff.minutes = Math.floor(nTotalDiff / 1000 / 60);
      nTotalDiff -= oDiff.minutes * 1000 * 60;
  
      oDiff.seconds = Math.floor(nTotalDiff / 1000);
      //  -------------------------------------------------------------------  //
  
      //  Format Duration
      //  -------------------------------------------------------------------  //
      //  Format Hours
      var hourtext = '00';
      if (oDiff.days > 0){ hourtext = String(oDiff.days);}
      if (hourtext.length == 1){hourtext = '0' + hourtext};
  
      //  Format Minutes
      var mintext = '00';
      if (oDiff.minutes > 0){ mintext = String(oDiff.minutes);}
      if (mintext.length == 1) { mintext = '0' + mintext };
  
      //  Format Seconds
      var sectext = '00';
      if (oDiff.seconds > 0) { sectext = String(oDiff.seconds); }
      if (sectext.length == 1) { sectext = '0' + sectext };
  
      //  Set Duration
      var sDuration = hourtext + ':' + mintext + ':' + sectext;
      oDiff.duration = sDuration;
      //  -------------------------------------------------------------------  //
  
      return oDiff;
  }


export {playSound,timeDifference};