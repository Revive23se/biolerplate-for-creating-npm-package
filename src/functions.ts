import { SayHelloProps } from "./types";

export function sayHello({firstName, lastName, age}:SayHelloProps){
    
    console.log("Hello! Your first name is ",firstName);
    console.log("Hello! Your last name is ",lastName);
    console.log("Hello! Your age name is ",age);
}