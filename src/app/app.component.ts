import { Component, OnInit } from "@angular/core";

import { AlertController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { DataService } from "./data.service";
import {
  ELocalNotificationTriggerUnit,
  LocalNotifications,
} from "@ionic-native/local-notifications/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  config;
  appPages = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    public data: DataService,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.data.getConfig().then((data: any) => {
        console.log(data);
        this.config = data;
        this.appPages = [
          {
            img: "../../assets/تتبع حالتك.png",
            title: "تتبع حالتك",
            url: "/check",
          },
          {
            img: "../../assets/احم نفسك.png",
            title: "احم نفسك",
            url: "/web-content/" + data.protect,
          },
          {
            img: "../../assets/تغذى جيد.png",
            title: "تغذى جيد",
            url: "/web-content/" + data.feed,
          },
          {
            img: "../../assets/نتضامن سويا.png",
            title: "نتضامن سويا",
            url: "/web-content/" + data.care,
          },
          {
            img: "../../assets/العب.png",
            title: "العب",
            // url: "/web-content/" + data.protect,
          },
          {
            img: "../../assets/نحن ندعمك.png",
            title: "نحن ندعمك",
            // url: "/web-content/" + data.protect,
          },
        ];

        this.splashScreen.hide();
      });
      this.statusBar.backgroundColorByHexString("#004e72");
      this.presentAlert();
      this.configNotifications();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "",
      message:
        "كوفيدو هي مبادرة مصرية أطلقها مجموعة من القادة الدينيين والشباب الفاعل في المؤسسات الدينية، وتنفذ هذه المبادرة من قبل مؤسسة ماعت في إطار مشروعها المدعم من مركز كايسيد للحوار العالمي",
      buttons: ["حسنا"],
      cssClass: "customAlert",
    });

    await alert.present();

    // setTimeout(() => {
    //   alert.dismiss();
    // }, 3e3);
  }

  configNotifications() {
    let arr = [
      "سوف تمر هذه العاصفة",
      "ايمانك يجب ان يكون اكبر من خوفك",
      "من دون الألم لن نعرف السعادة",
      "انتهي الماضي فلا تعش فيه!",
      "خلف الصبر أشياء جميلة تنتظر",
      "إبق قوياً فقصتك لم تنتهي بعد",
      "استمتع بأشياءك المفضلة مهما كانت تبدو تافههة للغير انت غير ملزوم بشرح ما تحب",
      "كن سعيداً حتي يخجل الجميع من الحزن بقربك",
      "ربما ازعجك الامس لكن ما ذنب اليوم ان يري وجهك عابساً؟",
      " في بعض الأحيان لحظة واحدة تكفي لتغيير حياتك بالكامل",
      "لا تقتل صباحك بأفكار الأمس، ثق بأن لكل يوم اشياء اجمل",
      " كن انت الأمل حتي إن اغرقك من حولك باليأس",
      " كل شيء ممكن، المستحيل يأخذ وقتاً اطول فقط",
      "لا تأتيك الأيام الجميلة من تلقاء نفسها، عليك انت ان تسعي إليها",
      "Your current situation is not your final destination, Always remember that",
      "Do not give your past the power to define your future",
      "you cannot go back and change the beginning but you can start where you are and change the ending",
      "Believe in yourself and you will be unstoppable",
      "Great things never came from comfort zones",
      "Let today be the start of something new",
      "Don’t decrease the goal, Increase the effort",
      "the distance between dreams and reality is called ACTION",
      " Remember why you started",
      "Never give up, Today is hard, Tomorrow will be worse, But the day after tomorrow will be sunshine",
      "If you can dream it, you can do it",
      "Believeing in yourself is the first secret to success",
      "Nothing is impossible, even the word says “I’m Posible”",
      "Believe in yourself and everything is possible",
      "لا احد يفهم مشاعرنا الضبط،الا الله",
      "يمكن ان يكون حلمك نجمة و الله كاتب لك القمر",
      "و في كل مرة تظن بالله خيراً، يكرمك بأكثر مما ظننت",
      " إطمئن، فصوتك يسمعه الله حين تظن ان لا احد يسمعك",
      "كن علي يقين دائم ان الله هو الألطف بك",
      "لا تفقد صبرك فالأشياء الجميلة تأتي بعد صبر جميل",
      " Work hard in silence. Let your success be your noise.",
      " إِنَّ مَعَ الْعُسْرِ يُسْرًا (6) سوره الشرح",
      " بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ ۖ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ (117) سوره البقره",
      " وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا (48)سوره الطور",
      " وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ (186)سوره البقره",
      " وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ  (115) (هود)",
      " قَالُوا أَإِنَّكَ لَأَنْتَ يُوسُفُ قَالَ أَنَا يُوسُفُ وَهَذَا أَخِي قَدْ مَنَّ اللَّهُ عَلَيْنَا إِنَّهُ مَنْ يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ  (90) (يوسف)",
      " فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ وَلَا تَسْتَعْجِلْ لَهُمْ كَأَنَّهُمْ يَوْمَ يَرَوْنَ مَا يُوعَدُونَ لَمْ يَلْبَثُوا إِلَّا سَاعَةً مِنْ نَهَارٍ بَلَاغٌ فَهَلْ يُهْلَكُ إِلَّا الْقَوْمُ الْفَاسِقُونَ (35) (الأحقاف)",
      " يُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ ۚ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا ۚ سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا (7) سوره الطلاق",
      ' "لاَ تَخَفْ لأَنِّي مَعَكَ، وَأُبَارِكُكَ" (سفر التكوين 26: 24)',
      ' "انْتَظِرِ الرَّبَّ. لِيَتَشَدَّدْ وَلْيَتَشَجَّعْ قَلْبُكَ، وَانْتَظِرِ الرَّبَّ" (سفر المزامير( 27: 14)',
      ' "تَشَدَّدُوا وَتَشَجَّعُوا. لاَ تَخَافُوا وَلاَ تَرْهَبُوا وُجُوهَهُمْ، لأَنَّ الرَّبَّ إِلهَكَ سَائِرٌ مَعَكَ. لاَ يُهْمِلُكَ وَلاَ يَتْرُكُكَ" (سفر التثنية 31: 6)',
      ' 	"حِينَئِذٍ تُفْلِحُ إِذَا تَحَفَّظْتَ لِعَمَلِ الْفَرَائِضِ وَالأَحْكَامِ الَّتِي أَمَرَ بِهَا الرَّبُّ.. تَشَدَّدْ وَتَشَجَّعْ لاَ تَخَفْ وَلاَ تَرْتَعِبْ" (سفر أخبار الأيام الأول 22: 13)',
      ' 	"تَشَدَّدْ وَتَشَجَّعْ! لاَ تَرْهَبْ وَلاَ تَرْتَعِبْ لأَنَّ الرَّبَّ إِلهَكَ مَعَكَ حَيْثُمَا تَذْهَبُ" (سفر يشوع 1: 9)',
      " قَدْ كَلَّمْتُكُمْ بِهَذَا لِيَكُونَ لَكُمْ فِيَّ سَلَامٌ. فِي ٱلْعَالَمِ سَيَكُونُ لَكُمْ ضِيقٌ، وَلَكِنْ ثِقُوا: أَنَا قَدْ غَلَبْتُ ٱلْعَالَمَ.( يوحنَّا 16: 33)",
      " سَلَامًا أَتْرُكُ لَكُمْ. سَلَامِي أُعْطِيكُمْ. لَيْسَ كَمَا يُعْطِي ٱلْعَالَمُ أُعْطِيكُمْ أَنَا. لَا تَضْطَرِبْ قُلُوبُكُمْ وَلَا تَرْهَبْ.( يوحنَّا 14: 27)",
    ];
    // let msg = arr[Math.floor(Math.random() * arr.length)];
    this.localNotifications.schedule({
      id: 15,
      title: arr[Math.floor(Math.random() * arr.length)],
      trigger: {
        every: ELocalNotificationTriggerUnit.DAY,
      },
    });

    this.localNotifications.on("trigger").subscribe((data) => {
      console.log(data);
      this.localNotifications.update({
        id: 15,
        title: arr[Math.floor(Math.random() * arr.length)],
      });
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}
