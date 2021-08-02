import React, { useState } from 'react';
import Profs from './profs';
import styles from './npc-gen.css';

const NpcGen = ({ onChange }) => {
    const [npc, setNPC] = useState({ level: 8, AC: 18, perception: 7, skills: 4, hp: '95-120', saves: 0, strike: 2, spell: 5 });
    const [copyBtnText, setCopyBtnText] = useState('Copy');
    const itemsByLevel = ['0', '0', '0', '0', '0', '1', '1', '2 (+1 weapon)', '3 (+1 weapon)', '4 (+1 striking weapon)', '5 (+1 striking weapon, +1 armor)', '6 (+1 striking weapon, +1 armor)', '7 (+1 striking weapon, +1 armor)', '8 (+1 striking weapon, +1 resilient armor)', '9 (+1 striking weapon, +1 resilient armor)', '10 (+2 striking weapon, +1 resilient armor)', '11 (+2 striking weapon, +2 resilient armor)', '12 (+2 greater striking weapon, +2 resilient armor)', '13 (+2 greater striking weapon, +2 resilient armor)', '14 (+2 greater striking weapon, +2 greater resilient armor)', '15 (+2 greater striking weapon, +2 greater resilient armor)', '16 (+3 greater striking weapon, +2 greater resilient armor)', '17 (+3 greater striking weapon, +2 greater resilient armor)', '18 (+3 greater striking weapon, +3 greater resilient armor)', '19 (+3 major striking weapon, +3 greater resilient armor)', '20 (+3 major striking weapon, +3 major resilient armor)'];
    const resistanceByLevel = ['Max 1; Min 1', 'Max 3; Min 1', 'Max 3; Min 2', 'Max 5; Min 2', 'Max 6; Min 3', 'Max 7; Min 4', 'Max 8; Min 4', 'Max 9; Min 5', 'Max 10; Min 5', 'Max 11; Min 6', 'Max 12; Min 6', 'Max 13; Min 7', 'Max 14; Min 7', 'Max 15; Min 8', 'Max 16; Min 8', 'Max 17; Min 9', 'Max 18; Min 9', 'Max 19; Min 9', 'Max 19; Min 10', 'Max 20; Min 10', 'Max 21; Min 11', 'Max 22; Min 11', 'Max 23; Min 12', 'Max 24; Min 12', 'Max 25; Min 13', 'Max 26; Min 13']
    const strikeDamageByLevel = ['1d4 (2); 1d4 (3); 1d4+1 (3); 1d6+1 (4);', '1d4+1 (3); 1d4+2 (4); 1d6+2 (5); 1d6+3 (6);', '1d4+2 (4); 1d6+2 (5); 1d6+3 (6); 1d8+4 (8);', '1d6+3 (6); 1d8+4 (8); 1d10+4 (9); 1d12+4 (11);', '1d6+5 (8); 1d8+6 (10); 1d10+6 (12); 1d12+8 (15);', '2d4+4 (9); 2d6+5 (12); 2d8+5 (14); 2d10+7 (18);', '2d4+6 (11); 2d6+6 (13); 2d8+7 (16); 2d12+7 (20);', '2d4+7 (12); 2d6+8 (15); 2d8+9 (18); 2d12+10 (23);', '2d6+6 (13); 2d8+8 (17); 2d10+9 (20); 2d12+12 (25);', '2d6+8 (15); 2d8+9 (18); 2d10+11 (22); 2d12+15 (28);', '2d6+9 (16); 2d8+11 (20); 2d10+13 (24); 2d12+17 (30);', '2d6+10 (17); 2d10+11 (22); 2d12+13 (26); 2d12+20 (33);', '2d8+10 (19); 2d10+12 (23); 2d12+15 (28); 2d12+22 (35);', '3d6+10 (20); 3d8+12 (25); 3d10+14 (30); 3d12+19 (38);', '3d6+11 (21); 3d8+14 (27); 3d10+16 (32); 3d12+21 (40);', '3d6+13 (23); 3d8+15 (28); 3d10+18 (34); 3d12+24 (43);', '3d6+14 (24); 3d10+14 (30); 3d12+17 (36); 3d12+26 (45);', '3d6+15 (25); 3d10+15 (31); 3d12+18 (37); 3d12+29 (48);', '3d6+16 (26); 3d10+16 (32); 3d12+19 (38); 3d12+31 (50);', '3d6+17 (27); 3d10+17 (33); 3d12+20 (40); 3d12+34 (53);', '4d6+14 (28); 4d8+17 (35); 4d10+20 (42); 4d12+29 (55);', '4d6+15 (29); 4d8+19 (37); 4d10+22 (44); 4d12+32 (58);', '4d6+17 (31); 4d8+20 (38); 4d10+24 (46); 4d12+34 (60);', '4d6+18 (32); 4d8+22 (40); 4d10+26 (48); 4d12+37 (63);', '4d6+19 (33); 4d10+20 (42); 4d12+24 (50); 4d12+39 (65);', '4d6+21 (35); 4d10+22 (44); 4d12+26 (52); 4d12+42 (68);'];
    const areaDamageByLevel = ['unlim 1d4 (2); lim 1d6 (4)', 'unlim 1d6 (4); lim 1d10 (6)', 'unlim 2d4 (5); lim 2d6 (7)', 'unlim 2d6 (7); lim 3d6 (11)', 'unlim 2d8 (9); lim 4d6 (14)', 'unlim 3d6 (11); lim 5d6 (18)', 'unlim 2d10 (12); lim 6d6 (21)', 'unlim 4d6 (14); lim 7d6 (25)', 'unlim 4d6 (15); lim 8d6 (28)', 'unlim 5d6 (17); lim 9d6 (32)', 'unlim 5d6 (18); lim 10d6 (35)', 'unlim 6d6 (20); lim 11d6 (39)', 'unlim 6d6 (21); lim 12d6 (42)', 'unlim 5d8 (23); lim 13d6 (46)', 'unlim 7d6 (24); lim 14d6 (49)', 'unlim 4d12 (26); lim 15d6 (53)', 'unlim 6d8 (27); lim 16d6 (56)', 'unlim 8d6 (28); lim 17d6 (60)', 'unlim 8d6 (29); lim 18d6 (63)', 'unlim 9d6 (30); lim 19d6 (67)', 'unlim 7d8 (32); lim 20d6 (70)', 'unlim 6d10 (33); lim 21d6 (74)', 'unlim 10d6 (35); lim 22d6 (77)', 'unlim 8d8 (36); lim 23d6 (81)', 'unlim 11d6 (38); lim 24d6 (84)', 'unlim 11d6 (39); lim 25d6 (88)'];
    const hpByProfAndLvl = { 'Extreme': ['26–24', '40–36', '59–53', '78–72', '97–91', '123–115', '148–140', '173–165', '198–190', '223–215', '248–240', '273–265', '298–290', '323–315', '348–340', '373–365', '398–390', '423–415', '448–440', '473–465', '505–495', '544–532', '581–569', '633–617', '690–675', '765–643'], 'High': ['9', '20–17', '26–24', '40–36', '59–53', '78–72', '97–91', '123–115', '148–140', '173–165', '198–190', '223–215', '248–240', '273–265', '298–290', '323–315', '348–340', '373–365', '398–390', '423–415', '448–440', '473–465', '505–495', '544–532', '581–569', '633–617'], 'Moderate': ['8–7', '16–14', '21–19', '32–28', '48–42', '63–57', '78–72', '99–91', '119–111', '139–131', '159–151', '179–171', '199–191', '219–211', '239–231', '259–251', '279–271', '299–291', '319–311', '339–331', '359–351', '379–371', '405–395', '436–424', '466–454', '508–492'], 'Low': ['6–5', '13–11', '16–14', '25–21', '37–31', '48–42', '59–53', '75–67', '90–82', '105–97', '120–112', '135–127', '150–142', '165–157', '180–172', '195–187', '210–202', '225–217', '240–232', '255–247', '270–262', '285–277', '305–295', '329–317', '351–339', '383–367'] };

    const acProf = (state) => {
        switch (state.AC) {
            case 'Trained':
                return 4;
            case 'Expert':
                return 6;
            case 'Master':
                return 7;
            case 'Legendary':
                return 10;
            default:
                return 0;
        }
    }

    const perceptionProf = (state) => {
        switch (state.perception) {
            case 'Trained':
                return 2;
            case 'Expert':
                return 5;
            case 'Master':
                return 8;
            case 'Legendary':
                return 11;
            default:
                return 0;
        }
    }

    const strikeProf = (state) => {
        switch (state.strike) {
            case 'Trained':
                return 3;
            case 'Expert':
                return 7;
            case 'Master':
                return 9;
            case 'Legendary':
                return 11;
            default:
                return 0;
        }
    }

    const spellProf = (state) => {
        switch (state.spell) {
            case 'Trained':
                return 2;
            case 'Expert':
                return 4;
            case 'Master':
                return 7;
            case 'Legendary':
                return 11;
            default:
                return 0;
        }
    }

    const setState = (state) => {
        console.log('setState', state)
        let newNPC = {};
        newNPC.level = state.level;
        newNPC.AC = Math.floor(Math.max(0, state.level - 2) / 2) + 9 + acProf(state);
        newNPC.resistance = resistanceByLevel[state.level + 1];
        newNPC.perception = Math.floor(Math.max(0, state.level - 2) / 2) - 1 + perceptionProf(state);
        newNPC.strike = Math.floor(Math.max(0, state.level) / 2) -1 + strikeProf(state);
        newNPC.strikeDamge = strikeDamageByLevel[state.level + 1];
        newNPC.areadDamage = areaDamageByLevel[state.level + 1];
        newNPC.spell = Math.floor(Math.max(0, state.level) / 3) + 1 + spellProf(state);
        newNPC.skills = Math.floor(Math.max(0, state.level - 1) / 2) + 1;
        newNPC.hp = hpByProfAndLvl[state.hp][state.level + 1];
        newNPC.saves = Math.floor(Math.max(0, state.level - 2) / 2) - 1;
        newNPC.items = itemsByLevel[state.level + 1];
        if (!equal(npc, newNPC))
            setNPC(newNPC);
        console.log('npc', npc)
    }

    const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const getStatsText = () => `## Stat Block\n`
        + `**Level** ${npc.level}; **Items** ${npc.items};  \n`
        + `**Perception** +${npc.perception}; **Skills** Terrible +${npc.skills}; Low +${npc.skills + 4}; Moderate +${npc.skills + 6}; High +${npc.skills + 8}; Extreme +${npc.skills + 11};\n`
        + `\n`
        + `**AC** ${npc.AC}; **HP** ${npc.hp}; **Resistance/Weakness** ${npc.resistance};  \n`
        + `**Saves** Terrible +${npc.saves}; Low +${npc.saves + 2}; Moderate +${npc.saves + 5}; High +${npc.saves + 8}; Extreme +${npc.saves + 10};\n`
        + `\n`
        + `**Weapon Strike** +${npc.strike}; **Strike damage** ${npc.strikeDamge} **Area damage** ${npc.areadDamage};  \n`
        + `**Spells** Strike +${npc.spell}; DC ${npc.spell + 8}; Max lvl ${Math.min(10, Math.ceil(npc.level / 2.0))};\n`;

    return (
        <div>
            <div style={{ display: 'inline-block' }}>
                <Profs onChange={setState}></Profs>
            </div>
            <div className="statBlock" style={{ display: 'inline-block', width: '50%' }}>
                <button
                    type="button"
                    aria-label="Copy stats to clipboard"
                    className="copyButton clean-btn"
                    onMouseLeave={() => setTimeout(() => { setCopyBtnText('Copy') }, 1000)}
                    onClick={() => { navigator.clipboard.writeText(getStatsText()); setCopyBtnText('Copied'); }}
                >{copyBtnText}</button>
                <h2>Stat Block</h2>
                <p><b>Level</b> {npc.level}; <b>Items</b> {npc.items};<br />
                    <b>Perception</b> +{npc.perception}; <b>Skills</b> Terrible +{npc.skills}; Low +{npc.skills + 4}; Moderate +{npc.skills + 6}; High +{npc.skills + 8}; Extreme +{npc.skills + 11};</p>
                <p><b>AC</b> {npc.AC}; <b>HP</b> {npc.hp}; <b>Resistance/Weakness</b> {npc.resistance};<br />
                    <b>Saves</b> Terrible +{npc.saves}; Low +{npc.saves + 2}; Moderate +{npc.saves + 5}; High +{npc.saves + 8}; Extreme +{npc.saves + 10};</p>
                <p><b>Weapon Strike</b> +{npc.strike}; <b>Strike damage</b> {npc.strikeDamge} <b>Area damage</b> {npc.areadDamage};<br />
                    <b>Spells</b> Strike +{npc.spell}; DC {npc.spell + 8}; Max lvl {Math.min(10, Math.ceil(npc.level / 2.0))};</p>
            </div>
        </div>
    );
}

export default NpcGen;
