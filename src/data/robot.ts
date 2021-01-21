import { IRobot } from '@nodetron/types/data'
import { Point } from '@nodetron/math/Point2D'
import { Kick } from '@nodetron/types/data/enum'

export class Robot implements IRobot {
    public id : number;

    public position: Point;

    public orientation : number;

    public infrared: boolean;

    public kick: Kick;

    public radius: number;

    constructor(robot: IRobot) {
      this.id = robot.id
      this.position = new Point(robot.position.x,
        robot.position.y)
      this.orientation = robot.orientation
      this.radius = robot.radius
      this.infrared = robot.infrared
      this.kick = robot.kick
    }
}
