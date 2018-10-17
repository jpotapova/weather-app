import React, { Component } from "react";

class Map extends Component {

  constructor(props) {

    super(props);
    this.generateMarker = this.generateMarker.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.initMap = this.initMap.bind(this);
    this.initMarkers = this.initMarkers.bind(this);
    this.map = undefined;
    this.markers = [];
    this.bounds = undefined;

  }

  componentDidMount() {

    this.initMap();

  }

  componentDidUpdate() {

    this.initMarkers();

  }

  generateMarker(map, index, position) {

    return new window.google.maps.Marker({
      position: position,
      map: map,
      label: "+15C",
      icon: {
        path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
        strokeColor: '#fff',
        fillColor: '#fff',
        fillOpacity: 1,
        scale: 10
      }
    });

  }

  addMarker(markers, bounds, item) {

    const position = { lat: item.coord.lat, lng: item.coord.lon };
    const m = this.generateMarker(this.map, item.id, position);
    m.metadata = { id: item.id };
    markers.push(m);

    bounds.extend(position);
    return [markers, bounds];

  }

  initMap() {

    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 54.679408, lng: 25.284144 },
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false
    });
    this.bounds = new window.google.maps.LatLngBounds();

  }

  initMarkers() {

    // display markers and fit map to show all of them
    this.props.items.forEach((item, index) => {

      [this.markers, this.bounds] = this.addMarker(this.markers, this.bounds, item, index);

    });
    this.map.fitBounds(this.bounds);

  }

  render() {

    return <div ref="map" className="map" />;

  }

}

export { Map };
