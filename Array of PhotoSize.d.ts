import PhotoSize, { IPhotoSize } from "./PhotoSize";

declare function Array_of_PhotoSize(data: Array<PhotoSize | IPhotoSize>, token?: string): Array<PhotoSize>;
declare type Array_of_PhotoSize = Array<PhotoSize>;
export default Array_of_PhotoSize;
