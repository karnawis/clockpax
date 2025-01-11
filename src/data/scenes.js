import image1 from "../assets/images/clockpax-tree-leaf-door.jpg";
import image2 from "../assets/images/clockpax-swing-park.jpg";
import image3 from "../assets/images/cloclspax-mirror-1.jpg";
/*
import image4 from "../assets/images/cloclspax-carrot-snowman.jpg";
import image5 from "../assets/images/clockspax-mid-night-skies.jpg";
import image6 from "../assets/images/clockpax-brush-painting.jpg";
import image7 from "../assets/images/clockpax-fossil-museum-2.jpg";
import image8 from "../assets/images/clockpax-ferriswheel-circus.jpg";
import image9 from "../assets/images/clockpax-feather-pen-letter.jpg";
*/

export const scenes = {
    scene1: {
        name: "Scene 1 Name",
        exits: { a1: "scene2" },
        description: "Details 1",
        image: image1,
        puzzle: "Puzzle 1",
        explore: [],
        use: [],
        verbs: {},
    },
    scene2: {
        name: "Scene 2 Name",
        exits: { a2: "scene1", b2: "scene3" },
        description: "Details 2",
        image: image2,
        puzzle: "Puzzle 2",
        explore: [],
        use: [],
    },
    scene3: {
        name: "Scene 3 Name",
        exits: { a1: "scene2" },
        description: "Details 3",
        image: image3,
        puzzle: "Puzzle 3",
        explore: [],
        use: [],
    },
    /*
    scene4: {
        name: "Scene 4 Name",
        exits: { a1: "scene3", b1: "scene6" },
        description: "Details 4",
        image: image4,
        puzzle: "Puzzle 4",
        explore: [],
        use: [],
        verbs: {},
    },
    scene5: {
        name: "Scene 5 Name",
        exits: { c1: "scene4", d1: "scene7" },
        description: "Details 5",
        image: image5,
        puzzle: "Puzzle 5",
        explore: [],
        use: [],
        verbs: {},
    },
    scene6: {
        name: "Scene 6 Name",
        exits: { a3: "scene5", b3: "scene8" },
        description: "Details 6",
        image: image6,
        puzzle: "Puzzle 6",
        explore: [],
        use: [],
    },
    scene7: {
        name: "Scene 7 Name",
        exits: { a2: "scene6", c2: "scene9" },
        description: "Details 7",
        image: image7,
        puzzle: "Puzzle 7",
        explore: [],
        use: [],
        verbs: {},
    },
    scene8: {
        name: "Scene 8 Name",
        exits: { b2: "scene7", c3: "scene9" },
        description: "Details 8",
        image: image8,
        puzzle: "Puzzle 8",
        explore: [],
        use: [],
        verbs: {},
    },
    scene9: {
        name: "Scene 9 Name",
        exits: { a1: "scene8" },
        description: "Details 9",
        image: image9,
        puzzle: "Puzzle 9",
        explore: [],
        use: [],
        verbs: {},
    },
    */
};
