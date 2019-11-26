$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Lettre E
  context.beginPath();
  context.moveTo(150, 100);
  context.lineTo(150, 400);
  context.moveTo(150, 400);
  context.lineTo(270, 400);
  context.moveTo(150, 260);
  context.lineTo(270, 260);
  context.moveTo(150, 100);
  context.lineTo(270, 100);
  context.strokeStyle = '#0C0C0C';
  context.lineWidth = 5;
  context.stroke();
  // Courbe du "2"
  context.beginPath();
  context.moveTo(270, 100);
  context.quadraticCurveTo(735, -130, 250, 450);
  context.moveTo(250, 450);
  context.lineTo(425, 425);
  context.strokeStyle = '#EA4E1D';
  context.lineWidth = 20;
  context.stroke();
  // Lettre N
  context.beginPath();
  context.moveTo(500, 100);
  context.lineTo(500, 400);
  context.moveTo(750, 100);
  context.lineTo(750, 400);
  context.moveTo(500, 100);
  context.lineTo(750, 400);
  context.strokeStyle = '#0C0C0C';
  context.lineWidth = 5;
  context.stroke();
});
