
 window.onload= function() 
 {
	var piano = Synth.createInstrument('piano');
	//var acoustic = Synth.createInstrument('acoustic');
	


	//----------------WHITE KEYS CODE---------------------
	//------------------------Q-------------------
		
	$("#key_1") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode == 81 || event.keyCode==113)
		{
			piano.play('B',4,2);
			
		}
		});
		
	//---------------------W-------------
		
	$("#key_2") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==87 || event.keyCode==119)
		{
			piano.play('C',4,2);
		}
		});
		
	//-------------------------E------------------
		
	$("#key_3") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==69 || event.keyCode==101)
		{
			piano.play('F',4,2);
		}
		});
		
	//----------------------R--------------

	$("#key_4") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==82 || event.keyCode==114)
		{
			piano.play('A',4,2);
		}
		});
		
	//-----------------T-----------
	
	$("#key_5") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==84 || event.keyCode==116)
		{
			piano.play('B',4,2);
		}
		});
		
	//----------------------Y--------------
		
	$("#key_6") .on('click',function()
		{
			piano.play('D',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==89 || event.keyCode==121)
		{
			piano.play('D',4,2);
		}
		});
		
	//------------------U--------------------
		
	$("#key_7") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==85 || event.keyCode==117)
		{
			piano.play('A',4,2);
		}
		});
		
	//----------------------I-------------------
		
	$("#key_8") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==73 || event.keyCode==105)
		{
			piano.play('F',4,2);
		}
		});
		
	//---------------------O---------------------
		
	$("#key_9") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==79 || event.keyCode==111)
		{
			piano.play('B',4,2);
		}
		});
		
	//---------------------------P------------------

	$("#key_10") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==80 || event.keyCode==112)
		{
			piano.play('C',4,2);
		}
		});
		
	//-----------------[---------------------
		
	$("#key_11") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==91)
		{
			piano.play('F',4,2);
		}
		});
		
	//----------------------]------------

	$("#key_12") .on('click',function()
		{
			piano.play('G',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==93)
		{
			piano.play('G',4,2);
		}
		});
		
	//--------------Z-------------------
		
	$("#key_13") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==90 || event.keyCode==112)
		{
			piano.play('A',4,2);
		}
		});
		
	//---------------------X-----------------------
		
	$("#key_14") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==88 || event.keyCode==120)
		{
			piano.play('C',4,2);
		}
		});
		
	//------------------------C-----------------
		
	$("#key_15") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==67 || event.keyCode==99)
		{
			piano.play('F',4,2);
		}
		});
		
	//-----------------------------V-------------------
		
	$("#key_16") .on('click',function()
		{
			piano.play('D',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==86 || event.keyCode==118)
		{
			piano.play('D',4,2);
		}
		});
		
	//---------------------------B---------------
		
	$("#key_17") .on('click',function()
		{
			piano.play('E',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==66 || event.keyCode==98)
		{
			piano.play('E',4,2);
		}
		});
		
	//---------------------------N--------------------
		
	$("#key_18") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==78 || event.keyCode==110)
		{
			piano.play('B',4,2);
		}
		});
		
	//----------------------M------------------
		
	$("#key_19") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==77 || event.keyCode==109)
		{
			piano.play('C',4,2);
		}
		});
		
	//------------------------------,-----------------
		
	$("#key_20") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==44)
		{
			piano.play('A',4,2);
		}
		});
		
	//--------------------------------.---------------------
		
	$("#key_21") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==46)
		{
			piano.play('C',4,2);
		}
		});
	
	
	//----------------------black keys code---------------
	
	//----------------2-----------
	
	$("#key-1") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==50)
		{
			piano.play('F#',4,2);
		}
		});
	
	//-----------------3---------
	
	$("#key-2") .on('click',function()
		{
			piano.play('C#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==51)
		{
			piano.play('C#',4,2);
		}
		});
	
	//------------------5--------------
	
	$("#key-3") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==53)
		{
			piano.play('D#',4,2);
		}
		});
	
	//------------------6----------------
	
	$("#key-4") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==54)
		{
			piano.play('A#',4,2);
		}
		});
	
	//-----------------7----------------
	
	$("#key-5") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==55)
		{
			piano.play('F#',4,2);
		}
		});
	
	//-------------------9-------------------
	
	$("#key-6") .on('click',function()
		{
			piano.play('G#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==57)
		{			
			piano.play('G#',4,2);
		}
		});
	
	//----------------0-----------
	
	$("#key-7") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==48)
		{
			piano.play('F#',4,2);
		}
		});
	
	//-----------------=------------
	
	$("#key-8") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==61){
			piano.play('D#',4,2);
		}
		});
		
	//-----------------A----------
	
	$("#key-9") .on('click',function()
		{
			piano.play('C#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==65 || event.keyCode==97)
		{
			piano.play('C#',4,2);
		}
		});
		
	//-----------------S-----------------
	
	$("#key-10") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==83 || event.keyCode==115)
		{
			piano.play('F#',4,2);
		}
		});
		
	//----------------F-------------------
		
		$("#key-11") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==70 || event.keyCode==102)
		{
			piano.play('D#',4,2);
		}
		});
		
	//-----------------G-----------------
		
		$("#key-12") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==71 || event.keyCode==103)
		{
			piano.play('A#',4,2);
		}
		});
		
	//-----------------J-----------
		
		$("#key-13") .on('click',function()
		{
			piano.play('G#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==74 || event.keyCode==106)
		{
			piano.play('G#',4,2);
		}
		});
		
	//----------------K---------------
		
		$("#key-14") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==75 || event.keyCode==107)
		{
			piano.play('F#',4,2);
		}
		});
		
	//----------------L-----------------
		
		$("#key-15") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body") .on('keypress',function(event)
		{
		if(event.keyCode==76 || event.keyCode==108)
		{
			piano.play('A#',4,2);
		}
		});
 }