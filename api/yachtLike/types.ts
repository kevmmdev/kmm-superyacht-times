export type Material = {
  id: number;
  name: string;
};

export type Engine = {
  model: string;
  manufacturer: string;
  type: string;
  hp: number;
  kw: number;
  count: number;
};

export type Propulsion = {
  type: string;
  count: number;
};

export type Company = {
  id: number;
  slug: string;
  name: string;
  country?: {
    id: number;
    name: string;
  };
};

export type Designer = {
  naval?: { company: Company };
  exterior?: { company: Company };
  interior?: { company: Company };
};

export type Photo = {
  id: number;
  primary: boolean;
  syt_custom_collection: boolean;
  credit: string | null;
  photographer_name: string | null;
  date_time: string | null;
  created_at: string;
};

export type Phase = {
  id: number;
  type: string;
  primary: boolean;
  start_date: string | null;
  end_date: string | null;
  company: Company;
  facility: Company & {
    port?: string;
  };
  hull_id: string;
};

export type YachtLike = {
  id: string;
  yacht_like_id: number;
  yacht_like_type: string;
  slug: string;
  model_slug: string | null;
  name: string;
  imo: number | null;
  volume: number | null;
  guest_cabin_count: number | null;
  guest_count: number | null;
  crew_cabin_count: number | null;
  crew_size: number | null;
  max_speed: string | null;
  cruise_speed: string | null;
  fuel_capacity: number | null;
  water_capacity: number | null;
  draught_min: string | null;
  draught_max: string | null;
  hull_type: string | null;
  hull_configuration: string | null;
  number_of_masts: number | null;
  number_of_decks: number | null;
  range: number | null;
  range_at: string | null;
  type: string;
  length_overall: string | null;
  length_at_waterline: string | null;
  beam: string | null;
  electric: boolean;
  custom: boolean;
  introduction_year: number | null;
  out_of_production_year: number | null;
  weight_dry: number | null;
  engine_location: string | null;
  syt_custom_photo_collection_enabled: boolean;
  mmsi: number | null;
  official_number: string | null;
  rig_type: string | null;
  yacht_class: string | null;
  hull_materials: Material[];
  superstructure_materials: Material[];
  subtypes: string[];
  flag: string | null;
  description: string | null;
  previous_names: string[];
  engines: Engine[];
  propulsion: Propulsion[];
  designers: Designer[];
  photos: Photo[];
  video: unknown;
  phases: Phase[];
  primary_build_phase: Phase;
  build_year: number | null;
  sales: unknown[];
  sort_price: number | null;
  indexed_at: string;
};

export type YachtSearchResponse = {
  meta: {
    total: number;
  };
  yacht_likes: YachtLike[];
};