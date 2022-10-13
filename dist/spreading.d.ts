declare const whatisthis: {
    name: string;
    email: string;
    val: number;
    nullable: any;
};
declare const whatisthis_2: {
    mage: string;
    archer: string;
};
declare const cpy: (stuff: any) => {
    name: string;
    email: string;
    val: number;
    nullable: any;
} & {
    mage: string;
    archer: string;
};
declare const cpy_spread: (stuff: any) => {
    mage: string;
    archer: string;
    name: string;
    email: string;
    val: number;
    nullable: any;
};
declare const b: {
    name: string;
    email: string;
    val: number;
    nullable: any;
} & {
    mage: string;
    archer: string;
};
declare const c: {
    mage: string;
    archer: string;
    name: string;
    email: string;
    val: number;
    nullable: any;
};
