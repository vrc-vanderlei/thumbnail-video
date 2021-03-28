export declare class ClassVideo {
    constructor(_render_id: string);
    videoCrate(_render_id: string, ChangeVideo: Function, GetThumbVideo: Function): Promise<void>;
    ChangeVideo(GetThumbVideo: Function, _video_id: string, _inputFile_id: string, count: number, _show_thumb: string): Promise<void>;
    GetThumbVideo(canvas: HTMLCanvasElement, idvideo: string, count: number, _show_thumb: string): Promise<void>;
}
