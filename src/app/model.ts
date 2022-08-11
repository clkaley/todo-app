import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];
 
    constructor(){
        this.name="Aleyna";
        this.items=[
            {description:"walk",action:"yes"},
            {description:"shopping",action:"no"},
            {description:"walk",action:"yes"},
            {description:"shopping",action:"no"},
            {description:"walk",action:"yes"},
            {description:"shopping",action:"no"},
        ]
    }
}