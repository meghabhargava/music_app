
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
		$("body").keypress(function(event)
		{
		if(event.keyCode == 81 || event.keyCode==113)
		{
			piano.play('B',4,2);
			$("#key_1").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
		if(event.keyCode == 81 || event.keyCode==113)
		{
			$("#key_1").css("background-color","white");
		}
		});
		
	//---------------------W-------------
		
	$("#key_2") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode == 87 || event.keyCode==119)
		{
			piano.play('C',4,2);
			$("#key_2").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
		if(event.keyCode == 87 || event.keyCode==119)
		{
			$("#key_2").css("background-color","white");
		}
		});
		
	//-------------------------E------------------
		
	$("#key_3") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==69 || event.keyCode==101)
		{
			piano.play('F',4,2);
			$("#key_3").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
		if(event.keyCode==69 || event.keyCode==101)
		{
			$("#key_3").css("background-color","white");
		}
		});
		
	//----------------------R--------------

	$("#key_4") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==82 || event.keyCode==114)
		{
			piano.play('A',4,2);
			$("#key_4").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==82 || event.keyCode==114)
		{
			$("#key_4").css("background-color","white");
		}
		});
		
	//-----------------T-----------
	
	$("#key_5") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==84 || event.keyCode==116)
		{
			piano.play('B',4,2);
			$("#key_5").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==84 || event.keyCode==116)
		{
			$("#key_5").css("background-color","white");
		}
		});
		
	//----------------------Y--------------
		
	$("#key_6") .on('click',function()
		{
			piano.play('D',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==89 || event.keyCode==121)
		{
			piano.play('D',4,2);
			$("#key_6").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==89 || event.keyCode==121)
		{
			$("#key_6").css("background-color","white");
		}
		});
		
	//------------------U--------------------
		
	$("#key_7") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==85 || event.keyCode==117)
		{
			piano.play('A',4,2);
			$("#key_7").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==85 || event.keyCode==117)
		{
			$("#key_7").css("background-color","white");
		}
		});
		
	//----------------------I-------------------
		
	$("#key_8") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==73 || event.keyCode==105)
		{
			piano.play('F',4,2);
			$("#key_8").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==73 || event.keyCode==105)
		{
			$("#key_8").css("background-color","white");
		}
		});
		
	//---------------------O---------------------
		
	$("#key_9") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==79 || event.keyCode==111)
		{
			piano.play('B',4,2);
			$("#key_9").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==79 || event.keyCode==111)
		{
			$("#key_9").css("background-color","white");
		}
		});
		
	//---------------------------P------------------

	$("#key_10") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==80 || event.keyCode==112)
		{
			piano.play('C',4,2);
			$("#key_10").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==80 || event.keyCode==112)
		{
			$("#key_10").css("background-color","white");
		}
		});
		
	//-----------------[---------------------
		
	$("#key_11") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==91)
		{
			piano.play('F',4,2);
			$("#key_11").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==91)
		{
			$("#key_11").css("background-color","white");
		}
		});
		
	//----------------------]------------

	$("#key_12") .on('click',function()
		{
			piano.play('G',4,2);
		});
		$("body").keypress(function(event)	
		{
		if(event.keyCode==93)
		{
			piano.play('G',4,2);
			$("#key_12").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==93)
		{
			$("#key_12").css("background-color","white");
		}
		});
		
	//--------------Z-------------------
		
	$("#key_13") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==90 || event.keyCode==122)
		{
			piano.play('A',4,2);
			$("#key_13").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==90 || event.keyCode==122)
		{
			$("#key_13").css("background-color","white");
		}
		});
		
	//---------------------X-----------------------
		
	$("#key_14") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==88 || event.keyCode==120)
		{
			piano.play('C',4,2);
			$("#key_14").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==88 || event.keyCode==120)
		{
			$("#key_14").css("background-color","white");
		}
		});
		
	//------------------------C-----------------
		
	$("#key_15") .on('click',function()
		{
			piano.play('F',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==67 || event.keyCode==99)
		{
			piano.play('F',4,2);
			$("#key_15").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==67 || event.keyCode==99)
		{
			$("#key_15").css("background-color","white");
		}
		});
		
	//-----------------------------V-------------------
		
	$("#key_16") .on('click',function()
		{
			piano.play('D',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==86 || event.keyCode==118)
		{
			piano.play('D',4,2);
			$("#key_16").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==86 || event.keyCode==118)
		{
			$("#key_16").css("background-color","white");
		}
		});
		
	//---------------------------B---------------
		
	$("#key_17") .on('click',function()
		{
			piano.play('E',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==66 || event.keyCode==98)
		{
			piano.play('E',4,2);
			$("#key_17").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==66 || event.keyCode==98)
		{
			$("#key_17").css("background-color","white");
		}
		});
		
	//---------------------------N--------------------
		
	$("#key_18") .on('click',function()
		{
			piano.play('B',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==78 || event.keyCode==110)
		{
			piano.play('B',4,2);
			$("#key_18").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==78 || event.keyCode==110)
		{
			$("#key_18").css("background-color","white");
		}
		});
		
	//----------------------M------------------
		
	$("#key_19") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==77 || event.keyCode==109)
		{
			piano.play('C',4,2);
			$("#key_19").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==77 || event.keyCode==109)
		{
			$("#key_19").css("background-color","white");
		}
		});
		
	//------------------------------,-----------------
		
	$("#key_20") .on('click',function()
		{
			piano.play('A',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==44)
		{
			piano.play('A',4,2);
			$("#key_20").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==44)
		{
			$("#key_20").css("background-color","white");
		}
		});
		
	//--------------------------------.---------------------
		
	$("#key_21") .on('click',function()
		{
			piano.play('C',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==46)
		{
			piano.play('C',4,2);
			$("#key_21").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode == 46)
		{
			$("#key_21").css("background-color","white");
		}
		});
	
	
	//----------------------black keys code---------------
	
	//----------------2-----------
	
	$("#key-1") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==50)
		{
			piano.play('F#',4,2);
			$("#key-1").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==50)
		{
			$("#key-1").css("background-color","black");
		}
		});
	
	//-----------------3---------
	
	$("#key-2") .on('click',function()
		{
			piano.play('C#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==51)
		{
			piano.play('C#',4,2);
			$("#key-2").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==51)
		{
			$("#key-2").css("background-color","black");
		}
		});
	
	//------------------5--------------
	
	$("#key-3") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==53)
		{
			piano.play('D#',4,2);
			$("#key-3").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==53)
		{
			$("#key-3").css("background-color","black");
		}
		});
	
	//------------------6----------------
	
	$("#key-4") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==54)
		{
			piano.play('A#',4,2);
			$("#key-4").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==54)
		{
			$("#key-4").css("background-color","black");
		}
		});
	
	//-----------------7----------------
	
	$("#key-5") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==55)
		{
			piano.play('F#',4,2);
			$("#key-5").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==55)
		{
			$("#key-5").css("background-color","black");
		}
		});
	
	//-------------------9-------------------
	
	$("#key-6") .on('click',function()
		{
			piano.play('G#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==57)
		{			
			piano.play('G#',4,2);
			$("#key-6").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==57)
		{
			$("#key-6").css("background-color","black");
		}
		});
	
	//----------------0-----------
	
	$("#key-7") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==48)
		{
			piano.play('F#',4,2);
			$("#key-7").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==48)
		{
			$("#key-7").css("background-color","black");
		}
		});
	
	//-----------------=------------
	
	$("#key-8") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==61){
			piano.play('D#',4,2);
			$("#key-8").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==61)
		{
			$("#key-8").css("background-color","black");
		}
		});
		
	//-----------------A----------
	
	$("#key-9") .on('click',function()
		{
			piano.play('C#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==65 || event.keyCode==97)
		{
			piano.play('C#',4,2);
			$("#key-9").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==65 || event.keyCode==97)
		{
			$("#key-9").css("background-color","black");
		}
		});
		
	//-----------------S-----------------
	
	$("#key-10") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==83 || event.keyCode==115)
		{
			piano.play('F#',4,2);
			$("#key-10").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==83 || event.keyCode==115)
		{
			$("#key-10").css("background-color","black");
		}
		});
		
	//----------------F-------------------
		
		$("#key-11") .on('click',function()
		{
			piano.play('D#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==70 || event.keyCode==102)
		{
			piano.play('D#',4,2);
			$("#key-11").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==70 || event.keyCode==102)
		{
			$("#key-11").css("background-color","black");
		}
		});
		
	//-----------------G-----------------
		
		$("#key-12") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==71 || event.keyCode==103)
		{
			piano.play('A#',4,2);
			$("#key-12").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==71 || event.keyCode==103)
		{
			$("#key-12").css("background-color","black");
		}
		});
		
	//-----------------J-----------
		
		$("#key-13") .on('click',function()
		{
			piano.play('G#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==74 || event.keyCode==106)
		{
			piano.play('G#',4,2);
			$("#key-13").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==74 || event.keyCode==106)
		{
			$("#key-13").css("background-color","black");
		}
		});
		
	//----------------K---------------
		
		$("#key-14") .on('click',function()
		{
			piano.play('F#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==75 || event.keyCode==107)
		{
			piano.play('F#',4,2);
			$("#key-14").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==75 || event.keyCode==107)
		{
			$("#key-14").css("background-color","black");
		}
		});
		
	//----------------L-----------------
		
		$("#key-15") .on('click',function()
		{
			piano.play('A#',4,2);
		});
		$("body").keypress(function(event)
		{
		if(event.keyCode==76 || event.keyCode==108)
		{
			piano.play('A#',4,2);
			$("#key-15").css("background-color","cadetblue");
		}
		});
		$("body").keyup(function(event)
		{
			if(event.keyCode==76 || event.keyCode==108)
		{
			$("#key-15").css("background-color","black");
		}
		});
 }