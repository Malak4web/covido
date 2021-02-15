import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class DataService {
  config: any = { protect: "3", feed: "8", care: "7" };
  URL = "https://hsird-cov19.info";
  // URL = "http://racotis.local/";
  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  getConfig() {
    return this.http
      .get(this.URL + "/wp-json/app/v1/getConfig")
      .toPromise()
      .then((data) => {
        this.config = data;
        return data
      });
  }

  getQuestions(){
    return this.http
      .get(this.URL + "/wp-json/app/v1/getques")
      .toPromise()
      .then((data) => {
        // this.config = data;
        return data
      });
  }

  getContent(id) {
    return this.http.get(this.URL + "/wp-json/app/v1/getHTML?id=" + id);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "",
      message:
        'لتعرف المزيد عن المبادرة، يرجى زيارة الموقع الخاص بالمشروع: <a href="https://hsird-cov19.info" target="_blank">https://hsird-cov19.info</a>',
      buttons: ["حسنا"],
      cssClass: "customAlert",
    });

    await alert.present();
  }

  async cognates(total , points){
    const alert = await this.alertController.create({
      header: "",
      message:
        'مبروك لقد انهيت المسابقة بمجموع ' + points + " من " + total ,
      buttons: ["حسنا"],
      cssClass: "customAlert",
    });

    await alert.present();
  }
}
