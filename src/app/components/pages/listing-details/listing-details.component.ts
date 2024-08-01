import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropyfinderService } from 'src/app/services/propyfinder.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  property=[];
  imageUrls=[];
  imagesLoaded=false;
  property_id: number;


  constructor(private route: ActivatedRoute,private propService:PropyfinderService) { }
      
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.property_id = params['properties?'];
      console.log("propertyName",this.property_id);
    });
    this.getPropertyImagesList(this.property_id);
    this.getProperty(this.property_id);

  }

  getProperty(property_id:number){
    this.propService.getPropertyById(property_id).subscribe(
      (apiResponse:any[])=>{
        this.property = apiResponse;
        console.log("mainPropertiesList$", this.property); // Print the list after loading the data      
      },
      ()=>{
        console.log("Error fething data");
      }

    )
  }

  getPropertyImagesList(property_id:number){
    this.propService.getPropertyImageById(property_id).subscribe(
      (apiResponse:any[])=>{
        this.imageUrls = apiResponse;
        console.log("ImageUrl", this.imageUrls); // Print the list after loading the data     
        this.imagesLoaded=true; 
      },
      ()=>{
        console.log("Error fething data");
      },
      ()=>{
        
      }

    )
  }



}
