document.addEventListener('DOMContentLoaded', () => {
    const stageData = {
        worldWidth: 15000,
        airEnemies: true,
        obstacles: [
            { x: 0, y: 550, width: 300, height: 50 },
            { x: 450, y: 480, width: 80, height: 30 }, { x: 650, y: 400, width: 80, height: 30 }, { x: 850, y: 320, width: 80, height: 30 },
            { x: 1100, y: 500, width: 40, height: 30 }, { x: 1250, y: 450, width: 40, height: 30 }, { x: 1400, y: 400, width: 40, height: 30 }, { x: 1550, y: 350, width: 40, height: 30 },
            { x: 1800, y: 520, width: 1000, height: 80 },
            { x: 3000, y: 450, width: 60, height: 40 }, { x: 3200, y: 450, width: 60, height: 40 }, { x: 3400, y: 450, width: 60, height: 40 },
            { x: 3700, y: 350, width: 800, height: 40 },
            { x: 4800, y: 500, width: 150, height: 30 }, { x: 5050, y: 450, width: 150, height: 30 }, { x: 5300, y: 400, width: 150, height: 30 },
            { x: 5800, y: 250, width: 150, height: 30 }, { x: 6100, y: 250, width: 150, height: 30 },
            { x: 6500, y: 520, width: 1500, height: 80 },
            { x: 8200, y: 400, width: 80, height: 30 }, { x: 8350, y: 300, width: 80, height: 30 }, { x: 8200, y: 200, width: 80, height: 30 },
            { x: 8600, y: 500, width: 200, height: 30 }, { x: 8900, y: 400, width: 200, height: 30 }, { x: 9200, y: 300, width: 200, height: 30 },
            { x: 9600, y: 200, width: 800, height: 40 },
            { x: 10500, y: 550, width: 100, height: 50 }, { x: 10700, y: 550, width: 100, height: 50 }, { x: 10900, y: 550, width: 100, height: 50 },
            { x: 11200, y: 450, width: 1000, height: 40 },
            // Boss Arena
            { x: 12300, y: 350, width: 100, height: 50 },
            { x: 12400, y: 250, width: 100, height: 50 },
            { x: 12500, y: 150, width: 300, height: 50 },
            { x: 13000, y: 550, width: 2000, height: 50 }
        ],
        fixedEnemies: [
            { type: 'turret', x: 2000, y: 460 }, { type: 'turret', x: 2500, y: 460 },
            { type: 'turret', x: 3900, y: 290 }, { type: 'turret', x: 4300, y: 290 },
            { type: 'turret', x: 5825, y: 190 }, { type: 'turret', x: 6125, y: 190 },
            { type: 'turret', x: 9700, y: 140 }, { type: 'turret', x: 10000, y: 140 }, { type: 'turret', x: 10300, y: 140 },
            { type: 'turret', x: 11400, y: 390 }, { type: 'turret', x: 11700, y: 390 }, { type: 'turret', x: 12000, y: 390 },
        ],
        groundEnemies: [
            { type: 'onibi', x: 6600, y: 520 }, { type: 'onibi', x: 6900, y: 520 }, { type: 'onibi', x: 7200, y: 520 }, { type: 'onibi', x: 7500, y: 520 },
        ],
        damageZones: [
            { x: 2800, y: 580, width: 1900, height: 20 },
            { x: 8000, y: 580, width: 3000, height: 20 }
        ],
        healItems: [ { x: 4600, y: 300 }, { x: 9500, y: 250 }, { x: 12800, y: 450 } ],
        bossX: 13800,
        bossY: 550 - 180, // 地面のY座標 - ボスの高さ
    };

    // ゲームエンジンを初期化
    if (window.Game) {
        window.Game.init(stageData);
    } else {
        console.error('Game engine not loaded!');
    }
});