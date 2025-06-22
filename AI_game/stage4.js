document.addEventListener('DOMContentLoaded', () => {
    const stageData = {
        worldWidth: 12000,
        airEnemies: true,
        obstacles: [
            { x: 0, y: 550, width: 400, height: 50 },
            { x: 650, y: 450, width: 200, height: 40 },
            { x: 1000, y: 350, width: 150, height: 40 },
            { x: 1300, y: 480, width: 100, height: 40 },
            { x: 1500, y: 400, width: 100, height: 40 },
            { x: 1700, y: 320, width: 100, height: 40 },
            { x: 2000, y: 500, width: 2000, height: 100 },
            { x: 3800, y: 300, width: 150, height: 30},
            { x: 4200, y: 450, width: 100, height: 30 },
            { x: 4400, y: 400, width: 80, height: 30 },
            { x: 4600, y: 450, width: 80, height: 30 },
            { x: 4850, y: 380, width: 60, height: 30 },
            { x: 5050, y: 460, width: 60, height: 30 },
            { x: 5250, y: 350, width: 150, height: 30 },
            { x: 5550, y: 420, width: 60, height: 30 },
            { x: 5750, y: 350, width: 60, height: 30 },
            { x: 5950, y: 450, width: 80, height: 30 },
            { x: 6150, y: 400, width: 80, height: 30 },
            { x: 6600, y: 520, width: 2000, height: 80 },
            { x: 8800, y: 400, width: 150, height: 40 },
            { x: 9100, y: 280, width: 150, height: 40 },
            { x: 9400, y: 450, width: 150, height: 40 },
            { x: 9700, y: 350, width: 40, height: 150 },
            { x: 9900, y: 250, width: 200, height: 40 },
            { x: 10300, y: 500, width: 300, height: 100},
            { x: 10350, y: 350, width: 200, height: 40},
            { x: 10800, y: 450, width: 1000, height: 150},
        ],
        fixedEnemies: [
            { type: 'turret', x: 2200, y: 440 },
            { type: 'turret', x: 2800, y: 440 },
            { type: 'turret', x: 3500, y: 440 },
            { type: 'turret', x: 3825, y: 240 },
            { type: 'turret', x: 9125, y: 220 },
            { type: 'turret', x: 9425, y: 390 }, // y座標を地形に合わせ修正
            { type: 'turret', x: 10400, y: 290 },
            { type: 'turret', x: 10500, y: 440 }, // y座標を地形に合わせ修正
        ],
        groundEnemies: [
            { type: 'onibi', x: 6800, y: 520 },
            { type: 'onibi', x: 7100, y: 520 },
            { type: 'onibi', x: 7400, y: 520 },
            { type: 'onibi', x: 7700, y: 520 },
            { type: 'onibi', x: 8000, y: 520 },
            { type: 'onibi', x: 8300, y: 520 }
        ],
        damageZones: [
            { x: 4200, y: 580, width: 2350, height: 20 }
        ],
        healItems: [
            { x: 4100, y: 450 },
            { x: 8700, y: 450 },
            { x: 11600, y: 350 }
        ],
        goalX: 11800,
    };

    // ゲームエンジンを初期化
    if (window.Game) {
        window.Game.init(stageData);
    } else {
        console.error('Game engine not loaded!');
    }
});