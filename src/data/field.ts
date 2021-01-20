import Circle from '@nodetron/math/Circle'
import { IField, IFieldObject } from '@nodetron/types/data'

export default class Field implements IField {
    public length: number;

    public width: number;

    public boundaryWidth: number;

    public centerMark: Circle;

    public goal: IFieldObject;

    public penalty: IFieldObject;

    public constructor(field: IField) {
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
