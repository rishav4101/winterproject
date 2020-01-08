var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
console.log(canvas);

//rectangle
/*c.fillStyle='rgba(250, 0, 0, 0.9)';
c.fillRect(770,20,50,800);
c.fillStyle='rgba(0 , 0, 250, 0.9)';
c.fillRect(20,20,50, 800); 
c.fillStyle='rgba(0 , 250, 0, 0.9)';
c.fillRect(20,20,800,50);*/

//Line
/*c.beginPath();
c.moveTo(20, 20);
c.lineTo(410,600);
c.lineTo(820,20);
c.strokeStyle="black";
c.stroke();*/

//Arc / circle
/*c.beginPath();
c.arc(300, 300, 40, 0, Math.PI*2, false);
c.strokeStyle = 'red';
c.stroke();*/

var mouse={
x:undefined,
y:undefined
}

var maxRadius=45;
//var minRadius=8;

var colorArray=[
'#EBEBF2',
'#D00002',
'#D94A3D',
'#D98282',
'#0D0D0D',

];
console.log();

window.addEventListener('mousemove',
function(event)
{
	mouse.x=event.x;
	mouse.y=event.y;
	
})

window.addEventListener('resize',function()
{
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;	

	init();
});


function Circle(x,y,dy,radius)
{
	this.x=x;
	this.y=y;
	//this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color= colorArray[Math.floor(Math.random() * colorArray.length)]
	this.draw=function()
	{
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		//var d="#"+((1<<24)*Math.random()|0).toString(16);
		
		/*c.strokeStyle = ;
		c.stroke();*/
		c.fillStyle=this.color;
		c.fill();

	}
	this.update=function()
	{
		/*if(this.x+this.radius>innerWidth || this.x-this.radius <0)
		{ 
  			 this.dx=-this.dx;
		}*/
		if(this.y+this.radius>innerHeight || this.y-this.radius<0 || this.dy==0 )			
		{ 
  			 this.dy=-this.dy;
	        }
		//this.x+=this.dx;
		this.y+=(this.dy=this.dy+0.3);
                if(this.dy<0)
                this.y+=(this.dy=this.dy+0.5);
		//interactivity
		/*if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50 && this.radius<maxRadius)
		{
			this.radius++;
		}
		else if(this.radius>this.minRadius)
		{
			this.radius--;
		}*/
		this.draw();
	}
}


var circleArray=[];
for( var i=0; i<200; i++)
{
        
	var radius=Math.random()*2 +20;
	var x=Math.random()*(innerWidth-radius*2)+radius;
	var y=Math.random()*(innerHeight-radius*2)+radius;
	//var dx=(Math.random()-0.5)*6;
	var dy=5;
	circleArray.push(new Circle(x,y,dy,radius));
}

function init()
{
circleArray=[];

for( var i=0; i<200; i++)
{
        
	var radius=Math.random()*2 +20;
	var x=Math.random()*(innerWidth-radius*2)+radius;
	var y=Math.random()*(innerHeight-radius*2)+radius;
	//var dx=(Math.random()-0.5)*6;
	var dy=10;
	circleArray.push(new Circle(x,y,dy,radius));
}	
}

function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	for( var i=0; i< circleArray.length; i++)
	{
		circleArray[i].update();
	}
}
animate();

//for creating numerous shapes use for loop...
/*for(var i=0;i<60;i++)
{
var x=Math.random()*window.innerWidth;
var y=Math.random()*window.innerHeight;
//random colour generator
var d="#"+((1<<24)*Math.random()|0).toString(16);
c.beginPath();
c.arc(x, y, 40, 0, Math.PI*2, false);
c.strokeStyle = d;
c.stroke();
}*/



