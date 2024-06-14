export interface User {
    user : {
        Username: string;
        Password: string;
        Email: string;
        Cart: string[];
        GoogleID: string
    } | null;
}

export interface Token {
    token : string | null
}

export interface Cake {
    
    Name: string,
    Description: string,
    Ingredients: string[],
    Theme: string[],
    ImagePath: string,
    Veg: Boolean

}