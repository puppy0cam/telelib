import Stream from "stream";
import { Buffer } from "buffer";
/**
 * Determines whether the value is a file that should be sent as form data.
 * This does not act recursively on child objects.
 */
export default function isFile(value: any): value is Stream | Buffer;
