// stage6.js (ボスなし・長編ステージ版)

document.addEventListener('DOMContentLoaded', () => {
    
    const stageData = {
        worldWidth: 8000, // ステージ長を大幅に延長
        
        obstacles: [
            // --- Section 1: Entry and First Ascent (～x=650) ---
            { x: 0, y: 550, width: 600, height: 50 },
            { x: 550, y: 450, width: 50, height: 100 },
            { x: 400, y: 420, width: 100, height: 30 },
            { x: 200, y: 300, width: 100, height: 30 },
            { x: 400, y: 180, width: 100, height: 30 },
            { x: 0, y: 100, width: 300, height: 30 },

            // --- Section 2: Horizontal Corridor (x=700～1700) ---
            { x: 700, y: 550, width: 1000, height: 50 },
            { x: 650, y: 0, width: 50, height: 400 },
            { x: 1000, y: 400, width: 400, height: 30 },
            { x: 1700, y: 400, width: 50, height: 150 },

            // --- Section 3: Vertical Shaft (x=1800～2800) ---
            { x: 1800, y: 150, width: 800, height: 50 },
            { x: 1800, y: 500, width: 800, height: 50 },
            { x: 1900, y: 350, width: 80, height: 30 },
            { x: 2100, y: 420, width: 80, height: 30 },
            { x: 2300, y: 320, width: 80, height: 30 },
            { x: 2500, y: 250, width: 80, height: 30 },
            { x: 2700, y: 0, width: 50, height: 150 },
            { x: 2700, y: 550, width: 50, height: -350},

            // --- Section 4: Conveyor Belt Hell (x=2800～5000) ---
            { x: 2800, y: 550, width: 2200, height: 50 },
            { x: 3000, y: 450, width: 150, height: 30 },
            { x: 3300, y: 350, width: 150, height: 30 },
            { x: 3600, y: 450, width: 150, height: 30 },
            { x: 3900, y: 250, width: 400, height: 30 },
            { x: 4500, y: 400, width: 200, height: 30 },
            { x: 4800, y: 300, width: 200, height: 30 },
            
            // --- Section 5: Final Ascent (x=5000～7800) ---
            { x: 5100, y: 500, width: 2800, height: 50 },
            { x: 5300, y: 400, width: 100, height: 20 },
            { x: 5500, y: 300, width: 100, height: 20 },
            { x: 5700, y: 200, width: 100, height: 20 },
            { x: 5900, y: 100, width: 100, height: 20 },
            { x: 6200, y: 100, width: 400, height: 50 },
            { x: 6800, y: 200, width: 30, height: 300 }, // Wall
            { x: 7000, y: 400, width: 200, height: 30 },
            { x: 7300, y: 300, width: 200, height: 30 },
            { x: 7600, y: 200, width: 200, height: 30 },
        ],
        
        fixedEnemies: [], // 空中・固定敵はなし
        
        groundEnemies: [
            // Section 1
            { type: 'security-bot', x: 300, y: 550 },
            { type: 'security-bot', x: 150, y: 100 },
            // Section 2
            { type: 'security-bot', x: 800, y: 550 },
            { type: 'security-bot', x: 1200, y: 400 },
            { type: 'security-bot', x: 1500, y: 550 },
            // Section 3
            { type: 'security-bot', x: 1850, y: 150 },
            { type: 'security-bot', x: 2400, y: 500 },
            // Section 4
            { type: 'security-bot', x: 3100, y: 550 },
            { type: 'security-bot', x: 4000, y: 250 },
            { type: 'security-bot', x: 4600, y: 550 },
            // Section 5
            { type: 'security-bot', x: 5150, y: 500 },
            { type: 'security-bot', x: 6400, y: 100 },
            { type: 'security-bot', x: 7100, y: 500 },
            { type: 'security-bot', x: 7700, y: 500 },
        ],
        
        healItems: [
            { x: 400, y: 100 },
            { x: 1750, y: 500 }, 
            { x: 2750, y: 100 },
            { x: 4900, y: 500 },
            { x: 6700, y: 80 },
        ],

        mpFullItems: [
            { x: 100, y: 70 }
        ],
        
        goalX: 7800, // ステージ最奥にゴールを設置
    };

    if (window.Game) {
        window.Game.init(stageData);
        document.getElementById('game-container').className = 'stage6-bg';
    } else {
        console.error('Game engine not loaded!');
    }
});