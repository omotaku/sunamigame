document.addEventListener('DOMContentLoaded', () => {
    const stageData = {
        worldWidth: 7200,
        airEnemies: true, // このステージでは空から敵が飛来します
        obstacles: [
            { x: 50, y: 500, width: 300, height: 100 },
            { x: 450, y: 450, width: 150, height: 40 },
            { x: 700, y: 400, width: 120, height: 40 },
            { x: 950, y: 450, width: 200, height: 40 },
            { x: 1250, y: 380, width: 80, height: 40 },
            { x: 1400, y: 320, width: 80, height: 40 },
            { x: 1550, y: 260, width: 80, height: 40 },
            { x: 1750, y: 350, width: 300, height: 40 },
            { x: 2150, y: 300, width: 40, height: 40 },
            { x: 2300, y: 250, width: 40, height: 40 },
            { x: 2450, y: 200, width: 40, height: 40 },
            { x: 2600, y: 400, width: 250, height: 40 },
            { x: 2950, y: 400, width: 250, height: 40 },
            { x: 3300, y: 350, width: 150, height: 150 },
            { x: 3600, y: 250, width: 100, height: 40 },
            { x: 3800, y: 200, width: 100, height: 40 },
            { x: 4000, y: 150, width: 100, height: 40 },
            { x: 4200, y: 400, width: 400, height: 200 },
            { x: 4700, y: 450, width: 150, height: 40 },
            { x: 4950, y: 420, width: 100, height: 40 },
            { x: 5150, y: 380, width: 100, height: 40 },
            { x: 5350, y: 340, width: 100, height: 40 },
            { x: 5550, y: 350, width: 200, height: 40 },
            { x: 5850, y: 400, width: 60, height: 40 },
            { x: 6000, y: 350, width: 60, height: 40 },
            { x: 6150, y: 300, width: 60, height: 40 },
            { x: 6350, y: 400, width: 150, height: 40 },
            { x: 6600, y: 480, width: 250, height: 40 },
            { x: 6900, y: 400, width: 250, height: 40 },
        ],
        fixedEnemies: [
            { type: 'turret', x: 1000, y: 390 },
            { type: 'turret', x: 1800, y: 290 },
            { type: 'turret', x: 2800, y: 340 },
            { type: 'turret', x: 3100, y: 340 },
            { type: 'turret', x: 4400, y: 340 },
            { type: 'turret', x: 5700, y: 290 },
            { type: 'turret', x: 6700, y: 440 }
        ],
        groundEnemies: [
            { type: 'onibi', x: 800, y: 400 },
            { type: 'onibi', x: 1850, y: 350 },
            { type: 'onibi', x: 2650, y: 400 },
            { type: 'onibi', x: 3000, y: 400 },
            { type: 'onibi', x: 6550, y: 480 }, // y座標を地形に合わせ修正
        ],
        damageZones: [
            { x: 3300, y: 580, width: 150, height: 20 },
            { x: 4200, y: 580, width: 400, height: 20 }
        ],
        goalX: 7000, // WORLD_WIDTH - 200
    };

    // ゲームエンジンを初期化
    if (window.Game) {
        window.Game.init(stageData);
    } else {
        console.error('Game engine not loaded!');
    }
});