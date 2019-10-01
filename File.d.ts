import { Bot } from "./_internals.js";
/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 * >Maximum file size to download is 20 MB
 */
export declare class File extends Bot implements IFile {
    constructor(data: IFile, token?: string | Bot);
    file_id: string;
    file_size?: number;
    file_path?: string;
    getFile(options?: {}, timeout?: number): Promise<File>;
    downloadFile(): Promise<any>;
}
/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 * >Maximum file size to download is 20 MB
 */
export interface IFile {
    /** Unique identifier for this file */
    file_id: string;
    /** File size, if known */
    file_size?: number;
    /** File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file. */
    file_path?: string;
}
