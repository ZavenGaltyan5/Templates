import { Component } from '@angular/core';


@Component({
  selector: 'app-ad-agency',
  templateUrl: './ad-agency.component.html',
  styleUrls: ['./ad-agency.component.css']
})
export class AdAgencyComponent {



  RespMenu(){
    let btn = document.getElementById('wrap') as HTMLElement;
    btn.classList.remove('d-none')
  }
  Portfolio1() {
    let div1 = document.getElementById('pills-home') as HTMLElement;
    let div2 = document.getElementById('pills-profile') as HTMLElement;
    let div3 = document.getElementById('pills-contact') as HTMLElement;
    let div4 = document.getElementById('pills-contact2') as HTMLElement;
    let div5 = document.getElementById('pills-contact3') as HTMLElement;
    div1.classList.add('d-block')
    div2.classList.add('d-none')
    div3.classList.add('d-none')
    div4.classList.add('d-none')
    div5.classList.add('d-none')
    div1.classList.remove('d-none')
  }


  Portfolio2(){
    let div1 = document.getElementById('pills-home') as HTMLElement;
    let div2 = document.getElementById('pills-profile') as HTMLElement;
    let div3 = document.getElementById('pills-contact') as HTMLElement;
    let div4 = document.getElementById('pills-contact2') as HTMLElement;
    let div5 = document.getElementById('pills-contact3') as HTMLElement;
    div1.classList.add('d-none')
    div2.classList.add('d-block')
    div3.classList.add('d-none')
    div4.classList.add('d-none')
    div5.classList.add('d-none')
    div2.classList.remove('d-none')
  }


  Portfolio3(){
    let div1 = document.getElementById('pills-home') as HTMLElement;
    let div2 = document.getElementById('pills-profile') as HTMLElement;
    let div3 = document.getElementById('pills-contact') as HTMLElement;
    let div4 = document.getElementById('pills-contact2') as HTMLElement;
    let div5 = document.getElementById('pills-contact3') as HTMLElement;
    div1.classList.add('d-none')
    div2.classList.add('d-none')
    div4.classList.add('d-none')
    div5.classList.add('d-none')
    div3.classList.add('d-block')
    div3.classList.remove('d-none')
  }



  Portfolio4(){
    let div1 = document.getElementById('pills-home') as HTMLElement;
    let div2 = document.getElementById('pills-profile') as HTMLElement;
    let div3 = document.getElementById('pills-contact') as HTMLElement;
    let div4 = document.getElementById('pills-contact2') as HTMLElement;
    let div5 = document.getElementById('pills-contact3') as HTMLElement;
    div1.classList.add('d-none')
    div2.classList.add('d-none')
    div3.classList.add('d-none')
    div5.classList.add('d-none')
    div4.classList.add('d-block')
    div4.classList.remove('d-none')
  }




  Portfolio5(){
    let div1 = document.getElementById('pills-home') as HTMLElement;
    let div2 = document.getElementById('pills-profile') as HTMLElement;
    let div3 = document.getElementById('pills-contact') as HTMLElement;
    let div4 = document.getElementById('pills-contact2') as HTMLElement;
    let div5 = document.getElementById('pills-contact3') as HTMLElement;
    div1.classList.add('d-none')
    div2.classList.add('d-none')
    div4.classList.add('d-none')
    div5.classList.add('d-block')
    div3.classList.add('d-none')
    div5.classList.remove('d-none')
  }




}
