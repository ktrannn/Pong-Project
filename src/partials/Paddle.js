import { SVG_NS } from '../settings.js';

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
      }
    });
  }


  up() {
    this.y = Math.max(this.y - this.speed,0);
  }

  down() {
    this.y = Math.min(this.y + this.speed, this.boardHeight-this.height);
  }


  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    // rect.setAttributeNS(null.'boardHeight', this.boardHeight)
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'white');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    svg.appendChild(rect);


  }


}




