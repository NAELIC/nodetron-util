import { Point } from '@nodetron/math/Point2D'
import { AbstractBall } from '@nodetron/types/world'

export class Ball implements AbstractBall {
    public position: Point;

    public radius : number;

    constructor(ball : AbstractBall) {
      this.position = new Point(ball.position.x,
        ball.position.y)
      this.radius = ball.radius
    }
}
