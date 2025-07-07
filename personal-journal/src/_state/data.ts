import Dexie, { type EntityTable } from "dexie";
import { Habit } from "@/state/habittracker/habits";
import { HabitAction, HabitActionType } from "./habittracker/habitActions";

const db = new Dexie("HabitDatabase") as Dexie & {
    habits: EntityTable<Habit, "name">,
    habitActions: EntityTable<HabitAction & { id: string }, "id">
}

db.version(1).stores({
    habits: 'name, createOn',
    habitActions: 'id++, habitName, action, timestamp'
})

export const data = db 