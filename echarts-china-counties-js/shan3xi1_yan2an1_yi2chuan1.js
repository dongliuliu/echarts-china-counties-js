(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宜川县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610630","properties":{"name":"宜川县","cp":[110.168963,36.050178],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@BB@B@@@B@@B@@BBBLEAGOD"],["@@BBB@@@@@PD@CSA"],["@@@AA@AB@@AAA@@@@A@AA@@A@@@AE@@@A@AAA@A@AAA@A@@@AA@A@@@@A@@ABAA@BA@@CE@@@A@A@@@@A@AA@@A@A@@@@A@@CA@C@@A@AA@@AAAA@@@A@@A@@@A@AA@AC@A@AB@@A@A@@@ABA@AAA@@@ABA@AB@@@@AAABA@AAA@@@ACA@A@@BA@@@A@C@@@A@@@AA@@AD@@AB@@A@AAA@@BC@@@A@AB@@A@@A@@C@CBA@E@A@@@A@A@A@A@A@A@A@@@AB@@@BA@@BADA@AACBAB@BAA@@A@@AA@@AA@AA@@AB@@@@A@@@AB@@AAAAA@@AA@@@@B@@@B@@@BA@@AA@@@A@@A@@@BABB@B@DBBBD@@BB@@@BB@@D@@B@@@B@@@B@B@@@BAB@@@B@@@BAB@@@@@B@@@BABEBAB@@A@A@CB@@A@@BCB@B@@A@A@@B@BA@@@A@A@C@C@A@@BA@@@@@A@@@@BB@@B@@A@@B@BAB@@@BAB@@@@@B@@AB@@@@AB@@A@@@@BA@AB@@@@@BAB@@@@@@@B@@@B@@@BA@@BA@AB@@@B@@@BABC@@BA@@@AB@BA@@B@@@BABABA@@@A@@@ABA@AB@D@BABAB@BA@ABABC@@BA@AB@@@B@@@B@B@@@B@@@B@BAB@@@BA@@@EAA@ABA@AAA@A@A@@BA@@BA@@@A@A@@BA@@B@F@@E@A@AA@BCB@@@BAB@BBB@B@@@B@B@@ABAB@@@B@BBBAB@B@@@BDBB@BBB@@@@BAB@@@B@@BB@BBB@@@B@@@B@B@@@B@B@@ABCBAB@@AB@@@B@D@@@DB@@B@BBB@@@B@BBB@@@BAD@B@@@BBB@@@B@@BBBBB@BBBBB@BBB@@@BBBB@@@@D@BA@BB@BB@BB@BBBBB@@@B@@B@@BB@@@B@@@@@BB@B@BBAB@@AB@@@B@@BBBB@@@BA@@B@B@@@@@BAB@@BB@@@BD@@@@B@@@B@@A@AB@B@BA@@@ABA@E@ABABA@@BA@@AA@ABCDA@ADCB@BA@@@C@A@@BAB@@A@@@ABA@AA@@A@@@CAA@@BA@@@AA@@A@A@@@A@A@EA@@ABA@@@AA@@A@A@A@A@@@A@ABA@@@A@A@A@@@@B@B@@@@@BA@@BA@@@@@BBB@DBD@DB@B@@@B@BABA@EBA@AB@@@BAB@B@@@BB@@@B@@BB@@B@@@@@@C@CBA@A@A@@@EB@@A@A@A@A@ED@@ADCD@@CD@@@B@B@@@@@B@BBB@@BB@BBBBD@@BD@@@@@@ABC@@@A@AA@AA@@@AAAB@AABCA@@AB@@@AA@@@A@A@@AA@@@A@@@@@A@@A@BA@@BA@A@@B@@@BAB@@@BAB@@@@@B@D@B@@CB@BA@@DBB@BDF@@@F@BBF@@@@ABA@@BA@@B@D@B@@BD@D@DBBBBBB@BB@@@@@@BAB@DAB@BAB@F@D@F@@AB@@CB@@@B@BAB@@C@EBABA@AB@BC@@@A@EACBA@EBCBA@A@ABA@@@A@CBAD@@A@@BA@ABA@@B@@ABAB@@AB@@@B@B@@AB@BA@AB@@@B@B@@AD@@CB@@A@A@AA@@A@@@GB@@@B@@@B@@@B@B@D@B@@@@@BA@A@A@A@AACBC@A@BB@D@@BB@@@B@BA@@B@@A@A@A@@@ABA@ABAA@@@AA@A@AA@@@@ABABC@CBABCB@AA@@A@AA@@@@@AB@@A@A@A@AB@BA@A@AAAB@B@@@@A@@@A@@@A@AB@@@@@@AAAA@@AA@A@@@@@A@EA@@A@@@@@AA@@@@A@@CC@@A@C@@@A@@A@AA@@AB@@@AA@BC@@@AB@AA@A@@@AB@B@@A@A@@@AB@B@@@@A@AB@BABA@@@@@@@AA@@A@@@A@@AA@A@A@A@@@@AAAA@@@C@@@AB@B@@A@@@A@@A@@ACA@@AABC@CBABAB@@C@@@A@A@AD@B@BA@AA@@@@@@A@@AABC@@@@BA@@BA@@A@@@AAA@A@C@CCC@CA@A@@@A@@@E@@A@@@A@C@ACA@@A@@@ABA@A@A@@@@@ABA@@@AAA@A@@BAB@@@@A@@@@A@AA@AC@AA@@@AB@BABA@A@C@AAA@@BCB@B@@A@@@A@@@A@@B@AA@@AAA@A@@AA@@@AA@BAAA@A@@A@C@@@A@ABCBAB@@@@ACAA@@A@A@A@@@AB@BAB@@ABC@A@@BA@AB@@@AA@@C@@A@@@AA@@AA@@A@A@@@@AAC@ABA@@A@A@@AA@@@A@CBEBCBA@@@BAAA@AA@@C@AA@C@A@CB@B@BA@@BAD@@A@@@AAAA@@@BABAB@@ABA@@BA@@@@AAA@@A@CD@@@@@@AB@@AB@B@@@B@@AB@@AAAAA@A@AB@BAB@@@AA@@@AB@@AB@@CBA@ABA@@@C@AB@@A@BA@AAC@@@A@@@@@AA@AAAA@@AA@AAAA@@@A@@A@@@AAC@@BAAA@AA@@@CB@@ABA@@BA@@BA@AA@@AB@@@B@@C@A@@@@@A@@@A@CB@BC@@BAB@@AB@@@@A@AAA@AB@B@B@B@@@B@@B@@B@B@@A@@BA@@B@@@@@@AB@DABADAB@B@@@B@@A@@@AA@@@@AB@D@@@BA@@@AAA@A@AA@@A@@BAB@@@B@BAB@@@@C@A@A@@@ABA@@B@B@@@BAB@D@@@B@@A@C@@@ABA@@@ABA@AB@@AAA@@AAB@@AB@@A@AD@B@@BB@@@@@@@@A@A@AB@@A@@B@@A@@@@BAAAB@@A@A@@@AB@@@@BB@BAB@@@@A@AA@@A@@@@@AB@D@@A@AB@@C@AB@@@BCBA@@B@BAD@@BDAB@@@@A@@@AB@@@@BB@BBB@@@BABAB@@AB@@AB@@@DAB@@A@AB@@@B@@@D@@@DB@@@ADBB@BBB@D@B@B@D@B@B@BA@AB@B@@@BBD@BB@@BBB@@@BB@A@B@BBBB@BAB@B@@@B@B@@@B@B@B@B@D@@@B@B@@@B@@@D@B@@@B@@@B@B@DA@@B@@A@B@@@@B@B@@B@@B@@BB@B@@BB@@BDB@BBBB@@@@BAB@BBB@@@@BBD@@@B@BBDAB@@B@@B@@@@B@@D@@@BBBBB@@@@@B@@BBBB@@@F@@A@ABA@@@@B@BABAB@B@D@BA@AB@BCBAD@BCBA@@B@B@BAB@@@@BBB@@DBB@B@B@@B@B@B@DABCB@@BB@@@@BBDBB@B@@@BB@@@BBBBBBBBBBBD@@DA@@@@BBB@@@BA@@BAB@@BB@@@B@BABCBA@@B@B@@@BAB@@@@@BBBB@@BBD@B@D@@AB@@@BA@AB@@@D@BB@@DA@@@A@AB@@@BA@@@A@@@A@@@AB@BAD@@ABA@@BB@@@@DAB@BA@@B@@@BABAD@@@B@@@BB@@BAB@@AB@D@F@D@B@@BB@@D@BB@BB@@B@DB@@@A@@BABA@@BBB@BADAB@@FBB@B@BBB@@@B@B@BBF@D@B@@B@B@@BB@@ABABA@@BB@@BDBB@@B@B@B@@@DAB@B@B@@@B@@BB@@@B@@@B@BBBBB@B@@@B@B@BB@@@D@@AB@B@B@B@B@@B@B@B@F@@@BABA@@B@@BB@B@@@@@B@@BB@BD@@@B@@B@@@@@DDBBBB@@@@BC@ABADCB@BA@@@@BB@BBBB@@@BBBA@@@@BBBBB@DBB@F@BB@@@@BD@@@@@BD@BBB@@@B@B@@@B@@B@@B@@AB@BA@@DBB@DAB@@@D@BBBB@@DAB@@@B@@@BB@BDBB@BB@@B@BBDBBB@BBBBB@@B@B@@BD@D@B@@@@D@BDB@DB@@BB@BB@@@@@BB@B@DA@@B@@@@@BB@@@D@B@@B@B@@@@@DF@@@B@B@BBB@@BB@@@@@@BABA@AD@@@BBB@@@B@BAB@B@B@BBB@B@@@D@B@DADABA@ABA@AB@D@DAB@B@@@@BBB@B@@@B@@D@BB@@B@B@@@@@B@@ADA@@@C@@B@@AB@@A@@B@B@BADA@AB@@ABC@A@AB@@AB@@@BB@@BBB@B@B@B@BABA@@B@B@@@@@BB@@@@BA@AB@@A@@@A@ABAB@@@@@B@B@B@@@@BBB@BBB@FBBDD@BBBB@DA@@BA@ABAB@B@BBBB@@@@@@@@@A@@BA@@@@@@F@B@F@@@B@@BBB@BBBBB@@@B@BA@AB@B@BB@B@@@B@@AB@B@B@@B@D@B@BAD@@@B@@BBB@BBDB@BDDBBB@@@B@@@@B@B@@@@B@@@B@BBF@@B@@@BB@@@DB@@BADEBABAB@B@B@BBB@BB@@BB@D@B@@@B@@@@@B@B@@@@@B@@@@B@@BB@@@BBB@B@ABB@@B@@B@@@BBBBDB@@BB@@@@BB@@BB@B@@@@@BB@@@BB@@@@BBB@BB@A@ABA@CBC@@@AB@BBD@BBBB@@@B@D@B@BAB@B@@@B@@A@@B@BD@@B@@AB@@@B@B@@@@BBB@@B@@@B@@B@B@@B@@BB@@B@@@D@@@B@@@@B@B@@BB@@D@@@@@BB@@@BB@@@B@@B@@AB@BCBAB@@@D@B@BAB@BBB@B@@ABABA@@@@@AB@@BB@@@BAB@@@B@@@@@B@BB@@@@B@B@@@B@B@B@B@@@B@@@D@@@@@BDA@@DA@@@A@C@A@ABA@@@@@A@@BA@A@@B@@@BBDB@@BB@@@BAB@BA@@B@BA@AB@@B@@BA@@@@BA@@B@@@BBB@B@@@@@B@B@B@@@@@B@@@B@B@@@@@B@@AB@@@@@B@B@@A@@B@@@B@B@@@@@BAB@@@B@@@D@@ABB@ABBB@B@B@BBB@BBBB@BBB@@@B@B@@B@@B@@B@@@A@BB@B@B@@B@@@B@@@B@@B@BB@@BA@@@@D@@@B@@@@@@@B@BB@@BB@DPC@E@@B@F@B@@BBJBH@BA@@@A@EEAAKFA@BB@@@B@@@@@@@BA@A@A@A@@@@BB@@@@BB@BB@B@@TBDEBA@@B@BDBD@@EFABCDA@@A@@BEOCAD@@B@@@@@B@@@@@B@@@@@AD@@A@@@@@@@@A@@AAA@@B@@@@@@B@@@@@@@B@ABA@@BA@@B@B@@@@A@@@A@@B@@@A@@A@@@@@@B@@@B@@B@@@@B@@@@@B@@@B@@BB@@BB@@@@BB@@@@@B@@BB@@B@@B@@B@@@B@@@B@@@B@FAB@D@@@B@@@B@@@BB@@BA@ABC@@@@DBBBB@@BBBBB@@BB@@B@BB@@BBB@DA@@BAA@@@@@@ABA@@@@@A@@BA@A@@BC@AB@@AB@A@DA@A@@@@BC@ABA@ABAAG@A@@B@@@@@@@@AAA@@@A@@@ABA@@BC@ABCB@@A@@@@BABAB@@AA@@@BABA@@BABABAB@B@BA@@DA@ABA@A@@BA@@BC@ABABC@@D@B@BABA@@@@B@@@B@@@B@B@B@B@@@@@@BB@@@@BD@@@B@@@BAB@@@@@B@B@@@BA@@@@@@BA@AB@B@@@BA@@@@@A@@BA@@B@@@@A@@B@B@@ABABAB@@A@@B@BBB@BBBB@@@@B@B@@@BA@@@AB@@@B@@@@@@@@@B@@@B@@@@AB@B@@BD@@BB@@@BABAFA@@D@B@@B@@B@@@@@A@AB@@BBA@@B@B@@@@@B@@@B@@@@B@@A@@@@B@B@@@B@BABABA@@B@@@@@B@BBBAB@BB@@BAD@B@@@BAB@@ABBB@B@F@@@BB@@A@BB@B@@B@@@@A@BB@DBB@D@BA@@B@BA@@@AB@@@@@D@BABABA@AB@@A@@@AB@@@B@B@B@@@DADABA@@DAB@B@DAB@DABABADA@@B@BB@@BAD@BA@@@@BA@@B@@AD@@@B@@@B@B@@A@@BA@ABAA@@ABA@@@@B@@@DABAB@BABA@@B@B@BA@@@@DA@@B@BA@@B@@@BB@@@BB@BA@@@AB@@ABA@C@@@@@AB@@@BA@A@@BABA@@@A@@DADA@AB@@A@@B@@@@B@@B@B@B@@@@AB@@@D@B@@@B@BAB@BA@@@A@A@@BAB@BAB@BAB@@B@@@@B@BBB@@@BA@@BC@@@@BA@C@@BAB@@@BA@@B@B@@@@@@@@AB@BAB@@ABA@@@AA@@AB@@@B@@@@@BAB@@AB@@@@@B@@@@A@@BA@B@@B@@B@@@BBBB@BB@@BB@@@@@B@BB@@BB@@@@@B@B@B@@@B@B@B@B@BBBA@@B@B@@@@@@B@@BA@@@BB@B@@@B@B@@BB@@AB@BA@@BB@@BB@@@@DA@@@@B@@B@@@BBBB@@@B@@@@AB@@@@AB@@@B@@@@B@@@@@B@BBB@@@@@@BAB@@@@@@B@@@@BBB@@@@B@D@@@@@@B@@ABA@@B@@@BBB@@@B@B@BA@@B@B@B@DB@@@AB@@@B@@@@BBB@@BB@@@@@@@B@@@@B@@@B@B@@@B@@@B@@@B@@AB@D@@@B@B@@B@@@@@@@B@@B@@@@AB@BA@@@@B@@@DB@BB@BAB@@@@AB@@@@@@B@@ABA@@@@@BBB@@B@@@@B@@ABA@@@@BB@@B@@AB@B@@AD@@@@@@A@@B@@@@@AA@@@A@@@@B@B@BB@@BB@@A@@@@DB@@@@@B@BAB@@@BB@A@@@AB@@@@@@@BD@@B@@@B@@A@@@A@@@@B@B@@@@@@@BADEBADEDEBC@EAI@E@EDI@GCGAI@@EICCGICE@@MMCECI@GBGFEFI@G@A@GCIIOEMCIAKBG@A@ABKBE@C@A@@@A@A@A@A@E@A@C@CBC@CBC@ABA@A@A@@BAAA@@@AB@BCBGBEBEBC@A@@DEDEFCHGBA@A@@@A@C@CBC@EAC@ACE@C@A@ABCBC@@BABEDCDCDABCBABEBEBCDCFGDIFK@EBEAEBEDK@ABEDCBE@CACGKCE@C@@BADGDEBEDADAJCFAHCDEBA@CAC@A@C@IAA@AAA@@AAAACAC@ECAAACACBIBCDIBCHGFEDEBEAE@CACACAC@C@CDG@E@E@CAA@IAECE@C@@@@@CDAFALAJAF@HBHDFBD@HAFADC@CAE@C@IAO@@A@@@A@A@@@AB@@@B@F@BBF@D@@ABA@@@A@AAC@@A@@@A@@@A@A@A@AA@AAA@E@C@AA@@AA@AA@@@A@A@CDAB@@A@@@AA@@@AB@@@B@@A@@AAAAACAC@AEC@@A@@@@@A@A@A@B@@B@@@@A@A@A@@@A@@AA@AA@A@@AA@@A@AAA@A@@@AAA@@@A@@@A@@BAB@@@@@@@AA@@A@@@@@A@@@@A@ABA@A@CAC@@A@@BABCBA@@CA@@A@@@@A@@BA@@@AA@@A@@@@CAA@@@@AAC@BAA@BAAC@@AA@@@ABA@@BA@@@CFAB@@@BA@@@@AA@@A@A@@AA@AA@AA@@A@@@C@@@@@A@@@@@A@@A@@@A@@@A@@@@A@@@@@@A@@@@@AC@@@A@A@A@@@AA@@A@A@A@A@A@@@@@A@A@@@A@C@C@@A@@BA@@@@C@AAA@@@CA@@A@@@A@A@@@AAAA@@@AA@@@A@A@@@@A@@A@@@@AA@@@AA@@@AA@@@C@@@AAA@@@A@A@@@EAC@A@@BA@@@CAA@C@A@@@A@@A@@AAAAA@@A@@AAA@@@@AA@@@A@@@AA@@BA@@@@@A@@@AA@@AAA@@BAAAAA@@BA@A@@AAA@A@A@AA@@A@AAA@@AA@@AC@A@@AA@ACCA@@C@@A@@@@@A@@@AA@AA@@AA@@@AAA@@@@@AA@@@AA@@@AA@CA@CA@@A@AA@@A@@@A@@@A@@@@B@@AA@@@@AAA@@@@A@AA@A@A@A@AA@@A@@B@@@@@@AA@B@AAA@@@AAA@@@@@@@A@A@A@AA@@A@AA@AA@@@AAA@@AA@@@@@A@@@A@E@A@@A@@CBA@A@@@@AA@A@AA@@A@@@ABA@@@@@AAA@A@A@A@CB@@A@A@CD@@ABA@@@A@@A@AAA@AA@@@@AA@A@@A@A@@A@@@AC@@BA@@AA@@A@@@AC@@A@A@@@CAAA@@A@C@"]],"encodeOffsets":[[[112753,37242]],[[112755,37254]],[[112961,36596]]]}}],"UTF8Encoding":true});}));