import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crib } from './../crib';
import { CribsService } from '../services/cribs.service'
import { UtilService } from './../services/util.service';
import { SortByPipe } from './../pipes/sort-by.pipe';
@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

    cribs: any = [];
    error: string;
    sortField: string = 'price';
    sortDirection: string = 'asc';
    sortFields: Array<string> = [
	'address',
	'area',
	'bathrooms',
	'bedrooms',
	'price',
	'type'
    ];
    
    constructor(
	private http: HttpClient,
	private cribsService: CribsService,
	public utilService: UtilService
    ) { }

    ngOnInit(): void {

	this.cribsService.getAllCribs()
	    .subscribe(
		data => {this.cribs = data;},
		error => { this.error = error.statusText }
	    );

	this.cribsService.newCribSubject.subscribe(
	    data => {
		this.cribs = [data, ...this.cribs];
		
	    }
	);
    }

}
