import { SVG_NS } from '../settings.js';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-01.wav');

    this.reset();
  }

  // resets ball at the center, randomly generates a number to throw the ball to the right
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }

    // this.vx = 6 - 5;
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollsion(paddle1, paddle2) {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y + this.radius <= 0;
    const hitBottom = this.y - this.radius >= this.boardHeight;

    if (hitLeft) {
      this.direction = -1;
      this.goal(paddle2);

    } else if (hitRight) {
      this.direction = 1;
      this.goal(paddle1);
      
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }

  }

  paddleCollision(paddle1, paddle2) {
    if (this.vx > 0) {
      
      let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      let { leftX, topY, bottomY } = paddle;
      if (
        this.x + this.radius >= leftX
        && this.y >= topY
        && this.y <= bottomY
      ) {
        this.vx = -this.vx
        this.ping.play()
      }
    } else {

      let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      let { rightX, topY, bottomY } = paddle;
      if (
        this.x - this.radius <= rightX
        && this.y >= topY
        && this.y <= bottomY
      ) {
        this.vx = -this.vx
        this.ping.play()
      }
    }
  }

  goal(paddle) {
    paddle.score++;
    this.reset();
  }


  render(svg, paddle1, paddle2) {
    this.x += this.vx;
    this.y += this.vy;
    this.wallCollsion(paddle1,paddle2);
    this.paddleCollision(paddle1, paddle2);
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'fill', 'white');
    svg.appendChild(ball);
  }
}
