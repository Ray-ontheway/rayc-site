export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type ArticleType = {
  uid: string;
  name: string;
  catKey: string;
  description: string;
  visitCount: number;
  createAt: Date;
  updateAt: Date;
};

export type ArticleTag = {
  uid: string;
  name: string;
  catKey: string;
  description: string;
  visitCount: number;
  createAt: Date;
  updateAt: Date;
};

export enum CatEnum {
  TAG = 'tag',
  TYPE = 'type',
}

export type Article = {
  uid: string;
  title: string;
  summary: string;
  content: string;
  cover: string;
  type: ArticleType;
  tags: ArticleTag[];
  visitedCount: number;
  createAt: Date;
  updateAt: Date;
};

export type PageObj = {
  pageIdx: number;
  pageSize: number;
  total: number;
  records: Article[];
};
