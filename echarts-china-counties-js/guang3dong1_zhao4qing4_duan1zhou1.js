(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('端州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441202","properties":{"name":"端州区","cp":[112.484848,23.052101],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@K@A@ABI@A@CBC@E@C@C@A@Q@A@GBKDEBQJCHADCF@B@@AD@BA@AHADCH@BAD@BAH@F@D@DBLHR@DFJBFFADADBD@@CDAB@D@B@B@BEBABAD@D@DD@DADDBBH@FEDC@ABGBA@C@CBC@GGI@ANEHFDBCB@DAB@BF@B@BADCA@DC@@BDBBAD@@BD@D@BB@BDADD@DAA@BC@ABFBBBBFDFABFBB@FABBB@BABABBD@DB@@D@D@BDB@D@B@F@DBDA@ABAD@FAH@B@BBD@B@FBBBBF@DF@DBJFFBDDFJDDHBBABC@ABA@AA@@A@ABCD@B@B@BA@@DAB@BB@A@@BBB@B@@AB@AGBCBCJE@C@CA@AAACCIB@BCBAD@FCBAIIAABAFCCCDAB@@@BAB@@@BA@@@@@@@@FCBCBAB@D@B@D@BAB@DC@@@A@@BCBEBCBCBEFEAAGCACAACEAEAC@@AEACAA@CACAAACACAACCAA@@ACCC@AAACACCAA@ACACAAACA@@AAAA@ACAAAA@CAGCEAEACAG@G@AAA@A@A@EBG@C@E@"],"encodeOffsets":[[115168,23591]]}}],"UTF8Encoding":true});}));