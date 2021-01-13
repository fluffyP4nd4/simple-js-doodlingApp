//Initialising the canvas
        var canvas=document.getElementById("canvas");
		var c = canvas.getContext('2d');
		
		let draw= false;
		let coord={x:0,y:0};
		
		//Event Listener for When mouse is being presses or click
		//the co-ordinate at that position is being recorded
		canvas.addEventListener('mousedown',e=>{
			x=e.offsetX;
			y=e.offsetY;
			draw=true;
		});


		//Event Listener for When mouse is being moved
		//the function to draw on canvas is called and also 
		//every time the next co-ordinate is being recorded
		canvas.addEventListener('mousemove',e=>{
			if(draw===true){
				drawLine(c,x,y,e.offsetX,e.offsetY);
				x=e.offsetX;
				y=e.offsetY;
			}
		});

		//Event Listener for When user stop  clicking
		//the draw function of the last co-ordinate before 
		//the user stop clicking is used and then its stops
		window.addEventListener('mouseup',e=>{
			if(draw===true){
				drawLine(c,x,y,e.offsetX,e.offsetY);
				x=0;
				y=0;
				draw=false;
			}
		});


		let clr = document.getElementById('clear');


		//Event Listener for When clear button is click
		//it claer the whole canvas
		clr.addEventListener('click',function(){
			c.clearRect(0,0,canvas.width,canvas.height);
		});


		let color=document.getElementById('color');
		let colr;

		//Event Listener for When the prefered colur is selected
		//for getting the color to doodle
		color.addEventListener('change',e=>{
			colr=e.target.value;
			
		});



		let lwidth=2;
		

		
		//Event Listener for selecting to draw or erase the doodle
		//set different linewidth and color value  accourdingly to each function
		let radio=document.querySelectorAll('input[type=radio][name="choice"]');
		radio.forEach(rad=>rad.addEventListener('change',e=>{
			if(e.target.value==='draw'){
				lwidth=2;
				colr='black';
			}
			if(e.target.value==='erase'){
				lwidth=prompt("Enter the Eraser Size:");
				colr="white";
			}
		}));



		
		//function to draw or doodle on canvas
		function drawLine(c,x1,y1,x2,y2) {
			c.beginPath();
			c.lineWidth=lwidth;
			c.strokeStyle=colr;
			c.moveTo(x1,y1);
			c.lineTo(x2,y2);
			c.stroke();
			c.closePath();
		}
