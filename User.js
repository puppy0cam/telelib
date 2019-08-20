import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class User extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            is_bot,
            first_name,
            last_name,
            username,
            language_code,
        } = _value;
        this.id = Integer(id);
        this.is_bot = Boolean(is_bot);
        this.first_name = String(first_name);
        if (last_name != null) {
            this.last_name = String(last_name);
        }
        if (username != null) {
            this.username = String(username);
        }
        if (language_code != null) {
            this.language_code = String(language_code);
        }
    }
    addStickerToSet(options) {
        "use strict";
        return super.addStickerToSet(Object.assign({
            user_id: this.id,
        }, options));
    }
    createNewStickerSet(options) {
        "use strict";
        return super.createNewStickerSet(Object.assign({
            user_id: this.id,
        }, options));
    }
    getChatMember(options) {
        "use strict";
        return super.getChatMember(Object.assign({
            user_id: this.id,
        }, options));
    }
    getGameHighScores(options) {
        "use strict";
        return super.getGameHighScores(Object.assign({
            user_id: this.id,
        }, options));
    }
    getUserProfilePhotos(options) {
        "use strict";
        return super.getUserProfilePhotos(Object.assign({
            user_id: this.id,
        }, options));
    }
    kickChatMember(options) {
        "use strict";
        return super.kickChatMember(Object.assign({
            user_id: this.id,
        }, options));
    }
    promoteChatMember(options) {
        "use strict";
        return super.promoteChatMember(Object.assign({
            user_id: this.id,
        }, options));
    }
    restrictChatMember(options) {
        "use strict";
        return super.restrictChatMember(Object.assign({
            user_id: this.id,
        }, options));
    }
    setGameScore(options) {
        "use strict";
        return super.setGameScore(Object.assign({
            user_id: this.id,
        }, options));
    }
    setPassportDataErrors(options) {
        "use strict";
        return super.setPassportDataErrors(Object.assign({
            user_id: this.id,
        }, options));
    }
    unbanChatMember(options) {
        "use strict";
        return super.unbanChatMember(Object.assign({
            user_id: this.id,
        }, options));
    }
    uploadStickerFile(options) {
        "use strict";
        return super.uploadStickerFile(Object.assign({
            user_id: this.id,
        }, options));
    }
}
