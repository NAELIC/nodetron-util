import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum'

import { Ball } from './ball'
import { Field } from './field'
import { Robot } from './robot'

export class World implements WorldMessage {
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

    constructor(data: WorldMessage) {
      this.field = new Field(data.field)

      data.robots.allies.forEach((robot) => {
        this.robots.allies[robot.id] = new Robot(robot)
      })

      data.robots.opponents.forEach((robot) => {
        this.robots.opponents[robot.id] = new Robot(robot)
      })

      this.ball = new Ball(data.ball)

      this.color = data.color
    }
}
