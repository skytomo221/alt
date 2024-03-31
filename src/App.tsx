import React from "react";

import ai from "./assets/images/ai.png";
import aiHover from "./assets/images/ai-hover.png";
import skytomo from "./assets/images/skytomo.png";
import skytomoHover from "./assets/images/skytomo-hover.png";
import lulu from "./assets/images/lulu.png";
import luluHover from "./assets/images/lulu-hover.png";
import { Member } from "./Member";

export function App(): JSX.Element {
  return (
    <>
      <header>ALt</header>
      <main className="mx-auto w-full max-w-7xl bg-black/30 z-10">
        <section>
          <h1>ALt</h1>
          <section>
            <h2>メンバー紹介</h2>
          <div className="flex flex-row">
              <Member
                name="星野Ai"
                face={ai}
                hoverFace={aiHover}
                profile="青い魔法少女の宙猫ちゃん。食欲旺盛、主張は控えめ。でも、本当に嫌なことははっきりNOと言える子。寝る前はとてもかわいい反応をしてくれるらしい……。"
                favoriteFood="モンブラン"
                hobby="スイーツめぐり"
                comment="みんなのかわいいアイドル、星野Aiです！"
              />
              <Member
                name="ルル"
                face={lulu}
                hoverFace={luluHover}
                profile="オッドアイのミルクちゃん。魅力的なかわいいムーブで、迷える子羊を大量に輩出している。いたずら好き。普段は静かだけど、お酒を飲むとおしゃべりになる。"
                favoriteFood="甘いものー！"
                hobby="パブリック無言可愛いムーブ！"
                comment="日付みて"
              />
              <Member
                name="skytomo"
                face={skytomo}
                hoverFace={skytomoHover}
                profile="透明な翼を持つシピルカくん。突然、電波を受信して変なことを言い出すことがある。でも、そのおかげで、みんなが笑顔になることもしばしば。"
                favoriteFood="オムライス"
                hobby="プログラミング"
                comment="キラキラ～✨️"
              />
            </div>
          </section>
        </section>
      </main>
      <footer>このウェブサイトは2024年4月1日に公開されました。</footer>
    </>
  );
}
