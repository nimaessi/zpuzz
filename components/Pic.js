const imgs = [
    {
        "img": "fox",
        "matched": false
    },
    {
        "img": "bison",
        "matched": false
    },
    {
        "img": "bl",
        "matched": false
    },
    {
        "img": "ele",
        "matched": false
    },
    {
        "img": "tiger",
        "matched": false
    },
    {
        "img":"cow",
        "matched": false
    }
  ];
const ImgAddress = (namePic) => {
    var imgAdd;
    switch(namePic){
        case "fox":
         imgAdd = require('../img/fox.png');
         break;
        case "bison":
            imgAdd = require('../img/bison.png');
        break;
        case "bl":
            imgAdd = require('../img/bl.png');
        break;
        case "ele":
            imgAdd = require('../img/ele.png');
        break;
        case "tiger":
            imgAdd = require('../img/tiger.png');
        break;
        case "cow":
            imgAdd = require('../img/cow.png');
        break;
        default:
            imgAdd = '';
    }
    return imgAdd;
}

  export {imgs,ImgAddress}