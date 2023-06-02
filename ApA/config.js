module.exports = {

    giveawayManager: {
        //Private Message Information.
        //If you set false, the bot will not send private message information to members who join the giveaway, for example.
        privateMessageInformation: true,
        // When a giveaway is created the bot pings everyone (true or false)
        everyoneMention: false,
        // You can choose a custom reaction
        reaction: '🎉'
    },
     messages: {
        giveaway: '🎉 Gewinnspiel',
        giveawayEnded: '🎉 Gewinnspiel beendet',
        title: 'Preis: {this.prize}',
        drawing: 'Das Gewinnspiel endet in: {timestamp}',
        dropMessage: 'Sei der Erste und reagiere mit 🎉!',
        inviteToParticipate: 'Reagiere mit 🎉, um teilzunehmen!',
        winMessage: 'Herzlichen Glückwunsch, {winners}! Du hast {this.prize} gewonnen!',
        embedFooter: '{this.winnerCount} Gewinner',
        noWinner: 'Gewinnspiel abgebrochen, keine gültigen Teilnahmen.',
        hostedBy: 'Veranstaltet von: {this.hostedBy}',
        winners: 'Gewinner:',
        endedAt: 'Beendet am',
        paused: '⚠️ Dieses Gewinnspiel ist pausiert!',
        infiniteDurationText: 'NIEMALS',
        congrat: 'Neue Gewinner: {winners}! Herzlichen Glückwunsch, dein Preis ist {this.prize}!',
        error: 'Neuauslosung abgebrochen, keine gültigen Teilnahmen.'
        }
        } 