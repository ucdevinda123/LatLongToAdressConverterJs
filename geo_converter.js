var GeoConverter = {
	geocoder : new google.maps.Geocoder(),	
	getAddressFromLatLng : function(myLatitude,myLongitude) {											
		var location	= new google.maps.LatLng(myLatitude, myLongitude);		// turn coordinates into an object 			
		GeoConverter.geocoder.geocode({'latLng': location}, function (results, status) {
			if(status == google.maps.GeocoderStatus.OK) {						// if geocode success
				var addressForLatLng = results[0].formatted_address;	
				GeoConverter.createJSON(addressForLatLng,myLatitude,myLongitude);                					
			} else {
			  alert("Geocode failure: " + status);								// alert any other error(s)
			  return false;
			}
		});
	},
	createJSON :function(address,lat,lng) {
		 var jsonObj = [];
			var item = {}
			item ["address"] = address;
			item ["lat"] = lat;
			item ["lng"] = lng;
			jsonObj.push(item);
		   console.log(JSON.stringify(jsonObj));
	}	
};

/*1.Import Google Map to your HTML http://maps.google.com/maps/api/js?key=[YOUR_KEY]
  2.Import geo_converter.js into your html file
  3. Call to get address from lat and long GeoConverter.getAddressFromLatLng(latvalue,lngValue);
  4.That's it
*/