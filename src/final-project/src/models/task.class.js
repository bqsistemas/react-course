import { LEVELS } from "./enums.class"

export class Task {
    id = -1
    name = ''
    description = ''
    completed = false
    level = LEVELS.NORMAL

    constructor(id, name, description, completed, level){
        this.id = id
        this.name = name
        this.description = description
        this.completed = completed
        this.level = level
    }
}