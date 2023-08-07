class MakeShow {
    constructor(showGenre, numofEpisodes, showRating, showYear) {
        this.showGenre = showGenre
        this.numOfEpisodes = numOfEpisodes
        this.showRating = showRating
        this.showYear = showYear
        }
        play() {
        alert('Play!')
        }
        stop() {
        alert('Stop!')
        }
        rewind() {
        alert('Rewind!')
        }

}
let bridgerton = new MakeShow('drama', '10', 'R', '2023')
 