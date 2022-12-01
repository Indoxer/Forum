export interface IAuthor {
    id: number;
    username: string;
}

export interface ITag {
    id: number;
    name: string;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: ITag[];
    created_at: string;
    updated_at: string;
    author: IAuthor;
    answers_amount: number;
}