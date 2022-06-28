import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crib } from './../crib';
import { CribsService } from '../services/cribs.service'

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

    cribs: any = [];
    error: string;
    
    constructor(
	private http: HttpClient,
	private cribsService: CribsService
    ) { }

    ngOnInit(): void {

	this.cribsService.getAllCribs()
	    .subscribe(
		data => {this.cribs = data;},
		error => { this.error = error.statusText }
	    );
    }

}
