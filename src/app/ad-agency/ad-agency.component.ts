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


  Scroll() {
    window.onscroll = function () {
      myFunction()
    };
    var header = document.getElementById("myHeader") as HTMLElement;
    // @ts-ignore
    var sticky = header.offsetTop;
    var headCont = document.getElementById('head-cont') as HTMLElement;

    var headLogo = document.getElementById('hidden-logo') as HTMLElement;
    var headBtn = document.getElementById('hidden-btn') as HTMLElement;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        headCont.classList.add('pb-b')
        headLogo.classList.add('d-block')
        headBtn.classList.add('d-block')
      } else {
        header.classList.remove("sticky");
        headCont.classList.remove('pb-b')
        headLogo.classList.remove('d-block')
        headBtn.classList.remove('d-block')
      }
    }
  }

  carClick1(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci1.classList.add('active')
    ci2.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick2(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci2.classList.add('active')
    ci1.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick3(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci3.classList.add('active')
    ci2.classList.remove('active')
    ci1.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick4(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci4.classList.add('active')
    ci2.classList.remove('active')
    ci1.classList.remove('active')
    ci3.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick5(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci5.classList.add('active')
    ci2.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci1.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick6(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci6.classList.add('active')
    ci2.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci1.classList.remove('active')
    ci7.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick7(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci7.classList.add('active')
    ci2.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci1.classList.remove('active')
    ci8.classList.remove('active')
  }
  carClick8(){
    let ci1 = document.getElementById('CI1') as HTMLElement;
    let ci2 = document.getElementById('CI2') as HTMLElement;
    let ci3 = document.getElementById('CI3') as HTMLElement;
    let ci4 = document.getElementById('CI4') as HTMLElement;
    let ci5 = document.getElementById('CI5') as HTMLElement;
    let ci6 = document.getElementById('CI6') as HTMLElement;
    let ci7 = document.getElementById('CI7') as HTMLElement;
    let ci8 = document.getElementById('CI8') as HTMLElement;
    ci8.classList.add('active')
    ci2.classList.remove('active')
    ci3.classList.remove('active')
    ci4.classList.remove('active')
    ci5.classList.remove('active')
    ci6.classList.remove('active')
    ci7.classList.remove('active')
    ci1.classList.remove('active')
  }





}
