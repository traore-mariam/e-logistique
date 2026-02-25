import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-tracking',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map-tracking.html'
})
export class MapTracking {

  center = { lat: 12.6392, lng: -8.0029 };
  transporteurPosition = { lat: 12.6392, lng: -8.0029 };
  clientPosition = { lat: 12.6450, lng: -8.0000 };
  zoom = 14;

}