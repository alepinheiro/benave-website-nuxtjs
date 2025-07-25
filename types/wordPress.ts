export type WPPostType = 'posts' | 'pages';
export type WPPost = {
  id: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  date_gmt: string;
  format: string;
  modified: string;
  modified_gmt: string;
  status: string;
  sticky: boolean;
  type: string;
  link: string;
  _embedded: WPPostEmbedded;
  jetpack_featured_media_url: string;
};

export type WPPage = {
  id: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  date_gmt: string;
  format: string;
  modified: string;
  modified_gmt: string;
  status: string;
  sticky: boolean;
  type: string;
  link: string;
  _embedded: WPPostEmbedded;
  jetpack_featured_media_url: string;
};
export type WPMediaDetailSize = {
  file: string;
  height: number;
  mime_type: string;
  source_url: string;
  witdh: number;
};
export type WPMediaDetailSizes = {
  medium: WPMediaDetailSize;
  full: WPMediaDetailSize;
  large: WPMediaDetailSize;
  medium_large: WPMediaDetailSize;
  thumbnail: WPMediaDetailSize;
};

export type WPPostEmbedded = {
  author: [
    {
      id: string;
      name: string;
      url: string;
      avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
      description: string;
      link: string;
      slug: string;
    },
  ];
  'wp:featuredmedia'?: Array<{
    alt_text: string;
    author: number;
    caption: {
      rendered: string;
    };
    date: string;
    id: number;
    link: string;
    media_details: {
      width: number;
      height: number;
      file: string;
      image_meta: {
        [key: string]: string;
      };
      sizes: WPMediaDetailSizes;
    };
    media_type: string;
    mime_type: string;
    slug: string;
    source_url: string;
    title: {
      rendered: string;
    };
    type: string;
  }>;
  'wp:term': [
    [
      {
        id: string;
        link: string;
        name: string;
        slug: string;
        taxonomy: string;
      },
    ],
  ];
};

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export type FormattedPost = {
  id: string;
  slug: string;
  date: Date;
  title: string;
  excerpt: string;
  createdAt: Date;
  content?: string;
  featuredImage: string | undefined;
  categories: Array<{
    id: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
  }>;
};
