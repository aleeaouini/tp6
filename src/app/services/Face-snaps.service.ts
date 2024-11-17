import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
            new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            'https://i.pinimg.com/236x/62/48/03/624803bee204bc2b7761449dcc502821.jpg',
            new Date(),
            0
          ),
           new FaceSnap(
            'loufi',
            'Mon meilleur anime !',
            'https://i.pinimg.com/236x/53/e4/9e/53e49e67e9413efa9442e9ea52322830.jpg',
            new Date(),
            0
          ),
          new FaceSnap(
            'Naruto',
            'Mon meilleur anime depuis tout petit !',
            'https://naruto-official.com/wp-content/uploads/2021/09/NARUTO-2017-1920x1080.jpg',
            new Date(),
            0
          )
        ]
        constructor() { }
    
}