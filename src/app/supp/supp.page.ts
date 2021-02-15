import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { DataService } from "../data.service";

@Component({
  selector: "app-supp",
  templateUrl: "./supp.page.html",
  styleUrls: ["./supp.page.scss"],
})
export class SuppPage implements OnInit {
  constructor(
    public data: DataService,
    private alertController: AlertController,
    private nav: NavController
  ) {}

  ngOnInit() {}

  async alertFood() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text:
            "تعرف المزيد عن المأكوالت والمشروبات التي تعزز من جهازك المناعي في مواجهة فيروس كورونا",
          handler: () => {
            this.nav.navigateForward("/web-content/" + this.data.config.feed);
          },
        },
        {
          text: " تعرف المزيد عن االجراءات الوقائية واحم نفسك من الكورونا ",
          handler: () => {
            this.nav.navigateForward(
              "/web-content/" + this.data.config.protect
            );
          },
        },
        {
          text:
            "في حالة إن كان لديك أي استفسارات أخرى، يرجي االتصال بالخط الساخن لوزارة الصحةالمصرية 105",
          handler: () => {
            window.open("tel:105", "_system");
          },
        },
      ],
      cssClass: "customAlert btns",
    });

    await alert.present();
  }

  async chooseReg() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: "هل أنت قبطي أم مسلم؟",
      buttons: [
        {
          text: " مسلم",
          handler: () => {
           this.showContact();
          },
        },
        {
          text:
            "قبطي",
          handler: () => {
           this.christian()
          },
        },
      ],
      cssClass: "customAlert",
    });

    await alert.present();
  }

  async christian() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'أرثوذكس',
          handler: () => {
            this.showContact()
          }
        }, {
          text: 'كاثوليك',
          handler: () => {
            this.showContact()
          }
        },
        {
          text: 'إنجيلي',
          handler: () => {
            this.showContact()
          }
        }
      ],
      cssClass: "customAlert",
    });
  
    await alert.present();
  }

 async showContact() {
   const alert = await this.alertController.create({
    //  header: 'Alert',
    //  subHeader: 'Subtitle',
     message: 'تواصل معنا <br> +20 1270982494 <br> info@hsird-cov19.info',
     buttons: ['حسنا'],
     cssClass: "customAlert",
    });
 
   await alert.present();
 }
}
