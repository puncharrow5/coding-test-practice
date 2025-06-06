function solution(genres, plays) {
    let answer = [];
    const totalPlays = new Map();
    const genrePlays = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        const id = i;

        totalPlays.set(genre, (totalPlays.get(genre) || 0) + play);
        
        const songsInCurrentGenre = genrePlays.get(genre) || [];
        
        songsInCurrentGenre.push({ id: id, play: play });
        
        genrePlays.set(genre, songsInCurrentGenre);
    }
    
    const sortedTotalPlays = [...totalPlays.entries()].sort(([, a], [, b]) => b - a);
    
    for (const [genre, totalPlay] of sortedTotalPlays) {
        const songsWithGenre = genrePlays.get(genre).sort((a, b) => {
            if (a.play === b.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        });

        for (let i = 0; i < Math.min(songsWithGenre.length, 2); i++) {
            answer.push(songsWithGenre[i].id);
        }
    }

    return answer;
}