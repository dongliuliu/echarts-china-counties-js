(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('潢川县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411526","properties":{"name":"潢川县","cp":[115.051908,32.131522],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABC@E@A@@AA@A@@@@AA@@@@@A@@@@@@B@@ABA@AB@@A@@@AB@BA@@@@B@BA@BD@@AB@BCDABC@@B@@CFADAD@BC@AB@B@BA@@@A@@@@BADAFAB@B@@@B@@@BABABA@C@C@@@A@@B@@ABABA@@B@B@@@B@B@@@BA@ABA@A@C@@@A@@B@D@@A@@B@BAD@@@B@@@BA@A@ACA@@@@@BF@@@@@@AB@B@BA@@@C@AAA@@@@AACAAAA@AAAA@AACAA@@A@@E@AAC@A@@@EFABABA@AB@@AD@@C@A@A@@@A@A@@@A@@AA@@@A@@B@@AB@BADA@@@A@A@A@ABAB@@A@A@AB@@CB@B@@@@A@@BCBAB@@@@@D@@ABA@AB@@@BA@@D@@A@@BAB@BABAB@@@@A@@AA@A@A@@@AB@@@@@B@@A@A@@@@@@BB@@@@@@@@@AB@@@@@@@A@@@@A@@@@BA@@@@BB@@@@B@@B@@@A@AB@@A@@AA@@@@BA@@@A@@@ABA@BB@@@BB@@B@@ADB@@B@@@@@@CB@@@@@B@D@@@B@D@B@DBB@BBH@F@BBDBBBBBBB@@B@D@D@BBB@BB@BB@@@B@B@B@@@BBB@BDD@@A@AACD@@A@AB@BA@A@A@@@CAE@@@A@@AABEA@@AB@BC@@B@B@@@@A@@@AAA@@@@@@BADBB@B@D@@@@DDB@D@@BB@BBBDB@@B@BAD@@A@AB@BAB@@@@CBEB@@A@@@@B@B@@B@@@@BA@@@@BBB@@B@D@BAD@J@B@H@B@@@B@BBBBB@@BBD@@@B@B@BAD@B@B@B@BAB@@CFCF@@@B@B@@BBBBDFDDDBDBDDB@@@BB@B@D@H@D@@A@@@A@@AE@A@A@A@@@EBAAABC@@AA@@@@@A@@A@@@@A@@@@@AA@@@A@@A@A@@B@@A@@A@@@AAB@@AAA@@@@A@@A@@@@@@B@@A@@AA@@@@@A@A@@B@@AB@AA@A@A@A@@@@A@@A@A@@@@B@@A@@@A@@@A@@AA@@A@@@@BB@@BA@AA@@@@@AA@@AB@@@BA@ABABA@@@@@@@A@@@A@AA@@@B@@A@BBA@@@@@A@@@@BB@@@@@A@@@@@@BA@@@@@A@@@A@@@@@@B@@@B@@@@AB@@AB@@A@@@A@@@ABA@@@@@AB@@@@A@@@@BBB@BAB@@A@@@@B@@@@@B@@@@B@@@@@@BA@@@A@@BA@@BB@B@@B@@@@@@@B@@@B@@AB@@A@C@@@@B@@A@@B@@@B@@@@@B@BA@@B@@A@A@@A@BAA@@@@@@@@A@@@AB@@@B@B@@A@@@A@@@@@AB@@@B@@A@@@AB@@@B@@@@A@@@@BABBB@@@@A@@@AB@@@B@BA@@@A@AB@@@@AB@@@@C@@@@@@B@@@@@B@B@B@B@@@B@B@@A@@@A@@BA@@B@@ADCD@DAB@BCF@@ABA@@B@B@@@B@B@@AB@@@@@B@@@@@B@@@@@@AB@@A@@@@BAA@B@@A@@B@@@@@@A@@@A@AA@B@@@@@B@@A@A@@@@BC@@@@B@@@B@@B@B@@@@@@B@@@B@B@BA@@@A@@BA@BBB@@@@B@@A@A@A@@B@@@@@@@BBBB@B@BB@@@B@BB@@@@@DB@@@@BB@@@B@@@BA@@@A@@@A@@B@@@BBB@@@@B@@@B@@@@@@@B@@BBD@@@@DB@@@B@BAF@@@@D@@BB@@@@BA@@B@@@@@BDB@@@@@@@B@@A@@@A@A@@@@B@@@BDB@BB@B@@@@@AB@BA@@@CA@@A@A@A@AB@B@@@B@@@BA@@@AA@@AB@@@@@B@@@@DBB@@@@B@@@@A@A@@@A@@B@@BBBBBB@@@B@@AB@@@@@B@@B@B@B@B@@@BB@@AB@@AB@@ABB@@@B@B@BAD@@AB@BBBA@@B@@B@@@B@@B@B@@@B@@@BA@@@AAA@A@@@A@@B@BB@BBB@@@DBB@D@@@@DDB@@@B@@@DABA@AB@B@@@BBB@@@@@D@D@@@BB@@@B@@CD@@@B@@B@B@B@@@@BB@D@@@DBB@B@B@DBB@D@BBD@@BB@@B@@@BA@A@@B@@@@@B@@BBBB@@@B@B@BB@@@DB@@BB@@@B@@BBBDBB@BFDBDBHBFBB@@BBB@B@BBB@BAB@HABADCDA@@B@BBFBB@FDFDB@BBBBFDB@@BBDBB@@BDDJBB@@BDBFB@BDFBDBNHFDB@DBDBB@BBBD@@@B@@@B@DAFABABCBA@EB@BA@@@@B@BB@BD@BBBDDBDBBB@@BD@B@D@B@B@LCD@B@PCDAF@B@D@D@BBB@BBDFJFFFDFBBBDBD@BBD@D@@BD@L@D@F@HADBB@B@@BBDBLDD@D@DBB@BBBBBBDFHLBDBB@B@F@B@B@BCD@DAB@B@@BB@B@@DBB@JBF@BAB@BAJGBABABC@CBCB@BA@AB@B@B@N@FBD@D@@@FAFAD@FCBAFCBAB@B@B@B@BBFBFDD@BBB@D@B@B@@ADAFEDEBABABCBCBA@C@CAA@CBA@ABA@@@@BAB@@@B@B@@BB@FFFDDBBBD@DBD@B@B@BA@@B@BAFCBABABABADCB@BAB@B@B@BBB@BBBBBB@B@B@B@@@BABABABED@B@B@B@BBD@BDDBBDBB@FBH@B@D@RCJADAD@B@B@D@DBB@B@BDDBNH@@@@B@@@BKBEBA@ABAB@BAFG@AC@BA@AB@B@B@B@@E@@DA@AB@BAB@@B@AD@@@B@D@@ABA@CB@@A@@@A@@BA@@@A@@@@@@AA@ABC@ABA@E@C@@@@@AAAA@@@@A@AA@@@@@@A@@@@BAB@@C@AA@AAAA@@@@@AA@@AA@@AA@@ABEC@@@@E@C@@@AA@@AA@@CD@@A@@@@@@@A@@@A@@@AA@@@@BA@@GAAAG@CA@@C@A@@B@@A@A@@H@@@@@@@@AA@@AB@@@@@BAB@@@@@AA@A@@@ABBBA@@@CB@@AD@BCAADK@A@@D@F@H@R@D@D@N@B@B@HBB@B@BA@@BCB@@ABABAD@DBD@B@NCB@FAD@AAEGAECIAEAG@ACE@EAA@CAE@E@K@@BA@ABABEBABE@A@C@EAG@A@ADG@@@A@@@C@A@@@@@A@@AAAAAA@@AA@@AA@@A@CA@@A@AAECAAA@@@A@@A@@@A@@@@@ABA@@AA@@BA@@@AACAAAGAC@AA@@@@@@@@A@@@A@@AC@@@@AA@A@@@@@AB@@A@@@@A@@@@AB@@AA@@@@AB@@@B@@@@@@ABA@@@@@A@AB@@@AA@@AC@@@A@@B@@@@@B@@@@@@AB@@A@@B@A@@A@@B@@@BB@@@A@@B@B@@@AA@@@@@AB@@@@B@@@@@@B@@@@A@@@@B@@A@@FBB@@@BAB@@@@ABA@A@@@AC@@@@AB@@@B@@@@A@@BAACB@@@@@@@@A@@I@@@@A@@B@@@@@@@@@@A@@@@@ABA@@@@A@@@@@@A@A@@@@BA@A@@@@@@C@@@@A@@BA@@@AAAA@@@@@@@@@@BB@@@AB@AAB@@@A@@@@@@@@@A@@@@A@@@@@@A@@@@@@B@@@@@@A@@B@@@@A@@@@A@@@@@@A@@B@@@@A@@@A@@@@@@B@@@@@B@@@@A@@@A@@@@@@B@@@@@@AB@@@@A@@@@B@@@B@@A@@@@@AA@@A@@B@@@B@@A@@@@@A@A@@@@@@B@@A@@@@@@@A@@B@@@@A@@@@@@A@@@@A@@@@@AB@@@@@@@@@@@@A@@B@@@@@B@@@@@@@BA@@@@@@AA@@@@@@@@@A@@B@AA@@B@@@@A@@A@@@@A@@@@BA@@@@@@@A@@BBB@@@@A@@@A@@@@B@@@@@@@@A@@@@@AAA@@@@@@@A@@BA@@@@@@@@@@B@@@A@@@@AA@@@@@AAB@@@@A@@@AA@@A@@@@@@@@@@A@@@@@AA@@@@@@A@@AB@@A@@A@@@BA@@@@@A@A@AA@@ABA@@@AAA@@A@@AB@BAE@CA@@@E@C@@C@CBC@EAADA@@BABAAA@@@C@CAA@@@AB@B@B@@C@A@C@@@AB@@A@@@A@@@CEAG@A@@CAAADACAAA@ACBA@C@@@@A@AA@@@@A@@A@A@@@@@@@AB@@C@C@A@@DA@@A@@@BC@@BB@D@@BABA@@@A@@@AA@AA@@@@A@A@@@@@A@@AACAECAAA@@@@AAA@@@A@@@A@@AA@@B@@A@@@@AA@@@@@A@@@@@@B@BB@@@@@A@A@@@C@A@@AB@@@AA@@@BA@@@A@A@AB@@@@@AA@@@@@A@@@A@@@AA@@@@A@@A@@@@A@@@@B@B@@@@AA@@@@@@@A@@@A@@@@@BA@@B@@@@@AA@@@@@@AA@@@A@@@@B@@@@@BABA@@@AA@@AA@@@A@@@BA@@@@@@@@A@@@A@@@@@@@AA@@@@@A@@AC@@A@BA@@@@A@@@@A@@@@@A@@@AA@A@CA@@@@BA@@@A@@@@AA@@B@@A@@A@AA@@@@@@B@@AA@A@@A@@@@@@B@@@B@@A@@@@@A@@B@@@A@@A@@@@@A@@@@@A@@@AA@A@@@@@B@@A@A@@B@@@@A@@B@@@@@@ABAA@@@@AA@@@@A@@@@A@@@A@@A@@B@@@B@@A@@@@@@BA@@@@@@BA@@@@BA@@@@@@AAA@@@@A@BC@@CACAA@@B@@A@@A@@@@@@A@@@@@AA@@@B@@@@AB@@@@@@AAA@@@AB@@@@A@@B@@@@A@@@@@@@A@@B@@@@@@AB@@@@A@@@@A@@AAB@BC@CAA@@@@A@@@@@A@AB@@AAABA@C@A@@@AAC@@@@A@A@C@@@@@@AAC@@A@@@@@@A@@B@@A@@@@BCB@DC@@BA@@BA@AD@B@BAB@DC@@@@@A@@A@@ACA@@AC@A@AA@@@A@A@A@@@@@A@@@@BA@@@@@A@@@AAA@AAA@@AA@@@AA@@AA@A@@@AA@A@@@@A@@AA@@AAC@C@@AAA@@@@@ACAAA@@@A@AAA@@A@G@A@@@@@AA@@AA@@A@@BA@@B@@A@@@C@@@@@@@@A@ACBA@@CAAAAEA@@A@@@@@AA@A@@@A@@@E@A@CB@@AB@@@@C@@FE@AB@@A@@@@AAA@@@CAA@ABA@A@A@A@GBA@CBC@A@@@@B@B@DA@AD@BA@@D@@@BA@ABA@@@CB@@A@@B@@A@@BA@@BA@BBB@@BFBABAACB@B@@BBA@B@@@DF@@@B@@@B@@DB@BC@@BA@@@ABA@@B@A@@A@AA@@@@AA@@@A@CA@@AA@A@A@@@@B@BAB@@A@@@@A@@A@A@ABC@A@A@@@AACAAAAAC@@BC@@BA@@@A@@@@@AB@@@B@@A@C@A@@@AAAC@@@@B@@@B@@@B@BAB@@@@A@@@A@@@@A@@A@@@@AA@BA@@@@@A@ABCB@@AC@@C@@@@AABAC@@@@A@CBA@@BA@@@ABA@@@@B@@BB@@@B@@@BA@ADA@B@@BB@@B@@AB@@AD@@@@@@CACA@@AACB@AA@@@@A@A@AAA@@@@CAA@AACB@@C@AAA@@AAE@@AC@@A@CAA@AA@A@@@A@A@A@@@AAC@@@A@C@A@@@@A@A@AA@A@@@A@AAAAA@@@A@@@AB@@@BAD@@@@@@AB@AA@@A@AAA@@AA@AACBA@AA@@AAA@A@A@@@@@@BAB@@ABCB@@A@"],"encodeOffsets":[[117890,32637]]}}],"UTF8Encoding":true});}));