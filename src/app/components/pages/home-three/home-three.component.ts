import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PropyfinderService } from "src/app/services/propyfinder.service";

@Component({
    selector: "app-home-three",
    templateUrl: "./home-three.component.html",
    styleUrls: ["./home-three.component.scss"],
})
export class HomeThreeComponent implements OnInit, AfterViewInit {
    // @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef<HTMLDivElement>>;


    unlodedData = true;
    devLoad = false;
    loadPropertyList = false;
    loadLaunchProperty = false;
    loadFilterDeveloperProperty = false;
    loadFilterCityProperty = false;

   
    constructor(
        private fb: FormBuilder,
        private propService: PropyfinderService
    ) {}

 

    ngOnInit(): void {
        this.getPropertiesList();
        this.getDeveloperList();
        this.getCitiesList();
        this.getLatestPropertyList();
        this.getLaunchPropertyList();
        this.getConstructionPropertyList();
    }

    // TABLES AND FILTERS

    mainPropertiesList$ = [];
    mainDeveloperList$ = [];
    citiesList$ = [];
    cityPropertiesList$ = [];
    developerPropertyesList$ = [];
    latestPropertyList$ = 

    [
        {
            "developer_name": "DLF",
            "image_url": "https://im.proptiger.com/1/3239792/6/gh-63-elevation-146405432.jpeg",
            "property_id": 1,
            "property_name": "DLF The Arbour",
            "address": "Sector 63, Gurgaon",
            "apartment": "4 BHK",
            "builtup_area": "3,800 - 3,956 sq ft",
            "builder_price": " 7.70 Cr -  8.01 Cr",
            "status": "Under Construction",
            "total_area": "28 Acres",
            "total_launched_apartments": "1008",
            "last_updated_on": "2024-04-15T00:00:00.000Z",
            "launch_date": "Aug'22",
            "possession_start_date": "Aug'29",
            "availability": "New",
            "developer_id": 1
        },
        {
            "developer_name": "DLF",
            "image_url": "https://im.proptiger.com/1/3062156/6/dlf-imperial-residences-elevation-130663056.jpeg",
            "property_id": 7,
            "property_name": "DLF Imperial Residences",
            "address": "Sector 24, Gurgaon",
            "apartment": "4 BHK",
            "builtup_area": "3,268 - 4,500 sq ft",
            "builder_price": " 5.39 Cr -  7.42 Cr",
            "status": "Under Construction",
            "total_area": "1.035 Acres",
            "total_launched_apartments": "",
            "last_updated_on": "2024-01-23T00:00:00.000Z",
            "launch_date": "Jan'20",
            "possession_start_date": "Dec'24",
            "availability": "New",
            "developer_id": 1
        },
        {
            "developer_name": "Godrej Properties",
            "image_url": "https://im.proptiger.com/1/3152819/6/grandeur-elevation-129320260.jpeg",
            "property_id": 13,
            "property_name": "Godrej Grandeur",
            "address": "Sector 106, Gurgaon",
            "apartment": "3 BHK",
            "builtup_area": "1,855 - 2,002 sq ft",
            "builder_price": " 2.97 Cr -  3.20 Cr",
            "status": "Launch",
            "total_area": "14.793 Acres",
            "total_launched_apartments": "1023",
            "last_updated_on": "2024-04-24T00:00:00.000Z",
            "launch_date": "Feb'22",
            "possession_start_date": "Dec'25",
            "availability": "New",
            "developer_id": 2
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/671817/6/hill-crest-images-for-elevation-of-supertech-hill-crest-4326565.jpeg",
            "property_id": 43,
            "property_name": "Supertech Hill Crest",
            "address": "Sector 2 Sohna, Gurgaon",
            "apartment": "3 BHK",
            "builtup_area": "1,350 - 1,820 sq ft",
            "builder_price": " 61.70 L -  83.17 L",
            "status": "Completed",
            "total_area": "",
            "total_launched_apartments": "983",
            "last_updated_on": "2024-03-07T00:00:00.000Z",
            "launch_date": "Jul'15",
            "possession_start_date": "Dec'21",
            "availability": "New and Resale",
            "developer_id": 4
        }
    ]

    launchPropertyList$ = 
    [
        {
            "developer_name": "Godrej Properties",
            "image_url": "https://im.proptiger.com/1/1753942/6/meridien-elevation-119481594.jpeg",
            "property_id": 15,
            "property_name": "Godrej Meridien",
            "address": "Sector 106, Gurgaon",
            "apartment": "2, 3, 4 BHK",
            "builtup_area": "On request",
            "builder_price": " 1.70 Cr -  5.72 Cr",
            "status": "Completed",
            "total_area": "14 Acres",
            "total_launched_apartments": "700",
            "last_updated_on": "2024-04-17T00:00:00.000Z",
            "launch_date": "May'18",
            "possession_start_date": "May'22",
            "availability": "New and Resale",
            "developer_id": 2
        },
        {
            "developer_name": "Godrej Properties",
            "image_url": "https://im.proptiger.com/1/1688103/6/nature-plus-images-for-elevation-of-godrej-nature-plus-19402682.jpeg",
            "property_id": 16,
            "property_name": "Godrej Nature Plus",
            "address": "Sector 33 Sohna, Gurgaon",
            "apartment": "2, 3 BHK",
            "builtup_area": "1,310 - 1,996 sq ft",
            "builder_price": " 1.62 Cr -  2.47 Cr",
            "status": "Completed",
            "total_area": "17 Acres",
            "total_launched_apartments": "612",
            "last_updated_on": "2024-03-07T00:00:00.000Z",
            "launch_date": "Feb'18",
            "possession_start_date": "Dec'22",
            "availability": "New and Resale",
            "developer_id": 2
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/1548580/6/belfair-images-for-project-41024684.jpeg",
            "property_id": 40,
            "property_name": "Supertech Belfair",
            "address": "Sector 79, Gurgaon",
            "apartment": "1, 2 BHK",
            "builtup_area": "625 - 1,020 sq ft",
            "builder_price": " 24.94 L -  40.70 L",
            "status": "Launch",
            "total_area": "",
            "total_launched_apartments": "1144",
            "last_updated_on": "2020-09-28T00:00:00.000Z",
            "launch_date": "Jan'18",
            "possession_start_date": "Aug'21",
            "availability": "New",
            "developer_id": 4
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/671817/6/hill-crest-images-for-elevation-of-supertech-hill-crest-4326565.jpeg",
            "property_id": 43,
            "property_name": "Supertech Hill Crest",
            "address": "Sector 2 Sohna, Gurgaon",
            "apartment": "3 BHK",
            "builtup_area": "1,350 - 1,820 sq ft",
            "builder_price": " 61.70 L -  83.17 L",
            "status": "Completed",
            "total_area": "",
            "total_launched_apartments": "983",
            "last_updated_on": "2024-03-07T00:00:00.000Z",
            "launch_date": "Jul'15",
            "possession_start_date": "Dec'21",
            "availability": "New and Resale",
            "developer_id": 4
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/665201/6/hillview-apartments-elevation-861172.jpeg",
            "property_id": 45,
            "property_name": "Supertech Hillview Apartments",
            "address": "Sector 2 Sohna, Gurgaon",
            "apartment": "2, 3, 4 BHK",
            "builtup_area": "1,200 - 2,695 sq ft",
            "builder_price": " 51.00 L -  1.15 Cr",
            "status": "Completed",
            "total_area": "20 Acres",
            "total_launched_apartments": "1340",
            "last_updated_on": "2024-03-07T00:00:00.000Z",
            "launch_date": "Nov'14",
            "possession_start_date": "Jun'21",
            "availability": "New and Resale",
            "developer_id": 4
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/644417/6/hues-images-for-elevation-of-supertech-hues-440484.jpeg",
            "property_id": 56,
            "property_name": "Supertech Hues",
            "address": "Sector 68, Gurgaon",
            "apartment": "2, 3 BHK",
            "builtup_area": "1,180 - 1,765 sq ft",
            "builder_price": " 84.96 L -  1.27 Cr",
            "status": "Completed",
            "total_area": "70 Acres",
            "total_launched_apartments": "1744",
            "last_updated_on": "2024-03-07T00:00:00.000Z",
            "launch_date": "Jan'14",
            "possession_start_date": "Dec'21",
            "availability": "New and Resale",
            "developer_id": 4
        }
    ];


    constructionPropertyList$ =
    [
        {
            "developer_name": "DLF",
            "image_url": "https://im.proptiger.com/1/3050725/6/one-midtown-elevation-144154540.jpeg",
            "property_id": 8,
            "property_name": "DLF One Midtown",
            "address": "Karampura, Delhi",
            "apartment": "2, 3, 4 BHK",
            "builtup_area": "918 - 3,400 sq ft",
            "builder_price": "2.25 Cr - 8.32 Cr",
            "status": "Under Construction",
            "total_area": "6.79 Acres",
            "total_launched_apartments": "915",
            "last_updated_on": "2024-02-14T00:00:00.000Z",
            "launch_date": "Dec'21",
            "possession_start_date": "Jul'26",
            "availability": "New",
            "developer_id": 1
        },
        {
            "developer_name": "DLF",
            "image_url": "https://im.proptiger.com/1/3038866/6/siris-estate-elevation-105307554.jpeg",
            "property_id": 10,
            "property_name": "DLF Siris Estate",
            "address": "Sector 24, Gurgaon",
            "apartment": "4 BHK",
            "builtup_area": "3,268 - 4,521 sq ft",
            "builder_price": "Price on request",
            "status": "Under Construction",
            "total_area": "1.24 Acres",
            "total_launched_apartments": "48",
            "last_updated_on": "2024-04-25T00:00:00.000Z",
            "launch_date": "Oct'20",
            "possession_start_date": "Oct'24",
            "availability": "Resale",
            "developer_id": 1
        },
        {
            "developer_name": "DLF",
            "image_url": "https://im.proptiger.com/1/666221/6/privana-elevation-155108268.jpeg",
            "property_id": 11,
            "property_name": "DLF Privana",
            "address": "Sector 77, Gurgaon",
            "apartment": "4 BHK",
            "builtup_area": "3,577 - 5,472 sq ft",
            "builder_price": " 6.44 Cr -  9.85 Cr",
            "status": "Under Construction",
            "total_area": "25.5 Acres",
            "total_launched_apartments": "1113",
            "last_updated_on": "2024-04-17T00:00:00.000Z",
            "launch_date": "Dec'23",
            "possession_start_date": "Jul'29",
            "availability": "New",
            "developer_id": 1
        },
        {
            "developer_name": "Godrej Properties",
            "image_url": "https://im.proptiger.com/1/3066364/6/126981739.png",
            "property_id": 17,
            "property_name": "Godrej Serenity Sohna",
            "address": "Sector 33 Sohna, Gurgaon",
            "apartment": "2, 3 BHK",
            "builtup_area": "930 - 1,411 sq ft",
            "builder_price": " 1.14 Cr -  1.73 Cr",
            "status": "Under Construction",
            "total_area": "18.7 Acres",
            "total_launched_apartments": "450",
            "last_updated_on": "2024-04-15T00:00:00.000Z",
            "launch_date": "Jun'18",
            "possession_start_date": "Dec'25",
            "availability": "New",
            "developer_id": 2
        },
        {
            "developer_name": "Godrej Properties",
            "image_url": "https://im.proptiger.com/1/1877632/6/habitat-images-for-elevation-of-godrej-habitat-32099945.jpeg",
            "property_id": 20,
            "property_name": "Godrej Habitat",
            "address": "Sector 3, Gurgaon",
            "apartment": "2, 3, 4 BHK",
            "builtup_area": "1,255 - 2,650 sq ft",
            "builder_price": " 1.62 Cr -  3.43 Cr",
            "status": "Under Construction",
            "total_area": "8 Acres",
            "total_launched_apartments": "380",
            "last_updated_on": "2024-04-20T00:00:00.000Z",
            "launch_date": "Mar'19",
            "possession_start_date": "Jul'23",
            "availability": "New and Resale",
            "developer_id": 2
        },
        {
            "developer_name": "Supertech",
            "image_url": "https://im.proptiger.com/1/1530364/6/40946711.jpeg",
            "property_id": 50,
            "property_name": "Supertech Zaara Residential Apartments",
            "address": "Sector 68, Gurgaon",
            "apartment": "2 BHK",
            "builtup_area": "",
            "builder_price": "Price on request",
            "status": "Under Construction",
            "total_area": "",
            "total_launched_apartments": "",
            "last_updated_on": "2020-06-02T00:00:00.000Z",
            "launch_date": "",
            "possession_start_date": "",
            "availability": "New",
            "developer_id": 4
        }
    ];


    developerFilter: string = "";
    propertiesFilter: string = "";
    bhkFilter: string = "";
    statusFilter: string = "";
    locationFilter: string = "";
    priceRangeFilter: string = "";

    get filteredProperties() {
        if (this.mainPropertiesList$) this.unlodedData = false;
        return this.mainPropertiesList$.filter(
            (property) =>
                property.developer_name
                    .toLowerCase()
                    .includes(this.developerFilter.toLowerCase()) &&
                property.property_name
                    .toLowerCase()
                    .includes(this.propertiesFilter.toLowerCase()) &&
                property.apartment
                    .toLowerCase()
                    .includes(this.bhkFilter.toLowerCase()) &&
                property.status
                    .toLowerCase()
                    .includes(this.statusFilter.toLowerCase()) &&
                property.address
                    .toLowerCase()
                    .includes(this.locationFilter.toLowerCase()) &&
                property.builder_price
                    .toLowerCase()
                    .includes(this.priceRangeFilter.toLowerCase())
        );
    }

    // API CALL

    getPropertiesList() {
        this.propService.getAllProperties().subscribe(
            (apiResponse: any[]) => {
                this.mainPropertiesList$ = apiResponse;
                console.log("mainPropertiesList$", this.mainPropertiesList$); // Print the list after loading the data
            },
            () => {
                console.log("Error fething data");
            }
        );
    }

    getDeveloperList() {
        this.propService.getAllDevelopers().subscribe(
            (apiResponse: any[]) => {
                this.mainDeveloperList$ = apiResponse;
                this.devLoad = true;
                console.log("developers", this.mainDeveloperList$);
            },
            (err) => {
                console.log("Error fething data");
            },
            () => {}
        );
    }

    getCitiesList() {
        this.propService.getCities().subscribe(
            (apiResponse: any[]) => {
                this.citiesList$ = apiResponse;
                this.devLoad = true;
                console.log("cities", this.citiesList$);
            },
            (err) => {
                console.log("Error fething data");
            },
            () => {}
        );
    }

    getLatestPropertyList() {
        this.propService.getLatestPropertiy().subscribe(
            (apiResponse: any[]) => {
                this.latestPropertyList$ = apiResponse;
                this.loadPropertyList = true;
                console.log("latest property", this.latestPropertyList$);
            },
            (err) => {
                console.log("Error fething data");
            },
            () => {}
        );
    }

    getLaunchPropertyList() {
        this.propService.getLaunchPropertiy().subscribe(
            (apiResponse: any[]) => {
                this.launchPropertyList$ = apiResponse;
                this.loadLaunchProperty = true;
                console.log("Launch property", this.launchPropertyList$);
            },
            (err) => {
                console.log("Error fething data");
            },
            () => {}
        );
    }

    getConstructionPropertyList() {
        this.propService.getUnderConstructionPropertiy().subscribe(
            (apiResponse: any[]) => {
                this.constructionPropertyList$ = apiResponse;
                console.log(
                    "Construction property",
                    this.constructionPropertyList$
                );
            },
            (err) => {
                console.log("Error fething data");
            },
            () => {}
        );
    }

    getPropertyByDeveloperId(developer_id: number) {
        this.propService.getPropertyBydeveloperId(developer_id).subscribe(
            (apiResponse: any[]) => {
                this.developerPropertyesList$ = apiResponse;
                console.log(
                    "developerPropertyesList$",
                    this.developerPropertyesList$
                ); 
                this.loadFilterDeveloperProperty = true;
            },
            () => {
                console.log("Error fething data");
            }
        );
    }
    getPropertyByCity(city: string) {
        console.log("city selected",city);
        this.propService.getPropertyByCities(city).subscribe(
            (apiResponse: any[]) => {
                this.cityPropertiesList$ = apiResponse;
                console.log(
                    "cityPropertiesList$",
                    this.cityPropertiesList$
                ); 
                this.loadFilterCityProperty = true;

            },
            () => {
                console.log("Error fething data");
            }
        );
    }

    // ****************  region end  ******************

    //  PAGINATION

    pageSizes = 10;
    currentPage = 1;

    // DEVELOPER LIST
    viewDeveloperlist = true;
    viewAllLabel = "Explore all Developers";
    openDeveloperList() {
        this.viewAllLabel =
            this.viewAllLabel === "Explore all Developers"
                ? "Close Developers List"
                : "Explore all Developers";
        this.viewDeveloperlist = this.viewDeveloperlist ? false : true;
    }
    ngAfterViewInit() {
        this.loadLaunchProperty = true;
    }

    //DROPDOWN LIST

    selectedDeveloper: any;
    selectedCity: any;

    selectDeveloper(developer: any) {
        this.selectedDeveloper = developer;
        console.log("Selected Developer:", this.selectedDeveloper);
        this.getPropertyByDeveloperId(developer.developer_id);
    }
    selectCity(city: any) {
        this.selectedCity = city;
        this.getPropertyByCity(city.city);
    }

    // SCROLL



          scrollRight(container: HTMLDivElement) {
            container.scrollBy({
              top: 0,
              left: 367,
              behavior: 'smooth' // Optional: adds smooth scrolling
            });
          }
        
          scrollLeft(container: HTMLDivElement) {
            container.scrollBy({
              top: 0,
              left: -367,
              behavior: 'smooth' 
            });
          }
    // Favourite button ❤️ toggle
    isHeart1: boolean[] = [];
    isHeart2: boolean[] = [];
    isHeart3: boolean[] = [];
    isHeart4: boolean[] = [];
    isHeart5: boolean[] = [];


      toggleHeart(arrayName: string, index: number) {
        this[arrayName][index] = !this[arrayName][index];
      }
}
