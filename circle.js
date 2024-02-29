class Circle {
    x
    y
    radius
    color


    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    getX(){
        return this.x;
    }
    setX(x){
        return this.x = x;
    }
    getY(){
        return this.y;
    }
    setY(y){
        return this.y = y;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        return this.radius = radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        return this.color = color;
    }
    render(canvasId) {
        let c = document.getElementById(canvasId);
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
let circle = new Circle(100, 100, 50, "red");
circle.setX(50);
circle.setY(50);
circle.setRadius(80);
circle.setColor("#000000");
circle.render("myCanvas");