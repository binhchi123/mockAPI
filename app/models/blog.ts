export class Blog {
    id: number;
    title: string;
    avatar: string;
    content: string;
    constructor(id: number, title: string, avatar: string, content: string) {
        this.id = id;
        this.title = title;
        this.avatar = avatar;
        this.content = content;
    }
}
