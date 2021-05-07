var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes();
		var time1 = (today.getHours()+1) + ":" + today.getMinutes();
		var time2 = (today.getHours()+2) + ":" + today.getMinutes();
		var time3 = (today.getHours()+3) + ":" + today.getMinutes();
		var time4 = (today.getHours()+4) + ":" + today.getMinutes();

		var hours = 0;
		var mins = 0;
		var seconds = 0;

		function startTimer(){
			timex = setTimeout(function(){
			seconds--;
			    if(seconds < 1){
			    	seconds = 59;
			    	mins--;
			    }

			    if(mins < 1) {
			      	mins = 59;
			      	hours --;
			    }
			         
			    if (hours <10){
			    	$("#hours").text('0'+hours+':')
			    } 
			    
			    else {
			    	$("#hours").text(hours+':');
			    }
			                       
			    if (mins<10){                     
			      $("#mins").text('0'+mins+':');
			  	}       
			       
			    else { 
			    	$("#mins").text(mins+':');
			    }

			    if (seconds <10) {
			      $("#seconds").text('0'+seconds);
			  	} 
			    
			    else $("#seconds").text(seconds);

		    startTimer();
		  },1000);
		}

		function currentTimeDisplay() {
			document.getElementById('current').nextSibling.textContent = 'Current Time: ' + time;
		}

		function NormalBackground() {
			document.body.style.backgroundImage = "url('phonebackground.png')";
		}

		function ArrowBackground() {
			document.body.style.backgroundImage = "url('arrowbackground.png')";
		}

		function HideIntro() {
			var x = document.getElementById("IntroPage");
			x.style.display = "none";
		}

		function HideMain() {
			var x = document.getElementById("HomeMenu");
			x.style.display = "none";
		}

		function HideSettings() {
			var x = document.getElementById("SettingsPage");
			x.style.display = "none";
		}

		function HideTrainSearch() {
			var x = document.getElementById("TrainSearch");
			x.style.display = "none";
		}

		function HideBusSearch() {
			var x = document.getElementById("BusSearch");
			x.style.display = "none";
		}

		function HideSearchSearch() {
			var x = document.getElementById("SearchSearch");
			x.style.display = "none";
		}

		function HideTrainSelect() {
			var x = document.getElementById("TrainSelect");
			x.style.display = "none";
		}

		function HideBusSelect() {
			var x = document.getElementById("BusSelect");
			x.style.display = "none";
		}

		function HideSearchSelect() {
			var x = document.getElementById("SearchSelect");
			x.style.display = "none";
		}

		function HideDiv() {
			var x = document.getElementById("Border");
			x.style.display = "none";
		}

		function HideHome() {
			var x = document.getElementById("NavButtons");
			x.style.display = "none";
		}

		function HideHidePhone() {
			var x = document.getElementById("hidePhone");
			x.style.display = "none";
		}

		function ShowPhoneButton() {
			var x = document.getElementById("returnPhone");
			x.style.display = "none";
			document.body.style.backgroundImage = "url('phonearrowbackground.png')";
		}

		function HideTripMenu() {
			var x = document.getElementById("TripMenu");
			x.style.display = "none";
		}

		function ShowMain() {
			var x = document.getElementById("HomeMenu");
			x.style.display = "block";
		}

		function ShowSettings() {
			var x = document.getElementById("SettingsPage");
			x.style.display = "block";
		}

		function ShowTrain() {
			var x = document.getElementById("TrainSearch");
			x.style.display = "block";
		}

		function ShowBus() {
			var x = document.getElementById("BusSearch");
			x.style.display = "block";
		}

		function ShowSearch() {
			var x = document.getElementById("SearchSearch");
			x.style.display = "block";
		}

		function ShowHome() {
			var x = document.getElementById("NavButtons");
			x.style.display = "block";
			var x = document.getElementById("HomeButton");
			x.style.display = "block";
			var x = document.getElementById("BackButton");
			x.style.display = "block";
		}

		function ShowBack() {
			var x = document.getElementById("BackButton");
			x.style.display = "block";
			var x = document.getElementById("NavButtons");
			x.style.display = "block";
			var x = document.getElementById("HomeButton");
			x.style.display = "none";
		}

		function ShowIntro() {
			var x = document.getElementById("IntroPage");
			x.style.display = "block";
		}

		function ShowPhone() {
			var x = document.getElementById("returnPhone");
			x.style.display = "block";
		}

		function ShowDiv() {
			var x = document.getElementById("Border");
			x.style.display = "block";
		}

		function ShowTripMenu() {
			var x = document.getElementById("TripMenu");
			x.style.display = "block";
		}

		function ShowTripSettings() {
			var x = document.getElementById("TripSettingsPage");
			x.style.display = "block";
		}

		function HidePhone() {
			var x = document.getElementById("hidePhone");
			x.style.display = "block";
		}

		function TrainSelectCancel() {
			var x = document.getElementById("TrainSelect");
			x.style.display = "none";
			var x = document.getElementById("HomeMenu");
			x.style.display = "block";
		}

		function BusSelectCancel() {
			var x = document.getElementById("BusSelect");
			x.style.display = "none";
			var x = document.getElementById("HomeMenu");
			x.style.display = "block";
		}

		function SearchSelectCancel() {
			var x = document.getElementById("SearchSelect");
			x.style.display = "none";
			var x = document.getElementById("HomeMenu");
			x.style.display = "block";
		}

		function CancelTrip() {
			var x = document.getElementById("currentTrip");
			x.style.display = "none";
			var x = document.getElementById("currentTime");
			x.style.display = "none";
			var x = document.getElementById("TripMenu");
			x.style.display = "none";
		}

		function RunBack() {
			var a = document.getElementById("NavButtons");
			var b = document.getElementById("IntroPage");
			var c = document.getElementById("HomeMenu");
			var d = document.getElementById("TrainSearch");
			var e = document.getElementById("BusSearch");
			var f = document.getElementById("SearchSearch");
			var g = document.getElementById("TrainSelect");
			var h = document.getElementById("BusSelect");
			var i = document.getElementById("SearchSelect");
			var j = document.getElementById("SettingsPage");
			var k = document.getElementById("TripSettingsPage");
			var l = document.getElementById("TripMenu");

			if (c.style.display == "block") {
				a.style.display = "none";
				b.style.display = "block";
				c.style.display = "none";
			}
			else if (d.style.display == "block") {
				c.style.display = "block";
				d.style.display = "none";
			}

			else if (e.style.display == "block") {
				c.style.display = "block";
				e.style.display = "none";
			}

			else if (f.style.display == "block") {
				c.style.display = "block";
				f.style.display = "none";
			}

			else if (g.style.display == "block") {
				d.style.display = "block";
				g.style.display = "none";
			}

			else if (h.style.display == "block") {
				e.style.display = "block";
				h.style.display = "none";
			}

			else if (i.style.display == "block") {
				f.style.display = "block";
				i.style.display = "none";
			}

			else if (j.style.display == "block") {
				a.style.display = "none";
				b.style.display = "block";
				j.style.display = "none";
			}
			else if (k.style.display == "block") {
				a.style.display = "none";
				l.style.display = "block";
				k.style.display = "none";
			}

		}

		function confirmSettings() {
				document.getElementById("HomeButton").style.display = "none";
				document.getElementById("IntroPage").style.display = "block";
				document.getElementById("SettingsPage").style.display = "none";
				document.getElementById("BackButton").style.display = "none";
		}

		function confirmTripSettings() {
				document.getElementById("HomeButton").style.display = "none";
				document.getElementById("returnPhone").style.display = "block";
				document.getElementById("TripSettingsPage").style.display = "none";
		}

		function trainInputs() {
			var depart=document.getElementById('trainDepartLocation').value;
			var arrive=document.getElementById('trainDestinationLocation').value;
			var x = document.getElementById("TrainSearch");
			x.style.display = "none";
			var x = document.getElementById("TrainSelect");
			x.style.display = "block";			
			document.getElementById('Train1').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Platform 1 at ' + time1;
			document.getElementById('Train2').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Platform 1 at ' + time2;
			document.getElementById('Train3').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Platform 1 at ' + time3;
		}

		function busInputs() {
			var depart=document.getElementById('busDepartLocation').value;
			var arrive=document.getElementById('busDestinationLocation').value;
			var x = document.getElementById("BusSearch");
			x.style.display = "none";
			var x = document.getElementById("BusSelect");
			x.style.display = "block";			
			document.getElementById('Bus1').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Bus Stop 1 at ' + time1;
			document.getElementById('Bus2').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Bus Stop 1 at ' + time2;
			document.getElementById('Bus3').nextSibling.textContent = depart + ' >> ' + arrive + ' Leaves Bus Stop 1 at ' + time3;
		}

		function searchInputs() {
			var depart=document.getElementById('searchDepartLocation').value;
			var arrive=document.getElementById('searchDestinationLocation').value;
			var x = document.getElementById("SearchSearch");
			x.style.display = "none";
			var x = document.getElementById("SearchSelect");
			x.style.display = "block";			
			document.getElementById('Search1').nextSibling.textContent = depart + ' >> Gosford leaves platform 1 at ' + time1 +' Gosford >> ' + arrive + ' leaves from bus stop 1 at ' + time2;
			document.getElementById('Search2').nextSibling.textContent = depart + ' >> Gosford leaves platform 1 at ' + time2 +' Gosford >> ' + arrive + ' leaves from bus stop 1 at ' + time3;
			document.getElementById('Search3').nextSibling.textContent = depart + ' >> Gosford leaves platform 1 at ' + time3 +' Gosford >> ' + arrive + ' leaves from bus stop 1 at ' + time4;
		}

		function trainTrip() {
			document.body.style.backgroundImage = "url('arrowbackground.png')";
			
			if (document.getElementById("Train1").checked) {
				hours = 1;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Train2").checked) {
				hours = 2;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Train3").checked) {
				hours = 3;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
		}


		function busTrip() {
			document.body.style.backgroundImage = "url('arrowbackground.png')";
			
			if (document.getElementById("Bus1").checked) {
				hours = 1;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Bus2").checked) {
				hours = 2;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Bus3").checked) {
				hours = 3;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
		}

		function searchTrip() {
			document.body.style.backgroundImage = "url('arrowbackground.png')";
			
			if (document.getElementById("Search1").checked) {
				hours = 1;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Search2").checked) {
				hours = 2;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
			else if (document.getElementById("Search3").checked) {
				hours = 3;
				document.getElementById("currentTrip").style.display = "block";
				document.getElementById("currentTime").style.display = "block";
			}
		}