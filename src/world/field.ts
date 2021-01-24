import { Circle } from '@nodetron/math/Circle'
import { AbstractField, AbstractFieldPart } from '@nodetron/types/world'

export class Field implements AbstractField {
    public length: number;

    public width: number;

    public boundaryWidth: number;

    public centerMark: Circle;

    public goal: AbstractFieldPart;

    public penalty: AbstractFieldPart;

    public constructor(field: AbstractField) {
      this.length = field.length
      this.width = field.width
      this.boundaryWidth = field.boundaryWidth
      this.centerMark = new Circle(
        field.centerMark.center.x,
        field.centerMark.center.y,
        field.centerMark.radius,
      )
      this.goal = field.goal
      this.penalty = field.penalty
    }
}
