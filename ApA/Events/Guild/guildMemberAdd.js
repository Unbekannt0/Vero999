const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember, Embed, InteractionCollector } = require("discord.js");
const Schema = require("../../Models/Welcome");

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        Schema.findOne({ Guild: member.guild.id }, async (err, data) => {
            if (!data) return;
            const { user, guild } = member;
            const welcomeChannel = member.guild.channels.cache.get('1094962889196056596');

            const welcomeEmbed = new EmbedBuilder()
                .setTitle("**New member!**")
                .setDescription("**Willkommen**! Schau dich um... es gibt vieles zu entdecken.")
                .setColor(0x037821)
                .addFields({ name: 'Total members', value: `${guild.memberCount}` })
                .setThumbnail(`https://cdn.discordapp.com/attachments/1107713189162004613/1107799469082288219/GIF-2023-05-16-00-36-54.gif`)
                .setTimestamp();

            welcomeChannel.send({ embeds: [welcomeEmbed] });
        })
    }
}