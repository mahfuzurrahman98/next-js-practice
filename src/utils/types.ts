export type SnippetType = {
  uuid: string;
  title: string;
  language: string;
  sourceCode: string;
  owner: string;
  tags?: string[];
  createdAt?: string;
};

export type searchParamsType = {
  q?: string;
  lang?: string;
  page?: number;
  limit?: number;
};
