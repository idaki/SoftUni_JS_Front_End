function printSongs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const numSongs = parseInt(arr[0]);
    const typeRequired = arr[arr.length - 1];
    const listSongs = [];


    for (let i = 1; i <= numSongs; i++) {
        const type = arr[i].split('_')[0];
        const name = arr[i].split('_')[1];
        const time = arr[i].split('_')[2];
        listSongs.push(new Song(type, name, time));
    }

    for (const song of listSongs) {
        if (song.type===typeRequired){
            console.log(song.name);
        } else if (typeRequired ===`all`){
            console.log(song.name);
        }
        
    }
}




printSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'all']
);