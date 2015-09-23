function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  var clickedTime; var createdTime; var reactionTime;

  Date.now();

  function makeSquare() {

    createdTime=Date.now();

    var time=Math.random();

    time=time*3000;

    setTimeout(function() {

      if (Math.random()>0.5) {

      document.getElementById("square").style.borderRadius="100px";

    } else {

      document.getElementById("square").style.borderRadius="0";

    }

      var top=Math.random();

      top=top*300

      var left=Math.random();

      left=left*300

      document.getElementById("square").style.top=top+"px";

      document.getElementById("square").style.left=left+"px";


      document.getElementById("square").style.backgroundColor=getRandomColor();

      document.getElementById("square").style.display="block";

      createdTime=Date.now();

    }, time);
  }

  document.getElementById("square").onclick=function() {

    clickedTime=Date.now();

    reactionTime= (clickedTime-createdTime)/1000;

    document.getElementById("time").innerHTML=reactionTime;

    this.style.display="none";

    makeSquare();
  }

  makeSquare();
