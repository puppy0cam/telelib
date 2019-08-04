import String from "./String";
import Integer from "./Integer";
import Date from "./Date";
import File from "./File";

/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export default class PassportFile implements IPassportFile {
    constructor(data: IPassportFile | PassportFile, token?: string);
    public file_id: String;
    public file_size?: Integer;
    public file_date?: Date;
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.
     *
     * **Note:** This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
     */
    public getFile(): Promise<File>;
}

export interface IPassportFile {
    /** Unique identifier for this file */
    file_id: String;
    /** File size */
    file_size?: Integer;
    /** Unix time when the file was uploaded */
    file_date?: Date;
}
