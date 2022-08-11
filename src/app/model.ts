import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];
 
    constructor(){
        this.name="Aleyna";
        this.items=[
            {description:"dog",action:true},
            {description:"shopping",action:false },
            {description:"shopping",action:false },
            {description:"shopping",action:false },

        ]
    }
}