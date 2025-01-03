  maptilersdk.config.apiKey = mapToken ;
  
  const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: "basic-v2",
    // style: "maptilersdk.MapStyle.STREETS",
    center: [77.216721,28.644800], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

    
