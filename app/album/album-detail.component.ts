import { Subscription } from 'rxjs/Subscription';
import { Component  } from '@angular/core';
 
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl:  '../app/album/album-detail.component.html'
})
export class AlbumDetailComponent  {

  album;
 

  constructor( private albumService: AlbumService) { }

   

}
