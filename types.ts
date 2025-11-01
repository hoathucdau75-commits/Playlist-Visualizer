
export interface Song {
  id: number;
  title: string;
}

export interface PlaylistData {
  backgroundImage: string;
  logoImage: string;
  subtitle: string;
  title: string;
  songs: Song[];
}
