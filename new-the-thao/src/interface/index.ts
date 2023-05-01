export interface ISportItemProps {
  league: string;
  url: string;
  home: string;
  away: string;
  score?: {
    home: number;
    away: number;
  };
  homeLogo: string;
  awayLogo: string;
  round?: string;
  date: string;
}

export interface TeamItemProps {
  team_id: number;
  name: string;
  logo: string;
  country: object;
  founded: number;
  venue_name: string;
  venue_surface: string;
  venue_address: string;
  venue_city: string;
  vue_capacity: number;
  country_name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface MatchItemProps {
  away_team: TeamItemProps;
  home_team: TeamItemProps;
  elapsed: number;
  event_date: string;
  event_timestamp: number;
  first_half_start: number;
  fixture_id: number;
  goals_away_team: number;
  goals_home_team: number;
  league_id: number;
  position: number;
  referee: string;
  round: string;
  rount_int: number;
  score: {
    fulltime?: string;
    halftime?: string;
  };
  second_half_start: number;
  status: string;
  status_short: string;
  venue: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface LeagueItemProps {
  code: string;
  league_id: number;
  list_team: string;
  logo: string;
  name: string;
  season: string;
  season_end: string;
  season_start: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface EventItemProps {
  assist: string;
  assist_id: number;
  detail: string;
  elapsed: number;
  fixture_id: number;
  player: string;
  player_id: number;
  team_id: number;
  team_name: string;
  type: string;
  comments: string;
}
export interface StandingItemProps {
  all: object;
  away: object;
  home: object;
  forme: string;
  goals_diff: number;
  group: string;
  group_id: number;
  league_id: number;
  logo: string;
  points: number;
  rank: number;
  team_id: number;
  team_name: string;
}

export interface StandingObjectProps {
  [id: number]: StandingItemProps[];
}
export interface StatsItemProps {
  fixture_id: number;
  lineups: [
    {
      coach: string;
      coach_id: number;
      fixture_id: number;
      formation: string;
      substitutes: [];
      team_name: string;
    }
  ];
  players: [
    {
      cards: object;
      dribbles: object;
      diels: object;
      event_id: number;
      fixture_id: number;
      fouls: object;
      goals: object;
      minutes_played: number;
      number: number;
      passes: object;
      penalty: object;
      player_id: number;
      player_name: string;
      postition: string;
      rating: string;
      shots: object;
      substitute: string;
      tackles: object;
      team_id: number;
      team_name: string;
    }
  ];
  statistic: {
    ball_possession: object;
    blocked_shots: object;
    corner_kicks: object;
    fixture_id: number;
    fouls: object;
    goalkeeper_saves: object;
    offsides: object;
    passes: object;
    passes_accurate: object;
    red_cards: object;
    shots_insidebox: object;
    shots_off_goal: object;
    shots_on_goal: object;
    shots_outsidebox: object;
    total_passes: object;
    total_shots: object;
    yellow_cards: object;
  };
}
export interface ComponentTitleProps {
  title: string;
  url: string;
  showAll?: boolean;
}

export interface GallaryNewsProps {
  title: string;
  background: string;
  url: string;
  time: string;
}

export interface IVideo {
  url: string;
  background: string;
  title: string;
  time: string;
  slug: string;
  createdAt: string;
  thumb?: {
    long?: string;
    tall?: string;
    small?: string;
    medium?: string;
  };
}

export interface NewestVideoProps {
  listVideo: IVideo[];
}

export interface IPost {
  image: string;
  url: string;
  title: string;
  description: string;
}

export interface PostItemProps {
  title: string;
  slug: string;
  thumb: {
    small: string;
    tall: string;
    long: string;
    medium: string;
  };
  status?: number;
  domains?: [];
  categories?: CategoryItemProps[];
  tags?: TagsItemProps[];
  views?: number;
  likes?: number;
  description: string;
  content?: string;
  keyword?: [];
  isNoFollow?: boolean;
  isNoIndex?: boolean;
  createdAt?: Date,
  updatedAt?: Date,
}

export interface CategoryItemProps {
  name: string;
  slug: string;
  description?: string;
  order?: string;
  isShow?: boolean;
  isNoFollow?: boolean;
  isNoIndex?: boolean;
  parent?: CategoryItemProps;
  domain?: string;
}
export interface TagsItemProps {
  name: string;
  slug: string;
  count: number;
  isNoIndex: boolean;
  isNoFollow: boolean;
}

export interface SlugHandleProps {
  type: string;
  post?: PostItemProps;
  category?: CategoryItemProps;
  relativePost?: PostItemProps[];
  listPostNew?: PostItemProps[];
}


