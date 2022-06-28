import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { Crib } from './../crib'


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

    cribs: any = [];
    error: string;
    
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
	this.http.get('./data/cribs.json').pipe(map(res => res))
	    .subscribe(
		data => {this.cribs = data;},
		error => { this.error = error.statusText }
	    );
	
    }

}
