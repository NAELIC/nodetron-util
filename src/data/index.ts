import { DataMessage, IRobot } from '@nodetron/types/data'
import { Color } from '@nodetron/types/data/enum'

import { Ball } from './ball'
import { Field } from './field'
import { Robot } from './robot'

export class Data implements DataMessage {
    public field: Field;

    public robots: {
        allies: Array<Robot>,
        opponents: Array<Robot>,
    } = {
      allies: [],
      opponents: [],
    };

    public ball: Ball;

    public color: Color;

    constructor(data: DataMessage) {
      this.field = new Field(data.field)

      data.robots.allies.forEach((robot : IRobot) => {
        this.robots.allies[robot.id] = new Robot(robot)
      })

      data.robots.opponents.forEach((robot : IRobot) => {
        this.robots.opponents[robot.id] = new Robot(robot)
      })

      this.ball = new Ball(data.ball)

      this.color = data.color
    }
}
