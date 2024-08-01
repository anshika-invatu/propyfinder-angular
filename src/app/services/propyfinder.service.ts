import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropyfinderService {

  private apiEndpoint:string = 'get-developer-details';
  private apiEndpoint2:string = 'get-property-detail';
  private apiEndpoint3:string = 'get-propertyDetail-byId/';
  private apiEndpoint4:string = 'get-image-byPropertyId/';
  private apiEndpoint5:string = 'get-developer-byId/';
  private apiEndpoint6:string = 'get-latest-property';
  private apiEndpoint7:string = 'get-launch-property';
  private apiEndpoint8:string = 'get-underConstruction-project';
  private apiEndpoint9:string = 'get-property-by-developerId/';
  private apiEndpoint10:string = 'get-cities';
  private apiEndpoint11:string = 'get-property-byCity/';

  constructor(private httpclient:HttpClient) { }

  getAllDevelopers(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }
  getAllProperties(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint2;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getPropertyById(id:number){
    const url = environment.PROPYFINDER_API+this.apiEndpoint3+id;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }
  getPropertyImageById(id:number){
    const url = environment.PROPYFINDER_API+this.apiEndpoint4+id;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getdeveloperById(id:number){
    const url = environment.PROPYFINDER_API+this.apiEndpoint5+id;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getLatestPropertiy(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint6;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getLaunchPropertiy(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint7;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getUnderConstructionPropertiy(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint8;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getPropertyBydeveloperId(id:number){
    const url = environment.PROPYFINDER_API+this.apiEndpoint9+id;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }

  getCities(){
    const url = environment.PROPYFINDER_API+this.apiEndpoint10;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }


  getPropertyByCities(city:string){
    const url = environment.PROPYFINDER_API+this.apiEndpoint11+city;
    return this.httpclient.get(url).pipe(
      map((res:any)=>{
        if(res.status===200) return res.data
      return new Error(res.message)
      })
    );
  }



}
