import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
    propertyTypes: Array<string> = ["Flat","House","Condo"];
    @ViewChild('newCribForm') newCribForm: NgForm;
    
    constructor(
	private cribsService: CribsService
    ) { }
    
    ngOnInit(): void {
    }
    
    onCribSubmit(data): void {
	this.cribsService.addCrib(data);
	this.newCribForm.reset();
    }

}
