export type WPPostType = 'posts' | 'pages';

// Yoast SEO types
interface YoastRobots {
  index: string;
  follow: string;
  'max-snippet': string;
  'max-image-preview': string;
  'max-video-preview': string;
}

interface YoastTwitterMisc {
  'Escrito por': string;
  'Est. tempo de leitura': string;
}

interface MediaObject {
  width: number;
  height: number;
  url: string;
  type: string;
}

interface YoastHeadJson {
  title: string;
  robots: YoastRobots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_published_time: string;
  article_modified_time?: string;
  og_image: MediaObject[];
  author: string;
  twitter_card: string;
  twitter_misc: YoastTwitterMisc;
  schema: SchemaGraph;
}
// Yoast SEO types
interface YoastRobots {
  index: string;
  follow: string;
  'max-snippet': string;
  'max-image-preview': string;
  'max-video-preview': string;
}

interface YoastTwitterMisc {
  'Escrito por': string;
  'Est. tempo de leitura': string;
}

interface SchemaWebPage {
  '@type': string;
  '@id': string;
  url: string;
  name: string;
  isPartOf: { '@id': string };
  primaryImageOfPage?: { '@id': string };
  image?: { '@id': string };
  thumbnailUrl?: string;
  datePublished: string;
  dateModified?: string;
  author: { '@id': string };
  breadcrumb: { '@id': string };
  inLanguage: string;
  potentialAction: SchemaAction[];
}

// Schema.org types
interface SchemaAction {
  '@type': string;
  target: string[] | { '@type': string; urlTemplate: string };
  'query-input'?: {
    '@type': string;
    valueRequired: boolean;
    valueName: string;
  };
}

interface SchemaListItem {
  '@type': string;
  position: number;
  name: string;
  item?: string;
}

interface SchemaImageObject {
  '@type': string;
  inLanguage?: string;
  '@id': string;
  url: string;
  contentUrl: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface SchemaPerson {
  '@type': string;
  '@id': string;
  name: string;
  image: SchemaImageObject;
  sameAs?: string[];
  url: string;
}

interface SchemaWebSite {
  '@type': string;
  '@id': string;
  url: string;
  name: string;
  description: string;
  potentialAction: SchemaAction[];
  inLanguage: string;
}

interface SchemaBreadcrumbList {
  '@type': string;
  '@id': string;
  itemListElement: SchemaListItem[];
}

interface SchemaGraph {
  '@context': string;
  '@graph': (
    | SchemaWebPage
    | SchemaImageObject
    | SchemaBreadcrumbList
    | SchemaWebSite
    | SchemaPerson
  )[];
}

export type WPPost = {
  id: string;
  slug: string;
  date: string;
  type: string;
  link: string;
  author: number;
  format: string;
  status: string;
  sticky: boolean;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  categories: Array<number>;
  _embedded: WPPostEmbedded;
  yoast_head_json: YoastHeadJson;
  jetpack_featured_media_url: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories_detailed: Array<{
    id: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
  }>;
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
