import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as r}from"./app-33d34e28.js";const a={},o=r('<h2 id="simple-dc" tabindex="-1"><a class="header-anchor" href="#simple-dc" aria-hidden="true">#</a> Simple DC</h2><table><thead><tr><th>Rank</th><th>DC</th><th>Difficulty</th><th>Adjustment</th></tr></thead><tbody><tr><td>Untrained</td><td>10</td><td>Challeging</td><td>+1</td></tr><tr><td>Trained</td><td>15</td><td>Hard</td><td>+2</td></tr><tr><td>Expert</td><td>20</td><td>Very Hard</td><td>+5</td></tr><tr><td>Master</td><td>25</td><td>Incredibly Hard</td><td>+10</td></tr><tr><td>Legendary</td><td>30</td><td>Near Impossible</td><td>+15</td></tr></tbody></table><h2 id="dc-by-level" tabindex="-1"><a class="header-anchor" href="#dc-by-level" aria-hidden="true">#</a> DC By Level</h2><table><thead><tr><th>Level</th><th>DC</th><th>Spell lvl</th><th>Spell DC</th><th></th><th>Level</th><th>DC</th><th>Spell lvl</th><th>Spell DC</th></tr></thead><tbody><tr><td>0</td><td>14</td><td>0</td><td>14</td><td></td><td>13</td><td>18</td><td>7</td><td>18</td></tr><tr><td>1</td><td>14</td><td>1</td><td>14</td><td></td><td>14</td><td>18</td><td></td><td></td></tr><tr><td>2</td><td>14</td><td></td><td></td><td></td><td>15</td><td>19</td><td>8</td><td>19</td></tr><tr><td>3</td><td>15</td><td>2</td><td>15</td><td></td><td>16</td><td>19</td><td></td><td></td></tr><tr><td>4</td><td>15</td><td></td><td></td><td></td><td>17</td><td>19</td><td>9</td><td>19</td></tr><tr><td>5</td><td>15</td><td>3</td><td>15</td><td></td><td>18</td><td>20</td><td></td><td></td></tr><tr><td>6</td><td>16</td><td></td><td></td><td></td><td>19</td><td>20</td><td>10</td><td>20</td></tr><tr><td>7</td><td>16</td><td>4</td><td>16</td><td></td><td>20</td><td>20</td><td></td><td></td></tr><tr><td>8</td><td>16</td><td></td><td></td><td></td><td>21</td><td>21</td><td></td><td></td></tr><tr><td>9</td><td>17</td><td>5</td><td>17</td><td></td><td>22</td><td>22</td><td></td><td></td></tr><tr><td>10</td><td>17</td><td></td><td></td><td></td><td>23</td><td>23</td><td></td><td></td></tr><tr><td>11</td><td>17</td><td>6</td><td>17</td><td></td><td>24</td><td>24</td><td></td><td></td></tr><tr><td>12</td><td>18</td><td></td><td></td><td></td><td>25</td><td>25</td><td></td><td></td></tr></tbody></table><p><em>If the spell is uncommon or rare, its difficulty should be adjusted accordingly</em></p><h2 id="medicine" tabindex="-1"><a class="header-anchor" href="#medicine" aria-hidden="true">#</a> Medicine</h2><table><thead><tr><th>Proficiency</th><th>DC</th><th>Success Healing</th><th>Critical Healing</th><th>Critical Failure</th></tr></thead><tbody><tr><td>Untrained</td><td>14</td><td>2d8</td><td>4d8</td><td>-1d8</td></tr><tr><td>Trained</td><td>14</td><td>2d8</td><td>4d8</td><td>-1d8</td></tr><tr><td>Expert</td><td>15</td><td>2d8+10</td><td>4d8+10</td><td>-1d8</td></tr><tr><td>Master</td><td>17</td><td>2d8+30</td><td>4d8+30</td><td>-1d8</td></tr><tr><td>Legendary</td><td>20</td><td>2d8+50</td><td>4d8+50</td><td>-1d8</td></tr></tbody></table><h2 id="diplomacy" tabindex="-1"><a class="header-anchor" href="#diplomacy" aria-hidden="true">#</a> Diplomacy</h2><h3 id="checks" tabindex="-1"><a class="header-anchor" href="#checks" aria-hidden="true">#</a> Checks</h3><table><thead><tr><th>TASK</th><th>DC</th><th>TIME</th><th>SKILL</th></tr></thead><tbody><tr><td>Convince of something</td><td>15*</td><td>1 minute***</td><td>Diplomacy, Deception</td></tr><tr><td>Make An Impression</td><td>Will DC</td><td>1 minute</td><td>Diplomacy, Deception, Intimidation (temporary makes Friendly; attitude shifts to unfriendly or lower after that)</td></tr><tr><td>Overcome Intransigence</td><td>Will DC</td><td>1 minute***</td><td>Diplomacy, Intimidation (but attitude shifts 1 step lower), Performance</td></tr><tr><td>Request****</td><td>15**</td><td>1 action</td><td>Diplomacy, Intimidation (attitude shifts to unfriendly or lower after that)</td></tr></tbody></table><p><small>*Modified by relationship.</small></p><p><small>**Modified by relationship and risk vs. reward.</small></p><p><small>***<b>Quick Diplomacy</b>. You can make a check as a standard action by accepting a -5 penalty to the check.</small></p><p><small>****<b>Cons</b>. In order to pull a con a character simply makes a Bluff check to convince the target that a deal is better than it actually is. It takes 1 minute.</small></p><h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h3><table><thead><tr><th>DC</th><th>ATTITUDE (Example)</th><th>RISK VS. REWARD JUDGMENT (Example)</th></tr></thead><tbody><tr><td>-15</td><td><strong>Helpful</strong>: (Intimate; someone with whom you have an implicit trust; a lover or spouse)</td><td><strong>Fantastic</strong>: (The reward for accepting the deal is very worthwhile; the risk is either acceptable or extremely unlikely. The best-case scenario is a virtual guarantee. Example: An offer to pay a lot of gold for information that isn&#39;t important to the character.)</td></tr><tr><td>-10</td><td><strong>Friendly</strong>: (someone with whom you have a regularly positive personal relationship; a long-time buddy or sibling)</td><td><strong>Good</strong>: (The reward is good and the risk is minimal. The subject is very likely to proift from the deal. Example: An offer to pay someone twice their normal daily wage to spend their evening in a seedy tavern with a reputation for vicious brawls and later report on everyone they saw there.)</td></tr><tr><td>-5</td><td><strong>Ally</strong>: (someone on the same team, but with whom you have no personal relationship; a cleric of the same religion or a knight serving the same king)</td><td><strong>Favorable</strong>: (The reward is appealing, but there&#39;s risk involved. If all goes according to plan, though, the deal will end up benefiting the subject. Example: A request for a mercenary to aid the party in battle against a weak goblin tribe in return for a cut of the money and first pick of the magic items.)</td></tr><tr><td>-2</td><td><strong>Acquaintance</strong> — Positive: (someone you&#39;ve met several times with no particularly negative experiences; the blacksmith that buys your looted equipment regularly)</td><td></td></tr><tr><td>0</td><td><strong>Indifferent</strong>: (Doesn&#39;t care about you either way. Most NPCs start out indifferent.)</td><td><strong>Even</strong>: (The reward and risk more of less even out; or the deal involves neither reward nor risk. Example: A request for directions to a place that isn&#39;t a secret.)</td></tr><tr><td>+2</td><td><strong>Unfriendly</strong>: (someone you&#39;ve met several times with no particularly positive experience; the town guard that has arrested you for drunkenness once or twice)</td><td></td></tr><tr><td>+5</td><td><strong>Hostile</strong>: (someone on an opposed team with whom you have no personal relationship; a cleric of an opposed religion or the orc bandit robbing you)</td><td><strong>Unfavorable</strong>: (The reward is not enough compared to the risk involved. Even if all goes according to plan, chances are it will end badly for the subject. Example: A request to free a prisoner the target is guarding for a small amount of money.)</td></tr><tr><td>+10</td><td><strong>Personal Foe</strong>: (someone with whom you have a regularly antagonistic personal relationship; an evil overlord you&#39;re trying to thwart or a bounty hunter sworn to track you down)</td><td><strong>Bad</strong>: (The reward is poor and the risk is high. The subject is very likely to get the raw end of the deal. Example: A request for a mercenary to aid the party in battle against an ancient red dragon for a small cut of any non-magical treasure.)</td></tr><tr><td>+15</td><td><strong>Nemesis</strong>: (someone who has sworn to do you, personally, harm; the brother of a man you murdered in cold blood)</td><td><strong>Horrible</strong>: (There is no conceivable way that the proposed plan could end up with the subject ahead or the worst-case scenario is guaranteed to occur. Example: An offer to trade a rusty kitchen knife for a shiny new longsword.)</td></tr></tbody></table><h2 id="doors-and-walls" tabindex="-1"><a class="header-anchor" href="#doors-and-walls" aria-hidden="true">#</a> Doors and Walls</h2><table><thead><tr><th>Type</th><th>Force Open DC</th><th>Climb DC</th><th>Hardness</th><th>HP</th></tr></thead><tbody><tr><td>Wooden Door or Window</td><td>15 (+5 if Hard)</td><td>20 (15 Reinforced)</td><td>10</td><td>40</td></tr><tr><td>Wooden Slats Wall</td><td>—</td><td>15</td><td>10</td><td>40</td></tr><tr><td>Wooden Portcullis</td><td>20 (Lift)</td><td>10</td><td>10</td><td>40</td></tr><tr><td>Stone Door or Window</td><td>20 (+5 if Hard)</td><td>25</td><td>14</td><td>56</td></tr><tr><td>Crumbling Masonry Wall</td><td>—</td><td>15</td><td>10</td><td>40</td></tr><tr><td>Masonry Wall</td><td>—</td><td>20</td><td>14</td><td>56</td></tr><tr><td>Hewn Stone</td><td>—</td><td>25</td><td>14</td><td>56</td></tr><tr><td>Iron Door or Window</td><td>25</td><td>25</td><td>18</td><td>72</td></tr><tr><td>Iron Wall</td><td>—</td><td>30</td><td>18</td><td>72</td></tr><tr><td>Iron Portcullis</td><td>25 (lift or Bend Bars)</td><td>10</td><td>18</td><td>72</td></tr></tbody></table><h2 id="xp-for-standart-party" tabindex="-1"><a class="header-anchor" href="#xp-for-standart-party" aria-hidden="true">#</a> XP for standart party</h2><table><thead><tr><th>Creature Level</th><th>XP</th><th>Suggested Role</th><th>2</th><th>3</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody><tr><td>Party level – 7</td><td>9</td><td>Low-threat lackey</td><td>18</td><td>12</td><td>7</td><td>6</td><td>5</td><td>5</td></tr><tr><td>Party level – 6</td><td>12</td><td>Low-threat lackey</td><td>24</td><td>16</td><td>10</td><td>8</td><td>7</td><td>6</td></tr><tr><td>Party level – 5</td><td>14</td><td>Low- or moderate-threat lackey</td><td>28</td><td>19</td><td>11</td><td>9</td><td>8</td><td>7</td></tr><tr><td>Party level – 4</td><td>18</td><td>Any lackey or standard creature</td><td>36</td><td>24</td><td>14</td><td>12</td><td>10</td><td>9</td></tr><tr><td>Party level – 3</td><td>21</td><td>Any lackey or standard creature</td><td>42</td><td>28</td><td>17</td><td>14</td><td>12</td><td>11</td></tr><tr><td>Party level – 2</td><td>26</td><td>Any standard creature</td><td>52</td><td>35</td><td>21</td><td>17</td><td>15</td><td>13</td></tr><tr><td>Party level – 1</td><td>32</td><td>Any standard creature</td><td>64</td><td>43</td><td>26</td><td>21</td><td>18</td><td>16</td></tr><tr><td>Party level</td><td>40</td><td>Any standard creature or low-threat boss</td><td>80</td><td>53</td><td>32</td><td>27</td><td>23</td><td>20</td></tr><tr><td>Party level + 1</td><td>48</td><td>Any standard creature or low-threat boss</td><td>96</td><td>64</td><td>38</td><td>32</td><td>27</td><td>24</td></tr><tr><td>Party level + 2</td><td>60</td><td>Low- or moderate-threat boss</td><td>120</td><td>80</td><td>48</td><td>40</td><td>34</td><td>30</td></tr><tr><td>Party level + 3</td><td>72</td><td>Moderate- or severe-threat boss</td><td>144</td><td>96</td><td>58</td><td>48</td><td>41</td><td>36</td></tr><tr><td>Party level + 4</td><td>90</td><td>Moderate- or severe-threat boss</td><td>180</td><td>120</td><td>72</td><td>60</td><td>51</td><td>45</td></tr><tr><td>Party level + 5</td><td>108</td><td>Severe- or extreme-threat boss</td><td>216</td><td>144</td><td>86</td><td>72</td><td>62</td><td>54</td></tr><tr><td>Party level + 6</td><td>135</td><td>Severe- or extreme-threat boss</td><td>270</td><td>180</td><td>108</td><td>90</td><td>77</td><td>68</td></tr><tr><td>Party level + 7</td><td>160</td><td>Extreme-threat solo boss</td><td>320</td><td>213</td><td>128</td><td>107</td><td>91</td><td>80</td></tr></tbody></table>',20),n=[o];function i(l,s){return d(),e("div",null,n)}const y=t(a,[["render",i],["__file","game-tables.html.vue"]]);export{y as default};
