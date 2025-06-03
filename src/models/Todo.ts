export class Todo {

  id: number;
  title: string;
  text: string;
  completed: boolean;
  createdAt: Date;

  constructor(title: string, text: string) {
    const randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.id = parseInt(Date.now().toString() + randomDigits);
    this.title = title;
    this.text = text;
    this.completed = false;
    this.createdAt = new Date();
  }

}