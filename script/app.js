
import "../style/style.css";

const Card = function(width,height,specialPaper, regularPaper){
    this.width = width
    this.height = height
    this.specialPaper = specialPaper
    this.regularPaper = regularPaper

    this.CulateCard = function(){
        if(this.width <= 47 && this.height <= 32 && this.regularPaper===true){
            console.log('Card Per unit cost will be' , ( 5 /(Math.floor(47/this.width)) * (Math.floor(32/this.height))))
        } else if(this.width <= 47 && this.height <= 32 && this.regularPaper===false && this.specialPaper===true){
            console.log('Card Per unit cost will be' , ( 7 /(Math.floor(47/this.width)) * (Math.floor(32/this.height))))
        }
    }
}

const result = new Card(21,29.7, true, false)
result.CulateCard()

const Sticker = function(width,height,glossySticker, Mattsticker){
    Card.call(this, width, height)
    this.glossySticker = glossySticker
    this.Mattsticker = Mattsticker
    this.check = this.glossySticker===true || this.Mattsticker === false || this.glossySticker===false || this.Mattsticker === true
    this.calculateSticker = function(){
        if(this.width <= 47 && this.height <= 32 && this.check===true){
            console.log('Sticker Per unit cost will be' , ( 5 /(Math.floor(47/this.width)) * (Math.floor(32/this.height))))
        }
    }
}
const result2 = new Sticker(21,29.7, false, true)
result2.calculateSticker()