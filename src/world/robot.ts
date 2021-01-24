import { AbstractRobot } from '@nodetron/types/world'
import { Point } from '@nodetron/math/Point2D'
import { Kick } from '@nodetron/types/enum'

export class Robot implements AbstractRobot {
    public id : number;

    public position: Point;

    public orientation : number;

    public infrared: boolean;

    public kick: Kick;

    public radius: number;

    constructor(robot: AbstractRobot) {
      this.id = robot.id
      this.position = new Point(robot.position.x,
        robot.position.y)
      this.orientation = robot.orientation
      this.radius = robot.radius
      this.infrared = robot.infrared
      this.kick = robot.kick
    }
}
