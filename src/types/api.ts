export type Response = {
  docs: Doc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number;
};

export type Doc = {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string | null;
  crew: any[]; // Can be replaced with more specific type if known
  ships: string[];
  capsules: any[]; // Can be replaced with more specific type if known
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: any; // Can be replaced with more specific type if known
  id: string;
};

export type Fairings = {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: string[];
};

export type Links = {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string | null;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
};

export type Patch = {
  small: string;
  large: string;
};

export type Reddit = {
  campaign: string | null;
  launch: string | null;
  media: string | null;
  recovery: string | null;
};

export type Flickr = {
  small: string[];
  original: string[];
};

export type Failure = {
  time: number;
  altitude: number | null;
  reason: string;
};

export type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: any; // Can be replaced with more specific type if known
  landpad: any; // Can be replaced with more specific type if known
};
