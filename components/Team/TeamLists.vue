<template>
  <ul class="sm:grid sm:grid-cols-2 sm:gap-10 mt-16">
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/team_icon_placeholder.png" alt="">
      </template>
      <template v-slot:name>
        代表取締役　田巻富士夫（ジミー）
      </template>
      <template v-slot:desc>
        <p>1987年生まれ</p>　
        <p>2000年　ジャニーズ事務所に所属、ジャニーズJr.として活躍</p>
        <p>2009年　野村証券株式会社　エクイティトレーディング部に配属</p>
        <p>2013年　みずほ証券　エクイティトレーディング部に配属</p>
        <p>2016年 FunLife 設立、代表取締役に就任</p>
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/team_icon_placeholder.png" alt="">
      </template>
      <template v-slot:name>
        取締役　石侍露堂
      </template>
      <template v-slot:desc>
        <p>1953年生まれ</p>
        <p>武蔵野美術大学卒業。 旧ソ連に留学中、名匠タルコフスキー監督の勧めにより造形作家から映像作家へ転身。</p>
        <p>987年　ドキュメンタリー映画の監督として独立すると共に映像制作会社を設立。 主にヨーロッパと中近東を題材とした映画作品と TVドキュメントを手掛ける。</p>
        <p>1992年　初の長編劇場映画である日ロ合作映画「イコン伝説」をソ連邦が崩壊する中で監督。</p>
        <p>1994 年　渡米し、ハリウッドで劇場映画の監督として活動。ショーン・コネリーの息子であるジェイソン・コネリーやミラ・ ソロビノ、ジョゼフ・ファインズなどを用いた作品を監督。</p>
        <p>1999年　再び日本にて映画製作をする傍ら、複数の映像関連 の専門学校の講師を務める。</p>
        <p>主な映画作品 「ヴィア・ドロローサ」「砂漠の修道士」「ゴーマ」 「アルザス過去りし日々」「ムードンの森から」 「イコン伝説」「サクセサー」「宣戦布告」「アイアム」 「てのひら物語」 など</p>
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/team_icon_placeholder.png" alt="">
      </template>
      <template v-slot:name>
        向井加寿子
      </template>
      <template v-slot:desc>
        <p>1978年　マックシスター兼チーフデザイナー就任</p>
        <p>1981年　サンクエムセゾン全社企画部デザイナー</p>
        <p>1994年　株式会社フルレールにてブランドディレクター就任</p>
        <p>1999年　ブランディング会社ケープラス　設立</p>
        <p>代表取締役　現在に至る</p>
        <p>婦人向けアパレルやファッション企画に携わる</p>
        <p>2012年4月〜2018年</p>
        <p>和洋女子大学家政学類服飾造形学類　准教授</p>
        <p>産業能率大学　兼任教員　就任</p>
        <p>自由が丘産能短期大学兼任教員　就任　</p>
        <p>至現在所属学会　ファッションビジネス学</p>
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/team_icon_placeholder.png" alt="">
      </template>
      <template v-slot:name>
        田中良幸
      </template>
      <template v-slot:desc>
        <p>1962年生まれ</p>
        <p>1990年4月 産経新聞社入社</p>
        <p>1997年4月 クラシック音楽情報月刊誌「モーストリー・クラシック」創刊、編集⻑に就任</p>
        <p>2005年3月 編集⻑退任、編集局編集委員・営業局特命担当部⻑就任</p>
        <p>2006年4月 株式会社アプローズ設立、代表取締役に就任</p>
        <p>2006年-2017年 : 石油大手・出光興産のコンサート・シリーズ「ミュージック・イン・ミュージアム」のプロデュースを担当</p>
        <p>2010年1月 株式会社クラシック・ファーストを設立、取締役に</p>
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/team_icon_placeholder.png" alt="">
      </template>
      <template v-slot:name>
        山本章浩
      </template>
      <template v-slot:desc>
        <p>1965年生まれ</p>
        <p>1992年1月　エアーインディア入社（伊丹大阪国際空港　勤務）入社</p>
        <p>1994年3月　株式会社ウィズウェイストジャパン（環境バイオ事業部）入社</p>
        <p>1996年12月　株式会社　ゆう　環境バイオ事業部　入社　部長就任</p>
        <p>1997年2月　有限会社　バイオスタンダード　設立　取締役就任</p>
        <p>1999年３月　環境NGOアジア環境連帯　常任理事就任</p>
        <p>2004年3月　職業能力開発総合学校　東京校　環境管理技術科　外部講師　就任</p>
        <p>2017年4月　日本安全保障・危機管理学会　インテリジェンス主任研究員　就任</p>
      </template>
    </TeamItem>
  </ul>
</template>

<script>
import TeamItem from '@/components/Team/TeamItem'

export default {
  components: {
    TeamItem,
  }
}
</script>