import {MessageEmbed} from 'discord.js';

class MessageBuilder {
    message: MessageEmbed;

    constructor() {
        this.message = new MessageEmbed();
    }

    setTitle(title: string) {
        this.message.setTitle(title);
        return this;
    }

    addField(key: string, value: string) {
        this.message.addField(key, value);
        return this;
    }

    addDescriotion(desc: string) {
        if (this.message.description) {
            this.message.setDescription(this.message.description + "\n" + desc);
        } else {
            this.message.setDescription(desc);
        }

        return this;
    }

    addQuotedField(key: string, value: string) {
        this.addField(key, '`' + value + '`');
        return this;
    }

    build() {
        return this.message;
    }
}

export default MessageBuilder;