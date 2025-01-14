import { verbSets } from "./sceneSets";

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

export const verbs = ["explore","use"]

export const scenes = {
    scene1: {
        key: "s1",
        name: "Scene 1 Name",
        exits: { a1: "scene2" },
        image: image1,
        puzzle: "Puzzle 1",
        details: "Details 1 placeholder",
        interactables:[
            {
                name: "scene1Object1",
                image: image1,
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                //: verbSets.scene1Object1,
            },{
                name: "scene1Object2",
                image: image1,
                x: 200,
                y: 200,
                width: 50,
                height: 50,
                //verbs: verbSets.scene1Object2,
            }
        ],
        // starts here
        verbs: {
            a1: {
                explore: {
                    aheadScene: "scene2",
                    details: "You explore the scene 1 object 1.",
                },
                use: {
                    aheadScene: "scene2",
                    details: "You use the scene 1 object 1.",
                }
            }
        }
        // end here
    },
    scene2: {
        key: "s2",
        name: "Scene 2 Name",
        exits: { a2: "scene1", b2: "scene3" },
        image: image2,
        puzzle: "Puzzle 2",
        details: "Details 2 placeholder",
        interactables:[
            {
                name: "scene2Object1",
                image: image1,
                x: 250,
                y: 250,
                width: 50,
                height: 50,
                verbs: verbSets.scene2Object1,
            },{
                name: "scene2Object2",
                image: image1,
                x: 200,
                y: 200,
                width: 50,
                height: 50,
                verbs: verbSets.scene2Object2,
            }
        ],
        // starts here
        verbs: {
            a2: {
                explore: {
                    aheadScene: "scene2",
                    details: "You explore the scene 1 object 1.",
                },
                use: {
                    aheadScene: "scene2",
                    details: "You use the scene 1 object 1.",
                }
            }
        }
        // end here
    },
    scene3: {
        key: "s3",
        name: "Scene 3 Name",
        exits: { a1: "scene2", b2: "scene1" , c3: "scene3" },
        image: image3,
        isMore: true,
        puzzle: "Puzzle 3",
        details: "Details 3 placeholder",
        interactables:[
            {
                name: "scene3Object1",
                image: image3,
                x: 250,
                y: 250,
                width: 50,
                height: 50,
                verbs: verbSets.scene3Object1,
            },{
                name: "scene3Object2",
                image: image3,
                x: 200,
                y: 200,
                width: 50,
                height: 50,
                verbs: verbSets.scene1Object2,
            }
        ]
    },
    // starts here
    verbs: {
        b1: {
            explore: {
                aheadScene: "scene2",
                details: "You explore the scene 1 object 1.",
            },
            use: {
                aheadScene: "scene2",
                details: "You use the scene 1 object 1.",
            }
        }
    }
    // end here
    
/*
    explore: [],
    use: [],
    verbs: {},
*/

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

export const puzzleWords = [
    {
        key: "1",
        name: "Beneath the `leaf`, a story begins, A door opens, where life has been.",
    },
    {
        key: "2",
        name: "On the `swing`, laughter once flew, A fleeting joy, a memory true.",
    },
    {
        key: "3",
        name: "In the `mirror`, faces split and blend, Seeking truth, the pieces mend.",
    },
    {
        key: "4",
        name: "The `snowman`s carrot` melts away,Loneliness grows where ice doth stay.",
    },
    {
        key: "5",
        name: "A single `star` in the midnight sea, A beacon shines for the lost to see.",
    },
    {
        key: "6",
        name: "The painter's `brush` strokes dreams in hue, Creation speaks what words can't do.",
    },
    {
        key: "7",
        name: "The `fossil`, a relic of time untold, Stories of life in stone unfold.",
    },
    {
        key: "8",
        name: "A spinning `wheel` where echoes play, Life repeats in its shadowed ballet.",
    },
    {
        key: "9",
        name: "The `feathered pen` writes the final line, A past embraced, the future aligns.",
    }

]

