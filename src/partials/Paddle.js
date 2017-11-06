import { SVG_NS, KEYS } from '../settings.js';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.width = width;
    this.boardHeight = boardHeight;
    this.height = height;
    this.x = x;
    this.y = y;

    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        case KEYS.m:
          this.bigSize();
          break;
        case KEYS.n:
          this.smallSize();
          break;
      }
    });
  }

  bigSize() {
    if (this.height === 56) {
      this.height = 100;
      this.speed = 3;
      this.width = 8;
    } else {
      this.height = 56;
      this.speed = 10;
      this.width = 8;
    }
  }

  smallSize() {
    if (this.height === 56) {
      this.height = 30;
      this.speed = 30;
      this.width = 2;
    } else {
      this.height = 56;
      this.speed = 10;
      this.width = 8;
    }
  }

  up() {
    this.y = Math.max(this.y - this.speed, 0);
  }

  down() {
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }


  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return { leftX, rightX, topY, bottomY };
  }


  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'white');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    svg.appendChild(rect);
  }
}




