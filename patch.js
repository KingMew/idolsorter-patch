/*
PriPara and SideM in Idol Sorter! Script by derP@765pro. Other idol shows eventually.

HOW TO RUN THIS SCRIPT:
  1. Open the Idol Sorter ( http://kouhi.me/idol/ ) in either Firefox or Chrome (other browsers untested).
  2. Open the developer console by pressing F12. You might have to click "console" when the subwindow pops up.
  3. Paste this very code into the console and press Enter.
  4. If everything works, you should see "PriPara S1+S2 (12)" appear as a checkbox.
  5. If it doesn't work... well, it worked on my machine.
*/

var pripara_data = [
    [0, "Manaka Laala", "CV: Akaneya Himika", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Laala-S2.png"],
    [0, "Minami Mirei", "CV: Serizawa Yu", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Mirei-S2.png"],
    [0, "Houjou Sophie", "CV: Miyu Kubota", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Sophie-S2.png"],
    [0, "Toudou Shion", "CV: Yamakita Saki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Shion-S2.png"],
    [0, "Dorothy West", "CV: Shibuya Azuki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Dorothy-S2.png"],
    [0, "Leona West", "CV: Wakai Yuki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Reona-S2.png"], //bae
    [0, "Falulu VocalDoll", "CV: Akasaki Chinatsu", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Faruru-S2.jpg"],
    [0, "Shiratama Mikan", "CV: Watanabe Yui", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Mikan-S2.png"],
    [0, "Kurosu Aroma", "CV: Makino Yui", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Aroma-S2.png"],
    [0, "Midorikaze Fuwari", "CV: Sato Azusa", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Fuwari-S2.png"],
    [0, "Shikyoin Hibiki", "CV: Saiga Mitsuki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Hibiki-S2.png"],
    [0, "Kiki Ajimi", "CV: Ueda Reina", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "http://imas.mew151.net/idol_sorter/Ajimi-S2.png"],
];

var sidem_data = [
    [0,"Asselin BB II","CV: Furukawa Makoto", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-AsselinBBIIN1a.jpg"],
    [0,"Kabuto Daigo","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-DaigoKabutoRare1.jpg"],
    [0,"Akiyama Hayato","CV: Chiba Shouya", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-HayatoAkiyamaN1.jpg"],
    [0,"Michiru Enjoji","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-MichiruEnjojiN1.jpg"],
    [0,"Watanabe Minori","CV: Takatsuka Tomohito", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-MinoriWatanabeN1a.jpg"],
    [0,"Kizaki Ren","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-RenKizakiN1a.jpg"],
    [0,"Kimura Ryu","CV: Hama Kento", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-RyuKimuraR1.png"],
    [0,"Mizushima Saki","CV: Kobayashi Daiki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-SakiMizushimaN1.jpg"],
    [0,"Iseya Shiki","CV: Nogami Shou", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-ShikiIseyaR1.jpg"],
    [0,"Tachibana Shiro","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-ShiroTachibanaN1.jpg"],
    [0,"Akai Suzaku","CV: Masuyama Takeaki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-SuzakiAkaiN1.jpg"],
    [0,"Taiga Takeru","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-TakeruTaigaN1.jpg"],
    [0,"Tendo Teru","CV: Nakamura Shuugo", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-TeruTendoR1.jpg"],
    [0,"Amagase Touma","CV: Terashima Takuma", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-L_53021c019bcd8.jpg"],
    [0,"Kurono Genbu","CV: Fukamachi Toshinari", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-GenbuKuronoN1.jpg"],
    [0,"Akuno Hideo","CV: Kumagai Kentaro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-HideoAkunoR1.png"],
    [0,"Ijuuin Hokuto","CV: Kanbara Daichi", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-HokutoIjuinR+1.jpg"],
    [0,"Yamashita Jiro","CV: Nakajima Yoshiki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-JiroYamashitaN1.jpg"],
    [0,"Fuyumi Jun","CV: Nagatsuka Takuma", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-JunFuyumiR1.jpg"],
    [0,"Sakuraba Kaoru","CV: Uchida Yuuma", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KaoruSakurabaR1a.jpg"],
    [0,"Tsukumo Kazuki","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KazukiTsukumoR1.jpg"],
    [0,"Nekoyanagi Kirio","CV: Yamashita Daiki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KirioNekoyanagiR1.png"],
    [0,"Takajo Kyoji","CV: Umehara Yuichiro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KyojiTakajoN1a.jpg"],
    [0,"Aoi Kyosuke","CV: Yamaya Yoshitaka", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KyosukeAoiN1.jpg"],
    [0,"Hazama Michio","CV: Itou Kento", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-MichioHazamaN1.jpg"],
    [0,"Okamura Nao","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-NaoOkamuraN1.jpg"],
    [0,"Sakaki Natsuki","CV: Watanabe Hiroshi", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-NatsukiSakakiR1.jpg"],
    [0,"Kagura Rei","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-ReiKaguraN1.jpg"],
    [0,"Shinonome Soichiro","CV: Amasaki Kouhei", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-SoichiroShinonomeN1.jpg"],
    [0,"Wakazato Haruna","CV: Shirai Yuusuke", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-HarunaWakazatoR1.jpg"],
    [0,"Himeno Kanon","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KanonHimenoN1.jpg"],
    [0,"Tsuzuki Kei","", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-KeiTsuzukiN1a.jpg"],
    [0,"Kiyosumi Kuro","CV: Nakada Yuya", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-Kuro_Kiyosumi.png"],
    [0,"Uzuki Makio","CV: Kodama Takuya", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-MakioUzukiN1.jpg"],
    [0,"Pierre","CV: Horie Shun", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-PierreN1.jpg"],
    [0,"Maita Rui","CV: Enoki Junya", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-RuiMaitaN1a.jpg"],
    [0,"Akizuki Ryo","CV: Sanpei Yuko", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-RyoAkizukiR1.jpg"], //Ryo... what have they done to you?!
    [0,"Shingen Seiji","CV: Masumoto Takuya", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-SeijiShingenR1a.png"],
    [0,"Hanamura Shoma","CV: Balletta Yutaka", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-ShomaHanamuraR1.jpg"],
    [0,"Mitarai Shouta","CV: Matsuoka﻿ Yoshitsugu", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-ShoutaMitaraiN1.jpg"],
    [0,"Kashiwagi Tsubasa","CV: Yashiro Taku", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-TsubasaKashiwagiR1.jpg"],
    [0,"Kamiya Yukihiro","CV: Karino Shou", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-YukihiroKamiyaR1.jpg"],
    [0,"Aoi Yusuke","CV: Kikuchi Takeru", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "http://imas.mew151.net/idol_sorter/320px-YusukeAoiR3.jpg"],
];


(function() {
  str_ImgPath = ""; //Allow absolute image paths
  ary_TitleData.push("Pripara S1+S2 (12)");
  ary_TitleData.push("Side M (43)");
  for(var i = 0; i < ary_CharacterData.length; i++) {
    ary_CharacterData[i][4] = "aidoru/"+ary_CharacterData[i][4]; //Set the other relative image paths back to normal, since we erased the str_ImgPath
  }
  for(var i = 0; i < pripara_data.length; i++) {
    ary_CharacterData.push(pripara_data[i]); //Push all of our added data
  }
  for(var i = 0; i < sidem_data.length; i++) {
    ary_CharacterData.push(sidem_data[i]); //Push all of our added data
  }

  var tbl_Select = gID('optTable');
  tbl_Select.innerHTML = ""; //Reset the options table and reload it with the new data.
  startup();
})();
