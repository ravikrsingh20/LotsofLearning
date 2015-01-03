
function findLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	y = document.getElementById("gmaps");
	y.innerHTML = '</br>';
	x = document.getElementById("main_form");
	var HTML;
	var latitude = Math.floor(position.coords.latitude);
	var longitude = Math.floor(position.coords.longitude);
	if (latitude == 50 && longitude == 6) {
		HTML = "<table>"
			HTML += "<tr>";
		HTML += "<th>CinePlax Aachen</th>";
		HTML += "<th>Das Lumen Aachen</th>";
		HTML += "<th>CinePlax Alsdorf</th>";
		HTML += "</tr>";
		HTML += "<tr>";
		HTML += '<td><img src="http://www.wagner-im-kino.de/sites/wagnerimkino/files/styles/kinologo/public/kino_logos/Foto%2009.02.12%2013%2030%2025_18.png?itok=8Og9HOE5" alt="CinePlax Aachen"  width="200" height="150" /></td>';
		HTML += '<td><img src="http://www.radiorur.de/images2/166/168/169/24809/29518/1028670_max.jpg" alt="Das Lumen Aachen"  width="200" height="150" /></td>';
		HTML += '<td><img src="http://images.kino.de/flbilder/max06/mbiz06/mbiz13/z0613603/b300x190.jpg" alt="CineTower Aachen Alsdorf"  width="200" height="150" /></td>';
		HTML += "</tr>";
		HTML += '<tr>';
		HTML += '<td colspan="3" align="center"> <button  onclick="Choose_theatre()">Book Ticket </button></td>';

		HTML += "</tr>";
		HTML += "</table>";
		x.innerHTML = "Cinemas near aachen\n\n\n";
		x.innerHTML += HTML;

	} else {
		if (latitude == 51 && longitude == 0) {
			//code to display London theatres
		} else {
			x.innerHTML = "Latitude: " + position.coords.latitude
			+ "<br>Longitude: " + position.coords.longitude;
		}
	}

}

function Choose_theatre() {

	var x = document.getElementById("main_form");
	HTML = "<table>";
	HTML += "<tr>";
	HTML += "<td>Email Id:</td>";
	HTML += '<td><input type="email" name="inp_email"></td>';
	HTML += "</tr>";
	HTML += "<tr>";
	HTML += "<td>Date :</td>";
	HTML += '<td><input type="date" name = "movie_date"  placeholder="mm.dd.yyyy" maxlength="8"></td> ';
	HTML += '<td rowspan="3"><input type="submit" onclick="validateData()"  value="Select your Seats"></td> ';

	HTML += "</tr>";
	HTML += "<tr>";
	HTML += "<td>Theatres :</td>";
	HTML += '<td><select name="dd_theatre"><option>CinePlax Aachen</option><option>Das Lumen Aachen</option><option>CineTower Aachen Alsdorf</option></select></td> ';
	HTML += '<td colspan="2" rowspan="4"></td>';
	HTML += "<td></td>";
	HTML += "</tr> ";
	HTML += "<tr> ";
	HTML += "<td>Show Timing :</td>";
	HTML += '<td><select name = "dd_time"><option value="12-2 PM">12-2 PM</option><option value="4-6 PM">4-6 PM</option><option value="9-11 PM">9-11 PM</option> </select> </td>              '
		HTML += "</tr>";
	HTML += "<tr>";
	HTML += "<td>Movie Selection :</td>";
	HTML += '<td><select id="dd_movie" name = "dd_movie" ><option value="Fury">Fury</option><option value="The Hobbit">The Hobbit</option> </select> </td>  ';
	HTML += "</tr>  ";
	HTML += "</table>";
	x.innerHTML = HTML;

}

var seatno;
function arr(val) {

		
	if (seatno==null)
	{
		seatno = val.toString()+ " ";
		document.getElementById(val).style = 'border:3px solid #0033CC';
		var no = document.getElementById("res_msg");
		no.innerHTML = "<b> </br> Selected Seats "+seatno+"</b>";
	}
	else{
		//var pos=seatno.indexOf('A1')
		if(seatno.indexOf(val) ==-1 )
		{
			seatno += val+" ";
			document.getElementById(val).style = 'border:3px solid #0033CC';
		}
		else
		{
			seatno=seatno.toString().replace(val,"");
			document.getElementById(val).style = 'border:3px solid #000000';
		}

		var no = document.getElementById("res_msg");
		
		no.innerHTML = "<b> </br> Selected Seats "+seatno+"</b>";
	}
	document.getElementById("seats_reserved").value=seatno;
	
}
//function to validate form details entered to select seats
function validateData(){
	var email=document.getElementsByName("fname");
	if (document.getElementById("dd_movie").value == "m0") {
		alert("Select any moveie");
		return false;

	}
	else return true;

}
function validateTicket(){
	if (seatno != null)
		return true;
	else alert ("No Seat Selected");
	return false;
}




