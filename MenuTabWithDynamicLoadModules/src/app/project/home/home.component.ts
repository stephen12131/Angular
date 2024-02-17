import { DatePipe } from '@angular/common';
import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentLoader } from '../dynamic-modules/DynamicComponentLoader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  selecteddate: string | undefined;
  selectedDate!: Date;
  showToggle = false;
  showDrop = false;
  isRotated = false;

  themeChange = true;
  storedTheme: string | null = localStorage.getItem('theme-color');
  storedColorMode: string | null = localStorage.getItem('colorMode');
  isDarkMode: boolean = false;

  //dynamic load 
  resolvedDashBoardCompFactories: any; 
  compProfileReference!: ComponentRef<any>;  
  compReference!: ComponentRef<any>;
  @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet!: ViewContainerRef;


  constructor( private datepipe: DatePipe,private dynamicComponentLoader: DynamicComponentLoader,) {
    this.selectedDate = new Date();
  }






  ngOnInit(): void {

    
    this.selecteddate = new Date().toLocaleDateString();

  }

  
  toggleMode() {


    this.isDarkMode = !this.isDarkMode;


    // Save user preference to local storage
    localStorage.setItem('colorMode', this.isDarkMode ? 'dark' : 'light');


    this.storedColorMode = localStorage.getItem('colorMode');
   
  }

  onDateInputChange(event: Event) {
    const inputDate = (event.target as HTMLInputElement).value;
    // console.log('onDateInputChange', inputDate);

    this.selectedDate = new Date(inputDate);

    // console.log('2', this.selectedDate);

  }

  getFormattedDate(): string {
   
    return this.datepipe.transform(this.selectedDate, 'd/M/yyyy') || '';
  }


  setTheme(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }


  pagedrop() {
    this.showDrop = !this.showDrop;
    this.isRotated = !this.isRotated;
  }

  sidebarmethod() {
    this.showToggle = !this.showToggle;
  }

  themeSwitcher() {
    console.log(this.themeChange);
    this.themeChange = !this.themeChange;
    console.log(this.themeChange);

  }

  loadComponent(componentId:string) {
    this.dynamicComponentLoader
    .getComponentFactory(componentId).then((resolvedCompFactories: any) => {
     try {
       this.testOutlet.createComponent(resolvedCompFactories);     
       this.compReference.changeDetectorRef.detectChanges();
     } catch (e) {
      
     }
   }).catch(e => {
    
   });
 } catch () {
   console.log("iam working");
  }

}
