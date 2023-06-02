const { EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Set your verification channel')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Send verification embed in this channel')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const verifyEmbed = new EmbedBuilder()
            .setTitle("Verification")
            .setDescription('Verifiziere, dich, um alle channels zu sehen.')
            .setColor('Red')
            .setImage('https://cdn.discordapp.com/attachments/1099792808543539271/1109391999821426718/4AB1CD50-56CD-4C92-BF8C-412E95631281.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/1094962897349791826/1109907546011095101/c734d60cb976c40d6d17cc5b36bd178b12f162dadd57a50d39c79fbe10cdbaa8.gif')
            .setTimestamp();
            const confirm = new ButtonBuilder()
			.setLabel('Verify')
            .setURL('https://discord.com/oauth2/authorize?client_id=1109508089104834662&redirect_uri=https://restorecord.com/api/callback&response_type=code&scope=identify+guilds.join&state=1085654245627400375')
			.setStyle(ButtonStyle.Link);

            const row = new ActionRowBuilder()
			.addComponents(confirm);

        let sendChannel = channel.send({
            embeds: ([verifyEmbed]),
            components: [row],
        });
        if (!sendChannel) {
            return interaction.reply({ content: 'There was an error! Try again later.', ephemeral: true });
        } else {
            return interaction.reply({ content: 'Verification channel was succesfully set!', ephemeral: true });
        }
    },
};