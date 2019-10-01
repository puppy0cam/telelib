import InlineQueryResultArticle from "./InlineQueryResultArticle.mjs";
import InlineQueryResultAudio from "./InlineQueryResultAudio.mjs";
import InlineQueryResultCachedAudio from "./InlineQueryResultCachedAudio.mjs";
import InlineQueryResultCachedDocument from "./InlineQueryResultCachedDocument.mjs";
import InlineQueryResultCachedGif from "./InlineQueryResultCachedGif.mjs";
import InlineQueryResultCachedMpeg4Gif from "./InlineQueryResultCachedMpeg4Gif.mjs";
import InlineQueryResultCachedPhoto from "./InlineQueryResultCachedPhoto.mjs";
import InlineQueryResultCachedSticker from "./InlineQueryResultCachedSticker.mjs";
import InlineQueryResultCachedVideo from "./InlineQueryResultCachedVideo.mjs";
import InlineQueryResultCachedVoice from "./InlineQueryResultCachedVoice.mjs";
import InlineQueryResultContact from "./InlineQueryResultContact.mjs";
import InlineQueryResultDocument from "./InlineQueryResultDocument.mjs";
import InlineQueryResultGame from "./InlineQueryResultGame.mjs";
import InlineQueryResultGif from "./InlineQueryResultGif.mjs";
import InlineQueryResultLocation from "./InlineQueryResultLocation.mjs";
import InlineQueryResultMpeg4Gif from "./InlineQueryResultMpeg4Gif.mjs";
import InlineQueryResultPhoto from "./InlineQueryResultPhoto.mjs";
import InlineQueryResultVenue from "./InlineQueryResultVenue.mjs";
import InlineQueryResultVideo from "./InlineQueryResultVideo.mjs";
import InlineQueryResultVoice from "./InlineQueryResultVoice.mjs";

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
