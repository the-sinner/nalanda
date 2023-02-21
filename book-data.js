const data = {
    "books": [       
        {
            "id":"1",
            "name":"Frankstein",
            "author":"Mary Shelley",
            "cover":"f.jpg",
            "epub":"mary-shelley_frankenstein",
            "tags":["scifi"]
        },
        {
            "id":"2",
            "name":"At the Earth's Core",
            "author":"Edgar Rice Burroughs",
            "cover":"atec.jpg",
            "epub":"edgar-rice-burroughs_at-the-earths-core",
            "tags":["scifi"]
        },
        {
            "id":"3",
            "name":"The Time Machine",
            "author":"H. G. Wells",
            "cover":"ttm.jpg",
            "epub":"h-g-wells_the-time-machine",
            "tags":["scifi"]
        },
        {
            "id":"4",
            "name":"The War of the Worlds",
            "author":"H. G. Wells",
            "cover":"twotw.jpg",
            "epub":"h-g-wells_the-war-of-the-worlds",
            "tags":["scifi"]
        },
        {
            "id":"5",
            "name":"Moby Dick",
            "author":"Herman Melville",
            "cover":"mb.jpg",
            "epub":"herman-melville_moby-dick",
            "tags":["fiction"]
        },
        {
            "id":"6",
            "name":"The Strange Case of Dr. Jekyll and Mr. Hyde",
            "author":"Robert Louis Stevenson",
            "cover":"tscodjamh.jpg",
            "epub":"robert-louis-stevenson_the-strange-case-of-dr-jekyll-and-mr-hyde",
            "tags":["scifi", "horror"]
        },
        {
            "id":"7",
            "name":"Journey to the Center of the Earth",
            "author":"Jules Verne",
            "cover":"jttcote.jpg",
            "epub":"jules-verne_journey-to-the-center-of-the-earth_f-a-malleson",
            "tags":["scifi", "adventure"]
        },
        {
            "id":"8",
            "name":"Siddhartha",
            "author":"Herman Hesse",
            "cover":"s.jpg",
            "epub":"hermann-hesse_siddhartha_gunther-olesch_anke-dreher_amy-coulter_stefan-langer_semyon-chaichenets",
            "tags":["fiction", "spirituality"]
        },
        {
            "id":"9",
            "name":"Tao Te Ching",
            "author":"Laozi",
            "cover":"ttc.jpg",
            "epub":"laozi_tao-te-ching_james-legge",
            "tags":["philosophy", "spirituality"]
        },
        {
            "id":"10",
            "name":"Dracula",
            "author":"Bram Stoker",
            "cover":"d.jpg",
            "epub":"bram-stoker_dracula",
            "tags":["fiction", "horror"]
        },
        {
            "id":"11",
            "name":"The Murder of Roger Ackroyd",
            "author":"Agatha Christie",
            "cover":"tmora.jpg",
            "epub":"agatha-christie_the-murder-of-roger-ackroyd",
            "tags":["mystery"]
        },
        {
            "id":"12",
            "name":"The Murder on the Links",
            "author":"Agatha Christie",
            "cover":"tmotl.jpg",
            "epub":"agatha-christie_the-murder-on-the-links",
            "tags":["fiction", "mystery"]
        },
        {
            "id":"13",
            "name":"A Study in Scarlet",
            "author":"Arthur Conan Doyle",
            "cover":"asis.jpg",
            "epub":"arthur-conan-doyle_a-study-in-scarlet",
            "tags":["fiction", "mystery"]
        },
        {
            "id":"14",
            "name":"The Mysterious Affair at Styles",
            "author":"Agatha Christie",
            "cover":"tmaas.jpg",
            "epub":"agatha-christie_the-mysterious-affair-at-styles",
            "tags":["fiction", "mystery"]
        },
        {
            "id":"15",
            "name":"The Tragical History of Doctor Faustus",
            "author":"Christopher Marlowe",
            "cover":"tthodf.jpg",
            "epub":"christopher-marlowe_the-tragical-history-of-doctor-faustus",
            "tags":["drama"]
        },
        {
            "id":"16",
            "name":"Treasure Island",
            "author":"Robert Louis Stevenson",
            "cover":"ti.jpg",
            "epub":"robert-louis-stevenson_treasure-island",
            "tags":["adventure", "children", "fiction"]
        },
        {
            "id":"17",
            "name":"Around the World in Eighty Days",
            "author":"Jules Verne",
            "cover":"atwied.jpg",
            "epub":"jules-verne_around-the-world-in-eighty-days_george-makepeace-towle",
            "tags":["adventure", "fiction"]
        },
        {
            "id":"18",
            "name":"The Land That Time Forgot",
            "author":"Edgar Rice Burroughs",
            "cover":"tlttf.jpg",
            "epub":"edgar-rice-burroughs_the-land-that-time-forgot",
            "tags":["adventure", "scifi"]
        }
    ]
}

const tags = ["all", "scifi", "fiction", "horror", "adventure", "spirituality", "philosophy", "mystery", "drama", "children"]
const ignored = [
    {
        "id":"",
        "name":"",
        "author":"",
        "cover":".jpg",
        "epub":"",
        "tags":[]
    },
    {
            "id":"1",
            "name":"The Three Body Problem",
            "cover":"3bp.jpeg",
            "epub":"three-body-problem",
            "tags":["scifi"]
    },
]