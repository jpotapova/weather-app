import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.generateMarker = this.generateMarker.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.moveMap = this.moveMap.bind(this);
    this.initMap = this.initMap.bind(this);
    this.initMarkers = this.initMarkers.bind(this);

    this.map = undefined;
    this.markers = [];
    this.bounds = undefined;
  }
  generateMarker(map, index, position) {
    var marker = new window.google.maps.Marker({
      position: position,
      map: map
    });
    return marker;
  }
  addMarker(markers, bounds, item, index) {

    let position = { lat: item.coord.lat, lng: item.coord.lon };
    let m = this.generateMarker(this.map, item.id, position);
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
    this.moveMap(this.map, this.bounds);

  }
  componentDidMount() {
    this.initMap();
    //this.initMarkers();
  }
  componentDidUpdate() {
    this.initMarkers();
  }
  colorMarkers(markers, index) {
    // go through markers and assign appropriate colour
    markers.forEach((marker, markerIndex) => {
      if (index === marker.metadata.id) {
        // active marker is red
        marker.setIcon('./icon-store-red.svg');
      } else {
        // regular marker is black
        marker.setIcon('./icon-store-black.svg');
      }
    });
    return markers;
  }
  moveMap(map, bounds, index = -1, stores = []) {
    if (index === -1) {
      map.setZoom(16);
      map.fitBounds(bounds);
    } else {
      let store = stores.find(store => store.id === index);
      map.panTo({ lat: store.lat, lng: store.lng });
      map.setZoom(17);
    }
  }
  render() {
    return <div ref="map" className="map" />;
  }
}

export { Map };
