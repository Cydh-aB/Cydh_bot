const {EmbedBuilder} = require("@discordjs/builders");
const {GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('1078685803896651846');
        const welcomeMessage = `<@${member.id}> s'envole vers d'autre cieux !`;

        welcomeChannel.send({content: welcomeMessage})
    }
}


