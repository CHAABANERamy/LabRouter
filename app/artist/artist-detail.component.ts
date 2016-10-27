import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
   templateUrl:  '../app/artist/artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit, OnDestroy {

  artist;
  paramsSubscription: Subscription;

  constructor(private artistService: ArtistService) { }



}
