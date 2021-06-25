class Dustbin extends BaseClass {
    constructor(x, y, width, height) {

        super(x,y,width,height);
        this.image = loadImage("dustbin.png");
        sprite.scale = 3;

    } display() {
         scale(0.5,0.5)
         image(this.image, pos.x, pos.y, this.width, this.height);
    }
}
