import Point from '@nodetron/math/Point2D'
import { IBall } from '@nodetron/types/data'

export default class Ball implements IBall {
    public position: Point;

    public radius : number;

    constructor(ball : IBall) {
      this.position = new Point(ball.position.x,
        ball.position.y)
      this.radius = ball.radius
    }
}
