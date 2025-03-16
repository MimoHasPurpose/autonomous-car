const canvas=document.getElementById("myCanvas");
const ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(400,300);
ctx.stroke();
ctx.font = "20px Georgia";
ctx.fillText("Hello World!", 300,300);
ctx.fillText("continued",300,319);