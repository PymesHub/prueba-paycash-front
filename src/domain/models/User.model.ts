import { CalendarDate } from "@internationalized/date";

export class UserModel {
  constructor(
    public id: string | null,
    public name: string,
    public lastName: string,
    public email: string,
    public birthday: string | CalendarDate,
    public genre: string,
    public actions?: string,
    public statusPLD?: string
  ) {}
}
