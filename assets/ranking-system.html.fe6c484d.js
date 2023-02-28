import{_ as r,o as s,c as i,a,b as t,w as n,e as h,d as e,r as l}from"../app.2f314514.mjs";const d="/assets/pp-curve.0c18375e.png",c={},p=h('<h1 id="how-does-scoresaber-and-the-pp-system-work" tabindex="-1"><a class="header-anchor" href="#how-does-scoresaber-and-the-pp-system-work" aria-hidden="true">#</a> How does ScoreSaber and the PP system work?</h1><h2 id="earning-pp" tabindex="-1"><a class="header-anchor" href="#earning-pp" aria-hidden="true">#</a> Earning PP</h2><p>PP is in return awarded to players for submitting a score on ranked maps,. To prevent skilled players from grinding hundreds of easier maps worth less PP to rank up, a curve is applied to your plays. This curve is available below, it shows the percentage of points you get relative to the assigned PP value of a map based on your performance on said map.</p><p>ScoreSaber calculates your total PP, which you can see next to your ScoreSaber profile, based on a weighted total of all your ranked map completions. Your highest PP play will give 100% of the PP earned from the play, but every play after that is weighted at a percentage 5% lower than the play above it. The weighting is <code>0.965^(n-1)</code>, where <code>n</code> is the ranking of a specific play amongst all your PP plays. A new play will give PP at the weight based on its position in your ranked plays, but it also pushes down the weighting of play below it. That is why your PP gains for completing ranked maps don\u2019t necessarily sum up with the numbers shown in your profile.</p><p><img src="'+d+'" alt="PP Curve"></p><h3 id="global-ranking" tabindex="-1"><a class="header-anchor" href="#global-ranking" aria-hidden="true">#</a> Global Ranking</h3><p>A global rank will be assigned to your profile. This rank is based on comparing the total amount of pp earned to every other player from all the active players around the globe.</p><h3 id="country-ranking" tabindex="-1"><a class="header-anchor" href="#country-ranking" aria-hidden="true">#</a> Country Ranking</h3><p>A country rank is assigned to your profile based on your location at the moment of setting your first score. This rank, just like your global rank, is based on comparing the total amount of pp earned to every other active player from your country.</p><h2 id="ranking-process" tabindex="-1"><a class="header-anchor" href="#ranking-process" aria-hidden="true">#</a> Ranking process</h2>',10),u=e("The "),m=e("Ranking Team"),f=e(" ranks maps through a communal evaluation process. A map is first chosen by a team member to be checked; if the map seems to meet everything from the "),y=e("ranking criteria"),g=e(", it is then added to the "),_=e("ranking-queue"),b=e(" and will eventually reach the top of said queue until it is qualified with 3 upvotes. Once the map is qualified by the Nomination Assessment Team, a timer of 7 days is started for players to give feedback to the mapper. Finally, when the 7 day timer comes to an end, the map will be approved, and ranked."),k=a("p",null,[e("When a map is ranked, it is then assigned a Performance Points (commonly referred to as "),a("em",null,"PP"),e(") value based on an algorithm which determines the difficulty of said map, this is based of a variety of factors.")],-1),w=a("h3",{id:"unranking-process",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#unranking-process","aria-hidden":"true"},"#"),e(" Unranking process")],-1),v=e("There isn't and will not be any unranking process on ScoreSaber. If you're curious as to why, please refer to this question in our "),P=e("FAQ"),S=e(". Currently, the only way maps could ever become unranked is if the mapper is banned from ScoreSaber. You can be banned for various reasons such has repeatedly breaking our "),x=e("rules"),T=e(", or making one of your ranked map unavailable to everyone. Since ScoreSaber does not support sharing custom maps between each-other, we rely on the availability of said map from the creator only."),q={class:"custom-container tip"},A=a("p",{class:"custom-container-title"},"For any question that was not answered on this page please refer to our",-1),R=e("FAQ");function C(N,F){const o=l("RouterLink");return s(),i("div",null,[p,a("p",null,[u,t(o,{to:"/ranking/scoresaber-team-information.html#ranking-team-rt"},{default:n(()=>[m]),_:1}),f,t(o,{to:"/ranking/criteria/"},{default:n(()=>[y]),_:1}),g,t(o,{to:"/ranking/ranking-queue-rules.html"},{default:n(()=>[_]),_:1}),b]),k,w,a("p",null,[v,t(o,{to:"/faq.html#why-can-a-map-not-be-unranked"},{default:n(()=>[P]),_:1}),S,t(o,{to:"/rules.html"},{default:n(()=>[x]),_:1}),T]),a("div",q,[A,a("p",null,[t(o,{to:"/faq.html"},{default:n(()=>[R]),_:1})])])])}const B=r(c,[["render",C],["__file","ranking-system.html.vue"]]);export{B as default};
