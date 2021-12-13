import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 9).subscribe(console.log);

    from([1, 2, 3, 5, 7])
      .pipe(
        map((item) => item * 2),
        map((item) => item - 2),
        map((item) => {
          if (item == 0) {
            throw new Error('detected');
          }
          return item;
        })
      )
      .subscribe({
        next: (v) => console.log(`resulting item ${v}`),
        error: (e) => console.error(`error occured ${e}`),
        complete: () => console.log('complete'),
      });

    // from([20, 15, 10, 5]).subscribe(
    //   (item) => console.log(`resulting item... $(item)`),
    //   (err) => console.error(`error occured $(err)`),
    //   () => console.log('complete')
    // );
  }
}
