//---------------loop-------------------
		var currentSongNumber = 1;
		var willLoop = 0;
		var willShuffle = 0;


//----------------------songs details...array of objects----------------------
  var songs = [{
	'name': 'Apne_Apne',
        'artist': 'Sonu Nigam, Jayesh Gandhi, Jaspinder Narula',
        'album': 'Apne',
        'duration': '6:48',
        'fileName': 'song/song1.mp3',
		'image': 'song1.jpg'
    },
    {
        'name': 'Kal ho naa ho',
        'artist': 'Sonu Nigam',
        'album': 'Kal ho naa ho',
        'duration': '5:21',
       'fileName': 'song/song2.mp3',
	   'image': 'song2.jpg'
    },
    {
        'name': 'Purani Jeans',
        'artist': 'Ali Haider',
        'album': 'Mahi',
        'duration': '5:06',
        'fileName': 'song/song3.mp3',
		'image': 'song3.jpg'
    },
    {
        'name': 'Right Now Now',
        'album': 'Housefull2',
        'artist': 'Sunidhi Chauhan, Suzanne D Mello,Wajid Ali',
        'duration': '4:06',
        'fileName': 'song/song4.mp3',
		'image': 'song4.jpg'
    }]

$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });

	function toggleSong(){
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
	} 
	
	//-------------progress bar-------------------
	function UpdateTimer()
	{
		var song = document.querySelector('audio');
		var currentTime = song.currentTime;
		var duration = song.duration;
		var percentage = (currentTime/duration)*100;
		$('.progress-filled').css('width', percentage+ "%");
		}
	
	//--------------fancy time format---------------------------
	
	function fancyTimeFormat(time)
	{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;
	// Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
	}
	
	//---------------------------currentTime------------------
	function updateCurrentTime() {
		var song = document.querySelector('audio');
		// console.log(song.currentTime);
		// console.log(song.duration);
		var currentTime = Math.floor(song.currentTime);
		currentTime = fancyTimeFormat(currentTime);
		var duration = Math.floor(song.duration);
		var per= currentTime/duration * 100;
		duration = fancyTimeFormat(duration);
		$('.time-elapsed').text(currentTime);
		$('.song-duration').text(duration);
		
	}
	//---------- time jump function to the end of the song by -5 & play next song--------------
	function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
	
	
	//-------- song calling function-------------
	function addSongNameClickEvent(songObj,position) {
		var songName = songObj.fileName; // New Variable
			var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
		   if(currentSong.search(songName) != -1)
		   	{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			changeCurrentSongDetails(songObj); // Function Call
			}
			});
			}
			
	//------------- deatils of the song-------------	
	function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
	}
	 
	window.onload = function() {
		
    changeCurrentSongDetails(songs[0]);
		
		setInterval(function() {
		
		updateCurrentTime();
		},1000);
		//----------time duration bar--------------
		setInterval(function() {
		
		UpdateTimer();
		},1000);
		
		
	
		
		
		for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1)
		}
		
		
		$('.fa-repeat').on('click',function() {
			$('.fa-repeat').toggleClass('disabled')
			willLoop = 1 - willLoop;
			});	
			
			//---------------shuffle icon code-------------									
			$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled');
			willShuffle = 1 - willShuffle;
			});	
		//--------------------- end event-----------------------------				
			$('audio').on('ended',function() {
			var audio = document.querySelector('audio');
			if (willShuffle == 1) {
			var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
			var nextSongobj = songs[nextSongNumber-1];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			currentSongNumber = nextSongNumber;
			}
			else if(currentSongNumber < 4) {
			var nextSongobj = songs[currentSongNumber];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			currentSongNumber = currentSongNumber + 1;
			}
			else if(willLoop == 1) {
			var nextSongobj = songs[0];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			currentSongNumber =  1;
			}
			else {
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			audio.currentTime = 0;
			}
			});
		
		
		


$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
       console.log('next song'); // Play the next song
    }
    else {
      console.log('stop');  // Stop Playing
    }
})
  //---------------forward function-----------------
		$('.fa-step-forward').on('click', function(){
			var audio=document.querySelector('audio');
			if(currentSongNumber < 4){
				var nextSongobj = songs[currentSongNumber];
				audio.src = nextSongobj.fileName;
				toggleSong();
				changeCurrentSongDetails(nextSongobj);
				currentSongNumber=currentSongNumber + 1;
				console.log('nextSong');
			}
			else{
				audio.currentTime = 0;
				console.log('nextSong');
			}
		});

	//------------backward function--------------
	
	$('.fa-step-backward').on('click', function(){
			var audio=document.querySelector('audio');
			if(currentSongNumber < 4){
				var nextSongobj = songs[currentSongNumber];
				audio.src = nextSongobj.fileName;
				toggleSong();
				changeCurrentSongDetails(nextSongobj);
				currentSongNumber = currentSongNumber - 1;
				console.log('previous song');
			}
			else{
				audio.currentTime = 0;
				console.log('previous song');
			}
		});












		
		
		
		
		
		
		
		
		
	 	//-------------------------------------datatables	
			$('#songs').DataTable({
        paging: false
    });
		

		


		
			
		}
	
    
    $('.play-icon').on('click', function() {
        toggleSong();
		
    });
    $('body').on('keypress', function(event) {
	var target= event.target;
                if (event.keyCode == 32 && target.tagName != "INPUT") 
				{
				   toggleSong();
                }
	
    });