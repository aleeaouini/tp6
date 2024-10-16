import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { FaceSnap } from './models/face-snap.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FaceSnapDSI22Component],
  //imports: [RouterOutlet,FaceSnapDSI22Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'tp2';
  //mySnap!: FaceSnap; //declaration
  //mySnap1!: FaceSnap;
  //mySnap2!: FaceSnap;
  faceSnaps!: FaceSnap[];
  buttonText: string='oh snap!';
  snaps:number=0;
  ngOnInit():void{
    this.faceSnaps = [
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
  ];
}
//onAddSnap(){
  //this.snaps++;
//}
}

