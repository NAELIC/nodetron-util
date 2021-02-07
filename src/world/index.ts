import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum'
import { GameControllerEvent } from '@nodetron/types/network/game-controller'

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

    public gameController: GameControllerEvent;

    constructor(world: WorldMessage) {
      this.field = new Field(world.field)

      world.robots.allies.forEach((robot) => {
        this.robots.allies[robot.id] = new Robot(robot)
      })

      world.robots.opponents.forEach((robot) => {
        this.robots.opponents[robot.id] = new Robot(robot)
      })

      this.ball = new Ball(world.ball)

      this.color = world.color
      this.gameController = world.gameController
    }
}
