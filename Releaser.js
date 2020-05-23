class Releaser {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y ,width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        rectMode(screenLeft);
        fill("white");
        rect(pos.x, pos.y - 60, this.width, this.height);
    }

}