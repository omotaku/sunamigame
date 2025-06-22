document.addEventListener('DOMContentLoaded', () => {
    const stageData = {
        worldWidth: 9000,
        obstacles: [
            { x: 0, y: 550, width: 800, height: 50 },
            { x: 950, y: 550, width: 600, height: 50 },
            { x: 1650, y: 500, width: 150, height: 40 },
            { x: 1900, y: 450, width: 150, height: 40 },
            { x: 2150, y: 550, width: 400, height: 50 },
            { x: 2650, y: 480, width: 80, height: 30 }, { x: 2800, y: 420, width: 80, height: 30 }, { x: 2950, y: 360, width: 80, height: 30 },
            { x: 3200, y: 550, width: 1000, height: 50 },
            { x: 4500, y: 550, width: 200, height: 50 },
            { x: 4800, y: 480, width: 200, height: 50 },
            { x: 5100, y: 410, width: 200, height: 50 },
            { x: 5400, y: 340, width: 200, height: 50 },
            { x: 5700, y: 550, width: 1500, height: 50 },
            { x: 7400, y: 500, width: 150, height: 30 }, { x: 7600, y: 450, width: 150, height: 30 }, { x: 7800, y: 400, width: 150, height: 30 },
            { x: 8100, y: 550, width: 900, height: 50 },
        ],
        groundEnemies: [
            { type: 'jumping', x: 600, y: 550 },
            { type: 'walker-shooter', x: 1100, y: 550 }, { type: 'walker-shooter', x: 1400, y: 550 },
            { type: 'jumping', x: 2300, y: 550 }, { type: 'jumping', x: 2400, y: 550 },
            { type: 'walker-shooter', x: 3500, y: 550 }, { type: 'walker-shooter', x: 3900, y: 550 },
            { type: 'jumping', x: 4900, y: 480 }, { type: 'jumping', x: 5200, y: 410 },
            { type: 'walker-shooter', x: 6000, y: 550 }, { type: 'jumping', x: 6400, y: 550 }, { type: 'walker-shooter', x: 6800, y: 550 },
            { type: 'walker-shooter', x: 8300, y: 550 }, { type: 'walker-shooter', x: 8600, y: 550 },
        ],
        spikeZones: [
            { x: 800, y: 580, width: 150, height: 20 },
            { x: 4200, y: 580, width: 300, height: 20 },
            { x: 7200, y: 580, width: 200, height: 20 },
        ],
        healItems: [ { x: 3100, y: 350 }, { x: 5600, y: 330 }, { x: 8000, y: 380 } ],
        goalX: 8800,
    };

    // ゲームエンジンを初期化
    Game.init(stageData);
});