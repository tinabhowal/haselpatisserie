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
    // Theme: string[],
    ImagePath: string,
    Veg: boolean,
    BestSeller: boolean,
    Category: string,
    ul: {
        img1: string;
        img2: string;
        img3: string;
    };

}


export  interface productType {
    product: {
        img: string;
        ul: {
            img1: string;
            img2: string;
            img3: string;
        };
        title: string;
        description: string;
        bestseller: boolean
    };
    onClose: () => void
}