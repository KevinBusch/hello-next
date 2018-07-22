import { TvMazeImage } from "@core/interfaces/tv-maze/tv-maze-image";

export interface TvMazeShow {
    id:      string;
    image:   TvMazeImage;
    name:    string;
    summary: string;
}