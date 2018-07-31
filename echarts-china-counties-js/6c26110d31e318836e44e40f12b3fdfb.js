(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('鹿邑县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411628","properties":{"name":"鹿邑县","cp":[115.484454,33.86],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAECCAECEAEAC@E@A@A@AAC@KBC@C@G@@@A@@BABAB@@@B@B@@ABA@ABABABCDA@A@C@ABA@A@@B@B@BABEDCDED@B@@CBA@@B@@AD@BA@@@C@A@A@@ACA@@A@C@AB@@AB@B@B@B@@A@@@AEAACB@A@A@@A@@@@@C@@AAA@@A@CA@CA@@@@C@@@@@@@C@@C@EDABA@@BCBCDCDADA@@@A@@@@@@B@@A@@@AB@@@@@@@@@C@BC@A@A@@@A@@@@B@B@B@@@@@BA@GDEDABA@ABE@@A@@@CAA@@EC@A@A@@@C@@@@@AB@A@@@AAA@@@@BAB@@A@@@@A@@@@AB@BA@C@EAC@@FE@@@@B@BCBAB@@AA@A@@@@@@A@@B@@@@@@@AA@@@G@@@@@A@A@@@@@C@EB@A@@@@@A@AC@@@A@@@ADA@CB@B@B@@AB@@@@C@A@ABCBAB@@AF@@@B@@A@@@AAA@A@A@@@@BA@A@@@@@A@A@@B@B@B@@@B@@@F@@@@A@C@A@@@@@AB@@@@C@A@A@A@@@A@@A@@@@@@E@@@@@A@A@A@@BC@@DA@C@@@@@AB@@AB@B@BA@A@AA@@@BAB@@@@@@@@A@@@@@C@A@A@A@@@@@@AA@@@@@CA@@@AC@@@@BC@A@A@@B@B@@A@@@A@@E@A@@@@AAA@@@@@@AA@@@A@@C@@@@A@CEA@@@C@A@@@BA@AC@@@@AC@@@@@A@A@@@@@@A@@A@@AE@@CAAA@@@@@C@@AA@@A@@@AE@E@A@@@@@@A@@A@A@@AA@@@@@A@@@@B@@@@A@@@A@@B@@@B@B@DA@@@A@@D@@A@A@@@AD@@EBCBEDEBA@@@@C@@@A@@AAA@@A@@A@A@@A@@@AA@@@@A@@@AABA@A@G@A@A@EB@BA@A@@A@AA@A@A@@DABABKAA@@BA@AB@DABAB@BAFABCDGDCBCBCBABIDIDCBEFCB@BA@@BD@@BDB@R@D@@A@CB@B@DCB@DEA@B@B@BAB@DA@CFEJ@@@@BBBB@BD@@@@B@DF@@@E@@BA@@BC@BBC@@AA@@FB@@DA@@H@@@DBB@@B@@DB@@B@@B@@@E@@PABA@A@@BA@CBBFNDPBB@BJ@@AF@D@FEDKDKC@BEBB@@DA@@@@B@B@@BBA@@BD@@DB@@D@@@@@@BB@BA@@BA@@@@@@@A@@@@B@@@@@@BBB@@@@BA@@BB@BDA@BDB@@HFA@DDA@BB@@A@@B@@@F@@@FA@@B@B@DADADA@AHB@@@AD@@B@@B@@BB@B@@@@BJ@@AD@@BB@DH@@@@@B@AB@@BBHB@@D@BC@@AC@@B@@@B@@@@AB@BBBFHA@@@CD@@B@D@@FD@@DB@@@BD@BH@@BBA@@@AB@B@@DD@H@B@@@B@D@B@B@DC@@D@@@B@@B@@@AD@@@D@@@@C@@@AB@AAB@@C@@@AB@@CA@@@AE@@@@B@@BB@@ALA@AB@HADA@@BCFBB@TD@@@BB@@BBA@@DD@B@B@@D@@BB@B@@B@@@BB@NA@@@DB@@HAB@BB@@DA@BD@@@@@BP@@@@CJ@@BB@@AD@@BHBDB@ABD@BA@@B@BAB@BCBCBABCBA@EDCAA@A@@BDBCFB@ADB@AF@FJ@DBB@@ADEBAB@DAFAFAFADAD@DABADAD@DADCFAB@BFA@@DA@@BA@@FL@@AHA@AB@@GDBBBF@DBJBB@DBF@@DC@@AA@@BA@@DAA@H@@B@@@AD@D@@A@@@AHA@@DA@@D@@B@AB@@ABADABAB@@A@@@@@@@FBAJ@@@FAA@DD@ADB@B@@B@@@@FB@BB@@EL@DAB@@@D@F@D@@@BDD@@A@@B@@BD@@BF@@BL@@@B@@@D@@AB@@BLB@B@@JB@@@A@EAACAAAAEAECG@@@@AEC@@@@AB@@A@@@@DA@@@E@C@@@AD@@AJ@@B@@@@@C@@B@@B@@B@DAD@@@@DB@@CB@@D@@BA@DF@@AH@@@@BB@@B@FBFF@@BD@BD@@J@@BB@@AJAB@@@D@@BDA@@BF@BDFD@@BD@@BBA@HB@B@B@BAB@B@BABADAB@BD@DB@BB@BB@BAB@DEHEBAD@BADABANEBADADADABABABA@@DAFC@@B@BANAH@H@@@D@@AB@BAB@BAHBBADABA@@DAB@@@DAD@D@B@BAB@B@H@@@H@F@D@J@@@@B@@@@@DBB@BAB@@B@@@A@ABB@BBD@BDA@BB@BB@@BBD@@AB@B@H@F@B@@@@B@DA@@BBD@@CB@@@B@@AD@BAB@@D@@H@@@@B@@D@@DB@@B@@@BB@B@B@@B@@B@D@BD@B@@BF@@DABA@@BA@AFA@@FAB@B@@@@@@BD@@BFA@DD@@@B@B@@BB@@DA@@F@@D@@BB@@@B@DC@B@@B@@ABC@@DADCDC@@@AB@BB@@B@@AD@@@@BA@@B@@@BB@@A@@@BP@B@BD@DD@@DBDA@@A@@@BC@@J@@F@@BB@@DB@@D@@@@B@@BBDD@@D@@BA@@@B@ABAB@@BB@@BAB@DA@@D@JB@@BBDAD@@@F@@@B@H@DBB@B@H@@AFAJKB@@AFB@@BD@@DB@BAD@@BF@@BD@@HD@@@D@@DF@@A@@@@LA@AF@@DBAB@@AFAB@@A@AHA@AB@J@@A@AB@D@F@@FB@@@BFC@@HJ@@@AC@ABA@@B@BAD@BA@@@@@ABA@@B@@BB@@@H@@DJ@@@D@@@@IF@B@B@@A@@D@@BFBAHPB@BB@D@@@@A@@H@@@BA@ABCH@@EF@@@@A@@@ABAB@ACBCAA@@@AA@@CF@@AB@@A@@@GA@@@BAB@BAFCBIACACCAACAAAA@EBIBA@A@AOEEAIBM@EAECCBAB@@@BABA@@@C@CAICGE@AA@@AA@AC@ABA@@BABABEBCBA@AACA@GAQ@@ACE@@@ECG@CAC@@C@AAAA@C@CBABAHADA@@@@@AAAAAAA@E@CAAA@OC@AAA@@@C@CAK@G@A@ADG@CAAC@A@AAC@CCAA@C@A@@BC@C@@@C@C@C@ACAEAAAACCI@E@C@@@@BAA@BAAAAB@A@@FCDAFCB@@@AE@AAAEBCAE@CACCAC@ABAFABA@A@CACCCAACBGBA@@@A@AA@AAO@CBC@A@@@@B@@@B@B@DBD@@@BBD@BA@@B@@A@C@AB@@AB@F@B@@@B@@BB@BBFDBBB@@@F@B@B@BBB@B@BAB@DCB@BA@@@ADA@A@@B@@AB@@@DA@@B@@@B@B@B@B@BAB@B@B@B@B@@@B@BA@@B@@@BBDDB@BBBB@@B@B@B@B@B@B@B@@BBB@BBB@@B@@B@@DCB@BCBAB@D@B@DCDC@C@@CABE@EBC@E@@BA@ABABCBC@E@C@AA@GCGCCA@@@G@E@CAG@AAAKAA@@@@@AAAA@ABABABADABADAAAAAAC@CACBE@ABC@CACAA@C@@AGCM@CEEA@CBCBCBCBC@EBCBCBE@ABC@ABCBCBABA@ABA@A@A@C@@@AAAA@@AA@C@ACAAAC@G@@@AA@C@CAAAC@A@@@AB@JIBA@A@A@A@ADIBCDCFCDADADADCBCBCDEDCBABADCBCBC@CBAA@@A@@@AA@@AE@@AC@@@@@@@C@@A@@A@@AC@@AA@A@C@@AC@@C@AAA@HC@@@@@@B@DG@I@@@BB@BB@D@BB@@@@@BB@A@AB@@AD@@ABC@A@A@A@@@A@CBC@@@@@@@C@@@ABBBCB@AA@@@@D@@@BE@@@@@AA@BA@AB@@@C@@EA@@A@@AAA@@@@A@@@A@@@@@@ACB@@ACC@@C@@C@@@@@AE@@@@AB@FE@@D@@A@A@C@CA@@A@@@A@A@C@G@C@@@AD@BA@@@A@C@CAAA@@AA@@A@C@E@A@EACAC@A@C@C@G@GBG@A@@@@@ABABGHEDAD@@@B@@AFCB@@@B@B@@@@A@A@A@@B@DAD@D@D@BA@ABCBGDEDA@ABA@C@A@AAA@CA@ACACAA@"],"encodeOffsets":[[118204,34567]]}}],"UTF8Encoding":true});}));