import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

@Component({
  selector: "app-target-page",
  templateUrl: "./target-page.page.html",
  styleUrls: ["./target-page.page.scss"]
})
export class TargetPagePage implements OnInit {
  imageResponse: any;
  options: any;
  targets: any[] = [
    {
      name: "Target1",
      image: "assets/images/image2.jpg",
      amount: 300.0,
      actualAmount: 100.0,
      date: new Date()
    },
    {
      name: "Target2",
      image: "assets/images/image2.jpg",
      amount: 300.0,
      actualAmount: 200.0,
      date: new Date()
    },
    {
      name: "Target3",
      image: "assets/images/image2.jpg",
      amount: 300.0,
      actualAmount: 200.0,
      date: new Date()
    },
    {
      name: "Target4",
      image: "assets/images/image2.jpg",
      amount: 300.0,
      actualAmount: 200.0,
      date: new Date()
    },
    {
      name: "Target5",
      image: "assets/images/image2.jpg",
      amount: 300.0,
      actualAmount: 200.0,
      date: new Date()
    }
  ];
  constructor(
    public alertController: AlertController,
    private imagePicker: ImagePicker
  ) {}

  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 1,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push("data:image/jpeg;base64," + results[i]);
        }
      },
      err => {
        alert(err);
      }
    );
  }

  async addNewTarget() {
    const alert = await this.alertController.create({
      header: "Add New Target",
      inputs: [
        {
          name: "Name",
          type: "text",
          placeholder: "Name"
        },
        {
          name: "Amount",
          type: "number",
          placeholder: "Amount"
        },
        {
          name: "Image",
          type: "text",
          placeholder: "Image"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Image",
          handler: () => {
            this.getImages();
          }
        },
        {
          text: "Ok",
          handler: alertData => {
            this.targets.push({
              name: alertData.Name,
              image: this.imageResponse[0],
              amount: alertData.Amount,
              date: new Date()
            });
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {}
}
