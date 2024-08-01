import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropyfinderService } from 'src/app/services/propyfinder.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private propService:PropyfinderService) { }
  developer_id: number;
  developerDetail:any=[]

  developers:any=[
    {
    developer:"DLF",experience:"78 Years",totalProject:114,ongoingProject:17,city:"Delhi, Gurgaon, Hyderabad, Mumbai, Pune",image1:"assets/img/developer/dlf-mall.jpg",image2:"assets/img/developer/dlf-crest.jpeg"
    },
    {
      developer:"M3M",experience:"14 Years",totalProject:50,ongoingProject:10,city:"Delhi, Gurgaon, Hyderabad, Mumbai, Pune",image1:"assets/img/developer/m3m-prop.png",image2:"assets/img/developer/m3m-prop.png"
    },
  
  ]

  developer:any={}
    
  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.developer_id = params['developer?'];
      console.log("developer_id",this.developer_id);
    });

    this.getDeveloper(this.developer_id);
    this.filterProperties('DLF');
  }

  filterProperties(developerName: string): void {
    if (developerName) {
      this.developer = this.developers.filter(dev =>
        dev.developer.toLowerCase().includes(developerName.toLowerCase())
      );
    } else {
      this.developer = " ";
    }
  }

  getDeveloper(property_id:number){
    this.propService.getdeveloperById(property_id).subscribe(
      (apiResponse:any[])=>{
        this.developerDetail = apiResponse;
        console.log("developerDetail$", this.developerDetail); // Print the list after loading the data      
      },
      ()=>{
        console.log("Error fething data");
      }

    )
  }


}
