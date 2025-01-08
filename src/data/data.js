import image1 from "../assets/images/clockpax-brush-painting.jpg";
import image2 from "../assets/images/clockpax-feather-pen-letter.jpg";
import image3 from "../assets/images/clockpax-ferriswheel-circus.jpg";

export const areas = {
        area1: {
            name: "area 1 name",
            exits: { a2: "area2" },
            description: "details 1",
            image: image1,
        },
        area2: {
            name: "area 2 name",
            exits: { c2: "area1", b2: "area3" },
            description: "details 2",
            image: image2,
        },
        area3: {
            name: "area 3 name",
            exits: {
            a1: "area1",
            a2: "area1",
            a3: "area1",
            b1: "area1",
            b2: "area1",
            b3: "area1",
            c1: "area1",
            c2: "area1",
            c3: "area1",
            },
            description: "details 3",
            image: image3,
        },
    }