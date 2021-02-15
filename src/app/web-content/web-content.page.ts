import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-web-content",
  templateUrl: "./web-content.page.html",
  styleUrls: ["./web-content.page.scss"],
})
export class WebContentPage implements OnInit {
  html;
  loading = 1;
  constructor(private sanitizer:DomSanitizer,private route: ActivatedRoute,public data:DataService) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.data.getContent(id).toPromise().then((data:any) => {
      console.log("loaded")
      console.log(data)
      // if(!data) this.nav.back();
      this.loading = 0;
      this.html = this.sanitizer.bypassSecurityTrustHtml(data.html);
    })
  }
}
