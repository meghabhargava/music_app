//---------------loop-------------------
		var currentSongNumber = 1;
		var willLoop = 0;
		var willShuffle = 0;
		var shuffle=0;
		var Playingnumber= 0;
		var mute=0;
	

//----------------------songs details...array of objects----------------------
  var songs = [{
	  'name': 'Cheap Thrills',
        'album': 'Cheap Thrills',
        'artist': 'Vidya Vox',
        'duration': '2:39',
        'fileName': 'song/song1.mp3',
		'image': 'song1.jpg'
  },  
    {     'name': 'Love me like you',
        'album': 'Unknown',
        'artist': 'Ellie Goulding',
        'duration': '4:10',
        'fileName': 'song/song2.mp3',
		'image': 'song2.png'
    },
	{
		 'name': 'Mercy',
        'artist': 'Badash',
        'album': 'ONE',
        'duration': '2:42',
        'fileName': 'song/song3.mp3',
		'image': 'song3.jpg'
    },
    {
       	'name': 'One Love',
        'artist': 'MANU',
        'album': 'Western Songs',
        'duration': '3:27',
        'fileName': 'song/song4.mp3',
		'image': 'song4.jpg'
    },
    {
         'name': 'Rockabye',
        'artist': 'Clean Bandit',
        'album': 'Unknown',
        'duration': '4:11',
       'fileName': 'song/song5.mp3',
	   'image': 'song5.jpg'
    }]

	//----welcome screen---------------
$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } 
		else
			{
            $('#name-input').addClass('error');
        }
    });
	
	
		//------------changesong---------
		function changeSong(){
			var music=songs[Playingnumber].fileName;
			var song=document.querySelector("audio");
			song.src=music;
			toggleSong();
			changeCurrentSongDetails(songs[Playingnumber])
		}
		
//-------------toogle function for play icon--------------

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
	
	
	//------------- deatils of the song-------------	
	function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
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
	
	window.onload = function() {
		
    changeCurrentSongDetails(songs[0]);
		
		setInterval(function() {
		
		updateCurrentTime();
		},1000);
		//----------time duration bar--------------
		setInterval(function() {
		
		UpdateTimer();
		},1000);
	

	//-------- song calling function-------------
	function addSongNameClickEvent(songObj,position) {
		var songName = songObj.fileName; // New Variable
		var playingnextsong =0;
		playingnextsong=currentSongNumber-1;
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
			
	
	//------------objects calling----------------------
		
		
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
		
		//-------------loop---------------
		$('.fa-repeat').on('click',function() {
			$('.fa-repeat').toggleClass('disabled')
			willLoop = 1 - willLoop;
			});	
			
			//---------------shuffle icon code-------------									
			$('.fa-random').on('click',function() {
				willShuffle=1-willShuffle;
			$('.fa-random').toggleClass('disabled')
		});	
		
		//--------------------- end event-----------------------------				
			$('audio').on('ended',function() {
			var audio = document.querySelector('audio');
			if (willShuffle == 1) {
			var nextSongNumber = randomExcluded(1,5,currentSongNumber); // Calling our function from Stackoverflow
			var nextSongobj = songs[nextSongNumber-1];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			currentSongNumber = nextSongNumber;
			}
			else if(currentSongNumber < 5) {
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
			})
		
		

  //---------------forward function-----------------
		$('.fa-step-forward').click(function(){
			if(shuffle==1)
			{
			var audio=document.querySelector('audio');
			var nextSongNumber = randomExcluded(0,4,Playingnumber); // Calling our function from Stackoverflow
			var nextSongobj = songs[nextSongNumber];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			Playingnumber = nextSongNumber;
			}
			else{
				if(Playingnumber == songs.length-1)
				{
					Playingnumber=0;
					changeSong();
				}
				else{
					console.log("two");
					console.log(Playingnumber);
					Playingnumber++;
					changeSong();
				}
			}
		})
			


	//------------backward function--------------
	
	$('.fa-step-backward').click(function(){
		if(Playingnumber == 0){
			console.log("1");
			Playingnumber=(songs.length-1);
					changeSong();
				}
				else{
					console.log("2");
					console.log(Playingnumber);
					Playingnumber--;
					changeSong();
				}
	})
	
	//------volume slider------------
	
	$('.fa-volume-up').on('click',function(){        
	var audio = document.querySelector('audio');
	 if(mute == 0){
		 audio.muted = true;
		 mute = 1;
		 console.log('mute');
		 $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
	 }
	 else {
		  audio.muted = false;
		  mute = 0;
		  console.log('unmute')
		   $('.mute').removeClass('fa-volume-off').addClass('fa-volume-up');

	 }
});
    
	//------------playicon --------
    $('.play-icon').on('click', function() {
        toggleSong();
		
    });
	
	//-----------space bar for pause and play the song --------------
    $('body').on('keypress', function(event) {
	var target= event.target;
                if (event.keyCode == 32 && target.tagName != "INPUT") 
				{
				   toggleSong();
                }
	
    });
	
	//-------------------------------------datatables	
			$('#songs').DataTable({
        paging: false
    });
		
		
		}