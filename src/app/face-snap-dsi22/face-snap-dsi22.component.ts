import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; //ajout
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  imports: [CommonModule],//ajout
  templateUrl: './face-snap-dsi22.component.html',
  styleUrls: ['./face-snap-dsi22.component.css']
})
export class FaceSnapDSI22Component implements OnInit {
  @Input() faceSnap!: FaceSnap;
  //title!:string;
  //description!:string;
  //createDate!:Date;
  //snaps!:Number;
  //snaps: number = 0;
  //imageUrl!:string;
  buttonText: string = 'Oh Snap!';
  ngOnInit(){
    
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++; 
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.faceSnap.snaps--;
      this.buttonText="Oh snap!";
    }
  }
}
