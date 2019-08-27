import InlineQueryResultArticle from "./InlineQueryResultArticle.js";
import InlineQueryResultAudio from "./InlineQueryResultAudio.js";
import InlineQueryResultCachedAudio from "./InlineQueryResultCachedAudio.js";
import InlineQueryResultCachedDocument from "./InlineQueryResultCachedDocument.js";
import InlineQueryResultCachedGif from "./InlineQueryResultCachedGif.js";
import InlineQueryResultCachedMpeg4Gif from "./InlineQueryResultCachedMpeg4Gif.js";
import InlineQueryResultCachedPhoto from "./InlineQueryResultCachedPhoto.js";
import InlineQueryResultCachedSticker from "./InlineQueryResultCachedSticker.js";
import InlineQueryResultCachedVideo from "./InlineQueryResultCachedVideo.js";
import InlineQueryResultCachedVoice from "./InlineQueryResultCachedVoice.js";
import InlineQueryResultContact from "./InlineQueryResultContact.js";
import InlineQueryResultDocument from "./InlineQueryResultDocument.js";
import InlineQueryResultGame from "./InlineQueryResultGame.js";
import InlineQueryResultGif from "./InlineQueryResultGif.js";
import InlineQueryResultLocation from "./InlineQueryResultLocation.js";
import InlineQueryResultMpeg4Gif from "./InlineQueryResultMpeg4Gif.js";
import InlineQueryResultPhoto from "./InlineQueryResultPhoto.js";
import InlineQueryResultVenue from "./InlineQueryResultVenue.js";
import InlineQueryResultVideo from "./InlineQueryResultVideo.js";
import InlineQueryResultVoice from "./InlineQueryResultVoice.js";

export default function InlineQueryResult(value) {
    "use strict";
    const type = value.type;
    if (type === "audio") {
        if (value.audio_file_id) {
            return new InlineQueryResultCachedAudio(value);
        } else if (value.audio_url) {
            return new InlineQueryResultAudio(value);
        }
    } else if (type === "document") {
        if (value.document_file_id) {
            return new InlineQueryResultCachedDocument(value);
        } else if (value.document_url) {
            return new InlineQueryResultDocument(value);
        }
    } else if (type === "gif") {
        if (value.gif_file_id) {
            return new InlineQueryResultCachedGif(value);
        } else if (value.gif_url) {
            return new InlineQueryResultGif(value);
        }
    } else if (type === "mpeg4_gif") {
        if (value.mpeg4_file_id) {
            return new InlineQueryResultCachedMpeg4Gif(value);
        } else if (value.mpeg4_url) {
            return new InlineQueryResultMpeg4Gif(value);
        }
    } else if (type === "photo") {
        if (value.photo_file_id) {
            return new InlineQueryResultCachedPhoto(value);
        } else if (value.photo_url) {
            return new InlineQueryResultPhoto(value);
        }
    } else if (type === "video") {
        if (value.video_file_id) {
            return new InlineQueryResultCachedVideo(value);
        } else if (value.video_url) {
            return new InlineQueryResultVideo(value);
        }
    } else if (type === "voice") {
        if (value.voice_file_id) {
            return new InlineQueryResultCachedVoice(value);
        } else if (value.voice_url) {
            return new InlineQueryResultVoice(value);
        }
    } else {
        switch (type) {
            case "sticker":
                return new InlineQueryResultCachedSticker(value);
            case "article":
                return new InlineQueryResultArticle(value);
            case "contact":
                return new InlineQueryResultContact(value);
            case "game":
                return new InlineQueryResultGame(value);
            case "location":
                return new InlineQueryResultLocation(value);
            case "venue":
                return new InlineQueryResultVenue(value);
            default:
                throw new TypeError("Unknown InlineQueryResult type");
        }
    }
    throw new TypeError("Known InlineQueryResult type, however unable to determine if it should use a url or file_id");
}
