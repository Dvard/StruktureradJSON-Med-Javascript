function addToList(list, to_add) {
    let node = document.createElement("LI");                 // Create a <li> node
    let text_node = document.createTextNode(to_add);         // Create a text node
    node.appendChild(text_node);                              // Append the text to <li>
    list.appendChild(node);
}

const skivor = `
{
    "skivor": [
        {
            "titel": "South American Getaway",
            "artist": "Juliane Banse",
            "genre": "Klassiskt",
            "publiceringsår": "2000",
            "skivbolag": "EMI Records Ltd.",
            "producent": "Walter Despalj"
        },
        {
            "titel": "Winter Wonderland",
            "artist": "Antti Sarpila",
            "genre": "Klassiskt",
            "publiceringsår": "2003",
            "skivbolag": "Antti Sarpila Oy",
            "producent": "Antti Sarpila"
        },
        {
            "titel": "Simply Baroque",
            "artist": "Yo-Yo Ma",
            "genre": "Klassiskt",
            "publiceringsår": "1999",
            "skivbolag": "Sony Music Entertainment INC",
            "producent": "Tini Mathot"
        },
        {
            "titel": "Paris La Belle Époque",
            "artist": "Yo-Yo Ma",
            "genre": "Klassiskt",
            "publiceringsår": "2003",
            "skivbolag": "Sony Music Entertainment INC",
            "producent": "Steven Epstein"
        }
    ]
}`;

const parsed_skivor = JSON.parse(skivor);
const skivor_list = parsed_skivor['skivor'];

let list = document.querySelector('#list');

let i;
let tmp_li;
for (i = 0; i < skivor_list.length; i++) {
    addToList(list, skivor_list[i]['titel']);
    addToList(list, skivor_list[i]['artist']);
    addToList(list, skivor_list[i]['genre']);
    addToList(list, skivor_list[i]['publiceringsår']);
    addToList(list, skivor_list[i]['skivbolag']);
    addToList(list, skivor_list[i]['producent']);
}

