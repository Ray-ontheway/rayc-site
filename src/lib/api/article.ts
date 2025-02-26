'use server';

import { ArticleTag, ArticleType, PageObj } from '../definitions';

const baseURL = process.env.API_URL!;

const ArticleApiPath = {
  PAGE: `${baseURL}/article/essays`,
  TAGS: `${baseURL}/article/tag/all`,
  TYPES: `${baseURL}/article/type/all`,
};

interface PostQueryData {
  pageIdx: number;
  pageSize: number;
  typeKey?: string;
  tagKey?: string;
}

async function doFetchArticlePage({
  pageIdx,
  pageSize,
  typeKey,
  tagKey,
}: PostQueryData) {
  try {
    console.log('doFetchArticlePage', pageIdx, pageSize, typeKey, tagKey);

    const url = new URL(ArticleApiPath.PAGE);
    url.searchParams.append('pageIdx', pageIdx.toString());
    url.searchParams.append('pageSize', pageSize.toString());
    if (typeKey) {
      console.log('typeKey', typeKey);
      url.searchParams.append('typeKey', typeKey);
    }
    if (tagKey) {
      url.searchParams.append('tagKey', tagKey);
    }
    const response: Response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const pageObj = data.data as PageObj;
    console.log('pageObj', pageObj);

    return pageObj;
  } catch (error) {
    throw error;
  }
}

export async function fetchArticlePage(pageIdx: number, pageSize: number) {
  try {
    return doFetchArticlePage({ pageIdx, pageSize });
  } catch (error) {
    throw error;
  }
}

export async function fetchArticlePageByType(
  pageIdx: number,
  pageSize: number,
  typeKey: string,
) {
  const queryData = {
    pageIdx: pageIdx,
    pageSize: pageSize,
    typeKey: typeKey,
  } satisfies PostQueryData;
  console.log('fectchArticlePageByType', queryData);

  try {
    return doFetchArticlePage(queryData);
  } catch (error) {
    throw error;
  }
}

export async function fetchArticlePageByTag(
  pageIdx: number,
  pageSize: number,
  tagKey: string,
) {
  try {
    const queryData = {
      pageIdx: pageIdx,
      pageSize: pageSize,
      tagKey: tagKey,
    } satisfies PostQueryData;
    console.log('fectchArticlePageByTag', queryData);

    return doFetchArticlePage(queryData);
  } catch (error) {
    throw error;
  }
}

export async function fetchAllArticleTag() {
  try {
    const response = await fetch(ArticleApiPath.TAGS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data.data as ArticleTag[];
  } catch (error) {
    throw error;
  }
}

export async function fetchAllArticleType() {
  try {
    const response = await fetch(ArticleApiPath.TYPES, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data.data as ArticleType[];
  } catch (error) {
    throw error;
  }
}

export async function fetchArticleByUid(uid: string) {
  try {
    const url = new URL(`${baseURL}/article/${uid}`);
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('NotFound');
      }
      return undefined;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}
