const questions = [
    {
        id: 1,
        title: "Which of these is NOT a forsaken?",
        answers: [
            {id: 1, name: "Ishamael"},
            {id: 2, name: "Graendal"},
            {id: 3, name: "Demandred"},
            {id: 4, name: "Verin"},
        ],
        correctId: 4
    },
    {
        id: 2,
        title: "What is the name of the leather headband worn by the Malkieri?",
        answers: [
            {id: 1, name: "Shoufa"},
            {id: 2, name: "Hadori"},
            {id: 3, name: "Cachecol"},
            {id: 4, name: "Kesiera"},
        ],
        correctId: 2
    },
    {
        id: 3,
        title: "Moiraine wears a jeweled pendant on a chain as a hair ornament. She uses it a focus for what ability?",
        answers: [
            {id: 1, name: "Eavesdropping"},
            {id: 2, name: "Dreaming"},
            {id: 3, name: "Travelling"},
            {id: 4, name: "Healing"},
        ],
        correctId: 1
    },
    {
        id: 4,
        title: "In Fal Dara, who stole Mat Cauthon's dagger from Shadar Logoth?",
        answers: [
            {id: 1, name: "Loial"},
            {id: 2, name: "Ingtar"},
            {id: 3, name: "Padan Fain"},
            {id: 4, name: "Noal"},
        ],
        correctId: 3
    },
    {
        id: 5,
        title: "Who names Perrin as Young Bull?",
        answers: [
            {id: 1, name: "Moiraine"},
            {id: 2, name: "Hopper"},
            {id: 3, name: "Elyas"},
            {id: 4, name: "Gaul"},
        ],
        correctId: 2
    },
    {
        id: 6,
        title: "How many ajahs are there",
        answers: [
            {id: 1, name: "Five"},
            {id: 2, name: "Six"},
            {id: 3, name: "Eight"},
            {id: 4, name: "Ten"},
        ],
        correctId: 3
    },
    {
        id: 7,
        title: "What does the Aiel word ji'e'toh mean?",
        answers: [
            {id: 1, name: "Death and life"},
            {id: 2, name: "Glory in death"},
            {id: 3, name: "Death before shame"},
            {id: 4, name: "Honor and duty"},
        ],
        correctId: 4
    },
    {
        id: 8,
        title: "Which of the following is not an Aiel warrior society?",
        answers: [
            {id: 1, name: "Jenn Tomanelle"},
            {id: 2, name: "Far Dareis Mai"},
            {id: 3, name: "Mera'din"},
            {id: 4, name: "Sha'mad Conde"},
        ],
        correctId: 1
    },
    {
        id: 9,
        title: "Elayne Trakand belongs to which ajah?",
        answers: [
            {id: 1, name: "The red ajah"},
            {id: 2, name: "The blue ajah"},
            {id: 3, name: "The yellow ajah"},
            {id: 4, name: "The green ajah"},
        ],
        correctId: 4
    },
    {
        id: 10,
        title: "Min Farshaw meets Rand first in which city?",
        answers: [
            {id: 1, name: "Baerlon"},
            {id: 2, name: "Cairhien"},
            {id: 3, name: "Fal Dara"},
            {id: 4, name: "Tar Valon"},
        ],
        correctId: 1
    },
    {
        id: 11,
        title: "Who created the Trollocs?",
        answers: [
            {id: 1, name: "Ishamael"},
            {id: 2, name: "Demandred"},
            {id: 3, name: "Moghedien"},
            {id: 4, name: "Aginor"},
        ],
        correctId: 4
    },
    {
        id: 12,
        title: "Who are the two strongest forsaken?",
        answers: [
            {id: 1, name: "Asmodean and Aginor"},
            {id: 2, name: "Lanfear and Demandred"},
            {id: 3, name: "Rahvin and Ishamael"},
            {id: 4, name: "Semirhage and Mesaana"},
        ],
        correctId: 3
    },
    {
        id: 13,
        title: "Myrddraal are known by many names often depending on the region; which is not a correct name?",
        answers: [
            {id: 1, name: "Fade"},
            {id: 2, name: "Nightwalkers"},
            {id: 3, name: "Halfman"},
            {id: 4, name: "Neverborn"},
        ],
        correctId: 2
    },
    {
        id: 14,
        title: "The Green Man dies by the hand of?",
        answers: [
            {id: 1, name: "Balthamel"},
            {id: 2, name: "Lanfear"},
            {id: 3, name: "Asmodean"},
            {id: 4, name: "Aginor"},
        ],
        correctId: 1
    },
    {
        id: 15,
        title: "The Seanchan leash women who can channel saidar; what is the name of this silvery leash?",
        answers: [
            {id: 1, name: "Damane"},
            {id: 2, name: "Sul'dam"},
            {id: 3, name: "A'dam"},
            {id: 4, name: "Angreal"},
        ],
        correctId: 3
    },
    {
        id: 16,
        title: "What is the name of the festival the citizens of the Two Rivers celebrate every beginning of Spring?",
        answers: [
            {id: 1, name: "Wel Tine"},
            {id: 2, name: "Sel Tine"},
            {id: 3, name: "Bel Tine"},
            {id: 4, name: "Fel Tine"},
        ],
        correctId: 3
    },
    {
        id: 17,
        title: "What was the real name of the Green Man?",
        answers: [
            {id: 1, name: "Someshta"},
            {id: 2, name: "Aginor"},
            {id: 3, name: "Bathamel"},
            {id: 4, name: "Agelmar"},
        ],
        correctId: 1
    },
    {
        id: 18,
        title: "How does Moiraine attack Lanfear at the Cairhiin docks?",
        answers: [
            {id: 1, name: "Moiraine uses the forbidden Balefire weave"},
            {id: 2, name: "Moiraine tackles her"},
            {id: 3, name: "Moiraine attempts to shield her"},
            {id: 4, name: "Moiraine channels fire and hurls a fireball at her"},
        ],
        correctId: 2
    },
    {
        id: 19,
        title: "What actually is the Eye of the World?",
        answers: [
            {id: 1, name: "A pool of pure saidin"},
            {id: 2, name: "A pool of pure saidar"},
            {id: 3, name: "A pool of the true power"},
            {id: 4, name: "A pool of pure light"},
        ],
        correctId: 1
    },
    {
        id: 20,
        title: "Who does Nynaeve fight during her testing to become Accepted?",
        answers: [
            {id: 1, name: "Lanfear"},
            {id: 2, name: "Ba'alzamon"},
            {id: 3, name: "Selene"},
            {id: 4, name: "Aginor"},
        ],
        correctId: 4
    },
];

export default questions;