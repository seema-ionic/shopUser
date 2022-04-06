import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, Platform } from '@ionic/angular';


declare var google;

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;


  latitude: any;
  longitude: any;
  showMap: boolean = false;
  selectedLocation_long: any;
  selectedLocation_lat: any;
  stations: any = [];
  completeAddress: any;
  previousePageData: any;

  constructor(private sanitizer: DomSanitizer, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private zone: NgZone, private activatedRoute: ActivatedRoute, public alertController: AlertController, private platform: Platform) {
    this.previousePageData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('data'));
    console.log('previousePageDaata==> ', this.previousePageData);
  }

  ngOnInit() {
    console.log('ngOnInit called=> ');
    this.zone.run(() => {
      // console.log('shop lat', this.previousePageData.shopDetails[0].lat);
      // console.log('shop long',this.previousePageData.shopDetails[0].long);

      this.selectedLocation_lat = this.previousePageData.shopDetails[0].lat;
      this.selectedLocation_long = this.previousePageData.shopDetails[0].long;

      this.geolocation.getCurrentPosition().then((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

      }, (err) => {
        console.log('lat long err== ', err);
      });

      // this.latitude=this.navParams.get('user_Lat');
      // this.longitude=this.navParams.get('user_Long');
      var addressTitle = this.previousePageData.patient_name;
      var selectedLocation_address = " "; //10/23, static user address
      this.completeAddress = "<b>" + addressTitle + "</b><br><p>" + selectedLocation_address + "</p>";

      console.log('selectedLocation_lat', this.selectedLocation_lat);
      console.log('selectedLocation_long', this.selectedLocation_long);
      console.log('latitude', this.latitude);
      console.log('longitude', this.longitude);

    })
  }

  refereshLoc() {
    // this.initMap(this.temp_currentLat, this.temp_currentLong);
    console.log('ngAfterContentInit called=> ');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude;
      this.longitude=resp.coords.longitude;
      console.log('lat', resp.coords.latitude);
      console.log('longitude', resp.coords.longitude);
      this.stations.push({ lat: this.latitude, lng: this.longitude, name: 'Me' });
      this.stations.push({ lat: this.selectedLocation_lat, lng: this.selectedLocation_long, name: this.completeAddress });
      this.initMaptest();
      
    },err=>{
      console.log('ngAfterContentInit err=> ', err);
    })
  }



  ngAfterContentInit() {
    console.log('ngAfterContentInit called=> ');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude;
      this.longitude=resp.coords.longitude;
      console.log('lat', resp.coords.latitude);
      console.log('longitude', resp.coords.longitude);
      this.stations.push({ lat: this.latitude, lng: this.longitude, name: 'Me' });
      this.stations.push({ lat: this.selectedLocation_lat, lng: this.selectedLocation_long, name: this.completeAddress });
      this.initMaptest();
      
    },err=>{
      console.log('ngAfterContentInit err=> ', err);
    })

   


  }


  initMaptest() {
    console.log('initMaptest function called=> ');
    var service = new google.maps.DirectionsService;
    console.log('initMaptest service=> ', service);
    var map = new google.maps.Map(document.getElementById('map'));
    console.log('array===', this.stations);

    // Zoom and center map automatically by stations (each station will be in visible map area)
    var lngs = this.stations.map(function (station) { return station.lng; });
    var lats = this.stations.map(function (station) { return station.lat; });
    map.fitBounds({
      west: Math.min.apply(null, lngs),
      east: Math.max.apply(null, lngs),
      north: Math.min.apply(null, lats),
      south: Math.max.apply(null, lats),
    });

    // Show stations on the map as markers
    for (var i = 0; i < this.stations.length; i++) {
      let marker = new google.maps.Marker({
        position: this.stations[i],
        map: map,
        title: this.stations[i].name
      });

      let content = "<b>" + this.stations[i].name + "</b>";

      this.addInfoWindow(marker, content);
    }

    // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
    for (var i = 0, parts = [], max = 25 - 1; i < this.stations.length; i = i + max)
      parts.push(this.stations.slice(i, i + max + 1));

    // Service callback to process service results
    var service_callback = function (response, status) {
      if (status != 'OK') {
        console.log('Directions request failed due to ' + status);
        return;
      }
      var renderer = new google.maps.DirectionsRenderer;
      renderer.setMap(map);
      renderer.setOptions({ suppressMarkers: true, preserveViewport: true });
      renderer.setDirections(response);
    };

    // Send requests to service to get route (for stations count <= 25 only one request will be sent)
    for (var i = 0; i < parts.length; i++) {
      // Waypoints does not include first station (origin) and last station (destination)
      var waypoints = [];
      for (var j = 1; j < parts[i].length - 1; j++)
        waypoints.push({ location: parts[i][j], stopover: false });
      // Service options
      var service_options = {
        origin: parts[i][0],
        destination: parts[i][parts[i].length - 1],
        waypoints: waypoints,
        travelMode: 'DRIVING'
      };
      // Send request
      service.route(service_options, service_callback);
    }
  }


  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map, marker);
    // this.showMap=true;
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  // ******************************************************************************
}
