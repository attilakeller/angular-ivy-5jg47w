import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 9).subscribe(console.log);
    from([20, 15, 10, 5]).subscribe(
      (item) => console.log(`resulting item... $(item)`),
      (err) => console.error(`error occured $(err)`),
      () => console.log('complete')
    );
  }
}
