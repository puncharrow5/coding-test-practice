def solution(genres, plays):
    answer = []
    total_plays = {}
    genre_songs = {}
    
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        song_id = i
        
        total_plays[genre] = total_plays.get(genre, 0) + play
        
        if genre not in genre_songs:
            genre_songs[genre] = []

        genre_songs[genre].append({'id': song_id, 'play': play})
        
    sorted_total_plays = sorted(total_plays.items(), key=lambda item: item[1], reverse=True)
    
    for genre, total_play in sorted_total_plays:
        songs_with_genre = sorted(genre_songs[genre], key=lambda item: (-item['play'], item['id']))
        
        for song in songs_with_genre[:2]: 
            answer.append(song['id'])
    
    return answer