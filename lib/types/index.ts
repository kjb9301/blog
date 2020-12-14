export type Post = {
  id: string;
  category: string;
  title: string;
  description: string;
  htmlContent: string;
  mdContent: string;
  regDate: string;
}

export type Login = {
  email: string;
  password: string;
}