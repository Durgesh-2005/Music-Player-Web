const music = new Audio('./audio-org/6.mp3');

// create Array 

const songs = [
    {
        id: '1',
        songName: `Hukum - Thalaivar Alappara<br>
        <div class="subtitle">Anirudh Ravichander, Super Subu</div>`,
        poster: "https://c.saavncdn.com/187/Jailer-Tamil-2023-20230728081443-500x500.jpg"
    },
    {
        id: '2',
        songName: ` Vellipomake <br>
        <div class="subtitle">Sid Sriram</div>`,
        poster: "https://c.saavncdn.com/996/Saahasam-Swaasaga-Saagipo-Telugu-2016-500x500.jpg"
    },
    {
        id: "3",
        songName: `Tere Vaaste <br><div class="subtitle"> 	Varun Jain, Sachin Jigar</div>`,
        poster: "https://musichend.ir/wp-content/uploads/2023/05/Tere-Vaaste.jpg",
    },
    {
        id: "4",
        songName: `Kaavaalaa <br><div class="subtitle">Shilpa,Anirudh Ravichander</div>`,
        poster: "https://c.saavncdn.com/187/Jailer-Tamil-2023-20230728081443-500x500.jpg",
    },
    {
        id: "5",
        songName: `Jalabulajangu <br><div class="subtitle">Anirudh Ravichander, Nakash Aziz</div>`,
        poster: "https://c.saavncdn.com/435/Don-Tamil-2022-20220512162818-500x500.jpg",
    },
    {
        id: "6",
        songName: `Rakita Rakita Rakita <br><div class="subtitle">Dhanush,Santhosh Narayanan</div>`,
        poster: "https://c.saavncdn.com/212/Jagame-Thandhiram-Original-Motion-Picture-Soundtrack--Tamil-2021-20210607095427-500x500.jpg",
    },
    {
        id: "7",
        songName: `Agar  <br><div class="subtitle">Tamashaa</div>`,
        poster: "https://c.saavncdn.com/994/Tamasha-Hindi-2015-500x500.jpg",
    },
    {
        id: "8",
        songName: `Shape Of You <br><div class="subtitle">Ed Sheeran</div>`,
        poster: "https://c.saavncdn.com/126/Shape-of-You-English-2017-500x500.jpg",
    },
    {
        id: "9",
        songName: `Please Don't Go <br><div class="subtitle">Joel Adams</div>`,
        poster: "https://c.saavncdn.com/923/Please-Don-t-Go-English-2015-500x500.jpg",
    },
    {
        id: "10",
        songName: `Toxic <br><div class="subtitle">Badshah, Payal Dev </div>`,
        poster: "https://c.saavncdn.com/233/Toxic-Hindi-2020-20200618055014-500x500.jpg",
    },
    {
        id: "11",
        songName: `Bujji <br><div class="subtitle">Santhosh Narayanan</div>`,
        poster: "https://c.saavncdn.com/212/Jagame-Thandhiram-Original-Motion-Picture-Soundtrack--Tamil-2021-20210607095427-500x500.jpg",
    },
    {
        id: "12",
        songName: `Evanda Enakku Custody <br><div class="subtitle">Santhosh Narayanan</div>`,
        poster: "https://c.saavncdn.com/362/Mahaan-Original-Motion-Picture-Soundtrack--Tamil-2022-20220209181724-500x500.jpg",
    },
    {
        id: "13",
        songName: `Jab Tak <br><div class="subtitle">Armaan Malik</div>`,
        poster: "https://c.saavncdn.com/569/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-500x500.jpg",
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "https://c.saavncdn.com/426/Vaaste-Hindi-2019-20190406024538-500x500.jpg",
    },
    {
        id: "15",
        songName: `Pasoori <br><div class="subtitle">Shae Gill, Ali Sethi</div>`,
        poster: "https://c.saavncdn.com/663/Pasoori-Punjabi-2022-20220203181058-500x500.jpg",
    },
    {
        id: "16",
        songName: `Param Sundari <br><div class="subtitle">A.R. Rahman, Shreya Ghoshal</div>`,
        poster: "https://c.saavncdn.com/875/Mimi-Hindi-2021-20210715171822-500x500.jpg",
    },
    {
        id: "17",
        songName: ` Bekhayali<br><div class="subtitle">Sachet Tandon</div>`,
        poster: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
    },
    {
        id: "18",
        songName: ` Varaha Roopam<br><div class="subtitle">B.Ajaneesh Lokanath</div>`,
        poster: "https://c.saavncdn.com/427/Kantara-Kannada-2022-20221205200722-500x500.jpg",
    },
    {
        id: "19",
        songName: ` Door Number Okati<br><div class="subtitle">Geetha Madhuri,Gopi</div>`,
        poster: "https://c.saavncdn.com/280/Oopiri-Telugu-2016-500x500.jpg",
    },
    {
        id: "20",
        songName: ` Megam Karukuthu<br><div class="subtitle">Dhanush,Anirudh Ravichander</div>`,
        poster: "https://c.saavncdn.com/238/Thiruchitrambalam-Tamil-2022-20220927091058-500x500.jpg",
    },
    {
        id: "21",
        songName: ` Premisthunna<br><div class="subtitle"> Vijai Bulganin, P V N S Rohit</div>`,
        poster: "https://c.saavncdn.com/732/Baby-Telugu-2023-20230710131123-500x500.jpg",
    },
    {
        id: "22",
        songName: ` O Rendu Prema Meghaalilla<br><div class="subtitle"> Vijai Bulganin,Sreeram Chandra</div>`,
        poster: "https://c.saavncdn.com/732/Baby-Telugu-2023-20230710131123-500x500.jpg",
    },
    {
        id: "23",
        songName: ` Rao Gari abbai<br><div class="subtitle"> DSP</div>`,
        poster: "https://c.saavncdn.com/358/Mr-Perfect-2011-500x500.jpg",
    },
    {
        id: "24",
        songName: ` Darshana<br><div class="subtitle"> Darshana Rajendran</div>`,
        poster: "https://c.saavncdn.com/371/Hridayam-Malayalam-2021-20230803205617-500x500.jpg",
    },
    {
        id: "25",
        songName: ` Vaathi Raid<br><div class="subtitle"> Anirudh Ravichnader</div>`,
        poster: "https://c.saavncdn.com/347/Master-Tamil-2020-20200316084627-500x500.jpg",
    },
    {
        id: "26",
        songName: ` Onakka Munthirir<br><div class="subtitle"> Divya Vineeth</div>`,
        poster: "https://c.saavncdn.com/371/Hridayam-Malayalam-2021-20230803205617-500x500.jpg",
    },
    {
        id: "27",
        songName: ` Neruppa Daa<br><div class="subtitle"> Arunraja Kamaraj</div>`,
        poster: "https://c.saavncdn.com/911/Kabali-Tamil-2016-20190506170305-500x500.jpg",
    },
    {
        id: "28",
        songName: ` Aakaasame Nee Haddhu Ra<br><div class="subtitle"> GV Prakash</div>`,
        poster: "https://c.saavncdn.com/114/Aakaasam-Nee-Haddhu-Ra-Telugu-2020-20201111104315-500x500.jpg",
    },
    {
        id: "29",
        songName: ` Ori Devuda<br><div class="subtitle"> Anirudh Ravichander</div>`,
        poster: "https://c.saavncdn.com/252/Raghuvaran-B-Tech-Telugu-2014-500x500.jpg",
    },
    {
        id: "30",
        songName: ` Gang Leader<br><div class="subtitle"> Anirudh Ravichander</div>`,
        poster: "https://c.saavncdn.com/663/Gang-Leader-Telugu-2019-20190905102749-500x500.jpg",
    },
    {
        id: "31",
        songName: ` Movements<br><div class="subtitle"> Pham,Yung Fusion</div>`,
        poster: "https://c.saavncdn.com/277/Movements-feat-Yung-Fusion-Single-English-2015-500x500.jpg",
    },
    {
        id: "32",
        songName: ` Latest Telugu<br>`,
        poster: "https://i.scdn.co/image/ab67706f00000002409ab412c52113097c2f8d42",
    },
    {
        id: "33",
        songName: ` Bollywood sneaks<br>`,
        poster: "https://i.scdn.co/image/ab67706f0000000251eb7d47276468cbe171bc64",
    },
    {
        id: "34",
        songName: `Latest Tamil<br>`,
        poster: "https://i.scdn.co/image/ab67706f000000025f39096d6d1e374143b5b2fd",
    },
    {
        id: "35",
        songName: ` Malayalam 2023<br>`,
        poster: "https://i.scdn.co/image/ab67706f000000022adb9e49f3955c4afcfae733",
    },
    {
        id: "36",
        songName: ` Latest Kannada<br>`,
        poster: "https://i.scdn.co/image/ab67706f0000000239764ddc6e9373987c0eb304",
    },
    {
        id: "37",
        songName: ` English Top 2023<br>`,
        poster: "https://i.scdn.co/image/ab67706c0000da8402ac701799a64199eaee6eff",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio-org/${index}.mp3`;
        let dummyId = `${index}`
        dummyId = parseInt(index) - 1;
        let dummy = songs[dummyId].poster;
        poster_master_play.src = `${dummy}`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio-org/${index}.mp3`;
    let dummyId = `${index}`
    dummyId = parseInt(index) - 1;
    let dummy = songs[dummyId].poster;
    poster_master_play.src = `${dummy}`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio-org/${index}.mp3`;
    let dummyId = `${index}`
    dummyId = parseInt(index) - 1;
    let dummy = songs[dummyId].poster;
    poster_master_play.src = `${dummy}`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
})