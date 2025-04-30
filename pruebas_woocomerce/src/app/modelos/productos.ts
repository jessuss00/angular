export interface Productos {
    id: number;
    name: string;
    price: number;
    description: string;
    images: {
        src: string;
    }[];
    src: string;
}
