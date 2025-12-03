function initMap() {

  // ---- Custom Map JSON Style ----
  const mapStyle = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#A8C7DD" }]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{ "color": "#E5E5E5" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "color": "#444444" },
        { "weight": 1.5 }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#333333" }]
    },
    {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "transit",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#555555" }]
    }
  ];

  // ---- Init Map ----
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.163, lng: 27.99 }, // Rhodes center
    zoom: 10,
    styles: mapStyle,
    mapTypeControl: false,
    streetViewControl: true,
    fullscreenControl: true,
  });

}
