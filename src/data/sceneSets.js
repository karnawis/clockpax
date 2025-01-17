export const verbSets = {
    scene1Object1: {
        use: {
            aheadScene: 'scene2',
        },
        explore: {
            details: ['placeholder for details - explore - object1 explore scene1'],
        },
    },
    scene1Object2: {
        use: {
            details: ['placeholder for details - use -  object1 use scene1'],
        },
        explore: {
            details: ['placeholder for details - explore - object1 explore scene1'],
        },
        default: {
            aheadScene: 'scene3'
        }
    },
    scene2Object1: {
        use: {
            details: ['placeholder for details about object1 use scene2 - use '],
        },
        explore: {
            details: ['placeholder for details about object1 explore scene2 - explore'],
        },
    },
    scene2Object2: {
        use: {
            details: ['placeholder for details about object1 use scene2 - use '],
        },
        explore: {
            details: ['placeholder for details about object1 explore scene2 - explore'],
        },
    },
    scene3Object1: {
        use: {
            details: ['placeholder for details about object1 use scene3 object 1'],
        },
        explore: {
            details: ['placeholder for details about object1 explore scene3 object 1'],
        },
        default: {
            aheadScene: 'scene2'
        }
    },
    scene3Object2: {
        use: {
            details: ['placeholder for details about object2 use scene3 object 2'],
        },
        explore: {
            details: ['placeholder for details about object2 explore scene3 object 2'],
        },
        default: {
            aheadScene: 'scene1'
        }
    },

    //end of verbSets
}
