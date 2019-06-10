export interface BeerContainer {
    beerType: BeerType,
    temperature: Number,
    isOutRange: Boolean
}

export enum BeerType{
    PILSNER = 1,
    IPA = 2,
    LAGER = 3,
    STOUT = 4,
    WHEATBEER = 5,
    PALEALE = 6
}