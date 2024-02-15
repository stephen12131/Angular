import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { RedirectRequest } from '@azure/msal-browser';
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

  constructor(private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private datepipe: DatePipe) {
    this.selectedDate = new Date();
  }






  ngOnInit(): void {

    //  this.checkAzureLogin();

    this.selecteddate = new Date().toLocaleDateString();

  }

  checkAzureLogin() {
    let str = 'msal.account.keys'
    let arure = 'azuread';
    const local = localStorage.getItem(str);
    const localarure = localStorage.getItem(arure);
    if (localarure == null || localarure === undefined || undefined !== 'Y') {
      if (local === null || local === undefined || local === '') {
        if (this.msalGuardConfig.authRequest) {
          this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
        } else {
          this.authService.loginRedirect();
        }

      } else {
        localStorage.setItem("azuread", "Y");
      }
    }
  }

  toggleMode() {


    this.isDarkMode = !this.isDarkMode;


    // Save user preference to local storage
    localStorage.setItem('colorMode', this.isDarkMode ? 'dark' : 'light');


    this.storedColorMode = localStorage.getItem('colorMode');
    // console.log(this.storedColorMode);

    // Apply the selected mode to the body
    // const body = document.querySelector('body');
    // console.log(body);

    // if (body) {
    //   body.classList.toggle('dark-mode', this.isDarkMode);
    //   body.classList.toggle('light-mode', !this.isDarkMode);
    // }


  }

  onDateInputChange(event: Event) {
    const inputDate = (event.target as HTMLInputElement).value;
    // console.log('onDateInputChange', inputDate);

    this.selectedDate = new Date(inputDate);

    // console.log('2', this.selectedDate);

  }

  getFormattedDate(): string {
    // console.log('3', this.datepipe.transform(this.selectedDate, 'd/M/yyyy') || '');

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

}
