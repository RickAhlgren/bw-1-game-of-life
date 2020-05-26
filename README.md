# Build Week 1: Game of Life

## Objectives

Student should be able to create a unique, high-quality project that can be added to a professional portfolio
Student should be able to describe the rules of Conway’s “Game of Life”
Student should be able to explain what cellular automata are and describe how they are useful in real life
Student should be able to correctly analyze the ‘Turing Completeness’ of Conway’s “Game of Life”
Student should be able to implement a visualization of Conway’s “Game of Life” using technologies related to their specific track
Student should be able to utilize "double buffering" to implement the game

## How does Conway's Game of Life work?

We have a flat grid made up of square cells.
Each cell can be alive or dead, populated or unpopulated. 
The game is solitary (or "zero-player" (versus single player or multiplayer games)).

The player chooses an initial setup and rules are applied to see what happens in the next generation. 
The game continues until 1 of 3 things happens:
1) All cells are dead.
2) No cells change from one generation to the next.
3) The pattern flips back and forth between two or more positions.

## What are "the rules"?

Birth: Each dead cell adjacent to exactly 3 live neighbors will become live in the next generation.
Death by Isolation: Each live cell with one or fewer live neighbors will die in the next generation.
Death by Overcrowding: Each live cell with 4 or more live neighbors will die in the next generation.
Survival:  Each live cell with 2 or 3 live neighbors will remain alive for the the next generation.

## Why these rules?

Conway chose his rules to meet the following criteria:
1) There should be no explosive growth.
2) There should exist small initial patterns with chaotic, unpredictable outcomes.
3) There should be potential for von Neumann universal constructors.
4) The rules should be as simple as possible whilst adhering to the above constraints.

## Why is the Game of Life (and cellular automata in general) useful?

## How does Turing Completeness relate to this topic?

For a thing to be Turing Complete, it needs to be able to do everything that a Turing machine can do.

A Turing machine is thought of as an infinite piece of tape with a read/write head that goes over each symbol on the tape (conventionally these symbols are 1s and 0s). If a machine can do that, we can show that machine is able to compute anything that can be computed. In reality, however, an infinite piece of tape is impossible, so the limit is determined by the amount of RAM a computer has.

Conway's Game of Life is Turing Complete because (theoretically) anything that can be computed algorithmically can be computed within the Game of Life. 