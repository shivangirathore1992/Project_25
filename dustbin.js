class Dustbin extends BaseClass {
    constructor(x, y, width, height) {

        super(x,y,width,height);
        this.image = loadImage("dustbin.png");
       
       
    } display() {
         scale(0.5,0.5)
         image(this.image, 300,300, 100,100);
    }
}
