// stage_template.js

document.addEventListener('DOMContentLoaded', () => {
    
    // このオブジェクトにステージの情報を記述します
    const stageData = {
        // ▼ 必須項目 ▼
        worldWidth: 8000, // ステージの全長（ピクセル）
        
        // ▼ 地形データ ▼
        // { x: X座標, y: Y座標, width: 幅, height: 高さ }
        obstacles: [
            { x: 0, y: 550, width: 500, height: 50 },
            // ...
        ],
        
        // ▼ ゴール ▼
        // ボスがいないステージでは必須
        goalX: 7800,

        // ▼ 任意項目（不要なものは配列ごと削除してOK） ▼

        // 地上を歩くタイプの敵
        // type: 'jumping', 'walker-shooter', 'chameleon', 'onibi'
        // { type: '敵の種類', x: X座標, y: 敵が立つ地面のY座標 }
        groundEnemies: [
            { type: 'jumping', x: 600, y: 550 },
            // ...
        ],

        // 空中に最初から固定されている敵
        // type: 'turret'
        // { type: '敵の種類', x: X座標, y: Y座標 }
        fixedEnemies: [
            { type: 'turret', x: 1000, y: 400 },
            // ...
        ],
        
        // 空から飛来する敵を出現させるか
        airEnemies: true, 

        // HP回復アイテム
        // { x: X座標, y: Y座標 }
        healItems: [
            { x: 3000, y: 300 },
            // ...
        ],
        
        // MP全回復アイテム
        // { x: X座標, y: Y座標 }
        mpFullItems: [
            { x: 5000, y: 200 },
            // ...
        ],

        // 継続ダメージゾーン（紫の毒沼）
        // { x: X座標, y: Y座標, width: 幅, height: 高さ }
        damageZones: [
            { x: 1000, y: 580, width: 200, height: 20 },
            // ...
        ],

        // トゲ
        // { x: X座標, y: Y座標, width: 幅, height: 高さ }
        spikeZones: [
             { x: 2000, y: 580, width: 150, height: 20 },
            // ...
        ],

        // ボス
        // goalXよりも優先される。ボス撃破後にゴールが出現
        bossX: 7000,
        bossY: 420, // (任意) Y座標を指定しない場合はデフォルト値
    };

    // ゲームエンジンを初期化
    if (window.Game) {
        window.Game.init(stageData);
    } else {
        console.error('Game engine not loaded!');
    }
});