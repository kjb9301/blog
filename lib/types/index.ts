export type PageProps = {
  isLoggedIn: boolean;
}

export type Post = {
  id?: string;
  category: string;
  title: string;
  description: string;
  htmlContent: string;
  mdContent: string;
  regDate: string | Date;
}

export type PostForm = {
  category: string;
  title: string;
  description: string;
  htmlContent: string;
  mdContent: string;
  regDate: Date | string;
}

export type Login = {
  email: string;
  password: string;
}

export type User = {
  name: string;
  nickName: string;
  introduction: string;
}