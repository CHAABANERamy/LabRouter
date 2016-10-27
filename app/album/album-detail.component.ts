import { Subscription } from 'rxjs/Subscription';
import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl:  '../app/album/album-detail.component.html'
})
export class AlbumDetailComponent  {

  album;
  paramsSubscription: Subscription;

  constructor( private albumService: AlbumService) { }

   

}
