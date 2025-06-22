document.addEventListener('DOMContentLoaded', () => {
    const stageData = {
        worldWidth: 10000,
        obstacles: [
            // Start area
            { x: 0, y: 550, width: 500, height: 50 },
            { x: 200, y: 450, width: 150, height: 40 },
            // Maze section 1 - Increased complexity
            { x: 600, y: 550, width: 100, height: 50 },
            { x: 750, y: 500, width: 100, height: 40 },
            { x: 900, y: 450, width: 100, height: 40 },
            { x: 800, y: 350, width: 40, height: 100 }, // Vertical block
            { x: 1050, y: 550, width: 400, height: 50 },
            { x: 1100, y: 450, width: 100, height: 40 },
            { x: 1250, y: 380, width: 100, height: 40 },
            { x: 1400, y: 310, width: 100, height: 40 },
            { x: 1350, y: 480, width: 40, height: 70 }, // Thin wall
            // Open area with more obstacles and enemies
            { x: 1550, y: 550, width: 1500, height: 50 },
            { x: 1600, y: 450, width: 80, height: 30 }, { x: 1750, y: 450, width: 80, height: 30 },
            { x: 1900, y: 380, width: 150, height: 40 },
            { x: 2200, y: 300, width: 40, height: 250 }, // High Wall
            { x: 2350, y: 480, width: 200, height: 40 },
            { x: 2600, y: 400, width: 150, height: 40 },
            { x: 2850, y: 320, width: 100, height: 40 },
            // Maze section 2 - More verticality
            { x: 3100, y: 550, width: 100, height: 50 },
            { x: 3250, y: 500, width: 40, height: 40 },
            { x: 3400, y: 450, width: 40, height: 40 },
            { x: 3550, y: 400, width: 40, height: 40 },
            { x: 3700, y: 350, width: 40, height: 40 },
            { x: 3850, y: 450, width: 200, height: 40 },
            { x: 3900, y: 300, width: 100, height: 40 },
            // High passage
            { x: 4100, y: 200, width: 500, height: 50 },
            { x: 4700, y: 280, width: 150, height: 40 },
            { x: 4900, y: 360, width: 150, height: 40 },
            { x: 5100, y: 440, width: 150, height: 40 },
            { x: 5300, y: 550, width: 800, height: 50 },
            // Difficult jumping section with small platforms
            { x: 6200, y: 520, width: 60, height: 30 }, { x: 6350, y: 480, width: 60, height: 30 },
            { x: 6500, y: 440, width: 60, height: 30 }, { x: 6650, y: 400, width: 60, height: 30 },
            { x: 6800, y: 480, width: 40, height: 30 }, { x: 6950, y: 520, width: 40, height: 30 },
            { x: 7100, y: 460, width: 100, height: 40 },
            // Final stretch with enemy clusters
            { x: 7300, y: 550, width: 2700, height: 50 },
            { x: 7400, y: 450, width: 200, height: 40 },
            { x: 7800, y: 450, width: 200, height: 40 },
            { x: 8050, y: 350, width: 40, height: 200 }, // Wall
            { x: 8200, y: 450, width: 200, height: 40 },
            { x: 8600, y: 380, width: 150, height: 40 },
            { x: 8900, y: 300, width: 100, height: 40 },
            { x: 9200, y: 450, width: 100, height: 40 },
            { x: 9400, y: 380, width: 100, height: 40 },
            { x: 9600, y: 300, width: 100, height: 40 },
        ],
        groundEnemies: [
            { type: 'chameleon', x: 400, y: 550 },
            { type: 'jumping', x: 920, y: 450 },
            { type: 'chameleon', x: 1260, y: 380 },
            { type: 'walker-shooter', x: 1700, y: 550 },
            { type: 'jumping', x: 2000, y: 550 },
            { type: 'chameleon', x: 2400, y: 480 },
            { type: 'walker-shooter', x: 2700, y: 550 },
            { type: 'jumping', x: 3710, y: 350 },
            { type: 'chameleon', x: 4300, y: 200 },
            { type: 'walker-shooter', x: 5500, y: 550 },
            { type: 'jumping', x: 5800, y: 550 },
            { type: 'chameleon', x: 6510, y: 440 },
            { type: 'walker-shooter', x: 7500, y: 550 },
            { type: 'walker-shooter', x: 8300, y: 550 },
            { type: 'jumping', x: 8700, y: 550 },
            { type: 'chameleon', x: 9000, y: 550 },
            { type: 'chameleon', x: 9500, y: 550 },
        ],
        mpFullItems: [ { x: 4200, y: 150 } ],
        healItems: [ { x: 3000, y: 280 }, { x: 7200, y: 500 } ],
        goalX: 9800,
    };
    Game.init(stageData);
});