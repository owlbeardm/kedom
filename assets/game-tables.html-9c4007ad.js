import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,e as r}from"./app-fdd2faa4.js";const a={},o=r('<h2 id="simple-dc" tabindex="-1"><a class="header-anchor" href="#simple-dc" aria-hidden="true">#</a> Simple DC</h2><table><thead><tr><th>Rank</th><th>DC</th><th>Difficulty</th><th>Adjustment</th></tr></thead><tbody><tr><td>Untrained</td><td>6</td><td>Challeging</td><td></td></tr><tr><td>Trained</td><td>8</td><td>Hard</td><td></td></tr><tr><td>Expert</td><td>10</td><td>Very Hard</td><td></td></tr><tr><td>Master</td><td>12</td><td>Incredibly Hard</td><td></td></tr><tr><td>Legendary</td><td>14</td><td>Near Impossible</td><td></td></tr></tbody></table><h2 id="dc-by-level" tabindex="-1"><a class="header-anchor" href="#dc-by-level" aria-hidden="true">#</a> DC By Level</h2><table><thead><tr><th>Level</th><th>DC</th><th>Spell lvl</th><th>Spell DC</th></tr></thead><tbody><tr><td>0</td><td>14</td><td>0</td><td>7</td></tr><tr><td>1</td><td>14</td><td>1</td><td>7</td></tr><tr><td>2</td><td>14</td><td></td><td></td></tr><tr><td>3</td><td>15</td><td>2</td><td>8</td></tr><tr><td>4</td><td>15</td><td></td><td></td></tr><tr><td>5</td><td>15</td><td>3</td><td>8</td></tr><tr><td>6</td><td>16</td><td></td><td></td></tr><tr><td>7</td><td>16</td><td>4</td><td>9</td></tr><tr><td>8</td><td>16</td><td></td><td></td></tr><tr><td>9</td><td>17</td><td>5</td><td>10</td></tr><tr><td>10</td><td>17</td><td>6</td><td>11</td></tr></tbody></table><p><em>If the spell is uncommon or rare, its difficulty should be adjusted accordingly</em></p><h2 id="diplomacy" tabindex="-1"><a class="header-anchor" href="#diplomacy" aria-hidden="true">#</a> Diplomacy</h2><h3 id="checks" tabindex="-1"><a class="header-anchor" href="#checks" aria-hidden="true">#</a> Checks</h3><table><thead><tr><th>TASK</th><th>DC</th><th>TIME</th><th>SKILL</th></tr></thead><tbody><tr><td>Convince of something</td><td>8*</td><td>1 minute***</td><td>Diplomacy, Deception</td></tr><tr><td>Make An Impression</td><td>Will DC</td><td>1 minute</td><td>Diplomacy, Deception, Intimidation (temporary makes Friendly; attitude shifts to unfriendly or lower after that)</td></tr><tr><td>Overcome Intransigence</td><td>Morale*</td><td>1 minute***</td><td>Diplomacy, Intimidation (but attitude shifts 1 step lower), Performance</td></tr><tr><td>Request****</td><td>8**</td><td>1 action</td><td>Diplomacy, Intimidation (attitude shifts to unfriendly or lower after that)</td></tr></tbody></table><p><small>*Modified by relationship.</small></p><p><small>**Modified by relationship and risk vs. reward.</small></p><p><small>***<b>Quick Diplomacy</b>. You can make a check as a standard action by accepting a -5 penalty to the check.</small></p><p><small>****<b>Cons</b>. In order to pull a con a character simply makes a Bluff check to convince the target that a deal is better than it actually is. It takes 1 minute.</small></p><h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h3><table><thead><tr><th>DC</th><th>ATTITUDE (Example)</th><th>RISK VS. REWARD JUDGMENT (Example)</th></tr></thead><tbody><tr><td>-4</td><td><strong>Helpful</strong>: (Intimate; someone with whom you have an implicit trust; a lover or spouse)</td><td><strong>Fantastic</strong>: (The reward for accepting the deal is very worthwhile; the risk is either acceptable or extremely unlikely. The best-case scenario is a virtual guarantee. Example: An offer to pay a lot of gold for information that isn&#39;t important to the character.)</td></tr><tr><td>-3</td><td><strong>Friendly</strong>: (someone with whom you have a regularly positive personal relationship; a long-time buddy or sibling)</td><td><strong>Good</strong>: (The reward is good and the risk is minimal. The subject is very likely to proift from the deal. Example: An offer to pay someone twice their normal daily wage to spend their evening in a seedy tavern with a reputation for vicious brawls and later report on everyone they saw there.)</td></tr><tr><td>-2</td><td><strong>Ally</strong>: (someone on the same team, but with whom you have no personal relationship; a cleric of the same religion or a knight serving the same king)</td><td><strong>Favorable</strong>: (The reward is appealing, but there&#39;s risk involved. If all goes according to plan, though, the deal will end up benefiting the subject. Example: A request for a mercenary to aid the party in battle against a weak goblin tribe in return for a cut of the money and first pick of the magic items.)</td></tr><tr><td>-1</td><td><strong>Acquaintance</strong> — Positive: (someone you&#39;ve met several times with no particularly negative experiences; the blacksmith that buys your looted equipment regularly)</td><td></td></tr><tr><td>0</td><td><strong>Indifferent</strong>: (Doesn&#39;t care about you either way. Most NPCs start out indifferent.)</td><td><strong>Even</strong>: (The reward and risk more of less even out; or the deal involves neither reward nor risk. Example: A request for directions to a place that isn&#39;t a secret.)</td></tr><tr><td>+1</td><td><strong>Unfriendly</strong>: (someone you&#39;ve met several times with no particularly positive experience; the town guard that has arrested you for drunkenness once or twice)</td><td></td></tr><tr><td>+2</td><td><strong>Hostile</strong>: (someone on an opposed team with whom you have no personal relationship; a cleric of an opposed religion or the orc bandit robbing you)</td><td><strong>Unfavorable</strong>: (The reward is not enough compared to the risk involved. Even if all goes according to plan, chances are it will end badly for the subject. Example: A request to free a prisoner the target is guarding for a small amount of money.)</td></tr><tr><td>+3</td><td><strong>Personal Foe</strong>: (someone with whom you have a regularly antagonistic personal relationship; an evil overlord you&#39;re trying to thwart or a bounty hunter sworn to track you down)</td><td><strong>Bad</strong>: (The reward is poor and the risk is high. The subject is very likely to get the raw end of the deal. Example: A request for a mercenary to aid the party in battle against an ancient red dragon for a small cut of any non-magical treasure.)</td></tr><tr><td>+4</td><td><strong>Nemesis</strong>: (someone who has sworn to do you, personally, harm; the brother of a man you murdered in cold blood)</td><td><strong>Horrible</strong>: (There is no conceivable way that the proposed plan could end up with the subject ahead or the worst-case scenario is guaranteed to occur. Example: An offer to trade a rusty kitchen knife for a shiny new longsword.)</td></tr></tbody></table><h2 id="doors-and-walls" tabindex="-1"><a class="header-anchor" href="#doors-and-walls" aria-hidden="true">#</a> Doors and Walls</h2><table><thead><tr><th>Type</th><th>Force Open DC</th><th>Climb DC</th></tr></thead><tbody><tr><td>Wooden Door or Window</td><td>8 (+1 if Hard)</td><td>10 (15 Reinforced)</td></tr><tr><td>Wooden Slats Wall</td><td>—</td><td>8</td></tr><tr><td>Wooden Portcullis</td><td>10 (Lift)</td><td>8</td></tr><tr><td>Stone Door or Window</td><td>10 (+1 if Hard)</td><td>12</td></tr><tr><td>Crumbling Masonry Wall</td><td>—</td><td>8</td></tr><tr><td>Masonry Wall</td><td>—</td><td>10</td></tr><tr><td>Hewn Stone</td><td>—</td><td>12</td></tr><tr><td>Iron Door or Window</td><td>12</td><td>12</td></tr><tr><td>Iron Wall</td><td>—</td><td>14</td></tr><tr><td>Iron Portcullis</td><td>12 (lift or Bend Bars)</td><td>6</td></tr></tbody></table>',16),n=[o];function i(s,l){return e(),d("div",null,n)}const m=t(a,[["render",i],["__file","game-tables.html.vue"]]);export{m as default};
