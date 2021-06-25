class Dustbin extends BaseClass {
    constructor(x, y, width, height) {

        super(x,y,width,height);
        this.image = loadImage("dustbin.png");
        sprite.scale = 3;

    } display() {

        super.display();
    }
}
