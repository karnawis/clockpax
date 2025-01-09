import image1 from "../assets/images/clockpax-brush-painting.jpg";
import image2 from "../assets/images/clockpax-feather-pen-letter.jpg";
import image3 from "../assets/images/clockpax-ferriswheel-circus.jpg";

export const scenes = {
        scene1: {
            name: "scene 1 name",
            exits: { a2: "scene2" },
            description: "details 1",
            image: image1,
            puzzle: 'puzzle 1',
        },
        scene2: {
            name: "scene 2 name",
            exits: { c2: "scene1", b2: "scene3" },
            description: "details 2",
            image: image2,
            puzzle: 'puzzle 2',
        },
        scene3: {
            name: "scene 3 name",
            exits: {
            a1: "scene1",
            a2: "scene1",
            a3: "scene1",
            b1: "scene1",
            b2: "scene1",
            b3: "scene1",
            c1: "scene1",
            c2: "scene1",
            c3: "scene1",
            },
            description: "details 3",
            image: image3,
            puzzle: 'puzzle 3',
        },
    }