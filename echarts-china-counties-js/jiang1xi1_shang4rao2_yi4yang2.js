(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('弋阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"361126","properties":{"name":"弋阳县","cp":[117.449588,28.378044],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@AAAC@@@@@AACABAA@B@@ABA@A@A@@@A@@B@@BB@@@BB@@B@B@@@BB@BB@@B@C@@@CB@@A@A@A@A@@@@@@B@@A@@BA@@@B@B@D@AB@B@@C@@BAAABC@@B@@A@@@AB@D@@@@@B@B@@@@A@@@A@@@@@@@@@@A@@A@@@B@@@@@A@A@@@A@@@@@AB@@@AA@@B@@AAEG@@AA@@A@CA@@A@@@AA@@AAA@@@A@@@@@AB@@AB@@@B@BC@A@@@AAA@@@A@A@BA@@@C@@@@CBG@A@A@@@@@@BABBB@BBA@@BB@@@B@B@@@@@BA@@@@@@BABAB@@@B@@BB@@BB@@@BA@@@@@A@B@@B@@@@@BB@@B@@A@A@@A@@C@@BA@@@@@@B@@ABA@@B@@B@CB@AA@@@A@A@A@A@@@A@@@A@AAAA@@A@@@A@@@AB@@@BA@@B@@A@A@A@AB@@AAA@AA@@AB@@A@@@A@AAA@@@@A@@@@A@AA@AA@A@@@@@AB@@@@@BA@@@A@@@@@@@CA@BA@@@A@@B@@@@BBBBA@ABA@C@@@A@A@@A@@@@A@@B@@@@C@A@@@A@A@@@@B@BAB@@@@@B@@@BB@BD@B@@@@@@@BAB@@AB@@@@A@@BBB@BBB@@@@@B@@B@@BB@B@B@@BBD@@B@@BB@B@@@B@BAB@@@BB@@B@@B@@@B@@BB@@@@AB@BA@@B@@@@@BA@A@@BAB@@@@AB@@@B@BAB@@@AA@A@ABA@AA@BB@@B@@BDB@@@ADB@@BAB@@AB@@@@BB@@@BB@DBB@@@B@@BA@@B@@B@@BB@@@@@AB@B@AAB@BB@@@@B@@BBB@@@CB@@@B@B@BBB@B@@@BA@@B@@BB@@@B@@@@BB@@BB@BA@AD@B@B@@@BBB@@ABBBBB@@@BB@@B@@@@@BB@@A@@B@BDB@@@@@@A@@B@B@B@@@B@B@B@@BA@@B@@B@D@@B@B@@@BA@@@@B@B@@@BBD@BBB@@D@@@B@B@@B@@@B@B@@@B@@@B@D@@@BA@AB@@A@@BB@@@@B@@CDE@AB@@BB@@ABA@@@ABAB@B@B@@@B@D@@@B@@B@BB@@@@@BA@A@@BA@@B@@AB@DA@A@ABABA@@BB@@BD@@@@@BB@B@@A@@@ABA@AAA@@B@@@@AB@B@@A@A@@@CAA@A@@@ABC@C@C@AAA@AAA@@@AB@@@B@@@BDD@@@@@B@@E@A@@AAAAAAB@@@@@B@BDH@B@D@DAFAD@DAHABAF@@@B@B@B@@BB@@BBB@@@J@@AHAB@B@LAB@D@D@BBB@BBDD@B@D@DAJ@B@FBD@D@B@@BBB@@BB@DBFDB@B@HDBBBBFFBBLBD@DB@@B@DBF@DBD@B@@@@B@D@@ADA@@BB@@B@@@@A@@A@@@@ABA@@BB@B@@@@B@@@@AA@@A@@@AB@B@@BBBB@B@B@@@BB@@@B@@B@B@BB@BB@B@@ADAD@@@BB@A@@B@@@B@DBB@B@@BB@@@B@@A@@B@@ABB@D@@BAB@@@@BA@@@@B@@B@@@B@@@@@@@@ADAB@@BB@@ABAB@@ABA@@@@@@@@BAAC@AB@@AB@B@@ABA@@@A@AA@B@@@D@B@@@@@@AA@@AAAA@@@@ABAB@B@@A@@@@@@@@@@@@BB@@@@BB@@@@@A@A@@B@@B@FB@@@BB@@@A@@B@@@@A@@@@@AA@BBB@@BB@@B@ADBD@DB@@@B@@@@@@BB@@B@@@D@D@B@B@@@B@@B@@@@B@@@B@@@@B@@@B@@@AA@@@@@A@@BB@AB@@@BB@@@@B@B@@@B@@@@BA@@B@B@@@B@@@BB@BBBB@@BB@@@@BB@AB@BB@@@BAAAB@@@B@@@@@@B@@@@@AD@B@@@@@B@@@B@@@B@@@B@B@B@B@@@@@@@@BC@A@A@A@@@@BB@@@B@D@@@@@@AB@@B@@@B@@@B@@@@BA@@B@@DA@@@@@BAB@B@@A@@@@@@BAB@@BB@@@D@@ABED@@A@ABA@@@A@BA@@@@BABA@@@@A@@@@@@@AB@@@A@@@AA@@@@@@D@@@@@@A@@@@@A@@@@@@B@@@@@B@@@@@@@@@B@@@BAB@@AB@B@D@@@@@@B@@A@@BB@@@B@B@@BA@@B@@@D@B@B@@@@D@@@BCB@BA@@@A@@@BB@B@@B@@@B@A@@@@@@@@@A@@@@B@BB@BA@@B@@@@BAB@@@DADB@@BB@BB@@@@A@CBA@@@AB@@A@AB@@@B@B@@AB@@@D@@ABB@@@B@B@@B@@A@@BA@A@@@@@@@A@A@@@@ACB@@@@@B@@@BBA@@@B@@@B@@A@A@@@@@B@@@@B@@@@@@@@B@@B@@@B@@@@@@FA@@AA@@B@@A@@B@@@B@@@@@@B@@A@@@A@@@@@B@@@BB@@@AB@@@@BA@B@@@@@@@@BA@A@ABA@@@@@@BB@BB@@@@@@@@AA@@@@@@BA@@@@BB@@@@@@@B@@@BA@A@@@@B@@@B@@@BA@A@@@B@@@BB@@@@@@A@A@@@AB@@@@@B@@AB@@@BA@@@@BB@B@@@@AB@@A@B@BAB@BAD@@AB@@@@@B@@@@@B@@AB@@@@@B@B@B@@@@B@@@@B@BBD@@ABBB@@@@ABA@AB@@AB@@ABA@A@@BAB@B@BADABB@@@DD@B@@B@@BB@@@@A@@@A@@A@@@A@@@@AB@B@@@DDDB@@AB@@@@AA@@@B@@A@@@@B@B@@CBEBABABA@AA@@@@A@@BBBBBB@@BA@@B@@C@@@@BA@@@A@@@A@BB@@AB@@@B@@BB@@@D@B@@A@GB@@AB@BABAB@@@B@B@D@B@B@@AB@B@@@BABA@@B@B@@@@A@A@@@ABA@A@EBA@@BAB@@@B@B@@@BA@@B@@@BBBBB@@AFAB@BAB@@CF@B@@BB@@AB@B@B@@@D@B@B@@BB@@@BAB@@A@A@EBC@@@A@A@@@A@A@@@@@@B@@AB@@@B@@AD@BABA@@BA@AB@@E@A@@@A@GB@@A@A@@@A@@@A@@B@B@@@B@B@@ABCBA@@@ABCD@BA@BBBBB@@BB@@B@@AAA@@@C@AB@@@B@BAB@@AB@@BB@@@B@B@BAB@B@@@BAB@@A@@B@@@@BB@@B@@D@B@F@@@@@B@B@D@@BDA@@@@B@B@@BA@@DB@@B@B@@@BABAB@D@@@D@BBB@@@@B@BA@@BA@@@A@A@@@@B@@A@AB@B@B@B@@@BABABABABAB@@A@AAA@A@@@@@A@AB@@@@A@AAA@ABA@@@A@@@ABA@@AC@@@@BA@@B@B@@AB@B@B@@@B@@@BB@@B@@B@@@B@@@B@B@BBBB@@B@@AB@@@B@@AD@@A@B@@@BABBB@B@B@BB@BB@B@@BB@@A@A@@@A@@@A@A@@@A@@@BB@B@B@@A@@@@@AAA@AA@@@@A@@@A@@@@@@BAB@@@BA@@@A@@@@B@@@B@B@@BB@@@ABC@@B@@@@@@@@@B@@@B@BABB@B@BB@@B@@AB@@CBA@B@@B@B@@@BB@@B@@B@@@@@B@@@@BB@@@AB@@BBB@B@BBB@@@@AB@B@@@B@@ABB@@@@@@B@@@B@BAB@@@BC@@@A@@@A@A@@@@@AB@@BB@@@@@B@BBB@D@D@@@D@@@@DA@@@@B@BB@B@@AB@@@B@B@@BB@DB@@A@@@@D@B@@@B@BAB@D@@CBA@AB@@@B@BA@AF@@@@@BA@A@@@CBB@D@BB@@BA@@B@DDDBBB@BBB@@@BFB@@BA@A@@BA@@B@BA@@BBDAB@B@@B@@@DBB@B@@@D@B@@@B@@FD@@@BBB@@BBDBDBBB@@FA@@BB@@DBBBBB@@F@BA@B@BB@BBB@@B@@BB@B@BB@BD@B@B@BBDDF@@@B@B@@B@B@@@B@BA@@FBF@B@@@D@BB@@BBA@BB@@D@D@@@@@B@@@BB@B@BBB@BA@BB@@@BB@@BDDB@B@B@B@@@@@AA@@BA@@DAB@B@@@BB@@@B@D@@@@B@D@D@D@D@D@DD@@BCBAB@BA@@@@@ABA@@BAB@FCB@FABBB@B@@@BAB@@@B@BB@@DDB@@BA@@B@D@@@@BBB@B@B@@@B@BABA@@B@@@DB@@DDB@@B@B@BAB@D@@@B@B@@@@BB@AB@@@@@B@@BFBD@B@D@@@D@DAB@@@@@B@@@@@@@@A@@@A@@@@@AB@@@@@B@@@@AB@AA@@@@@@@A@@AA@@A@@A@A@A@@@A@@@@@AA@@@A@@A@@@@@A@AAA@@@@B@@@@@B@B@@@@@BC@@@ABA@@A@AA@@@@BA@@@@AA@@@A@@AACC@AA@@@@@AA@@ACA@@A@@AA@@B@DABA@ABC@@@A@A@@@A@@@A@AB@BAAA@A@A@CAA@AA@AACC@A@@@AA@AA@@AA@AAA@@CE@@A@@@@@AA@@A@@A@@D@@@BA@@BA@@FCBA@@BAB@@@B@BADBB@@@BA@@@@BB@@B@BAB@BA@@@ADA@@@A@A@@@AB@BAB@B@@ABA@ABA@AAAB@@A@ABA@@B@@A@@A@@AA@A@@@@A@@A@@@@A@@BA@@@A@ABA@@@A@@B@@@@A@A@A@@@C@@@AB@@A@@BAB@BCB@@AAA@@B@B@BA@@@A@@FG@AB@BABAB@@AB@D@BAD@@AD@@AB@@AA@A@@@@A@@@A@A@A@@@A@A@ABA@@@CBA@AB@@A@@B@@@@AB@@AB@BA@A@@BA@A@@BA@ABA@A@@BA@@@@@C@@B@@BDA@A@@BBB@@@@@B@@BB@B@B@B@@@B@@AB@@BBB@@B@B@F@B@@@B@BBB@@ADAB@BABBBA@BB@DBBBB@B@@B@@@@DB@@D@@BB@BB@BB@@BB@@BD@@@@@B@B@@BB@BB@BB@DD@BDA@@@@BBBB@B@@B@B@@BB@@@B@@@B@B@@AD@@@@AB@@AD@@@@@DB@@BA@@B@@@B@B@@@B@@@BB@@B@B@@B@@DBB@BBB@@BB@@@B@B@@@@@B@BDB@@@@@B@AB@@BDBB@@@@B@B@B@@@B@@@@BBBBB@@@@@B@@@B@@@BB@@@BBB@@@B@@B@@B@D@@@BB@BB@@@DD@@@@@@B@@@@@BB@BB@@@D@BCB@@@@BB@@BDDBB@@@@B@@@@@BB@@@B@@B@@BBBBBBBBABAD@@@DBBA@@@@@A@A@A@@@AAA@@BABC@@B@@@B@B@BAB@BAB@BA@@B@BA@@DAB@@AB@@B@@@ABAB@BABA@A@@B@@B@@@@B@B@@@@@BA@@D@@@BAB@BA@@BA@A@@BADA@AD@B@BCBAB@BCB@B@@@B@BBB@@@@@B@@A@A@ABABCBAB@@@@A@AAA@A@@D@@@B@@AB@B@F@@A@@@A@@A@@AA@AAAA@@@A@AAAAA@A@C@A@@@A@AB@B@B@@@B@@A@@D@@@C@AACA@@AAB@@@@@BA@@AA@@BC@A@@BA@ABA@@@AB@AAAAC@@@@A@@A@@@A@@AA@ABA@@@@@AAA@AA@A@A@@AA@AA@@@@AAA@AAA@@@@AA@@@@@A@@@AAA@A@@@@C@@@@@AAA@@BA@@@A@@@ACA@A@@AA@ABA@@@AA@@@@BA@@B@BA@@@@@AA@AAAAAC@@@A@@@A@@B@BC@@BC@ABA@@@A@@B@@A@@@A@@A@@A@@AA@A@A@@@ABAB@@@@AAA@A@@@@AA@@@A@@A@@@AAA@@A@@AA@@A@@@CAAA@@@@AA@@@AAAA@AAA@@AAA@@@@C@A@A@@A@@A@AB@@ABAB@@A@@@@AA@@@A@@@@ACAAA@@CAA@A@C@@@@@@@A@A@AAA@AA@@AAA@A@C@@AAACA@@@@@A@AA@A@@@@A@@AA@C@A@@@@BA@B@@@@@B@AB@@@AAB@A@AA@A@@AA@AA@@@@@@AA@@@@@BCAABA@@A@@@A@AA@@@@@@@@AA@@C@A@@BC@A@@@@@@A@A@@@@@AA@AA@@A@A@@@@@@@@B@BAB@@AA@@@@A@@@@B@BAB@@@@A@@@@A@@A@@@A@AAAC@@AA@@A@A@@@@@A@AAA@@@A@@@ABA@@BA@AB@@@@AAAA@A@A@@@A@C@AA@@A@A@@@@AA@A@A@@@@@A@@B@@ABAB@B@@ABAB@@@BA@A@A@@DAB@BA@A@@@AA@AAA@@@@@AAA@@@AC@@AA@A@@ACA@@@@A@@BC@AA@@A@@@@@A@C@@@@@@@A@@@@@@@@AA@@@@@AB@@@AA@@@@A@@AB@@@AA@@AA@@@@@@@ADC@@@ABAB@@A@ABABAB@@A@@@AB@@@B@B@BBB@B@@@B@B@BBBAB@@@B@@@@@AA@@@@BA@BBAB@@@@A@AB@@@B@@@DBB@BA@@B@@@C@AAAA@AA@@@AAA@@AA@AAAA@@AA@@@AA@A@@@@A@@@A@@@A@@@@A@@AA@@A@@EBEB@@@@@@A@@B@@@@@@AB@@A@A@@@A@A@AA@AA@A@@@@AA@@@@AA@@A@@@AA@A@AA@@AA@@C@@@AA@A@@@A@@AA@@@ACAA@@A@AAAAA@AA@@@@ADEBADADABADCDC@@@@B@B@B@@A@@BADC@@BABA@C@A@@@C@@@AAA@@@A@C@@@@@A@@B@D@@@@B@@@@HB@@@@@B@B@@@BB@@@@B@@@@@@@B@AB@D@@@BA@@B@@@B@@A@@@@BA@BBA@A@@@@@@@A@@@A@@@BB@@@@B@@@A@@@A@@B@@@B@BAB@B@B@B@B@@@BD@BB@@BBB@B@BB@D@B@BBBBB@B@@@B@BBB@@BBBB@DBBBB@@BB@@BD@B@BBB@B@@@BC@@@@AA@A@@@A@@@@BA@@@A@A@A@@A@@A@@@@@@B@@@@A@@A@@@@@B@@A@@@A@@A@AB@@@@@AD@@AA@B@@@@B@@B@@C@@@@@@A@AA@@B@@AB@@A@@B@@A@@@C@A@A@A@@A@@A@@@AA@@@@@@@@@@A@A@@@@@@@A@@A@@B@@@@@AAA@@@AB@@A@@@@CA@@@@@@@@B@@@@@@@@@@AB@@@B@@@@@@A@A@@@A@@AA@@@A@@@@@@@@A@@@@A@@@@@@B@@@@A@@A@@@@@@C@@B@D@@@BAB@@BB@@@@AB@@A@@@@@A@@B@@@@A@@@A@@@@@AA@@@@A@@@@B@@@HCD@@A@@AA@AAA@@@ABC@@B@@@@AB@@C@@@@@A@@@@@A@@BC@@AA@@A@AAA@@@@AAAC@AAA@@A@@@A@A@@@@@AB@@@@@@@A@@A@@@@@A@A@@@AA@@@@@AAB@@@B@@A@@B@@@@@@B@B@@@@@@@@@@B@@A@@@@@A@@B@B@BAB@@BA@@BA@A@@B@@@@BA@@B@@B@@@@@@BB@B@@@@B@@@B@@@AA@@BA@@@A@@@ACA@A@@BA@A@@A@@@A@AA@@A@@E@AAA@A@@BA@@@@@AA@AAAAABA@@@A@@@@@@@@AAC@@A@AA@@ABAA@@@BA@@@ABA@@@AAA@A@C@@BABA@@@C@A@A@@@GC@@AA@@CAA@@A@@@A@A@C@@@A@@@AA@@A@@B@@@@A@@A@@BA@@@@A@A@A@A@ABE@AAEAA@AAACCA@@A@AAAAAA@@@ABA@@BA@@@@A@AA@A@A@@@@A@@@@AAC@@@AB@@C@A@E@ABA@A@@@@BA@@B@B@B@@@@ABA@@@A@@@@@@B@@@@A@@@@A@@A@BBA@@@@@@B@@@B@@AD@BA@BBAB@@AB@@@B@B@@A@A@AAA@@@@@@BB@B@@@@B@@BBA@@B@@B@BB@@B@@B@@A@@B@@@B@BA@@@@@@@@@A@@@@@A@@@@B@@A@@@AAA@A@@@@@@B@@A@@@@@@B@@@@@@A@A@@@@@@B@B@@@@A@@@@@@@@A@A@@@@@@A@@@@@@ABA@@@@A@A@ABA@ABABAD@@A@@@@@@@@@A@@@A@AB@@A@@B@@A@@A@@AAA@@@@AA@@@A@@@AA@A@A@@@A@AA@@@A@@@@A@@A@@@BA@@@@@@@A@@@@A@@@B@@@@@AA@@@@@@@@@A@@A@@@@@B@@A@@@@@@A@@@@A@@A@@@@@@@@@@AB@@ECC@@@A@@A@@BA@@@@@AA@@BA@@@A@@@AA@@@AACB@@@B@@A@A@@@@@@B@@@B@@@@@@AA@@AA@@@A@@@@@AAA@@A@@@AA@@@@AA@@A@@@@@BABB@@@A@@@@@@@A@@BB@@@A@@@@@AB@@@@@@@AA@AAA@@@@@@@@B@@@@@@A@@@@B@B@A@@A@@AA@@@BAB@@@A@@@B@@@@@A@@@@@@@@@@A@@@@A@@@A@@@A@@@AB@@@@@A@@@@@@@A@@@@@@A@@@@BA@@B@@@@@BA@@@A@@@A@@@AAA@@@A@@@A@@@@AC@@@@@@B@@@@A@@DA@AB@B@B@@@@@@@BBBBB@BBB@@@@@AA@A@AB@@@@AB@BA@@@BBB@@@@AB@@B@@BB@@@@@@AB@@@B@@@@A@@@A@@@@B@@@A@@@@C@@B@B@BB@@@@@AB@@BB@@A@@B@@B@@BBBB@B@@@@@@@@BB@A@@B@@@B@@BB@@@@@@AAA@@BAB@@@@A@@@A@@B@BB@@B@@@@@@@@@AA@@@@@A@@@C@@BB@@@@@A@@B@@@@AB@@@@@@A@@A@@AC@@@A@@@AAA@A@ACCAA@CB@@@A@@@AA@@@@A@@@@BA@@@A@A@A@A@@AA@@AA@@@@@A@A@@@@AAA@@A@@A@A@AAAA@@@@BA@@B@@A@@@A@@AA@A@@@AA@@A@@@@@@B@B@@@B@D@BA@AB@@AB@BA@@BABA@A@@@@@AB@@A@@BA@@B@@BB@B@@@BB@@B@@@DA@@DA@@B@D@B@B@DB@@B@@@@@BAB@@@@@BA@@@@AA@A@@@@BA@@@A@@BAB@@@@@B@@ABA@@BAB@BA@@B@DA@@B@@@BBHEB@@@A@@AAA@@AA@A@A@CBA@@@A@A@@AA@@BA@A@@A@AA@@@@@AA@@@@A@@@AA@@AA@A@@AA@AA@@A@A@C@C@AAA@@AA@AAAAA@@A@@@ABA@@@AB@@A@C@A@A@A@ADA@@B@AA@A@@@ABA@@B@@@B@@@B@B@BA@@B@FC@ABABA@@@@@@@@B@@@@AAA@@A@A@@@AA@BA@@@@@@@@A@ABA@@@@A@A@@@@@AB@@@AA@ABC@A@@@ABA@@BAB@@A@@BA@A@AB@@A@CA@A@@AA@@AAB@@A@@@@@BBBBBB@@@BAB@@@@@BA@A@@AC@@@@AA@@@A@@@A@A@@@AA@@@@AB@B@@AB@@@BA@@@@@A@@BABA@@BA@AA@@@CA@@@BA@ABA@@@A@A@AAA@@@A@A@A@EA@@A@@@@A@@@@@@@A@@@A@@@@@AA@AA@AAAA@@A@@B@@@BA@@B@B@DB@@BB@@B@@@@A@@@@AA@@B@@A@@AA@@@@B@@ABAB@@A@A@ABA@@@A@AB@BA@A@AA@BAAA@@@@A@ABCBA@@@CDA@@BA@ABAB@@AB@@AAA@@@BA@@@@@@@@A@AAA@@@@A@AA@@A@@AA@@ACAA@@BG@AB@@A@@@A@@@C@A@@B@@ABA@AB@@@@@BA@AA@@ABA@@AA@A@@@@ABAA@@@@A@@@@BA@A@@A@AB@@AB@BA@AB@@A@@@@@A@AA@B@@@@@B@BBB@@@BBB@@AB@B@@@BB@@@A@@@AA@@A@A@A@@B@D@B@DA@@B@B@@A@A@@A@@A@@AAA@@@@@@@@AAA@@AA@A@@A@@AAAA@@@@@E@B@BADADAB@B@@@BAA@BAA@@A@@AAAAA@C@A@@A@@@@A@AA@AAA@@@A@@AA@A@@A@@A@A@AA@A@@C@@@C@@AA@@BC@@@A@@@@@@AAAAAA@@A@@@@@A@@AA@@BAAA@@@A@@@AA@@@@A@@AABAB@@@B@B@B@BA@@B@@A@@@@@@BA@AB@@AB@B@@AB@@@@@B@@@B@@@@@BAB@@@@A@@BA@@B@@@BA@@B@@@B@@@@ABA@@B@@@B@@AB@@@B@@@@@D@B@B@@@B@BDD@B@@B@@@@@@BAF@@A@@@A@ABA@A@ABA@@@@BAB@B@@A@@BAAABC@ABA@@@A@A@ABAB@@ABAB@B@@@B@@@B@B@@A@@BE@A@@@A@A@A@ABA@ABA@@BAAA@CBA@@@@@@@AA@A@AA@@@A@AA@@@A@AA@@@@@A@@@@@AB@@@@A@@@A@@@EB@@@@AB@@@@AB@@A@@@@@@@AA@@A@A@A@@@@BA@A@A@@@CBA@A@A@CB@BA@ABAB"],"encodeOffsets":[[120199,28797]]}}],"UTF8Encoding":true});}));