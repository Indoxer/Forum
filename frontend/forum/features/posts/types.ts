export interface IAuthor {
    username: string;
}

export interface IPost {
    title: string;
    body: string;
    tags: string[];
    created_at: string;
    updated_at: string;
    author: IAuthor;
    answers_amount: number;
}