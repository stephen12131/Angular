import { DatePipe } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent{

    // selecteddate: string | undefined;

    // selectedDate!: Date;

    // showToggle = false;
    // showDrop = false;
    // isRotated = false;

    // themeChange = true;

    // storedTheme: string | null = localStorage.getItem('theme-color');
    // storedColorMode: string | null = localStorage.getItem('colorMode');



    // isDarkMode: boolean = false;
    constructor(private renderer: Renderer2, private datepipe: DatePipe

    ) {
        // this.selectedDate = new Date();
        // console.log('1', this.selecteddate);

    }
    ngOnInit(): void {

        // this.selecteddate = new Date().toLocaleDateString();
        // console.log(this.selecteddate);
        // console.log('1', this.selecteddate);


        // const storedMode = localStorage.getItem('colorMode');


        // if (storedMode) {
        //     this.isDarkMode = storedMode === 'dark';



        //     this.toggleMode();
        // }

    }

    // toggleMode() {


    //     this.isDarkMode = !this.isDarkMode;


    //     // Save user preference to local storage
    //     localStorage.setItem('colorMode', this.isDarkMode ? 'dark' : 'light');


    //     this.storedColorMode = localStorage.getItem('colorMode');
    //     // console.log(this.storedColorMode);

    //     // Apply the selected mode to the body
    //     // const body = document.querySelector('body');
    //     // console.log(body);

    //     // if (body) {
    //     //   body.classList.toggle('dark-mode', this.isDarkMode);
    //     //   body.classList.toggle('light-mode', !this.isDarkMode);
    //     // }


    // }

    // onDateInputChange(event: Event) {
    //     const inputDate = (event.target as HTMLInputElement).value;
    //     // console.log('onDateInputChange', inputDate);

    //     this.selectedDate = new Date(inputDate);

    //     // console.log('2', this.selectedDate);

    // }

    // getFormattedDate(): string {
    //     // console.log('3', this.datepipe.transform(this.selectedDate, 'd/M/yyyy') || '');

    //     return this.datepipe.transform(this.selectedDate, 'd/M/yyyy') || '';
    // }


    // setTheme(theme: string) {
    //     localStorage.setItem('theme-color', theme);
    //     this.storedTheme = localStorage.getItem('theme-color');
    // }


    // pagedrop() {
    //     this.showDrop = !this.showDrop;
    //     this.isRotated = !this.isRotated;
    // }

    // sidebarmethod() {
    //     this.showToggle = !this.showToggle;
    // }

    // themeSwitcher() {
    //     // console.log(this.themeChange);
    //     this.themeChange = !this.themeChange;
    //     // console.log(this.themeChange);

    // }

}
