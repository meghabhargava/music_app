window.onload= function() {
	
	var piano = Synth.createInstrument('piano');

		//-------------------------q-------------
		$("#key_1") .on('click',function(){
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode == 81){
			piano.play('B',4,2);
			
		}
		});
		//----------------------------w-------------
		$("#key_2") .on('click',function(){
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==87){
			piano.play('C',4,2);
		}
		});
		//----------------------------e------------------
		$("#key_3") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==69){
			piano.play('F',4,2);
		}
		});
		//-------------------------------r---------

		$("#key_4") .on('click',function(){
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==82){
			piano.play('A',4,2);
		}
		});
	//-----------------t-----------
		$("#key_5") .on('click',function(){
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==84){
			piano.play('B',4,2);
		}
		});
		//----------------------y--------------
		$("#key_6") .on('click',function(){
			piano.play('D',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==89){
			piano.play('D',4,2);
		}
		});
		//------------------u--------------------
		$("#key_7") .on('click',function(){
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==85){
			piano.play('A',4,2);
		}
		});
		//----------------------i-------------------
		$("#key_8") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==73){
			piano.play('F',4,2);
		}
		});
		//---------------------o---------------------
		$("#key_9") .on('click',function(){
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==79){
			piano.play('B',4,2);
		}
		});
		//---------------------------p------------------

		$("#key_10") .on('click',function(){
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==80){
			piano.play('C',4,2);
		}
		});
		//-----------------[---------------------
		$("#key_11") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==91){
			piano.play('F',4,2);
		}
		});
		//----------------------]------------

		$("#key_12") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==221){
			piano.play('F',4,2);
		}
		});
		//--------------Z-------------------
		$("#key_13") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==90){
			piano.play('F',4,2);
		}
		});
		//---------------------X-----------------------
		$("#key_14") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==88){
			piano.play('F',4,2);
		}
		});
		//------------------------C-----------------
		$("#key_15") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==67){
			piano.play('F',4,2);
		}
		});
		//-----------------------------V-------------------
		$("#key_16") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==86){
			piano.play('F',4,2);
		}
		});
		//---------------------------B---------------
		$("#key_17") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==66){
			piano.play('F',4,2);
		}
		});
		//---------------------------N--------------------
		$("#key_18") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==78){
			piano.play('F',4,2);
		}
		});
		//----------------------M------------------
		$("#key_19") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==77){
			
			console.log('hjeuk');
			piano.play('F',4,2);
		}
		});
		//------------------------------,-----------------
		$("#key_20") .on('click',function(){
			
			console.log(event.keycode);
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==188){
			
			piano.play('F',4,2);
		}
		});
		//--------------------------------.---------------------
		$("#key_21") .on('click',function(){
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event){
		if(event.keyCode==190){
			piano.play('F',4,2);
		}
		});
	
}
 
		