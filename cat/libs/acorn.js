var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords$1 = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
  return false;
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
var keywords = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords[name] = new TokenType(name, options);
}
var types$1 = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  privateId: new TokenType("privateId", startsExpr),
  eof: new TokenType("eof"),
  // Punctuation token types.
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  return code === 10 || code === 13 || code === 8232 || code === 8233;
}
function nextLineBreak(code, from, end) {
  if (end === void 0)
    end = code.length;
  for (var i = from; i < end; i++) {
    var next = code.charCodeAt(i);
    if (isNewLine(next)) {
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
    }
  }
  return -1;
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;
var hasOwn = Object.hasOwn || function(obj, propName) {
  return hasOwnProperty.call(obj, propName);
};
var isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
var regexpCache = /* @__PURE__ */ Object.create(null);
function wordsRegexp(words) {
  return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
}
function codePointToString(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n) {
  return new Position(this.line, this.column + n);
};
var SourceLocation = function SourceLocation2(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    var nextBreak = nextLineBreak(input, cur, offset2);
    if (nextBreak < 0) {
      return new Position(line, offset2 - cur);
    }
    ++line;
    cur = nextBreak;
  }
}
var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: false,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: false,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: true,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};
var warnedAboutEcmaVersion = false;
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion === "latest") {
    options.ecmaVersion = 1e8;
  } else if (options.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
    }
    options.ecmaVersion = 11;
  } else if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (!opts || opts.allowHashBang == null) {
    options.allowHashBang = options.ecmaVersion >= 14;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
    if (options.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types$1.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.potentialArrowInForAwait = false;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = /* @__PURE__ */ Object.create(null);
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
  this.privateNameStack = [];
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
Parser.prototype.parse = function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.canAwait.get = function() {
  for (var i = this.scopeStack.length - 1; i >= 0; i--) {
    var scope = this.scopeStack[i];
    if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
      return false;
    }
    if (scope.flags & SCOPE_FUNCTION) {
      return (scope.flags & SCOPE_ASYNC) > 0;
    }
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
prototypeAccessors.allowSuper.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
prototypeAccessors.allowNewDotTarget.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
};
prototypeAccessors.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp$9 = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp$9.strictDirective = function(start) {
  if (this.options.ecmaVersion < 5) {
    return false;
  }
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp$9.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp$9.isContextual = function(name) {
  return this.type === types$1.name && this.value === name && !this.containsEsc;
};
pp$9.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp$9.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp$9.canInsertSemicolon = function() {
  return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$9.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp$9.semicolon = function() {
  if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp$9.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp$9.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp$9.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
var DestructuringErrors = function DestructuringErrors2() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp$9.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp$9.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$8 = Parser.prototype;
pp$8.parseTopLevel = function(node) {
  var exports = /* @__PURE__ */ Object.create(null);
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types$1.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
      var name = list[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
pp$8.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh === 92) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123 || nextCh > 55295 && nextCh < 56320) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
      return true;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$8.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, after;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
};
pp$8.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types$1._var;
    kind = "let";
  }
  switch (starttype) {
    case types$1._break:
    case types$1._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types$1._debugger:
      return this.parseDebuggerStatement(node);
    case types$1._do:
      return this.parseDoStatement(node);
    case types$1._for:
      return this.parseForStatement(node);
    case types$1._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types$1._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types$1._if:
      return this.parseIfStatement(node);
    case types$1._return:
      return this.parseReturnStatement(node);
    case types$1._switch:
      return this.parseSwitchStatement(node);
    case types$1._throw:
      return this.parseThrowStatement(node);
    case types$1._try:
      return this.parseTryStatement(node);
    case types$1._const:
    case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types$1._while:
      return this.parseWhileStatement(node);
    case types$1._with:
      return this.parseWithStatement(node);
    case types$1.braceL:
      return this.parseBlock(true, node);
    case types$1.semi:
      return this.parseEmptyStatement(node);
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$8.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types$1.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$8.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$8.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types$1._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types$1.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$8.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types$1.parenL);
  if (this.type === types$1.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types$1._var || this.type === types$1._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var startsWithLet = this.isContextual("let"), isForOf = false;
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
  if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types$1._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    if (startsWithLet && isForOf) {
      this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$8.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$8.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$8.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types$1.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types$1.braceR; ) {
    if (this.type === types$1._case || this.type === types$1._default) {
      var isCase = this.type === types$1._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types$1.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$8.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty$1 = [];
pp$8.parseCatchClauseParam = function() {
  var param = this.parseBindingAtom();
  var simple = param.type === "Identifier";
  this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
  this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
  this.expect(types$1.parenR);
  return param;
};
pp$8.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types$1._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types$1.parenL)) {
      clause.param = this.parseCatchClauseParam();
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
  this.next();
  this.parseVar(node, false, kind, allowMissingInitializer);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$8.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$8.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$8.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$8.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node === void 0)
    node = this.startNode();
  node.body = [];
  this.expect(types$1.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$8.parseFor = function(node, init) {
  node.init = init;
  this.expect(types$1.semi);
  node.test = this.type === types$1.semi ? null : this.parseExpression();
  this.expect(types$1.semi);
  node.update = this.type === types$1.parenR ? null : this.parseExpression();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$8.parseForIn = function(node, init) {
  var isForIn = this.type === types$1._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(
      init.start,
      (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
    );
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types$1.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types$1.comma)) {
      break;
    }
  }
  return node;
};
pp$8.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types$1.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types$1.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$8.parseFunctionParams = function(node) {
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$8.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var privateNameMap = this.enterClassBody();
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types$1.braceL);
  while (this.type !== types$1.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
        this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  this.exitClassBody();
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$8.parseClassElement = function(constructorAllowsSuper) {
  if (this.eat(types$1.semi)) {
    return null;
  }
  var ecmaVersion = this.options.ecmaVersion;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;
  if (this.eatContextual("static")) {
    if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
      this.parseClassStaticBlock(node);
      return node;
    }
    if (this.isClassElementNameStart() || this.type === types$1.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
    isGenerator = true;
  }
  if (!keyName && !isAsync && !isGenerator) {
    var lastValue = this.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }
  if (keyName) {
    node.computed = false;
    node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);
  }
  if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
    var isConstructor = !node.static && checkKeyName(node, "constructor");
    var allowsDirectSuper = isConstructor && constructorAllowsSuper;
    if (isConstructor && kind !== "method") {
      this.raise(node.key.start, "Constructor can't have get/set modifier");
    }
    node.kind = isConstructor ? "constructor" : kind;
    this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
  } else {
    this.parseClassField(node);
  }
  return node;
};
pp$8.isClassElementNameStart = function() {
  return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
};
pp$8.parseClassElementName = function(element) {
  if (this.type === types$1.privateId) {
    if (this.value === "constructor") {
      this.raise(this.start, "Classes can't have an element named '#constructor'");
    }
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};
pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  var key = method.key;
  if (method.kind === "constructor") {
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
  } else if (method.static && checkKeyName(method, "prototype")) {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && value.params.length !== 0) {
    this.raiseRecoverable(value.start, "getter should have no params");
  }
  if (method.kind === "set" && value.params.length !== 1) {
    this.raiseRecoverable(value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && value.params[0].type === "RestElement") {
    this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
  }
  return this.finishNode(method, "MethodDefinition");
};
pp$8.parseClassField = function(field) {
  if (checkKeyName(field, "constructor")) {
    this.raise(field.key.start, "Classes can't have a field named 'constructor'");
  } else if (field.static && checkKeyName(field, "prototype")) {
    this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
  }
  if (this.eat(types$1.eq)) {
    var scope = this.currentThisScope();
    var inClassFieldInit = scope.inClassFieldInit;
    scope.inClassFieldInit = true;
    field.value = this.parseMaybeAssign();
    scope.inClassFieldInit = inClassFieldInit;
  } else {
    field.value = null;
  }
  this.semicolon();
  return this.finishNode(field, "PropertyDefinition");
};
pp$8.parseClassStaticBlock = function(node) {
  node.body = [];
  var oldLabels = this.labels;
  this.labels = [];
  this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  this.next();
  this.exitScope();
  this.labels = oldLabels;
  return this.finishNode(node, "StaticBlock");
};
pp$8.parseClassId = function(node, isStatement) {
  if (this.type === types$1.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLValSimple(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$8.parseClassSuper = function(node) {
  node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
};
pp$8.enterClassBody = function() {
  var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  this.privateNameStack.push(element);
  return element.declared;
};
pp$8.exitClassBody = function() {
  var ref2 = this.privateNameStack.pop();
  var declared = ref2.declared;
  var used = ref2.used;
  if (!this.options.checkPrivateFields) {
    return;
  }
  var len = this.privateNameStack.length;
  var parent = len === 0 ? null : this.privateNameStack[len - 1];
  for (var i = 0; i < used.length; ++i) {
    var id = used[i];
    if (!hasOwn(declared, id.name)) {
      if (parent) {
        parent.used.push(id);
      } else {
        this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
      }
    }
  }
};
function isPrivateNameConflicted(privateNameMap, element) {
  var name = element.key.name;
  var curr = privateNameMap[name];
  var next = "true";
  if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
    next = (element.static ? "s" : "i") + element.kind;
  }
  if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
    privateNameMap[name] = "true";
    return false;
  } else if (!curr) {
    privateNameMap[name] = next;
    return false;
  } else {
    return true;
  }
}
function checkKeyName(node, name) {
  var computed = node.computed;
  var key = node.key;
  return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
}
pp$8.parseExportAllDeclaration = function(node, exports) {
  if (this.options.ecmaVersion >= 11) {
    if (this.eatContextual("as")) {
      node.exported = this.parseModuleExportName();
      this.checkExport(exports, node.exported, this.lastTokStart);
    } else {
      node.exported = null;
    }
  }
  this.expectContextual("from");
  if (this.type !== types$1.string) {
    this.unexpected();
  }
  node.source = this.parseExprAtom();
  this.semicolon();
  return this.finishNode(node, "ExportAllDeclaration");
};
pp$8.parseExport = function(node, exports) {
  this.next();
  if (this.eat(types$1.star)) {
    return this.parseExportAllDeclaration(node, exports);
  }
  if (this.eat(types$1._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    node.declaration = this.parseExportDefaultDeclaration();
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseExportDeclaration(node);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types$1.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
        if (spec.local.type === "Literal") {
          this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$8.parseExportDeclaration = function(node) {
  return this.parseStatement(null);
};
pp$8.parseExportDefaultDeclaration = function() {
  var isAsync;
  if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
    var fNode = this.startNode();
    this.next();
    if (isAsync) {
      this.next();
    }
    return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
  } else if (this.type === types$1._class) {
    var cNode = this.startNode();
    return this.parseClass(cNode, "nullableID");
  } else {
    var declaration = this.parseMaybeAssign();
    this.semicolon();
    return declaration;
  }
};
pp$8.checkExport = function(exports, name, pos) {
  if (!exports) {
    return;
  }
  if (typeof name !== "string") {
    name = name.type === "Identifier" ? name.name : name.value;
  }
  if (hasOwn(exports, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports[name] = true;
};
pp$8.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  }
};
pp$8.checkVariableExport = function(exports, decls) {
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports, decl.id);
  }
};
pp$8.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$8.parseExportSpecifier = function(exports) {
  var node = this.startNode();
  node.local = this.parseModuleExportName();
  node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
  this.checkExport(
    exports,
    node.exported,
    node.exported.start
  );
  return this.finishNode(node, "ExportSpecifier");
};
pp$8.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseExportSpecifier(exports));
  }
  return nodes;
};
pp$8.parseImport = function(node) {
  this.next();
  if (this.type === types$1.string) {
    node.specifiers = empty$1;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$8.parseImportSpecifier = function() {
  var node = this.startNode();
  node.imported = this.parseModuleExportName();
  if (this.eatContextual("as")) {
    node.local = this.parseIdent();
  } else {
    this.checkUnreserved(node.imported);
    node.local = node.imported;
  }
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportSpecifier");
};
pp$8.parseImportDefaultSpecifier = function() {
  var node = this.startNode();
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportDefaultSpecifier");
};
pp$8.parseImportNamespaceSpecifier = function() {
  var node = this.startNode();
  this.next();
  this.expectContextual("as");
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportNamespaceSpecifier");
};
pp$8.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types$1.name) {
    nodes.push(this.parseImportDefaultSpecifier());
    if (!this.eat(types$1.comma)) {
      return nodes;
    }
  }
  if (this.type === types$1.star) {
    nodes.push(this.parseImportNamespaceSpecifier());
    return nodes;
  }
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseImportSpecifier());
  }
  return nodes;
};
pp$8.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
    var stringLiteral = this.parseLiteral(this.value);
    if (loneSurrogate.test(stringLiteral.value)) {
      this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
    }
    return stringLiteral;
  }
  return this.parseIdent(true);
};
pp$8.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$8.isDirectiveCandidate = function(statement) {
  return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && // Reject parenthesized strings.
  (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$7 = Parser.prototype;
pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$7.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$7.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$7.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$7.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types$1.comma);
    }
    if (allowEmpty && this.type === types$1.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types$1.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      elts.push(this.parseAssignableListItem(allowModifiers));
    }
  }
  return elts;
};
pp$7.parseAssignableListItem = function(allowModifiers) {
  var elem = this.parseMaybeDefault(this.start, this.startLoc);
  this.parseBindingListItem(elem);
  return elem;
};
pp$7.parseBindingListItem = function(param) {
  return param;
};
pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  var isBind = bindingType !== BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let") {
          this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
        }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name)) {
            this.raiseRecoverable(expr.start, "Argument name clash");
          }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) {
          this.declareName(expr.name, bindingType, expr.start);
        }
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ParenthesizedExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding parenthesized expression");
      }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes);
    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};
pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLValInnerPattern(elem, bindingType, checkClashes);
        }
      }
      break;
    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
  }
};
pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Property":
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break;
    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
  }
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$6 = Parser.prototype;
pp$6.initialContext = function() {
  return [types.b_stat];
};
pp$6.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$6.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types.f_expr || parent === types.f_stat) {
    return true;
  }
  if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
    return true;
  }
  if (prevType === types$1.braceL) {
    return parent === types.b_stat;
  }
  if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$6.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$6.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types$1.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
pp$6.overrideContext = function(tokenCtx) {
  if (this.curContext() !== tokenCtx) {
    this.context[this.context.length - 1] = tokenCtx;
  }
};
types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types$1.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
  this.exprAllowed = true;
};
types$1.dollarBraceL.updateContext = function() {
  this.context.push(types.b_tmpl);
  this.exprAllowed = true;
};
types$1.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
  this.context.push(statementParens ? types.p_stat : types.p_expr);
  this.exprAllowed = true;
};
types$1.incDec.updateContext = function() {
};
types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
    this.context.push(types.f_expr);
  } else {
    this.context.push(types.f_stat);
  }
  this.exprAllowed = false;
};
types$1.colon.updateContext = function() {
  if (this.curContext().token === "function") {
    this.context.pop();
  }
  this.exprAllowed = true;
};
types$1.backQuote.updateContext = function() {
  if (this.curContext() === types.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types.q_tmpl);
  }
  this.exprAllowed = false;
};
types$1.star.updateContext = function(prevType) {
  if (prevType === types$1._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types.f_expr) {
      this.context[index] = types.f_expr_gen;
    } else {
      this.context[index] = types.f_gen;
    }
  }
  this.exprAllowed = true;
};
types$1.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var pp$5 = Parser.prototype;
pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$5.parseExpression = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
  if (this.type === types$1.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types$1.comma)) {
      node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(forInit);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldDoubleProto = refDestructuringErrors.doubleProto;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types$1.parenL || this.type === types$1.name) {
    this.potentialArrowAt = this.start;
    this.potentialArrowInForAwait = forInit === "await";
  }
  var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types$1.eq) {
      left = this.toAssignable(left, false, refDestructuringErrors);
    }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    if (this.type === types$1.eq) {
      this.checkLValPattern(left);
    } else {
      this.checkLValSimple(left);
    }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(forInit);
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(forInit, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types$1.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types$1.colon);
    node.alternate = this.parseMaybeAssign(forInit);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
};
pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
  var prec = this.type.binop;
  if (prec != null && (!forInit || this.type !== types$1._in)) {
    if (prec > minPrec) {
      var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
      var coalesce = this.type === types$1.coalesce;
      if (coalesce) {
        prec = types$1.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
    }
  }
  return left;
};
pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  if (right.type === "PrivateIdentifier") {
    this.raise(right.start, "Private identifier can only be left side of binary expression");
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && this.canAwait) {
    expr = this.parseAwait(forInit);
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types$1.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true, update, forInit);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLValSimple(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Private fields can not be deleted");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (!sawUnary && this.type === types$1.privateId) {
    if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) {
      this.unexpected();
    }
    expr = this.parsePrivateIdent();
    if (this.type !== types$1._in) {
      this.unexpected();
    }
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!incDec && this.eat(types$1.starstar)) {
    if (sawUnary) {
      this.unexpected(this.lastTokStart);
    } else {
      return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
    }
  } else {
    return expr;
  }
};
function isPrivateFieldAccess(node) {
  return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
}
pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors, forInit);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
    if (refDestructuringErrors.trailingComma >= result.start) {
      refDestructuringErrors.trailingComma = -1;
    }
  }
  return result;
};
pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
    if (element.optional) {
      optionalChained = true;
    }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base = element;
  }
};
pp$5.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(types$1.arrow);
};
pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
};
pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types$1.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types$1.bracketL);
  if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(types$1.bracketR);
    } else if (this.type === types$1.privateId && base.type !== "Super") {
      node.property = this.parsePrivateIdent();
    } else {
      node.property = this.parseIdent(this.options.allowReserved !== "never");
    }
    node.computed = !!computed;
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types$1.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types$1.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
  if (this.type === types$1.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types$1._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
        }
      }
      return id;
    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types$1.num:
    case types$1.string:
      return this.parseLiteral(this.value);
    case types$1._null:
    case types$1._true:
    case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types$1.braceL:
      this.overrideContext(types.b_expr);
      return this.parseObj(false, refDestructuringErrors);
    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types$1._class:
      return this.parseClass(this.startNode(), false);
    case types$1._new:
      return this.parseNew();
    case types$1.backQuote:
      return this.parseTemplate();
    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport(forNew);
      } else {
        return this.unexpected();
      }
    default:
      return this.parseExprAtomDefault();
  }
};
pp$5.parseExprAtomDefault = function() {
  this.unexpected();
};
pp$5.parseExprImport = function(forNew) {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  if (this.type === types$1.parenL && !forNew) {
    return this.parseDynamicImport(node);
  } else if (this.type === types$1.dot) {
    node.meta = meta;
    return this.parseImportMeta(node);
  } else {
    this.unexpected();
  }
};
pp$5.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (!this.eat(types$1.parenR)) {
    var errorPos = this.start;
    if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$5.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$5.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$5.parseParenExpression = function() {
  this.expect(types$1.parenL);
  var val = this.parseExpression();
  this.expect(types$1.parenR);
  return val;
};
pp$5.shouldParseArrow = function(exprList) {
  return !this.canInsertSemicolon();
};
pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types$1.parenR) {
      first ? first = false : this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types$1.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types$1.comma) {
          this.raiseRecoverable(
            this.start,
            "Comma is not permitted after the rest element"
          );
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
    this.expect(types$1.parenR);
    if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$5.parseParenItem = function(item) {
  return item;
};
pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
};
var empty = [];
pp$5.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
    var meta = this.startNodeAt(node.start, node.startLoc);
    meta.name = "new";
    node.meta = this.finishNode(meta, "Identifier");
    this.next();
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.allowNewDotTarget) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
  if (this.eat(types$1.parenL)) {
    node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty;
  }
  return this.finishNode(node, "NewExpression");
};
pp$5.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types$1.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types$1.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$5.parseTemplate = function(ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types$1.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types$1.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types$1.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$5.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$5.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types$1.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
    this.parsePropertyName(prop);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$5.parseGetterSetter = function(prop) {
  prop.kind = prop.key.name;
  this.parsePropertyName(prop);
  prop.value = this.parseMethod(false);
  var paramCount = prop.kind === "get" ? 0 : 1;
  if (prop.value.params.length !== paramCount) {
    var start = prop.value.start;
    if (prop.kind === "get") {
      this.raiseRecoverable(start, "getter should have no params");
    } else {
      this.raiseRecoverable(start, "setter should have exactly one param");
    }
  } else {
    if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
      this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
    }
  }
};
pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types$1.colon) {
    this.unexpected();
  }
  if (this.eat(types$1.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.parseGetterSetter(prop);
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types$1.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$5.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types$1.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types$1.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$5.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
  var isExpression = isArrowFunction && this.type !== types$1.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign(forInit);
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLValSimple(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$5.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$5.checkParams = function(node, allowDuplicates) {
  var nameHash = /* @__PURE__ */ Object.create(null);
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types$1.comma) {
      elt = null;
    } else if (this.type === types$1.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$5.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.currentThisScope().inClassFieldInit && name === "arguments") {
    this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
  }
  if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
    this.raise(start, "Cannot use " + name + " in class static initialization block");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$5.parseIdent = function(liberal) {
  var node = this.parseIdentNode();
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$5.parseIdentNode = function() {
  var node = this.startNode();
  if (this.type === types$1.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
    this.type = types$1.name;
  } else {
    this.unexpected();
  }
  return node;
};
pp$5.parsePrivateIdent = function() {
  var node = this.startNode();
  if (this.type === types$1.privateId) {
    node.name = this.value;
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "PrivateIdentifier");
  if (this.options.checkPrivateFields) {
    if (this.privateNameStack.length === 0) {
      this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
    } else {
      this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
    }
  }
  return node;
};
pp$5.parseYield = function(forInit) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types$1.star);
    node.argument = this.parseMaybeAssign(forInit);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$5.parseAwait = function(forInit) {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true, false, forInit);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$3 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
  this.inClassFieldInit = false;
};
pp$3.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$3.exitScope = function() {
  this.scopeStack.pop();
};
pp$3.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$3.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$3.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$3.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$3.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) {
      return scope;
    }
  }
};
pp$3.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = function Node2(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$2 = Parser.prototype;
pp$2.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$2.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$2.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$2.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
pp$2.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) {
    newNode[prop] = node[prop];
  }
  return newNode;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var ecma13BinaryProperties = ecma12BinaryProperties;
var ecma14BinaryProperties = ecma13BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties,
  13: ecma13BinaryProperties,
  14: ecma14BinaryProperties
};
var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
var unicodeBinaryPropertiesOfStrings = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: ecma14BinaryPropertiesOfStrings
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var ecma14ScriptValues = ecma13ScriptValues + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues,
  13: ecma13ScriptValues,
  14: ecma14ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;
  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
for (var i = 0, list = [9, 10, 11, 12, 13, 14]; i < list.length; i += 1) {
  var ecmaVersion = list[i];
  buildUnicodeData(ecmaVersion);
}
var pp$1 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchV = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicodeSets = flags.indexOf("v") !== -1;
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
    this.switchU = true;
    this.switchV = true;
    this.switchN = true;
  } else {
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchV = false;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  }
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return c;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === void 0)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch, forceU) {
  if (forceU === void 0)
    forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
};
RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
  if (forceU === void 0)
    forceU = false;
  var pos = this.pos;
  for (var i = 0, list = chs; i < list.length; i += 1) {
    var ch = list[i];
    var current2 = this.at(pos, forceU);
    if (current2 === -1 || current2 !== ch) {
      return false;
    }
    pos = this.nextIndex(pos, forceU);
  }
  this.pos = pos;
  return true;
};
pp$1.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  var u = false;
  var v = false;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
    if (flag === "u") {
      u = true;
    }
    if (flag === "v") {
      v = true;
    }
  }
  if (this.options.ecmaVersion >= 15 && u && v) {
    this.raise(state.start, "Invalid regular expression flag");
  }
};
pp$1.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$1.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(
      41
      /* ) */
    )) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(
      93
      /* ] */
    ) || state.eat(
      125
      /* } */
    )) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$1.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(
    124
    /* | */
  )) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(
    123
    /* { */
  )) {
    state.raise("Lone quantifier brackets");
  }
};
pp$1.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$1.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$1.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(
    94
    /* ^ */
  ) || state.eat(
    36
    /* $ */
  )) {
    return true;
  }
  if (state.eat(
    92
    /* \ */
  )) {
    if (state.eat(
      66
      /* B */
    ) || state.eat(
      98
      /* b */
    )) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(
    40
    /* ( */
  ) && state.eat(
    63
    /* ? */
  )) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(
        60
        /* < */
      );
    }
    if (state.eat(
      61
      /* = */
    ) || state.eat(
      33
      /* ! */
    )) {
      this.regexp_disjunction(state);
      if (!state.eat(
        41
        /* ) */
      )) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$1.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(
      63
      /* ? */
    );
    return true;
  }
  return false;
};
pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(
    42
    /* * */
  ) || state.eat(
    43
    /* + */
  ) || state.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$1.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(
    123
    /* { */
  )) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(
        44
        /* , */
      ) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(
        125
        /* } */
      )) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(
    40
    /* ( */
  )) {
    if (state.eat(
      63
      /* ? */
    ) && state.eat(
      58
      /* : */
    )) {
      this.regexp_disjunction(state);
      if (state.eat(
        41
        /* ) */
      )) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatCapturingGroup = function(state) {
  if (state.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(
      41
      /* ) */
    )) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$1.regexp_eatExtendedAtom = function(state) {
  return state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$1.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$1.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_groupSpecifier = function(state) {
  if (state.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$1.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(
      62
      /* > */
    )) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$1.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$1.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$1.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true;
    }
    if (n <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatKGroupName = function(state) {
  if (state.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$1.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$1.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(
          92
          /* \ */
        ) && state.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(state) && state.eat(
      125
      /* } */
    ) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$1.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(
      47
      /* / */
    )) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
var CharSetNone = 0;
var CharSetOk = 1;
var CharSetString = 2;
pp$1.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return CharSetOk;
  }
  var negate = false;
  if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    var result;
    if (state.eat(
      123
      /* { */
    ) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(
      125
      /* } */
    )) {
      if (negate && result === CharSetString) {
        state.raise("Invalid property name");
      }
      return result;
    }
    state.raise("Invalid property name");
  }
  return CharSetNone;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(
    61
    /* = */
  )) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return CharSetOk;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
  }
  return CharSetNone;
};
pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (state.unicodeProperties.binary.test(nameOrValue)) {
    return CharSetOk;
  }
  if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) {
    return CharSetString;
  }
  state.raise("Invalid property name");
};
pp$1.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$1.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$1.regexp_eatCharacterClass = function(state) {
  if (state.eat(
    91
    /* [ */
  )) {
    var negate = state.eat(
      94
      /* ^ */
    );
    var result = this.regexp_classContents(state);
    if (!state.eat(
      93
      /* ] */
    )) {
      state.raise("Unterminated character class");
    }
    if (negate && result === CharSetString) {
      state.raise("Negated character class may contain strings");
    }
    return true;
  }
  return false;
};
pp$1.regexp_classContents = function(state) {
  if (state.current() === 93) {
    return CharSetOk;
  }
  if (state.switchV) {
    return this.regexp_classSetExpression(state);
  }
  this.regexp_nonEmptyClassRanges(state);
  return CharSetOk;
};
pp$1.regexp_nonEmptyClassRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$1.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    98
    /* b */
  )) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(
    45
    /* - */
  )) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$1.regexp_classSetExpression = function(state) {
  var result = CharSetOk, subResult;
  if (this.regexp_eatClassSetRange(state))
    ;
  else if (subResult = this.regexp_eatClassSetOperand(state)) {
    if (subResult === CharSetString) {
      result = CharSetString;
    }
    var start = state.pos;
    while (state.eatChars(
      [38, 38]
      /* && */
    )) {
      if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
        if (subResult !== CharSetString) {
          result = CharSetOk;
        }
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
    while (state.eatChars(
      [45, 45]
      /* -- */
    )) {
      if (this.regexp_eatClassSetOperand(state)) {
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
  } else {
    state.raise("Invalid character in character class");
  }
  for (; ; ) {
    if (this.regexp_eatClassSetRange(state)) {
      continue;
    }
    subResult = this.regexp_eatClassSetOperand(state);
    if (!subResult) {
      return result;
    }
    if (subResult === CharSetString) {
      result = CharSetString;
    }
  }
};
pp$1.regexp_eatClassSetRange = function(state) {
  var start = state.pos;
  if (this.regexp_eatClassSetCharacter(state)) {
    var left = state.lastIntValue;
    if (state.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(state)) {
      var right = state.lastIntValue;
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatClassSetOperand = function(state) {
  if (this.regexp_eatClassSetCharacter(state)) {
    return CharSetOk;
  }
  return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
};
pp$1.regexp_eatNestedClass = function(state) {
  var start = state.pos;
  if (state.eat(
    91
    /* [ */
  )) {
    var negate = state.eat(
      94
      /* ^ */
    );
    var result = this.regexp_classContents(state);
    if (state.eat(
      93
      /* ] */
    )) {
      if (negate && result === CharSetString) {
        state.raise("Negated character class may contain strings");
      }
      return result;
    }
    state.pos = start;
  }
  if (state.eat(
    92
    /* \ */
  )) {
    var result$1 = this.regexp_eatCharacterClassEscape(state);
    if (result$1) {
      return result$1;
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_eatClassStringDisjunction = function(state) {
  var start = state.pos;
  if (state.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (state.eat(
      123
      /* { */
    )) {
      var result = this.regexp_classStringDisjunctionContents(state);
      if (state.eat(
        125
        /* } */
      )) {
        return result;
      }
    } else {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_classStringDisjunctionContents = function(state) {
  var result = this.regexp_classString(state);
  while (state.eat(
    124
    /* | */
  )) {
    if (this.regexp_classString(state) === CharSetString) {
      result = CharSetString;
    }
  }
  return result;
};
pp$1.regexp_classString = function(state) {
  var count = 0;
  while (this.regexp_eatClassSetCharacter(state)) {
    count++;
  }
  return count === 1 ? CharSetOk : CharSetString;
};
pp$1.regexp_eatClassSetCharacter = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
      return true;
    }
    if (state.eat(
      98
      /* b */
    )) {
      state.lastIntValue = 8;
      return true;
    }
    state.pos = start;
    return false;
  }
  var ch = state.current();
  if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) {
    return false;
  }
  if (isClassSetSyntaxCharacter(ch)) {
    return false;
  }
  state.advance();
  state.lastIntValue = ch;
  return true;
};
function isClassSetReservedDoublePunctuatorCharacter(ch) {
  return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
}
function isClassSetSyntaxCharacter(ch) {
  return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
  var ch = state.current();
  if (isClassSetReservedPunctuator(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isClassSetReservedPunctuator(ch) {
  return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
}
pp$1.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$1.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$1.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token2(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
};
var pp = Parser.prototype;
pp.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types$1.eof,
          value: token
        };
      }
    };
  };
}
pp.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types$1.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 56320) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
};
pp.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
      ++this.curLine;
      pos = this.lineStart = nextBreak;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(
      true,
      this.input.slice(start + 2, end),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(
      false,
      this.input.slice(start + startSkip, this.pos),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types$1.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types$1.dot);
  }
};
pp.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.slash, 1);
};
pp.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types$1.star : types$1.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types$1.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types$1.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
};
pp.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.bitwiseXOR, 1);
};
pp.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types$1.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.plusMin, 1);
};
pp.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(types$1.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types$1.relational, size);
};
pp.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types$1.arrow);
  }
  return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
};
pp.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types$1.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(types$1.coalesce, 2);
    }
  }
  return this.finishOp(types$1.question, 1);
};
pp.readToken_numberSign = function() {
  var ecmaVersion = this.options.ecmaVersion;
  var code = 35;
  if (ecmaVersion >= 13) {
    ++this.pos;
    code = this.fullCharCodeAtPos();
    if (isIdentifierStart(code, true) || code === 92) {
      return this.finishToken(types$1.privateId, this.readWord1());
    }
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types$1.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types$1.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types$1.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types$1.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types$1.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types$1.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types$1.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types$1.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types$1.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types$1.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types$1.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types$1.regexp, { pattern, flags, value });
};
pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types$1.num, val);
};
pp.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types$1.num, val);
};
pp.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
pp.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else if (ch === 8232 || ch === 8233) {
      if (this.options.ecmaVersion < 10) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
      if (this.options.locations) {
        this.curLine++;
        this.lineStart = this.pos;
      }
    } else {
      if (isNewLine(ch)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types$1.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types$1.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types$1.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types$1.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(
          this.pos - 1,
          "Invalid escape sequence"
        );
      }
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n;
};
pp.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp.readWord = function() {
  var word = this.readWord1();
  var type = types$1.name;
  if (this.keywords.test(word)) {
    type = keywords[word];
  }
  return this.finishToken(type, word);
};
var version = "8.11.2";
Parser.acorn = {
  Parser,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types$1,
  keywordTypes: keywords,
  TokContext,
  tokContexts: types,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse3(input, options) {
  return Parser.parse(input, options);
}
function parseExpressionAt2(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options);
}
function tokenizer2(input, options) {
  return Parser.tokenizer(input, options);
}
export {
  Node,
  Parser,
  Position,
  SourceLocation,
  TokContext,
  Token,
  TokenType,
  defaultOptions,
  getLineInfo,
  isIdentifierChar,
  isIdentifierStart,
  isNewLine,
  keywords as keywordTypes,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace,
  parse3 as parse,
  parseExpressionAt2 as parseExpressionAt,
  types as tokContexts,
  types$1 as tokTypes,
  tokenizer2 as tokenizer,
  version
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvYWNvcm4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxyXG52YXIgYXN0cmFsSWRlbnRpZmllckNvZGVzID0gWzUwOSwgMCwgMjI3LCAwLCAxNTAsIDQsIDI5NCwgOSwgMTM2OCwgMiwgMiwgMSwgNiwgMywgNDEsIDIsIDUsIDAsIDE2NiwgMSwgNTc0LCAzLCA5LCA5LCAzNzAsIDEsIDgxLCAyLCA3MSwgMTAsIDUwLCAzLCAxMjMsIDIsIDU0LCAxNCwgMzIsIDEwLCAzLCAxLCAxMSwgMywgNDYsIDEwLCA4LCAwLCA0NiwgOSwgNywgMiwgMzcsIDEzLCAyLCA5LCA2LCAxLCA0NSwgMCwgMTMsIDIsIDQ5LCAxMywgOSwgMywgMiwgMTEsIDgzLCAxMSwgNywgMCwgMywgMCwgMTU4LCAxMSwgNiwgOSwgNywgMywgNTYsIDEsIDIsIDYsIDMsIDEsIDMsIDIsIDEwLCAwLCAxMSwgMSwgMywgNiwgNCwgNCwgMTkzLCAxNywgMTAsIDksIDUsIDAsIDgyLCAxOSwgMTMsIDksIDIxNCwgNiwgMywgOCwgMjgsIDEsIDgzLCAxNiwgMTYsIDksIDgyLCAxMiwgOSwgOSwgODQsIDE0LCA1LCA5LCAyNDMsIDE0LCAxNjYsIDksIDcxLCA1LCAyLCAxLCAzLCAzLCAyLCAwLCAyLCAxLCAxMywgOSwgMTIwLCA2LCAzLCA2LCA0LCAwLCAyOSwgOSwgNDEsIDYsIDIsIDMsIDksIDAsIDEwLCAxMCwgNDcsIDE1LCA0MDYsIDcsIDIsIDcsIDE3LCA5LCA1NywgMjEsIDIsIDEzLCAxMjMsIDUsIDQsIDAsIDIsIDEsIDIsIDYsIDIsIDAsIDksIDksIDQ5LCA0LCAyLCAxLCAyLCA0LCA5LCA5LCAzMzAsIDMsIDEwLCAxLCAyLCAwLCA0OSwgNiwgNCwgNCwgMTQsIDksIDUzNTEsIDAsIDcsIDE0LCAxMzgzNSwgOSwgODcsIDksIDM5LCA0LCA2MCwgNiwgMjYsIDksIDEwMTQsIDAsIDIsIDU0LCA4LCAzLCA4MiwgMCwgMTIsIDEsIDE5NjI4LCAxLCA0NzA2LCA0NSwgMywgMjIsIDU0MywgNCwgNCwgNSwgOSwgNywgMywgNiwgMzEsIDMsIDE0OSwgMiwgMTQxOCwgNDksIDUxMywgNTQsIDUsIDQ5LCA5LCAwLCAxNSwgMCwgMjMsIDQsIDIsIDE0LCAxMzYxLCA2LCAyLCAxNiwgMywgNiwgMiwgMSwgMiwgNCwgMTAxLCAwLCAxNjEsIDYsIDEwLCA5LCAzNTcsIDAsIDYyLCAxMywgNDk5LCAxMywgOTgzLCA2LCAxMTAsIDYsIDYsIDksIDQ3NTksIDksIDc4NzcxOSwgMjM5XTtcclxuXHJcbi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxyXG52YXIgYXN0cmFsSWRlbnRpZmllclN0YXJ0Q29kZXMgPSBbMCwgMTEsIDIsIDI1LCAyLCAxOCwgMiwgMSwgMiwgMTQsIDMsIDEzLCAzNSwgMTIyLCA3MCwgNTIsIDI2OCwgMjgsIDQsIDQ4LCA0OCwgMzEsIDE0LCAyOSwgNiwgMzcsIDExLCAyOSwgMywgMzUsIDUsIDcsIDIsIDQsIDQzLCAxNTcsIDE5LCAzNSwgNSwgMzUsIDUsIDM5LCA5LCA1MSwgMTMsIDEwLCAyLCAxNCwgMiwgNiwgMiwgMSwgMiwgMTAsIDIsIDE0LCAyLCA2LCAyLCAxLCA2OCwgMzEwLCAxMCwgMjEsIDExLCA3LCAyNSwgNSwgMiwgNDEsIDIsIDgsIDcwLCA1LCAzLCAwLCAyLCA0MywgMiwgMSwgNCwgMCwgMywgMjIsIDExLCAyMiwgMTAsIDMwLCA2NiwgMTgsIDIsIDEsIDExLCAyMSwgMTEsIDI1LCA3MSwgNTUsIDcsIDEsIDY1LCAwLCAxNiwgMywgMiwgMiwgMiwgMjgsIDQzLCAyOCwgNCwgMjgsIDM2LCA3LCAyLCAyNywgMjgsIDUzLCAxMSwgMjEsIDExLCAxOCwgMTQsIDE3LCAxMTEsIDcyLCA1NiwgNTAsIDE0LCA1MCwgMTQsIDM1LCAzNDksIDQxLCA3LCAxLCA3OSwgMjgsIDExLCAwLCA5LCAyMSwgNDMsIDE3LCA0NywgMjAsIDI4LCAyMiwgMTMsIDUyLCA1OCwgMSwgMywgMCwgMTQsIDQ0LCAzMywgMjQsIDI3LCAzNSwgMzAsIDAsIDMsIDAsIDksIDM0LCA0LCAwLCAxMywgNDcsIDE1LCAzLCAyMiwgMCwgMiwgMCwgMzYsIDE3LCAyLCAyNCwgMjAsIDEsIDY0LCA2LCAyLCAwLCAyLCAzLCAyLCAxNCwgMiwgOSwgOCwgNDYsIDM5LCA3LCAzLCAxLCAzLCAyMSwgMiwgNiwgMiwgMSwgMiwgNCwgNCwgMCwgMTksIDAsIDEzLCA0LCAxNTksIDUyLCAxOSwgMywgMjEsIDIsIDMxLCA0NywgMjEsIDEsIDIsIDAsIDE4NSwgNDYsIDQyLCAzLCAzNywgNDcsIDIxLCAwLCA2MCwgNDIsIDE0LCAwLCA3MiwgMjYsIDM4LCA2LCAxODYsIDQzLCAxMTcsIDYzLCAzMiwgNywgMywgMCwgMywgNywgMiwgMSwgMiwgMjMsIDE2LCAwLCAyLCAwLCA5NSwgNywgMywgMzgsIDE3LCAwLCAyLCAwLCAyOSwgMCwgMTEsIDM5LCA4LCAwLCAyMiwgMCwgMTIsIDQ1LCAyMCwgMCwgMTksIDcyLCAyNjQsIDgsIDIsIDM2LCAxOCwgMCwgNTAsIDI5LCAxMTMsIDYsIDIsIDEsIDIsIDM3LCAyMiwgMCwgMjYsIDUsIDIsIDEsIDIsIDMxLCAxNSwgMCwgMzI4LCAxOCwgMTYsIDAsIDIsIDEyLCAyLCAzMywgMTI1LCAwLCA4MCwgOTIxLCAxMDMsIDExMCwgMTgsIDE5NSwgMjYzNywgOTYsIDE2LCAxMDcxLCAxOCwgNSwgNDAyNiwgNTgyLCA4NjM0LCA1NjgsIDgsIDMwLCAxOCwgNzgsIDE4LCAyOSwgMTksIDQ3LCAxNywgMywgMzIsIDIwLCA2LCAxOCwgNjg5LCA2MywgMTI5LCA3NCwgNiwgMCwgNjcsIDEyLCA2NSwgMSwgMiwgMCwgMjksIDYxMzUsIDksIDEyMzcsIDQzLCA4LCA4OTM2LCAzLCAyLCA2LCAyLCAxLCAyLCAyOTAsIDE2LCAwLCAzMCwgMiwgMywgMCwgMTUsIDMsIDksIDM5NSwgMjMwOSwgMTA2LCA2LCAxMiwgNCwgOCwgOCwgOSwgNTk5MSwgODQsIDIsIDcwLCAyLCAxLCAzLCAwLCAzLCAxLCAzLCAzLCAyLCAxMSwgMiwgMCwgMiwgNiwgMiwgNjQsIDIsIDMsIDMsIDcsIDIsIDYsIDIsIDI3LCAyLCAzLCAyLCA0LCAyLCAwLCA0LCA2LCAyLCAzMzksIDMsIDI0LCAyLCAyNCwgMiwgMzAsIDIsIDI0LCAyLCAzMCwgMiwgMjQsIDIsIDMwLCAyLCAyNCwgMiwgMzAsIDIsIDI0LCAyLCA3LCAxODQ1LCAzMCwgNywgNSwgMjYyLCA2MSwgMTQ3LCA0NCwgMTEsIDYsIDE3LCAwLCAzMjIsIDI5LCAxOSwgNDMsIDQ4NSwgMjcsIDc1NywgNiwgMiwgMywgMiwgMSwgMiwgMTQsIDIsIDE5NiwgNjAsIDY3LCA4LCAwLCAxMjA1LCAzLCAyLCAyNiwgMiwgMSwgMiwgMCwgMywgMCwgMiwgOSwgMiwgMywgMiwgMCwgMiwgMCwgNywgMCwgNSwgMCwgMiwgMCwgMiwgMCwgMiwgMiwgMiwgMSwgMiwgMCwgMywgMCwgMiwgMCwgMiwgMCwgMiwgMCwgMiwgMCwgMiwgMSwgMiwgMCwgMywgMywgMiwgNiwgMiwgMywgMiwgMywgMiwgMCwgMiwgOSwgMiwgMTYsIDYsIDIsIDIsIDQsIDIsIDE2LCA0NDIxLCA0MjcxOSwgMzMsIDQxNTMsIDcsIDIyMSwgMywgNTc2MSwgMTUsIDc0NzIsIDE2LCA2MjEsIDI0NjcsIDU0MSwgMTUwNywgNDkzOCwgNiwgNDE5MV07XHJcblxyXG4vLyBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZC4gRG8gbm90IG1vZGlmeSBtYW51YWxseSFcclxudmFyIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzID0gXCJcXHUyMDBjXFx1MjAwZFxceGI3XFx1MDMwMC1cXHUwMzZmXFx1MDM4N1xcdTA0ODMtXFx1MDQ4N1xcdTA1OTEtXFx1MDViZFxcdTA1YmZcXHUwNWMxXFx1MDVjMlxcdTA1YzRcXHUwNWM1XFx1MDVjN1xcdTA2MTAtXFx1MDYxYVxcdTA2NGItXFx1MDY2OVxcdTA2NzBcXHUwNmQ2LVxcdTA2ZGNcXHUwNmRmLVxcdTA2ZTRcXHUwNmU3XFx1MDZlOFxcdTA2ZWEtXFx1MDZlZFxcdTA2ZjAtXFx1MDZmOVxcdTA3MTFcXHUwNzMwLVxcdTA3NGFcXHUwN2E2LVxcdTA3YjBcXHUwN2MwLVxcdTA3YzlcXHUwN2ViLVxcdTA3ZjNcXHUwN2ZkXFx1MDgxNi1cXHUwODE5XFx1MDgxYi1cXHUwODIzXFx1MDgyNS1cXHUwODI3XFx1MDgyOS1cXHUwODJkXFx1MDg1OS1cXHUwODViXFx1MDg5OC1cXHUwODlmXFx1MDhjYS1cXHUwOGUxXFx1MDhlMy1cXHUwOTAzXFx1MDkzYS1cXHUwOTNjXFx1MDkzZS1cXHUwOTRmXFx1MDk1MS1cXHUwOTU3XFx1MDk2MlxcdTA5NjNcXHUwOTY2LVxcdTA5NmZcXHUwOTgxLVxcdTA5ODNcXHUwOWJjXFx1MDliZS1cXHUwOWM0XFx1MDljN1xcdTA5YzhcXHUwOWNiLVxcdTA5Y2RcXHUwOWQ3XFx1MDllMlxcdTA5ZTNcXHUwOWU2LVxcdTA5ZWZcXHUwOWZlXFx1MGEwMS1cXHUwYTAzXFx1MGEzY1xcdTBhM2UtXFx1MGE0MlxcdTBhNDdcXHUwYTQ4XFx1MGE0Yi1cXHUwYTRkXFx1MGE1MVxcdTBhNjYtXFx1MGE3MVxcdTBhNzVcXHUwYTgxLVxcdTBhODNcXHUwYWJjXFx1MGFiZS1cXHUwYWM1XFx1MGFjNy1cXHUwYWM5XFx1MGFjYi1cXHUwYWNkXFx1MGFlMlxcdTBhZTNcXHUwYWU2LVxcdTBhZWZcXHUwYWZhLVxcdTBhZmZcXHUwYjAxLVxcdTBiMDNcXHUwYjNjXFx1MGIzZS1cXHUwYjQ0XFx1MGI0N1xcdTBiNDhcXHUwYjRiLVxcdTBiNGRcXHUwYjU1LVxcdTBiNTdcXHUwYjYyXFx1MGI2M1xcdTBiNjYtXFx1MGI2ZlxcdTBiODJcXHUwYmJlLVxcdTBiYzJcXHUwYmM2LVxcdTBiYzhcXHUwYmNhLVxcdTBiY2RcXHUwYmQ3XFx1MGJlNi1cXHUwYmVmXFx1MGMwMC1cXHUwYzA0XFx1MGMzY1xcdTBjM2UtXFx1MGM0NFxcdTBjNDYtXFx1MGM0OFxcdTBjNGEtXFx1MGM0ZFxcdTBjNTVcXHUwYzU2XFx1MGM2MlxcdTBjNjNcXHUwYzY2LVxcdTBjNmZcXHUwYzgxLVxcdTBjODNcXHUwY2JjXFx1MGNiZS1cXHUwY2M0XFx1MGNjNi1cXHUwY2M4XFx1MGNjYS1cXHUwY2NkXFx1MGNkNVxcdTBjZDZcXHUwY2UyXFx1MGNlM1xcdTBjZTYtXFx1MGNlZlxcdTBjZjNcXHUwZDAwLVxcdTBkMDNcXHUwZDNiXFx1MGQzY1xcdTBkM2UtXFx1MGQ0NFxcdTBkNDYtXFx1MGQ0OFxcdTBkNGEtXFx1MGQ0ZFxcdTBkNTdcXHUwZDYyXFx1MGQ2M1xcdTBkNjYtXFx1MGQ2ZlxcdTBkODEtXFx1MGQ4M1xcdTBkY2FcXHUwZGNmLVxcdTBkZDRcXHUwZGQ2XFx1MGRkOC1cXHUwZGRmXFx1MGRlNi1cXHUwZGVmXFx1MGRmMlxcdTBkZjNcXHUwZTMxXFx1MGUzNC1cXHUwZTNhXFx1MGU0Ny1cXHUwZTRlXFx1MGU1MC1cXHUwZTU5XFx1MGViMVxcdTBlYjQtXFx1MGViY1xcdTBlYzgtXFx1MGVjZVxcdTBlZDAtXFx1MGVkOVxcdTBmMThcXHUwZjE5XFx1MGYyMC1cXHUwZjI5XFx1MGYzNVxcdTBmMzdcXHUwZjM5XFx1MGYzZVxcdTBmM2ZcXHUwZjcxLVxcdTBmODRcXHUwZjg2XFx1MGY4N1xcdTBmOGQtXFx1MGY5N1xcdTBmOTktXFx1MGZiY1xcdTBmYzZcXHUxMDJiLVxcdTEwM2VcXHUxMDQwLVxcdTEwNDlcXHUxMDU2LVxcdTEwNTlcXHUxMDVlLVxcdTEwNjBcXHUxMDYyLVxcdTEwNjRcXHUxMDY3LVxcdTEwNmRcXHUxMDcxLVxcdTEwNzRcXHUxMDgyLVxcdTEwOGRcXHUxMDhmLVxcdTEwOWRcXHUxMzVkLVxcdTEzNWZcXHUxMzY5LVxcdTEzNzFcXHUxNzEyLVxcdTE3MTVcXHUxNzMyLVxcdTE3MzRcXHUxNzUyXFx1MTc1M1xcdTE3NzJcXHUxNzczXFx1MTdiNC1cXHUxN2QzXFx1MTdkZFxcdTE3ZTAtXFx1MTdlOVxcdTE4MGItXFx1MTgwZFxcdTE4MGYtXFx1MTgxOVxcdTE4YTlcXHUxOTIwLVxcdTE5MmJcXHUxOTMwLVxcdTE5M2JcXHUxOTQ2LVxcdTE5NGZcXHUxOWQwLVxcdTE5ZGFcXHUxYTE3LVxcdTFhMWJcXHUxYTU1LVxcdTFhNWVcXHUxYTYwLVxcdTFhN2NcXHUxYTdmLVxcdTFhODlcXHUxYTkwLVxcdTFhOTlcXHUxYWIwLVxcdTFhYmRcXHUxYWJmLVxcdTFhY2VcXHUxYjAwLVxcdTFiMDRcXHUxYjM0LVxcdTFiNDRcXHUxYjUwLVxcdTFiNTlcXHUxYjZiLVxcdTFiNzNcXHUxYjgwLVxcdTFiODJcXHUxYmExLVxcdTFiYWRcXHUxYmIwLVxcdTFiYjlcXHUxYmU2LVxcdTFiZjNcXHUxYzI0LVxcdTFjMzdcXHUxYzQwLVxcdTFjNDlcXHUxYzUwLVxcdTFjNTlcXHUxY2QwLVxcdTFjZDJcXHUxY2Q0LVxcdTFjZThcXHUxY2VkXFx1MWNmNFxcdTFjZjctXFx1MWNmOVxcdTFkYzAtXFx1MWRmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDU0XFx1MjBkMC1cXHUyMGRjXFx1MjBlMVxcdTIwZTUtXFx1MjBmMFxcdTJjZWYtXFx1MmNmMVxcdTJkN2ZcXHUyZGUwLVxcdTJkZmZcXHUzMDJhLVxcdTMwMmZcXHUzMDk5XFx1MzA5YVxcdTMwZmJcXHVhNjIwLVxcdWE2MjlcXHVhNjZmXFx1YTY3NC1cXHVhNjdkXFx1YTY5ZVxcdWE2OWZcXHVhNmYwXFx1YTZmMVxcdWE4MDJcXHVhODA2XFx1YTgwYlxcdWE4MjMtXFx1YTgyN1xcdWE4MmNcXHVhODgwXFx1YTg4MVxcdWE4YjQtXFx1YThjNVxcdWE4ZDAtXFx1YThkOVxcdWE4ZTAtXFx1YThmMVxcdWE4ZmYtXFx1YTkwOVxcdWE5MjYtXFx1YTkyZFxcdWE5NDctXFx1YTk1M1xcdWE5ODAtXFx1YTk4M1xcdWE5YjMtXFx1YTljMFxcdWE5ZDAtXFx1YTlkOVxcdWE5ZTVcXHVhOWYwLVxcdWE5ZjlcXHVhYTI5LVxcdWFhMzZcXHVhYTQzXFx1YWE0Y1xcdWFhNGRcXHVhYTUwLVxcdWFhNTlcXHVhYTdiLVxcdWFhN2RcXHVhYWIwXFx1YWFiMi1cXHVhYWI0XFx1YWFiN1xcdWFhYjhcXHVhYWJlXFx1YWFiZlxcdWFhYzFcXHVhYWViLVxcdWFhZWZcXHVhYWY1XFx1YWFmNlxcdWFiZTMtXFx1YWJlYVxcdWFiZWNcXHVhYmVkXFx1YWJmMC1cXHVhYmY5XFx1ZmIxZVxcdWZlMDAtXFx1ZmUwZlxcdWZlMjAtXFx1ZmUyZlxcdWZlMzNcXHVmZTM0XFx1ZmU0ZC1cXHVmZTRmXFx1ZmYxMC1cXHVmZjE5XFx1ZmYzZlxcdWZmNjVcIjtcclxuXHJcbi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxyXG52YXIgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyA9IFwiXFx4YWFcXHhiNVxceGJhXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyYzFcXHUwMmM2LVxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVjXFx1MDJlZVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3YS1cXHUwMzdkXFx1MDM3ZlxcdTAzODZcXHUwMzg4LVxcdTAzOGFcXHUwMzhjXFx1MDM4ZS1cXHUwM2ExXFx1MDNhMy1cXHUwM2Y1XFx1MDNmNy1cXHUwNDgxXFx1MDQ4YS1cXHUwNTJmXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjAtXFx1MDU4OFxcdTA1ZDAtXFx1MDVlYVxcdTA1ZWYtXFx1MDVmMlxcdTA2MjAtXFx1MDY0YVxcdTA2NmVcXHUwNjZmXFx1MDY3MS1cXHUwNmQzXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA2ZmNcXHUwNmZmXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGQtXFx1MDdhNVxcdTA3YjFcXHUwN2NhLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmFcXHUwODAwLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwODYwLVxcdTA4NmFcXHUwODcwLVxcdTA4ODdcXHUwODg5LVxcdTA4OGVcXHUwOGEwLVxcdTA4YzlcXHUwOTA0LVxcdTA5MzlcXHUwOTNkXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk4MFxcdTA5ODUtXFx1MDk4Y1xcdTA5OGZcXHUwOTkwXFx1MDk5My1cXHUwOWE4XFx1MDlhYS1cXHUwOWIwXFx1MDliMlxcdTA5YjYtXFx1MDliOVxcdTA5YmRcXHUwOWNlXFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWYwXFx1MDlmMVxcdTA5ZmNcXHUwYTA1LVxcdTBhMGFcXHUwYTBmXFx1MGExMFxcdTBhMTMtXFx1MGEyOFxcdTBhMmEtXFx1MGEzMFxcdTBhMzJcXHUwYTMzXFx1MGEzNVxcdTBhMzZcXHUwYTM4XFx1MGEzOVxcdTBhNTktXFx1MGE1Y1xcdTBhNWVcXHUwYTcyLVxcdTBhNzRcXHUwYTg1LVxcdTBhOGRcXHUwYThmLVxcdTBhOTFcXHUwYTkzLVxcdTBhYThcXHUwYWFhLVxcdTBhYjBcXHUwYWIyXFx1MGFiM1xcdTBhYjUtXFx1MGFiOVxcdTBhYmRcXHUwYWQwXFx1MGFlMFxcdTBhZTFcXHUwYWY5XFx1MGIwNS1cXHUwYjBjXFx1MGIwZlxcdTBiMTBcXHUwYjEzLVxcdTBiMjhcXHUwYjJhLVxcdTBiMzBcXHUwYjMyXFx1MGIzM1xcdTBiMzUtXFx1MGIzOVxcdTBiM2RcXHUwYjVjXFx1MGI1ZFxcdTBiNWYtXFx1MGI2MVxcdTBiNzFcXHUwYjgzXFx1MGI4NS1cXHUwYjhhXFx1MGI4ZS1cXHUwYjkwXFx1MGI5Mi1cXHUwYjk1XFx1MGI5OVxcdTBiOWFcXHUwYjljXFx1MGI5ZVxcdTBiOWZcXHUwYmEzXFx1MGJhNFxcdTBiYTgtXFx1MGJhYVxcdTBiYWUtXFx1MGJiOVxcdTBiZDBcXHUwYzA1LVxcdTBjMGNcXHUwYzBlLVxcdTBjMTBcXHUwYzEyLVxcdTBjMjhcXHUwYzJhLVxcdTBjMzlcXHUwYzNkXFx1MGM1OC1cXHUwYzVhXFx1MGM1ZFxcdTBjNjBcXHUwYzYxXFx1MGM4MFxcdTBjODUtXFx1MGM4Y1xcdTBjOGUtXFx1MGM5MFxcdTBjOTItXFx1MGNhOFxcdTBjYWEtXFx1MGNiM1xcdTBjYjUtXFx1MGNiOVxcdTBjYmRcXHUwY2RkXFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNmMVxcdTBjZjJcXHUwZDA0LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkXFx1MGQ0ZVxcdTBkNTQtXFx1MGQ1NlxcdTBkNWYtXFx1MGQ2MVxcdTBkN2EtXFx1MGQ3ZlxcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODYtXFx1MGU4YVxcdTBlOGMtXFx1MGVhM1xcdTBlYTVcXHUwZWE3LVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkYy1cXHUwZWRmXFx1MGYwMFxcdTBmNDAtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmODgtXFx1MGY4Y1xcdTEwMDAtXFx1MTAyYVxcdTEwM2ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVhLVxcdTEwNWRcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZlLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhlXFx1MTBhMC1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEwZmFcXHUxMGZjLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNVxcdTEzZjgtXFx1MTNmZFxcdTE0MDEtXFx1MTY2Y1xcdTE2NmYtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZlYVxcdTE2ZWUtXFx1MTZmOFxcdTE3MDAtXFx1MTcxMVxcdTE3MWYtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3ZDdcXHUxN2RjXFx1MTgyMC1cXHUxODc4XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxZVxcdTE5NTAtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YjAtXFx1MTljOVxcdTFhMDAtXFx1MWExNlxcdTFhMjAtXFx1MWE1NFxcdTFhYTdcXHUxYjA1LVxcdTFiMzNcXHUxYjQ1LVxcdTFiNGNcXHUxYjgzLVxcdTFiYTBcXHUxYmFlXFx1MWJhZlxcdTFiYmEtXFx1MWJlNVxcdTFjMDAtXFx1MWMyM1xcdTFjNGQtXFx1MWM0ZlxcdTFjNWEtXFx1MWM3ZFxcdTFjODAtXFx1MWM4OFxcdTFjOTAtXFx1MWNiYVxcdTFjYmQtXFx1MWNiZlxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmM1xcdTFjZjVcXHUxY2Y2XFx1MWNmYVxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTYwLVxcdTIxODhcXHUyYzAwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWItXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZlxcdTMxMzEtXFx1MzE4ZVxcdTMxYTAtXFx1MzFiZlxcdTMxZjAtXFx1MzFmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTRmZFxcdWE1MDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYxZlxcdWE2MmFcXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY3Zi1cXHVhNjlkXFx1YTZhMC1cXHVhNmVmXFx1YTcxNy1cXHVhNzFmXFx1YTcyMi1cXHVhNzg4XFx1YTc4Yi1cXHVhN2NhXFx1YTdkMFxcdWE3ZDFcXHVhN2QzXFx1YTdkNS1cXHVhN2Q5XFx1YTdmMi1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODIyXFx1YTg0MC1cXHVhODczXFx1YTg4Mi1cXHVhOGIzXFx1YThmMi1cXHVhOGY3XFx1YThmYlxcdWE4ZmRcXHVhOGZlXFx1YTkwYS1cXHVhOTI1XFx1YTkzMC1cXHVhOTQ2XFx1YTk2MC1cXHVhOTdjXFx1YTk4NC1cXHVhOWIyXFx1YTljZlxcdWE5ZTAtXFx1YTllNFxcdWE5ZTYtXFx1YTllZlxcdWE5ZmEtXFx1YTlmZVxcdWFhMDAtXFx1YWEyOFxcdWFhNDAtXFx1YWE0MlxcdWFhNDQtXFx1YWE0YlxcdWFhNjAtXFx1YWE3NlxcdWFhN2FcXHVhYTdlLVxcdWFhYWZcXHVhYWIxXFx1YWFiNVxcdWFhYjZcXHVhYWI5LVxcdWFhYmRcXHVhYWMwXFx1YWFjMlxcdWFhZGItXFx1YWFkZFxcdWFhZTAtXFx1YWFlYVxcdWFhZjItXFx1YWFmNFxcdWFiMDEtXFx1YWIwNlxcdWFiMDktXFx1YWIwZVxcdWFiMTEtXFx1YWIxNlxcdWFiMjAtXFx1YWIyNlxcdWFiMjgtXFx1YWIyZVxcdWFiMzAtXFx1YWI1YVxcdWFiNWMtXFx1YWI2OVxcdWFiNzAtXFx1YWJlMlxcdWFjMDAtXFx1ZDdhM1xcdWQ3YjAtXFx1ZDdjNlxcdWQ3Y2ItXFx1ZDdmYlxcdWY5MDAtXFx1ZmE2ZFxcdWZhNzAtXFx1ZmFkOVxcdWZiMDAtXFx1ZmIwNlxcdWZiMTMtXFx1ZmIxN1xcdWZiMWRcXHVmYjFmLVxcdWZiMjhcXHVmYjJhLVxcdWZiMzZcXHVmYjM4LVxcdWZiM2NcXHVmYjNlXFx1ZmI0MFxcdWZiNDFcXHVmYjQzXFx1ZmI0NFxcdWZiNDYtXFx1ZmJiMVxcdWZiZDMtXFx1ZmQzZFxcdWZkNTAtXFx1ZmQ4ZlxcdWZkOTItXFx1ZmRjN1xcdWZkZjAtXFx1ZmRmYlxcdWZlNzAtXFx1ZmU3NFxcdWZlNzYtXFx1ZmVmY1xcdWZmMjEtXFx1ZmYzYVxcdWZmNDEtXFx1ZmY1YVxcdWZmNjYtXFx1ZmZiZVxcdWZmYzItXFx1ZmZjN1xcdWZmY2EtXFx1ZmZjZlxcdWZmZDItXFx1ZmZkN1xcdWZmZGEtXFx1ZmZkY1wiO1xyXG5cclxuLy8gVGhlc2UgYXJlIGEgcnVuLWxlbmd0aCBhbmQgb2Zmc2V0IGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlXHJcbi8vID4weGZmZmYgY29kZSBwb2ludHMgdGhhdCBhcmUgYSB2YWxpZCBwYXJ0IG9mIGlkZW50aWZpZXJzLiBUaGVcclxuLy8gb2Zmc2V0IHN0YXJ0cyBhdCAweDEwMDAwLCBhbmQgZWFjaCBwYWlyIG9mIG51bWJlcnMgcmVwcmVzZW50cyBhblxyXG4vLyBvZmZzZXQgdG8gdGhlIG5leHQgcmFuZ2UsIGFuZCB0aGVuIGEgc2l6ZSBvZiB0aGUgcmFuZ2UuXHJcblxyXG4vLyBSZXNlcnZlZCB3b3JkIGxpc3RzIGZvciB2YXJpb3VzIGRpYWxlY3RzIG9mIHRoZSBsYW5ndWFnZVxyXG5cclxudmFyIHJlc2VydmVkV29yZHMgPSB7XHJcbiAgMzogXCJhYnN0cmFjdCBib29sZWFuIGJ5dGUgY2hhciBjbGFzcyBkb3VibGUgZW51bSBleHBvcnQgZXh0ZW5kcyBmaW5hbCBmbG9hdCBnb3RvIGltcGxlbWVudHMgaW1wb3J0IGludCBpbnRlcmZhY2UgbG9uZyBuYXRpdmUgcGFja2FnZSBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgc2hvcnQgc3RhdGljIHN1cGVyIHN5bmNocm9uaXplZCB0aHJvd3MgdHJhbnNpZW50IHZvbGF0aWxlXCIsXHJcbiAgNTogXCJjbGFzcyBlbnVtIGV4dGVuZHMgc3VwZXIgY29uc3QgZXhwb3J0IGltcG9ydFwiLFxyXG4gIDY6IFwiZW51bVwiLFxyXG4gIHN0cmljdDogXCJpbXBsZW1lbnRzIGludGVyZmFjZSBsZXQgcGFja2FnZSBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgc3RhdGljIHlpZWxkXCIsXHJcbiAgc3RyaWN0QmluZDogXCJldmFsIGFyZ3VtZW50c1wiXHJcbn07XHJcblxyXG4vLyBBbmQgdGhlIGtleXdvcmRzXHJcblxyXG52YXIgZWNtYTVBbmRMZXNzS2V5d29yZHMgPSBcImJyZWFrIGNhc2UgY2F0Y2ggY29udGludWUgZGVidWdnZXIgZGVmYXVsdCBkbyBlbHNlIGZpbmFsbHkgZm9yIGZ1bmN0aW9uIGlmIHJldHVybiBzd2l0Y2ggdGhyb3cgdHJ5IHZhciB3aGlsZSB3aXRoIG51bGwgdHJ1ZSBmYWxzZSBpbnN0YW5jZW9mIHR5cGVvZiB2b2lkIGRlbGV0ZSBuZXcgaW4gdGhpc1wiO1xyXG5cclxudmFyIGtleXdvcmRzJDEgPSB7XHJcbiAgNTogZWNtYTVBbmRMZXNzS2V5d29yZHMsXHJcbiAgXCI1bW9kdWxlXCI6IGVjbWE1QW5kTGVzc0tleXdvcmRzICsgXCIgZXhwb3J0IGltcG9ydFwiLFxyXG4gIDY6IGVjbWE1QW5kTGVzc0tleXdvcmRzICsgXCIgY29uc3QgY2xhc3MgZXh0ZW5kcyBleHBvcnQgaW1wb3J0IHN1cGVyXCJcclxufTtcclxuXHJcbnZhciBrZXl3b3JkUmVsYXRpb25hbE9wZXJhdG9yID0gL15pbihzdGFuY2VvZik/JC87XHJcblxyXG4vLyAjIyBDaGFyYWN0ZXIgY2F0ZWdvcmllc1xyXG5cclxudmFyIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0ID0gbmV3IFJlZ0V4cChcIltcIiArIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgKyBcIl1cIik7XHJcbnZhciBub25BU0NJSWlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiW1wiICsgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzICsgXCJdXCIpO1xyXG5cclxuLy8gVGhpcyBoYXMgYSBjb21wbGV4aXR5IGxpbmVhciB0byB0aGUgdmFsdWUgb2YgdGhlIGNvZGUuIFRoZVxyXG4vLyBhc3N1bXB0aW9uIGlzIHRoYXQgbG9va2luZyB1cCBhc3RyYWwgaWRlbnRpZmllciBjaGFyYWN0ZXJzIGlzXHJcbi8vIHJhcmUuXHJcbmZ1bmN0aW9uIGlzSW5Bc3RyYWxTZXQoY29kZSwgc2V0KSB7XHJcbiAgdmFyIHBvcyA9IDB4MTAwMDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgIHBvcyArPSBzZXRbaV07XHJcbiAgICBpZiAocG9zID4gY29kZSkgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgcG9zICs9IHNldFtpICsgMV07XHJcbiAgICBpZiAocG9zID49IGNvZGUpIHsgcmV0dXJuIHRydWUgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLy8gVGVzdCB3aGV0aGVyIGEgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUgc3RhcnRzIGFuIGlkZW50aWZpZXIuXHJcblxyXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlLCBhc3RyYWwpIHtcclxuICBpZiAoY29kZSA8IDY1KSB7IHJldHVybiBjb2RlID09PSAzNiB9XHJcbiAgaWYgKGNvZGUgPCA5MSkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgaWYgKGNvZGUgPCA5NykgeyByZXR1cm4gY29kZSA9PT0gOTUgfVxyXG4gIGlmIChjb2RlIDwgMTIzKSB7IHJldHVybiB0cnVlIH1cclxuICBpZiAoY29kZSA8PSAweGZmZmYpIHsgcmV0dXJuIGNvZGUgPj0gMHhhYSAmJiBub25BU0NJSWlkZW50aWZpZXJTdGFydC50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIH1cclxuICBpZiAoYXN0cmFsID09PSBmYWxzZSkgeyByZXR1cm4gZmFsc2UgfVxyXG4gIHJldHVybiBpc0luQXN0cmFsU2V0KGNvZGUsIGFzdHJhbElkZW50aWZpZXJTdGFydENvZGVzKVxyXG59XHJcblxyXG4vLyBUZXN0IHdoZXRoZXIgYSBnaXZlbiBjaGFyYWN0ZXIgaXMgcGFydCBvZiBhbiBpZGVudGlmaWVyLlxyXG5cclxuZnVuY3Rpb24gaXNJZGVudGlmaWVyQ2hhcihjb2RlLCBhc3RyYWwpIHtcclxuICBpZiAoY29kZSA8IDQ4KSB7IHJldHVybiBjb2RlID09PSAzNiB9XHJcbiAgaWYgKGNvZGUgPCA1OCkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgaWYgKGNvZGUgPCA2NSkgeyByZXR1cm4gZmFsc2UgfVxyXG4gIGlmIChjb2RlIDwgOTEpIHsgcmV0dXJuIHRydWUgfVxyXG4gIGlmIChjb2RlIDwgOTcpIHsgcmV0dXJuIGNvZGUgPT09IDk1IH1cclxuICBpZiAoY29kZSA8IDEyMykgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgaWYgKGNvZGUgPD0gMHhmZmZmKSB7IHJldHVybiBjb2RlID49IDB4YWEgJiYgbm9uQVNDSUlpZGVudGlmaWVyLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSkgfVxyXG4gIGlmIChhc3RyYWwgPT09IGZhbHNlKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgcmV0dXJuIGlzSW5Bc3RyYWxTZXQoY29kZSwgYXN0cmFsSWRlbnRpZmllclN0YXJ0Q29kZXMpIHx8IGlzSW5Bc3RyYWxTZXQoY29kZSwgYXN0cmFsSWRlbnRpZmllckNvZGVzKVxyXG59XHJcblxyXG4vLyAjIyBUb2tlbiB0eXBlc1xyXG5cclxuLy8gVGhlIGFzc2lnbm1lbnQgb2YgZmluZS1ncmFpbmVkLCBpbmZvcm1hdGlvbi1jYXJyeWluZyB0eXBlIG9iamVjdHNcclxuLy8gYWxsb3dzIHRoZSB0b2tlbml6ZXIgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGl0IGhhcyBhYm91dCBhXHJcbi8vIHRva2VuIGluIGEgd2F5IHRoYXQgaXMgdmVyeSBjaGVhcCBmb3IgdGhlIHBhcnNlciB0byBsb29rIHVwLlxyXG5cclxuLy8gQWxsIHRva2VuIHR5cGUgdmFyaWFibGVzIHN0YXJ0IHdpdGggYW4gdW5kZXJzY29yZSwgdG8gbWFrZSB0aGVtXHJcbi8vIGVhc3kgdG8gcmVjb2duaXplLlxyXG5cclxuLy8gVGhlIGBiZWZvcmVFeHByYCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIHJlZ3VsYXJcclxuLy8gZXhwcmVzc2lvbnMgYW5kIGRpdmlzaW9ucy4gSXQgaXMgc2V0IG9uIGFsbCB0b2tlbiB0eXBlcyB0aGF0IGNhblxyXG4vLyBiZSBmb2xsb3dlZCBieSBhbiBleHByZXNzaW9uICh0aHVzLCBhIHNsYXNoIGFmdGVyIHRoZW0gd291bGQgYmUgYVxyXG4vLyByZWd1bGFyIGV4cHJlc3Npb24pLlxyXG4vL1xyXG4vLyBUaGUgYHN0YXJ0c0V4cHJgIHByb3BlcnR5IGlzIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHRva2VuIGVuZHMgYVxyXG4vLyBgeWllbGRgIGV4cHJlc3Npb24uIEl0IGlzIHNldCBvbiBhbGwgdG9rZW4gdHlwZXMgdGhhdCBlaXRoZXIgY2FuXHJcbi8vIGRpcmVjdGx5IHN0YXJ0IGFuIGV4cHJlc3Npb24gKGxpa2UgYSBxdW90YXRpb24gbWFyaykgb3IgY2FuXHJcbi8vIGNvbnRpbnVlIGFuIGV4cHJlc3Npb24gKGxpa2UgdGhlIGJvZHkgb2YgYSBzdHJpbmcpLlxyXG4vL1xyXG4vLyBgaXNMb29wYCBtYXJrcyBhIGtleXdvcmQgYXMgc3RhcnRpbmcgYSBsb29wLCB3aGljaCBpcyBpbXBvcnRhbnRcclxuLy8gdG8ga25vdyB3aGVuIHBhcnNpbmcgYSBsYWJlbCwgaW4gb3JkZXIgdG8gYWxsb3cgb3IgZGlzYWxsb3dcclxuLy8gY29udGludWUganVtcHMgdG8gdGhhdCBsYWJlbC5cclxuXHJcbnZhciBUb2tlblR5cGUgPSBmdW5jdGlvbiBUb2tlblR5cGUobGFiZWwsIGNvbmYpIHtcclxuICBpZiAoIGNvbmYgPT09IHZvaWQgMCApIGNvbmYgPSB7fTtcclxuXHJcbiAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gIHRoaXMua2V5d29yZCA9IGNvbmYua2V5d29yZDtcclxuICB0aGlzLmJlZm9yZUV4cHIgPSAhIWNvbmYuYmVmb3JlRXhwcjtcclxuICB0aGlzLnN0YXJ0c0V4cHIgPSAhIWNvbmYuc3RhcnRzRXhwcjtcclxuICB0aGlzLmlzTG9vcCA9ICEhY29uZi5pc0xvb3A7XHJcbiAgdGhpcy5pc0Fzc2lnbiA9ICEhY29uZi5pc0Fzc2lnbjtcclxuICB0aGlzLnByZWZpeCA9ICEhY29uZi5wcmVmaXg7XHJcbiAgdGhpcy5wb3N0Zml4ID0gISFjb25mLnBvc3RmaXg7XHJcbiAgdGhpcy5iaW5vcCA9IGNvbmYuYmlub3AgfHwgbnVsbDtcclxuICB0aGlzLnVwZGF0ZUNvbnRleHQgPSBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYmlub3AobmFtZSwgcHJlYykge1xyXG4gIHJldHVybiBuZXcgVG9rZW5UeXBlKG5hbWUsIHtiZWZvcmVFeHByOiB0cnVlLCBiaW5vcDogcHJlY30pXHJcbn1cclxudmFyIGJlZm9yZUV4cHIgPSB7YmVmb3JlRXhwcjogdHJ1ZX0sIHN0YXJ0c0V4cHIgPSB7c3RhcnRzRXhwcjogdHJ1ZX07XHJcblxyXG4vLyBNYXAga2V5d29yZCBuYW1lcyB0byB0b2tlbiB0eXBlcy5cclxuXHJcbnZhciBrZXl3b3JkcyA9IHt9O1xyXG5cclxuLy8gU3VjY2luY3QgZGVmaW5pdGlvbnMgb2Yga2V5d29yZCB0b2tlbiB0eXBlc1xyXG5mdW5jdGlvbiBrdyhuYW1lLCBvcHRpb25zKSB7XHJcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XHJcblxyXG4gIG9wdGlvbnMua2V5d29yZCA9IG5hbWU7XHJcbiAgcmV0dXJuIGtleXdvcmRzW25hbWVdID0gbmV3IFRva2VuVHlwZShuYW1lLCBvcHRpb25zKVxyXG59XHJcblxyXG52YXIgdHlwZXMkMSA9IHtcclxuICBudW06IG5ldyBUb2tlblR5cGUoXCJudW1cIiwgc3RhcnRzRXhwciksXHJcbiAgcmVnZXhwOiBuZXcgVG9rZW5UeXBlKFwicmVnZXhwXCIsIHN0YXJ0c0V4cHIpLFxyXG4gIHN0cmluZzogbmV3IFRva2VuVHlwZShcInN0cmluZ1wiLCBzdGFydHNFeHByKSxcclxuICBuYW1lOiBuZXcgVG9rZW5UeXBlKFwibmFtZVwiLCBzdGFydHNFeHByKSxcclxuICBwcml2YXRlSWQ6IG5ldyBUb2tlblR5cGUoXCJwcml2YXRlSWRcIiwgc3RhcnRzRXhwciksXHJcbiAgZW9mOiBuZXcgVG9rZW5UeXBlKFwiZW9mXCIpLFxyXG5cclxuICAvLyBQdW5jdHVhdGlvbiB0b2tlbiB0eXBlcy5cclxuICBicmFja2V0TDogbmV3IFRva2VuVHlwZShcIltcIiwge2JlZm9yZUV4cHI6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcclxuICBicmFja2V0UjogbmV3IFRva2VuVHlwZShcIl1cIiksXHJcbiAgYnJhY2VMOiBuZXcgVG9rZW5UeXBlKFwie1wiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxyXG4gIGJyYWNlUjogbmV3IFRva2VuVHlwZShcIn1cIiksXHJcbiAgcGFyZW5MOiBuZXcgVG9rZW5UeXBlKFwiKFwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxyXG4gIHBhcmVuUjogbmV3IFRva2VuVHlwZShcIilcIiksXHJcbiAgY29tbWE6IG5ldyBUb2tlblR5cGUoXCIsXCIsIGJlZm9yZUV4cHIpLFxyXG4gIHNlbWk6IG5ldyBUb2tlblR5cGUoXCI7XCIsIGJlZm9yZUV4cHIpLFxyXG4gIGNvbG9uOiBuZXcgVG9rZW5UeXBlKFwiOlwiLCBiZWZvcmVFeHByKSxcclxuICBkb3Q6IG5ldyBUb2tlblR5cGUoXCIuXCIpLFxyXG4gIHF1ZXN0aW9uOiBuZXcgVG9rZW5UeXBlKFwiP1wiLCBiZWZvcmVFeHByKSxcclxuICBxdWVzdGlvbkRvdDogbmV3IFRva2VuVHlwZShcIj8uXCIpLFxyXG4gIGFycm93OiBuZXcgVG9rZW5UeXBlKFwiPT5cIiwgYmVmb3JlRXhwciksXHJcbiAgdGVtcGxhdGU6IG5ldyBUb2tlblR5cGUoXCJ0ZW1wbGF0ZVwiKSxcclxuICBpbnZhbGlkVGVtcGxhdGU6IG5ldyBUb2tlblR5cGUoXCJpbnZhbGlkVGVtcGxhdGVcIiksXHJcbiAgZWxsaXBzaXM6IG5ldyBUb2tlblR5cGUoXCIuLi5cIiwgYmVmb3JlRXhwciksXHJcbiAgYmFja1F1b3RlOiBuZXcgVG9rZW5UeXBlKFwiYFwiLCBzdGFydHNFeHByKSxcclxuICBkb2xsYXJCcmFjZUw6IG5ldyBUb2tlblR5cGUoXCIke1wiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxyXG5cclxuICAvLyBPcGVyYXRvcnMuIFRoZXNlIGNhcnJ5IHNldmVyYWwga2luZHMgb2YgcHJvcGVydGllcyB0byBoZWxwIHRoZVxyXG4gIC8vIHBhcnNlciB1c2UgdGhlbSBwcm9wZXJseSAodGhlIHByZXNlbmNlIG9mIHRoZXNlIHByb3BlcnRpZXMgaXNcclxuICAvLyB3aGF0IGNhdGVnb3JpemVzIHRoZW0gYXMgb3BlcmF0b3JzKS5cclxuICAvL1xyXG4gIC8vIGBiaW5vcGAsIHdoZW4gcHJlc2VudCwgc3BlY2lmaWVzIHRoYXQgdGhpcyBvcGVyYXRvciBpcyBhIGJpbmFyeVxyXG4gIC8vIG9wZXJhdG9yLCBhbmQgd2lsbCByZWZlciB0byBpdHMgcHJlY2VkZW5jZS5cclxuICAvL1xyXG4gIC8vIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgbWFyayB0aGUgb3BlcmF0b3IgYXMgYSBwcmVmaXggb3IgcG9zdGZpeFxyXG4gIC8vIHVuYXJ5IG9wZXJhdG9yLlxyXG4gIC8vXHJcbiAgLy8gYGlzQXNzaWduYCBtYXJrcyBhbGwgb2YgYD1gLCBgKz1gLCBgLT1gIGV0Y2V0ZXJhLCB3aGljaCBhY3QgYXNcclxuICAvLyBiaW5hcnkgb3BlcmF0b3JzIHdpdGggYSB2ZXJ5IGxvdyBwcmVjZWRlbmNlLCB0aGF0IHNob3VsZCByZXN1bHRcclxuICAvLyBpbiBBc3NpZ25tZW50RXhwcmVzc2lvbiBub2Rlcy5cclxuXHJcbiAgZXE6IG5ldyBUb2tlblR5cGUoXCI9XCIsIHtiZWZvcmVFeHByOiB0cnVlLCBpc0Fzc2lnbjogdHJ1ZX0pLFxyXG4gIGFzc2lnbjogbmV3IFRva2VuVHlwZShcIl89XCIsIHtiZWZvcmVFeHByOiB0cnVlLCBpc0Fzc2lnbjogdHJ1ZX0pLFxyXG4gIGluY0RlYzogbmV3IFRva2VuVHlwZShcIisrLy0tXCIsIHtwcmVmaXg6IHRydWUsIHBvc3RmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcclxuICBwcmVmaXg6IG5ldyBUb2tlblR5cGUoXCIhL35cIiwge2JlZm9yZUV4cHI6IHRydWUsIHByZWZpeDogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxyXG4gIGxvZ2ljYWxPUjogYmlub3AoXCJ8fFwiLCAxKSxcclxuICBsb2dpY2FsQU5EOiBiaW5vcChcIiYmXCIsIDIpLFxyXG4gIGJpdHdpc2VPUjogYmlub3AoXCJ8XCIsIDMpLFxyXG4gIGJpdHdpc2VYT1I6IGJpbm9wKFwiXlwiLCA0KSxcclxuICBiaXR3aXNlQU5EOiBiaW5vcChcIiZcIiwgNSksXHJcbiAgZXF1YWxpdHk6IGJpbm9wKFwiPT0vIT0vPT09LyE9PVwiLCA2KSxcclxuICByZWxhdGlvbmFsOiBiaW5vcChcIjwvPi88PS8+PVwiLCA3KSxcclxuICBiaXRTaGlmdDogYmlub3AoXCI8PC8+Pi8+Pj5cIiwgOCksXHJcbiAgcGx1c01pbjogbmV3IFRva2VuVHlwZShcIisvLVwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgYmlub3A6IDksIHByZWZpeDogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxyXG4gIG1vZHVsbzogYmlub3AoXCIlXCIsIDEwKSxcclxuICBzdGFyOiBiaW5vcChcIipcIiwgMTApLFxyXG4gIHNsYXNoOiBiaW5vcChcIi9cIiwgMTApLFxyXG4gIHN0YXJzdGFyOiBuZXcgVG9rZW5UeXBlKFwiKipcIiwge2JlZm9yZUV4cHI6IHRydWV9KSxcclxuICBjb2FsZXNjZTogYmlub3AoXCI/P1wiLCAxKSxcclxuXHJcbiAgLy8gS2V5d29yZCB0b2tlbiB0eXBlcy5cclxuICBfYnJlYWs6IGt3KFwiYnJlYWtcIiksXHJcbiAgX2Nhc2U6IGt3KFwiY2FzZVwiLCBiZWZvcmVFeHByKSxcclxuICBfY2F0Y2g6IGt3KFwiY2F0Y2hcIiksXHJcbiAgX2NvbnRpbnVlOiBrdyhcImNvbnRpbnVlXCIpLFxyXG4gIF9kZWJ1Z2dlcjoga3coXCJkZWJ1Z2dlclwiKSxcclxuICBfZGVmYXVsdDoga3coXCJkZWZhdWx0XCIsIGJlZm9yZUV4cHIpLFxyXG4gIF9kbzoga3coXCJkb1wiLCB7aXNMb29wOiB0cnVlLCBiZWZvcmVFeHByOiB0cnVlfSksXHJcbiAgX2Vsc2U6IGt3KFwiZWxzZVwiLCBiZWZvcmVFeHByKSxcclxuICBfZmluYWxseToga3coXCJmaW5hbGx5XCIpLFxyXG4gIF9mb3I6IGt3KFwiZm9yXCIsIHtpc0xvb3A6IHRydWV9KSxcclxuICBfZnVuY3Rpb246IGt3KFwiZnVuY3Rpb25cIiwgc3RhcnRzRXhwciksXHJcbiAgX2lmOiBrdyhcImlmXCIpLFxyXG4gIF9yZXR1cm46IGt3KFwicmV0dXJuXCIsIGJlZm9yZUV4cHIpLFxyXG4gIF9zd2l0Y2g6IGt3KFwic3dpdGNoXCIpLFxyXG4gIF90aHJvdzoga3coXCJ0aHJvd1wiLCBiZWZvcmVFeHByKSxcclxuICBfdHJ5OiBrdyhcInRyeVwiKSxcclxuICBfdmFyOiBrdyhcInZhclwiKSxcclxuICBfY29uc3Q6IGt3KFwiY29uc3RcIiksXHJcbiAgX3doaWxlOiBrdyhcIndoaWxlXCIsIHtpc0xvb3A6IHRydWV9KSxcclxuICBfd2l0aDoga3coXCJ3aXRoXCIpLFxyXG4gIF9uZXc6IGt3KFwibmV3XCIsIHtiZWZvcmVFeHByOiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXHJcbiAgX3RoaXM6IGt3KFwidGhpc1wiLCBzdGFydHNFeHByKSxcclxuICBfc3VwZXI6IGt3KFwic3VwZXJcIiwgc3RhcnRzRXhwciksXHJcbiAgX2NsYXNzOiBrdyhcImNsYXNzXCIsIHN0YXJ0c0V4cHIpLFxyXG4gIF9leHRlbmRzOiBrdyhcImV4dGVuZHNcIiwgYmVmb3JlRXhwciksXHJcbiAgX2V4cG9ydDoga3coXCJleHBvcnRcIiksXHJcbiAgX2ltcG9ydDoga3coXCJpbXBvcnRcIiwgc3RhcnRzRXhwciksXHJcbiAgX251bGw6IGt3KFwibnVsbFwiLCBzdGFydHNFeHByKSxcclxuICBfdHJ1ZToga3coXCJ0cnVlXCIsIHN0YXJ0c0V4cHIpLFxyXG4gIF9mYWxzZToga3coXCJmYWxzZVwiLCBzdGFydHNFeHByKSxcclxuICBfaW46IGt3KFwiaW5cIiwge2JlZm9yZUV4cHI6IHRydWUsIGJpbm9wOiA3fSksXHJcbiAgX2luc3RhbmNlb2Y6IGt3KFwiaW5zdGFuY2VvZlwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgYmlub3A6IDd9KSxcclxuICBfdHlwZW9mOiBrdyhcInR5cGVvZlwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgcHJlZml4OiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXHJcbiAgX3ZvaWQ6IGt3KFwidm9pZFwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgcHJlZml4OiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXHJcbiAgX2RlbGV0ZToga3coXCJkZWxldGVcIiwge2JlZm9yZUV4cHI6IHRydWUsIHByZWZpeDogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pXHJcbn07XHJcblxyXG4vLyBNYXRjaGVzIGEgd2hvbGUgbGluZSBicmVhayAod2hlcmUgQ1JMRiBpcyBjb25zaWRlcmVkIGEgc2luZ2xlXHJcbi8vIGxpbmUgYnJlYWspLiBVc2VkIHRvIGNvdW50IGxpbmVzLlxyXG5cclxudmFyIGxpbmVCcmVhayA9IC9cXHJcXG4/fFxcbnxcXHUyMDI4fFxcdTIwMjkvO1xyXG52YXIgbGluZUJyZWFrRyA9IG5ldyBSZWdFeHAobGluZUJyZWFrLnNvdXJjZSwgXCJnXCIpO1xyXG5cclxuZnVuY3Rpb24gaXNOZXdMaW5lKGNvZGUpIHtcclxuICByZXR1cm4gY29kZSA9PT0gMTAgfHwgY29kZSA9PT0gMTMgfHwgY29kZSA9PT0gMHgyMDI4IHx8IGNvZGUgPT09IDB4MjAyOVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0TGluZUJyZWFrKGNvZGUsIGZyb20sIGVuZCkge1xyXG4gIGlmICggZW5kID09PSB2b2lkIDAgKSBlbmQgPSBjb2RlLmxlbmd0aDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGZyb207IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgdmFyIG5leHQgPSBjb2RlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICBpZiAoaXNOZXdMaW5lKG5leHQpKVxyXG4gICAgICB7IHJldHVybiBpIDwgZW5kIC0gMSAmJiBuZXh0ID09PSAxMyAmJiBjb2RlLmNoYXJDb2RlQXQoaSArIDEpID09PSAxMCA/IGkgKyAyIDogaSArIDEgfVxyXG4gIH1cclxuICByZXR1cm4gLTFcclxufVxyXG5cclxudmFyIG5vbkFTQ0lJd2hpdGVzcGFjZSA9IC9bXFx1MTY4MFxcdTIwMDAtXFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdWZlZmZdLztcclxuXHJcbnZhciBza2lwV2hpdGVTcGFjZSA9IC8oPzpcXHN8XFwvXFwvLip8XFwvXFwqW15dKj9cXCpcXC8pKi9nO1xyXG5cclxudmFyIHJlZiA9IE9iamVjdC5wcm90b3R5cGU7XHJcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHJlZi5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIHRvU3RyaW5nID0gcmVmLnRvU3RyaW5nO1xyXG5cclxudmFyIGhhc093biA9IE9iamVjdC5oYXNPd24gfHwgKGZ1bmN0aW9uIChvYmosIHByb3BOYW1lKSB7IHJldHVybiAoXHJcbiAgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3BOYW1lKVxyXG4pOyB9KTtcclxuXHJcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gKFxyXG4gIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXHJcbik7IH0pO1xyXG5cclxudmFyIHJlZ2V4cENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmZ1bmN0aW9uIHdvcmRzUmVnZXhwKHdvcmRzKSB7XHJcbiAgcmV0dXJuIHJlZ2V4cENhY2hlW3dvcmRzXSB8fCAocmVnZXhwQ2FjaGVbd29yZHNdID0gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHdvcmRzLnJlcGxhY2UoLyAvZywgXCJ8XCIpICsgXCIpJFwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29kZVBvaW50VG9TdHJpbmcoY29kZSkge1xyXG4gIC8vIFVURi0xNiBEZWNvZGluZ1xyXG4gIGlmIChjb2RlIDw9IDB4RkZGRikgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSB9XHJcbiAgY29kZSAtPSAweDEwMDAwO1xyXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKChjb2RlID4+IDEwKSArIDB4RDgwMCwgKGNvZGUgJiAxMDIzKSArIDB4REMwMClcclxufVxyXG5cclxudmFyIGxvbmVTdXJyb2dhdGUgPSAvKD86W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pLztcclxuXHJcbi8vIFRoZXNlIGFyZSB1c2VkIHdoZW4gYG9wdGlvbnMubG9jYXRpb25zYCBpcyBvbiwgZm9yIHRoZVxyXG4vLyBgc3RhcnRMb2NgIGFuZCBgZW5kTG9jYCBwcm9wZXJ0aWVzLlxyXG5cclxudmFyIFBvc2l0aW9uID0gZnVuY3Rpb24gUG9zaXRpb24obGluZSwgY29sKSB7XHJcbiAgdGhpcy5saW5lID0gbGluZTtcclxuICB0aGlzLmNvbHVtbiA9IGNvbDtcclxufTtcclxuXHJcblBvc2l0aW9uLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQgKG4pIHtcclxuICByZXR1cm4gbmV3IFBvc2l0aW9uKHRoaXMubGluZSwgdGhpcy5jb2x1bW4gKyBuKVxyXG59O1xyXG5cclxudmFyIFNvdXJjZUxvY2F0aW9uID0gZnVuY3Rpb24gU291cmNlTG9jYXRpb24ocCwgc3RhcnQsIGVuZCkge1xyXG4gIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICB0aGlzLmVuZCA9IGVuZDtcclxuICBpZiAocC5zb3VyY2VGaWxlICE9PSBudWxsKSB7IHRoaXMuc291cmNlID0gcC5zb3VyY2VGaWxlOyB9XHJcbn07XHJcblxyXG4vLyBUaGUgYGdldExpbmVJbmZvYCBmdW5jdGlvbiBpcyBtb3N0bHkgdXNlZnVsIHdoZW4gdGhlXHJcbi8vIGBsb2NhdGlvbnNgIG9wdGlvbiBpcyBvZmYgKGZvciBwZXJmb3JtYW5jZSByZWFzb25zKSBhbmQgeW91XHJcbi8vIHdhbnQgdG8gZmluZCB0aGUgbGluZS9jb2x1bW4gcG9zaXRpb24gZm9yIGEgZ2l2ZW4gY2hhcmFjdGVyXHJcbi8vIG9mZnNldC4gYGlucHV0YCBzaG91bGQgYmUgdGhlIGNvZGUgc3RyaW5nIHRoYXQgdGhlIG9mZnNldCByZWZlcnNcclxuLy8gaW50by5cclxuXHJcbmZ1bmN0aW9uIGdldExpbmVJbmZvKGlucHV0LCBvZmZzZXQpIHtcclxuICBmb3IgKHZhciBsaW5lID0gMSwgY3VyID0gMDs7KSB7XHJcbiAgICB2YXIgbmV4dEJyZWFrID0gbmV4dExpbmVCcmVhayhpbnB1dCwgY3VyLCBvZmZzZXQpO1xyXG4gICAgaWYgKG5leHRCcmVhayA8IDApIHsgcmV0dXJuIG5ldyBQb3NpdGlvbihsaW5lLCBvZmZzZXQgLSBjdXIpIH1cclxuICAgICsrbGluZTtcclxuICAgIGN1ciA9IG5leHRCcmVhaztcclxuICB9XHJcbn1cclxuXHJcbi8vIEEgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgZ2l2ZW4gdG8gY29uZmlndXJlIHRoZSBwYXJzZXIgcHJvY2Vzcy5cclxuLy8gVGhlc2Ugb3B0aW9ucyBhcmUgcmVjb2duaXplZCAob25seSBgZWNtYVZlcnNpb25gIGlzIHJlcXVpcmVkKTpcclxuXHJcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAvLyBgZWNtYVZlcnNpb25gIGluZGljYXRlcyB0aGUgRUNNQVNjcmlwdCB2ZXJzaW9uIHRvIHBhcnNlLiBNdXN0IGJlXHJcbiAgLy8gZWl0aGVyIDMsIDUsIDYgKG9yIDIwMTUpLCA3ICgyMDE2KSwgOCAoMjAxNyksIDkgKDIwMTgpLCAxMFxyXG4gIC8vICgyMDE5KSwgMTEgKDIwMjApLCAxMiAoMjAyMSksIDEzICgyMDIyKSwgMTQgKDIwMjMpLCBvciBgXCJsYXRlc3RcImBcclxuICAvLyAodGhlIGxhdGVzdCB2ZXJzaW9uIHRoZSBsaWJyYXJ5IHN1cHBvcnRzKS4gVGhpcyBpbmZsdWVuY2VzXHJcbiAgLy8gc3VwcG9ydCBmb3Igc3RyaWN0IG1vZGUsIHRoZSBzZXQgb2YgcmVzZXJ2ZWQgd29yZHMsIGFuZCBzdXBwb3J0XHJcbiAgLy8gZm9yIG5ldyBzeW50YXggZmVhdHVyZXMuXHJcbiAgZWNtYVZlcnNpb246IG51bGwsXHJcbiAgLy8gYHNvdXJjZVR5cGVgIGluZGljYXRlcyB0aGUgbW9kZSB0aGUgY29kZSBzaG91bGQgYmUgcGFyc2VkIGluLlxyXG4gIC8vIENhbiBiZSBlaXRoZXIgYFwic2NyaXB0XCJgIG9yIGBcIm1vZHVsZVwiYC4gVGhpcyBpbmZsdWVuY2VzIGdsb2JhbFxyXG4gIC8vIHN0cmljdCBtb2RlIGFuZCBwYXJzaW5nIG9mIGBpbXBvcnRgIGFuZCBgZXhwb3J0YCBkZWNsYXJhdGlvbnMuXHJcbiAgc291cmNlVHlwZTogXCJzY3JpcHRcIixcclxuICAvLyBgb25JbnNlcnRlZFNlbWljb2xvbmAgY2FuIGJlIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuXHJcbiAgLy8gYSBzZW1pY29sb24gaXMgYXV0b21hdGljYWxseSBpbnNlcnRlZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXHJcbiAgLy8gcG9zaXRpb24gb2YgdGhlIGluc2VydGVkIHNlbWljb2xvbiBhcyBhbiBvZmZzZXQsIGFuZCBpZlxyXG4gIC8vIGBsb2NhdGlvbnNgIGlzIGVuYWJsZWQsIGl0IGlzIGdpdmVuIHRoZSBsb2NhdGlvbiBhcyBhIGB7bGluZSxcclxuICAvLyBjb2x1bW59YCBvYmplY3QgYXMgc2Vjb25kIGFyZ3VtZW50LlxyXG4gIG9uSW5zZXJ0ZWRTZW1pY29sb246IG51bGwsXHJcbiAgLy8gYG9uVHJhaWxpbmdDb21tYWAgaXMgc2ltaWxhciB0byBgb25JbnNlcnRlZFNlbWljb2xvbmAsIGJ1dCBmb3JcclxuICAvLyB0cmFpbGluZyBjb21tYXMuXHJcbiAgb25UcmFpbGluZ0NvbW1hOiBudWxsLFxyXG4gIC8vIEJ5IGRlZmF1bHQsIHJlc2VydmVkIHdvcmRzIGFyZSBvbmx5IGVuZm9yY2VkIGlmIGVjbWFWZXJzaW9uID49IDUuXHJcbiAgLy8gU2V0IGBhbGxvd1Jlc2VydmVkYCB0byBhIGJvb2xlYW4gdmFsdWUgdG8gZXhwbGljaXRseSB0dXJuIHRoaXMgb25cclxuICAvLyBhbiBvZmYuIFdoZW4gdGhpcyBvcHRpb24gaGFzIHRoZSB2YWx1ZSBcIm5ldmVyXCIsIHJlc2VydmVkIHdvcmRzXHJcbiAgLy8gYW5kIGtleXdvcmRzIGNhbiBhbHNvIG5vdCBiZSB1c2VkIGFzIHByb3BlcnR5IG5hbWVzLlxyXG4gIGFsbG93UmVzZXJ2ZWQ6IG51bGwsXHJcbiAgLy8gV2hlbiBlbmFibGVkLCBhIHJldHVybiBhdCB0aGUgdG9wIGxldmVsIGlzIG5vdCBjb25zaWRlcmVkIGFuXHJcbiAgLy8gZXJyb3IuXHJcbiAgYWxsb3dSZXR1cm5PdXRzaWRlRnVuY3Rpb246IGZhbHNlLFxyXG4gIC8vIFdoZW4gZW5hYmxlZCwgaW1wb3J0L2V4cG9ydCBzdGF0ZW1lbnRzIGFyZSBub3QgY29uc3RyYWluZWQgdG9cclxuICAvLyBhcHBlYXJpbmcgYXQgdGhlIHRvcCBvZiB0aGUgcHJvZ3JhbSwgYW5kIGFuIGltcG9ydC5tZXRhIGV4cHJlc3Npb25cclxuICAvLyBpbiBhIHNjcmlwdCBpc24ndCBjb25zaWRlcmVkIGFuIGVycm9yLlxyXG4gIGFsbG93SW1wb3J0RXhwb3J0RXZlcnl3aGVyZTogZmFsc2UsXHJcbiAgLy8gQnkgZGVmYXVsdCwgYXdhaXQgaWRlbnRpZmllcnMgYXJlIGFsbG93ZWQgdG8gYXBwZWFyIGF0IHRoZSB0b3AtbGV2ZWwgc2NvcGUgb25seSBpZiBlY21hVmVyc2lvbiA+PSAyMDIyLlxyXG4gIC8vIFdoZW4gZW5hYmxlZCwgYXdhaXQgaWRlbnRpZmllcnMgYXJlIGFsbG93ZWQgdG8gYXBwZWFyIGF0IHRoZSB0b3AtbGV2ZWwgc2NvcGUsXHJcbiAgLy8gYnV0IHRoZXkgYXJlIHN0aWxsIG5vdCBhbGxvd2VkIGluIG5vbi1hc3luYyBmdW5jdGlvbnMuXHJcbiAgYWxsb3dBd2FpdE91dHNpZGVGdW5jdGlvbjogbnVsbCxcclxuICAvLyBXaGVuIGVuYWJsZWQsIHN1cGVyIGlkZW50aWZpZXJzIGFyZSBub3QgY29uc3RyYWluZWQgdG9cclxuICAvLyBhcHBlYXJpbmcgaW4gbWV0aG9kcyBhbmQgZG8gbm90IHJhaXNlIGFuIGVycm9yIHdoZW4gdGhleSBhcHBlYXIgZWxzZXdoZXJlLlxyXG4gIGFsbG93U3VwZXJPdXRzaWRlTWV0aG9kOiBudWxsLFxyXG4gIC8vIFdoZW4gZW5hYmxlZCwgaGFzaGJhbmcgZGlyZWN0aXZlIGluIHRoZSBiZWdpbm5pbmcgb2YgZmlsZSBpc1xyXG4gIC8vIGFsbG93ZWQgYW5kIHRyZWF0ZWQgYXMgYSBsaW5lIGNvbW1lbnQuIEVuYWJsZWQgYnkgZGVmYXVsdCB3aGVuXHJcbiAgLy8gYGVjbWFWZXJzaW9uYCA+PSAyMDIzLlxyXG4gIGFsbG93SGFzaEJhbmc6IGZhbHNlLFxyXG4gIC8vIEJ5IGRlZmF1bHQsIHRoZSBwYXJzZXIgd2lsbCB2ZXJpZnkgdGhhdCBwcml2YXRlIHByb3BlcnRpZXMgYXJlXHJcbiAgLy8gb25seSB1c2VkIGluIHBsYWNlcyB3aGVyZSB0aGV5IGFyZSB2YWxpZCBhbmQgaGF2ZSBiZWVuIGRlY2xhcmVkLlxyXG4gIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHR1cm4gc3VjaCBjaGVja3Mgb2ZmLlxyXG4gIGNoZWNrUHJpdmF0ZUZpZWxkczogdHJ1ZSxcclxuICAvLyBXaGVuIGBsb2NhdGlvbnNgIGlzIG9uLCBgbG9jYCBwcm9wZXJ0aWVzIGhvbGRpbmcgb2JqZWN0cyB3aXRoXHJcbiAgLy8gYHN0YXJ0YCBhbmQgYGVuZGAgcHJvcGVydGllcyBpbiBge2xpbmUsIGNvbHVtbn1gIGZvcm0gKHdpdGhcclxuICAvLyBsaW5lIGJlaW5nIDEtYmFzZWQgYW5kIGNvbHVtbiAwLWJhc2VkKSB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gIC8vIG5vZGVzLlxyXG4gIGxvY2F0aW9uczogZmFsc2UsXHJcbiAgLy8gQSBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGFzIGBvblRva2VuYCBvcHRpb24sIHdoaWNoIHdpbGxcclxuICAvLyBjYXVzZSBBY29ybiB0byBjYWxsIHRoYXQgZnVuY3Rpb24gd2l0aCBvYmplY3QgaW4gdGhlIHNhbWVcclxuICAvLyBmb3JtYXQgYXMgdG9rZW5zIHJldHVybmVkIGZyb20gYHRva2VuaXplcigpLmdldFRva2VuKClgLiBOb3RlXHJcbiAgLy8gdGhhdCB5b3UgYXJlIG5vdCBhbGxvd2VkIHRvIGNhbGwgdGhlIHBhcnNlciBmcm9tIHRoZVxyXG4gIC8vIGNhbGxiYWNrXHUyMDE0dGhhdCB3aWxsIGNvcnJ1cHQgaXRzIGludGVybmFsIHN0YXRlLlxyXG4gIG9uVG9rZW46IG51bGwsXHJcbiAgLy8gQSBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGFzIGBvbkNvbW1lbnRgIG9wdGlvbiwgd2hpY2ggd2lsbFxyXG4gIC8vIGNhdXNlIEFjb3JuIHRvIGNhbGwgdGhhdCBmdW5jdGlvbiB3aXRoIGAoYmxvY2ssIHRleHQsIHN0YXJ0LFxyXG4gIC8vIGVuZClgIHBhcmFtZXRlcnMgd2hlbmV2ZXIgYSBjb21tZW50IGlzIHNraXBwZWQuIGBibG9ja2AgaXMgYVxyXG4gIC8vIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgaXMgYSBibG9jayAoYC8qICovYCkgY29tbWVudCxcclxuICAvLyBgdGV4dGAgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNvbW1lbnQsIGFuZCBgc3RhcnRgIGFuZCBgZW5kYCBhcmVcclxuICAvLyBjaGFyYWN0ZXIgb2Zmc2V0cyB0aGF0IGRlbm90ZSB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgY29tbWVudC5cclxuICAvLyBXaGVuIHRoZSBgbG9jYXRpb25zYCBvcHRpb24gaXMgb24sIHR3byBtb3JlIHBhcmFtZXRlcnMgYXJlXHJcbiAgLy8gcGFzc2VkLCB0aGUgZnVsbCBge2xpbmUsIGNvbHVtbn1gIGxvY2F0aW9ucyBvZiB0aGUgc3RhcnQgYW5kXHJcbiAgLy8gZW5kIG9mIHRoZSBjb21tZW50cy4gTm90ZSB0aGF0IHlvdSBhcmUgbm90IGFsbG93ZWQgdG8gY2FsbCB0aGVcclxuICAvLyBwYXJzZXIgZnJvbSB0aGUgY2FsbGJhY2tcdTIwMTR0aGF0IHdpbGwgY29ycnVwdCBpdHMgaW50ZXJuYWwgc3RhdGUuXHJcbiAgLy8gV2hlbiB0aGlzIG9wdGlvbiBoYXMgYW4gYXJyYXkgYXMgdmFsdWUsIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZVxyXG4gIC8vIGNvbW1lbnRzIGFyZSBwdXNoZWQgdG8gaXQuXHJcbiAgb25Db21tZW50OiBudWxsLFxyXG4gIC8vIE5vZGVzIGhhdmUgdGhlaXIgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIG9mZnNldHMgcmVjb3JkZWQgaW5cclxuICAvLyBgc3RhcnRgIGFuZCBgZW5kYCBwcm9wZXJ0aWVzIChkaXJlY3RseSBvbiB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cclxuICAvLyB0aGUgYGxvY2Agb2JqZWN0LCB3aGljaCBob2xkcyBsaW5lL2NvbHVtbiBkYXRhLiBUbyBhbHNvIGFkZCBhXHJcbiAgLy8gW3NlbWktc3RhbmRhcmRpemVkXVtyYW5nZV0gYHJhbmdlYCBwcm9wZXJ0eSBob2xkaW5nIGEgYFtzdGFydCxcclxuICAvLyBlbmRdYCBhcnJheSB3aXRoIHRoZSBzYW1lIG51bWJlcnMsIHNldCB0aGUgYHJhbmdlc2Agb3B0aW9uIHRvXHJcbiAgLy8gYHRydWVgLlxyXG4gIC8vXHJcbiAgLy8gW3JhbmdlXTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzQ1Njc4XHJcbiAgcmFuZ2VzOiBmYWxzZSxcclxuICAvLyBJdCBpcyBwb3NzaWJsZSB0byBwYXJzZSBtdWx0aXBsZSBmaWxlcyBpbnRvIGEgc2luZ2xlIEFTVCBieVxyXG4gIC8vIHBhc3NpbmcgdGhlIHRyZWUgcHJvZHVjZWQgYnkgcGFyc2luZyB0aGUgZmlyc3QgZmlsZSBhc1xyXG4gIC8vIGBwcm9ncmFtYCBvcHRpb24gaW4gc3Vic2VxdWVudCBwYXJzZXMuIFRoaXMgd2lsbCBhZGQgdGhlXHJcbiAgLy8gdG9wbGV2ZWwgZm9ybXMgb2YgdGhlIHBhcnNlZCBmaWxlIHRvIHRoZSBgUHJvZ3JhbWAgKHRvcCkgbm9kZVxyXG4gIC8vIG9mIGFuIGV4aXN0aW5nIHBhcnNlIHRyZWUuXHJcbiAgcHJvZ3JhbTogbnVsbCxcclxuICAvLyBXaGVuIGBsb2NhdGlvbnNgIGlzIG9uLCB5b3UgY2FuIHBhc3MgdGhpcyB0byByZWNvcmQgdGhlIHNvdXJjZVxyXG4gIC8vIGZpbGUgaW4gZXZlcnkgbm9kZSdzIGBsb2NgIG9iamVjdC5cclxuICBzb3VyY2VGaWxlOiBudWxsLFxyXG4gIC8vIFRoaXMgdmFsdWUsIGlmIGdpdmVuLCBpcyBzdG9yZWQgaW4gZXZlcnkgbm9kZSwgd2hldGhlclxyXG4gIC8vIGBsb2NhdGlvbnNgIGlzIG9uIG9yIG9mZi5cclxuICBkaXJlY3RTb3VyY2VGaWxlOiBudWxsLFxyXG4gIC8vIFdoZW4gZW5hYmxlZCwgcGFyZW50aGVzaXplZCBleHByZXNzaW9ucyBhcmUgcmVwcmVzZW50ZWQgYnlcclxuICAvLyAobm9uLXN0YW5kYXJkKSBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiBub2Rlc1xyXG4gIHByZXNlcnZlUGFyZW5zOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gSW50ZXJwcmV0IGFuZCBkZWZhdWx0IGFuIG9wdGlvbnMgb2JqZWN0XHJcblxyXG52YXIgd2FybmVkQWJvdXRFY21hVmVyc2lvbiA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhvcHRzKSB7XHJcbiAgdmFyIG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgZm9yICh2YXIgb3B0IGluIGRlZmF1bHRPcHRpb25zKVxyXG4gICAgeyBvcHRpb25zW29wdF0gPSBvcHRzICYmIGhhc093bihvcHRzLCBvcHQpID8gb3B0c1tvcHRdIDogZGVmYXVsdE9wdGlvbnNbb3B0XTsgfVxyXG5cclxuICBpZiAob3B0aW9ucy5lY21hVmVyc2lvbiA9PT0gXCJsYXRlc3RcIikge1xyXG4gICAgb3B0aW9ucy5lY21hVmVyc2lvbiA9IDFlODtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZWNtYVZlcnNpb24gPT0gbnVsbCkge1xyXG4gICAgaWYgKCF3YXJuZWRBYm91dEVjbWFWZXJzaW9uICYmIHR5cGVvZiBjb25zb2xlID09PSBcIm9iamVjdFwiICYmIGNvbnNvbGUud2Fybikge1xyXG4gICAgICB3YXJuZWRBYm91dEVjbWFWZXJzaW9uID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS53YXJuKFwiU2luY2UgQWNvcm4gOC4wLjAsIG9wdGlvbnMuZWNtYVZlcnNpb24gaXMgcmVxdWlyZWQuXFxuRGVmYXVsdGluZyB0byAyMDIwLCBidXQgdGhpcyB3aWxsIHN0b3Agd29ya2luZyBpbiB0aGUgZnV0dXJlLlwiKTtcclxuICAgIH1cclxuICAgIG9wdGlvbnMuZWNtYVZlcnNpb24gPSAxMTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMjAxNSkge1xyXG4gICAgb3B0aW9ucy5lY21hVmVyc2lvbiAtPSAyMDA5O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMuYWxsb3dSZXNlcnZlZCA9PSBudWxsKVxyXG4gICAgeyBvcHRpb25zLmFsbG93UmVzZXJ2ZWQgPSBvcHRpb25zLmVjbWFWZXJzaW9uIDwgNTsgfVxyXG5cclxuICBpZiAoIW9wdHMgfHwgb3B0cy5hbGxvd0hhc2hCYW5nID09IG51bGwpXHJcbiAgICB7IG9wdGlvbnMuYWxsb3dIYXNoQmFuZyA9IG9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTQ7IH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9ucy5vblRva2VuKSkge1xyXG4gICAgdmFyIHRva2VucyA9IG9wdGlvbnMub25Ub2tlbjtcclxuICAgIG9wdGlvbnMub25Ub2tlbiA9IGZ1bmN0aW9uICh0b2tlbikgeyByZXR1cm4gdG9rZW5zLnB1c2godG9rZW4pOyB9O1xyXG4gIH1cclxuICBpZiAoaXNBcnJheShvcHRpb25zLm9uQ29tbWVudCkpXHJcbiAgICB7IG9wdGlvbnMub25Db21tZW50ID0gcHVzaENvbW1lbnQob3B0aW9ucywgb3B0aW9ucy5vbkNvbW1lbnQpOyB9XHJcblxyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hDb21tZW50KG9wdGlvbnMsIGFycmF5KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGJsb2NrLCB0ZXh0LCBzdGFydCwgZW5kLCBzdGFydExvYywgZW5kTG9jKSB7XHJcbiAgICB2YXIgY29tbWVudCA9IHtcclxuICAgICAgdHlwZTogYmxvY2sgPyBcIkJsb2NrXCIgOiBcIkxpbmVcIixcclxuICAgICAgdmFsdWU6IHRleHQsXHJcbiAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgZW5kOiBlbmRcclxuICAgIH07XHJcbiAgICBpZiAob3B0aW9ucy5sb2NhdGlvbnMpXHJcbiAgICAgIHsgY29tbWVudC5sb2MgPSBuZXcgU291cmNlTG9jYXRpb24odGhpcywgc3RhcnRMb2MsIGVuZExvYyk7IH1cclxuICAgIGlmIChvcHRpb25zLnJhbmdlcylcclxuICAgICAgeyBjb21tZW50LnJhbmdlID0gW3N0YXJ0LCBlbmRdOyB9XHJcbiAgICBhcnJheS5wdXNoKGNvbW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRWFjaCBzY29wZSBnZXRzIGEgYml0c2V0IHRoYXQgbWF5IGNvbnRhaW4gdGhlc2UgZmxhZ3NcclxudmFyXHJcbiAgICBTQ09QRV9UT1AgPSAxLFxyXG4gICAgU0NPUEVfRlVOQ1RJT04gPSAyLFxyXG4gICAgU0NPUEVfQVNZTkMgPSA0LFxyXG4gICAgU0NPUEVfR0VORVJBVE9SID0gOCxcclxuICAgIFNDT1BFX0FSUk9XID0gMTYsXHJcbiAgICBTQ09QRV9TSU1QTEVfQ0FUQ0ggPSAzMixcclxuICAgIFNDT1BFX1NVUEVSID0gNjQsXHJcbiAgICBTQ09QRV9ESVJFQ1RfU1VQRVIgPSAxMjgsXHJcbiAgICBTQ09QRV9DTEFTU19TVEFUSUNfQkxPQ0sgPSAyNTYsXHJcbiAgICBTQ09QRV9WQVIgPSBTQ09QRV9UT1AgfCBTQ09QRV9GVU5DVElPTiB8IFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSztcclxuXHJcbmZ1bmN0aW9uIGZ1bmN0aW9uRmxhZ3MoYXN5bmMsIGdlbmVyYXRvcikge1xyXG4gIHJldHVybiBTQ09QRV9GVU5DVElPTiB8IChhc3luYyA/IFNDT1BFX0FTWU5DIDogMCkgfCAoZ2VuZXJhdG9yID8gU0NPUEVfR0VORVJBVE9SIDogMClcclxufVxyXG5cclxuLy8gVXNlZCBpbiBjaGVja0xWYWwqIGFuZCBkZWNsYXJlTmFtZSB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgYSBiaW5kaW5nXHJcbnZhclxyXG4gICAgQklORF9OT05FID0gMCwgLy8gTm90IGEgYmluZGluZ1xyXG4gICAgQklORF9WQVIgPSAxLCAvLyBWYXItc3R5bGUgYmluZGluZ1xyXG4gICAgQklORF9MRVhJQ0FMID0gMiwgLy8gTGV0LSBvciBjb25zdC1zdHlsZSBiaW5kaW5nXHJcbiAgICBCSU5EX0ZVTkNUSU9OID0gMywgLy8gRnVuY3Rpb24gZGVjbGFyYXRpb25cclxuICAgIEJJTkRfU0lNUExFX0NBVENIID0gNCwgLy8gU2ltcGxlIChpZGVudGlmaWVyIHBhdHRlcm4pIGNhdGNoIGJpbmRpbmdcclxuICAgIEJJTkRfT1VUU0lERSA9IDU7IC8vIFNwZWNpYWwgY2FzZSBmb3IgZnVuY3Rpb24gbmFtZXMgYXMgYm91bmQgaW5zaWRlIHRoZSBmdW5jdGlvblxyXG5cclxudmFyIFBhcnNlciA9IGZ1bmN0aW9uIFBhcnNlcihvcHRpb25zLCBpbnB1dCwgc3RhcnRQb3MpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICB0aGlzLnNvdXJjZUZpbGUgPSBvcHRpb25zLnNvdXJjZUZpbGU7XHJcbiAgdGhpcy5rZXl3b3JkcyA9IHdvcmRzUmVnZXhwKGtleXdvcmRzJDFbb3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ID8gNiA6IG9wdGlvbnMuc291cmNlVHlwZSA9PT0gXCJtb2R1bGVcIiA/IFwiNW1vZHVsZVwiIDogNV0pO1xyXG4gIHZhciByZXNlcnZlZCA9IFwiXCI7XHJcbiAgaWYgKG9wdGlvbnMuYWxsb3dSZXNlcnZlZCAhPT0gdHJ1ZSkge1xyXG4gICAgcmVzZXJ2ZWQgPSByZXNlcnZlZFdvcmRzW29wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiA/IDYgOiBvcHRpb25zLmVjbWFWZXJzaW9uID09PSA1ID8gNSA6IDNdO1xyXG4gICAgaWYgKG9wdGlvbnMuc291cmNlVHlwZSA9PT0gXCJtb2R1bGVcIikgeyByZXNlcnZlZCArPSBcIiBhd2FpdFwiOyB9XHJcbiAgfVxyXG4gIHRoaXMucmVzZXJ2ZWRXb3JkcyA9IHdvcmRzUmVnZXhwKHJlc2VydmVkKTtcclxuICB2YXIgcmVzZXJ2ZWRTdHJpY3QgPSAocmVzZXJ2ZWQgPyByZXNlcnZlZCArIFwiIFwiIDogXCJcIikgKyByZXNlcnZlZFdvcmRzLnN0cmljdDtcclxuICB0aGlzLnJlc2VydmVkV29yZHNTdHJpY3QgPSB3b3Jkc1JlZ2V4cChyZXNlcnZlZFN0cmljdCk7XHJcbiAgdGhpcy5yZXNlcnZlZFdvcmRzU3RyaWN0QmluZCA9IHdvcmRzUmVnZXhwKHJlc2VydmVkU3RyaWN0ICsgXCIgXCIgKyByZXNlcnZlZFdvcmRzLnN0cmljdEJpbmQpO1xyXG4gIHRoaXMuaW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xyXG5cclxuICAvLyBVc2VkIHRvIHNpZ25hbCB0byBjYWxsZXJzIG9mIGByZWFkV29yZDFgIHdoZXRoZXIgdGhlIHdvcmRcclxuICAvLyBjb250YWluZWQgYW55IGVzY2FwZSBzZXF1ZW5jZXMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugd29yZHMgd2l0aFxyXG4gIC8vIGVzY2FwZSBzZXF1ZW5jZXMgbXVzdCBub3QgYmUgaW50ZXJwcmV0ZWQgYXMga2V5d29yZHMuXHJcbiAgdGhpcy5jb250YWluc0VzYyA9IGZhbHNlO1xyXG5cclxuICAvLyBTZXQgdXAgdG9rZW4gc3RhdGVcclxuXHJcbiAgLy8gVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHRva2VuaXplciBpbiB0aGUgaW5wdXQuXHJcbiAgaWYgKHN0YXJ0UG9zKSB7XHJcbiAgICB0aGlzLnBvcyA9IHN0YXJ0UG9zO1xyXG4gICAgdGhpcy5saW5lU3RhcnQgPSB0aGlzLmlucHV0Lmxhc3RJbmRleE9mKFwiXFxuXCIsIHN0YXJ0UG9zIC0gMSkgKyAxO1xyXG4gICAgdGhpcy5jdXJMaW5lID0gdGhpcy5pbnB1dC5zbGljZSgwLCB0aGlzLmxpbmVTdGFydCkuc3BsaXQobGluZUJyZWFrKS5sZW5ndGg7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucG9zID0gdGhpcy5saW5lU3RhcnQgPSAwO1xyXG4gICAgdGhpcy5jdXJMaW5lID0gMTtcclxuICB9XHJcblxyXG4gIC8vIFByb3BlcnRpZXMgb2YgdGhlIGN1cnJlbnQgdG9rZW46XHJcbiAgLy8gSXRzIHR5cGVcclxuICB0aGlzLnR5cGUgPSB0eXBlcyQxLmVvZjtcclxuICAvLyBGb3IgdG9rZW5zIHRoYXQgaW5jbHVkZSBtb3JlIGluZm9ybWF0aW9uIHRoYW4gdGhlaXIgdHlwZSwgdGhlIHZhbHVlXHJcbiAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgLy8gSXRzIHN0YXJ0IGFuZCBlbmQgb2Zmc2V0XHJcbiAgdGhpcy5zdGFydCA9IHRoaXMuZW5kID0gdGhpcy5wb3M7XHJcbiAgLy8gQW5kLCBpZiBsb2NhdGlvbnMgYXJlIHVzZWQsIHRoZSB7bGluZSwgY29sdW1ufSBvYmplY3RcclxuICAvLyBjb3JyZXNwb25kaW5nIHRvIHRob3NlIG9mZnNldHNcclxuICB0aGlzLnN0YXJ0TG9jID0gdGhpcy5lbmRMb2MgPSB0aGlzLmN1clBvc2l0aW9uKCk7XHJcblxyXG4gIC8vIFBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciB0aGUgcHJldmlvdXMgdG9rZW5cclxuICB0aGlzLmxhc3RUb2tFbmRMb2MgPSB0aGlzLmxhc3RUb2tTdGFydExvYyA9IG51bGw7XHJcbiAgdGhpcy5sYXN0VG9rU3RhcnQgPSB0aGlzLmxhc3RUb2tFbmQgPSB0aGlzLnBvcztcclxuXHJcbiAgLy8gVGhlIGNvbnRleHQgc3RhY2sgaXMgdXNlZCB0byBzdXBlcmZpY2lhbGx5IHRyYWNrIHN5bnRhY3RpY1xyXG4gIC8vIGNvbnRleHQgdG8gcHJlZGljdCB3aGV0aGVyIGEgcmVndWxhciBleHByZXNzaW9uIGlzIGFsbG93ZWQgaW4gYVxyXG4gIC8vIGdpdmVuIHBvc2l0aW9uLlxyXG4gIHRoaXMuY29udGV4dCA9IHRoaXMuaW5pdGlhbENvbnRleHQoKTtcclxuICB0aGlzLmV4cHJBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgLy8gRmlndXJlIG91dCBpZiBpdCdzIGEgbW9kdWxlIGNvZGUuXHJcbiAgdGhpcy5pbk1vZHVsZSA9IG9wdGlvbnMuc291cmNlVHlwZSA9PT0gXCJtb2R1bGVcIjtcclxuICB0aGlzLnN0cmljdCA9IHRoaXMuaW5Nb2R1bGUgfHwgdGhpcy5zdHJpY3REaXJlY3RpdmUodGhpcy5wb3MpO1xyXG5cclxuICAvLyBVc2VkIHRvIHNpZ25pZnkgdGhlIHN0YXJ0IG9mIGEgcG90ZW50aWFsIGFycm93IGZ1bmN0aW9uXHJcbiAgdGhpcy5wb3RlbnRpYWxBcnJvd0F0ID0gLTE7XHJcbiAgdGhpcy5wb3RlbnRpYWxBcnJvd0luRm9yQXdhaXQgPSBmYWxzZTtcclxuXHJcbiAgLy8gUG9zaXRpb25zIHRvIGRlbGF5ZWQtY2hlY2sgdGhhdCB5aWVsZC9hd2FpdCBkb2VzIG5vdCBleGlzdCBpbiBkZWZhdWx0IHBhcmFtZXRlcnMuXHJcbiAgdGhpcy55aWVsZFBvcyA9IHRoaXMuYXdhaXRQb3MgPSB0aGlzLmF3YWl0SWRlbnRQb3MgPSAwO1xyXG4gIC8vIExhYmVscyBpbiBzY29wZS5cclxuICB0aGlzLmxhYmVscyA9IFtdO1xyXG4gIC8vIFRodXMtZmFyIHVuZGVmaW5lZCBleHBvcnRzLlxyXG4gIHRoaXMudW5kZWZpbmVkRXhwb3J0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gIC8vIElmIGVuYWJsZWQsIHNraXAgbGVhZGluZyBoYXNoYmFuZyBsaW5lLlxyXG4gIGlmICh0aGlzLnBvcyA9PT0gMCAmJiBvcHRpb25zLmFsbG93SGFzaEJhbmcgJiYgdGhpcy5pbnB1dC5zbGljZSgwLCAyKSA9PT0gXCIjIVwiKVxyXG4gICAgeyB0aGlzLnNraXBMaW5lQ29tbWVudCgyKTsgfVxyXG5cclxuICAvLyBTY29wZSB0cmFja2luZyBmb3IgZHVwbGljYXRlIHZhcmlhYmxlIG5hbWVzIChzZWUgc2NvcGUuanMpXHJcbiAgdGhpcy5zY29wZVN0YWNrID0gW107XHJcbiAgdGhpcy5lbnRlclNjb3BlKFNDT1BFX1RPUCk7XHJcblxyXG4gIC8vIEZvciBSZWdFeHAgdmFsaWRhdGlvblxyXG4gIHRoaXMucmVnZXhwU3RhdGUgPSBudWxsO1xyXG5cclxuICAvLyBUaGUgc3RhY2sgb2YgcHJpdmF0ZSBuYW1lcy5cclxuICAvLyBFYWNoIGVsZW1lbnQgaGFzIHR3byBwcm9wZXJ0aWVzOiAnZGVjbGFyZWQnIGFuZCAndXNlZCcuXHJcbiAgLy8gV2hlbiBpdCBleGl0ZWQgZnJvbSB0aGUgb3V0ZXJtb3N0IGNsYXNzIGRlZmluaXRpb24sIGFsbCB1c2VkIHByaXZhdGUgbmFtZXMgbXVzdCBiZSBkZWNsYXJlZC5cclxuICB0aGlzLnByaXZhdGVOYW1lU3RhY2sgPSBbXTtcclxufTtcclxuXHJcbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGluRnVuY3Rpb246IHsgY29uZmlndXJhYmxlOiB0cnVlIH0saW5HZW5lcmF0b3I6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0saW5Bc3luYzogeyBjb25maWd1cmFibGU6IHRydWUgfSxjYW5Bd2FpdDogeyBjb25maWd1cmFibGU6IHRydWUgfSxhbGxvd1N1cGVyOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGFsbG93RGlyZWN0U3VwZXI6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sdHJlYXRGdW5jdGlvbnNBc1ZhcjogeyBjb25maWd1cmFibGU6IHRydWUgfSxhbGxvd05ld0RvdFRhcmdldDogeyBjb25maWd1cmFibGU6IHRydWUgfSxpbkNsYXNzU3RhdGljQmxvY2s6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAoKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbSB8fCB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHRoaXMubmV4dFRva2VuKCk7XHJcbiAgcmV0dXJuIHRoaXMucGFyc2VUb3BMZXZlbChub2RlKVxyXG59O1xyXG5cclxucHJvdG90eXBlQWNjZXNzb3JzLmluRnVuY3Rpb24uZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MgJiBTQ09QRV9GVU5DVElPTikgPiAwIH07XHJcblxyXG5wcm90b3R5cGVBY2Nlc3NvcnMuaW5HZW5lcmF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MgJiBTQ09QRV9HRU5FUkFUT1IpID4gMCAmJiAhdGhpcy5jdXJyZW50VmFyU2NvcGUoKS5pbkNsYXNzRmllbGRJbml0IH07XHJcblxyXG5wcm90b3R5cGVBY2Nlc3NvcnMuaW5Bc3luYy5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodGhpcy5jdXJyZW50VmFyU2NvcGUoKS5mbGFncyAmIFNDT1BFX0FTWU5DKSA+IDAgJiYgIXRoaXMuY3VycmVudFZhclNjb3BlKCkuaW5DbGFzc0ZpZWxkSW5pdCB9O1xyXG5cclxucHJvdG90eXBlQWNjZXNzb3JzLmNhbkF3YWl0LmdldCA9IGZ1bmN0aW9uICgpIHtcclxuICBmb3IgKHZhciBpID0gdGhpcy5zY29wZVN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzLnNjb3BlU3RhY2tbaV07XHJcbiAgICBpZiAoc2NvcGUuaW5DbGFzc0ZpZWxkSW5pdCB8fCBzY29wZS5mbGFncyAmIFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSykgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgaWYgKHNjb3BlLmZsYWdzICYgU0NPUEVfRlVOQ1RJT04pIHsgcmV0dXJuIChzY29wZS5mbGFncyAmIFNDT1BFX0FTWU5DKSA+IDAgfVxyXG4gIH1cclxuICByZXR1cm4gKHRoaXMuaW5Nb2R1bGUgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDEzKSB8fCB0aGlzLm9wdGlvbnMuYWxsb3dBd2FpdE91dHNpZGVGdW5jdGlvblxyXG59O1xyXG5cclxucHJvdG90eXBlQWNjZXNzb3JzLmFsbG93U3VwZXIuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciByZWYgPSB0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKTtcclxuICAgIHZhciBmbGFncyA9IHJlZi5mbGFncztcclxuICAgIHZhciBpbkNsYXNzRmllbGRJbml0ID0gcmVmLmluQ2xhc3NGaWVsZEluaXQ7XHJcbiAgcmV0dXJuIChmbGFncyAmIFNDT1BFX1NVUEVSKSA+IDAgfHwgaW5DbGFzc0ZpZWxkSW5pdCB8fCB0aGlzLm9wdGlvbnMuYWxsb3dTdXBlck91dHNpZGVNZXRob2RcclxufTtcclxuXHJcbnByb3RvdHlwZUFjY2Vzc29ycy5hbGxvd0RpcmVjdFN1cGVyLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKS5mbGFncyAmIFNDT1BFX0RJUkVDVF9TVVBFUikgPiAwIH07XHJcblxyXG5wcm90b3R5cGVBY2Nlc3NvcnMudHJlYXRGdW5jdGlvbnNBc1Zhci5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRyZWF0RnVuY3Rpb25zQXNWYXJJblNjb3BlKHRoaXMuY3VycmVudFNjb3BlKCkpIH07XHJcblxyXG5wcm90b3R5cGVBY2Nlc3NvcnMuYWxsb3dOZXdEb3RUYXJnZXQuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciByZWYgPSB0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKTtcclxuICAgIHZhciBmbGFncyA9IHJlZi5mbGFncztcclxuICAgIHZhciBpbkNsYXNzRmllbGRJbml0ID0gcmVmLmluQ2xhc3NGaWVsZEluaXQ7XHJcbiAgcmV0dXJuIChmbGFncyAmIChTQ09QRV9GVU5DVElPTiB8IFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSykpID4gMCB8fCBpbkNsYXNzRmllbGRJbml0XHJcbn07XHJcblxyXG5wcm90b3R5cGVBY2Nlc3NvcnMuaW5DbGFzc1N0YXRpY0Jsb2NrLmdldCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MgJiBTQ09QRV9DTEFTU19TVEFUSUNfQkxPQ0spID4gMFxyXG59O1xyXG5cclxuUGFyc2VyLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCAoKSB7XHJcbiAgICB2YXIgcGx1Z2lucyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKCBsZW4tLSApIHBsdWdpbnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcclxuXHJcbiAgdmFyIGNscyA9IHRoaXM7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7IGNscyA9IHBsdWdpbnNbaV0oY2xzKTsgfVxyXG4gIHJldHVybiBjbHNcclxufTtcclxuXHJcblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlIChpbnB1dCwgb3B0aW9ucykge1xyXG4gIHJldHVybiBuZXcgdGhpcyhvcHRpb25zLCBpbnB1dCkucGFyc2UoKVxyXG59O1xyXG5cclxuUGFyc2VyLnBhcnNlRXhwcmVzc2lvbkF0ID0gZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uQXQgKGlucHV0LCBwb3MsIG9wdGlvbnMpIHtcclxuICB2YXIgcGFyc2VyID0gbmV3IHRoaXMob3B0aW9ucywgaW5wdXQsIHBvcyk7XHJcbiAgcGFyc2VyLm5leHRUb2tlbigpO1xyXG4gIHJldHVybiBwYXJzZXIucGFyc2VFeHByZXNzaW9uKClcclxufTtcclxuXHJcblBhcnNlci50b2tlbml6ZXIgPSBmdW5jdGlvbiB0b2tlbml6ZXIgKGlucHV0LCBvcHRpb25zKSB7XHJcbiAgcmV0dXJuIG5ldyB0aGlzKG9wdGlvbnMsIGlucHV0KVxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFBhcnNlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xyXG5cclxudmFyIHBwJDkgPSBQYXJzZXIucHJvdG90eXBlO1xyXG5cclxuLy8gIyMgUGFyc2VyIHV0aWxpdGllc1xyXG5cclxudmFyIGxpdGVyYWwgPSAvXig/OicoKD86XFxcXC58W14nXFxcXF0pKj8pJ3xcIigoPzpcXFxcLnxbXlwiXFxcXF0pKj8pXCIpLztcclxucHAkOS5zdHJpY3REaXJlY3RpdmUgPSBmdW5jdGlvbihzdGFydCkge1xyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA1KSB7IHJldHVybiBmYWxzZSB9XHJcbiAgZm9yICg7Oykge1xyXG4gICAgLy8gVHJ5IHRvIGZpbmQgc3RyaW5nIGxpdGVyYWwuXHJcbiAgICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSBzdGFydDtcclxuICAgIHN0YXJ0ICs9IHNraXBXaGl0ZVNwYWNlLmV4ZWModGhpcy5pbnB1dClbMF0ubGVuZ3RoO1xyXG4gICAgdmFyIG1hdGNoID0gbGl0ZXJhbC5leGVjKHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQpKTtcclxuICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlIH1cclxuICAgIGlmICgobWF0Y2hbMV0gfHwgbWF0Y2hbMl0pID09PSBcInVzZSBzdHJpY3RcIikge1xyXG4gICAgICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSBzdGFydCArIG1hdGNoWzBdLmxlbmd0aDtcclxuICAgICAgdmFyIHNwYWNlQWZ0ZXIgPSBza2lwV2hpdGVTcGFjZS5leGVjKHRoaXMuaW5wdXQpLCBlbmQgPSBzcGFjZUFmdGVyLmluZGV4ICsgc3BhY2VBZnRlclswXS5sZW5ndGg7XHJcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQXQoZW5kKTtcclxuICAgICAgcmV0dXJuIG5leHQgPT09IFwiO1wiIHx8IG5leHQgPT09IFwifVwiIHx8XHJcbiAgICAgICAgKGxpbmVCcmVhay50ZXN0KHNwYWNlQWZ0ZXJbMF0pICYmXHJcbiAgICAgICAgICEoL1soYC5bK1xcLS8qJTw+PSw/XiZdLy50ZXN0KG5leHQpIHx8IG5leHQgPT09IFwiIVwiICYmIHRoaXMuaW5wdXQuY2hhckF0KGVuZCArIDEpID09PSBcIj1cIikpXHJcbiAgICB9XHJcbiAgICBzdGFydCArPSBtYXRjaFswXS5sZW5ndGg7XHJcblxyXG4gICAgLy8gU2tpcCBzZW1pY29sb24sIGlmIGFueS5cclxuICAgIHNraXBXaGl0ZVNwYWNlLmxhc3RJbmRleCA9IHN0YXJ0O1xyXG4gICAgc3RhcnQgKz0gc2tpcFdoaXRlU3BhY2UuZXhlYyh0aGlzLmlucHV0KVswXS5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy5pbnB1dFtzdGFydF0gPT09IFwiO1wiKVxyXG4gICAgICB7IHN0YXJ0Kys7IH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBQcmVkaWNhdGUgdGhhdCB0ZXN0cyB3aGV0aGVyIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlblxyXG4vLyB0eXBlLCBhbmQgaWYgeWVzLCBjb25zdW1lcyBpdCBhcyBhIHNpZGUgZWZmZWN0LlxyXG5cclxucHAkOS5lYXQgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn07XHJcblxyXG4vLyBUZXN0cyB3aGV0aGVyIHBhcnNlZCB0b2tlbiBpcyBhIGNvbnRleHR1YWwga2V5d29yZC5cclxuXHJcbnBwJDkuaXNDb250ZXh0dWFsID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSAmJiB0aGlzLnZhbHVlID09PSBuYW1lICYmICF0aGlzLmNvbnRhaW5zRXNjXHJcbn07XHJcblxyXG4vLyBDb25zdW1lcyBjb250ZXh0dWFsIGtleXdvcmQgaWYgcG9zc2libGUuXHJcblxyXG5wcCQ5LmVhdENvbnRleHR1YWwgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgaWYgKCF0aGlzLmlzQ29udGV4dHVhbChuYW1lKSkgeyByZXR1cm4gZmFsc2UgfVxyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHJldHVybiB0cnVlXHJcbn07XHJcblxyXG4vLyBBc3NlcnRzIHRoYXQgZm9sbG93aW5nIHRva2VuIGlzIGdpdmVuIGNvbnRleHR1YWwga2V5d29yZC5cclxuXHJcbnBwJDkuZXhwZWN0Q29udGV4dHVhbCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICBpZiAoIXRoaXMuZWF0Q29udGV4dHVhbChuYW1lKSkgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG59O1xyXG5cclxuLy8gVGVzdCB3aGV0aGVyIGEgc2VtaWNvbG9uIGNhbiBiZSBpbnNlcnRlZCBhdCB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuXHJcbnBwJDkuY2FuSW5zZXJ0U2VtaWNvbG9uID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lb2YgfHxcclxuICAgIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5icmFjZVIgfHxcclxuICAgIGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnN0YXJ0KSlcclxufTtcclxuXHJcbnBwJDkuaW5zZXJ0U2VtaWNvbG9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMub25JbnNlcnRlZFNlbWljb2xvbilcclxuICAgICAgeyB0aGlzLm9wdGlvbnMub25JbnNlcnRlZFNlbWljb2xvbih0aGlzLmxhc3RUb2tFbmQsIHRoaXMubGFzdFRva0VuZExvYyk7IH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQ29uc3VtZSBhIHNlbWljb2xvbiwgb3IsIGZhaWxpbmcgdGhhdCwgc2VlIGlmIHdlIGFyZSBhbGxvd2VkIHRvXHJcbi8vIHByZXRlbmQgdGhhdCB0aGVyZSBpcyBhIHNlbWljb2xvbiBhdCB0aGlzIHBvc2l0aW9uLlxyXG5cclxucHAkOS5zZW1pY29sb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuZWF0KHR5cGVzJDEuc2VtaSkgJiYgIXRoaXMuaW5zZXJ0U2VtaWNvbG9uKCkpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxufTtcclxuXHJcbnBwJDkuYWZ0ZXJUcmFpbGluZ0NvbW1hID0gZnVuY3Rpb24odG9rVHlwZSwgbm90TmV4dCkge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHRva1R5cGUpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMub25UcmFpbGluZ0NvbW1hKVxyXG4gICAgICB7IHRoaXMub3B0aW9ucy5vblRyYWlsaW5nQ29tbWEodGhpcy5sYXN0VG9rU3RhcnQsIHRoaXMubGFzdFRva1N0YXJ0TG9jKTsgfVxyXG4gICAgaWYgKCFub3ROZXh0KVxyXG4gICAgICB7IHRoaXMubmV4dCgpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbi8vIEV4cGVjdCBhIHRva2VuIG9mIGEgZ2l2ZW4gdHlwZS4gSWYgZm91bmQsIGNvbnN1bWUgaXQsIG90aGVyd2lzZSxcclxuLy8gcmFpc2UgYW4gdW5leHBlY3RlZCB0b2tlbiBlcnJvci5cclxuXHJcbnBwJDkuZXhwZWN0ID0gZnVuY3Rpb24odHlwZSkge1xyXG4gIHRoaXMuZWF0KHR5cGUpIHx8IHRoaXMudW5leHBlY3RlZCgpO1xyXG59O1xyXG5cclxuLy8gUmFpc2UgYW4gdW5leHBlY3RlZCB0b2tlbiBlcnJvci5cclxuXHJcbnBwJDkudW5leHBlY3RlZCA9IGZ1bmN0aW9uKHBvcykge1xyXG4gIHRoaXMucmFpc2UocG9zICE9IG51bGwgPyBwb3MgOiB0aGlzLnN0YXJ0LCBcIlVuZXhwZWN0ZWQgdG9rZW5cIik7XHJcbn07XHJcblxyXG52YXIgRGVzdHJ1Y3R1cmluZ0Vycm9ycyA9IGZ1bmN0aW9uIERlc3RydWN0dXJpbmdFcnJvcnMoKSB7XHJcbiAgdGhpcy5zaG9ydGhhbmRBc3NpZ24gPVxyXG4gIHRoaXMudHJhaWxpbmdDb21tYSA9XHJcbiAgdGhpcy5wYXJlbnRoZXNpemVkQXNzaWduID1cclxuICB0aGlzLnBhcmVudGhlc2l6ZWRCaW5kID1cclxuICB0aGlzLmRvdWJsZVByb3RvID1cclxuICAgIC0xO1xyXG59O1xyXG5cclxucHAkOS5jaGVja1BhdHRlcm5FcnJvcnMgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBpc0Fzc2lnbikge1xyXG4gIGlmICghcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykgeyByZXR1cm4gfVxyXG4gIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPiAtMSlcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSwgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIik7IH1cclxuICB2YXIgcGFyZW5zID0gaXNBc3NpZ24gPyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gOiByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRCaW5kO1xyXG4gIGlmIChwYXJlbnMgPiAtMSkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUocGFyZW5zLCBpc0Fzc2lnbiA/IFwiQXNzaWduaW5nIHRvIHJ2YWx1ZVwiIDogXCJQYXJlbnRoZXNpemVkIHBhdHRlcm5cIik7IH1cclxufTtcclxuXHJcbnBwJDkuY2hlY2tFeHByZXNzaW9uRXJyb3JzID0gZnVuY3Rpb24ocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgYW5kVGhyb3cpIHtcclxuICBpZiAoIXJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgcmV0dXJuIGZhbHNlIH1cclxuICB2YXIgc2hvcnRoYW5kQXNzaWduID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5zaG9ydGhhbmRBc3NpZ247XHJcbiAgdmFyIGRvdWJsZVByb3RvID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5kb3VibGVQcm90bztcclxuICBpZiAoIWFuZFRocm93KSB7IHJldHVybiBzaG9ydGhhbmRBc3NpZ24gPj0gMCB8fCBkb3VibGVQcm90byA+PSAwIH1cclxuICBpZiAoc2hvcnRoYW5kQXNzaWduID49IDApXHJcbiAgICB7IHRoaXMucmFpc2Uoc2hvcnRoYW5kQXNzaWduLCBcIlNob3J0aGFuZCBwcm9wZXJ0eSBhc3NpZ25tZW50cyBhcmUgdmFsaWQgb25seSBpbiBkZXN0cnVjdHVyaW5nIHBhdHRlcm5zXCIpOyB9XHJcbiAgaWYgKGRvdWJsZVByb3RvID49IDApXHJcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShkb3VibGVQcm90bywgXCJSZWRlZmluaXRpb24gb2YgX19wcm90b19fIHByb3BlcnR5XCIpOyB9XHJcbn07XHJcblxyXG5wcCQ5LmNoZWNrWWllbGRBd2FpdEluRGVmYXVsdFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLnlpZWxkUG9zICYmICghdGhpcy5hd2FpdFBvcyB8fCB0aGlzLnlpZWxkUG9zIDwgdGhpcy5hd2FpdFBvcykpXHJcbiAgICB7IHRoaXMucmFpc2UodGhpcy55aWVsZFBvcywgXCJZaWVsZCBleHByZXNzaW9uIGNhbm5vdCBiZSBhIGRlZmF1bHQgdmFsdWVcIik7IH1cclxuICBpZiAodGhpcy5hd2FpdFBvcylcclxuICAgIHsgdGhpcy5yYWlzZSh0aGlzLmF3YWl0UG9zLCBcIkF3YWl0IGV4cHJlc3Npb24gY2Fubm90IGJlIGEgZGVmYXVsdCB2YWx1ZVwiKTsgfVxyXG59O1xyXG5cclxucHAkOS5pc1NpbXBsZUFzc2lnblRhcmdldCA9IGZ1bmN0aW9uKGV4cHIpIHtcclxuICBpZiAoZXhwci50eXBlID09PSBcIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCIpXHJcbiAgICB7IHJldHVybiB0aGlzLmlzU2ltcGxlQXNzaWduVGFyZ2V0KGV4cHIuZXhwcmVzc2lvbikgfVxyXG4gIHJldHVybiBleHByLnR5cGUgPT09IFwiSWRlbnRpZmllclwiIHx8IGV4cHIudHlwZSA9PT0gXCJNZW1iZXJFeHByZXNzaW9uXCJcclxufTtcclxuXHJcbnZhciBwcCQ4ID0gUGFyc2VyLnByb3RvdHlwZTtcclxuXHJcbi8vICMjIyBTdGF0ZW1lbnQgcGFyc2luZ1xyXG5cclxuLy8gUGFyc2UgYSBwcm9ncmFtLiBJbml0aWFsaXplcyB0aGUgcGFyc2VyLCByZWFkcyBhbnkgbnVtYmVyIG9mXHJcbi8vIHN0YXRlbWVudHMsIGFuZCB3cmFwcyB0aGVtIGluIGEgUHJvZ3JhbSBub2RlLiAgT3B0aW9uYWxseSB0YWtlcyBhXHJcbi8vIGBwcm9ncmFtYCBhcmd1bWVudC4gIElmIHByZXNlbnQsIHRoZSBzdGF0ZW1lbnRzIHdpbGwgYmUgYXBwZW5kZWRcclxuLy8gdG8gaXRzIGJvZHkgaW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBub2RlLlxyXG5cclxucHAkOC5wYXJzZVRvcExldmVsID0gZnVuY3Rpb24obm9kZSkge1xyXG4gIHZhciBleHBvcnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBpZiAoIW5vZGUuYm9keSkgeyBub2RlLmJvZHkgPSBbXTsgfVxyXG4gIHdoaWxlICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuZW9mKSB7XHJcbiAgICB2YXIgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCwgdHJ1ZSwgZXhwb3J0cyk7XHJcbiAgICBub2RlLmJvZHkucHVzaChzdG10KTtcclxuICB9XHJcbiAgaWYgKHRoaXMuaW5Nb2R1bGUpXHJcbiAgICB7IGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXModGhpcy51bmRlZmluZWRFeHBvcnRzKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGxpc3RbaV07XHJcblxyXG4gICAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnVuZGVmaW5lZEV4cG9ydHNbbmFtZV0uc3RhcnQsIChcIkV4cG9ydCAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCBkZWZpbmVkXCIpKTtcclxuICAgICAgfSB9XHJcbiAgdGhpcy5hZGFwdERpcmVjdGl2ZVByb2xvZ3VlKG5vZGUuYm9keSk7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgbm9kZS5zb3VyY2VUeXBlID0gdGhpcy5vcHRpb25zLnNvdXJjZVR5cGU7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlByb2dyYW1cIilcclxufTtcclxuXHJcbnZhciBsb29wTGFiZWwgPSB7a2luZDogXCJsb29wXCJ9LCBzd2l0Y2hMYWJlbCA9IHtraW5kOiBcInN3aXRjaFwifTtcclxuXHJcbnBwJDguaXNMZXQgPSBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDYgfHwgIXRoaXMuaXNDb250ZXh0dWFsKFwibGV0XCIpKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgc2tpcFdoaXRlU3BhY2UubGFzdEluZGV4ID0gdGhpcy5wb3M7XHJcbiAgdmFyIHNraXAgPSBza2lwV2hpdGVTcGFjZS5leGVjKHRoaXMuaW5wdXQpO1xyXG4gIHZhciBuZXh0ID0gdGhpcy5wb3MgKyBza2lwWzBdLmxlbmd0aCwgbmV4dENoID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KG5leHQpO1xyXG4gIC8vIEZvciBhbWJpZ3VvdXMgY2FzZXMsIGRldGVybWluZSBpZiBhIExleGljYWxEZWNsYXJhdGlvbiAob3Igb25seSBhXHJcbiAgLy8gU3RhdGVtZW50KSBpcyBhbGxvd2VkIGhlcmUuIElmIGNvbnRleHQgaXMgbm90IGVtcHR5IHRoZW4gb25seSBhIFN0YXRlbWVudFxyXG4gIC8vIGlzIGFsbG93ZWQuIEhvd2V2ZXIsIGBsZXQgW2AgaXMgYW4gZXhwbGljaXQgbmVnYXRpdmUgbG9va2FoZWFkIGZvclxyXG4gIC8vIEV4cHJlc3Npb25TdGF0ZW1lbnQsIHNvIHNwZWNpYWwtY2FzZSBpdCBmaXJzdC5cclxuICBpZiAobmV4dENoID09PSA5MSB8fCBuZXh0Q2ggPT09IDkyKSB7IHJldHVybiB0cnVlIH0gLy8gJ1snLCAnLydcclxuICBpZiAoY29udGV4dCkgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICBpZiAobmV4dENoID09PSAxMjMgfHwgbmV4dENoID4gMHhkN2ZmICYmIG5leHRDaCA8IDB4ZGMwMCkgeyByZXR1cm4gdHJ1ZSB9IC8vICd7JywgYXN0cmFsXHJcbiAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KG5leHRDaCwgdHJ1ZSkpIHtcclxuICAgIHZhciBwb3MgPSBuZXh0ICsgMTtcclxuICAgIHdoaWxlIChpc0lkZW50aWZpZXJDaGFyKG5leHRDaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdChwb3MpLCB0cnVlKSkgeyArK3BvczsgfVxyXG4gICAgaWYgKG5leHRDaCA9PT0gOTIgfHwgbmV4dENoID4gMHhkN2ZmICYmIG5leHRDaCA8IDB4ZGMwMCkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICB2YXIgaWRlbnQgPSB0aGlzLmlucHV0LnNsaWNlKG5leHQsIHBvcyk7XHJcbiAgICBpZiAoIWtleXdvcmRSZWxhdGlvbmFsT3BlcmF0b3IudGVzdChpZGVudCkpIHsgcmV0dXJuIHRydWUgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIGNoZWNrICdhc3luYyBbbm8gTGluZVRlcm1pbmF0b3IgaGVyZV0gZnVuY3Rpb24nXHJcbi8vIC0gJ2FzeW5jIC8qZm9vKi8gZnVuY3Rpb24nIGlzIE9LLlxyXG4vLyAtICdhc3luYyAvKlxcbiovIGZ1bmN0aW9uJyBpcyBpbnZhbGlkLlxyXG5wcCQ4LmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA4IHx8ICF0aGlzLmlzQ29udGV4dHVhbChcImFzeW5jXCIpKVxyXG4gICAgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSB0aGlzLnBvcztcclxuICB2YXIgc2tpcCA9IHNraXBXaGl0ZVNwYWNlLmV4ZWModGhpcy5pbnB1dCk7XHJcbiAgdmFyIG5leHQgPSB0aGlzLnBvcyArIHNraXBbMF0ubGVuZ3RoLCBhZnRlcjtcclxuICByZXR1cm4gIWxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5wb3MsIG5leHQpKSAmJlxyXG4gICAgdGhpcy5pbnB1dC5zbGljZShuZXh0LCBuZXh0ICsgOCkgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgKG5leHQgKyA4ID09PSB0aGlzLmlucHV0Lmxlbmd0aCB8fFxyXG4gICAgICEoaXNJZGVudGlmaWVyQ2hhcihhZnRlciA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdChuZXh0ICsgOCkpIHx8IGFmdGVyID4gMHhkN2ZmICYmIGFmdGVyIDwgMHhkYzAwKSlcclxufTtcclxuXHJcbi8vIFBhcnNlIGEgc2luZ2xlIHN0YXRlbWVudC5cclxuLy9cclxuLy8gSWYgZXhwZWN0aW5nIGEgc3RhdGVtZW50IGFuZCBmaW5kaW5nIGEgc2xhc2ggb3BlcmF0b3IsIHBhcnNlIGFcclxuLy8gcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWwuIFRoaXMgaXMgdG8gaGFuZGxlIGNhc2VzIGxpa2VcclxuLy8gYGlmIChmb28pIC9ibGFoLy5leGVjKGZvbylgLCB3aGVyZSBsb29raW5nIGF0IHRoZSBwcmV2aW91cyB0b2tlblxyXG4vLyBkb2VzIG5vdCBoZWxwLlxyXG5cclxucHAkOC5wYXJzZVN0YXRlbWVudCA9IGZ1bmN0aW9uKGNvbnRleHQsIHRvcExldmVsLCBleHBvcnRzKSB7XHJcbiAgdmFyIHN0YXJ0dHlwZSA9IHRoaXMudHlwZSwgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCksIGtpbmQ7XHJcblxyXG4gIGlmICh0aGlzLmlzTGV0KGNvbnRleHQpKSB7XHJcbiAgICBzdGFydHR5cGUgPSB0eXBlcyQxLl92YXI7XHJcbiAgICBraW5kID0gXCJsZXRcIjtcclxuICB9XHJcblxyXG4gIC8vIE1vc3QgdHlwZXMgb2Ygc3RhdGVtZW50cyBhcmUgcmVjb2duaXplZCBieSB0aGUga2V5d29yZCB0aGV5XHJcbiAgLy8gc3RhcnQgd2l0aC4gTWFueSBhcmUgdHJpdmlhbCB0byBwYXJzZSwgc29tZSByZXF1aXJlIGEgYml0IG9mXHJcbiAgLy8gY29tcGxleGl0eS5cclxuXHJcbiAgc3dpdGNoIChzdGFydHR5cGUpIHtcclxuICBjYXNlIHR5cGVzJDEuX2JyZWFrOiBjYXNlIHR5cGVzJDEuX2NvbnRpbnVlOiByZXR1cm4gdGhpcy5wYXJzZUJyZWFrQ29udGludWVTdGF0ZW1lbnQobm9kZSwgc3RhcnR0eXBlLmtleXdvcmQpXHJcbiAgY2FzZSB0eXBlcyQxLl9kZWJ1Z2dlcjogcmV0dXJuIHRoaXMucGFyc2VEZWJ1Z2dlclN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5fZG86IHJldHVybiB0aGlzLnBhcnNlRG9TdGF0ZW1lbnQobm9kZSlcclxuICBjYXNlIHR5cGVzJDEuX2ZvcjogcmV0dXJuIHRoaXMucGFyc2VGb3JTdGF0ZW1lbnQobm9kZSlcclxuICBjYXNlIHR5cGVzJDEuX2Z1bmN0aW9uOlxyXG4gICAgLy8gRnVuY3Rpb24gYXMgc29sZSBib2R5IG9mIGVpdGhlciBhbiBpZiBzdGF0ZW1lbnQgb3IgYSBsYWJlbGVkIHN0YXRlbWVudFxyXG4gICAgLy8gd29ya3MsIGJ1dCBub3Qgd2hlbiBpdCBpcyBwYXJ0IG9mIGEgbGFiZWxlZCBzdGF0ZW1lbnQgdGhhdCBpcyB0aGUgc29sZVxyXG4gICAgLy8gYm9keSBvZiBhbiBpZiBzdGF0ZW1lbnQuXHJcbiAgICBpZiAoKGNvbnRleHQgJiYgKHRoaXMuc3RyaWN0IHx8IGNvbnRleHQgIT09IFwiaWZcIiAmJiBjb250ZXh0ICE9PSBcImxhYmVsXCIpKSAmJiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvblN0YXRlbWVudChub2RlLCBmYWxzZSwgIWNvbnRleHQpXHJcbiAgY2FzZSB0eXBlcyQxLl9jbGFzczpcclxuICAgIGlmIChjb250ZXh0KSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNsYXNzKG5vZGUsIHRydWUpXHJcbiAgY2FzZSB0eXBlcyQxLl9pZjogcmV0dXJuIHRoaXMucGFyc2VJZlN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5fcmV0dXJuOiByZXR1cm4gdGhpcy5wYXJzZVJldHVyblN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5fc3dpdGNoOiByZXR1cm4gdGhpcy5wYXJzZVN3aXRjaFN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5fdGhyb3c6IHJldHVybiB0aGlzLnBhcnNlVGhyb3dTdGF0ZW1lbnQobm9kZSlcclxuICBjYXNlIHR5cGVzJDEuX3RyeTogcmV0dXJuIHRoaXMucGFyc2VUcnlTdGF0ZW1lbnQobm9kZSlcclxuICBjYXNlIHR5cGVzJDEuX2NvbnN0OiBjYXNlIHR5cGVzJDEuX3ZhcjpcclxuICAgIGtpbmQgPSBraW5kIHx8IHRoaXMudmFsdWU7XHJcbiAgICBpZiAoY29udGV4dCAmJiBraW5kICE9PSBcInZhclwiKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZVZhclN0YXRlbWVudChub2RlLCBraW5kKVxyXG4gIGNhc2UgdHlwZXMkMS5fd2hpbGU6IHJldHVybiB0aGlzLnBhcnNlV2hpbGVTdGF0ZW1lbnQobm9kZSlcclxuICBjYXNlIHR5cGVzJDEuX3dpdGg6IHJldHVybiB0aGlzLnBhcnNlV2l0aFN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5icmFjZUw6IHJldHVybiB0aGlzLnBhcnNlQmxvY2sodHJ1ZSwgbm9kZSlcclxuICBjYXNlIHR5cGVzJDEuc2VtaTogcmV0dXJuIHRoaXMucGFyc2VFbXB0eVN0YXRlbWVudChub2RlKVxyXG4gIGNhc2UgdHlwZXMkMS5fZXhwb3J0OlxyXG4gIGNhc2UgdHlwZXMkMS5faW1wb3J0OlxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+IDEwICYmIHN0YXJ0dHlwZSA9PT0gdHlwZXMkMS5faW1wb3J0KSB7XHJcbiAgICAgIHNraXBXaGl0ZVNwYWNlLmxhc3RJbmRleCA9IHRoaXMucG9zO1xyXG4gICAgICB2YXIgc2tpcCA9IHNraXBXaGl0ZVNwYWNlLmV4ZWModGhpcy5pbnB1dCk7XHJcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5wb3MgKyBza2lwWzBdLmxlbmd0aCwgbmV4dENoID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KG5leHQpO1xyXG4gICAgICBpZiAobmV4dENoID09PSA0MCB8fCBuZXh0Q2ggPT09IDQ2KSAvLyAnKCcgb3IgJy4nXHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSwgdGhpcy5wYXJzZUV4cHJlc3Npb24oKSkgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb25zLmFsbG93SW1wb3J0RXhwb3J0RXZlcnl3aGVyZSkge1xyXG4gICAgICBpZiAoIXRvcExldmVsKVxyXG4gICAgICAgIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIidpbXBvcnQnIGFuZCAnZXhwb3J0JyBtYXkgb25seSBhcHBlYXIgYXQgdGhlIHRvcCBsZXZlbFwiKTsgfVxyXG4gICAgICBpZiAoIXRoaXMuaW5Nb2R1bGUpXHJcbiAgICAgICAgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiJ2ltcG9ydCcgYW5kICdleHBvcnQnIG1heSBhcHBlYXIgb25seSB3aXRoICdzb3VyY2VUeXBlOiBtb2R1bGUnXCIpOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhcnR0eXBlID09PSB0eXBlcyQxLl9pbXBvcnQgPyB0aGlzLnBhcnNlSW1wb3J0KG5vZGUpIDogdGhpcy5wYXJzZUV4cG9ydChub2RlLCBleHBvcnRzKVxyXG5cclxuICAgIC8vIElmIHRoZSBzdGF0ZW1lbnQgZG9lcyBub3Qgc3RhcnQgd2l0aCBhIHN0YXRlbWVudCBrZXl3b3JkIG9yIGFcclxuICAgIC8vIGJyYWNlLCBpdCdzIGFuIEV4cHJlc3Npb25TdGF0ZW1lbnQgb3IgTGFiZWxlZFN0YXRlbWVudC4gV2VcclxuICAgIC8vIHNpbXBseSBzdGFydCBwYXJzaW5nIGFuIGV4cHJlc3Npb24sIGFuZCBhZnRlcndhcmRzLCBpZiB0aGVcclxuICAgIC8vIG5leHQgdG9rZW4gaXMgYSBjb2xvbiBhbmQgdGhlIGV4cHJlc3Npb24gd2FzIGEgc2ltcGxlXHJcbiAgICAvLyBJZGVudGlmaWVyIG5vZGUsIHdlIHN3aXRjaCB0byBpbnRlcnByZXRpbmcgaXQgYXMgYSBsYWJlbC5cclxuICBkZWZhdWx0OlxyXG4gICAgaWYgKHRoaXMuaXNBc3luY0Z1bmN0aW9uKCkpIHtcclxuICAgICAgaWYgKGNvbnRleHQpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb25TdGF0ZW1lbnQobm9kZSwgdHJ1ZSwgIWNvbnRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1heWJlTmFtZSA9IHRoaXMudmFsdWUsIGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgaWYgKHN0YXJ0dHlwZSA9PT0gdHlwZXMkMS5uYW1lICYmIGV4cHIudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgJiYgdGhpcy5lYXQodHlwZXMkMS5jb2xvbikpXHJcbiAgICAgIHsgcmV0dXJuIHRoaXMucGFyc2VMYWJlbGVkU3RhdGVtZW50KG5vZGUsIG1heWJlTmFtZSwgZXhwciwgY29udGV4dCkgfVxyXG4gICAgZWxzZSB7IHJldHVybiB0aGlzLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChub2RlLCBleHByKSB9XHJcbiAgfVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUJyZWFrQ29udGludWVTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlLCBrZXl3b3JkKSB7XHJcbiAgdmFyIGlzQnJlYWsgPSBrZXl3b3JkID09PSBcImJyZWFrXCI7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuc2VtaSkgfHwgdGhpcy5pbnNlcnRTZW1pY29sb24oKSkgeyBub2RlLmxhYmVsID0gbnVsbDsgfVxyXG4gIGVsc2UgaWYgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5uYW1lKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgZWxzZSB7XHJcbiAgICBub2RlLmxhYmVsID0gdGhpcy5wYXJzZUlkZW50KCk7XHJcbiAgICB0aGlzLnNlbWljb2xvbigpO1xyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZ5IHRoYXQgdGhlcmUgaXMgYW4gYWN0dWFsIGRlc3RpbmF0aW9uIHRvIGJyZWFrIG9yXHJcbiAgLy8gY29udGludWUgdG8uXHJcbiAgdmFyIGkgPSAwO1xyXG4gIGZvciAoOyBpIDwgdGhpcy5sYWJlbHMubGVuZ3RoOyArK2kpIHtcclxuICAgIHZhciBsYWIgPSB0aGlzLmxhYmVsc1tpXTtcclxuICAgIGlmIChub2RlLmxhYmVsID09IG51bGwgfHwgbGFiLm5hbWUgPT09IG5vZGUubGFiZWwubmFtZSkge1xyXG4gICAgICBpZiAobGFiLmtpbmQgIT0gbnVsbCAmJiAoaXNCcmVhayB8fCBsYWIua2luZCA9PT0gXCJsb29wXCIpKSB7IGJyZWFrIH1cclxuICAgICAgaWYgKG5vZGUubGFiZWwgJiYgaXNCcmVhaykgeyBicmVhayB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChpID09PSB0aGlzLmxhYmVscy5sZW5ndGgpIHsgdGhpcy5yYWlzZShub2RlLnN0YXJ0LCBcIlVuc3ludGFjdGljIFwiICsga2V5d29yZCk7IH1cclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIGlzQnJlYWsgPyBcIkJyZWFrU3RhdGVtZW50XCIgOiBcIkNvbnRpbnVlU3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlRGVidWdnZXJTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgdGhpcy5zZW1pY29sb24oKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiRGVidWdnZXJTdGF0ZW1lbnRcIilcclxufTtcclxuXHJcbnBwJDgucGFyc2VEb1N0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICB0aGlzLm5leHQoKTtcclxuICB0aGlzLmxhYmVscy5wdXNoKGxvb3BMYWJlbCk7XHJcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcImRvXCIpO1xyXG4gIHRoaXMubGFiZWxzLnBvcCgpO1xyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEuX3doaWxlKTtcclxuICBub2RlLnRlc3QgPSB0aGlzLnBhcnNlUGFyZW5FeHByZXNzaW9uKCk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KVxyXG4gICAgeyB0aGlzLmVhdCh0eXBlcyQxLnNlbWkpOyB9XHJcbiAgZWxzZVxyXG4gICAgeyB0aGlzLnNlbWljb2xvbigpOyB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkRvV2hpbGVTdGF0ZW1lbnRcIilcclxufTtcclxuXHJcbi8vIERpc2FtYmlndWF0aW5nIGJldHdlZW4gYSBgZm9yYCBhbmQgYSBgZm9yYC9gaW5gIG9yIGBmb3JgL2BvZmBcclxuLy8gbG9vcCBpcyBub24tdHJpdmlhbC4gQmFzaWNhbGx5LCB3ZSBoYXZlIHRvIHBhcnNlIHRoZSBpbml0IGB2YXJgXHJcbi8vIHN0YXRlbWVudCBvciBleHByZXNzaW9uLCBkaXNhbGxvd2luZyB0aGUgYGluYCBvcGVyYXRvciAoc2VlXHJcbi8vIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHRvIGBwYXJzZUV4cHJlc3Npb25gKSwgYW5kIHRoZW4gY2hlY2tcclxuLy8gd2hldGhlciB0aGUgbmV4dCB0b2tlbiBpcyBgaW5gIG9yIGBvZmAuIFdoZW4gdGhlcmUgaXMgbm8gaW5pdFxyXG4vLyBwYXJ0IChzZW1pY29sb24gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIG9wZW5pbmcgcGFyZW50aGVzaXMpLCBpdFxyXG4vLyBpcyBhIHJlZ3VsYXIgYGZvcmAgbG9vcC5cclxuXHJcbnBwJDgucGFyc2VGb3JTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgdmFyIGF3YWl0QXQgPSAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkgJiYgdGhpcy5jYW5Bd2FpdCAmJiB0aGlzLmVhdENvbnRleHR1YWwoXCJhd2FpdFwiKSkgPyB0aGlzLmxhc3RUb2tTdGFydCA6IC0xO1xyXG4gIHRoaXMubGFiZWxzLnB1c2gobG9vcExhYmVsKTtcclxuICB0aGlzLmVudGVyU2NvcGUoMCk7XHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlbkwpO1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuc2VtaSkge1xyXG4gICAgaWYgKGF3YWl0QXQgPiAtMSkgeyB0aGlzLnVuZXhwZWN0ZWQoYXdhaXRBdCk7IH1cclxuICAgIHJldHVybiB0aGlzLnBhcnNlRm9yKG5vZGUsIG51bGwpXHJcbiAgfVxyXG4gIHZhciBpc0xldCA9IHRoaXMuaXNMZXQoKTtcclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl92YXIgfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLl9jb25zdCB8fCBpc0xldCkge1xyXG4gICAgdmFyIGluaXQkMSA9IHRoaXMuc3RhcnROb2RlKCksIGtpbmQgPSBpc0xldCA/IFwibGV0XCIgOiB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB0aGlzLnBhcnNlVmFyKGluaXQkMSwgdHJ1ZSwga2luZCk7XHJcbiAgICB0aGlzLmZpbmlzaE5vZGUoaW5pdCQxLCBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIik7XHJcbiAgICBpZiAoKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5faW4gfHwgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIHRoaXMuaXNDb250ZXh0dWFsKFwib2ZcIikpKSAmJiBpbml0JDEuZGVjbGFyYXRpb25zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9pbikge1xyXG4gICAgICAgICAgaWYgKGF3YWl0QXQgPiAtMSkgeyB0aGlzLnVuZXhwZWN0ZWQoYXdhaXRBdCk7IH1cclxuICAgICAgICB9IGVsc2UgeyBub2RlLmF3YWl0ID0gYXdhaXRBdCA+IC0xOyB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMucGFyc2VGb3JJbihub2RlLCBpbml0JDEpXHJcbiAgICB9XHJcbiAgICBpZiAoYXdhaXRBdCA+IC0xKSB7IHRoaXMudW5leHBlY3RlZChhd2FpdEF0KTsgfVxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VGb3Iobm9kZSwgaW5pdCQxKVxyXG4gIH1cclxuICB2YXIgc3RhcnRzV2l0aExldCA9IHRoaXMuaXNDb250ZXh0dWFsKFwibGV0XCIpLCBpc0Zvck9mID0gZmFsc2U7XHJcbiAgdmFyIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMgPSBuZXcgRGVzdHJ1Y3R1cmluZ0Vycm9ycztcclxuICB2YXIgaW5pdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKGF3YWl0QXQgPiAtMSA/IFwiYXdhaXRcIiA6IHRydWUsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luIHx8IChpc0Zvck9mID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgdGhpcy5pc0NvbnRleHR1YWwoXCJvZlwiKSkpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSkge1xyXG4gICAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9pbikge1xyXG4gICAgICAgIGlmIChhd2FpdEF0ID4gLTEpIHsgdGhpcy51bmV4cGVjdGVkKGF3YWl0QXQpOyB9XHJcbiAgICAgIH0gZWxzZSB7IG5vZGUuYXdhaXQgPSBhd2FpdEF0ID4gLTE7IH1cclxuICAgIH1cclxuICAgIGlmIChzdGFydHNXaXRoTGV0ICYmIGlzRm9yT2YpIHsgdGhpcy5yYWlzZShpbml0LnN0YXJ0LCBcIlRoZSBsZWZ0LWhhbmQgc2lkZSBvZiBhIGZvci1vZiBsb29wIG1heSBub3Qgc3RhcnQgd2l0aCAnbGV0Jy5cIik7IH1cclxuICAgIHRoaXMudG9Bc3NpZ25hYmxlKGluaXQsIGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcclxuICAgIHRoaXMuY2hlY2tMVmFsUGF0dGVybihpbml0KTtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlRm9ySW4obm9kZSwgaW5pdClcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChhd2FpdEF0ID4gLTEpIHsgdGhpcy51bmV4cGVjdGVkKGF3YWl0QXQpOyB9XHJcbiAgcmV0dXJuIHRoaXMucGFyc2VGb3Iobm9kZSwgaW5pdClcclxufTtcclxuXHJcbnBwJDgucGFyc2VGdW5jdGlvblN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIGlzQXN5bmMsIGRlY2xhcmF0aW9uUG9zaXRpb24pIHtcclxuICB0aGlzLm5leHQoKTtcclxuICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKG5vZGUsIEZVTkNfU1RBVEVNRU5UIHwgKGRlY2xhcmF0aW9uUG9zaXRpb24gPyAwIDogRlVOQ19IQU5HSU5HX1NUQVRFTUVOVCksIGZhbHNlLCBpc0FzeW5jKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUlmU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIG5vZGUudGVzdCA9IHRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtcclxuICAvLyBhbGxvdyBmdW5jdGlvbiBkZWNsYXJhdGlvbnMgaW4gYnJhbmNoZXMsIGJ1dCBvbmx5IGluIG5vbi1zdHJpY3QgbW9kZVxyXG4gIG5vZGUuY29uc2VxdWVudCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoXCJpZlwiKTtcclxuICBub2RlLmFsdGVybmF0ZSA9IHRoaXMuZWF0KHR5cGVzJDEuX2Vsc2UpID8gdGhpcy5wYXJzZVN0YXRlbWVudChcImlmXCIpIDogbnVsbDtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSWZTdGF0ZW1lbnRcIilcclxufTtcclxuXHJcbnBwJDgucGFyc2VSZXR1cm5TdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgaWYgKCF0aGlzLmluRnVuY3Rpb24gJiYgIXRoaXMub3B0aW9ucy5hbGxvd1JldHVybk91dHNpZGVGdW5jdGlvbilcclxuICAgIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIidyZXR1cm4nIG91dHNpZGUgb2YgZnVuY3Rpb25cIik7IH1cclxuICB0aGlzLm5leHQoKTtcclxuXHJcbiAgLy8gSW4gYHJldHVybmAgKGFuZCBgYnJlYWtgL2Bjb250aW51ZWApLCB0aGUga2V5d29yZHMgd2l0aFxyXG4gIC8vIG9wdGlvbmFsIGFyZ3VtZW50cywgd2UgZWFnZXJseSBsb29rIGZvciBhIHNlbWljb2xvbiBvciB0aGVcclxuICAvLyBwb3NzaWJpbGl0eSB0byBpbnNlcnQgb25lLlxyXG5cclxuICBpZiAodGhpcy5lYXQodHlwZXMkMS5zZW1pKSB8fCB0aGlzLmluc2VydFNlbWljb2xvbigpKSB7IG5vZGUuYXJndW1lbnQgPSBudWxsOyB9XHJcbiAgZWxzZSB7IG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpOyB0aGlzLnNlbWljb2xvbigpOyB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlJldHVyblN0YXRlbWVudFwiKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZVN3aXRjaFN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICB0aGlzLm5leHQoKTtcclxuICBub2RlLmRpc2NyaW1pbmFudCA9IHRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtcclxuICBub2RlLmNhc2VzID0gW107XHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFjZUwpO1xyXG4gIHRoaXMubGFiZWxzLnB1c2goc3dpdGNoTGFiZWwpO1xyXG4gIHRoaXMuZW50ZXJTY29wZSgwKTtcclxuXHJcbiAgLy8gU3RhdGVtZW50cyB1bmRlciBtdXN0IGJlIGdyb3VwZWQgKGJ5IGxhYmVsKSBpbiBTd2l0Y2hDYXNlXHJcbiAgLy8gbm9kZXMuIGBjdXJgIGlzIHVzZWQgdG8ga2VlcCB0aGUgbm9kZSB0aGF0IHdlIGFyZSBjdXJyZW50bHlcclxuICAvLyBhZGRpbmcgc3RhdGVtZW50cyB0by5cclxuXHJcbiAgdmFyIGN1cjtcclxuICBmb3IgKHZhciBzYXdEZWZhdWx0ID0gZmFsc2U7IHRoaXMudHlwZSAhPT0gdHlwZXMkMS5icmFjZVI7KSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9jYXNlIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fZGVmYXVsdCkge1xyXG4gICAgICB2YXIgaXNDYXNlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLl9jYXNlO1xyXG4gICAgICBpZiAoY3VyKSB7IHRoaXMuZmluaXNoTm9kZShjdXIsIFwiU3dpdGNoQ2FzZVwiKTsgfVxyXG4gICAgICBub2RlLmNhc2VzLnB1c2goY3VyID0gdGhpcy5zdGFydE5vZGUoKSk7XHJcbiAgICAgIGN1ci5jb25zZXF1ZW50ID0gW107XHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICBpZiAoaXNDYXNlKSB7XHJcbiAgICAgICAgY3VyLnRlc3QgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzYXdEZWZhdWx0KSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLmxhc3RUb2tTdGFydCwgXCJNdWx0aXBsZSBkZWZhdWx0IGNsYXVzZXNcIik7IH1cclxuICAgICAgICBzYXdEZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICBjdXIudGVzdCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb2xvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWN1cikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG4gICAgICBjdXIuY29uc2VxdWVudC5wdXNoKHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLmV4aXRTY29wZSgpO1xyXG4gIGlmIChjdXIpIHsgdGhpcy5maW5pc2hOb2RlKGN1ciwgXCJTd2l0Y2hDYXNlXCIpOyB9XHJcbiAgdGhpcy5uZXh0KCk7IC8vIENsb3NpbmcgYnJhY2VcclxuICB0aGlzLmxhYmVscy5wb3AoKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiU3dpdGNoU3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlVGhyb3dTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgaWYgKGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnN0YXJ0KSkpXHJcbiAgICB7IHRoaXMucmFpc2UodGhpcy5sYXN0VG9rRW5kLCBcIklsbGVnYWwgbmV3bGluZSBhZnRlciB0aHJvd1wiKTsgfVxyXG4gIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gIHRoaXMuc2VtaWNvbG9uKCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlRocm93U3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG4vLyBSZXVzZWQgZW1wdHkgYXJyYXkgYWRkZWQgZm9yIG5vZGUgZmllbGRzIHRoYXQgYXJlIGFsd2F5cyBlbXB0eS5cclxuXHJcbnZhciBlbXB0eSQxID0gW107XHJcblxyXG5wcCQ4LnBhcnNlQ2F0Y2hDbGF1c2VQYXJhbSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXJhbSA9IHRoaXMucGFyc2VCaW5kaW5nQXRvbSgpO1xyXG4gIHZhciBzaW1wbGUgPSBwYXJhbS50eXBlID09PSBcIklkZW50aWZpZXJcIjtcclxuICB0aGlzLmVudGVyU2NvcGUoc2ltcGxlID8gU0NPUEVfU0lNUExFX0NBVENIIDogMCk7XHJcbiAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKHBhcmFtLCBzaW1wbGUgPyBCSU5EX1NJTVBMRV9DQVRDSCA6IEJJTkRfTEVYSUNBTCk7XHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlblIpO1xyXG5cclxuICByZXR1cm4gcGFyYW1cclxufTtcclxuXHJcbnBwJDgucGFyc2VUcnlTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgbm9kZS5ibG9jayA9IHRoaXMucGFyc2VCbG9jaygpO1xyXG4gIG5vZGUuaGFuZGxlciA9IG51bGw7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fY2F0Y2gpIHtcclxuICAgIHZhciBjbGF1c2UgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICBpZiAodGhpcy5lYXQodHlwZXMkMS5wYXJlbkwpKSB7XHJcbiAgICAgIGNsYXVzZS5wYXJhbSA9IHRoaXMucGFyc2VDYXRjaENsYXVzZVBhcmFtKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uIDwgMTApIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICAgICAgY2xhdXNlLnBhcmFtID0gbnVsbDtcclxuICAgICAgdGhpcy5lbnRlclNjb3BlKDApO1xyXG4gICAgfVxyXG4gICAgY2xhdXNlLmJvZHkgPSB0aGlzLnBhcnNlQmxvY2soZmFsc2UpO1xyXG4gICAgdGhpcy5leGl0U2NvcGUoKTtcclxuICAgIG5vZGUuaGFuZGxlciA9IHRoaXMuZmluaXNoTm9kZShjbGF1c2UsIFwiQ2F0Y2hDbGF1c2VcIik7XHJcbiAgfVxyXG4gIG5vZGUuZmluYWxpemVyID0gdGhpcy5lYXQodHlwZXMkMS5fZmluYWxseSkgPyB0aGlzLnBhcnNlQmxvY2soKSA6IG51bGw7XHJcbiAgaWYgKCFub2RlLmhhbmRsZXIgJiYgIW5vZGUuZmluYWxpemVyKVxyXG4gICAgeyB0aGlzLnJhaXNlKG5vZGUuc3RhcnQsIFwiTWlzc2luZyBjYXRjaCBvciBmaW5hbGx5IGNsYXVzZVwiKTsgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJUcnlTdGF0ZW1lbnRcIilcclxufTtcclxuXHJcbnBwJDgucGFyc2VWYXJTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlLCBraW5kLCBhbGxvd01pc3NpbmdJbml0aWFsaXplcikge1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHRoaXMucGFyc2VWYXIobm9kZSwgZmFsc2UsIGtpbmQsIGFsbG93TWlzc2luZ0luaXRpYWxpemVyKTtcclxuICB0aGlzLnNlbWljb2xvbigpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlV2hpbGVTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgbm9kZS50ZXN0ID0gdGhpcy5wYXJzZVBhcmVuRXhwcmVzc2lvbigpO1xyXG4gIHRoaXMubGFiZWxzLnB1c2gobG9vcExhYmVsKTtcclxuICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlU3RhdGVtZW50KFwid2hpbGVcIik7XHJcbiAgdGhpcy5sYWJlbHMucG9wKCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIldoaWxlU3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlV2l0aFN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICBpZiAodGhpcy5zdHJpY3QpIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIid3aXRoJyBpbiBzdHJpY3QgbW9kZVwiKTsgfVxyXG4gIHRoaXMubmV4dCgpO1xyXG4gIG5vZGUub2JqZWN0ID0gdGhpcy5wYXJzZVBhcmVuRXhwcmVzc2lvbigpO1xyXG4gIG5vZGUuYm9keSA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoXCJ3aXRoXCIpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJXaXRoU3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlRW1wdHlTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkVtcHR5U3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlTGFiZWxlZFN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIG1heWJlTmFtZSwgZXhwciwgY29udGV4dCkge1xyXG4gIGZvciAodmFyIGkkMSA9IDAsIGxpc3QgPSB0aGlzLmxhYmVsczsgaSQxIDwgbGlzdC5sZW5ndGg7IGkkMSArPSAxKVxyXG4gICAge1xyXG4gICAgdmFyIGxhYmVsID0gbGlzdFtpJDFdO1xyXG5cclxuICAgIGlmIChsYWJlbC5uYW1lID09PSBtYXliZU5hbWUpXHJcbiAgICAgIHsgdGhpcy5yYWlzZShleHByLnN0YXJ0LCBcIkxhYmVsICdcIiArIG1heWJlTmFtZSArIFwiJyBpcyBhbHJlYWR5IGRlY2xhcmVkXCIpO1xyXG4gIH0gfVxyXG4gIHZhciBraW5kID0gdGhpcy50eXBlLmlzTG9vcCA/IFwibG9vcFwiIDogdGhpcy50eXBlID09PSB0eXBlcyQxLl9zd2l0Y2ggPyBcInN3aXRjaFwiIDogbnVsbDtcclxuICBmb3IgKHZhciBpID0gdGhpcy5sYWJlbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIHZhciBsYWJlbCQxID0gdGhpcy5sYWJlbHNbaV07XHJcbiAgICBpZiAobGFiZWwkMS5zdGF0ZW1lbnRTdGFydCA9PT0gbm9kZS5zdGFydCkge1xyXG4gICAgICAvLyBVcGRhdGUgaW5mb3JtYXRpb24gYWJvdXQgcHJldmlvdXMgbGFiZWxzIG9uIHRoaXMgbm9kZVxyXG4gICAgICBsYWJlbCQxLnN0YXRlbWVudFN0YXJ0ID0gdGhpcy5zdGFydDtcclxuICAgICAgbGFiZWwkMS5raW5kID0ga2luZDtcclxuICAgIH0gZWxzZSB7IGJyZWFrIH1cclxuICB9XHJcbiAgdGhpcy5sYWJlbHMucHVzaCh7bmFtZTogbWF5YmVOYW1lLCBraW5kOiBraW5kLCBzdGF0ZW1lbnRTdGFydDogdGhpcy5zdGFydH0pO1xyXG4gIG5vZGUuYm9keSA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoY29udGV4dCA/IGNvbnRleHQuaW5kZXhPZihcImxhYmVsXCIpID09PSAtMSA/IGNvbnRleHQgKyBcImxhYmVsXCIgOiBjb250ZXh0IDogXCJsYWJlbFwiKTtcclxuICB0aGlzLmxhYmVscy5wb3AoKTtcclxuICBub2RlLmxhYmVsID0gZXhwcjtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiTGFiZWxlZFN0YXRlbWVudFwiKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlLCBleHByKSB7XHJcbiAgbm9kZS5leHByZXNzaW9uID0gZXhwcjtcclxuICB0aGlzLnNlbWljb2xvbigpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJFeHByZXNzaW9uU3RhdGVtZW50XCIpXHJcbn07XHJcblxyXG4vLyBQYXJzZSBhIHNlbWljb2xvbi1lbmNsb3NlZCBibG9jayBvZiBzdGF0ZW1lbnRzLCBoYW5kbGluZyBgXCJ1c2VcclxuLy8gc3RyaWN0XCJgIGRlY2xhcmF0aW9ucyB3aGVuIGBhbGxvd1N0cmljdGAgaXMgdHJ1ZSAodXNlZCBmb3JcclxuLy8gZnVuY3Rpb24gYm9kaWVzKS5cclxuXHJcbnBwJDgucGFyc2VCbG9jayA9IGZ1bmN0aW9uKGNyZWF0ZU5ld0xleGljYWxTY29wZSwgbm9kZSwgZXhpdFN0cmljdCkge1xyXG4gIGlmICggY3JlYXRlTmV3TGV4aWNhbFNjb3BlID09PSB2b2lkIDAgKSBjcmVhdGVOZXdMZXhpY2FsU2NvcGUgPSB0cnVlO1xyXG4gIGlmICggbm9kZSA9PT0gdm9pZCAwICkgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcblxyXG4gIG5vZGUuYm9keSA9IFtdO1xyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEuYnJhY2VMKTtcclxuICBpZiAoY3JlYXRlTmV3TGV4aWNhbFNjb3BlKSB7IHRoaXMuZW50ZXJTY29wZSgwKTsgfVxyXG4gIHdoaWxlICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSKSB7XHJcbiAgICB2YXIgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCk7XHJcbiAgICBub2RlLmJvZHkucHVzaChzdG10KTtcclxuICB9XHJcbiAgaWYgKGV4aXRTdHJpY3QpIHsgdGhpcy5zdHJpY3QgPSBmYWxzZTsgfVxyXG4gIHRoaXMubmV4dCgpO1xyXG4gIGlmIChjcmVhdGVOZXdMZXhpY2FsU2NvcGUpIHsgdGhpcy5leGl0U2NvcGUoKTsgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJCbG9ja1N0YXRlbWVudFwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgYSByZWd1bGFyIGBmb3JgIGxvb3AuIFRoZSBkaXNhbWJpZ3VhdGlvbiBjb2RlIGluXHJcbi8vIGBwYXJzZVN0YXRlbWVudGAgd2lsbCBhbHJlYWR5IGhhdmUgcGFyc2VkIHRoZSBpbml0IHN0YXRlbWVudCBvclxyXG4vLyBleHByZXNzaW9uLlxyXG5cclxucHAkOC5wYXJzZUZvciA9IGZ1bmN0aW9uKG5vZGUsIGluaXQpIHtcclxuICBub2RlLmluaXQgPSBpbml0O1xyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEuc2VtaSk7XHJcbiAgbm9kZS50ZXN0ID0gdGhpcy50eXBlID09PSB0eXBlcyQxLnNlbWkgPyBudWxsIDogdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnNlbWkpO1xyXG4gIG5vZGUudXBkYXRlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLnBhcmVuUiA/IG51bGwgOiB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5SKTtcclxuICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlU3RhdGVtZW50KFwiZm9yXCIpO1xyXG4gIHRoaXMuZXhpdFNjb3BlKCk7XHJcbiAgdGhpcy5sYWJlbHMucG9wKCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkZvclN0YXRlbWVudFwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgYSBgZm9yYC9gaW5gIGFuZCBgZm9yYC9gb2ZgIGxvb3AsIHdoaWNoIGFyZSBhbG1vc3RcclxuLy8gc2FtZSBmcm9tIHBhcnNlcidzIHBlcnNwZWN0aXZlLlxyXG5cclxucHAkOC5wYXJzZUZvckluID0gZnVuY3Rpb24obm9kZSwgaW5pdCkge1xyXG4gIHZhciBpc0ZvckluID0gdGhpcy50eXBlID09PSB0eXBlcyQxLl9pbjtcclxuICB0aGlzLm5leHQoKTtcclxuXHJcbiAgaWYgKFxyXG4gICAgaW5pdC50eXBlID09PSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiAmJlxyXG4gICAgaW5pdC5kZWNsYXJhdGlvbnNbMF0uaW5pdCAhPSBudWxsICYmXHJcbiAgICAoXHJcbiAgICAgICFpc0ZvckluIHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDggfHxcclxuICAgICAgdGhpcy5zdHJpY3QgfHxcclxuICAgICAgaW5pdC5raW5kICE9PSBcInZhclwiIHx8XHJcbiAgICAgIGluaXQuZGVjbGFyYXRpb25zWzBdLmlkLnR5cGUgIT09IFwiSWRlbnRpZmllclwiXHJcbiAgICApXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJhaXNlKFxyXG4gICAgICBpbml0LnN0YXJ0LFxyXG4gICAgICAoKGlzRm9ySW4gPyBcImZvci1pblwiIDogXCJmb3Itb2ZcIikgKyBcIiBsb29wIHZhcmlhYmxlIGRlY2xhcmF0aW9uIG1heSBub3QgaGF2ZSBhbiBpbml0aWFsaXplclwiKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbm9kZS5sZWZ0ID0gaW5pdDtcclxuICBub2RlLnJpZ2h0ID0gaXNGb3JJbiA/IHRoaXMucGFyc2VFeHByZXNzaW9uKCkgOiB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcclxuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnBhcmVuUik7XHJcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcImZvclwiKTtcclxuICB0aGlzLmV4aXRTY29wZSgpO1xyXG4gIHRoaXMubGFiZWxzLnBvcCgpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgaXNGb3JJbiA/IFwiRm9ySW5TdGF0ZW1lbnRcIiA6IFwiRm9yT2ZTdGF0ZW1lbnRcIilcclxufTtcclxuXHJcbi8vIFBhcnNlIGEgbGlzdCBvZiB2YXJpYWJsZSBkZWNsYXJhdGlvbnMuXHJcblxyXG5wcCQ4LnBhcnNlVmFyID0gZnVuY3Rpb24obm9kZSwgaXNGb3IsIGtpbmQsIGFsbG93TWlzc2luZ0luaXRpYWxpemVyKSB7XHJcbiAgbm9kZS5kZWNsYXJhdGlvbnMgPSBbXTtcclxuICBub2RlLmtpbmQgPSBraW5kO1xyXG4gIGZvciAoOzspIHtcclxuICAgIHZhciBkZWNsID0gdGhpcy5zdGFydE5vZGUoKTtcclxuICAgIHRoaXMucGFyc2VWYXJJZChkZWNsLCBraW5kKTtcclxuICAgIGlmICh0aGlzLmVhdCh0eXBlcyQxLmVxKSkge1xyXG4gICAgICBkZWNsLmluaXQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oaXNGb3IpO1xyXG4gICAgfSBlbHNlIGlmICghYWxsb3dNaXNzaW5nSW5pdGlhbGl6ZXIgJiYga2luZCA9PT0gXCJjb25zdFwiICYmICEodGhpcy50eXBlID09PSB0eXBlcyQxLl9pbiB8fCAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgdGhpcy5pc0NvbnRleHR1YWwoXCJvZlwiKSkpKSB7XHJcbiAgICAgIHRoaXMudW5leHBlY3RlZCgpO1xyXG4gICAgfSBlbHNlIGlmICghYWxsb3dNaXNzaW5nSW5pdGlhbGl6ZXIgJiYgZGVjbC5pZC50eXBlICE9PSBcIklkZW50aWZpZXJcIiAmJiAhKGlzRm9yICYmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luIHx8IHRoaXMuaXNDb250ZXh0dWFsKFwib2ZcIikpKSkge1xyXG4gICAgICB0aGlzLnJhaXNlKHRoaXMubGFzdFRva0VuZCwgXCJDb21wbGV4IGJpbmRpbmcgcGF0dGVybnMgcmVxdWlyZSBhbiBpbml0aWFsaXphdGlvbiB2YWx1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlY2wuaW5pdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBub2RlLmRlY2xhcmF0aW9ucy5wdXNoKHRoaXMuZmluaXNoTm9kZShkZWNsLCBcIlZhcmlhYmxlRGVjbGFyYXRvclwiKSk7XHJcbiAgICBpZiAoIXRoaXMuZWF0KHR5cGVzJDEuY29tbWEpKSB7IGJyZWFrIH1cclxuICB9XHJcbiAgcmV0dXJuIG5vZGVcclxufTtcclxuXHJcbnBwJDgucGFyc2VWYXJJZCA9IGZ1bmN0aW9uKGRlY2wsIGtpbmQpIHtcclxuICBkZWNsLmlkID0gdGhpcy5wYXJzZUJpbmRpbmdBdG9tKCk7XHJcbiAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGRlY2wuaWQsIGtpbmQgPT09IFwidmFyXCIgPyBCSU5EX1ZBUiA6IEJJTkRfTEVYSUNBTCwgZmFsc2UpO1xyXG59O1xyXG5cclxudmFyIEZVTkNfU1RBVEVNRU5UID0gMSwgRlVOQ19IQU5HSU5HX1NUQVRFTUVOVCA9IDIsIEZVTkNfTlVMTEFCTEVfSUQgPSA0O1xyXG5cclxuLy8gUGFyc2UgYSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBvciBsaXRlcmFsIChkZXBlbmRpbmcgb24gdGhlXHJcbi8vIGBzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVGApLlxyXG5cclxuLy8gUmVtb3ZlIGBhbGxvd0V4cHJlc3Npb25Cb2R5YCBmb3IgNy4wLjAsIGFzIGl0IGlzIG9ubHkgY2FsbGVkIHdpdGggZmFsc2VcclxucHAkOC5wYXJzZUZ1bmN0aW9uID0gZnVuY3Rpb24obm9kZSwgc3RhdGVtZW50LCBhbGxvd0V4cHJlc3Npb25Cb2R5LCBpc0FzeW5jLCBmb3JJbml0KSB7XHJcbiAgdGhpcy5pbml0RnVuY3Rpb24obm9kZSk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5IHx8IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmICFpc0FzeW5jKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnN0YXIgJiYgKHN0YXRlbWVudCAmIEZVTkNfSEFOR0lOR19TVEFURU1FTlQpKVxyXG4gICAgICB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICBub2RlLmdlbmVyYXRvciA9IHRoaXMuZWF0KHR5cGVzJDEuc3Rhcik7XHJcbiAgfVxyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOClcclxuICAgIHsgbm9kZS5hc3luYyA9ICEhaXNBc3luYzsgfVxyXG5cclxuICBpZiAoc3RhdGVtZW50ICYgRlVOQ19TVEFURU1FTlQpIHtcclxuICAgIG5vZGUuaWQgPSAoc3RhdGVtZW50ICYgRlVOQ19OVUxMQUJMRV9JRCkgJiYgdGhpcy50eXBlICE9PSB0eXBlcyQxLm5hbWUgPyBudWxsIDogdGhpcy5wYXJzZUlkZW50KCk7XHJcbiAgICBpZiAobm9kZS5pZCAmJiAhKHN0YXRlbWVudCAmIEZVTkNfSEFOR0lOR19TVEFURU1FTlQpKVxyXG4gICAgICAvLyBJZiBpdCBpcyBhIHJlZ3VsYXIgZnVuY3Rpb24gZGVjbGFyYXRpb24gaW4gc2xvcHB5IG1vZGUsIHRoZW4gaXQgaXNcclxuICAgICAgLy8gc3ViamVjdCB0byBBbm5leCBCIHNlbWFudGljcyAoQklORF9GVU5DVElPTikuIE90aGVyd2lzZSwgdGhlIGJpbmRpbmdcclxuICAgICAgLy8gbW9kZSBkZXBlbmRzIG9uIHByb3BlcnRpZXMgb2YgdGhlIGN1cnJlbnQgc2NvcGUgKHNlZVxyXG4gICAgICAvLyB0cmVhdEZ1bmN0aW9uc0FzVmFyKS5cclxuICAgICAgeyB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmlkLCAodGhpcy5zdHJpY3QgfHwgbm9kZS5nZW5lcmF0b3IgfHwgbm9kZS5hc3luYykgPyB0aGlzLnRyZWF0RnVuY3Rpb25zQXNWYXIgPyBCSU5EX1ZBUiA6IEJJTkRfTEVYSUNBTCA6IEJJTkRfRlVOQ1RJT04pOyB9XHJcbiAgfVxyXG5cclxuICB2YXIgb2xkWWllbGRQb3MgPSB0aGlzLnlpZWxkUG9zLCBvbGRBd2FpdFBvcyA9IHRoaXMuYXdhaXRQb3MsIG9sZEF3YWl0SWRlbnRQb3MgPSB0aGlzLmF3YWl0SWRlbnRQb3M7XHJcbiAgdGhpcy55aWVsZFBvcyA9IDA7XHJcbiAgdGhpcy5hd2FpdFBvcyA9IDA7XHJcbiAgdGhpcy5hd2FpdElkZW50UG9zID0gMDtcclxuICB0aGlzLmVudGVyU2NvcGUoZnVuY3Rpb25GbGFncyhub2RlLmFzeW5jLCBub2RlLmdlbmVyYXRvcikpO1xyXG5cclxuICBpZiAoIShzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVCkpXHJcbiAgICB7IG5vZGUuaWQgPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSA/IHRoaXMucGFyc2VJZGVudCgpIDogbnVsbDsgfVxyXG5cclxuICB0aGlzLnBhcnNlRnVuY3Rpb25QYXJhbXMobm9kZSk7XHJcbiAgdGhpcy5wYXJzZUZ1bmN0aW9uQm9keShub2RlLCBhbGxvd0V4cHJlc3Npb25Cb2R5LCBmYWxzZSwgZm9ySW5pdCk7XHJcblxyXG4gIHRoaXMueWllbGRQb3MgPSBvbGRZaWVsZFBvcztcclxuICB0aGlzLmF3YWl0UG9zID0gb2xkQXdhaXRQb3M7XHJcbiAgdGhpcy5hd2FpdElkZW50UG9zID0gb2xkQXdhaXRJZGVudFBvcztcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIChzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVCkgPyBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIiA6IFwiRnVuY3Rpb25FeHByZXNzaW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlRnVuY3Rpb25QYXJhbXMgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlbkwpO1xyXG4gIG5vZGUucGFyYW1zID0gdGhpcy5wYXJzZUJpbmRpbmdMaXN0KHR5cGVzJDEucGFyZW5SLCBmYWxzZSwgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDgpO1xyXG4gIHRoaXMuY2hlY2tZaWVsZEF3YWl0SW5EZWZhdWx0UGFyYW1zKCk7XHJcbn07XHJcblxyXG4vLyBQYXJzZSBhIGNsYXNzIGRlY2xhcmF0aW9uIG9yIGxpdGVyYWwgKGRlcGVuZGluZyBvbiB0aGVcclxuLy8gYGlzU3RhdGVtZW50YCBwYXJhbWV0ZXIpLlxyXG5cclxucHAkOC5wYXJzZUNsYXNzID0gZnVuY3Rpb24obm9kZSwgaXNTdGF0ZW1lbnQpIHtcclxuICB0aGlzLm5leHQoKTtcclxuXHJcbiAgLy8gZWNtYS0yNjIgMTQuNiBDbGFzcyBEZWZpbml0aW9uc1xyXG4gIC8vIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBhbHdheXMgc3RyaWN0IG1vZGUgY29kZS5cclxuICB2YXIgb2xkU3RyaWN0ID0gdGhpcy5zdHJpY3Q7XHJcbiAgdGhpcy5zdHJpY3QgPSB0cnVlO1xyXG5cclxuICB0aGlzLnBhcnNlQ2xhc3NJZChub2RlLCBpc1N0YXRlbWVudCk7XHJcbiAgdGhpcy5wYXJzZUNsYXNzU3VwZXIobm9kZSk7XHJcbiAgdmFyIHByaXZhdGVOYW1lTWFwID0gdGhpcy5lbnRlckNsYXNzQm9keSgpO1xyXG4gIHZhciBjbGFzc0JvZHkgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHZhciBoYWRDb25zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gIGNsYXNzQm9keS5ib2R5ID0gW107XHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFjZUwpO1xyXG4gIHdoaWxlICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucGFyc2VDbGFzc0VsZW1lbnQobm9kZS5zdXBlckNsYXNzICE9PSBudWxsKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGNsYXNzQm9keS5ib2R5LnB1c2goZWxlbWVudCk7XHJcbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiTWV0aG9kRGVmaW5pdGlvblwiICYmIGVsZW1lbnQua2luZCA9PT0gXCJjb25zdHJ1Y3RvclwiKSB7XHJcbiAgICAgICAgaWYgKGhhZENvbnN0cnVjdG9yKSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShlbGVtZW50LnN0YXJ0LCBcIkR1cGxpY2F0ZSBjb25zdHJ1Y3RvciBpbiB0aGUgc2FtZSBjbGFzc1wiKTsgfVxyXG4gICAgICAgIGhhZENvbnN0cnVjdG9yID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmtleSAmJiBlbGVtZW50LmtleS50eXBlID09PSBcIlByaXZhdGVJZGVudGlmaWVyXCIgJiYgaXNQcml2YXRlTmFtZUNvbmZsaWN0ZWQocHJpdmF0ZU5hbWVNYXAsIGVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGVsZW1lbnQua2V5LnN0YXJ0LCAoXCJJZGVudGlmaWVyICcjXCIgKyAoZWxlbWVudC5rZXkubmFtZSkgKyBcIicgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZFwiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdGhpcy5zdHJpY3QgPSBvbGRTdHJpY3Q7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgbm9kZS5ib2R5ID0gdGhpcy5maW5pc2hOb2RlKGNsYXNzQm9keSwgXCJDbGFzc0JvZHlcIik7XHJcbiAgdGhpcy5leGl0Q2xhc3NCb2R5KCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBpc1N0YXRlbWVudCA/IFwiQ2xhc3NEZWNsYXJhdGlvblwiIDogXCJDbGFzc0V4cHJlc3Npb25cIilcclxufTtcclxuXHJcbnBwJDgucGFyc2VDbGFzc0VsZW1lbnQgPSBmdW5jdGlvbihjb25zdHJ1Y3RvckFsbG93c1N1cGVyKSB7XHJcbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuc2VtaSkpIHsgcmV0dXJuIG51bGwgfVxyXG5cclxuICB2YXIgZWNtYVZlcnNpb24gPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb247XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHZhciBrZXlOYW1lID0gXCJcIjtcclxuICB2YXIgaXNHZW5lcmF0b3IgPSBmYWxzZTtcclxuICB2YXIgaXNBc3luYyA9IGZhbHNlO1xyXG4gIHZhciBraW5kID0gXCJtZXRob2RcIjtcclxuICB2YXIgaXNTdGF0aWMgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHRoaXMuZWF0Q29udGV4dHVhbChcInN0YXRpY1wiKSkge1xyXG4gICAgLy8gUGFyc2Ugc3RhdGljIGluaXQgYmxvY2tcclxuICAgIGlmIChlY21hVmVyc2lvbiA+PSAxMyAmJiB0aGlzLmVhdCh0eXBlcyQxLmJyYWNlTCkpIHtcclxuICAgICAgdGhpcy5wYXJzZUNsYXNzU3RhdGljQmxvY2sobm9kZSk7XHJcbiAgICAgIHJldHVybiBub2RlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0NsYXNzRWxlbWVudE5hbWVTdGFydCgpIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdGFyKSB7XHJcbiAgICAgIGlzU3RhdGljID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleU5hbWUgPSBcInN0YXRpY1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBub2RlLnN0YXRpYyA9IGlzU3RhdGljO1xyXG4gIGlmICgha2V5TmFtZSAmJiBlY21hVmVyc2lvbiA+PSA4ICYmIHRoaXMuZWF0Q29udGV4dHVhbChcImFzeW5jXCIpKSB7XHJcbiAgICBpZiAoKHRoaXMuaXNDbGFzc0VsZW1lbnROYW1lU3RhcnQoKSB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RhcikgJiYgIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkpIHtcclxuICAgICAgaXNBc3luYyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlOYW1lID0gXCJhc3luY1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWtleU5hbWUgJiYgKGVjbWFWZXJzaW9uID49IDkgfHwgIWlzQXN5bmMpICYmIHRoaXMuZWF0KHR5cGVzJDEuc3RhcikpIHtcclxuICAgIGlzR2VuZXJhdG9yID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKCFrZXlOYW1lICYmICFpc0FzeW5jICYmICFpc0dlbmVyYXRvcikge1xyXG4gICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICBpZiAodGhpcy5lYXRDb250ZXh0dWFsKFwiZ2V0XCIpIHx8IHRoaXMuZWF0Q29udGV4dHVhbChcInNldFwiKSkge1xyXG4gICAgICBpZiAodGhpcy5pc0NsYXNzRWxlbWVudE5hbWVTdGFydCgpKSB7XHJcbiAgICAgICAga2luZCA9IGxhc3RWYWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBrZXlOYW1lID0gbGFzdFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQYXJzZSBlbGVtZW50IG5hbWVcclxuICBpZiAoa2V5TmFtZSkge1xyXG4gICAgLy8gJ2FzeW5jJywgJ2dldCcsICdzZXQnLCBvciAnc3RhdGljJyB3ZXJlIG5vdCBhIGtleXdvcmQgY29udGV4dHVhbGx5LlxyXG4gICAgLy8gVGhlIGxhc3QgdG9rZW4gaXMgYW55IG9mIHRob3NlLiBNYWtlIGl0IHRoZSBlbGVtZW50IG5hbWUuXHJcbiAgICBub2RlLmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICBub2RlLmtleSA9IHRoaXMuc3RhcnROb2RlQXQodGhpcy5sYXN0VG9rU3RhcnQsIHRoaXMubGFzdFRva1N0YXJ0TG9jKTtcclxuICAgIG5vZGUua2V5Lm5hbWUgPSBrZXlOYW1lO1xyXG4gICAgdGhpcy5maW5pc2hOb2RlKG5vZGUua2V5LCBcIklkZW50aWZpZXJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucGFyc2VDbGFzc0VsZW1lbnROYW1lKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGFyc2UgZWxlbWVudCB2YWx1ZVxyXG4gIGlmIChlY21hVmVyc2lvbiA8IDEzIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wYXJlbkwgfHwga2luZCAhPT0gXCJtZXRob2RcIiB8fCBpc0dlbmVyYXRvciB8fCBpc0FzeW5jKSB7XHJcbiAgICB2YXIgaXNDb25zdHJ1Y3RvciA9ICFub2RlLnN0YXRpYyAmJiBjaGVja0tleU5hbWUobm9kZSwgXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgIHZhciBhbGxvd3NEaXJlY3RTdXBlciA9IGlzQ29uc3RydWN0b3IgJiYgY29uc3RydWN0b3JBbGxvd3NTdXBlcjtcclxuICAgIC8vIENvdWxkbid0IG1vdmUgdGhpcyBjaGVjayBpbnRvIHRoZSAncGFyc2VDbGFzc01ldGhvZCcgbWV0aG9kIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxyXG4gICAgaWYgKGlzQ29uc3RydWN0b3IgJiYga2luZCAhPT0gXCJtZXRob2RcIikgeyB0aGlzLnJhaXNlKG5vZGUua2V5LnN0YXJ0LCBcIkNvbnN0cnVjdG9yIGNhbid0IGhhdmUgZ2V0L3NldCBtb2RpZmllclwiKTsgfVxyXG4gICAgbm9kZS5raW5kID0gaXNDb25zdHJ1Y3RvciA/IFwiY29uc3RydWN0b3JcIiA6IGtpbmQ7XHJcbiAgICB0aGlzLnBhcnNlQ2xhc3NNZXRob2Qobm9kZSwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIGFsbG93c0RpcmVjdFN1cGVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5wYXJzZUNsYXNzRmllbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZVxyXG59O1xyXG5cclxucHAkOC5pc0NsYXNzRWxlbWVudE5hbWVTdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSB8fFxyXG4gICAgdGhpcy50eXBlID09PSB0eXBlcyQxLnByaXZhdGVJZCB8fFxyXG4gICAgdGhpcy50eXBlID09PSB0eXBlcyQxLm51bSB8fFxyXG4gICAgdGhpcy50eXBlID09PSB0eXBlcyQxLnN0cmluZyB8fFxyXG4gICAgdGhpcy50eXBlID09PSB0eXBlcyQxLmJyYWNrZXRMIHx8XHJcbiAgICB0aGlzLnR5cGUua2V5d29yZFxyXG4gIClcclxufTtcclxuXHJcbnBwJDgucGFyc2VDbGFzc0VsZW1lbnROYW1lID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucHJpdmF0ZUlkKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJjb25zdHJ1Y3RvclwiKSB7XHJcbiAgICAgIHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJDbGFzc2VzIGNhbid0IGhhdmUgYW4gZWxlbWVudCBuYW1lZCAnI2NvbnN0cnVjdG9yJ1wiKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnQuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgIGVsZW1lbnQua2V5ID0gdGhpcy5wYXJzZVByaXZhdGVJZGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKGVsZW1lbnQpO1xyXG4gIH1cclxufTtcclxuXHJcbnBwJDgucGFyc2VDbGFzc01ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIGFsbG93c0RpcmVjdFN1cGVyKSB7XHJcbiAgLy8gQ2hlY2sga2V5IGFuZCBmbGFnc1xyXG4gIHZhciBrZXkgPSBtZXRob2Qua2V5O1xyXG4gIGlmIChtZXRob2Qua2luZCA9PT0gXCJjb25zdHJ1Y3RvclwiKSB7XHJcbiAgICBpZiAoaXNHZW5lcmF0b3IpIHsgdGhpcy5yYWlzZShrZXkuc3RhcnQsIFwiQ29uc3RydWN0b3IgY2FuJ3QgYmUgYSBnZW5lcmF0b3JcIik7IH1cclxuICAgIGlmIChpc0FzeW5jKSB7IHRoaXMucmFpc2Uoa2V5LnN0YXJ0LCBcIkNvbnN0cnVjdG9yIGNhbid0IGJlIGFuIGFzeW5jIG1ldGhvZFwiKTsgfVxyXG4gIH0gZWxzZSBpZiAobWV0aG9kLnN0YXRpYyAmJiBjaGVja0tleU5hbWUobWV0aG9kLCBcInByb3RvdHlwZVwiKSkge1xyXG4gICAgdGhpcy5yYWlzZShrZXkuc3RhcnQsIFwiQ2xhc3NlcyBtYXkgbm90IGhhdmUgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgcHJvdG90eXBlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGFyc2UgdmFsdWVcclxuICB2YXIgdmFsdWUgPSBtZXRob2QudmFsdWUgPSB0aGlzLnBhcnNlTWV0aG9kKGlzR2VuZXJhdG9yLCBpc0FzeW5jLCBhbGxvd3NEaXJlY3RTdXBlcik7XHJcblxyXG4gIC8vIENoZWNrIHZhbHVlXHJcbiAgaWYgKG1ldGhvZC5raW5kID09PSBcImdldFwiICYmIHZhbHVlLnBhcmFtcy5sZW5ndGggIT09IDApXHJcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh2YWx1ZS5zdGFydCwgXCJnZXR0ZXIgc2hvdWxkIGhhdmUgbm8gcGFyYW1zXCIpOyB9XHJcbiAgaWYgKG1ldGhvZC5raW5kID09PSBcInNldFwiICYmIHZhbHVlLnBhcmFtcy5sZW5ndGggIT09IDEpXHJcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh2YWx1ZS5zdGFydCwgXCJzZXR0ZXIgc2hvdWxkIGhhdmUgZXhhY3RseSBvbmUgcGFyYW1cIik7IH1cclxuICBpZiAobWV0aG9kLmtpbmQgPT09IFwic2V0XCIgJiYgdmFsdWUucGFyYW1zWzBdLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIilcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHZhbHVlLnBhcmFtc1swXS5zdGFydCwgXCJTZXR0ZXIgY2Fubm90IHVzZSByZXN0IHBhcmFtc1wiKTsgfVxyXG5cclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG1ldGhvZCwgXCJNZXRob2REZWZpbml0aW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlQ2xhc3NGaWVsZCA9IGZ1bmN0aW9uKGZpZWxkKSB7XHJcbiAgaWYgKGNoZWNrS2V5TmFtZShmaWVsZCwgXCJjb25zdHJ1Y3RvclwiKSkge1xyXG4gICAgdGhpcy5yYWlzZShmaWVsZC5rZXkuc3RhcnQsIFwiQ2xhc3NlcyBjYW4ndCBoYXZlIGEgZmllbGQgbmFtZWQgJ2NvbnN0cnVjdG9yJ1wiKTtcclxuICB9IGVsc2UgaWYgKGZpZWxkLnN0YXRpYyAmJiBjaGVja0tleU5hbWUoZmllbGQsIFwicHJvdG90eXBlXCIpKSB7XHJcbiAgICB0aGlzLnJhaXNlKGZpZWxkLmtleS5zdGFydCwgXCJDbGFzc2VzIGNhbid0IGhhdmUgYSBzdGF0aWMgZmllbGQgbmFtZWQgJ3Byb3RvdHlwZSdcIik7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5lYXQodHlwZXMkMS5lcSkpIHtcclxuICAgIC8vIFRvIHJhaXNlIFN5bnRheEVycm9yIGlmICdhcmd1bWVudHMnIGV4aXN0cyBpbiB0aGUgaW5pdGlhbGl6ZXIuXHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKTtcclxuICAgIHZhciBpbkNsYXNzRmllbGRJbml0ID0gc2NvcGUuaW5DbGFzc0ZpZWxkSW5pdDtcclxuICAgIHNjb3BlLmluQ2xhc3NGaWVsZEluaXQgPSB0cnVlO1xyXG4gICAgZmllbGQudmFsdWUgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcclxuICAgIHNjb3BlLmluQ2xhc3NGaWVsZEluaXQgPSBpbkNsYXNzRmllbGRJbml0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWVsZC52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG4gIHRoaXMuc2VtaWNvbG9uKCk7XHJcblxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUoZmllbGQsIFwiUHJvcGVydHlEZWZpbml0aW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlQ2xhc3NTdGF0aWNCbG9jayA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICBub2RlLmJvZHkgPSBbXTtcclxuXHJcbiAgdmFyIG9sZExhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gIHRoaXMubGFiZWxzID0gW107XHJcbiAgdGhpcy5lbnRlclNjb3BlKFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSyB8IFNDT1BFX1NVUEVSKTtcclxuICB3aGlsZSAodGhpcy50eXBlICE9PSB0eXBlcyQxLmJyYWNlUikge1xyXG4gICAgdmFyIHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KG51bGwpO1xyXG4gICAgbm9kZS5ib2R5LnB1c2goc3RtdCk7XHJcbiAgfVxyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHRoaXMuZXhpdFNjb3BlKCk7XHJcbiAgdGhpcy5sYWJlbHMgPSBvbGRMYWJlbHM7XHJcblxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJTdGF0aWNCbG9ja1wiKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUNsYXNzSWQgPSBmdW5jdGlvbihub2RlLCBpc1N0YXRlbWVudCkge1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSkge1xyXG4gICAgbm9kZS5pZCA9IHRoaXMucGFyc2VJZGVudCgpO1xyXG4gICAgaWYgKGlzU3RhdGVtZW50KVxyXG4gICAgICB7IHRoaXMuY2hlY2tMVmFsU2ltcGxlKG5vZGUuaWQsIEJJTkRfTEVYSUNBTCwgZmFsc2UpOyB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChpc1N0YXRlbWVudCA9PT0gdHJ1ZSlcclxuICAgICAgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG4gICAgbm9kZS5pZCA9IG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUNsYXNzU3VwZXIgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgbm9kZS5zdXBlckNsYXNzID0gdGhpcy5lYXQodHlwZXMkMS5fZXh0ZW5kcykgPyB0aGlzLnBhcnNlRXhwclN1YnNjcmlwdHMobnVsbCwgZmFsc2UpIDogbnVsbDtcclxufTtcclxuXHJcbnBwJDguZW50ZXJDbGFzc0JvZHkgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZWxlbWVudCA9IHtkZWNsYXJlZDogT2JqZWN0LmNyZWF0ZShudWxsKSwgdXNlZDogW119O1xyXG4gIHRoaXMucHJpdmF0ZU5hbWVTdGFjay5wdXNoKGVsZW1lbnQpO1xyXG4gIHJldHVybiBlbGVtZW50LmRlY2xhcmVkXHJcbn07XHJcblxyXG5wcCQ4LmV4aXRDbGFzc0JvZHkgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVmID0gdGhpcy5wcml2YXRlTmFtZVN0YWNrLnBvcCgpO1xyXG4gIHZhciBkZWNsYXJlZCA9IHJlZi5kZWNsYXJlZDtcclxuICB2YXIgdXNlZCA9IHJlZi51c2VkO1xyXG4gIGlmICghdGhpcy5vcHRpb25zLmNoZWNrUHJpdmF0ZUZpZWxkcykgeyByZXR1cm4gfVxyXG4gIHZhciBsZW4gPSB0aGlzLnByaXZhdGVOYW1lU3RhY2subGVuZ3RoO1xyXG4gIHZhciBwYXJlbnQgPSBsZW4gPT09IDAgPyBudWxsIDogdGhpcy5wcml2YXRlTmFtZVN0YWNrW2xlbiAtIDFdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlZC5sZW5ndGg7ICsraSkge1xyXG4gICAgdmFyIGlkID0gdXNlZFtpXTtcclxuICAgIGlmICghaGFzT3duKGRlY2xhcmVkLCBpZC5uYW1lKSkge1xyXG4gICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50LnVzZWQucHVzaChpZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGlkLnN0YXJ0LCAoXCJQcml2YXRlIGZpZWxkICcjXCIgKyAoaWQubmFtZSkgKyBcIicgbXVzdCBiZSBkZWNsYXJlZCBpbiBhbiBlbmNsb3NpbmcgY2xhc3NcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNQcml2YXRlTmFtZUNvbmZsaWN0ZWQocHJpdmF0ZU5hbWVNYXAsIGVsZW1lbnQpIHtcclxuICB2YXIgbmFtZSA9IGVsZW1lbnQua2V5Lm5hbWU7XHJcbiAgdmFyIGN1cnIgPSBwcml2YXRlTmFtZU1hcFtuYW1lXTtcclxuXHJcbiAgdmFyIG5leHQgPSBcInRydWVcIjtcclxuICBpZiAoZWxlbWVudC50eXBlID09PSBcIk1ldGhvZERlZmluaXRpb25cIiAmJiAoZWxlbWVudC5raW5kID09PSBcImdldFwiIHx8IGVsZW1lbnQua2luZCA9PT0gXCJzZXRcIikpIHtcclxuICAgIG5leHQgPSAoZWxlbWVudC5zdGF0aWMgPyBcInNcIiA6IFwiaVwiKSArIGVsZW1lbnQua2luZDtcclxuICB9XHJcblxyXG4gIC8vIGBjbGFzcyB7IGdldCAjYSgpe307IHN0YXRpYyBzZXQgI2EoXyl7fSB9YCBpcyBhbHNvIGNvbmZsaWN0LlxyXG4gIGlmIChcclxuICAgIGN1cnIgPT09IFwiaWdldFwiICYmIG5leHQgPT09IFwiaXNldFwiIHx8XHJcbiAgICBjdXJyID09PSBcImlzZXRcIiAmJiBuZXh0ID09PSBcImlnZXRcIiB8fFxyXG4gICAgY3VyciA9PT0gXCJzZ2V0XCIgJiYgbmV4dCA9PT0gXCJzc2V0XCIgfHxcclxuICAgIGN1cnIgPT09IFwic3NldFwiICYmIG5leHQgPT09IFwic2dldFwiXHJcbiAgKSB7XHJcbiAgICBwcml2YXRlTmFtZU1hcFtuYW1lXSA9IFwidHJ1ZVwiO1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSBlbHNlIGlmICghY3Vycikge1xyXG4gICAgcHJpdmF0ZU5hbWVNYXBbbmFtZV0gPSBuZXh0O1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0tleU5hbWUobm9kZSwgbmFtZSkge1xyXG4gIHZhciBjb21wdXRlZCA9IG5vZGUuY29tcHV0ZWQ7XHJcbiAgdmFyIGtleSA9IG5vZGUua2V5O1xyXG4gIHJldHVybiAhY29tcHV0ZWQgJiYgKFxyXG4gICAga2V5LnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmIGtleS5uYW1lID09PSBuYW1lIHx8XHJcbiAgICBrZXkudHlwZSA9PT0gXCJMaXRlcmFsXCIgJiYga2V5LnZhbHVlID09PSBuYW1lXHJcbiAgKVxyXG59XHJcblxyXG4vLyBQYXJzZXMgbW9kdWxlIGV4cG9ydCBkZWNsYXJhdGlvbi5cclxuXHJcbnBwJDgucGFyc2VFeHBvcnRBbGxEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIGV4cG9ydHMpIHtcclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDExKSB7XHJcbiAgICBpZiAodGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIikpIHtcclxuICAgICAgbm9kZS5leHBvcnRlZCA9IHRoaXMucGFyc2VNb2R1bGVFeHBvcnROYW1lKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgbm9kZS5leHBvcnRlZCwgdGhpcy5sYXN0VG9rU3RhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZS5leHBvcnRlZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuZXhwZWN0Q29udGV4dHVhbChcImZyb21cIik7XHJcbiAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5zdHJpbmcpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICBub2RlLnNvdXJjZSA9IHRoaXMucGFyc2VFeHByQXRvbSgpO1xyXG4gIHRoaXMuc2VtaWNvbG9uKCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkV4cG9ydEFsbERlY2xhcmF0aW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlRXhwb3J0ID0gZnVuY3Rpb24obm9kZSwgZXhwb3J0cykge1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIC8vIGV4cG9ydCAqIGZyb20gJy4uLidcclxuICBpZiAodGhpcy5lYXQodHlwZXMkMS5zdGFyKSkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VFeHBvcnRBbGxEZWNsYXJhdGlvbihub2RlLCBleHBvcnRzKVxyXG4gIH1cclxuICBpZiAodGhpcy5lYXQodHlwZXMkMS5fZGVmYXVsdCkpIHsgLy8gZXhwb3J0IGRlZmF1bHQgLi4uXHJcbiAgICB0aGlzLmNoZWNrRXhwb3J0KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB0aGlzLmxhc3RUb2tTdGFydCk7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy5wYXJzZUV4cG9ydERlZmF1bHREZWNsYXJhdGlvbigpO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwiKVxyXG4gIH1cclxuICAvLyBleHBvcnQgdmFyfGNvbnN0fGxldHxmdW5jdGlvbnxjbGFzcyAuLi5cclxuICBpZiAodGhpcy5zaG91bGRQYXJzZUV4cG9ydFN0YXRlbWVudCgpKSB7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy5wYXJzZUV4cG9ydERlY2xhcmF0aW9uKG5vZGUpO1xyXG4gICAgaWYgKG5vZGUuZGVjbGFyYXRpb24udHlwZSA9PT0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIpXHJcbiAgICAgIHsgdGhpcy5jaGVja1ZhcmlhYmxlRXhwb3J0KGV4cG9ydHMsIG5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zKTsgfVxyXG4gICAgZWxzZVxyXG4gICAgICB7IHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgbm9kZS5kZWNsYXJhdGlvbi5pZCwgbm9kZS5kZWNsYXJhdGlvbi5pZC5zdGFydCk7IH1cclxuICAgIG5vZGUuc3BlY2lmaWVycyA9IFtdO1xyXG4gICAgbm9kZS5zb3VyY2UgPSBudWxsO1xyXG4gIH0gZWxzZSB7IC8vIGV4cG9ydCB7IHgsIHkgYXMgeiB9IFtmcm9tICcuLi4nXVxyXG4gICAgbm9kZS5kZWNsYXJhdGlvbiA9IG51bGw7XHJcbiAgICBub2RlLnNwZWNpZmllcnMgPSB0aGlzLnBhcnNlRXhwb3J0U3BlY2lmaWVycyhleHBvcnRzKTtcclxuICAgIGlmICh0aGlzLmVhdENvbnRleHR1YWwoXCJmcm9tXCIpKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuc3RyaW5nKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICAgIG5vZGUuc291cmNlID0gdGhpcy5wYXJzZUV4cHJBdG9tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuc3BlY2lmaWVyczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAvLyBjaGVjayBmb3Iga2V5d29yZHMgdXNlZCBhcyBsb2NhbCBuYW1lc1xyXG4gICAgICAgIHZhciBzcGVjID0gbGlzdFtpXTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1VucmVzZXJ2ZWQoc3BlYy5sb2NhbCk7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZXhwb3J0IGlzIGRlZmluZWRcclxuICAgICAgICB0aGlzLmNoZWNrTG9jYWxFeHBvcnQoc3BlYy5sb2NhbCk7XHJcblxyXG4gICAgICAgIGlmIChzcGVjLmxvY2FsLnR5cGUgPT09IFwiTGl0ZXJhbFwiKSB7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlKHNwZWMubG9jYWwuc3RhcnQsIFwiQSBzdHJpbmcgbGl0ZXJhbCBjYW5ub3QgYmUgdXNlZCBhcyBhbiBleHBvcnRlZCBiaW5kaW5nIHdpdGhvdXQgYGZyb21gLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vZGUuc291cmNlID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMuc2VtaWNvbG9uKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJFeHBvcnROYW1lZERlY2xhcmF0aW9uXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlRXhwb3J0RGVjbGFyYXRpb24gPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgcmV0dXJuIHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbClcclxufTtcclxuXHJcbnBwJDgucGFyc2VFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgaXNBc3luYztcclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9mdW5jdGlvbiB8fCAoaXNBc3luYyA9IHRoaXMuaXNBc3luY0Z1bmN0aW9uKCkpKSB7XHJcbiAgICB2YXIgZk5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICBpZiAoaXNBc3luYykgeyB0aGlzLm5leHQoKTsgfVxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihmTm9kZSwgRlVOQ19TVEFURU1FTlQgfCBGVU5DX05VTExBQkxFX0lELCBmYWxzZSwgaXNBc3luYylcclxuICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fY2xhc3MpIHtcclxuICAgIHZhciBjTm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNsYXNzKGNOb2RlLCBcIm51bGxhYmxlSURcIilcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGRlY2xhcmF0aW9uID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XHJcbiAgICB0aGlzLnNlbWljb2xvbigpO1xyXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uXHJcbiAgfVxyXG59O1xyXG5cclxucHAkOC5jaGVja0V4cG9ydCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIHBvcykge1xyXG4gIGlmICghZXhwb3J0cykgeyByZXR1cm4gfVxyXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIilcclxuICAgIHsgbmFtZSA9IG5hbWUudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgPyBuYW1lLm5hbWUgOiBuYW1lLnZhbHVlOyB9XHJcbiAgaWYgKGhhc093bihleHBvcnRzLCBuYW1lKSlcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHBvcywgXCJEdXBsaWNhdGUgZXhwb3J0ICdcIiArIG5hbWUgKyBcIidcIik7IH1cclxuICBleHBvcnRzW25hbWVdID0gdHJ1ZTtcclxufTtcclxuXHJcbnBwJDguY2hlY2tQYXR0ZXJuRXhwb3J0ID0gZnVuY3Rpb24oZXhwb3J0cywgcGF0KSB7XHJcbiAgdmFyIHR5cGUgPSBwYXQudHlwZTtcclxuICBpZiAodHlwZSA9PT0gXCJJZGVudGlmaWVyXCIpXHJcbiAgICB7IHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgcGF0LCBwYXQuc3RhcnQpOyB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJPYmplY3RQYXR0ZXJuXCIpXHJcbiAgICB7IGZvciAodmFyIGkgPSAwLCBsaXN0ID0gcGF0LnByb3BlcnRpZXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIHByb3AgPSBsaXN0W2ldO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwcm9wKTtcclxuICAgICAgfSB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJBcnJheVBhdHRlcm5cIilcclxuICAgIHsgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gcGF0LmVsZW1lbnRzOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xyXG4gICAgICB2YXIgZWx0ID0gbGlzdCQxW2kkMV07XHJcblxyXG4gICAgICAgIGlmIChlbHQpIHsgdGhpcy5jaGVja1BhdHRlcm5FeHBvcnQoZXhwb3J0cywgZWx0KTsgfVxyXG4gICAgfSB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJQcm9wZXJ0eVwiKVxyXG4gICAgeyB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwYXQudmFsdWUpOyB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJBc3NpZ25tZW50UGF0dGVyblwiKVxyXG4gICAgeyB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwYXQubGVmdCk7IH1cclxuICBlbHNlIGlmICh0eXBlID09PSBcIlJlc3RFbGVtZW50XCIpXHJcbiAgICB7IHRoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGV4cG9ydHMsIHBhdC5hcmd1bWVudCk7IH1cclxufTtcclxuXHJcbnBwJDguY2hlY2tWYXJpYWJsZUV4cG9ydCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlY2xzKSB7XHJcbiAgaWYgKCFleHBvcnRzKSB7IHJldHVybiB9XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBkZWNsczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICB7XHJcbiAgICB2YXIgZGVjbCA9IGxpc3RbaV07XHJcblxyXG4gICAgdGhpcy5jaGVja1BhdHRlcm5FeHBvcnQoZXhwb3J0cywgZGVjbC5pZCk7XHJcbiAgfVxyXG59O1xyXG5cclxucHAkOC5zaG91bGRQYXJzZUV4cG9ydFN0YXRlbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnR5cGUua2V5d29yZCA9PT0gXCJ2YXJcIiB8fFxyXG4gICAgdGhpcy50eXBlLmtleXdvcmQgPT09IFwiY29uc3RcIiB8fFxyXG4gICAgdGhpcy50eXBlLmtleXdvcmQgPT09IFwiY2xhc3NcIiB8fFxyXG4gICAgdGhpcy50eXBlLmtleXdvcmQgPT09IFwiZnVuY3Rpb25cIiB8fFxyXG4gICAgdGhpcy5pc0xldCgpIHx8XHJcbiAgICB0aGlzLmlzQXN5bmNGdW5jdGlvbigpXHJcbn07XHJcblxyXG4vLyBQYXJzZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBtb2R1bGUgZXhwb3J0cy5cclxuXHJcbnBwJDgucGFyc2VFeHBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbihleHBvcnRzKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIG5vZGUubG9jYWwgPSB0aGlzLnBhcnNlTW9kdWxlRXhwb3J0TmFtZSgpO1xyXG5cclxuICBub2RlLmV4cG9ydGVkID0gdGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIikgPyB0aGlzLnBhcnNlTW9kdWxlRXhwb3J0TmFtZSgpIDogbm9kZS5sb2NhbDtcclxuICB0aGlzLmNoZWNrRXhwb3J0KFxyXG4gICAgZXhwb3J0cyxcclxuICAgIG5vZGUuZXhwb3J0ZWQsXHJcbiAgICBub2RlLmV4cG9ydGVkLnN0YXJ0XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkV4cG9ydFNwZWNpZmllclwiKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUV4cG9ydFNwZWNpZmllcnMgPSBmdW5jdGlvbihleHBvcnRzKSB7XHJcbiAgdmFyIG5vZGVzID0gW10sIGZpcnN0ID0gdHJ1ZTtcclxuICAvLyBleHBvcnQgeyB4LCB5IGFzIHogfSBbZnJvbSAnLi4uJ11cclxuICB0aGlzLmV4cGVjdCh0eXBlcyQxLmJyYWNlTCk7XHJcbiAgd2hpbGUgKCF0aGlzLmVhdCh0eXBlcyQxLmJyYWNlUikpIHtcclxuICAgIGlmICghZmlyc3QpIHtcclxuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7XHJcbiAgICAgIGlmICh0aGlzLmFmdGVyVHJhaWxpbmdDb21tYSh0eXBlcyQxLmJyYWNlUikpIHsgYnJlYWsgfVxyXG4gICAgfSBlbHNlIHsgZmlyc3QgPSBmYWxzZTsgfVxyXG5cclxuICAgIG5vZGVzLnB1c2godGhpcy5wYXJzZUV4cG9ydFNwZWNpZmllcihleHBvcnRzKSk7XHJcbiAgfVxyXG4gIHJldHVybiBub2Rlc1xyXG59O1xyXG5cclxuLy8gUGFyc2VzIGltcG9ydCBkZWNsYXJhdGlvbi5cclxuXHJcbnBwJDgucGFyc2VJbXBvcnQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgdGhpcy5uZXh0KCk7XHJcblxyXG4gIC8vIGltcG9ydCAnLi4uJ1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RyaW5nKSB7XHJcbiAgICBub2RlLnNwZWNpZmllcnMgPSBlbXB0eSQxO1xyXG4gICAgbm9kZS5zb3VyY2UgPSB0aGlzLnBhcnNlRXhwckF0b20oKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbm9kZS5zcGVjaWZpZXJzID0gdGhpcy5wYXJzZUltcG9ydFNwZWNpZmllcnMoKTtcclxuICAgIHRoaXMuZXhwZWN0Q29udGV4dHVhbChcImZyb21cIik7XHJcbiAgICBub2RlLnNvdXJjZSA9IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdHJpbmcgPyB0aGlzLnBhcnNlRXhwckF0b20oKSA6IHRoaXMudW5leHBlY3RlZCgpO1xyXG4gIH1cclxuICB0aGlzLnNlbWljb2xvbigpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJJbXBvcnREZWNsYXJhdGlvblwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2VzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgbW9kdWxlIGltcG9ydHMuXHJcblxyXG5wcCQ4LnBhcnNlSW1wb3J0U3BlY2lmaWVyID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIG5vZGUuaW1wb3J0ZWQgPSB0aGlzLnBhcnNlTW9kdWxlRXhwb3J0TmFtZSgpO1xyXG5cclxuICBpZiAodGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIikpIHtcclxuICAgIG5vZGUubG9jYWwgPSB0aGlzLnBhcnNlSWRlbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5jaGVja1VucmVzZXJ2ZWQobm9kZS5pbXBvcnRlZCk7XHJcbiAgICBub2RlLmxvY2FsID0gbm9kZS5pbXBvcnRlZDtcclxuICB9XHJcbiAgdGhpcy5jaGVja0xWYWxTaW1wbGUobm9kZS5sb2NhbCwgQklORF9MRVhJQ0FMKTtcclxuXHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkltcG9ydFNwZWNpZmllclwiKVxyXG59O1xyXG5cclxucHAkOC5wYXJzZUltcG9ydERlZmF1bHRTcGVjaWZpZXIgPSBmdW5jdGlvbigpIHtcclxuICAvLyBpbXBvcnQgZGVmYXVsdE9iaiwgeyB4LCB5IGFzIHogfSBmcm9tICcuLi4nXHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIG5vZGUubG9jYWwgPSB0aGlzLnBhcnNlSWRlbnQoKTtcclxuICB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmxvY2FsLCBCSU5EX0xFWElDQUwpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJJbXBvcnREZWZhdWx0U3BlY2lmaWVyXCIpXHJcbn07XHJcblxyXG5wcCQ4LnBhcnNlSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHRoaXMuZXhwZWN0Q29udGV4dHVhbChcImFzXCIpO1xyXG4gIG5vZGUubG9jYWwgPSB0aGlzLnBhcnNlSWRlbnQoKTtcclxuICB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmxvY2FsLCBCSU5EX0xFWElDQUwpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXJcIilcclxufTtcclxuXHJcbnBwJDgucGFyc2VJbXBvcnRTcGVjaWZpZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5vZGVzID0gW10sIGZpcnN0ID0gdHJ1ZTtcclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLm5hbWUpIHtcclxuICAgIG5vZGVzLnB1c2godGhpcy5wYXJzZUltcG9ydERlZmF1bHRTcGVjaWZpZXIoKSk7XHJcbiAgICBpZiAoIXRoaXMuZWF0KHR5cGVzJDEuY29tbWEpKSB7IHJldHVybiBub2RlcyB9XHJcbiAgfVxyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3Rhcikge1xyXG4gICAgbm9kZXMucHVzaCh0aGlzLnBhcnNlSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyKCkpO1xyXG4gICAgcmV0dXJuIG5vZGVzXHJcbiAgfVxyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEuYnJhY2VMKTtcclxuICB3aGlsZSAoIXRoaXMuZWF0KHR5cGVzJDEuYnJhY2VSKSkge1xyXG4gICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICB0aGlzLmV4cGVjdCh0eXBlcyQxLmNvbW1hKTtcclxuICAgICAgaWYgKHRoaXMuYWZ0ZXJUcmFpbGluZ0NvbW1hKHR5cGVzJDEuYnJhY2VSKSkgeyBicmVhayB9XHJcbiAgICB9IGVsc2UgeyBmaXJzdCA9IGZhbHNlOyB9XHJcblxyXG4gICAgbm9kZXMucHVzaCh0aGlzLnBhcnNlSW1wb3J0U3BlY2lmaWVyKCkpO1xyXG4gIH1cclxuICByZXR1cm4gbm9kZXNcclxufTtcclxuXHJcbnBwJDgucGFyc2VNb2R1bGVFeHBvcnROYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMyAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RyaW5nKSB7XHJcbiAgICB2YXIgc3RyaW5nTGl0ZXJhbCA9IHRoaXMucGFyc2VMaXRlcmFsKHRoaXMudmFsdWUpO1xyXG4gICAgaWYgKGxvbmVTdXJyb2dhdGUudGVzdChzdHJpbmdMaXRlcmFsLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnJhaXNlKHN0cmluZ0xpdGVyYWwuc3RhcnQsIFwiQW4gZXhwb3J0IG5hbWUgY2Fubm90IGluY2x1ZGUgYSBsb25lIHN1cnJvZ2F0ZS5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbFxyXG4gIH1cclxuICByZXR1cm4gdGhpcy5wYXJzZUlkZW50KHRydWUpXHJcbn07XHJcblxyXG4vLyBTZXQgYEV4cHJlc3Npb25TdGF0ZW1lbnQjZGlyZWN0aXZlYCBwcm9wZXJ0eSBmb3IgZGlyZWN0aXZlIHByb2xvZ3Vlcy5cclxucHAkOC5hZGFwdERpcmVjdGl2ZVByb2xvZ3VlID0gZnVuY3Rpb24oc3RhdGVtZW50cykge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVtZW50cy5sZW5ndGggJiYgdGhpcy5pc0RpcmVjdGl2ZUNhbmRpZGF0ZShzdGF0ZW1lbnRzW2ldKTsgKytpKSB7XHJcbiAgICBzdGF0ZW1lbnRzW2ldLmRpcmVjdGl2ZSA9IHN0YXRlbWVudHNbaV0uZXhwcmVzc2lvbi5yYXcuc2xpY2UoMSwgLTEpO1xyXG4gIH1cclxufTtcclxucHAkOC5pc0RpcmVjdGl2ZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKHN0YXRlbWVudCkge1xyXG4gIHJldHVybiAoXHJcbiAgICB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNSAmJlxyXG4gICAgc3RhdGVtZW50LnR5cGUgPT09IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiICYmXHJcbiAgICBzdGF0ZW1lbnQuZXhwcmVzc2lvbi50eXBlID09PSBcIkxpdGVyYWxcIiAmJlxyXG4gICAgdHlwZW9mIHN0YXRlbWVudC5leHByZXNzaW9uLnZhbHVlID09PSBcInN0cmluZ1wiICYmXHJcbiAgICAvLyBSZWplY3QgcGFyZW50aGVzaXplZCBzdHJpbmdzLlxyXG4gICAgKHRoaXMuaW5wdXRbc3RhdGVtZW50LnN0YXJ0XSA9PT0gXCJcXFwiXCIgfHwgdGhpcy5pbnB1dFtzdGF0ZW1lbnQuc3RhcnRdID09PSBcIidcIilcclxuICApXHJcbn07XHJcblxyXG52YXIgcHAkNyA9IFBhcnNlci5wcm90b3R5cGU7XHJcblxyXG4vLyBDb252ZXJ0IGV4aXN0aW5nIGV4cHJlc3Npb24gYXRvbSB0byBhc3NpZ25hYmxlIHBhdHRlcm5cclxuLy8gaWYgcG9zc2libGUuXHJcblxyXG5wcCQ3LnRvQXNzaWduYWJsZSA9IGZ1bmN0aW9uKG5vZGUsIGlzQmluZGluZywgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiAmJiBub2RlKSB7XHJcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgY2FzZSBcIklkZW50aWZpZXJcIjpcclxuICAgICAgaWYgKHRoaXMuaW5Bc3luYyAmJiBub2RlLm5hbWUgPT09IFwiYXdhaXRcIilcclxuICAgICAgICB7IHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJDYW5ub3QgdXNlICdhd2FpdCcgYXMgaWRlbnRpZmllciBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb25cIik7IH1cclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlIFwiT2JqZWN0UGF0dGVyblwiOlxyXG4gICAgY2FzZSBcIkFycmF5UGF0dGVyblwiOlxyXG4gICAgY2FzZSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6XHJcbiAgICBjYXNlIFwiUmVzdEVsZW1lbnRcIjpcclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlIFwiT2JqZWN0RXhwcmVzc2lvblwiOlxyXG4gICAgICBub2RlLnR5cGUgPSBcIk9iamVjdFBhdHRlcm5cIjtcclxuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7IH1cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLnByb3BlcnRpZXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgdmFyIHByb3AgPSBsaXN0W2ldO1xyXG5cclxuICAgICAgdGhpcy50b0Fzc2lnbmFibGUocHJvcCwgaXNCaW5kaW5nKTtcclxuICAgICAgICAvLyBFYXJseSBlcnJvcjpcclxuICAgICAgICAvLyAgIEFzc2lnbm1lbnRSZXN0UHJvcGVydHlbWWllbGQsIEF3YWl0XSA6XHJcbiAgICAgICAgLy8gICAgIGAuLi5gIERlc3RydWN0dXJpbmdBc3NpZ25tZW50VGFyZ2V0W1lpZWxkLCBBd2FpdF1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgSXQgaXMgYSBTeW50YXggRXJyb3IgaWYgfERlc3RydWN0dXJpbmdBc3NpZ25tZW50VGFyZ2V0fCBpcyBhbiB8QXJyYXlMaXRlcmFsfCBvciBhbiB8T2JqZWN0TGl0ZXJhbHwuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcHJvcC50eXBlID09PSBcIlJlc3RFbGVtZW50XCIgJiZcclxuICAgICAgICAgIChwcm9wLmFyZ3VtZW50LnR5cGUgPT09IFwiQXJyYXlQYXR0ZXJuXCIgfHwgcHJvcC5hcmd1bWVudC50eXBlID09PSBcIk9iamVjdFBhdHRlcm5cIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMucmFpc2UocHJvcC5hcmd1bWVudC5zdGFydCwgXCJVbmV4cGVjdGVkIHRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgXCJQcm9wZXJ0eVwiOlxyXG4gICAgICAvLyBBc3NpZ25tZW50UHJvcGVydHkgaGFzIHR5cGUgPT09IFwiUHJvcGVydHlcIlxyXG4gICAgICBpZiAobm9kZS5raW5kICE9PSBcImluaXRcIikgeyB0aGlzLnJhaXNlKG5vZGUua2V5LnN0YXJ0LCBcIk9iamVjdCBwYXR0ZXJuIGNhbid0IGNvbnRhaW4gZ2V0dGVyIG9yIHNldHRlclwiKTsgfVxyXG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLnZhbHVlLCBpc0JpbmRpbmcpO1xyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgXCJBcnJheUV4cHJlc3Npb25cIjpcclxuICAgICAgbm9kZS50eXBlID0gXCJBcnJheVBhdHRlcm5cIjtcclxuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7IH1cclxuICAgICAgdGhpcy50b0Fzc2lnbmFibGVMaXN0KG5vZGUuZWxlbWVudHMsIGlzQmluZGluZyk7XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSBcIlNwcmVhZEVsZW1lbnRcIjpcclxuICAgICAgbm9kZS50eXBlID0gXCJSZXN0RWxlbWVudFwiO1xyXG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLmFyZ3VtZW50LCBpc0JpbmRpbmcpO1xyXG4gICAgICBpZiAobm9kZS5hcmd1bWVudC50eXBlID09PSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCIpXHJcbiAgICAgICAgeyB0aGlzLnJhaXNlKG5vZGUuYXJndW1lbnQuc3RhcnQsIFwiUmVzdCBlbGVtZW50cyBjYW5ub3QgaGF2ZSBhIGRlZmF1bHQgdmFsdWVcIik7IH1cclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlIFwiQXNzaWdubWVudEV4cHJlc3Npb25cIjpcclxuICAgICAgaWYgKG5vZGUub3BlcmF0b3IgIT09IFwiPVwiKSB7IHRoaXMucmFpc2Uobm9kZS5sZWZ0LmVuZCwgXCJPbmx5ICc9JyBvcGVyYXRvciBjYW4gYmUgdXNlZCBmb3Igc3BlY2lmeWluZyBkZWZhdWx0IHZhbHVlLlwiKTsgfVxyXG4gICAgICBub2RlLnR5cGUgPSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI7XHJcbiAgICAgIGRlbGV0ZSBub2RlLm9wZXJhdG9yO1xyXG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLmxlZnQsIGlzQmluZGluZyk7XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSBcIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCI6XHJcbiAgICAgIHRoaXMudG9Bc3NpZ25hYmxlKG5vZGUuZXhwcmVzc2lvbiwgaXNCaW5kaW5nLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlIFwiQ2hhaW5FeHByZXNzaW9uXCI6XHJcbiAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gbGVmdC1oYW5kIHNpZGVcIik7XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSBcIk1lbWJlckV4cHJlc3Npb25cIjpcclxuICAgICAgaWYgKCFpc0JpbmRpbmcpIHsgYnJlYWsgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJBc3NpZ25pbmcgdG8gcnZhbHVlXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykgeyB0aGlzLmNoZWNrUGF0dGVybkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0cnVlKTsgfVxyXG4gIHJldHVybiBub2RlXHJcbn07XHJcblxyXG4vLyBDb252ZXJ0IGxpc3Qgb2YgZXhwcmVzc2lvbiBhdG9tcyB0byBiaW5kaW5nIGxpc3QuXHJcblxyXG5wcCQ3LnRvQXNzaWduYWJsZUxpc3QgPSBmdW5jdGlvbihleHByTGlzdCwgaXNCaW5kaW5nKSB7XHJcbiAgdmFyIGVuZCA9IGV4cHJMaXN0Lmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICB2YXIgZWx0ID0gZXhwckxpc3RbaV07XHJcbiAgICBpZiAoZWx0KSB7IHRoaXMudG9Bc3NpZ25hYmxlKGVsdCwgaXNCaW5kaW5nKTsgfVxyXG4gIH1cclxuICBpZiAoZW5kKSB7XHJcbiAgICB2YXIgbGFzdCA9IGV4cHJMaXN0W2VuZCAtIDFdO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA9PT0gNiAmJiBpc0JpbmRpbmcgJiYgbGFzdCAmJiBsYXN0LnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIiAmJiBsYXN0LmFyZ3VtZW50LnR5cGUgIT09IFwiSWRlbnRpZmllclwiKVxyXG4gICAgICB7IHRoaXMudW5leHBlY3RlZChsYXN0LmFyZ3VtZW50LnN0YXJ0KTsgfVxyXG4gIH1cclxuICByZXR1cm4gZXhwckxpc3RcclxufTtcclxuXHJcbi8vIFBhcnNlcyBzcHJlYWQgZWxlbWVudC5cclxuXHJcbnBwJDcucGFyc2VTcHJlYWQgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZmFsc2UsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJTcHJlYWRFbGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ3LnBhcnNlUmVzdEJpbmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgdGhpcy5uZXh0KCk7XHJcblxyXG4gIC8vIFJlc3RFbGVtZW50IGluc2lkZSBvZiBhIGZ1bmN0aW9uIHBhcmFtZXRlciBtdXN0IGJlIGFuIGlkZW50aWZpZXJcclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID09PSA2ICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5uYW1lKVxyXG4gICAgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG5cclxuICBub2RlLmFyZ3VtZW50ID0gdGhpcy5wYXJzZUJpbmRpbmdBdG9tKCk7XHJcblxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJSZXN0RWxlbWVudFwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2VzIGx2YWx1ZSAoYXNzaWduYWJsZSkgYXRvbS5cclxuXHJcbnBwJDcucGFyc2VCaW5kaW5nQXRvbSA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMkMS5icmFja2V0TDpcclxuICAgICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgbm9kZS5lbGVtZW50cyA9IHRoaXMucGFyc2VCaW5kaW5nTGlzdCh0eXBlcyQxLmJyYWNrZXRSLCB0cnVlLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkFycmF5UGF0dGVyblwiKVxyXG5cclxuICAgIGNhc2UgdHlwZXMkMS5icmFjZUw6XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLnBhcnNlSWRlbnQoKVxyXG59O1xyXG5cclxucHAkNy5wYXJzZUJpbmRpbmdMaXN0ID0gZnVuY3Rpb24oY2xvc2UsIGFsbG93RW1wdHksIGFsbG93VHJhaWxpbmdDb21tYSwgYWxsb3dNb2RpZmllcnMpIHtcclxuICB2YXIgZWx0cyA9IFtdLCBmaXJzdCA9IHRydWU7XHJcbiAgd2hpbGUgKCF0aGlzLmVhdChjbG9zZSkpIHtcclxuICAgIGlmIChmaXJzdCkgeyBmaXJzdCA9IGZhbHNlOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7IH1cclxuICAgIGlmIChhbGxvd0VtcHR5ICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb21tYSkge1xyXG4gICAgICBlbHRzLnB1c2gobnVsbCk7XHJcbiAgICB9IGVsc2UgaWYgKGFsbG93VHJhaWxpbmdDb21tYSAmJiB0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShjbG9zZSkpIHtcclxuICAgICAgYnJlYWtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmVsbGlwc2lzKSB7XHJcbiAgICAgIHZhciByZXN0ID0gdGhpcy5wYXJzZVJlc3RCaW5kaW5nKCk7XHJcbiAgICAgIHRoaXMucGFyc2VCaW5kaW5nTGlzdEl0ZW0ocmVzdCk7XHJcbiAgICAgIGVsdHMucHVzaChyZXN0KTtcclxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb21tYSkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCwgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIik7IH1cclxuICAgICAgdGhpcy5leHBlY3QoY2xvc2UpO1xyXG4gICAgICBicmVha1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWx0cy5wdXNoKHRoaXMucGFyc2VBc3NpZ25hYmxlTGlzdEl0ZW0oYWxsb3dNb2RpZmllcnMpKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsdHNcclxufTtcclxuXHJcbnBwJDcucGFyc2VBc3NpZ25hYmxlTGlzdEl0ZW0gPSBmdW5jdGlvbihhbGxvd01vZGlmaWVycykge1xyXG4gIHZhciBlbGVtID0gdGhpcy5wYXJzZU1heWJlRGVmYXVsdCh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0TG9jKTtcclxuICB0aGlzLnBhcnNlQmluZGluZ0xpc3RJdGVtKGVsZW0pO1xyXG4gIHJldHVybiBlbGVtXHJcbn07XHJcblxyXG5wcCQ3LnBhcnNlQmluZGluZ0xpc3RJdGVtID0gZnVuY3Rpb24ocGFyYW0pIHtcclxuICByZXR1cm4gcGFyYW1cclxufTtcclxuXHJcbi8vIFBhcnNlcyBhc3NpZ25tZW50IHBhdHRlcm4gYXJvdW5kIGdpdmVuIGF0b20gaWYgcG9zc2libGUuXHJcblxyXG5wcCQ3LnBhcnNlTWF5YmVEZWZhdWx0ID0gZnVuY3Rpb24oc3RhcnRQb3MsIHN0YXJ0TG9jLCBsZWZ0KSB7XHJcbiAgbGVmdCA9IGxlZnQgfHwgdGhpcy5wYXJzZUJpbmRpbmdBdG9tKCk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDYgfHwgIXRoaXMuZWF0KHR5cGVzJDEuZXEpKSB7IHJldHVybiBsZWZ0IH1cclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcclxuICBub2RlLmxlZnQgPSBsZWZ0O1xyXG4gIG5vZGUucmlnaHQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiQXNzaWdubWVudFBhdHRlcm5cIilcclxufTtcclxuXHJcbi8vIFRoZSBmb2xsb3dpbmcgdGhyZWUgZnVuY3Rpb25zIGFsbCB2ZXJpZnkgdGhhdCBhIG5vZGUgaXMgYW4gbHZhbHVlIFx1MjAxNFxyXG4vLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgYm91bmQsIG9yIGFzc2lnbmVkIHRvLiBJbiBvcmRlciB0byBkbyBzbywgdGhleSBwZXJmb3JtXHJcbi8vIGEgdmFyaWV0eSBvZiBjaGVja3M6XHJcbi8vXHJcbi8vIC0gQ2hlY2sgdGhhdCBub25lIG9mIHRoZSBib3VuZC9hc3NpZ25lZC10byBpZGVudGlmaWVycyBhcmUgcmVzZXJ2ZWQgd29yZHMuXHJcbi8vIC0gUmVjb3JkIG5hbWUgZGVjbGFyYXRpb25zIGZvciBiaW5kaW5ncyBpbiB0aGUgYXBwcm9wcmlhdGUgc2NvcGUuXHJcbi8vIC0gQ2hlY2sgZHVwbGljYXRlIGFyZ3VtZW50IG5hbWVzLCBpZiBjaGVja0NsYXNoZXMgaXMgc2V0LlxyXG4vL1xyXG4vLyBJZiBhIGNvbXBsZXggYmluZGluZyBwYXR0ZXJuIGlzIGVuY291bnRlcmVkIChlLmcuLCBvYmplY3QgYW5kIGFycmF5XHJcbi8vIGRlc3RydWN0dXJpbmcpLCB0aGUgZW50aXJlIHBhdHRlcm4gaXMgcmVjdXJzaXZlbHkgY2hlY2tlZC5cclxuLy9cclxuLy8gVGhlcmUgYXJlIHRocmVlIHZlcnNpb25zIG9mIGNoZWNrTFZhbCooKSBhcHByb3ByaWF0ZSBmb3IgZGlmZmVyZW50XHJcbi8vIGNpcmN1bXN0YW5jZXM6XHJcbi8vXHJcbi8vIC0gY2hlY2tMVmFsU2ltcGxlKCkgc2hhbGwgYmUgdXNlZCBpZiB0aGUgc3ludGFjdGljIGNvbnN0cnVjdCBzdXBwb3J0c1xyXG4vLyAgIG5vdGhpbmcgb3RoZXIgdGhhbiBpZGVudGlmaWVycyBhbmQgbWVtYmVyIGV4cHJlc3Npb25zLiBQYXJlbnRoZXNpemVkXHJcbi8vICAgZXhwcmVzc2lvbnMgYXJlIGFsc28gY29ycmVjdGx5IGhhbmRsZWQuIFRoaXMgaXMgZ2VuZXJhbGx5IGFwcHJvcHJpYXRlIGZvclxyXG4vLyAgIGNvbnN0cnVjdHMgZm9yIHdoaWNoIHRoZSBzcGVjIHNheXNcclxuLy9cclxuLy8gICA+IEl0IGlzIGEgU3ludGF4IEVycm9yIGlmIEFzc2lnbm1lbnRUYXJnZXRUeXBlIG9mIFt0aGUgcHJvZHVjdGlvbl0gaXMgbm90XHJcbi8vICAgPiBzaW1wbGUuXHJcbi8vXHJcbi8vICAgSXQgaXMgYWxzbyBhcHByb3ByaWF0ZSBmb3IgY2hlY2tpbmcgaWYgYW4gaWRlbnRpZmllciBpcyB2YWxpZCBhbmQgbm90XHJcbi8vICAgZGVmaW5lZCBlbHNld2hlcmUsIGxpa2UgaW1wb3J0IGRlY2xhcmF0aW9ucyBvciBmdW5jdGlvbi9jbGFzcyBpZGVudGlmaWVycy5cclxuLy9cclxuLy8gICBFeGFtcGxlcyB3aGVyZSB0aGlzIGlzIHVzZWQgaW5jbHVkZTpcclxuLy8gICAgIGEgKz0gXHUyMDI2O1xyXG4vLyAgICAgaW1wb3J0IGEgZnJvbSAnXHUyMDI2JztcclxuLy8gICB3aGVyZSBhIGlzIHRoZSBub2RlIHRvIGJlIGNoZWNrZWQuXHJcbi8vXHJcbi8vIC0gY2hlY2tMVmFsUGF0dGVybigpIHNoYWxsIGJlIHVzZWQgaWYgdGhlIHN5bnRhY3RpYyBjb25zdHJ1Y3Qgc3VwcG9ydHNcclxuLy8gICBhbnl0aGluZyBjaGVja0xWYWxTaW1wbGUoKSBzdXBwb3J0cywgYXMgd2VsbCBhcyBvYmplY3QgYW5kIGFycmF5XHJcbi8vICAgZGVzdHJ1Y3R1cmluZyBwYXR0ZXJucy4gVGhpcyBpcyBnZW5lcmFsbHkgYXBwcm9wcmlhdGUgZm9yIGNvbnN0cnVjdHMgZm9yXHJcbi8vICAgd2hpY2ggdGhlIHNwZWMgc2F5c1xyXG4vL1xyXG4vLyAgID4gSXQgaXMgYSBTeW50YXggRXJyb3IgaWYgW3RoZSBwcm9kdWN0aW9uXSBpcyBuZWl0aGVyIGFuIE9iamVjdExpdGVyYWwgbm9yXHJcbi8vICAgPiBhbiBBcnJheUxpdGVyYWwgYW5kIEFzc2lnbm1lbnRUYXJnZXRUeXBlIG9mIFt0aGUgcHJvZHVjdGlvbl0gaXMgbm90XHJcbi8vICAgPiBzaW1wbGUuXHJcbi8vXHJcbi8vICAgRXhhbXBsZXMgd2hlcmUgdGhpcyBpcyB1c2VkIGluY2x1ZGU6XHJcbi8vICAgICAoYSA9IFx1MjAyNik7XHJcbi8vICAgICBjb25zdCBhID0gXHUyMDI2O1xyXG4vLyAgICAgdHJ5IHsgXHUyMDI2IH0gY2F0Y2ggKGEpIHsgXHUyMDI2IH1cclxuLy8gICB3aGVyZSBhIGlzIHRoZSBub2RlIHRvIGJlIGNoZWNrZWQuXHJcbi8vXHJcbi8vIC0gY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKCkgc2hhbGwgYmUgdXNlZCBpZiB0aGUgc3ludGFjdGljIGNvbnN0cnVjdCBzdXBwb3J0c1xyXG4vLyAgIGFueXRoaW5nIGNoZWNrTFZhbFBhdHRlcm4oKSBzdXBwb3J0cywgYXMgd2VsbCBhcyBkZWZhdWx0IGFzc2lnbm1lbnRcclxuLy8gICBwYXR0ZXJucywgcmVzdCBlbGVtZW50cywgYW5kIG90aGVyIGNvbnN0cnVjdHMgdGhhdCBtYXkgYXBwZWFyIHdpdGhpbiBhblxyXG4vLyAgIG9iamVjdCBvciBhcnJheSBkZXN0cnVjdHVyaW5nIHBhdHRlcm4uXHJcbi8vXHJcbi8vICAgQXMgYSBzcGVjaWFsIGNhc2UsIGZ1bmN0aW9uIHBhcmFtZXRlcnMgYWxzbyB1c2UgY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKCksXHJcbi8vICAgYXMgdGhleSBhbHNvIHN1cHBvcnQgZGVmYXVsdHMgYW5kIHJlc3QgY29uc3RydWN0cy5cclxuLy9cclxuLy8gVGhlc2UgZnVuY3Rpb25zIGRlbGliZXJhdGVseSBzdXBwb3J0IGJvdGggYXNzaWdubWVudCBhbmQgYmluZGluZyBjb25zdHJ1Y3RzLFxyXG4vLyBhcyB0aGUgbG9naWMgZm9yIGJvdGggaXMgZXhjZWVkaW5nbHkgc2ltaWxhci4gSWYgdGhlIG5vZGUgaXMgdGhlIHRhcmdldCBvZlxyXG4vLyBhbiBhc3NpZ25tZW50LCB0aGVuIGJpbmRpbmdUeXBlIHNob3VsZCBiZSBzZXQgdG8gQklORF9OT05FLiBPdGhlcndpc2UsIGl0XHJcbi8vIHNob3VsZCBiZSBzZXQgdG8gdGhlIGFwcHJvcHJpYXRlIEJJTkRfKiBjb25zdGFudCwgbGlrZSBCSU5EX1ZBUiBvclxyXG4vLyBCSU5EX0xFWElDQUwuXHJcbi8vXHJcbi8vIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIG5vbi1CSU5EX05PTkUgYmluZGluZ1R5cGUsIHRoZW5cclxuLy8gYWRkaXRpb25hbGx5IGEgY2hlY2tDbGFzaGVzIG9iamVjdCBtYXkgYmUgc3BlY2lmaWVkIHRvIGFsbG93IGNoZWNraW5nIGZvclxyXG4vLyBkdXBsaWNhdGUgYXJndW1lbnQgbmFtZXMuIGNoZWNrQ2xhc2hlcyBpcyBpZ25vcmVkIGlmIHRoZSBwcm92aWRlZCBjb25zdHJ1Y3RcclxuLy8gaXMgYW4gYXNzaWdubWVudCAoaS5lLiwgYmluZGluZ1R5cGUgaXMgQklORF9OT05FKS5cclxuXHJcbnBwJDcuY2hlY2tMVmFsU2ltcGxlID0gZnVuY3Rpb24oZXhwciwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcykge1xyXG4gIGlmICggYmluZGluZ1R5cGUgPT09IHZvaWQgMCApIGJpbmRpbmdUeXBlID0gQklORF9OT05FO1xyXG5cclxuICB2YXIgaXNCaW5kID0gYmluZGluZ1R5cGUgIT09IEJJTkRfTk9ORTtcclxuXHJcbiAgc3dpdGNoIChleHByLnR5cGUpIHtcclxuICBjYXNlIFwiSWRlbnRpZmllclwiOlxyXG4gICAgaWYgKHRoaXMuc3RyaWN0ICYmIHRoaXMucmVzZXJ2ZWRXb3Jkc1N0cmljdEJpbmQudGVzdChleHByLm5hbWUpKVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShleHByLnN0YXJ0LCAoaXNCaW5kID8gXCJCaW5kaW5nIFwiIDogXCJBc3NpZ25pbmcgdG8gXCIpICsgZXhwci5uYW1lICsgXCIgaW4gc3RyaWN0IG1vZGVcIik7IH1cclxuICAgIGlmIChpc0JpbmQpIHtcclxuICAgICAgaWYgKGJpbmRpbmdUeXBlID09PSBCSU5EX0xFWElDQUwgJiYgZXhwci5uYW1lID09PSBcImxldFwiKVxyXG4gICAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGV4cHIuc3RhcnQsIFwibGV0IGlzIGRpc2FsbG93ZWQgYXMgYSBsZXhpY2FsbHkgYm91bmQgbmFtZVwiKTsgfVxyXG4gICAgICBpZiAoY2hlY2tDbGFzaGVzKSB7XHJcbiAgICAgICAgaWYgKGhhc093bihjaGVja0NsYXNoZXMsIGV4cHIubmFtZSkpXHJcbiAgICAgICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShleHByLnN0YXJ0LCBcIkFyZ3VtZW50IG5hbWUgY2xhc2hcIik7IH1cclxuICAgICAgICBjaGVja0NsYXNoZXNbZXhwci5uYW1lXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpbmRpbmdUeXBlICE9PSBCSU5EX09VVFNJREUpIHsgdGhpcy5kZWNsYXJlTmFtZShleHByLm5hbWUsIGJpbmRpbmdUeXBlLCBleHByLnN0YXJ0KTsgfVxyXG4gICAgfVxyXG4gICAgYnJlYWtcclxuXHJcbiAgY2FzZSBcIkNoYWluRXhwcmVzc2lvblwiOlxyXG4gICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGV4cHIuc3RhcnQsIFwiT3B0aW9uYWwgY2hhaW5pbmcgY2Fubm90IGFwcGVhciBpbiBsZWZ0LWhhbmQgc2lkZVwiKTtcclxuICAgIGJyZWFrXHJcblxyXG4gIGNhc2UgXCJNZW1iZXJFeHByZXNzaW9uXCI6XHJcbiAgICBpZiAoaXNCaW5kKSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShleHByLnN0YXJ0LCBcIkJpbmRpbmcgbWVtYmVyIGV4cHJlc3Npb25cIik7IH1cclxuICAgIGJyZWFrXHJcblxyXG4gIGNhc2UgXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiOlxyXG4gICAgaWYgKGlzQmluZCkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZXhwci5zdGFydCwgXCJCaW5kaW5nIHBhcmVudGhlc2l6ZWQgZXhwcmVzc2lvblwiKTsgfVxyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMVmFsU2ltcGxlKGV4cHIuZXhwcmVzc2lvbiwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcylcclxuXHJcbiAgZGVmYXVsdDpcclxuICAgIHRoaXMucmFpc2UoZXhwci5zdGFydCwgKGlzQmluZCA/IFwiQmluZGluZ1wiIDogXCJBc3NpZ25pbmcgdG9cIikgKyBcIiBydmFsdWVcIik7XHJcbiAgfVxyXG59O1xyXG5cclxucHAkNy5jaGVja0xWYWxQYXR0ZXJuID0gZnVuY3Rpb24oZXhwciwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcykge1xyXG4gIGlmICggYmluZGluZ1R5cGUgPT09IHZvaWQgMCApIGJpbmRpbmdUeXBlID0gQklORF9OT05FO1xyXG5cclxuICBzd2l0Y2ggKGV4cHIudHlwZSkge1xyXG4gIGNhc2UgXCJPYmplY3RQYXR0ZXJuXCI6XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IGV4cHIucHJvcGVydGllczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdmFyIHByb3AgPSBsaXN0W2ldO1xyXG5cclxuICAgIHRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKHByb3AsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xyXG4gICAgfVxyXG4gICAgYnJlYWtcclxuXHJcbiAgY2FzZSBcIkFycmF5UGF0dGVyblwiOlxyXG4gICAgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gZXhwci5lbGVtZW50czsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcclxuICAgICAgdmFyIGVsZW0gPSBsaXN0JDFbaSQxXTtcclxuXHJcbiAgICBpZiAoZWxlbSkgeyB0aGlzLmNoZWNrTFZhbElubmVyUGF0dGVybihlbGVtLCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTsgfVxyXG4gICAgfVxyXG4gICAgYnJlYWtcclxuXHJcbiAgZGVmYXVsdDpcclxuICAgIHRoaXMuY2hlY2tMVmFsU2ltcGxlKGV4cHIsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xyXG4gIH1cclxufTtcclxuXHJcbnBwJDcuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuID0gZnVuY3Rpb24oZXhwciwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcykge1xyXG4gIGlmICggYmluZGluZ1R5cGUgPT09IHZvaWQgMCApIGJpbmRpbmdUeXBlID0gQklORF9OT05FO1xyXG5cclxuICBzd2l0Y2ggKGV4cHIudHlwZSkge1xyXG4gIGNhc2UgXCJQcm9wZXJ0eVwiOlxyXG4gICAgLy8gQXNzaWdubWVudFByb3BlcnR5IGhhcyB0eXBlID09PSBcIlByb3BlcnR5XCJcclxuICAgIHRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKGV4cHIudmFsdWUsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xyXG4gICAgYnJlYWtcclxuXHJcbiAgY2FzZSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6XHJcbiAgICB0aGlzLmNoZWNrTFZhbFBhdHRlcm4oZXhwci5sZWZ0LCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTtcclxuICAgIGJyZWFrXHJcblxyXG4gIGNhc2UgXCJSZXN0RWxlbWVudFwiOlxyXG4gICAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGV4cHIuYXJndW1lbnQsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xyXG4gICAgYnJlYWtcclxuXHJcbiAgZGVmYXVsdDpcclxuICAgIHRoaXMuY2hlY2tMVmFsUGF0dGVybihleHByLCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBUaGUgYWxnb3JpdGhtIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSByZWdleHAgY2FuIGFwcGVhciBhdCBhXHJcbi8vIGdpdmVuIHBvaW50IGluIHRoZSBwcm9ncmFtIGlzIGxvb3NlbHkgYmFzZWQgb24gc3dlZXQuanMnIGFwcHJvYWNoLlxyXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc3dlZXQuanMvd2lraS9kZXNpZ25cclxuXHJcblxyXG52YXIgVG9rQ29udGV4dCA9IGZ1bmN0aW9uIFRva0NvbnRleHQodG9rZW4sIGlzRXhwciwgcHJlc2VydmVTcGFjZSwgb3ZlcnJpZGUsIGdlbmVyYXRvcikge1xyXG4gIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICB0aGlzLmlzRXhwciA9ICEhaXNFeHByO1xyXG4gIHRoaXMucHJlc2VydmVTcGFjZSA9ICEhcHJlc2VydmVTcGFjZTtcclxuICB0aGlzLm92ZXJyaWRlID0gb3ZlcnJpZGU7XHJcbiAgdGhpcy5nZW5lcmF0b3IgPSAhIWdlbmVyYXRvcjtcclxufTtcclxuXHJcbnZhciB0eXBlcyA9IHtcclxuICBiX3N0YXQ6IG5ldyBUb2tDb250ZXh0KFwie1wiLCBmYWxzZSksXHJcbiAgYl9leHByOiBuZXcgVG9rQ29udGV4dChcIntcIiwgdHJ1ZSksXHJcbiAgYl90bXBsOiBuZXcgVG9rQ29udGV4dChcIiR7XCIsIGZhbHNlKSxcclxuICBwX3N0YXQ6IG5ldyBUb2tDb250ZXh0KFwiKFwiLCBmYWxzZSksXHJcbiAgcF9leHByOiBuZXcgVG9rQ29udGV4dChcIihcIiwgdHJ1ZSksXHJcbiAgcV90bXBsOiBuZXcgVG9rQ29udGV4dChcImBcIiwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudHJ5UmVhZFRlbXBsYXRlVG9rZW4oKTsgfSksXHJcbiAgZl9zdGF0OiBuZXcgVG9rQ29udGV4dChcImZ1bmN0aW9uXCIsIGZhbHNlKSxcclxuICBmX2V4cHI6IG5ldyBUb2tDb250ZXh0KFwiZnVuY3Rpb25cIiwgdHJ1ZSksXHJcbiAgZl9leHByX2dlbjogbmV3IFRva0NvbnRleHQoXCJmdW5jdGlvblwiLCB0cnVlLCBmYWxzZSwgbnVsbCwgdHJ1ZSksXHJcbiAgZl9nZW46IG5ldyBUb2tDb250ZXh0KFwiZnVuY3Rpb25cIiwgZmFsc2UsIGZhbHNlLCBudWxsLCB0cnVlKVxyXG59O1xyXG5cclxudmFyIHBwJDYgPSBQYXJzZXIucHJvdG90eXBlO1xyXG5cclxucHAkNi5pbml0aWFsQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBbdHlwZXMuYl9zdGF0XVxyXG59O1xyXG5cclxucHAkNi5jdXJDb250ZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmNvbnRleHQubGVuZ3RoIC0gMV1cclxufTtcclxuXHJcbnBwJDYuYnJhY2VJc0Jsb2NrID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcy5jdXJDb250ZXh0KCk7XHJcbiAgaWYgKHBhcmVudCA9PT0gdHlwZXMuZl9leHByIHx8IHBhcmVudCA9PT0gdHlwZXMuZl9zdGF0KVxyXG4gICAgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgaWYgKHByZXZUeXBlID09PSB0eXBlcyQxLmNvbG9uICYmIChwYXJlbnQgPT09IHR5cGVzLmJfc3RhdCB8fCBwYXJlbnQgPT09IHR5cGVzLmJfZXhwcikpXHJcbiAgICB7IHJldHVybiAhcGFyZW50LmlzRXhwciB9XHJcblxyXG4gIC8vIFRoZSBjaGVjayBmb3IgYHR0Lm5hbWUgJiYgZXhwckFsbG93ZWRgIGRldGVjdHMgd2hldGhlciB3ZSBhcmVcclxuICAvLyBhZnRlciBhIGB5aWVsZGAgb3IgYG9mYCBjb25zdHJ1Y3QuIFNlZSB0aGUgYHVwZGF0ZUNvbnRleHRgIGZvclxyXG4gIC8vIGB0dC5uYW1lYC5cclxuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuX3JldHVybiB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5uYW1lICYmIHRoaXMuZXhwckFsbG93ZWQpXHJcbiAgICB7IHJldHVybiBsaW5lQnJlYWsudGVzdCh0aGlzLmlucHV0LnNsaWNlKHRoaXMubGFzdFRva0VuZCwgdGhpcy5zdGFydCkpIH1cclxuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuX2Vsc2UgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEuc2VtaSB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5lb2YgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEucGFyZW5SIHx8IHByZXZUeXBlID09PSB0eXBlcyQxLmFycm93KVxyXG4gICAgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgaWYgKHByZXZUeXBlID09PSB0eXBlcyQxLmJyYWNlTClcclxuICAgIHsgcmV0dXJuIHBhcmVudCA9PT0gdHlwZXMuYl9zdGF0IH1cclxuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuX3ZhciB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5fY29uc3QgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEubmFtZSlcclxuICAgIHsgcmV0dXJuIGZhbHNlIH1cclxuICByZXR1cm4gIXRoaXMuZXhwckFsbG93ZWRcclxufTtcclxuXHJcbnBwJDYuaW5HZW5lcmF0b3JDb250ZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgZm9yICh2YXIgaSA9IHRoaXMuY29udGV4dC5sZW5ndGggLSAxOyBpID49IDE7IGktLSkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRbaV07XHJcbiAgICBpZiAoY29udGV4dC50b2tlbiA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICB7IHJldHVybiBjb250ZXh0LmdlbmVyYXRvciB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxucHAkNi51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcclxuICB2YXIgdXBkYXRlLCB0eXBlID0gdGhpcy50eXBlO1xyXG4gIGlmICh0eXBlLmtleXdvcmQgJiYgcHJldlR5cGUgPT09IHR5cGVzJDEuZG90KVxyXG4gICAgeyB0aGlzLmV4cHJBbGxvd2VkID0gZmFsc2U7IH1cclxuICBlbHNlIGlmICh1cGRhdGUgPSB0eXBlLnVwZGF0ZUNvbnRleHQpXHJcbiAgICB7IHVwZGF0ZS5jYWxsKHRoaXMsIHByZXZUeXBlKTsgfVxyXG4gIGVsc2VcclxuICAgIHsgdGhpcy5leHByQWxsb3dlZCA9IHR5cGUuYmVmb3JlRXhwcjsgfVxyXG59O1xyXG5cclxuLy8gVXNlZCB0byBoYW5kbGUgZWRnZSBjYXNlcyB3aGVuIHRva2VuIGNvbnRleHQgY291bGQgbm90IGJlIGluZmVycmVkIGNvcnJlY3RseSBkdXJpbmcgdG9rZW5pemF0aW9uIHBoYXNlXHJcblxyXG5wcCQ2Lm92ZXJyaWRlQ29udGV4dCA9IGZ1bmN0aW9uKHRva2VuQ3R4KSB7XHJcbiAgaWYgKHRoaXMuY3VyQ29udGV4dCgpICE9PSB0b2tlbkN0eCkge1xyXG4gICAgdGhpcy5jb250ZXh0W3RoaXMuY29udGV4dC5sZW5ndGggLSAxXSA9IHRva2VuQ3R4O1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFRva2VuLXNwZWNpZmljIGNvbnRleHQgdXBkYXRlIGNvZGVcclxuXHJcbnR5cGVzJDEucGFyZW5SLnVwZGF0ZUNvbnRleHQgPSB0eXBlcyQxLmJyYWNlUi51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuY29udGV4dC5sZW5ndGggPT09IDEpIHtcclxuICAgIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBvdXQgPSB0aGlzLmNvbnRleHQucG9wKCk7XHJcbiAgaWYgKG91dCA9PT0gdHlwZXMuYl9zdGF0ICYmIHRoaXMuY3VyQ29udGV4dCgpLnRva2VuID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIG91dCA9IHRoaXMuY29udGV4dC5wb3AoKTtcclxuICB9XHJcbiAgdGhpcy5leHByQWxsb3dlZCA9ICFvdXQuaXNFeHByO1xyXG59O1xyXG5cclxudHlwZXMkMS5icmFjZUwudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKHByZXZUeXBlKSB7XHJcbiAgdGhpcy5jb250ZXh0LnB1c2godGhpcy5icmFjZUlzQmxvY2socHJldlR5cGUpID8gdHlwZXMuYl9zdGF0IDogdHlwZXMuYl9leHByKTtcclxuICB0aGlzLmV4cHJBbGxvd2VkID0gdHJ1ZTtcclxufTtcclxuXHJcbnR5cGVzJDEuZG9sbGFyQnJhY2VMLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmNvbnRleHQucHVzaCh0eXBlcy5iX3RtcGwpO1xyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudHlwZXMkMS5wYXJlbkwudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKHByZXZUeXBlKSB7XHJcbiAgdmFyIHN0YXRlbWVudFBhcmVucyA9IHByZXZUeXBlID09PSB0eXBlcyQxLl9pZiB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5fZm9yIHx8IHByZXZUeXBlID09PSB0eXBlcyQxLl93aXRoIHx8IHByZXZUeXBlID09PSB0eXBlcyQxLl93aGlsZTtcclxuICB0aGlzLmNvbnRleHQucHVzaChzdGF0ZW1lbnRQYXJlbnMgPyB0eXBlcy5wX3N0YXQgOiB0eXBlcy5wX2V4cHIpO1xyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudHlwZXMkMS5pbmNEZWMudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIHRva0V4cHJBbGxvd2VkIHN0YXlzIHVuY2hhbmdlZFxyXG59O1xyXG5cclxudHlwZXMkMS5fZnVuY3Rpb24udXBkYXRlQ29udGV4dCA9IHR5cGVzJDEuX2NsYXNzLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbihwcmV2VHlwZSkge1xyXG4gIGlmIChwcmV2VHlwZS5iZWZvcmVFeHByICYmIHByZXZUeXBlICE9PSB0eXBlcyQxLl9lbHNlICYmXHJcbiAgICAgICEocHJldlR5cGUgPT09IHR5cGVzJDEuc2VtaSAmJiB0aGlzLmN1ckNvbnRleHQoKSAhPT0gdHlwZXMucF9zdGF0KSAmJlxyXG4gICAgICAhKHByZXZUeXBlID09PSB0eXBlcyQxLl9yZXR1cm4gJiYgbGluZUJyZWFrLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsIHRoaXMuc3RhcnQpKSkgJiZcclxuICAgICAgISgocHJldlR5cGUgPT09IHR5cGVzJDEuY29sb24gfHwgcHJldlR5cGUgPT09IHR5cGVzJDEuYnJhY2VMKSAmJiB0aGlzLmN1ckNvbnRleHQoKSA9PT0gdHlwZXMuYl9zdGF0KSlcclxuICAgIHsgdGhpcy5jb250ZXh0LnB1c2godHlwZXMuZl9leHByKTsgfVxyXG4gIGVsc2VcclxuICAgIHsgdGhpcy5jb250ZXh0LnB1c2godHlwZXMuZl9zdGF0KTsgfVxyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSBmYWxzZTtcclxufTtcclxuXHJcbnR5cGVzJDEuY29sb24udXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLmN1ckNvbnRleHQoKS50b2tlbiA9PT0gXCJmdW5jdGlvblwiKSB7IHRoaXMuY29udGV4dC5wb3AoKTsgfVxyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudHlwZXMkMS5iYWNrUXVvdGUudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLmN1ckNvbnRleHQoKSA9PT0gdHlwZXMucV90bXBsKVxyXG4gICAgeyB0aGlzLmNvbnRleHQucG9wKCk7IH1cclxuICBlbHNlXHJcbiAgICB7IHRoaXMuY29udGV4dC5wdXNoKHR5cGVzLnFfdG1wbCk7IH1cclxuICB0aGlzLmV4cHJBbGxvd2VkID0gZmFsc2U7XHJcbn07XHJcblxyXG50eXBlcyQxLnN0YXIudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKHByZXZUeXBlKSB7XHJcbiAgaWYgKHByZXZUeXBlID09PSB0eXBlcyQxLl9mdW5jdGlvbikge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0Lmxlbmd0aCAtIDE7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0W2luZGV4XSA9PT0gdHlwZXMuZl9leHByKVxyXG4gICAgICB7IHRoaXMuY29udGV4dFtpbmRleF0gPSB0eXBlcy5mX2V4cHJfZ2VuOyB9XHJcbiAgICBlbHNlXHJcbiAgICAgIHsgdGhpcy5jb250ZXh0W2luZGV4XSA9IHR5cGVzLmZfZ2VuOyB9XHJcbiAgfVxyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudHlwZXMkMS5uYW1lLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbihwcmV2VHlwZSkge1xyXG4gIHZhciBhbGxvd2VkID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIHByZXZUeXBlICE9PSB0eXBlcyQxLmRvdCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IFwib2ZcIiAmJiAhdGhpcy5leHByQWxsb3dlZCB8fFxyXG4gICAgICAgIHRoaXMudmFsdWUgPT09IFwieWllbGRcIiAmJiB0aGlzLmluR2VuZXJhdG9yQ29udGV4dCgpKVxyXG4gICAgICB7IGFsbG93ZWQgPSB0cnVlOyB9XHJcbiAgfVxyXG4gIHRoaXMuZXhwckFsbG93ZWQgPSBhbGxvd2VkO1xyXG59O1xyXG5cclxuLy8gQSByZWN1cnNpdmUgZGVzY2VudCBwYXJzZXIgb3BlcmF0ZXMgYnkgZGVmaW5pbmcgZnVuY3Rpb25zIGZvciBhbGxcclxuLy8gc3ludGFjdGljIGVsZW1lbnRzLCBhbmQgcmVjdXJzaXZlbHkgY2FsbGluZyB0aG9zZSwgZWFjaCBmdW5jdGlvblxyXG4vLyBhZHZhbmNpbmcgdGhlIGlucHV0IHN0cmVhbSBhbmQgcmV0dXJuaW5nIGFuIEFTVCBub2RlLiBQcmVjZWRlbmNlXHJcbi8vIG9mIGNvbnN0cnVjdHMgKGZvciBleGFtcGxlLCB0aGUgZmFjdCB0aGF0IGAheFsxXWAgbWVhbnMgYCEoeFsxXSlgXHJcbi8vIGluc3RlYWQgb2YgYCgheClbMV1gIGlzIGhhbmRsZWQgYnkgdGhlIGZhY3QgdGhhdCB0aGUgcGFyc2VyXHJcbi8vIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHVuYXJ5IHByZWZpeCBvcGVyYXRvcnMgaXMgY2FsbGVkIGZpcnN0LCBhbmRcclxuLy8gaW4gdHVybiBjYWxscyB0aGUgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYFtdYCBzdWJzY3JpcHRzIFx1MjAxNCB0aGF0XHJcbi8vIHdheSwgaXQnbGwgcmVjZWl2ZSB0aGUgbm9kZSBmb3IgYHhbMV1gIGFscmVhZHkgcGFyc2VkLCBhbmQgd3JhcHNcclxuLy8gKnRoYXQqIGluIHRoZSB1bmFyeSBvcGVyYXRvciBub2RlLlxyXG4vL1xyXG4vLyBBY29ybiB1c2VzIGFuIFtvcGVyYXRvciBwcmVjZWRlbmNlIHBhcnNlcl1bb3BwXSB0byBoYW5kbGUgYmluYXJ5XHJcbi8vIG9wZXJhdG9yIHByZWNlZGVuY2UsIGJlY2F1c2UgaXQgaXMgbXVjaCBtb3JlIGNvbXBhY3QgdGhhbiB1c2luZ1xyXG4vLyB0aGUgdGVjaG5pcXVlIG91dGxpbmVkIGFib3ZlLCB3aGljaCB1c2VzIGRpZmZlcmVudCwgbmVzdGluZ1xyXG4vLyBmdW5jdGlvbnMgdG8gc3BlY2lmeSBwcmVjZWRlbmNlLCBmb3IgYWxsIG9mIHRoZSB0ZW4gYmluYXJ5XHJcbi8vIHByZWNlZGVuY2UgbGV2ZWxzIHRoYXQgSmF2YVNjcmlwdCBkZWZpbmVzLlxyXG4vL1xyXG4vLyBbb3BwXTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9PcGVyYXRvci1wcmVjZWRlbmNlX3BhcnNlclxyXG5cclxuXHJcbnZhciBwcCQ1ID0gUGFyc2VyLnByb3RvdHlwZTtcclxuXHJcbi8vIENoZWNrIGlmIHByb3BlcnR5IG5hbWUgY2xhc2hlcyB3aXRoIGFscmVhZHkgYWRkZWQuXHJcbi8vIE9iamVjdC9jbGFzcyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGFyZSBub3QgYWxsb3dlZCB0byBjbGFzaCBcdTIwMTRcclxuLy8gZWl0aGVyIHdpdGggZWFjaCBvdGhlciBvciB3aXRoIGFuIGluaXQgcHJvcGVydHkgXHUyMDE0IGFuZCBpblxyXG4vLyBzdHJpY3QgbW9kZSwgaW5pdCBwcm9wZXJ0aWVzIGFyZSBhbHNvIG5vdCBhbGxvd2VkIHRvIGJlIHJlcGVhdGVkLlxyXG5cclxucHAkNS5jaGVja1Byb3BDbGFzaCA9IGZ1bmN0aW9uKHByb3AsIHByb3BIYXNoLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHByb3AudHlwZSA9PT0gXCJTcHJlYWRFbGVtZW50XCIpXHJcbiAgICB7IHJldHVybiB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIChwcm9wLmNvbXB1dGVkIHx8IHByb3AubWV0aG9kIHx8IHByb3Auc2hvcnRoYW5kKSlcclxuICAgIHsgcmV0dXJuIH1cclxuICB2YXIga2V5ID0gcHJvcC5rZXk7XHJcbiAgdmFyIG5hbWU7XHJcbiAgc3dpdGNoIChrZXkudHlwZSkge1xyXG4gIGNhc2UgXCJJZGVudGlmaWVyXCI6IG5hbWUgPSBrZXkubmFtZTsgYnJlYWtcclxuICBjYXNlIFwiTGl0ZXJhbFwiOiBuYW1lID0gU3RyaW5nKGtleS52YWx1ZSk7IGJyZWFrXHJcbiAgZGVmYXVsdDogcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBraW5kID0gcHJvcC5raW5kO1xyXG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xyXG4gICAgaWYgKG5hbWUgPT09IFwiX19wcm90b19fXCIgJiYga2luZCA9PT0gXCJpbml0XCIpIHtcclxuICAgICAgaWYgKHByb3BIYXNoLnByb3RvKSB7XHJcbiAgICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICAgICAgICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLmRvdWJsZVByb3RvIDwgMCkge1xyXG4gICAgICAgICAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLmRvdWJsZVByb3RvID0ga2V5LnN0YXJ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoa2V5LnN0YXJ0LCBcIlJlZGVmaW5pdGlvbiBvZiBfX3Byb3RvX18gcHJvcGVydHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHByb3BIYXNoLnByb3RvID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVyblxyXG4gIH1cclxuICBuYW1lID0gXCIkXCIgKyBuYW1lO1xyXG4gIHZhciBvdGhlciA9IHByb3BIYXNoW25hbWVdO1xyXG4gIGlmIChvdGhlcikge1xyXG4gICAgdmFyIHJlZGVmaW5pdGlvbjtcclxuICAgIGlmIChraW5kID09PSBcImluaXRcIikge1xyXG4gICAgICByZWRlZmluaXRpb24gPSB0aGlzLnN0cmljdCAmJiBvdGhlci5pbml0IHx8IG90aGVyLmdldCB8fCBvdGhlci5zZXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWRlZmluaXRpb24gPSBvdGhlci5pbml0IHx8IG90aGVyW2tpbmRdO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlZGVmaW5pdGlvbilcclxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoa2V5LnN0YXJ0LCBcIlJlZGVmaW5pdGlvbiBvZiBwcm9wZXJ0eVwiKTsgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBvdGhlciA9IHByb3BIYXNoW25hbWVdID0ge1xyXG4gICAgICBpbml0OiBmYWxzZSxcclxuICAgICAgZ2V0OiBmYWxzZSxcclxuICAgICAgc2V0OiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbiAgb3RoZXJba2luZF0gPSB0cnVlO1xyXG59O1xyXG5cclxuLy8gIyMjIEV4cHJlc3Npb24gcGFyc2luZ1xyXG5cclxuLy8gVGhlc2UgbmVzdCwgZnJvbSB0aGUgbW9zdCBnZW5lcmFsIGV4cHJlc3Npb24gdHlwZSBhdCB0aGUgdG9wIHRvXHJcbi8vICdhdG9taWMnLCBub25kaXZpc2libGUgZXhwcmVzc2lvbiB0eXBlcyBhdCB0aGUgYm90dG9tLiBNb3N0IG9mXHJcbi8vIHRoZSBmdW5jdGlvbnMgd2lsbCBzaW1wbHkgbGV0IHRoZSBmdW5jdGlvbihzKSBiZWxvdyB0aGVtIHBhcnNlLFxyXG4vLyBhbmQsICppZiogdGhlIHN5bnRhY3RpYyBjb25zdHJ1Y3QgdGhleSBoYW5kbGUgaXMgcHJlc2VudCwgd3JhcFxyXG4vLyB0aGUgQVNUIG5vZGUgdGhhdCB0aGUgaW5uZXIgcGFyc2VyIGdhdmUgdGhlbSBpbiBhbm90aGVyIG5vZGUuXHJcblxyXG4vLyBQYXJzZSBhIGZ1bGwgZXhwcmVzc2lvbi4gVGhlIG9wdGlvbmFsIGFyZ3VtZW50cyBhcmUgdXNlZCB0b1xyXG4vLyBmb3JiaWQgdGhlIGBpbmAgb3BlcmF0b3IgKGluIGZvciBsb29wcyBpbml0YWxpemF0aW9uIGV4cHJlc3Npb25zKVxyXG4vLyBhbmQgcHJvdmlkZSByZWZlcmVuY2UgZm9yIHN0b3JpbmcgJz0nIG9wZXJhdG9yIGluc2lkZSBzaG9ydGhhbmRcclxuLy8gcHJvcGVydHkgYXNzaWdubWVudCBpbiBjb250ZXh0cyB3aGVyZSBib3RoIG9iamVjdCBleHByZXNzaW9uXHJcbi8vIGFuZCBvYmplY3QgcGF0dGVybiBtaWdodCBhcHBlYXIgKHNvIGl0J3MgcG9zc2libGUgdG8gcmFpc2VcclxuLy8gZGVsYXllZCBzeW50YXggZXJyb3IgYXQgY29ycmVjdCBwb3NpdGlvbikuXHJcblxyXG5wcCQ1LnBhcnNlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKGZvckluaXQsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XHJcbiAgdmFyIGV4cHIgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb21tYSkge1xyXG4gICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XHJcbiAgICBub2RlLmV4cHJlc3Npb25zID0gW2V4cHJdO1xyXG4gICAgd2hpbGUgKHRoaXMuZWF0KHR5cGVzJDEuY29tbWEpKSB7IG5vZGUuZXhwcmVzc2lvbnMucHVzaCh0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykpOyB9XHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiU2VxdWVuY2VFeHByZXNzaW9uXCIpXHJcbiAgfVxyXG4gIHJldHVybiBleHByXHJcbn07XHJcblxyXG4vLyBQYXJzZSBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24uIFRoaXMgaW5jbHVkZXMgYXBwbGljYXRpb25zIG9mXHJcbi8vIG9wZXJhdG9ycyBsaWtlIGArPWAuXHJcblxyXG5wcCQ1LnBhcnNlTWF5YmVBc3NpZ24gPSBmdW5jdGlvbihmb3JJbml0LCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBhZnRlckxlZnRQYXJzZSkge1xyXG4gIGlmICh0aGlzLmlzQ29udGV4dHVhbChcInlpZWxkXCIpKSB7XHJcbiAgICBpZiAodGhpcy5pbkdlbmVyYXRvcikgeyByZXR1cm4gdGhpcy5wYXJzZVlpZWxkKGZvckluaXQpIH1cclxuICAgIC8vIFRoZSB0b2tlbml6ZXIgd2lsbCBhc3N1bWUgYW4gZXhwcmVzc2lvbiBpcyBhbGxvd2VkIGFmdGVyXHJcbiAgICAvLyBgeWllbGRgLCBidXQgdGhpcyBpc24ndCB0aGF0IGtpbmQgb2YgeWllbGRcclxuICAgIGVsc2UgeyB0aGlzLmV4cHJBbGxvd2VkID0gZmFsc2U7IH1cclxuICB9XHJcblxyXG4gIHZhciBvd25EZXN0cnVjdHVyaW5nRXJyb3JzID0gZmFsc2UsIG9sZFBhcmVuQXNzaWduID0gLTEsIG9sZFRyYWlsaW5nQ29tbWEgPSAtMSwgb2xkRG91YmxlUHJvdG8gPSAtMTtcclxuICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xyXG4gICAgb2xkUGFyZW5Bc3NpZ24gPSByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ247XHJcbiAgICBvbGRUcmFpbGluZ0NvbW1hID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hO1xyXG4gICAgb2xkRG91YmxlUHJvdG8gPSByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLmRvdWJsZVByb3RvO1xyXG4gICAgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hID0gLTE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMgPSBuZXcgRGVzdHJ1Y3R1cmluZ0Vycm9ycztcclxuICAgIG93bkRlc3RydWN0dXJpbmdFcnJvcnMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5MIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5uYW1lKSB7XHJcbiAgICB0aGlzLnBvdGVudGlhbEFycm93QXQgPSB0aGlzLnN0YXJ0O1xyXG4gICAgdGhpcy5wb3RlbnRpYWxBcnJvd0luRm9yQXdhaXQgPSBmb3JJbml0ID09PSBcImF3YWl0XCI7XHJcbiAgfVxyXG4gIHZhciBsZWZ0ID0gdGhpcy5wYXJzZU1heWJlQ29uZGl0aW9uYWwoZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XHJcbiAgaWYgKGFmdGVyTGVmdFBhcnNlKSB7IGxlZnQgPSBhZnRlckxlZnRQYXJzZS5jYWxsKHRoaXMsIGxlZnQsIHN0YXJ0UG9zLCBzdGFydExvYyk7IH1cclxuICBpZiAodGhpcy50eXBlLmlzQXNzaWduKSB7XHJcbiAgICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcclxuICAgIG5vZGUub3BlcmF0b3IgPSB0aGlzLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lcSlcclxuICAgICAgeyBsZWZ0ID0gdGhpcy50b0Fzc2lnbmFibGUobGVmdCwgZmFsc2UsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpOyB9XHJcbiAgICBpZiAoIW93bkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICAgICAgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5kb3VibGVQcm90byA9IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuc2hvcnRoYW5kQXNzaWduID49IGxlZnQuc3RhcnQpXHJcbiAgICAgIHsgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5zaG9ydGhhbmRBc3NpZ24gPSAtMTsgfSAvLyByZXNldCBiZWNhdXNlIHNob3J0aGFuZCBkZWZhdWx0IHdhcyB1c2VkIGNvcnJlY3RseVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lcSlcclxuICAgICAgeyB0aGlzLmNoZWNrTFZhbFBhdHRlcm4obGVmdCk7IH1cclxuICAgIGVsc2VcclxuICAgICAgeyB0aGlzLmNoZWNrTFZhbFNpbXBsZShsZWZ0KTsgfVxyXG4gICAgbm9kZS5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgbm9kZS5yaWdodCA9IHRoaXMucGFyc2VNYXliZUFzc2lnbihmb3JJbml0KTtcclxuICAgIGlmIChvbGREb3VibGVQcm90byA+IC0xKSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuZG91YmxlUHJvdG8gPSBvbGREb3VibGVQcm90bzsgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChvd25EZXN0cnVjdHVyaW5nRXJyb3JzKSB7IHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIHRydWUpOyB9XHJcbiAgfVxyXG4gIGlmIChvbGRQYXJlbkFzc2lnbiA+IC0xKSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEFzc2lnbiA9IG9sZFBhcmVuQXNzaWduOyB9XHJcbiAgaWYgKG9sZFRyYWlsaW5nQ29tbWEgPiAtMSkgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPSBvbGRUcmFpbGluZ0NvbW1hOyB9XHJcbiAgcmV0dXJuIGxlZnRcclxufTtcclxuXHJcbi8vIFBhcnNlIGEgdGVybmFyeSBjb25kaXRpb25hbCAoYD86YCkgb3BlcmF0b3IuXHJcblxyXG5wcCQ1LnBhcnNlTWF5YmVDb25kaXRpb25hbCA9IGZ1bmN0aW9uKGZvckluaXQsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XHJcbiAgdmFyIGV4cHIgPSB0aGlzLnBhcnNlRXhwck9wcyhmb3JJbml0LCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcclxuICBpZiAodGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykpIHsgcmV0dXJuIGV4cHIgfVxyXG4gIGlmICh0aGlzLmVhdCh0eXBlcyQxLnF1ZXN0aW9uKSkge1xyXG4gICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XHJcbiAgICBub2RlLnRlc3QgPSBleHByO1xyXG4gICAgbm9kZS5jb25zZXF1ZW50ID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XHJcbiAgICB0aGlzLmV4cGVjdCh0eXBlcyQxLmNvbG9uKTtcclxuICAgIG5vZGUuYWx0ZXJuYXRlID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKGZvckluaXQpO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiKVxyXG4gIH1cclxuICByZXR1cm4gZXhwclxyXG59O1xyXG5cclxuLy8gU3RhcnQgdGhlIHByZWNlZGVuY2UgcGFyc2VyLlxyXG5cclxucHAkNS5wYXJzZUV4cHJPcHMgPSBmdW5jdGlvbihmb3JJbml0LCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XHJcbiAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xyXG4gIHZhciBleHByID0gdGhpcy5wYXJzZU1heWJlVW5hcnkocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZmFsc2UsIGZhbHNlLCBmb3JJbml0KTtcclxuICBpZiAodGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykpIHsgcmV0dXJuIGV4cHIgfVxyXG4gIHJldHVybiBleHByLnN0YXJ0ID09PSBzdGFydFBvcyAmJiBleHByLnR5cGUgPT09IFwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIiA/IGV4cHIgOiB0aGlzLnBhcnNlRXhwck9wKGV4cHIsIHN0YXJ0UG9zLCBzdGFydExvYywgLTEsIGZvckluaXQpXHJcbn07XHJcblxyXG4vLyBQYXJzZSBiaW5hcnkgb3BlcmF0b3JzIHdpdGggdGhlIG9wZXJhdG9yIHByZWNlZGVuY2UgcGFyc2luZ1xyXG4vLyBhbGdvcml0aG0uIGBsZWZ0YCBpcyB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIG9wZXJhdG9yLlxyXG4vLyBgbWluUHJlY2AgcHJvdmlkZXMgY29udGV4dCB0aGF0IGFsbG93cyB0aGUgZnVuY3Rpb24gdG8gc3RvcCBhbmRcclxuLy8gZGVmZXIgZnVydGhlciBwYXJzZXIgdG8gb25lIG9mIGl0cyBjYWxsZXJzIHdoZW4gaXQgZW5jb3VudGVycyBhblxyXG4vLyBvcGVyYXRvciB0aGF0IGhhcyBhIGxvd2VyIHByZWNlZGVuY2UgdGhhbiB0aGUgc2V0IGl0IGlzIHBhcnNpbmcuXHJcblxyXG5wcCQ1LnBhcnNlRXhwck9wID0gZnVuY3Rpb24obGVmdCwgbGVmdFN0YXJ0UG9zLCBsZWZ0U3RhcnRMb2MsIG1pblByZWMsIGZvckluaXQpIHtcclxuICB2YXIgcHJlYyA9IHRoaXMudHlwZS5iaW5vcDtcclxuICBpZiAocHJlYyAhPSBudWxsICYmICghZm9ySW5pdCB8fCB0aGlzLnR5cGUgIT09IHR5cGVzJDEuX2luKSkge1xyXG4gICAgaWYgKHByZWMgPiBtaW5QcmVjKSB7XHJcbiAgICAgIHZhciBsb2dpY2FsID0gdGhpcy50eXBlID09PSB0eXBlcyQxLmxvZ2ljYWxPUiB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEubG9naWNhbEFORDtcclxuICAgICAgdmFyIGNvYWxlc2NlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLmNvYWxlc2NlO1xyXG4gICAgICBpZiAoY29hbGVzY2UpIHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHByZWNlZGVuY2Ugb2YgYHR0LmNvYWxlc2NlYCBhcyBlcXVhbCB0byB0aGUgcmFuZ2Ugb2YgbG9naWNhbCBleHByZXNzaW9ucy5cclxuICAgICAgICAvLyBJbiBvdGhlciB3b3JkcywgYG5vZGUucmlnaHRgIHNob3VsZG4ndCBjb250YWluIGxvZ2ljYWwgZXhwcmVzc2lvbnMgaW4gb3JkZXIgdG8gY2hlY2sgdGhlIG1peGVkIGVycm9yLlxyXG4gICAgICAgIHByZWMgPSB0eXBlcyQxLmxvZ2ljYWxBTkQuYmlub3A7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG9wID0gdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcclxuICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5wYXJzZUV4cHJPcCh0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCBmYWxzZSwgZmFsc2UsIGZvckluaXQpLCBzdGFydFBvcywgc3RhcnRMb2MsIHByZWMsIGZvckluaXQpO1xyXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuYnVpbGRCaW5hcnkobGVmdFN0YXJ0UG9zLCBsZWZ0U3RhcnRMb2MsIGxlZnQsIHJpZ2h0LCBvcCwgbG9naWNhbCB8fCBjb2FsZXNjZSk7XHJcbiAgICAgIGlmICgobG9naWNhbCAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29hbGVzY2UpIHx8IChjb2FsZXNjZSAmJiAodGhpcy50eXBlID09PSB0eXBlcyQxLmxvZ2ljYWxPUiB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEubG9naWNhbEFORCkpKSB7XHJcbiAgICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIFwiTG9naWNhbCBleHByZXNzaW9ucyBhbmQgY29hbGVzY2UgZXhwcmVzc2lvbnMgY2Fubm90IGJlIG1peGVkLiBXcmFwIGVpdGhlciBieSBwYXJlbnRoZXNlc1wiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJPcChub2RlLCBsZWZ0U3RhcnRQb3MsIGxlZnRTdGFydExvYywgbWluUHJlYywgZm9ySW5pdClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGxlZnRcclxufTtcclxuXHJcbnBwJDUuYnVpbGRCaW5hcnkgPSBmdW5jdGlvbihzdGFydFBvcywgc3RhcnRMb2MsIGxlZnQsIHJpZ2h0LCBvcCwgbG9naWNhbCkge1xyXG4gIGlmIChyaWdodC50eXBlID09PSBcIlByaXZhdGVJZGVudGlmaWVyXCIpIHsgdGhpcy5yYWlzZShyaWdodC5zdGFydCwgXCJQcml2YXRlIGlkZW50aWZpZXIgY2FuIG9ubHkgYmUgbGVmdCBzaWRlIG9mIGJpbmFyeSBleHByZXNzaW9uXCIpOyB9XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XHJcbiAgbm9kZS5sZWZ0ID0gbGVmdDtcclxuICBub2RlLm9wZXJhdG9yID0gb3A7XHJcbiAgbm9kZS5yaWdodCA9IHJpZ2h0O1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgbG9naWNhbCA/IFwiTG9naWNhbEV4cHJlc3Npb25cIiA6IFwiQmluYXJ5RXhwcmVzc2lvblwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgdW5hcnkgb3BlcmF0b3JzLCBib3RoIHByZWZpeCBhbmQgcG9zdGZpeC5cclxuXHJcbnBwJDUucGFyc2VNYXliZVVuYXJ5ID0gZnVuY3Rpb24ocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgc2F3VW5hcnksIGluY0RlYywgZm9ySW5pdCkge1xyXG4gIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYywgZXhwcjtcclxuICBpZiAodGhpcy5pc0NvbnRleHR1YWwoXCJhd2FpdFwiKSAmJiB0aGlzLmNhbkF3YWl0KSB7XHJcbiAgICBleHByID0gdGhpcy5wYXJzZUF3YWl0KGZvckluaXQpO1xyXG4gICAgc2F3VW5hcnkgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAodGhpcy50eXBlLnByZWZpeCkge1xyXG4gICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpLCB1cGRhdGUgPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEuaW5jRGVjO1xyXG4gICAgbm9kZS5vcGVyYXRvciA9IHRoaXMudmFsdWU7XHJcbiAgICBub2RlLnByZWZpeCA9IHRydWU7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCB0cnVlLCB1cGRhdGUsIGZvckluaXQpO1xyXG4gICAgdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7XHJcbiAgICBpZiAodXBkYXRlKSB7IHRoaXMuY2hlY2tMVmFsU2ltcGxlKG5vZGUuYXJndW1lbnQpOyB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnN0cmljdCAmJiBub2RlLm9wZXJhdG9yID09PSBcImRlbGV0ZVwiICYmXHJcbiAgICAgICAgICAgICBub2RlLmFyZ3VtZW50LnR5cGUgPT09IFwiSWRlbnRpZmllclwiKVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIkRlbGV0aW5nIGxvY2FsIHZhcmlhYmxlIGluIHN0cmljdCBtb2RlXCIpOyB9XHJcbiAgICBlbHNlIGlmIChub2RlLm9wZXJhdG9yID09PSBcImRlbGV0ZVwiICYmIGlzUHJpdmF0ZUZpZWxkQWNjZXNzKG5vZGUuYXJndW1lbnQpKVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIlByaXZhdGUgZmllbGRzIGNhbiBub3QgYmUgZGVsZXRlZFwiKTsgfVxyXG4gICAgZWxzZSB7IHNhd1VuYXJ5ID0gdHJ1ZTsgfVxyXG4gICAgZXhwciA9IHRoaXMuZmluaXNoTm9kZShub2RlLCB1cGRhdGUgPyBcIlVwZGF0ZUV4cHJlc3Npb25cIiA6IFwiVW5hcnlFeHByZXNzaW9uXCIpO1xyXG4gIH0gZWxzZSBpZiAoIXNhd1VuYXJ5ICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wcml2YXRlSWQpIHtcclxuICAgIGlmICgoZm9ySW5pdCB8fCB0aGlzLnByaXZhdGVOYW1lU3RhY2subGVuZ3RoID09PSAwKSAmJiB0aGlzLm9wdGlvbnMuY2hlY2tQcml2YXRlRmllbGRzKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICBleHByID0gdGhpcy5wYXJzZVByaXZhdGVJZGVudCgpO1xyXG4gICAgLy8gb25seSBjb3VsZCBiZSBwcml2YXRlIGZpZWxkcyBpbiAnaW4nLCBzdWNoIGFzICN4IGluIG9ialxyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5faW4pIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICB9IGVsc2Uge1xyXG4gICAgZXhwciA9IHRoaXMucGFyc2VFeHByU3Vic2NyaXB0cyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBmb3JJbml0KTtcclxuICAgIGlmICh0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSkgeyByZXR1cm4gZXhwciB9XHJcbiAgICB3aGlsZSAodGhpcy50eXBlLnBvc3RmaXggJiYgIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkpIHtcclxuICAgICAgdmFyIG5vZGUkMSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcclxuICAgICAgbm9kZSQxLm9wZXJhdG9yID0gdGhpcy52YWx1ZTtcclxuICAgICAgbm9kZSQxLnByZWZpeCA9IGZhbHNlO1xyXG4gICAgICBub2RlJDEuYXJndW1lbnQgPSBleHByO1xyXG4gICAgICB0aGlzLmNoZWNrTFZhbFNpbXBsZShleHByKTtcclxuICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIGV4cHIgPSB0aGlzLmZpbmlzaE5vZGUobm9kZSQxLCBcIlVwZGF0ZUV4cHJlc3Npb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWluY0RlYyAmJiB0aGlzLmVhdCh0eXBlcyQxLnN0YXJzdGFyKSkge1xyXG4gICAgaWYgKHNhd1VuYXJ5KVxyXG4gICAgICB7IHRoaXMudW5leHBlY3RlZCh0aGlzLmxhc3RUb2tTdGFydCk7IH1cclxuICAgIGVsc2VcclxuICAgICAgeyByZXR1cm4gdGhpcy5idWlsZEJpbmFyeShzdGFydFBvcywgc3RhcnRMb2MsIGV4cHIsIHRoaXMucGFyc2VNYXliZVVuYXJ5KG51bGwsIGZhbHNlLCBmYWxzZSwgZm9ySW5pdCksIFwiKipcIiwgZmFsc2UpIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGV4cHJcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc1ByaXZhdGVGaWVsZEFjY2Vzcyhub2RlKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIG5vZGUudHlwZSA9PT0gXCJNZW1iZXJFeHByZXNzaW9uXCIgJiYgbm9kZS5wcm9wZXJ0eS50eXBlID09PSBcIlByaXZhdGVJZGVudGlmaWVyXCIgfHxcclxuICAgIG5vZGUudHlwZSA9PT0gXCJDaGFpbkV4cHJlc3Npb25cIiAmJiBpc1ByaXZhdGVGaWVsZEFjY2Vzcyhub2RlLmV4cHJlc3Npb24pXHJcbiAgKVxyXG59XHJcblxyXG4vLyBQYXJzZSBjYWxsLCBkb3QsIGFuZCBgW11gLXN1YnNjcmlwdCBleHByZXNzaW9ucy5cclxuXHJcbnBwJDUucGFyc2VFeHByU3Vic2NyaXB0cyA9IGZ1bmN0aW9uKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIGZvckluaXQpIHtcclxuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XHJcbiAgdmFyIGV4cHIgPSB0aGlzLnBhcnNlRXhwckF0b20ocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZm9ySW5pdCk7XHJcbiAgaWYgKGV4cHIudHlwZSA9PT0gXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiICYmIHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rU3RhcnQsIHRoaXMubGFzdFRva0VuZCkgIT09IFwiKVwiKVxyXG4gICAgeyByZXR1cm4gZXhwciB9XHJcbiAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2VTdWJzY3JpcHRzKGV4cHIsIHN0YXJ0UG9zLCBzdGFydExvYywgZmFsc2UsIGZvckluaXQpO1xyXG4gIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzICYmIHJlc3VsdC50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIikge1xyXG4gICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEFzc2lnbiA+PSByZXN1bHQuc3RhcnQpIHsgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduID0gLTE7IH1cclxuICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRCaW5kID49IHJlc3VsdC5zdGFydCkgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRCaW5kID0gLTE7IH1cclxuICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPj0gcmVzdWx0LnN0YXJ0KSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSA9IC0xOyB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufTtcclxuXHJcbnBwJDUucGFyc2VTdWJzY3JpcHRzID0gZnVuY3Rpb24oYmFzZSwgc3RhcnRQb3MsIHN0YXJ0TG9jLCBub0NhbGxzLCBmb3JJbml0KSB7XHJcbiAgdmFyIG1heWJlQXN5bmNBcnJvdyA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4ICYmIGJhc2UudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgJiYgYmFzZS5uYW1lID09PSBcImFzeW5jXCIgJiZcclxuICAgICAgdGhpcy5sYXN0VG9rRW5kID09PSBiYXNlLmVuZCAmJiAhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSAmJiBiYXNlLmVuZCAtIGJhc2Uuc3RhcnQgPT09IDUgJiZcclxuICAgICAgdGhpcy5wb3RlbnRpYWxBcnJvd0F0ID09PSBiYXNlLnN0YXJ0O1xyXG4gIHZhciBvcHRpb25hbENoYWluZWQgPSBmYWxzZTtcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wYXJzZVN1YnNjcmlwdChiYXNlLCBzdGFydFBvcywgc3RhcnRMb2MsIG5vQ2FsbHMsIG1heWJlQXN5bmNBcnJvdywgb3B0aW9uYWxDaGFpbmVkLCBmb3JJbml0KTtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5vcHRpb25hbCkgeyBvcHRpb25hbENoYWluZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoZWxlbWVudCA9PT0gYmFzZSB8fCBlbGVtZW50LnR5cGUgPT09IFwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIikge1xyXG4gICAgICBpZiAob3B0aW9uYWxDaGFpbmVkKSB7XHJcbiAgICAgICAgdmFyIGNoYWluTm9kZSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcclxuICAgICAgICBjaGFpbk5vZGUuZXhwcmVzc2lvbiA9IGVsZW1lbnQ7XHJcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZmluaXNoTm9kZShjaGFpbk5vZGUsIFwiQ2hhaW5FeHByZXNzaW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZSA9IGVsZW1lbnQ7XHJcbiAgfVxyXG59O1xyXG5cclxucHAkNS5zaG91bGRQYXJzZUFzeW5jQXJyb3cgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkgJiYgdGhpcy5lYXQodHlwZXMkMS5hcnJvdylcclxufTtcclxuXHJcbnBwJDUucGFyc2VTdWJzY3JpcHRBc3luY0Fycm93ID0gZnVuY3Rpb24oc3RhcnRQb3MsIHN0YXJ0TG9jLCBleHByTGlzdCwgZm9ySW5pdCkge1xyXG4gIHJldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgZXhwckxpc3QsIHRydWUsIGZvckluaXQpXHJcbn07XHJcblxyXG5wcCQ1LnBhcnNlU3Vic2NyaXB0ID0gZnVuY3Rpb24oYmFzZSwgc3RhcnRQb3MsIHN0YXJ0TG9jLCBub0NhbGxzLCBtYXliZUFzeW5jQXJyb3csIG9wdGlvbmFsQ2hhaW5lZCwgZm9ySW5pdCkge1xyXG4gIHZhciBvcHRpb25hbFN1cHBvcnRlZCA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMTtcclxuICB2YXIgb3B0aW9uYWwgPSBvcHRpb25hbFN1cHBvcnRlZCAmJiB0aGlzLmVhdCh0eXBlcyQxLnF1ZXN0aW9uRG90KTtcclxuICBpZiAobm9DYWxscyAmJiBvcHRpb25hbCkgeyB0aGlzLnJhaXNlKHRoaXMubGFzdFRva1N0YXJ0LCBcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gdGhlIGNhbGxlZSBvZiBuZXcgZXhwcmVzc2lvbnNcIik7IH1cclxuXHJcbiAgdmFyIGNvbXB1dGVkID0gdGhpcy5lYXQodHlwZXMkMS5icmFja2V0TCk7XHJcbiAgaWYgKGNvbXB1dGVkIHx8IChvcHRpb25hbCAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEucGFyZW5MICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5iYWNrUXVvdGUpIHx8IHRoaXMuZWF0KHR5cGVzJDEuZG90KSkge1xyXG4gICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XHJcbiAgICBub2RlLm9iamVjdCA9IGJhc2U7XHJcbiAgICBpZiAoY29tcHV0ZWQpIHtcclxuICAgICAgbm9kZS5wcm9wZXJ0eSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuYnJhY2tldFIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucHJpdmF0ZUlkICYmIGJhc2UudHlwZSAhPT0gXCJTdXBlclwiKSB7XHJcbiAgICAgIG5vZGUucHJvcGVydHkgPSB0aGlzLnBhcnNlUHJpdmF0ZUlkZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLnByb3BlcnR5ID0gdGhpcy5wYXJzZUlkZW50KHRoaXMub3B0aW9ucy5hbGxvd1Jlc2VydmVkICE9PSBcIm5ldmVyXCIpO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jb21wdXRlZCA9ICEhY29tcHV0ZWQ7XHJcbiAgICBpZiAob3B0aW9uYWxTdXBwb3J0ZWQpIHtcclxuICAgICAgbm9kZS5vcHRpb25hbCA9IG9wdGlvbmFsO1xyXG4gICAgfVxyXG4gICAgYmFzZSA9IHRoaXMuZmluaXNoTm9kZShub2RlLCBcIk1lbWJlckV4cHJlc3Npb25cIik7XHJcbiAgfSBlbHNlIGlmICghbm9DYWxscyAmJiB0aGlzLmVhdCh0eXBlcyQxLnBhcmVuTCkpIHtcclxuICAgIHZhciByZWZEZXN0cnVjdHVyaW5nRXJyb3JzID0gbmV3IERlc3RydWN0dXJpbmdFcnJvcnMsIG9sZFlpZWxkUG9zID0gdGhpcy55aWVsZFBvcywgb2xkQXdhaXRQb3MgPSB0aGlzLmF3YWl0UG9zLCBvbGRBd2FpdElkZW50UG9zID0gdGhpcy5hd2FpdElkZW50UG9zO1xyXG4gICAgdGhpcy55aWVsZFBvcyA9IDA7XHJcbiAgICB0aGlzLmF3YWl0UG9zID0gMDtcclxuICAgIHRoaXMuYXdhaXRJZGVudFBvcyA9IDA7XHJcbiAgICB2YXIgZXhwckxpc3QgPSB0aGlzLnBhcnNlRXhwckxpc3QodHlwZXMkMS5wYXJlblIsIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4LCBmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XHJcbiAgICBpZiAobWF5YmVBc3luY0Fycm93ICYmICFvcHRpb25hbCAmJiB0aGlzLnNob3VsZFBhcnNlQXN5bmNBcnJvdygpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tQYXR0ZXJuRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIGZhbHNlKTtcclxuICAgICAgdGhpcy5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMoKTtcclxuICAgICAgaWYgKHRoaXMuYXdhaXRJZGVudFBvcyA+IDApXHJcbiAgICAgICAgeyB0aGlzLnJhaXNlKHRoaXMuYXdhaXRJZGVudFBvcywgXCJDYW5ub3QgdXNlICdhd2FpdCcgYXMgaWRlbnRpZmllciBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb25cIik7IH1cclxuICAgICAgdGhpcy55aWVsZFBvcyA9IG9sZFlpZWxkUG9zO1xyXG4gICAgICB0aGlzLmF3YWl0UG9zID0gb2xkQXdhaXRQb3M7XHJcbiAgICAgIHRoaXMuYXdhaXRJZGVudFBvcyA9IG9sZEF3YWl0SWRlbnRQb3M7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlU3Vic2NyaXB0QXN5bmNBcnJvdyhzdGFydFBvcywgc3RhcnRMb2MsIGV4cHJMaXN0LCBmb3JJbml0KVxyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7XHJcbiAgICB0aGlzLnlpZWxkUG9zID0gb2xkWWllbGRQb3MgfHwgdGhpcy55aWVsZFBvcztcclxuICAgIHRoaXMuYXdhaXRQb3MgPSBvbGRBd2FpdFBvcyB8fCB0aGlzLmF3YWl0UG9zO1xyXG4gICAgdGhpcy5hd2FpdElkZW50UG9zID0gb2xkQXdhaXRJZGVudFBvcyB8fCB0aGlzLmF3YWl0SWRlbnRQb3M7XHJcbiAgICB2YXIgbm9kZSQxID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xyXG4gICAgbm9kZSQxLmNhbGxlZSA9IGJhc2U7XHJcbiAgICBub2RlJDEuYXJndW1lbnRzID0gZXhwckxpc3Q7XHJcbiAgICBpZiAob3B0aW9uYWxTdXBwb3J0ZWQpIHtcclxuICAgICAgbm9kZSQxLm9wdGlvbmFsID0gb3B0aW9uYWw7XHJcbiAgICB9XHJcbiAgICBiYXNlID0gdGhpcy5maW5pc2hOb2RlKG5vZGUkMSwgXCJDYWxsRXhwcmVzc2lvblwiKTtcclxuICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5iYWNrUXVvdGUpIHtcclxuICAgIGlmIChvcHRpb25hbCB8fCBvcHRpb25hbENoYWluZWQpIHtcclxuICAgICAgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gdGhlIHRhZyBvZiB0YWdnZWQgdGVtcGxhdGUgZXhwcmVzc2lvbnNcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgbm9kZSQyID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xyXG4gICAgbm9kZSQyLnRhZyA9IGJhc2U7XHJcbiAgICBub2RlJDIucXVhc2kgPSB0aGlzLnBhcnNlVGVtcGxhdGUoe2lzVGFnZ2VkOiB0cnVlfSk7XHJcbiAgICBiYXNlID0gdGhpcy5maW5pc2hOb2RlKG5vZGUkMiwgXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIik7XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlXHJcbn07XHJcblxyXG4vLyBQYXJzZSBhbiBhdG9taWMgZXhwcmVzc2lvbiBcdTIwMTQgZWl0aGVyIGEgc2luZ2xlIHRva2VuIHRoYXQgaXMgYW5cclxuLy8gZXhwcmVzc2lvbiwgYW4gZXhwcmVzc2lvbiBzdGFydGVkIGJ5IGEga2V5d29yZCBsaWtlIGBmdW5jdGlvbmAgb3JcclxuLy8gYG5ld2AsIG9yIGFuIGV4cHJlc3Npb24gd3JhcHBlZCBpbiBwdW5jdHVhdGlvbiBsaWtlIGAoKWAsIGBbXWAsXHJcbi8vIG9yIGB7fWAuXHJcblxyXG5wcCQ1LnBhcnNlRXhwckF0b20gPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBmb3JJbml0LCBmb3JOZXcpIHtcclxuICAvLyBJZiBhIGRpdmlzaW9uIG9wZXJhdG9yIGFwcGVhcnMgaW4gYW4gZXhwcmVzc2lvbiBwb3NpdGlvbiwgdGhlXHJcbiAgLy8gdG9rZW5pemVyIGdvdCBjb25mdXNlZCwgYW5kIHdlIGZvcmNlIGl0IHRvIHJlYWQgYSByZWdleHAgaW5zdGVhZC5cclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnNsYXNoKSB7IHRoaXMucmVhZFJlZ2V4cCgpOyB9XHJcblxyXG4gIHZhciBub2RlLCBjYW5CZUFycm93ID0gdGhpcy5wb3RlbnRpYWxBcnJvd0F0ID09PSB0aGlzLnN0YXJ0O1xyXG4gIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgY2FzZSB0eXBlcyQxLl9zdXBlcjpcclxuICAgIGlmICghdGhpcy5hbGxvd1N1cGVyKVxyXG4gICAgICB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCInc3VwZXInIGtleXdvcmQgb3V0c2lkZSBhIG1ldGhvZFwiKTsgfVxyXG4gICAgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5MICYmICF0aGlzLmFsbG93RGlyZWN0U3VwZXIpXHJcbiAgICAgIHsgdGhpcy5yYWlzZShub2RlLnN0YXJ0LCBcInN1cGVyKCkgY2FsbCBvdXRzaWRlIGNvbnN0cnVjdG9yIG9mIGEgc3ViY2xhc3NcIik7IH1cclxuICAgIC8vIFRoZSBgc3VwZXJgIGtleXdvcmQgY2FuIGFwcGVhciBhdCBiZWxvdzpcclxuICAgIC8vIFN1cGVyUHJvcGVydHk6XHJcbiAgICAvLyAgICAgc3VwZXIgWyBFeHByZXNzaW9uIF1cclxuICAgIC8vICAgICBzdXBlciAuIElkZW50aWZpZXJOYW1lXHJcbiAgICAvLyBTdXBlckNhbGw6XHJcbiAgICAvLyAgICAgc3VwZXIgKCBBcmd1bWVudHMgKVxyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5kb3QgJiYgdGhpcy50eXBlICE9PSB0eXBlcyQxLmJyYWNrZXRMICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5wYXJlbkwpXHJcbiAgICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJTdXBlclwiKVxyXG5cclxuICBjYXNlIHR5cGVzJDEuX3RoaXM6XHJcbiAgICBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlRoaXNFeHByZXNzaW9uXCIpXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5uYW1lOlxyXG4gICAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jLCBjb250YWluc0VzYyA9IHRoaXMuY29udGFpbnNFc2M7XHJcbiAgICB2YXIgaWQgPSB0aGlzLnBhcnNlSWRlbnQoZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4ICYmICFjb250YWluc0VzYyAmJiBpZC5uYW1lID09PSBcImFzeW5jXCIgJiYgIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkgJiYgdGhpcy5lYXQodHlwZXMkMS5fZnVuY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMub3ZlcnJpZGVDb250ZXh0KHR5cGVzLmZfZXhwcik7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpLCAwLCBmYWxzZSwgdHJ1ZSwgZm9ySW5pdClcclxuICAgIH1cclxuICAgIGlmIChjYW5CZUFycm93ICYmICF0aGlzLmNhbkluc2VydFNlbWljb2xvbigpKSB7XHJcbiAgICAgIGlmICh0aGlzLmVhdCh0eXBlcyQxLmFycm93KSlcclxuICAgICAgICB7IHJldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgW2lkXSwgZmFsc2UsIGZvckluaXQpIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4ICYmIGlkLm5hbWUgPT09IFwiYXN5bmNcIiAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSAmJiAhY29udGFpbnNFc2MgJiZcclxuICAgICAgICAgICghdGhpcy5wb3RlbnRpYWxBcnJvd0luRm9yQXdhaXQgfHwgdGhpcy52YWx1ZSAhPT0gXCJvZlwiIHx8IHRoaXMuY29udGFpbnNFc2MpKSB7XHJcbiAgICAgICAgaWQgPSB0aGlzLnBhcnNlSWRlbnQoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbkluc2VydFNlbWljb2xvbigpIHx8ICF0aGlzLmVhdCh0eXBlcyQxLmFycm93KSlcclxuICAgICAgICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFycm93RXhwcmVzc2lvbih0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyksIFtpZF0sIHRydWUsIGZvckluaXQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpZFxyXG5cclxuICBjYXNlIHR5cGVzJDEucmVnZXhwOlxyXG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIG5vZGUgPSB0aGlzLnBhcnNlTGl0ZXJhbCh2YWx1ZS52YWx1ZSk7XHJcbiAgICBub2RlLnJlZ2V4ID0ge3BhdHRlcm46IHZhbHVlLnBhdHRlcm4sIGZsYWdzOiB2YWx1ZS5mbGFnc307XHJcbiAgICByZXR1cm4gbm9kZVxyXG5cclxuICBjYXNlIHR5cGVzJDEubnVtOiBjYXNlIHR5cGVzJDEuc3RyaW5nOlxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VMaXRlcmFsKHRoaXMudmFsdWUpXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5fbnVsbDogY2FzZSB0eXBlcyQxLl90cnVlOiBjYXNlIHR5cGVzJDEuX2ZhbHNlOlxyXG4gICAgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgICBub2RlLnZhbHVlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLl9udWxsID8gbnVsbCA6IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fdHJ1ZTtcclxuICAgIG5vZGUucmF3ID0gdGhpcy50eXBlLmtleXdvcmQ7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJMaXRlcmFsXCIpXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5wYXJlbkw6XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LCBleHByID0gdGhpcy5wYXJzZVBhcmVuQW5kRGlzdGluZ3Vpc2hFeHByZXNzaW9uKGNhbkJlQXJyb3csIGZvckluaXQpO1xyXG4gICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEFzc2lnbiA8IDAgJiYgIXRoaXMuaXNTaW1wbGVBc3NpZ25UYXJnZXQoZXhwcikpXHJcbiAgICAgICAgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gPSBzdGFydDsgfVxyXG4gICAgICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQmluZCA8IDApXHJcbiAgICAgICAgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRCaW5kID0gc3RhcnQ7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBleHByXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5icmFja2V0TDpcclxuICAgIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICBub2RlLmVsZW1lbnRzID0gdGhpcy5wYXJzZUV4cHJMaXN0KHR5cGVzJDEuYnJhY2tldFIsIHRydWUsIHRydWUsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkFycmF5RXhwcmVzc2lvblwiKVxyXG5cclxuICBjYXNlIHR5cGVzJDEuYnJhY2VMOlxyXG4gICAgdGhpcy5vdmVycmlkZUNvbnRleHQodHlwZXMuYl9leHByKTtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlT2JqKGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKVxyXG5cclxuICBjYXNlIHR5cGVzJDEuX2Z1bmN0aW9uOlxyXG4gICAgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24obm9kZSwgMClcclxuXHJcbiAgY2FzZSB0eXBlcyQxLl9jbGFzczpcclxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2xhc3ModGhpcy5zdGFydE5vZGUoKSwgZmFsc2UpXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5fbmV3OlxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VOZXcoKVxyXG5cclxuICBjYXNlIHR5cGVzJDEuYmFja1F1b3RlOlxyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VUZW1wbGF0ZSgpXHJcblxyXG4gIGNhc2UgdHlwZXMkMS5faW1wb3J0OlxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJJbXBvcnQoZm9yTmV3KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZCgpXHJcbiAgICB9XHJcblxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJBdG9tRGVmYXVsdCgpXHJcbiAgfVxyXG59O1xyXG5cclxucHAkNS5wYXJzZUV4cHJBdG9tRGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMudW5leHBlY3RlZCgpO1xyXG59O1xyXG5cclxucHAkNS5wYXJzZUV4cHJJbXBvcnQgPSBmdW5jdGlvbihmb3JOZXcpIHtcclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcblxyXG4gIC8vIENvbnN1bWUgYGltcG9ydGAgYXMgYW4gaWRlbnRpZmllciBmb3IgYGltcG9ydC5tZXRhYC5cclxuICAvLyBCZWNhdXNlIGB0aGlzLnBhcnNlSWRlbnQodHJ1ZSlgIGRvZXNuJ3QgY2hlY2sgZXNjYXBlIHNlcXVlbmNlcywgaXQgbmVlZHMgdGhlIGNoZWNrIG9mIGB0aGlzLmNvbnRhaW5zRXNjYC5cclxuICBpZiAodGhpcy5jb250YWluc0VzYykgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCwgXCJFc2NhcGUgc2VxdWVuY2UgaW4ga2V5d29yZCBpbXBvcnRcIik7IH1cclxuICB2YXIgbWV0YSA9IHRoaXMucGFyc2VJZGVudCh0cnVlKTtcclxuXHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wYXJlbkwgJiYgIWZvck5ldykge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VEeW5hbWljSW1wb3J0KG5vZGUpXHJcbiAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZG90KSB7XHJcbiAgICBub2RlLm1ldGEgPSBtZXRhO1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VJbXBvcnRNZXRhKG5vZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMudW5leHBlY3RlZCgpO1xyXG4gIH1cclxufTtcclxuXHJcbnBwJDUucGFyc2VEeW5hbWljSW1wb3J0ID0gZnVuY3Rpb24obm9kZSkge1xyXG4gIHRoaXMubmV4dCgpOyAvLyBza2lwIGAoYFxyXG5cclxuICAvLyBQYXJzZSBub2RlLnNvdXJjZS5cclxuICBub2RlLnNvdXJjZSA9IHRoaXMucGFyc2VNYXliZUFzc2lnbigpO1xyXG5cclxuICAvLyBWZXJpZnkgZW5kaW5nLlxyXG4gIGlmICghdGhpcy5lYXQodHlwZXMkMS5wYXJlblIpKSB7XHJcbiAgICB2YXIgZXJyb3JQb3MgPSB0aGlzLnN0YXJ0O1xyXG4gICAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuY29tbWEpICYmIHRoaXMuZWF0KHR5cGVzJDEucGFyZW5SKSkge1xyXG4gICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZXJyb3JQb3MsIFwiVHJhaWxpbmcgY29tbWEgaXMgbm90IGFsbG93ZWQgaW4gaW1wb3J0KClcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVuZXhwZWN0ZWQoZXJyb3JQb3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkltcG9ydEV4cHJlc3Npb25cIilcclxufTtcclxuXHJcbnBwJDUucGFyc2VJbXBvcnRNZXRhID0gZnVuY3Rpb24obm9kZSkge1xyXG4gIHRoaXMubmV4dCgpOyAvLyBza2lwIGAuYFxyXG5cclxuICB2YXIgY29udGFpbnNFc2MgPSB0aGlzLmNvbnRhaW5zRXNjO1xyXG4gIG5vZGUucHJvcGVydHkgPSB0aGlzLnBhcnNlSWRlbnQodHJ1ZSk7XHJcblxyXG4gIGlmIChub2RlLnByb3BlcnR5Lm5hbWUgIT09IFwibWV0YVwiKVxyXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUobm9kZS5wcm9wZXJ0eS5zdGFydCwgXCJUaGUgb25seSB2YWxpZCBtZXRhIHByb3BlcnR5IGZvciBpbXBvcnQgaXMgJ2ltcG9ydC5tZXRhJ1wiKTsgfVxyXG4gIGlmIChjb250YWluc0VzYylcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiJ2ltcG9ydC5tZXRhJyBtdXN0IG5vdCBjb250YWluIGVzY2FwZWQgY2hhcmFjdGVyc1wiKTsgfVxyXG4gIGlmICh0aGlzLm9wdGlvbnMuc291cmNlVHlwZSAhPT0gXCJtb2R1bGVcIiAmJiAhdGhpcy5vcHRpb25zLmFsbG93SW1wb3J0RXhwb3J0RXZlcnl3aGVyZSlcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiQ2Fubm90IHVzZSAnaW1wb3J0Lm1ldGEnIG91dHNpZGUgYSBtb2R1bGVcIik7IH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIk1ldGFQcm9wZXJ0eVwiKVxyXG59O1xyXG5cclxucHAkNS5wYXJzZUxpdGVyYWwgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcclxuICBub2RlLnZhbHVlID0gdmFsdWU7XHJcbiAgbm9kZS5yYXcgPSB0aGlzLmlucHV0LnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcclxuICBpZiAobm9kZS5yYXcuY2hhckNvZGVBdChub2RlLnJhdy5sZW5ndGggLSAxKSA9PT0gMTEwKSB7IG5vZGUuYmlnaW50ID0gbm9kZS5yYXcuc2xpY2UoMCwgLTEpLnJlcGxhY2UoL18vZywgXCJcIik7IH1cclxuICB0aGlzLm5leHQoKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiTGl0ZXJhbFwiKVxyXG59O1xyXG5cclxucHAkNS5wYXJzZVBhcmVuRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5MKTtcclxuICB2YXIgdmFsID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnBhcmVuUik7XHJcbiAgcmV0dXJuIHZhbFxyXG59O1xyXG5cclxucHAkNS5zaG91bGRQYXJzZUFycm93ID0gZnVuY3Rpb24oZXhwckxpc3QpIHtcclxuICByZXR1cm4gIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKClcclxufTtcclxuXHJcbnBwJDUucGFyc2VQYXJlbkFuZERpc3Rpbmd1aXNoRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKGNhbkJlQXJyb3csIGZvckluaXQpIHtcclxuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2MsIHZhbCwgYWxsb3dUcmFpbGluZ0NvbW1hID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDg7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KSB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICB2YXIgaW5uZXJTdGFydFBvcyA9IHRoaXMuc3RhcnQsIGlubmVyU3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xyXG4gICAgdmFyIGV4cHJMaXN0ID0gW10sIGZpcnN0ID0gdHJ1ZSwgbGFzdElzQ29tbWEgPSBmYWxzZTtcclxuICAgIHZhciByZWZEZXN0cnVjdHVyaW5nRXJyb3JzID0gbmV3IERlc3RydWN0dXJpbmdFcnJvcnMsIG9sZFlpZWxkUG9zID0gdGhpcy55aWVsZFBvcywgb2xkQXdhaXRQb3MgPSB0aGlzLmF3YWl0UG9zLCBzcHJlYWRTdGFydDtcclxuICAgIHRoaXMueWllbGRQb3MgPSAwO1xyXG4gICAgdGhpcy5hd2FpdFBvcyA9IDA7XHJcbiAgICAvLyBEbyBub3Qgc2F2ZSBhd2FpdElkZW50UG9zIHRvIGFsbG93IGNoZWNraW5nIGF3YWl0cyBuZXN0ZWQgaW4gcGFyYW1ldGVyc1xyXG4gICAgd2hpbGUgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5wYXJlblIpIHtcclxuICAgICAgZmlyc3QgPyBmaXJzdCA9IGZhbHNlIDogdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7XHJcbiAgICAgIGlmIChhbGxvd1RyYWlsaW5nQ29tbWEgJiYgdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEodHlwZXMkMS5wYXJlblIsIHRydWUpKSB7XHJcbiAgICAgICAgbGFzdElzQ29tbWEgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmVsbGlwc2lzKSB7XHJcbiAgICAgICAgc3ByZWFkU3RhcnQgPSB0aGlzLnN0YXJ0O1xyXG4gICAgICAgIGV4cHJMaXN0LnB1c2godGhpcy5wYXJzZVBhcmVuSXRlbSh0aGlzLnBhcnNlUmVzdEJpbmRpbmcoKSkpO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEpIHtcclxuICAgICAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZShcclxuICAgICAgICAgICAgdGhpcy5zdGFydCxcclxuICAgICAgICAgICAgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHByTGlzdC5wdXNoKHRoaXMucGFyc2VNYXliZUFzc2lnbihmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdGhpcy5wYXJzZVBhcmVuSXRlbSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgaW5uZXJFbmRQb3MgPSB0aGlzLmxhc3RUb2tFbmQsIGlubmVyRW5kTG9jID0gdGhpcy5sYXN0VG9rRW5kTG9jO1xyXG4gICAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlblIpO1xyXG5cclxuICAgIGlmIChjYW5CZUFycm93ICYmIHRoaXMuc2hvdWxkUGFyc2VBcnJvdyhleHByTGlzdCkgJiYgdGhpcy5lYXQodHlwZXMkMS5hcnJvdykpIHtcclxuICAgICAgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZmFsc2UpO1xyXG4gICAgICB0aGlzLmNoZWNrWWllbGRBd2FpdEluRGVmYXVsdFBhcmFtcygpO1xyXG4gICAgICB0aGlzLnlpZWxkUG9zID0gb2xkWWllbGRQb3M7XHJcbiAgICAgIHRoaXMuYXdhaXRQb3MgPSBvbGRBd2FpdFBvcztcclxuICAgICAgcmV0dXJuIHRoaXMucGFyc2VQYXJlbkFycm93TGlzdChzdGFydFBvcywgc3RhcnRMb2MsIGV4cHJMaXN0LCBmb3JJbml0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZXhwckxpc3QubGVuZ3RoIHx8IGxhc3RJc0NvbW1hKSB7IHRoaXMudW5leHBlY3RlZCh0aGlzLmxhc3RUb2tTdGFydCk7IH1cclxuICAgIGlmIChzcHJlYWRTdGFydCkgeyB0aGlzLnVuZXhwZWN0ZWQoc3ByZWFkU3RhcnQpOyB9XHJcbiAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0cnVlKTtcclxuICAgIHRoaXMueWllbGRQb3MgPSBvbGRZaWVsZFBvcyB8fCB0aGlzLnlpZWxkUG9zO1xyXG4gICAgdGhpcy5hd2FpdFBvcyA9IG9sZEF3YWl0UG9zIHx8IHRoaXMuYXdhaXRQb3M7XHJcblxyXG4gICAgaWYgKGV4cHJMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdGFydE5vZGVBdChpbm5lclN0YXJ0UG9zLCBpbm5lclN0YXJ0TG9jKTtcclxuICAgICAgdmFsLmV4cHJlc3Npb25zID0gZXhwckxpc3Q7XHJcbiAgICAgIHRoaXMuZmluaXNoTm9kZUF0KHZhbCwgXCJTZXF1ZW5jZUV4cHJlc3Npb25cIiwgaW5uZXJFbmRQb3MsIGlubmVyRW5kTG9jKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IGV4cHJMaXN0WzBdO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWwgPSB0aGlzLnBhcnNlUGFyZW5FeHByZXNzaW9uKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5vcHRpb25zLnByZXNlcnZlUGFyZW5zKSB7XHJcbiAgICB2YXIgcGFyID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xyXG4gICAgcGFyLmV4cHJlc3Npb24gPSB2YWw7XHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKHBhciwgXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdmFsXHJcbiAgfVxyXG59O1xyXG5cclxucHAkNS5wYXJzZVBhcmVuSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICByZXR1cm4gaXRlbVxyXG59O1xyXG5cclxucHAkNS5wYXJzZVBhcmVuQXJyb3dMaXN0ID0gZnVuY3Rpb24oc3RhcnRQb3MsIHN0YXJ0TG9jLCBleHByTGlzdCwgZm9ySW5pdCkge1xyXG4gIHJldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgZXhwckxpc3QsIGZhbHNlLCBmb3JJbml0KVxyXG59O1xyXG5cclxuLy8gTmV3J3MgcHJlY2VkZW5jZSBpcyBzbGlnaHRseSB0cmlja3kuIEl0IG11c3QgYWxsb3cgaXRzIGFyZ3VtZW50IHRvXHJcbi8vIGJlIGEgYFtdYCBvciBkb3Qgc3Vic2NyaXB0IGV4cHJlc3Npb24sIGJ1dCBub3QgYSBjYWxsIFx1MjAxNCBhdCBsZWFzdCxcclxuLy8gbm90IHdpdGhvdXQgd3JhcHBpbmcgaXQgaW4gcGFyZW50aGVzZXMuIFRodXMsIGl0IHVzZXMgdGhlIG5vQ2FsbHNcclxuLy8gYXJndW1lbnQgdG8gcGFyc2VTdWJzY3JpcHRzIHRvIHByZXZlbnQgaXQgZnJvbSBjb25zdW1pbmcgdGhlXHJcbi8vIGFyZ3VtZW50IGxpc3QuXHJcblxyXG52YXIgZW1wdHkgPSBbXTtcclxuXHJcbnBwJDUucGFyc2VOZXcgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodGhpcy5jb250YWluc0VzYykgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCwgXCJFc2NhcGUgc2VxdWVuY2UgaW4ga2V5d29yZCBuZXdcIik7IH1cclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5kb3QpIHtcclxuICAgIHZhciBtZXRhID0gdGhpcy5zdGFydE5vZGVBdChub2RlLnN0YXJ0LCBub2RlLnN0YXJ0TG9jKTtcclxuICAgIG1ldGEubmFtZSA9IFwibmV3XCI7XHJcbiAgICBub2RlLm1ldGEgPSB0aGlzLmZpbmlzaE5vZGUobWV0YSwgXCJJZGVudGlmaWVyXCIpO1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgY29udGFpbnNFc2MgPSB0aGlzLmNvbnRhaW5zRXNjO1xyXG4gICAgbm9kZS5wcm9wZXJ0eSA9IHRoaXMucGFyc2VJZGVudCh0cnVlKTtcclxuICAgIGlmIChub2RlLnByb3BlcnR5Lm5hbWUgIT09IFwidGFyZ2V0XCIpXHJcbiAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUucHJvcGVydHkuc3RhcnQsIFwiVGhlIG9ubHkgdmFsaWQgbWV0YSBwcm9wZXJ0eSBmb3IgbmV3IGlzICduZXcudGFyZ2V0J1wiKTsgfVxyXG4gICAgaWYgKGNvbnRhaW5zRXNjKVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIiduZXcudGFyZ2V0JyBtdXN0IG5vdCBjb250YWluIGVzY2FwZWQgY2hhcmFjdGVyc1wiKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFsbG93TmV3RG90VGFyZ2V0KVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIiduZXcudGFyZ2V0JyBjYW4gb25seSBiZSB1c2VkIGluIGZ1bmN0aW9ucyBhbmQgY2xhc3Mgc3RhdGljIGJsb2NrXCIpOyB9XHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiTWV0YVByb3BlcnR5XCIpXHJcbiAgfVxyXG4gIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcclxuICBub2RlLmNhbGxlZSA9IHRoaXMucGFyc2VTdWJzY3JpcHRzKHRoaXMucGFyc2VFeHByQXRvbShudWxsLCBmYWxzZSwgdHJ1ZSksIHN0YXJ0UG9zLCBzdGFydExvYywgdHJ1ZSwgZmFsc2UpO1xyXG4gIGlmICh0aGlzLmVhdCh0eXBlcyQxLnBhcmVuTCkpIHsgbm9kZS5hcmd1bWVudHMgPSB0aGlzLnBhcnNlRXhwckxpc3QodHlwZXMkMS5wYXJlblIsIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4LCBmYWxzZSk7IH1cclxuICBlbHNlIHsgbm9kZS5hcmd1bWVudHMgPSBlbXB0eTsgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJOZXdFeHByZXNzaW9uXCIpXHJcbn07XHJcblxyXG4vLyBQYXJzZSB0ZW1wbGF0ZSBleHByZXNzaW9uLlxyXG5cclxucHAkNS5wYXJzZVRlbXBsYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHJlZikge1xyXG4gIHZhciBpc1RhZ2dlZCA9IHJlZi5pc1RhZ2dlZDtcclxuXHJcbiAgdmFyIGVsZW0gPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuaW52YWxpZFRlbXBsYXRlKSB7XHJcbiAgICBpZiAoIWlzVGFnZ2VkKSB7XHJcbiAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LCBcIkJhZCBlc2NhcGUgc2VxdWVuY2UgaW4gdW50YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFwiKTtcclxuICAgIH1cclxuICAgIGVsZW0udmFsdWUgPSB7XHJcbiAgICAgIHJhdzogdGhpcy52YWx1ZSxcclxuICAgICAgY29va2VkOiBudWxsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtLnZhbHVlID0ge1xyXG4gICAgICByYXc6IHRoaXMuaW5wdXQuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpLnJlcGxhY2UoL1xcclxcbj8vZywgXCJcXG5cIiksXHJcbiAgICAgIGNvb2tlZDogdGhpcy52YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgZWxlbS50YWlsID0gdGhpcy50eXBlID09PSB0eXBlcyQxLmJhY2tRdW90ZTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKGVsZW0sIFwiVGVtcGxhdGVFbGVtZW50XCIpXHJcbn07XHJcblxyXG5wcCQ1LnBhcnNlVGVtcGxhdGUgPSBmdW5jdGlvbihyZWYpIHtcclxuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XHJcbiAgdmFyIGlzVGFnZ2VkID0gcmVmLmlzVGFnZ2VkOyBpZiAoIGlzVGFnZ2VkID09PSB2b2lkIDAgKSBpc1RhZ2dlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgbm9kZS5leHByZXNzaW9ucyA9IFtdO1xyXG4gIHZhciBjdXJFbHQgPSB0aGlzLnBhcnNlVGVtcGxhdGVFbGVtZW50KHtpc1RhZ2dlZDogaXNUYWdnZWR9KTtcclxuICBub2RlLnF1YXNpcyA9IFtjdXJFbHRdO1xyXG4gIHdoaWxlICghY3VyRWx0LnRhaWwpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZW9mKSB7IHRoaXMucmFpc2UodGhpcy5wb3MsIFwiVW50ZXJtaW5hdGVkIHRlbXBsYXRlIGxpdGVyYWxcIik7IH1cclxuICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuZG9sbGFyQnJhY2VMKTtcclxuICAgIG5vZGUuZXhwcmVzc2lvbnMucHVzaCh0aGlzLnBhcnNlRXhwcmVzc2lvbigpKTtcclxuICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuYnJhY2VSKTtcclxuICAgIG5vZGUucXVhc2lzLnB1c2goY3VyRWx0ID0gdGhpcy5wYXJzZVRlbXBsYXRlRWxlbWVudCh7aXNUYWdnZWQ6IGlzVGFnZ2VkfSkpO1xyXG4gIH1cclxuICB0aGlzLm5leHQoKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiVGVtcGxhdGVMaXRlcmFsXCIpXHJcbn07XHJcblxyXG5wcCQ1LmlzQXN5bmNQcm9wID0gZnVuY3Rpb24ocHJvcCkge1xyXG4gIHJldHVybiAhcHJvcC5jb21wdXRlZCAmJiBwcm9wLmtleS50eXBlID09PSBcIklkZW50aWZpZXJcIiAmJiBwcm9wLmtleS5uYW1lID09PSBcImFzeW5jXCIgJiZcclxuICAgICh0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEubnVtIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdHJpbmcgfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLmJyYWNrZXRMIHx8IHRoaXMudHlwZS5rZXl3b3JkIHx8ICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RhcikpICYmXHJcbiAgICAhbGluZUJyZWFrLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsIHRoaXMuc3RhcnQpKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgYW4gb2JqZWN0IGxpdGVyYWwgb3IgYmluZGluZyBwYXR0ZXJuLlxyXG5cclxucHAkNS5wYXJzZU9iaiA9IGZ1bmN0aW9uKGlzUGF0dGVybiwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xyXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKSwgZmlyc3QgPSB0cnVlLCBwcm9wSGFzaCA9IHt9O1xyXG4gIG5vZGUucHJvcGVydGllcyA9IFtdO1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHdoaWxlICghdGhpcy5lYXQodHlwZXMkMS5icmFjZVIpKSB7XHJcbiAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuY29tbWEpO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDUgJiYgdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEodHlwZXMkMS5icmFjZVIpKSB7IGJyZWFrIH1cclxuICAgIH0gZWxzZSB7IGZpcnN0ID0gZmFsc2U7IH1cclxuXHJcbiAgICB2YXIgcHJvcCA9IHRoaXMucGFyc2VQcm9wZXJ0eShpc1BhdHRlcm4sIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xyXG4gICAgaWYgKCFpc1BhdHRlcm4pIHsgdGhpcy5jaGVja1Byb3BDbGFzaChwcm9wLCBwcm9wSGFzaCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7IH1cclxuICAgIG5vZGUucHJvcGVydGllcy5wdXNoKHByb3ApO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIGlzUGF0dGVybiA/IFwiT2JqZWN0UGF0dGVyblwiIDogXCJPYmplY3RFeHByZXNzaW9uXCIpXHJcbn07XHJcblxyXG5wcCQ1LnBhcnNlUHJvcGVydHkgPSBmdW5jdGlvbihpc1BhdHRlcm4sIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICB2YXIgcHJvcCA9IHRoaXMuc3RhcnROb2RlKCksIGlzR2VuZXJhdG9yLCBpc0FzeW5jLCBzdGFydFBvcywgc3RhcnRMb2M7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHRoaXMuZWF0KHR5cGVzJDEuZWxsaXBzaXMpKSB7XHJcbiAgICBpZiAoaXNQYXR0ZXJuKSB7XHJcbiAgICAgIHByb3AuYXJndW1lbnQgPSB0aGlzLnBhcnNlSWRlbnQoZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmNvbW1hKSB7XHJcbiAgICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIFwiQ29tbWEgaXMgbm90IHBlcm1pdHRlZCBhZnRlciB0aGUgcmVzdCBlbGVtZW50XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUocHJvcCwgXCJSZXN0RWxlbWVudFwiKVxyXG4gICAgfVxyXG4gICAgLy8gUGFyc2UgYXJndW1lbnQuXHJcbiAgICBwcm9wLmFyZ3VtZW50ID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcclxuICAgIC8vIFRvIGRpc2FsbG93IHRyYWlsaW5nIGNvbW1hIHZpYSBgdGhpcy50b0Fzc2lnbmFibGUoKWAuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmNvbW1hICYmIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMgJiYgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hIDwgMCkge1xyXG4gICAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPSB0aGlzLnN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLy8gRmluaXNoXHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKHByb3AsIFwiU3ByZWFkRWxlbWVudFwiKVxyXG4gIH1cclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHtcclxuICAgIHByb3AubWV0aG9kID0gZmFsc2U7XHJcbiAgICBwcm9wLnNob3J0aGFuZCA9IGZhbHNlO1xyXG4gICAgaWYgKGlzUGF0dGVybiB8fCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XHJcbiAgICAgIHN0YXJ0UG9zID0gdGhpcy5zdGFydDtcclxuICAgICAgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1BhdHRlcm4pXHJcbiAgICAgIHsgaXNHZW5lcmF0b3IgPSB0aGlzLmVhdCh0eXBlcyQxLnN0YXIpOyB9XHJcbiAgfVxyXG4gIHZhciBjb250YWluc0VzYyA9IHRoaXMuY29udGFpbnNFc2M7XHJcbiAgdGhpcy5wYXJzZVByb3BlcnR5TmFtZShwcm9wKTtcclxuICBpZiAoIWlzUGF0dGVybiAmJiAhY29udGFpbnNFc2MgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDggJiYgIWlzR2VuZXJhdG9yICYmIHRoaXMuaXNBc3luY1Byb3AocHJvcCkpIHtcclxuICAgIGlzQXN5bmMgPSB0cnVlO1xyXG4gICAgaXNHZW5lcmF0b3IgPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSAmJiB0aGlzLmVhdCh0eXBlcyQxLnN0YXIpO1xyXG4gICAgdGhpcy5wYXJzZVByb3BlcnR5TmFtZShwcm9wKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaXNBc3luYyA9IGZhbHNlO1xyXG4gIH1cclxuICB0aGlzLnBhcnNlUHJvcGVydHlWYWx1ZShwcm9wLCBpc1BhdHRlcm4sIGlzR2VuZXJhdG9yLCBpc0FzeW5jLCBzdGFydFBvcywgc3RhcnRMb2MsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIGNvbnRhaW5zRXNjKTtcclxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKHByb3AsIFwiUHJvcGVydHlcIilcclxufTtcclxuXHJcbnBwJDUucGFyc2VHZXR0ZXJTZXR0ZXIgPSBmdW5jdGlvbihwcm9wKSB7XHJcbiAgcHJvcC5raW5kID0gcHJvcC5rZXkubmFtZTtcclxuICB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKHByb3ApO1xyXG4gIHByb3AudmFsdWUgPSB0aGlzLnBhcnNlTWV0aG9kKGZhbHNlKTtcclxuICB2YXIgcGFyYW1Db3VudCA9IHByb3Aua2luZCA9PT0gXCJnZXRcIiA/IDAgOiAxO1xyXG4gIGlmIChwcm9wLnZhbHVlLnBhcmFtcy5sZW5ndGggIT09IHBhcmFtQ291bnQpIHtcclxuICAgIHZhciBzdGFydCA9IHByb3AudmFsdWUuc3RhcnQ7XHJcbiAgICBpZiAocHJvcC5raW5kID09PSBcImdldFwiKVxyXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShzdGFydCwgXCJnZXR0ZXIgc2hvdWxkIGhhdmUgbm8gcGFyYW1zXCIpOyB9XHJcbiAgICBlbHNlXHJcbiAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHN0YXJ0LCBcInNldHRlciBzaG91bGQgaGF2ZSBleGFjdGx5IG9uZSBwYXJhbVwiKTsgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocHJvcC5raW5kID09PSBcInNldFwiICYmIHByb3AudmFsdWUucGFyYW1zWzBdLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIilcclxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUocHJvcC52YWx1ZS5wYXJhbXNbMF0uc3RhcnQsIFwiU2V0dGVyIGNhbm5vdCB1c2UgcmVzdCBwYXJhbXNcIik7IH1cclxuICB9XHJcbn07XHJcblxyXG5wcCQ1LnBhcnNlUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHByb3AsIGlzUGF0dGVybiwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIHN0YXJ0UG9zLCBzdGFydExvYywgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgY29udGFpbnNFc2MpIHtcclxuICBpZiAoKGlzR2VuZXJhdG9yIHx8IGlzQXN5bmMpICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb2xvbilcclxuICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuXHJcbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuY29sb24pKSB7XHJcbiAgICBwcm9wLnZhbHVlID0gaXNQYXR0ZXJuID8gdGhpcy5wYXJzZU1heWJlRGVmYXVsdCh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0TG9jKSA6IHRoaXMucGFyc2VNYXliZUFzc2lnbihmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XHJcbiAgICBwcm9wLmtpbmQgPSBcImluaXRcIjtcclxuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wYXJlbkwpIHtcclxuICAgIGlmIChpc1BhdHRlcm4pIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cclxuICAgIHByb3Aua2luZCA9IFwiaW5pdFwiO1xyXG4gICAgcHJvcC5tZXRob2QgPSB0cnVlO1xyXG4gICAgcHJvcC52YWx1ZSA9IHRoaXMucGFyc2VNZXRob2QoaXNHZW5lcmF0b3IsIGlzQXN5bmMpO1xyXG4gIH0gZWxzZSBpZiAoIWlzUGF0dGVybiAmJiAhY29udGFpbnNFc2MgJiZcclxuICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA1ICYmICFwcm9wLmNvbXB1dGVkICYmIHByb3Aua2V5LnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmXHJcbiAgICAgICAgICAgICAocHJvcC5rZXkubmFtZSA9PT0gXCJnZXRcIiB8fCBwcm9wLmtleS5uYW1lID09PSBcInNldFwiKSAmJlxyXG4gICAgICAgICAgICAgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5jb21tYSAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5lcSkpIHtcclxuICAgIGlmIChpc0dlbmVyYXRvciB8fCBpc0FzeW5jKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICB0aGlzLnBhcnNlR2V0dGVyU2V0dGVyKHByb3ApO1xyXG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgIXByb3AuY29tcHV0ZWQgJiYgcHJvcC5rZXkudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIpIHtcclxuICAgIGlmIChpc0dlbmVyYXRvciB8fCBpc0FzeW5jKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XHJcbiAgICB0aGlzLmNoZWNrVW5yZXNlcnZlZChwcm9wLmtleSk7XHJcbiAgICBpZiAocHJvcC5rZXkubmFtZSA9PT0gXCJhd2FpdFwiICYmICF0aGlzLmF3YWl0SWRlbnRQb3MpXHJcbiAgICAgIHsgdGhpcy5hd2FpdElkZW50UG9zID0gc3RhcnRQb3M7IH1cclxuICAgIHByb3Aua2luZCA9IFwiaW5pdFwiO1xyXG4gICAgaWYgKGlzUGF0dGVybikge1xyXG4gICAgICBwcm9wLnZhbHVlID0gdGhpcy5wYXJzZU1heWJlRGVmYXVsdChzdGFydFBvcywgc3RhcnRMb2MsIHRoaXMuY29weU5vZGUocHJvcC5rZXkpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmVxICYmIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcclxuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuc2hvcnRoYW5kQXNzaWduIDwgMClcclxuICAgICAgICB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuc2hvcnRoYW5kQXNzaWduID0gdGhpcy5zdGFydDsgfVxyXG4gICAgICBwcm9wLnZhbHVlID0gdGhpcy5wYXJzZU1heWJlRGVmYXVsdChzdGFydFBvcywgc3RhcnRMb2MsIHRoaXMuY29weU5vZGUocHJvcC5rZXkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3AudmFsdWUgPSB0aGlzLmNvcHlOb2RlKHByb3Aua2V5KTtcclxuICAgIH1cclxuICAgIHByb3Auc2hvcnRoYW5kID0gdHJ1ZTtcclxuICB9IGVsc2UgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG59O1xyXG5cclxucHAkNS5wYXJzZVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uKHByb3ApIHtcclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHtcclxuICAgIGlmICh0aGlzLmVhdCh0eXBlcyQxLmJyYWNrZXRMKSkge1xyXG4gICAgICBwcm9wLmNvbXB1dGVkID0gdHJ1ZTtcclxuICAgICAgcHJvcC5rZXkgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcclxuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFja2V0Uik7XHJcbiAgICAgIHJldHVybiBwcm9wLmtleVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcC5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcHJvcC5rZXkgPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEubnVtIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdHJpbmcgPyB0aGlzLnBhcnNlRXhwckF0b20oKSA6IHRoaXMucGFyc2VJZGVudCh0aGlzLm9wdGlvbnMuYWxsb3dSZXNlcnZlZCAhPT0gXCJuZXZlclwiKVxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBlbXB0eSBmdW5jdGlvbiBub2RlLlxyXG5cclxucHAkNS5pbml0RnVuY3Rpb24gPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgbm9kZS5pZCA9IG51bGw7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KSB7IG5vZGUuZ2VuZXJhdG9yID0gbm9kZS5leHByZXNzaW9uID0gZmFsc2U7IH1cclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDgpIHsgbm9kZS5hc3luYyA9IGZhbHNlOyB9XHJcbn07XHJcblxyXG4vLyBQYXJzZSBvYmplY3Qgb3IgY2xhc3MgbWV0aG9kLlxyXG5cclxucHAkNS5wYXJzZU1ldGhvZCA9IGZ1bmN0aW9uKGlzR2VuZXJhdG9yLCBpc0FzeW5jLCBhbGxvd0RpcmVjdFN1cGVyKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpLCBvbGRZaWVsZFBvcyA9IHRoaXMueWllbGRQb3MsIG9sZEF3YWl0UG9zID0gdGhpcy5hd2FpdFBvcywgb2xkQXdhaXRJZGVudFBvcyA9IHRoaXMuYXdhaXRJZGVudFBvcztcclxuXHJcbiAgdGhpcy5pbml0RnVuY3Rpb24obm9kZSk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KVxyXG4gICAgeyBub2RlLmdlbmVyYXRvciA9IGlzR2VuZXJhdG9yOyB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4KVxyXG4gICAgeyBub2RlLmFzeW5jID0gISFpc0FzeW5jOyB9XHJcblxyXG4gIHRoaXMueWllbGRQb3MgPSAwO1xyXG4gIHRoaXMuYXdhaXRQb3MgPSAwO1xyXG4gIHRoaXMuYXdhaXRJZGVudFBvcyA9IDA7XHJcbiAgdGhpcy5lbnRlclNjb3BlKGZ1bmN0aW9uRmxhZ3MoaXNBc3luYywgbm9kZS5nZW5lcmF0b3IpIHwgU0NPUEVfU1VQRVIgfCAoYWxsb3dEaXJlY3RTdXBlciA/IFNDT1BFX0RJUkVDVF9TVVBFUiA6IDApKTtcclxuXHJcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlbkwpO1xyXG4gIG5vZGUucGFyYW1zID0gdGhpcy5wYXJzZUJpbmRpbmdMaXN0KHR5cGVzJDEucGFyZW5SLCBmYWxzZSwgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDgpO1xyXG4gIHRoaXMuY2hlY2tZaWVsZEF3YWl0SW5EZWZhdWx0UGFyYW1zKCk7XHJcbiAgdGhpcy5wYXJzZUZ1bmN0aW9uQm9keShub2RlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICB0aGlzLnlpZWxkUG9zID0gb2xkWWllbGRQb3M7XHJcbiAgdGhpcy5hd2FpdFBvcyA9IG9sZEF3YWl0UG9zO1xyXG4gIHRoaXMuYXdhaXRJZGVudFBvcyA9IG9sZEF3YWl0SWRlbnRQb3M7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgYXJyb3cgZnVuY3Rpb24gZXhwcmVzc2lvbiB3aXRoIGdpdmVuIHBhcmFtZXRlcnMuXHJcblxyXG5wcCQ1LnBhcnNlQXJyb3dFeHByZXNzaW9uID0gZnVuY3Rpb24obm9kZSwgcGFyYW1zLCBpc0FzeW5jLCBmb3JJbml0KSB7XHJcbiAgdmFyIG9sZFlpZWxkUG9zID0gdGhpcy55aWVsZFBvcywgb2xkQXdhaXRQb3MgPSB0aGlzLmF3YWl0UG9zLCBvbGRBd2FpdElkZW50UG9zID0gdGhpcy5hd2FpdElkZW50UG9zO1xyXG5cclxuICB0aGlzLmVudGVyU2NvcGUoZnVuY3Rpb25GbGFncyhpc0FzeW5jLCBmYWxzZSkgfCBTQ09QRV9BUlJPVyk7XHJcbiAgdGhpcy5pbml0RnVuY3Rpb24obm9kZSk7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4KSB7IG5vZGUuYXN5bmMgPSAhIWlzQXN5bmM7IH1cclxuXHJcbiAgdGhpcy55aWVsZFBvcyA9IDA7XHJcbiAgdGhpcy5hd2FpdFBvcyA9IDA7XHJcbiAgdGhpcy5hd2FpdElkZW50UG9zID0gMDtcclxuXHJcbiAgbm9kZS5wYXJhbXMgPSB0aGlzLnRvQXNzaWduYWJsZUxpc3QocGFyYW1zLCB0cnVlKTtcclxuICB0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KG5vZGUsIHRydWUsIGZhbHNlLCBmb3JJbml0KTtcclxuXHJcbiAgdGhpcy55aWVsZFBvcyA9IG9sZFlpZWxkUG9zO1xyXG4gIHRoaXMuYXdhaXRQb3MgPSBvbGRBd2FpdFBvcztcclxuICB0aGlzLmF3YWl0SWRlbnRQb3MgPSBvbGRBd2FpdElkZW50UG9zO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiKVxyXG59O1xyXG5cclxuLy8gUGFyc2UgZnVuY3Rpb24gYm9keSBhbmQgY2hlY2sgcGFyYW1ldGVycy5cclxuXHJcbnBwJDUucGFyc2VGdW5jdGlvbkJvZHkgPSBmdW5jdGlvbihub2RlLCBpc0Fycm93RnVuY3Rpb24sIGlzTWV0aG9kLCBmb3JJbml0KSB7XHJcbiAgdmFyIGlzRXhwcmVzc2lvbiA9IGlzQXJyb3dGdW5jdGlvbiAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VMO1xyXG4gIHZhciBvbGRTdHJpY3QgPSB0aGlzLnN0cmljdCwgdXNlU3RyaWN0ID0gZmFsc2U7XHJcblxyXG4gIGlmIChpc0V4cHJlc3Npb24pIHtcclxuICAgIG5vZGUuYm9keSA9IHRoaXMucGFyc2VNYXliZUFzc2lnbihmb3JJbml0KTtcclxuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRydWU7XHJcbiAgICB0aGlzLmNoZWNrUGFyYW1zKG5vZGUsIGZhbHNlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIG5vblNpbXBsZSA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA3ICYmICF0aGlzLmlzU2ltcGxlUGFyYW1MaXN0KG5vZGUucGFyYW1zKTtcclxuICAgIGlmICghb2xkU3RyaWN0IHx8IG5vblNpbXBsZSkge1xyXG4gICAgICB1c2VTdHJpY3QgPSB0aGlzLnN0cmljdERpcmVjdGl2ZSh0aGlzLmVuZCk7XHJcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpY3QgbW9kZSBmdW5jdGlvbiwgdmVyaWZ5IHRoYXQgYXJndW1lbnQgbmFtZXNcclxuICAgICAgLy8gYXJlIG5vdCByZXBlYXRlZCwgYW5kIGl0IGRvZXMgbm90IHRyeSB0byBiaW5kIHRoZSB3b3JkcyBgZXZhbGBcclxuICAgICAgLy8gb3IgYGFyZ3VtZW50c2AuXHJcbiAgICAgIGlmICh1c2VTdHJpY3QgJiYgbm9uU2ltcGxlKVxyXG4gICAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiSWxsZWdhbCAndXNlIHN0cmljdCcgZGlyZWN0aXZlIGluIGZ1bmN0aW9uIHdpdGggbm9uLXNpbXBsZSBwYXJhbWV0ZXIgbGlzdFwiKTsgfVxyXG4gICAgfVxyXG4gICAgLy8gU3RhcnQgYSBuZXcgc2NvcGUgd2l0aCByZWdhcmQgdG8gbGFiZWxzIGFuZCB0aGUgYGluRnVuY3Rpb25gXHJcbiAgICAvLyBmbGFnIChyZXN0b3JlIHRoZW0gdG8gdGhlaXIgb2xkIHZhbHVlIGFmdGVyd2FyZHMpLlxyXG4gICAgdmFyIG9sZExhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gICAgdGhpcy5sYWJlbHMgPSBbXTtcclxuICAgIGlmICh1c2VTdHJpY3QpIHsgdGhpcy5zdHJpY3QgPSB0cnVlOyB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBwYXJhbXMgdG8gdmFyRGVjbGFyZWROYW1lcyB0byBlbnN1cmUgdGhhdCBhbiBlcnJvciBpcyB0aHJvd25cclxuICAgIC8vIGlmIGEgbGV0L2NvbnN0IGRlY2xhcmF0aW9uIGluIHRoZSBmdW5jdGlvbiBjbGFzaGVzIHdpdGggb25lIG9mIHRoZSBwYXJhbXMuXHJcbiAgICB0aGlzLmNoZWNrUGFyYW1zKG5vZGUsICFvbGRTdHJpY3QgJiYgIXVzZVN0cmljdCAmJiAhaXNBcnJvd0Z1bmN0aW9uICYmICFpc01ldGhvZCAmJiB0aGlzLmlzU2ltcGxlUGFyYW1MaXN0KG5vZGUucGFyYW1zKSk7XHJcbiAgICAvLyBFbnN1cmUgdGhlIGZ1bmN0aW9uIG5hbWUgaXNuJ3QgYSBmb3JiaWRkZW4gaWRlbnRpZmllciBpbiBzdHJpY3QgbW9kZSwgZS5nLiAnZXZhbCdcclxuICAgIGlmICh0aGlzLnN0cmljdCAmJiBub2RlLmlkKSB7IHRoaXMuY2hlY2tMVmFsU2ltcGxlKG5vZGUuaWQsIEJJTkRfT1VUU0lERSk7IH1cclxuICAgIG5vZGUuYm9keSA9IHRoaXMucGFyc2VCbG9jayhmYWxzZSwgdW5kZWZpbmVkLCB1c2VTdHJpY3QgJiYgIW9sZFN0cmljdCk7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSBmYWxzZTtcclxuICAgIHRoaXMuYWRhcHREaXJlY3RpdmVQcm9sb2d1ZShub2RlLmJvZHkuYm9keSk7XHJcbiAgICB0aGlzLmxhYmVscyA9IG9sZExhYmVscztcclxuICB9XHJcbiAgdGhpcy5leGl0U2NvcGUoKTtcclxufTtcclxuXHJcbnBwJDUuaXNTaW1wbGVQYXJhbUxpc3QgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IHBhcmFtczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXHJcbiAgICB7XHJcbiAgICB2YXIgcGFyYW0gPSBsaXN0W2ldO1xyXG5cclxuICAgIGlmIChwYXJhbS50eXBlICE9PSBcIklkZW50aWZpZXJcIikgeyByZXR1cm4gZmFsc2VcclxuICB9IH1cclxuICByZXR1cm4gdHJ1ZVxyXG59O1xyXG5cclxuLy8gQ2hlY2tzIGZ1bmN0aW9uIHBhcmFtcyBmb3IgdmFyaW91cyBkaXNhbGxvd2VkIHBhdHRlcm5zIHN1Y2ggYXMgdXNpbmcgXCJldmFsXCJcclxuLy8gb3IgXCJhcmd1bWVudHNcIiBhbmQgZHVwbGljYXRlIHBhcmFtZXRlcnMuXHJcblxyXG5wcCQ1LmNoZWNrUGFyYW1zID0gZnVuY3Rpb24obm9kZSwgYWxsb3dEdXBsaWNhdGVzKSB7XHJcbiAgdmFyIG5hbWVIYXNoID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUucGFyYW1zOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcclxuICAgIHtcclxuICAgIHZhciBwYXJhbSA9IGxpc3RbaV07XHJcblxyXG4gICAgdGhpcy5jaGVja0xWYWxJbm5lclBhdHRlcm4ocGFyYW0sIEJJTkRfVkFSLCBhbGxvd0R1cGxpY2F0ZXMgPyBudWxsIDogbmFtZUhhc2gpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFBhcnNlcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGV4cHJlc3Npb25zLCBhbmQgcmV0dXJucyB0aGVtIGFzXHJcbi8vIGFuIGFycmF5LiBgY2xvc2VgIGlzIHRoZSB0b2tlbiB0eXBlIHRoYXQgZW5kcyB0aGUgbGlzdCwgYW5kXHJcbi8vIGBhbGxvd0VtcHR5YCBjYW4gYmUgdHVybmVkIG9uIHRvIGFsbG93IHN1YnNlcXVlbnQgY29tbWFzIHdpdGhcclxuLy8gbm90aGluZyBpbiBiZXR3ZWVuIHRoZW0gdG8gYmUgcGFyc2VkIGFzIGBudWxsYCAod2hpY2ggaXMgbmVlZGVkXHJcbi8vIGZvciBhcnJheSBsaXRlcmFscykuXHJcblxyXG5wcCQ1LnBhcnNlRXhwckxpc3QgPSBmdW5jdGlvbihjbG9zZSwgYWxsb3dUcmFpbGluZ0NvbW1hLCBhbGxvd0VtcHR5LCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XHJcbiAgdmFyIGVsdHMgPSBbXSwgZmlyc3QgPSB0cnVlO1xyXG4gIHdoaWxlICghdGhpcy5lYXQoY2xvc2UpKSB7XHJcbiAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuY29tbWEpO1xyXG4gICAgICBpZiAoYWxsb3dUcmFpbGluZ0NvbW1hICYmIHRoaXMuYWZ0ZXJUcmFpbGluZ0NvbW1hKGNsb3NlKSkgeyBicmVhayB9XHJcbiAgICB9IGVsc2UgeyBmaXJzdCA9IGZhbHNlOyB9XHJcblxyXG4gICAgdmFyIGVsdCA9ICh2b2lkIDApO1xyXG4gICAgaWYgKGFsbG93RW1wdHkgJiYgdGhpcy50eXBlID09PSB0eXBlcyQxLmNvbW1hKVxyXG4gICAgICB7IGVsdCA9IG51bGw7IH1cclxuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lbGxpcHNpcykge1xyXG4gICAgICBlbHQgPSB0aGlzLnBhcnNlU3ByZWFkKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xyXG4gICAgICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEgJiYgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hIDwgMClcclxuICAgICAgICB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSA9IHRoaXMuc3RhcnQ7IH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsdCA9IHRoaXMucGFyc2VNYXliZUFzc2lnbihmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XHJcbiAgICB9XHJcbiAgICBlbHRzLnB1c2goZWx0KTtcclxuICB9XHJcbiAgcmV0dXJuIGVsdHNcclxufTtcclxuXHJcbnBwJDUuY2hlY2tVbnJlc2VydmVkID0gZnVuY3Rpb24ocmVmKSB7XHJcbiAgdmFyIHN0YXJ0ID0gcmVmLnN0YXJ0O1xyXG4gIHZhciBlbmQgPSByZWYuZW5kO1xyXG4gIHZhciBuYW1lID0gcmVmLm5hbWU7XHJcblxyXG4gIGlmICh0aGlzLmluR2VuZXJhdG9yICYmIG5hbWUgPT09IFwieWllbGRcIilcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHN0YXJ0LCBcIkNhbm5vdCB1c2UgJ3lpZWxkJyBhcyBpZGVudGlmaWVyIGluc2lkZSBhIGdlbmVyYXRvclwiKTsgfVxyXG4gIGlmICh0aGlzLmluQXN5bmMgJiYgbmFtZSA9PT0gXCJhd2FpdFwiKVxyXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwiQ2Fubm90IHVzZSAnYXdhaXQnIGFzIGlkZW50aWZpZXIgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uXCIpOyB9XHJcbiAgaWYgKHRoaXMuY3VycmVudFRoaXNTY29wZSgpLmluQ2xhc3NGaWVsZEluaXQgJiYgbmFtZSA9PT0gXCJhcmd1bWVudHNcIilcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHN0YXJ0LCBcIkNhbm5vdCB1c2UgJ2FyZ3VtZW50cycgaW4gY2xhc3MgZmllbGQgaW5pdGlhbGl6ZXJcIik7IH1cclxuICBpZiAodGhpcy5pbkNsYXNzU3RhdGljQmxvY2sgJiYgKG5hbWUgPT09IFwiYXJndW1lbnRzXCIgfHwgbmFtZSA9PT0gXCJhd2FpdFwiKSlcclxuICAgIHsgdGhpcy5yYWlzZShzdGFydCwgKFwiQ2Fubm90IHVzZSBcIiArIG5hbWUgKyBcIiBpbiBjbGFzcyBzdGF0aWMgaW5pdGlhbGl6YXRpb24gYmxvY2tcIikpOyB9XHJcbiAgaWYgKHRoaXMua2V5d29yZHMudGVzdChuYW1lKSlcclxuICAgIHsgdGhpcy5yYWlzZShzdGFydCwgKFwiVW5leHBlY3RlZCBrZXl3b3JkICdcIiArIG5hbWUgKyBcIidcIikpOyB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDYgJiZcclxuICAgIHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIGVuZCkuaW5kZXhPZihcIlxcXFxcIikgIT09IC0xKSB7IHJldHVybiB9XHJcbiAgdmFyIHJlID0gdGhpcy5zdHJpY3QgPyB0aGlzLnJlc2VydmVkV29yZHNTdHJpY3QgOiB0aGlzLnJlc2VydmVkV29yZHM7XHJcbiAgaWYgKHJlLnRlc3QobmFtZSkpIHtcclxuICAgIGlmICghdGhpcy5pbkFzeW5jICYmIG5hbWUgPT09IFwiYXdhaXRcIilcclxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwiQ2Fubm90IHVzZSBrZXl3b3JkICdhd2FpdCcgb3V0c2lkZSBhbiBhc3luYyBmdW5jdGlvblwiKTsgfVxyXG4gICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHN0YXJ0LCAoXCJUaGUga2V5d29yZCAnXCIgKyBuYW1lICsgXCInIGlzIHJlc2VydmVkXCIpKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBQYXJzZSB0aGUgbmV4dCB0b2tlbiBhcyBhbiBpZGVudGlmaWVyLiBJZiBgbGliZXJhbGAgaXMgdHJ1ZSAodXNlZFxyXG4vLyB3aGVuIHBhcnNpbmcgcHJvcGVydGllcyksIGl0IHdpbGwgYWxzbyBjb252ZXJ0IGtleXdvcmRzIGludG9cclxuLy8gaWRlbnRpZmllcnMuXHJcblxyXG5wcCQ1LnBhcnNlSWRlbnQgPSBmdW5jdGlvbihsaWJlcmFsKSB7XHJcbiAgdmFyIG5vZGUgPSB0aGlzLnBhcnNlSWRlbnROb2RlKCk7XHJcbiAgdGhpcy5uZXh0KCEhbGliZXJhbCk7XHJcbiAgdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSWRlbnRpZmllclwiKTtcclxuICBpZiAoIWxpYmVyYWwpIHtcclxuICAgIHRoaXMuY2hlY2tVbnJlc2VydmVkKG5vZGUpO1xyXG4gICAgaWYgKG5vZGUubmFtZSA9PT0gXCJhd2FpdFwiICYmICF0aGlzLmF3YWl0SWRlbnRQb3MpXHJcbiAgICAgIHsgdGhpcy5hd2FpdElkZW50UG9zID0gbm9kZS5zdGFydDsgfVxyXG4gIH1cclxuICByZXR1cm4gbm9kZVxyXG59O1xyXG5cclxucHAkNS5wYXJzZUlkZW50Tm9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLm5hbWUpIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmFsdWU7XHJcbiAgfSBlbHNlIGlmICh0aGlzLnR5cGUua2V5d29yZCkge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy50eXBlLmtleXdvcmQ7XHJcblxyXG4gICAgLy8gVG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hY29ybmpzL2Fjb3JuL2lzc3Vlcy81NzVcclxuICAgIC8vIGBjbGFzc2AgYW5kIGBmdW5jdGlvbmAga2V5d29yZHMgcHVzaCBuZXcgY29udGV4dCBpbnRvIHRoaXMuY29udGV4dC5cclxuICAgIC8vIEJ1dCB0aGVyZSBpcyBubyBjaGFuY2UgdG8gcG9wIHRoZSBjb250ZXh0IGlmIHRoZSBrZXl3b3JkIGlzIGNvbnN1bWVkIGFzIGFuIGlkZW50aWZpZXIgc3VjaCBhcyBhIHByb3BlcnR5IG5hbWUuXHJcbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgdG9rZW4gaXMgYSBkb3QsIHRoaXMgZG9lcyBub3QgYXBwbHkgYmVjYXVzZSB0aGUgY29udGV4dC1tYW5hZ2luZyBjb2RlIGFscmVhZHkgaWdub3JlZCB0aGUga2V5d29yZFxyXG4gICAgaWYgKChub2RlLm5hbWUgPT09IFwiY2xhc3NcIiB8fCBub2RlLm5hbWUgPT09IFwiZnVuY3Rpb25cIikgJiZcclxuICAgICAgKHRoaXMubGFzdFRva0VuZCAhPT0gdGhpcy5sYXN0VG9rU3RhcnQgKyAxIHx8IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmxhc3RUb2tTdGFydCkgIT09IDQ2KSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQucG9wKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlcyQxLm5hbWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMudW5leHBlY3RlZCgpO1xyXG4gIH1cclxuICByZXR1cm4gbm9kZVxyXG59O1xyXG5cclxucHAkNS5wYXJzZVByaXZhdGVJZGVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcclxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnByaXZhdGVJZCkge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52YWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy51bmV4cGVjdGVkKCk7XHJcbiAgfVxyXG4gIHRoaXMubmV4dCgpO1xyXG4gIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlByaXZhdGVJZGVudGlmaWVyXCIpO1xyXG5cclxuICAvLyBGb3IgdmFsaWRhdGluZyBleGlzdGVuY2VcclxuICBpZiAodGhpcy5vcHRpb25zLmNoZWNrUHJpdmF0ZUZpZWxkcykge1xyXG4gICAgaWYgKHRoaXMucHJpdmF0ZU5hbWVTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5yYWlzZShub2RlLnN0YXJ0LCAoXCJQcml2YXRlIGZpZWxkICcjXCIgKyAobm9kZS5uYW1lKSArIFwiJyBtdXN0IGJlIGRlY2xhcmVkIGluIGFuIGVuY2xvc2luZyBjbGFzc1wiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByaXZhdGVOYW1lU3RhY2tbdGhpcy5wcml2YXRlTmFtZVN0YWNrLmxlbmd0aCAtIDFdLnVzZWQucHVzaChub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBub2RlXHJcbn07XHJcblxyXG4vLyBQYXJzZXMgeWllbGQgZXhwcmVzc2lvbiBpbnNpZGUgZ2VuZXJhdG9yLlxyXG5cclxucHAkNS5wYXJzZVlpZWxkID0gZnVuY3Rpb24oZm9ySW5pdCkge1xyXG4gIGlmICghdGhpcy55aWVsZFBvcykgeyB0aGlzLnlpZWxkUG9zID0gdGhpcy5zdGFydDsgfVxyXG5cclxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XHJcbiAgdGhpcy5uZXh0KCk7XHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zZW1pIHx8IHRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkgfHwgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5zdGFyICYmICF0aGlzLnR5cGUuc3RhcnRzRXhwcikpIHtcclxuICAgIG5vZGUuZGVsZWdhdGUgPSBmYWxzZTtcclxuICAgIG5vZGUuYXJndW1lbnQgPSBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBub2RlLmRlbGVnYXRlID0gdGhpcy5lYXQodHlwZXMkMS5zdGFyKTtcclxuICAgIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJZaWVsZEV4cHJlc3Npb25cIilcclxufTtcclxuXHJcbnBwJDUucGFyc2VBd2FpdCA9IGZ1bmN0aW9uKGZvckluaXQpIHtcclxuICBpZiAoIXRoaXMuYXdhaXRQb3MpIHsgdGhpcy5hd2FpdFBvcyA9IHRoaXMuc3RhcnQ7IH1cclxuXHJcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xyXG4gIHRoaXMubmV4dCgpO1xyXG4gIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCB0cnVlLCBmYWxzZSwgZm9ySW5pdCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkF3YWl0RXhwcmVzc2lvblwiKVxyXG59O1xyXG5cclxudmFyIHBwJDQgPSBQYXJzZXIucHJvdG90eXBlO1xyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJhaXNlIGV4Y2VwdGlvbnMgb24gcGFyc2UgZXJyb3JzLiBJdFxyXG4vLyB0YWtlcyBhbiBvZmZzZXQgaW50ZWdlciAoaW50byB0aGUgY3VycmVudCBgaW5wdXRgKSB0byBpbmRpY2F0ZVxyXG4vLyB0aGUgbG9jYXRpb24gb2YgdGhlIGVycm9yLCBhdHRhY2hlcyB0aGUgcG9zaXRpb24gdG8gdGhlIGVuZFxyXG4vLyBvZiB0aGUgZXJyb3IgbWVzc2FnZSwgYW5kIHRoZW4gcmFpc2VzIGEgYFN5bnRheEVycm9yYCB3aXRoIHRoYXRcclxuLy8gbWVzc2FnZS5cclxuXHJcbnBwJDQucmFpc2UgPSBmdW5jdGlvbihwb3MsIG1lc3NhZ2UpIHtcclxuICB2YXIgbG9jID0gZ2V0TGluZUluZm8odGhpcy5pbnB1dCwgcG9zKTtcclxuICBtZXNzYWdlICs9IFwiIChcIiArIGxvYy5saW5lICsgXCI6XCIgKyBsb2MuY29sdW1uICsgXCIpXCI7XHJcbiAgdmFyIGVyciA9IG5ldyBTeW50YXhFcnJvcihtZXNzYWdlKTtcclxuICBlcnIucG9zID0gcG9zOyBlcnIubG9jID0gbG9jOyBlcnIucmFpc2VkQXQgPSB0aGlzLnBvcztcclxuICB0aHJvdyBlcnJcclxufTtcclxuXHJcbnBwJDQucmFpc2VSZWNvdmVyYWJsZSA9IHBwJDQucmFpc2U7XHJcblxyXG5wcCQ0LmN1clBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5jdXJMaW5lLCB0aGlzLnBvcyAtIHRoaXMubGluZVN0YXJ0KVxyXG4gIH1cclxufTtcclxuXHJcbnZhciBwcCQzID0gUGFyc2VyLnByb3RvdHlwZTtcclxuXHJcbnZhciBTY29wZSA9IGZ1bmN0aW9uIFNjb3BlKGZsYWdzKSB7XHJcbiAgdGhpcy5mbGFncyA9IGZsYWdzO1xyXG4gIC8vIEEgbGlzdCBvZiB2YXItZGVjbGFyZWQgbmFtZXMgaW4gdGhlIGN1cnJlbnQgbGV4aWNhbCBzY29wZVxyXG4gIHRoaXMudmFyID0gW107XHJcbiAgLy8gQSBsaXN0IG9mIGxleGljYWxseS1kZWNsYXJlZCBuYW1lcyBpbiB0aGUgY3VycmVudCBsZXhpY2FsIHNjb3BlXHJcbiAgdGhpcy5sZXhpY2FsID0gW107XHJcbiAgLy8gQSBsaXN0IG9mIGxleGljYWxseS1kZWNsYXJlZCBGdW5jdGlvbkRlY2xhcmF0aW9uIG5hbWVzIGluIHRoZSBjdXJyZW50IGxleGljYWwgc2NvcGVcclxuICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xyXG4gIC8vIEEgc3dpdGNoIHRvIGRpc2FsbG93IHRoZSBpZGVudGlmaWVyIHJlZmVyZW5jZSAnYXJndW1lbnRzJ1xyXG4gIHRoaXMuaW5DbGFzc0ZpZWxkSW5pdCA9IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBrZWVwIHRyYWNrIG9mIGRlY2xhcmVkIHZhcmlhYmxlcyBpbiB0aGUgY3VycmVudCBzY29wZSBpbiBvcmRlciB0byBkZXRlY3QgZHVwbGljYXRlIHZhcmlhYmxlIG5hbWVzLlxyXG5cclxucHAkMy5lbnRlclNjb3BlID0gZnVuY3Rpb24oZmxhZ3MpIHtcclxuICB0aGlzLnNjb3BlU3RhY2sucHVzaChuZXcgU2NvcGUoZmxhZ3MpKTtcclxufTtcclxuXHJcbnBwJDMuZXhpdFNjb3BlID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5zY29wZVN0YWNrLnBvcCgpO1xyXG59O1xyXG5cclxuLy8gVGhlIHNwZWMgc2F5czpcclxuLy8gPiBBdCB0aGUgdG9wIGxldmVsIG9mIGEgZnVuY3Rpb24sIG9yIHNjcmlwdCwgZnVuY3Rpb24gZGVjbGFyYXRpb25zIGFyZVxyXG4vLyA+IHRyZWF0ZWQgbGlrZSB2YXIgZGVjbGFyYXRpb25zIHJhdGhlciB0aGFuIGxpa2UgbGV4aWNhbCBkZWNsYXJhdGlvbnMuXHJcbnBwJDMudHJlYXRGdW5jdGlvbnNBc1ZhckluU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xyXG4gIHJldHVybiAoc2NvcGUuZmxhZ3MgJiBTQ09QRV9GVU5DVElPTikgfHwgIXRoaXMuaW5Nb2R1bGUgJiYgKHNjb3BlLmZsYWdzICYgU0NPUEVfVE9QKVxyXG59O1xyXG5cclxucHAkMy5kZWNsYXJlTmFtZSA9IGZ1bmN0aW9uKG5hbWUsIGJpbmRpbmdUeXBlLCBwb3MpIHtcclxuICB2YXIgcmVkZWNsYXJlZCA9IGZhbHNlO1xyXG4gIGlmIChiaW5kaW5nVHlwZSA9PT0gQklORF9MRVhJQ0FMKSB7XHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzLmN1cnJlbnRTY29wZSgpO1xyXG4gICAgcmVkZWNsYXJlZCA9IHNjb3BlLmxleGljYWwuaW5kZXhPZihuYW1lKSA+IC0xIHx8IHNjb3BlLmZ1bmN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEgfHwgc2NvcGUudmFyLmluZGV4T2YobmFtZSkgPiAtMTtcclxuICAgIHNjb3BlLmxleGljYWwucHVzaChuYW1lKTtcclxuICAgIGlmICh0aGlzLmluTW9kdWxlICYmIChzY29wZS5mbGFncyAmIFNDT1BFX1RPUCkpXHJcbiAgICAgIHsgZGVsZXRlIHRoaXMudW5kZWZpbmVkRXhwb3J0c1tuYW1lXTsgfVxyXG4gIH0gZWxzZSBpZiAoYmluZGluZ1R5cGUgPT09IEJJTkRfU0lNUExFX0NBVENIKSB7XHJcbiAgICB2YXIgc2NvcGUkMSA9IHRoaXMuY3VycmVudFNjb3BlKCk7XHJcbiAgICBzY29wZSQxLmxleGljYWwucHVzaChuYW1lKTtcclxuICB9IGVsc2UgaWYgKGJpbmRpbmdUeXBlID09PSBCSU5EX0ZVTkNUSU9OKSB7XHJcbiAgICB2YXIgc2NvcGUkMiA9IHRoaXMuY3VycmVudFNjb3BlKCk7XHJcbiAgICBpZiAodGhpcy50cmVhdEZ1bmN0aW9uc0FzVmFyKVxyXG4gICAgICB7IHJlZGVjbGFyZWQgPSBzY29wZSQyLmxleGljYWwuaW5kZXhPZihuYW1lKSA+IC0xOyB9XHJcbiAgICBlbHNlXHJcbiAgICAgIHsgcmVkZWNsYXJlZCA9IHNjb3BlJDIubGV4aWNhbC5pbmRleE9mKG5hbWUpID4gLTEgfHwgc2NvcGUkMi52YXIuaW5kZXhPZihuYW1lKSA+IC0xOyB9XHJcbiAgICBzY29wZSQyLmZ1bmN0aW9ucy5wdXNoKG5hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zY29wZVN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgIHZhciBzY29wZSQzID0gdGhpcy5zY29wZVN0YWNrW2ldO1xyXG4gICAgICBpZiAoc2NvcGUkMy5sZXhpY2FsLmluZGV4T2YobmFtZSkgPiAtMSAmJiAhKChzY29wZSQzLmZsYWdzICYgU0NPUEVfU0lNUExFX0NBVENIKSAmJiBzY29wZSQzLmxleGljYWxbMF0gPT09IG5hbWUpIHx8XHJcbiAgICAgICAgICAhdGhpcy50cmVhdEZ1bmN0aW9uc0FzVmFySW5TY29wZShzY29wZSQzKSAmJiBzY29wZSQzLmZ1bmN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEpIHtcclxuICAgICAgICByZWRlY2xhcmVkID0gdHJ1ZTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIHNjb3BlJDMudmFyLnB1c2gobmFtZSk7XHJcbiAgICAgIGlmICh0aGlzLmluTW9kdWxlICYmIChzY29wZSQzLmZsYWdzICYgU0NPUEVfVE9QKSlcclxuICAgICAgICB7IGRlbGV0ZSB0aGlzLnVuZGVmaW5lZEV4cG9ydHNbbmFtZV07IH1cclxuICAgICAgaWYgKHNjb3BlJDMuZmxhZ3MgJiBTQ09QRV9WQVIpIHsgYnJlYWsgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAocmVkZWNsYXJlZCkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUocG9zLCAoXCJJZGVudGlmaWVyICdcIiArIG5hbWUgKyBcIicgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZFwiKSk7IH1cclxufTtcclxuXHJcbnBwJDMuY2hlY2tMb2NhbEV4cG9ydCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgLy8gc2NvcGUuZnVuY3Rpb25zIG11c3QgYmUgZW1wdHkgYXMgTW9kdWxlIGNvZGUgaXMgYWx3YXlzIHN0cmljdC5cclxuICBpZiAodGhpcy5zY29wZVN0YWNrWzBdLmxleGljYWwuaW5kZXhPZihpZC5uYW1lKSA9PT0gLTEgJiZcclxuICAgICAgdGhpcy5zY29wZVN0YWNrWzBdLnZhci5pbmRleE9mKGlkLm5hbWUpID09PSAtMSkge1xyXG4gICAgdGhpcy51bmRlZmluZWRFeHBvcnRzW2lkLm5hbWVdID0gaWQ7XHJcbiAgfVxyXG59O1xyXG5cclxucHAkMy5jdXJyZW50U2NvcGUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5zY29wZVN0YWNrW3RoaXMuc2NvcGVTdGFjay5sZW5ndGggLSAxXVxyXG59O1xyXG5cclxucHAkMy5jdXJyZW50VmFyU2NvcGUgPSBmdW5jdGlvbigpIHtcclxuICBmb3IgKHZhciBpID0gdGhpcy5zY29wZVN0YWNrLmxlbmd0aCAtIDE7OyBpLS0pIHtcclxuICAgIHZhciBzY29wZSA9IHRoaXMuc2NvcGVTdGFja1tpXTtcclxuICAgIGlmIChzY29wZS5mbGFncyAmIFNDT1BFX1ZBUikgeyByZXR1cm4gc2NvcGUgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vIENvdWxkIGJlIHVzZWZ1bCBmb3IgYHRoaXNgLCBgbmV3LnRhcmdldGAsIGBzdXBlcigpYCwgYHN1cGVyLnByb3BlcnR5YCwgYW5kIGBzdXBlcltwcm9wZXJ0eV1gLlxyXG5wcCQzLmN1cnJlbnRUaGlzU2NvcGUgPSBmdW5jdGlvbigpIHtcclxuICBmb3IgKHZhciBpID0gdGhpcy5zY29wZVN0YWNrLmxlbmd0aCAtIDE7OyBpLS0pIHtcclxuICAgIHZhciBzY29wZSA9IHRoaXMuc2NvcGVTdGFja1tpXTtcclxuICAgIGlmIChzY29wZS5mbGFncyAmIFNDT1BFX1ZBUiAmJiAhKHNjb3BlLmZsYWdzICYgU0NPUEVfQVJST1cpKSB7IHJldHVybiBzY29wZSB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKHBhcnNlciwgcG9zLCBsb2MpIHtcclxuICB0aGlzLnR5cGUgPSBcIlwiO1xyXG4gIHRoaXMuc3RhcnQgPSBwb3M7XHJcbiAgdGhpcy5lbmQgPSAwO1xyXG4gIGlmIChwYXJzZXIub3B0aW9ucy5sb2NhdGlvbnMpXHJcbiAgICB7IHRoaXMubG9jID0gbmV3IFNvdXJjZUxvY2F0aW9uKHBhcnNlciwgbG9jKTsgfVxyXG4gIGlmIChwYXJzZXIub3B0aW9ucy5kaXJlY3RTb3VyY2VGaWxlKVxyXG4gICAgeyB0aGlzLnNvdXJjZUZpbGUgPSBwYXJzZXIub3B0aW9ucy5kaXJlY3RTb3VyY2VGaWxlOyB9XHJcbiAgaWYgKHBhcnNlci5vcHRpb25zLnJhbmdlcylcclxuICAgIHsgdGhpcy5yYW5nZSA9IFtwb3MsIDBdOyB9XHJcbn07XHJcblxyXG4vLyBTdGFydCBhbiBBU1Qgbm9kZSwgYXR0YWNoaW5nIGEgc3RhcnQgb2Zmc2V0LlxyXG5cclxudmFyIHBwJDIgPSBQYXJzZXIucHJvdG90eXBlO1xyXG5cclxucHAkMi5zdGFydE5vZGUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IE5vZGUodGhpcywgdGhpcy5zdGFydCwgdGhpcy5zdGFydExvYylcclxufTtcclxuXHJcbnBwJDIuc3RhcnROb2RlQXQgPSBmdW5jdGlvbihwb3MsIGxvYykge1xyXG4gIHJldHVybiBuZXcgTm9kZSh0aGlzLCBwb3MsIGxvYylcclxufTtcclxuXHJcbi8vIEZpbmlzaCBhbiBBU1Qgbm9kZSwgYWRkaW5nIGB0eXBlYCBhbmQgYGVuZGAgcHJvcGVydGllcy5cclxuXHJcbmZ1bmN0aW9uIGZpbmlzaE5vZGVBdChub2RlLCB0eXBlLCBwb3MsIGxvYykge1xyXG4gIG5vZGUudHlwZSA9IHR5cGU7XHJcbiAgbm9kZS5lbmQgPSBwb3M7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpXHJcbiAgICB7IG5vZGUubG9jLmVuZCA9IGxvYzsgfVxyXG4gIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKVxyXG4gICAgeyBub2RlLnJhbmdlWzFdID0gcG9zOyB9XHJcbiAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxucHAkMi5maW5pc2hOb2RlID0gZnVuY3Rpb24obm9kZSwgdHlwZSkge1xyXG4gIHJldHVybiBmaW5pc2hOb2RlQXQuY2FsbCh0aGlzLCBub2RlLCB0eXBlLCB0aGlzLmxhc3RUb2tFbmQsIHRoaXMubGFzdFRva0VuZExvYylcclxufTtcclxuXHJcbi8vIEZpbmlzaCBub2RlIGF0IGdpdmVuIHBvc2l0aW9uXHJcblxyXG5wcCQyLmZpbmlzaE5vZGVBdCA9IGZ1bmN0aW9uKG5vZGUsIHR5cGUsIHBvcywgbG9jKSB7XHJcbiAgcmV0dXJuIGZpbmlzaE5vZGVBdC5jYWxsKHRoaXMsIG5vZGUsIHR5cGUsIHBvcywgbG9jKVxyXG59O1xyXG5cclxucHAkMi5jb3B5Tm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICB2YXIgbmV3Tm9kZSA9IG5ldyBOb2RlKHRoaXMsIG5vZGUuc3RhcnQsIHRoaXMuc3RhcnRMb2MpO1xyXG4gIGZvciAodmFyIHByb3AgaW4gbm9kZSkgeyBuZXdOb2RlW3Byb3BdID0gbm9kZVtwcm9wXTsgfVxyXG4gIHJldHVybiBuZXdOb2RlXHJcbn07XHJcblxyXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgVW5pY29kZSBwcm9wZXJ0aWVzIGV4dHJhY3RlZCBmcm9tIHRoZSBFQ01BU2NyaXB0IHNwZWNpZmljYXRpb24uXHJcbi8vIFRoZSBsaXN0cyBhcmUgZXh0cmFjdGVkIGxpa2Ugc286XHJcbi8vICQkKCcjdGFibGUtYmluYXJ5LXVuaWNvZGUtcHJvcGVydGllcyA+IGZpZ3VyZSA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKSBjb2RlJykubWFwKGVsID0+IGVsLmlubmVyVGV4dClcclxuXHJcbi8vICN0YWJsZS1iaW5hcnktdW5pY29kZS1wcm9wZXJ0aWVzXHJcbnZhciBlY21hOUJpbmFyeVByb3BlcnRpZXMgPSBcIkFTQ0lJIEFTQ0lJX0hleF9EaWdpdCBBSGV4IEFscGhhYmV0aWMgQWxwaGEgQW55IEFzc2lnbmVkIEJpZGlfQ29udHJvbCBCaWRpX0MgQmlkaV9NaXJyb3JlZCBCaWRpX00gQ2FzZV9JZ25vcmFibGUgQ0kgQ2FzZWQgQ2hhbmdlc19XaGVuX0Nhc2Vmb2xkZWQgQ1dDRiBDaGFuZ2VzX1doZW5fQ2FzZW1hcHBlZCBDV0NNIENoYW5nZXNfV2hlbl9Mb3dlcmNhc2VkIENXTCBDaGFuZ2VzX1doZW5fTkZLQ19DYXNlZm9sZGVkIENXS0NGIENoYW5nZXNfV2hlbl9UaXRsZWNhc2VkIENXVCBDaGFuZ2VzX1doZW5fVXBwZXJjYXNlZCBDV1UgRGFzaCBEZWZhdWx0X0lnbm9yYWJsZV9Db2RlX1BvaW50IERJIERlcHJlY2F0ZWQgRGVwIERpYWNyaXRpYyBEaWEgRW1vamkgRW1vamlfQ29tcG9uZW50IEVtb2ppX01vZGlmaWVyIEVtb2ppX01vZGlmaWVyX0Jhc2UgRW1vamlfUHJlc2VudGF0aW9uIEV4dGVuZGVyIEV4dCBHcmFwaGVtZV9CYXNlIEdyX0Jhc2UgR3JhcGhlbWVfRXh0ZW5kIEdyX0V4dCBIZXhfRGlnaXQgSGV4IElEU19CaW5hcnlfT3BlcmF0b3IgSURTQiBJRFNfVHJpbmFyeV9PcGVyYXRvciBJRFNUIElEX0NvbnRpbnVlIElEQyBJRF9TdGFydCBJRFMgSWRlb2dyYXBoaWMgSWRlbyBKb2luX0NvbnRyb2wgSm9pbl9DIExvZ2ljYWxfT3JkZXJfRXhjZXB0aW9uIExPRSBMb3dlcmNhc2UgTG93ZXIgTWF0aCBOb25jaGFyYWN0ZXJfQ29kZV9Qb2ludCBOQ2hhciBQYXR0ZXJuX1N5bnRheCBQYXRfU3luIFBhdHRlcm5fV2hpdGVfU3BhY2UgUGF0X1dTIFF1b3RhdGlvbl9NYXJrIFFNYXJrIFJhZGljYWwgUmVnaW9uYWxfSW5kaWNhdG9yIFJJIFNlbnRlbmNlX1Rlcm1pbmFsIFNUZXJtIFNvZnRfRG90dGVkIFNEIFRlcm1pbmFsX1B1bmN0dWF0aW9uIFRlcm0gVW5pZmllZF9JZGVvZ3JhcGggVUlkZW8gVXBwZXJjYXNlIFVwcGVyIFZhcmlhdGlvbl9TZWxlY3RvciBWUyBXaGl0ZV9TcGFjZSBzcGFjZSBYSURfQ29udGludWUgWElEQyBYSURfU3RhcnQgWElEU1wiO1xyXG52YXIgZWNtYTEwQmluYXJ5UHJvcGVydGllcyA9IGVjbWE5QmluYXJ5UHJvcGVydGllcyArIFwiIEV4dGVuZGVkX1BpY3RvZ3JhcGhpY1wiO1xyXG52YXIgZWNtYTExQmluYXJ5UHJvcGVydGllcyA9IGVjbWExMEJpbmFyeVByb3BlcnRpZXM7XHJcbnZhciBlY21hMTJCaW5hcnlQcm9wZXJ0aWVzID0gZWNtYTExQmluYXJ5UHJvcGVydGllcyArIFwiIEVCYXNlIEVDb21wIEVNb2QgRVByZXMgRXh0UGljdFwiO1xyXG52YXIgZWNtYTEzQmluYXJ5UHJvcGVydGllcyA9IGVjbWExMkJpbmFyeVByb3BlcnRpZXM7XHJcbnZhciBlY21hMTRCaW5hcnlQcm9wZXJ0aWVzID0gZWNtYTEzQmluYXJ5UHJvcGVydGllcztcclxuXHJcbnZhciB1bmljb2RlQmluYXJ5UHJvcGVydGllcyA9IHtcclxuICA5OiBlY21hOUJpbmFyeVByb3BlcnRpZXMsXHJcbiAgMTA6IGVjbWExMEJpbmFyeVByb3BlcnRpZXMsXHJcbiAgMTE6IGVjbWExMUJpbmFyeVByb3BlcnRpZXMsXHJcbiAgMTI6IGVjbWExMkJpbmFyeVByb3BlcnRpZXMsXHJcbiAgMTM6IGVjbWExM0JpbmFyeVByb3BlcnRpZXMsXHJcbiAgMTQ6IGVjbWExNEJpbmFyeVByb3BlcnRpZXNcclxufTtcclxuXHJcbi8vICN0YWJsZS1iaW5hcnktdW5pY29kZS1wcm9wZXJ0aWVzLW9mLXN0cmluZ3NcclxudmFyIGVjbWExNEJpbmFyeVByb3BlcnRpZXNPZlN0cmluZ3MgPSBcIkJhc2ljX0Vtb2ppIEVtb2ppX0tleWNhcF9TZXF1ZW5jZSBSR0lfRW1vamlfTW9kaWZpZXJfU2VxdWVuY2UgUkdJX0Vtb2ppX0ZsYWdfU2VxdWVuY2UgUkdJX0Vtb2ppX1RhZ19TZXF1ZW5jZSBSR0lfRW1vamlfWldKX1NlcXVlbmNlIFJHSV9FbW9qaVwiO1xyXG5cclxudmFyIHVuaWNvZGVCaW5hcnlQcm9wZXJ0aWVzT2ZTdHJpbmdzID0ge1xyXG4gIDk6IFwiXCIsXHJcbiAgMTA6IFwiXCIsXHJcbiAgMTE6IFwiXCIsXHJcbiAgMTI6IFwiXCIsXHJcbiAgMTM6IFwiXCIsXHJcbiAgMTQ6IGVjbWExNEJpbmFyeVByb3BlcnRpZXNPZlN0cmluZ3NcclxufTtcclxuXHJcbi8vICN0YWJsZS11bmljb2RlLWdlbmVyYWwtY2F0ZWdvcnktdmFsdWVzXHJcbnZhciB1bmljb2RlR2VuZXJhbENhdGVnb3J5VmFsdWVzID0gXCJDYXNlZF9MZXR0ZXIgTEMgQ2xvc2VfUHVuY3R1YXRpb24gUGUgQ29ubmVjdG9yX1B1bmN0dWF0aW9uIFBjIENvbnRyb2wgQ2MgY250cmwgQ3VycmVuY3lfU3ltYm9sIFNjIERhc2hfUHVuY3R1YXRpb24gUGQgRGVjaW1hbF9OdW1iZXIgTmQgZGlnaXQgRW5jbG9zaW5nX01hcmsgTWUgRmluYWxfUHVuY3R1YXRpb24gUGYgRm9ybWF0IENmIEluaXRpYWxfUHVuY3R1YXRpb24gUGkgTGV0dGVyIEwgTGV0dGVyX051bWJlciBObCBMaW5lX1NlcGFyYXRvciBabCBMb3dlcmNhc2VfTGV0dGVyIExsIE1hcmsgTSBDb21iaW5pbmdfTWFyayBNYXRoX1N5bWJvbCBTbSBNb2RpZmllcl9MZXR0ZXIgTG0gTW9kaWZpZXJfU3ltYm9sIFNrIE5vbnNwYWNpbmdfTWFyayBNbiBOdW1iZXIgTiBPcGVuX1B1bmN0dWF0aW9uIFBzIE90aGVyIEMgT3RoZXJfTGV0dGVyIExvIE90aGVyX051bWJlciBObyBPdGhlcl9QdW5jdHVhdGlvbiBQbyBPdGhlcl9TeW1ib2wgU28gUGFyYWdyYXBoX1NlcGFyYXRvciBacCBQcml2YXRlX1VzZSBDbyBQdW5jdHVhdGlvbiBQIHB1bmN0IFNlcGFyYXRvciBaIFNwYWNlX1NlcGFyYXRvciBacyBTcGFjaW5nX01hcmsgTWMgU3Vycm9nYXRlIENzIFN5bWJvbCBTIFRpdGxlY2FzZV9MZXR0ZXIgTHQgVW5hc3NpZ25lZCBDbiBVcHBlcmNhc2VfTGV0dGVyIEx1XCI7XHJcblxyXG4vLyAjdGFibGUtdW5pY29kZS1zY3JpcHQtdmFsdWVzXHJcbnZhciBlY21hOVNjcmlwdFZhbHVlcyA9IFwiQWRsYW0gQWRsbSBBaG9tIEFuYXRvbGlhbl9IaWVyb2dseXBocyBIbHV3IEFyYWJpYyBBcmFiIEFybWVuaWFuIEFybW4gQXZlc3RhbiBBdnN0IEJhbGluZXNlIEJhbGkgQmFtdW0gQmFtdSBCYXNzYV9WYWggQmFzcyBCYXRhayBCYXRrIEJlbmdhbGkgQmVuZyBCaGFpa3N1a2kgQmhrcyBCb3BvbW9mbyBCb3BvIEJyYWhtaSBCcmFoIEJyYWlsbGUgQnJhaSBCdWdpbmVzZSBCdWdpIEJ1aGlkIEJ1aGQgQ2FuYWRpYW5fQWJvcmlnaW5hbCBDYW5zIENhcmlhbiBDYXJpIENhdWNhc2lhbl9BbGJhbmlhbiBBZ2hiIENoYWttYSBDYWttIENoYW0gQ2hhbSBDaGVyb2tlZSBDaGVyIENvbW1vbiBaeXl5IENvcHRpYyBDb3B0IFFhYWMgQ3VuZWlmb3JtIFhzdXggQ3lwcmlvdCBDcHJ0IEN5cmlsbGljIEN5cmwgRGVzZXJldCBEc3J0IERldmFuYWdhcmkgRGV2YSBEdXBsb3lhbiBEdXBsIEVneXB0aWFuX0hpZXJvZ2x5cGhzIEVneXAgRWxiYXNhbiBFbGJhIEV0aGlvcGljIEV0aGkgR2VvcmdpYW4gR2VvciBHbGFnb2xpdGljIEdsYWcgR290aGljIEdvdGggR3JhbnRoYSBHcmFuIEdyZWVrIEdyZWsgR3VqYXJhdGkgR3VqciBHdXJtdWtoaSBHdXJ1IEhhbiBIYW5pIEhhbmd1bCBIYW5nIEhhbnVub28gSGFubyBIYXRyYW4gSGF0ciBIZWJyZXcgSGViciBIaXJhZ2FuYSBIaXJhIEltcGVyaWFsX0FyYW1haWMgQXJtaSBJbmhlcml0ZWQgWmluaCBRYWFpIEluc2NyaXB0aW9uYWxfUGFobGF2aSBQaGxpIEluc2NyaXB0aW9uYWxfUGFydGhpYW4gUHJ0aSBKYXZhbmVzZSBKYXZhIEthaXRoaSBLdGhpIEthbm5hZGEgS25kYSBLYXRha2FuYSBLYW5hIEtheWFoX0xpIEthbGkgS2hhcm9zaHRoaSBLaGFyIEtobWVyIEtobXIgS2hvamtpIEtob2ogS2h1ZGF3YWRpIFNpbmQgTGFvIExhb28gTGF0aW4gTGF0biBMZXBjaGEgTGVwYyBMaW1idSBMaW1iIExpbmVhcl9BIExpbmEgTGluZWFyX0IgTGluYiBMaXN1IExpc3UgTHljaWFuIEx5Y2kgTHlkaWFuIEx5ZGkgTWFoYWphbmkgTWFoaiBNYWxheWFsYW0gTWx5bSBNYW5kYWljIE1hbmQgTWFuaWNoYWVhbiBNYW5pIE1hcmNoZW4gTWFyYyBNYXNhcmFtX0dvbmRpIEdvbm0gTWVldGVpX01heWVrIE10ZWkgTWVuZGVfS2lrYWt1aSBNZW5kIE1lcm9pdGljX0N1cnNpdmUgTWVyYyBNZXJvaXRpY19IaWVyb2dseXBocyBNZXJvIE1pYW8gUGxyZCBNb2RpIE1vbmdvbGlhbiBNb25nIE1ybyBNcm9vIE11bHRhbmkgTXVsdCBNeWFubWFyIE15bXIgTmFiYXRhZWFuIE5iYXQgTmV3X1RhaV9MdWUgVGFsdSBOZXdhIE5ld2EgTmtvIE5rb28gTnVzaHUgTnNodSBPZ2hhbSBPZ2FtIE9sX0NoaWtpIE9sY2sgT2xkX0h1bmdhcmlhbiBIdW5nIE9sZF9JdGFsaWMgSXRhbCBPbGRfTm9ydGhfQXJhYmlhbiBOYXJiIE9sZF9QZXJtaWMgUGVybSBPbGRfUGVyc2lhbiBYcGVvIE9sZF9Tb3V0aF9BcmFiaWFuIFNhcmIgT2xkX1R1cmtpYyBPcmtoIE9yaXlhIE9yeWEgT3NhZ2UgT3NnZSBPc21hbnlhIE9zbWEgUGFoYXdoX0htb25nIEhtbmcgUGFsbXlyZW5lIFBhbG0gUGF1X0Npbl9IYXUgUGF1YyBQaGFnc19QYSBQaGFnIFBob2VuaWNpYW4gUGhueCBQc2FsdGVyX1BhaGxhdmkgUGhscCBSZWphbmcgUmpuZyBSdW5pYyBSdW5yIFNhbWFyaXRhbiBTYW1yIFNhdXJhc2h0cmEgU2F1ciBTaGFyYWRhIFNocmQgU2hhdmlhbiBTaGF3IFNpZGRoYW0gU2lkZCBTaWduV3JpdGluZyBTZ253IFNpbmhhbGEgU2luaCBTb3JhX1NvbXBlbmcgU29yYSBTb3lvbWJvIFNveW8gU3VuZGFuZXNlIFN1bmQgU3lsb3RpX05hZ3JpIFN5bG8gU3lyaWFjIFN5cmMgVGFnYWxvZyBUZ2xnIFRhZ2JhbndhIFRhZ2IgVGFpX0xlIFRhbGUgVGFpX1RoYW0gTGFuYSBUYWlfVmlldCBUYXZ0IFRha3JpIFRha3IgVGFtaWwgVGFtbCBUYW5ndXQgVGFuZyBUZWx1Z3UgVGVsdSBUaGFhbmEgVGhhYSBUaGFpIFRoYWkgVGliZXRhbiBUaWJ0IFRpZmluYWdoIFRmbmcgVGlyaHV0YSBUaXJoIFVnYXJpdGljIFVnYXIgVmFpIFZhaWkgV2FyYW5nX0NpdGkgV2FyYSBZaSBZaWlpIFphbmFiYXphcl9TcXVhcmUgWmFuYlwiO1xyXG52YXIgZWNtYTEwU2NyaXB0VmFsdWVzID0gZWNtYTlTY3JpcHRWYWx1ZXMgKyBcIiBEb2dyYSBEb2dyIEd1bmphbGFfR29uZGkgR29uZyBIYW5pZmlfUm9oaW5neWEgUm9oZyBNYWthc2FyIE1ha2EgTWVkZWZhaWRyaW4gTWVkZiBPbGRfU29nZGlhbiBTb2dvIFNvZ2RpYW4gU29nZFwiO1xyXG52YXIgZWNtYTExU2NyaXB0VmFsdWVzID0gZWNtYTEwU2NyaXB0VmFsdWVzICsgXCIgRWx5bWFpYyBFbHltIE5hbmRpbmFnYXJpIE5hbmQgTnlpYWtlbmdfUHVhY2h1ZV9IbW9uZyBIbW5wIFdhbmNobyBXY2hvXCI7XHJcbnZhciBlY21hMTJTY3JpcHRWYWx1ZXMgPSBlY21hMTFTY3JpcHRWYWx1ZXMgKyBcIiBDaG9yYXNtaWFuIENocnMgRGlhayBEaXZlc19Ba3VydSBLaGl0YW5fU21hbGxfU2NyaXB0IEtpdHMgWWV6aSBZZXppZGlcIjtcclxudmFyIGVjbWExM1NjcmlwdFZhbHVlcyA9IGVjbWExMlNjcmlwdFZhbHVlcyArIFwiIEN5cHJvX01pbm9hbiBDcG1uIE9sZF9VeWdodXIgT3VnciBUYW5nc2EgVG5zYSBUb3RvIFZpdGhrdXFpIFZpdGhcIjtcclxudmFyIGVjbWExNFNjcmlwdFZhbHVlcyA9IGVjbWExM1NjcmlwdFZhbHVlcyArIFwiIEhya3QgS2F0YWthbmFfT3JfSGlyYWdhbmEgS2F3aSBOYWdfTXVuZGFyaSBOYWdtIFVua25vd24gWnp6elwiO1xyXG5cclxudmFyIHVuaWNvZGVTY3JpcHRWYWx1ZXMgPSB7XHJcbiAgOTogZWNtYTlTY3JpcHRWYWx1ZXMsXHJcbiAgMTA6IGVjbWExMFNjcmlwdFZhbHVlcyxcclxuICAxMTogZWNtYTExU2NyaXB0VmFsdWVzLFxyXG4gIDEyOiBlY21hMTJTY3JpcHRWYWx1ZXMsXHJcbiAgMTM6IGVjbWExM1NjcmlwdFZhbHVlcyxcclxuICAxNDogZWNtYTE0U2NyaXB0VmFsdWVzXHJcbn07XHJcblxyXG52YXIgZGF0YSA9IHt9O1xyXG5mdW5jdGlvbiBidWlsZFVuaWNvZGVEYXRhKGVjbWFWZXJzaW9uKSB7XHJcbiAgdmFyIGQgPSBkYXRhW2VjbWFWZXJzaW9uXSA9IHtcclxuICAgIGJpbmFyeTogd29yZHNSZWdleHAodW5pY29kZUJpbmFyeVByb3BlcnRpZXNbZWNtYVZlcnNpb25dICsgXCIgXCIgKyB1bmljb2RlR2VuZXJhbENhdGVnb3J5VmFsdWVzKSxcclxuICAgIGJpbmFyeU9mU3RyaW5nczogd29yZHNSZWdleHAodW5pY29kZUJpbmFyeVByb3BlcnRpZXNPZlN0cmluZ3NbZWNtYVZlcnNpb25dKSxcclxuICAgIG5vbkJpbmFyeToge1xyXG4gICAgICBHZW5lcmFsX0NhdGVnb3J5OiB3b3Jkc1JlZ2V4cCh1bmljb2RlR2VuZXJhbENhdGVnb3J5VmFsdWVzKSxcclxuICAgICAgU2NyaXB0OiB3b3Jkc1JlZ2V4cCh1bmljb2RlU2NyaXB0VmFsdWVzW2VjbWFWZXJzaW9uXSlcclxuICAgIH1cclxuICB9O1xyXG4gIGQubm9uQmluYXJ5LlNjcmlwdF9FeHRlbnNpb25zID0gZC5ub25CaW5hcnkuU2NyaXB0O1xyXG5cclxuICBkLm5vbkJpbmFyeS5nYyA9IGQubm9uQmluYXJ5LkdlbmVyYWxfQ2F0ZWdvcnk7XHJcbiAgZC5ub25CaW5hcnkuc2MgPSBkLm5vbkJpbmFyeS5TY3JpcHQ7XHJcbiAgZC5ub25CaW5hcnkuc2N4ID0gZC5ub25CaW5hcnkuU2NyaXB0X0V4dGVuc2lvbnM7XHJcbn1cclxuXHJcbmZvciAodmFyIGkgPSAwLCBsaXN0ID0gWzksIDEwLCAxMSwgMTIsIDEzLCAxNF07IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgdmFyIGVjbWFWZXJzaW9uID0gbGlzdFtpXTtcclxuXHJcbiAgYnVpbGRVbmljb2RlRGF0YShlY21hVmVyc2lvbik7XHJcbn1cclxuXHJcbnZhciBwcCQxID0gUGFyc2VyLnByb3RvdHlwZTtcclxuXHJcbnZhciBSZWdFeHBWYWxpZGF0aW9uU3RhdGUgPSBmdW5jdGlvbiBSZWdFeHBWYWxpZGF0aW9uU3RhdGUocGFyc2VyKSB7XHJcbiAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcbiAgdGhpcy52YWxpZEZsYWdzID0gXCJnaW1cIiArIChwYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ID8gXCJ1eVwiIDogXCJcIikgKyAocGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSA/IFwic1wiIDogXCJcIikgKyAocGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTMgPyBcImRcIiA6IFwiXCIpICsgKHBhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uID49IDE1ID8gXCJ2XCIgOiBcIlwiKTtcclxuICB0aGlzLnVuaWNvZGVQcm9wZXJ0aWVzID0gZGF0YVtwYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxNCA/IDE0IDogcGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb25dO1xyXG4gIHRoaXMuc291cmNlID0gXCJcIjtcclxuICB0aGlzLmZsYWdzID0gXCJcIjtcclxuICB0aGlzLnN0YXJ0ID0gMDtcclxuICB0aGlzLnN3aXRjaFUgPSBmYWxzZTtcclxuICB0aGlzLnN3aXRjaFYgPSBmYWxzZTtcclxuICB0aGlzLnN3aXRjaE4gPSBmYWxzZTtcclxuICB0aGlzLnBvcyA9IDA7XHJcbiAgdGhpcy5sYXN0SW50VmFsdWUgPSAwO1xyXG4gIHRoaXMubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcclxuICB0aGlzLmxhc3RBc3NlcnRpb25Jc1F1YW50aWZpYWJsZSA9IGZhbHNlO1xyXG4gIHRoaXMubnVtQ2FwdHVyaW5nUGFyZW5zID0gMDtcclxuICB0aGlzLm1heEJhY2tSZWZlcmVuY2UgPSAwO1xyXG4gIHRoaXMuZ3JvdXBOYW1lcyA9IFtdO1xyXG4gIHRoaXMuYmFja1JlZmVyZW5jZU5hbWVzID0gW107XHJcbn07XHJcblxyXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQgKHN0YXJ0LCBwYXR0ZXJuLCBmbGFncykge1xyXG4gIHZhciB1bmljb2RlU2V0cyA9IGZsYWdzLmluZGV4T2YoXCJ2XCIpICE9PSAtMTtcclxuICB2YXIgdW5pY29kZSA9IGZsYWdzLmluZGV4T2YoXCJ1XCIpICE9PSAtMTtcclxuICB0aGlzLnN0YXJ0ID0gc3RhcnQgfCAwO1xyXG4gIHRoaXMuc291cmNlID0gcGF0dGVybiArIFwiXCI7XHJcbiAgdGhpcy5mbGFncyA9IGZsYWdzO1xyXG4gIGlmICh1bmljb2RlU2V0cyAmJiB0aGlzLnBhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uID49IDE1KSB7XHJcbiAgICB0aGlzLnN3aXRjaFUgPSB0cnVlO1xyXG4gICAgdGhpcy5zd2l0Y2hWID0gdHJ1ZTtcclxuICAgIHRoaXMuc3dpdGNoTiA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3dpdGNoVSA9IHVuaWNvZGUgJiYgdGhpcy5wYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2O1xyXG4gICAgdGhpcy5zd2l0Y2hWID0gZmFsc2U7XHJcbiAgICB0aGlzLnN3aXRjaE4gPSB1bmljb2RlICYmIHRoaXMucGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOTtcclxuICB9XHJcbn07XHJcblxyXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLnJhaXNlID0gZnVuY3Rpb24gcmFpc2UgKG1lc3NhZ2UpIHtcclxuICB0aGlzLnBhcnNlci5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIChcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiAvXCIgKyAodGhpcy5zb3VyY2UpICsgXCIvOiBcIiArIG1lc3NhZ2UpKTtcclxufTtcclxuXHJcbi8vIElmIHUgZmxhZyBpcyBnaXZlbiwgdGhpcyByZXR1cm5zIHRoZSBjb2RlIHBvaW50IGF0IHRoZSBpbmRleCAoaXQgY29tYmluZXMgYSBzdXJyb2dhdGUgcGFpcikuXHJcbi8vIE90aGVyd2lzZSwgdGhpcyByZXR1cm5zIHRoZSBjb2RlIHVuaXQgb2YgdGhlIGluZGV4IChjYW4gYmUgYSBwYXJ0IG9mIGEgc3Vycm9nYXRlIHBhaXIpLlxyXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gYXQgKGksIGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICB2YXIgcyA9IHRoaXMuc291cmNlO1xyXG4gIHZhciBsID0gcy5sZW5ndGg7XHJcbiAgaWYgKGkgPj0gbCkge1xyXG4gICAgcmV0dXJuIC0xXHJcbiAgfVxyXG4gIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xyXG4gIGlmICghKGZvcmNlVSB8fCB0aGlzLnN3aXRjaFUpIHx8IGMgPD0gMHhEN0ZGIHx8IGMgPj0gMHhFMDAwIHx8IGkgKyAxID49IGwpIHtcclxuICAgIHJldHVybiBjXHJcbiAgfVxyXG4gIHZhciBuZXh0ID0gcy5jaGFyQ29kZUF0KGkgKyAxKTtcclxuICByZXR1cm4gbmV4dCA+PSAweERDMDAgJiYgbmV4dCA8PSAweERGRkYgPyAoYyA8PCAxMCkgKyBuZXh0IC0gMHgzNUZEQzAwIDogY1xyXG59O1xyXG5cclxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5uZXh0SW5kZXggPSBmdW5jdGlvbiBuZXh0SW5kZXggKGksIGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICB2YXIgcyA9IHRoaXMuc291cmNlO1xyXG4gIHZhciBsID0gcy5sZW5ndGg7XHJcbiAgaWYgKGkgPj0gbCkge1xyXG4gICAgcmV0dXJuIGxcclxuICB9XHJcbiAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSksIG5leHQ7XHJcbiAgaWYgKCEoZm9yY2VVIHx8IHRoaXMuc3dpdGNoVSkgfHwgYyA8PSAweEQ3RkYgfHwgYyA+PSAweEUwMDAgfHwgaSArIDEgPj0gbCB8fFxyXG4gICAgICAobmV4dCA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhEQzAwIHx8IG5leHQgPiAweERGRkYpIHtcclxuICAgIHJldHVybiBpICsgMVxyXG4gIH1cclxuICByZXR1cm4gaSArIDJcclxufTtcclxuXHJcblJlZ0V4cFZhbGlkYXRpb25TdGF0ZS5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIGN1cnJlbnQgKGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvcywgZm9yY2VVKVxyXG59O1xyXG5cclxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5sb29rYWhlYWQgPSBmdW5jdGlvbiBsb29rYWhlYWQgKGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4gdGhpcy5hdCh0aGlzLm5leHRJbmRleCh0aGlzLnBvcywgZm9yY2VVKSwgZm9yY2VVKVxyXG59O1xyXG5cclxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5hZHZhbmNlID0gZnVuY3Rpb24gYWR2YW5jZSAoZm9yY2VVKSB7XHJcbiAgICBpZiAoIGZvcmNlVSA9PT0gdm9pZCAwICkgZm9yY2VVID0gZmFsc2U7XHJcblxyXG4gIHRoaXMucG9zID0gdGhpcy5uZXh0SW5kZXgodGhpcy5wb3MsIGZvcmNlVSk7XHJcbn07XHJcblxyXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLmVhdCA9IGZ1bmN0aW9uIGVhdCAoY2gsIGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICBpZiAodGhpcy5jdXJyZW50KGZvcmNlVSkgPT09IGNoKSB7XHJcbiAgICB0aGlzLmFkdmFuY2UoZm9yY2VVKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5lYXRDaGFycyA9IGZ1bmN0aW9uIGVhdENoYXJzIChjaHMsIGZvcmNlVSkge1xyXG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICB2YXIgcG9zID0gdGhpcy5wb3M7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBjaHM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB2YXIgY2ggPSBsaXN0W2ldO1xyXG5cclxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmF0KHBvcywgZm9yY2VVKTtcclxuICAgIGlmIChjdXJyZW50ID09PSAtMSB8fCBjdXJyZW50ICE9PSBjaCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHBvcyA9IHRoaXMubmV4dEluZGV4KHBvcywgZm9yY2VVKTtcclxuICB9XHJcbiAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgcmV0dXJuIHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSB0aGUgZmxhZ3MgcGFydCBvZiBhIGdpdmVuIFJlZ0V4cExpdGVyYWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwVmFsaWRhdGlvblN0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgdG8gdmFsaWRhdGUgUmVnRXhwLlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbnBwJDEudmFsaWRhdGVSZWdFeHBGbGFncyA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHZhbGlkRmxhZ3MgPSBzdGF0ZS52YWxpZEZsYWdzO1xyXG4gIHZhciBmbGFncyA9IHN0YXRlLmZsYWdzO1xyXG5cclxuICB2YXIgdSA9IGZhbHNlO1xyXG4gIHZhciB2ID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmxhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBmbGFnID0gZmxhZ3MuY2hhckF0KGkpO1xyXG4gICAgaWYgKHZhbGlkRmxhZ3MuaW5kZXhPZihmbGFnKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFnXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsYWdzLmluZGV4T2YoZmxhZywgaSArIDEpID4gLTEpIHtcclxuICAgICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJEdXBsaWNhdGUgcmVndWxhciBleHByZXNzaW9uIGZsYWdcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZyA9PT0gXCJ1XCIpIHsgdSA9IHRydWU7IH1cclxuICAgIGlmIChmbGFnID09PSBcInZcIikgeyB2ID0gdHJ1ZTsgfVxyXG4gIH1cclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDE1ICYmIHUgJiYgdikge1xyXG4gICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFnXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSB0aGUgcGF0dGVybiBwYXJ0IG9mIGEgZ2l2ZW4gUmVnRXhwTGl0ZXJhbC5cclxuICpcclxuICogQHBhcmFtIHtSZWdFeHBWYWxpZGF0aW9uU3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSB0byB2YWxpZGF0ZSBSZWdFeHAuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxucHAkMS52YWxpZGF0ZVJlZ0V4cFBhdHRlcm4gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHRoaXMucmVnZXhwX3BhdHRlcm4oc3RhdGUpO1xyXG5cclxuICAvLyBUaGUgZ29hbCBzeW1ib2wgZm9yIHRoZSBwYXJzZSBpcyB8UGF0dGVyblt+VSwgfk5dfC4gSWYgdGhlIHJlc3VsdCBvZlxyXG4gIC8vIHBhcnNpbmcgY29udGFpbnMgYSB8R3JvdXBOYW1lfCwgcmVwYXJzZSB3aXRoIHRoZSBnb2FsIHN5bWJvbFxyXG4gIC8vIHxQYXR0ZXJuW35VLCArTl18IGFuZCB1c2UgdGhpcyByZXN1bHQgaW5zdGVhZC4gVGhyb3cgYSAqU3ludGF4RXJyb3IqXHJcbiAgLy8gZXhjZXB0aW9uIGlmIF9QXyBkaWQgbm90IGNvbmZvcm0gdG8gdGhlIGdyYW1tYXIsIGlmIGFueSBlbGVtZW50cyBvZiBfUF9cclxuICAvLyB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoZSBwYXJzZSwgb3IgaWYgYW55IEVhcmx5IEVycm9yIGNvbmRpdGlvbnMgZXhpc3QuXHJcbiAgaWYgKCFzdGF0ZS5zd2l0Y2hOICYmIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHN0YXRlLmdyb3VwTmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgc3RhdGUuc3dpdGNoTiA9IHRydWU7XHJcbiAgICB0aGlzLnJlZ2V4cF9wYXR0ZXJuKHN0YXRlKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1QYXR0ZXJuXHJcbnBwJDEucmVnZXhwX3BhdHRlcm4gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHN0YXRlLnBvcyA9IDA7XHJcbiAgc3RhdGUubGFzdEludFZhbHVlID0gMDtcclxuICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgPSBcIlwiO1xyXG4gIHN0YXRlLmxhc3RBc3NlcnRpb25Jc1F1YW50aWZpYWJsZSA9IGZhbHNlO1xyXG4gIHN0YXRlLm51bUNhcHR1cmluZ1BhcmVucyA9IDA7XHJcbiAgc3RhdGUubWF4QmFja1JlZmVyZW5jZSA9IDA7XHJcbiAgc3RhdGUuZ3JvdXBOYW1lcy5sZW5ndGggPSAwO1xyXG4gIHN0YXRlLmJhY2tSZWZlcmVuY2VOYW1lcy5sZW5ndGggPSAwO1xyXG5cclxuICB0aGlzLnJlZ2V4cF9kaXNqdW5jdGlvbihzdGF0ZSk7XHJcblxyXG4gIGlmIChzdGF0ZS5wb3MgIT09IHN0YXRlLnNvdXJjZS5sZW5ndGgpIHtcclxuICAgIC8vIE1ha2UgdGhlIHNhbWUgbWVzc2FnZXMgYXMgVjguXHJcbiAgICBpZiAoc3RhdGUuZWF0KDB4MjkgLyogKSAqLykpIHtcclxuICAgICAgc3RhdGUucmFpc2UoXCJVbm1hdGNoZWQgJyknXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLmVhdCgweDVEIC8qIF0gKi8pIHx8IHN0YXRlLmVhdCgweDdEIC8qIH0gKi8pKSB7XHJcbiAgICAgIHN0YXRlLnJhaXNlKFwiTG9uZSBxdWFudGlmaWVyIGJyYWNrZXRzXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoc3RhdGUubWF4QmFja1JlZmVyZW5jZSA+IHN0YXRlLm51bUNhcHR1cmluZ1BhcmVucykge1xyXG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGVzY2FwZVwiKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBzdGF0ZS5iYWNrUmVmZXJlbmNlTmFtZXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB2YXIgbmFtZSA9IGxpc3RbaV07XHJcblxyXG4gICAgaWYgKHN0YXRlLmdyb3VwTmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIG5hbWVkIGNhcHR1cmUgcmVmZXJlbmNlZFwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1EaXNqdW5jdGlvblxyXG5wcCQxLnJlZ2V4cF9kaXNqdW5jdGlvbiA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdGhpcy5yZWdleHBfYWx0ZXJuYXRpdmUoc3RhdGUpO1xyXG4gIHdoaWxlIChzdGF0ZS5lYXQoMHg3QyAvKiB8ICovKSkge1xyXG4gICAgdGhpcy5yZWdleHBfYWx0ZXJuYXRpdmUoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFrZSB0aGUgc2FtZSBtZXNzYWdlIGFzIFY4LlxyXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRRdWFudGlmaWVyKHN0YXRlLCB0cnVlKSkge1xyXG4gICAgc3RhdGUucmFpc2UoXCJOb3RoaW5nIHRvIHJlcGVhdFwiKTtcclxuICB9XHJcbiAgaWYgKHN0YXRlLmVhdCgweDdCIC8qIHsgKi8pKSB7XHJcbiAgICBzdGF0ZS5yYWlzZShcIkxvbmUgcXVhbnRpZmllciBicmFja2V0c1wiKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1BbHRlcm5hdGl2ZVxyXG5wcCQxLnJlZ2V4cF9hbHRlcm5hdGl2ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgd2hpbGUgKHN0YXRlLnBvcyA8IHN0YXRlLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5yZWdleHBfZWF0VGVybShzdGF0ZSkpXHJcbiAgICB7IH1cclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1UZXJtXHJcbnBwJDEucmVnZXhwX2VhdFRlcm0gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRBc3NlcnRpb24oc3RhdGUpKSB7XHJcbiAgICAvLyBIYW5kbGUgYFF1YW50aWZpYWJsZUFzc2VydGlvbiBRdWFudGlmaWVyYCBhbHRlcm5hdGl2ZS5cclxuICAgIC8vIGBzdGF0ZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGVgIGlzIHRydWUgaWYgdGhlIGxhc3QgZWF0ZW4gQXNzZXJ0aW9uXHJcbiAgICAvLyBpcyBhIFF1YW50aWZpYWJsZUFzc2VydGlvbi5cclxuICAgIGlmIChzdGF0ZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGUgJiYgdGhpcy5yZWdleHBfZWF0UXVhbnRpZmllcihzdGF0ZSkpIHtcclxuICAgICAgLy8gTWFrZSB0aGUgc2FtZSBtZXNzYWdlIGFzIFY4LlxyXG4gICAgICBpZiAoc3RhdGUuc3dpdGNoVSkge1xyXG4gICAgICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBxdWFudGlmaWVyXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnN3aXRjaFUgPyB0aGlzLnJlZ2V4cF9lYXRBdG9tKHN0YXRlKSA6IHRoaXMucmVnZXhwX2VhdEV4dGVuZGVkQXRvbShzdGF0ZSkpIHtcclxuICAgIHRoaXMucmVnZXhwX2VhdFF1YW50aWZpZXIoc3RhdGUpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLUFzc2VydGlvblxyXG5wcCQxLnJlZ2V4cF9lYXRBc3NlcnRpb24gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcclxuICBzdGF0ZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGUgPSBmYWxzZTtcclxuXHJcbiAgLy8gXiwgJFxyXG4gIGlmIChzdGF0ZS5lYXQoMHg1RSAvKiBeICovKSB8fCBzdGF0ZS5lYXQoMHgyNCAvKiAkICovKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIC8vIFxcYiBcXEJcclxuICBpZiAoc3RhdGUuZWF0KDB4NUMgLyogXFwgKi8pKSB7XHJcbiAgICBpZiAoc3RhdGUuZWF0KDB4NDIgLyogQiAqLykgfHwgc3RhdGUuZWF0KDB4NjIgLyogYiAqLykpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLy8gTG9va2FoZWFkIC8gTG9va2JlaGluZFxyXG4gIGlmIChzdGF0ZS5lYXQoMHgyOCAvKiAoICovKSAmJiBzdGF0ZS5lYXQoMHgzRiAvKiA/ICovKSkge1xyXG4gICAgdmFyIGxvb2tiZWhpbmQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSkge1xyXG4gICAgICBsb29rYmVoaW5kID0gc3RhdGUuZWF0KDB4M0MgLyogPCAqLyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUuZWF0KDB4M0QgLyogPSAqLykgfHwgc3RhdGUuZWF0KDB4MjEgLyogISAqLykpIHtcclxuICAgICAgdGhpcy5yZWdleHBfZGlzanVuY3Rpb24oc3RhdGUpO1xyXG4gICAgICBpZiAoIXN0YXRlLmVhdCgweDI5IC8qICkgKi8pKSB7XHJcbiAgICAgICAgc3RhdGUucmFpc2UoXCJVbnRlcm1pbmF0ZWQgZ3JvdXBcIik7XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUubGFzdEFzc2VydGlvbklzUXVhbnRpZmlhYmxlID0gIWxvb2tiZWhpbmQ7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0ZS5wb3MgPSBzdGFydDtcclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVF1YW50aWZpZXJcclxucHAkMS5yZWdleHBfZWF0UXVhbnRpZmllciA9IGZ1bmN0aW9uKHN0YXRlLCBub0Vycm9yKSB7XHJcbiAgaWYgKCBub0Vycm9yID09PSB2b2lkIDAgKSBub0Vycm9yID0gZmFsc2U7XHJcblxyXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRRdWFudGlmaWVyUHJlZml4KHN0YXRlLCBub0Vycm9yKSkge1xyXG4gICAgc3RhdGUuZWF0KDB4M0YgLyogPyAqLyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVF1YW50aWZpZXJQcmVmaXhcclxucHAkMS5yZWdleHBfZWF0UXVhbnRpZmllclByZWZpeCA9IGZ1bmN0aW9uKHN0YXRlLCBub0Vycm9yKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHN0YXRlLmVhdCgweDJBIC8qICogKi8pIHx8XHJcbiAgICBzdGF0ZS5lYXQoMHgyQiAvKiArICovKSB8fFxyXG4gICAgc3RhdGUuZWF0KDB4M0YgLyogPyAqLykgfHxcclxuICAgIHRoaXMucmVnZXhwX2VhdEJyYWNlZFF1YW50aWZpZXIoc3RhdGUsIG5vRXJyb3IpXHJcbiAgKVxyXG59O1xyXG5wcCQxLnJlZ2V4cF9lYXRCcmFjZWRRdWFudGlmaWVyID0gZnVuY3Rpb24oc3RhdGUsIG5vRXJyb3IpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgaWYgKHN0YXRlLmVhdCgweDdCIC8qIHsgKi8pKSB7XHJcbiAgICB2YXIgbWluID0gMCwgbWF4ID0gLTE7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0RGVjaW1hbERpZ2l0cyhzdGF0ZSkpIHtcclxuICAgICAgbWluID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gICAgICBpZiAoc3RhdGUuZWF0KDB4MkMgLyogLCAqLykgJiYgdGhpcy5yZWdleHBfZWF0RGVjaW1hbERpZ2l0cyhzdGF0ZSkpIHtcclxuICAgICAgICBtYXggPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXRlLmVhdCgweDdEIC8qIH0gKi8pKSB7XHJcbiAgICAgICAgLy8gU3ludGF4RXJyb3IgaW4gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3NlYy10ZXJtXHJcbiAgICAgICAgaWYgKG1heCAhPT0gLTEgJiYgbWF4IDwgbWluICYmICFub0Vycm9yKSB7XHJcbiAgICAgICAgICBzdGF0ZS5yYWlzZShcIm51bWJlcnMgb3V0IG9mIG9yZGVyIGluIHt9IHF1YW50aWZpZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5zd2l0Y2hVICYmICFub0Vycm9yKSB7XHJcbiAgICAgIHN0YXRlLnJhaXNlKFwiSW5jb21wbGV0ZSBxdWFudGlmaWVyXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtQXRvbVxyXG5wcCQxLnJlZ2V4cF9lYXRBdG9tID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICByZXR1cm4gKFxyXG4gICAgdGhpcy5yZWdleHBfZWF0UGF0dGVybkNoYXJhY3RlcnMoc3RhdGUpIHx8XHJcbiAgICBzdGF0ZS5lYXQoMHgyRSAvKiAuICovKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0UmV2ZXJzZVNvbGlkdXNBdG9tRXNjYXBlKHN0YXRlKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3Moc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRVbmNhcHR1cmluZ0dyb3VwKHN0YXRlKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0Q2FwdHVyaW5nR3JvdXAoc3RhdGUpXHJcbiAgKVxyXG59O1xyXG5wcCQxLnJlZ2V4cF9lYXRSZXZlcnNlU29saWR1c0F0b21Fc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcclxuICBpZiAoc3RhdGUuZWF0KDB4NUMgLyogXFwgKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0QXRvbUVzY2FwZShzdGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxucHAkMS5yZWdleHBfZWF0VW5jYXB0dXJpbmdHcm91cCA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gIGlmIChzdGF0ZS5lYXQoMHgyOCAvKiAoICovKSkge1xyXG4gICAgaWYgKHN0YXRlLmVhdCgweDNGIC8qID8gKi8pICYmIHN0YXRlLmVhdCgweDNBIC8qIDogKi8pKSB7XHJcbiAgICAgIHRoaXMucmVnZXhwX2Rpc2p1bmN0aW9uKHN0YXRlKTtcclxuICAgICAgaWYgKHN0YXRlLmVhdCgweDI5IC8qICkgKi8pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5yYWlzZShcIlVudGVybWluYXRlZCBncm91cFwiKTtcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxucHAkMS5yZWdleHBfZWF0Q2FwdHVyaW5nR3JvdXAgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmIChzdGF0ZS5lYXQoMHgyOCAvKiAoICovKSkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5KSB7XHJcbiAgICAgIHRoaXMucmVnZXhwX2dyb3VwU3BlY2lmaWVyKHN0YXRlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuY3VycmVudCgpID09PSAweDNGIC8qID8gKi8pIHtcclxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGdyb3VwXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWdleHBfZGlzanVuY3Rpb24oc3RhdGUpO1xyXG4gICAgaWYgKHN0YXRlLmVhdCgweDI5IC8qICkgKi8pKSB7XHJcbiAgICAgIHN0YXRlLm51bUNhcHR1cmluZ1BhcmVucyArPSAxO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucmFpc2UoXCJVbnRlcm1pbmF0ZWQgZ3JvdXBcIik7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLUV4dGVuZGVkQXRvbVxyXG5wcCQxLnJlZ2V4cF9lYXRFeHRlbmRlZEF0b20gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICBzdGF0ZS5lYXQoMHgyRSAvKiAuICovKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0UmV2ZXJzZVNvbGlkdXNBdG9tRXNjYXBlKHN0YXRlKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3Moc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRVbmNhcHR1cmluZ0dyb3VwKHN0YXRlKSB8fFxyXG4gICAgdGhpcy5yZWdleHBfZWF0Q2FwdHVyaW5nR3JvdXAoc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRJbnZhbGlkQnJhY2VkUXVhbnRpZmllcihzdGF0ZSkgfHxcclxuICAgIHRoaXMucmVnZXhwX2VhdEV4dGVuZGVkUGF0dGVybkNoYXJhY3RlcihzdGF0ZSlcclxuICApXHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1hbm5leEItSW52YWxpZEJyYWNlZFF1YW50aWZpZXJcclxucHAkMS5yZWdleHBfZWF0SW52YWxpZEJyYWNlZFF1YW50aWZpZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRCcmFjZWRRdWFudGlmaWVyKHN0YXRlLCB0cnVlKSkge1xyXG4gICAgc3RhdGUucmFpc2UoXCJOb3RoaW5nIHRvIHJlcGVhdFwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1TeW50YXhDaGFyYWN0ZXJcclxucHAkMS5yZWdleHBfZWF0U3ludGF4Q2hhcmFjdGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgaWYgKGlzU3ludGF4Q2hhcmFjdGVyKGNoKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2g7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuZnVuY3Rpb24gaXNTeW50YXhDaGFyYWN0ZXIoY2gpIHtcclxuICByZXR1cm4gKFxyXG4gICAgY2ggPT09IDB4MjQgLyogJCAqLyB8fFxyXG4gICAgY2ggPj0gMHgyOCAvKiAoICovICYmIGNoIDw9IDB4MkIgLyogKyAqLyB8fFxyXG4gICAgY2ggPT09IDB4MkUgLyogLiAqLyB8fFxyXG4gICAgY2ggPT09IDB4M0YgLyogPyAqLyB8fFxyXG4gICAgY2ggPj0gMHg1QiAvKiBbICovICYmIGNoIDw9IDB4NUUgLyogXiAqLyB8fFxyXG4gICAgY2ggPj0gMHg3QiAvKiB7ICovICYmIGNoIDw9IDB4N0QgLyogfSAqL1xyXG4gIClcclxufVxyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtUGF0dGVybkNoYXJhY3RlclxyXG4vLyBCdXQgZWF0IGVhZ2VyLlxyXG5wcCQxLnJlZ2V4cF9lYXRQYXR0ZXJuQ2hhcmFjdGVycyA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gIHZhciBjaCA9IDA7XHJcbiAgd2hpbGUgKChjaCA9IHN0YXRlLmN1cnJlbnQoKSkgIT09IC0xICYmICFpc1N5bnRheENoYXJhY3RlcihjaCkpIHtcclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlLnBvcyAhPT0gc3RhcnRcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1FeHRlbmRlZFBhdHRlcm5DaGFyYWN0ZXJcclxucHAkMS5yZWdleHBfZWF0RXh0ZW5kZWRQYXR0ZXJuQ2hhcmFjdGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgaWYgKFxyXG4gICAgY2ggIT09IC0xICYmXHJcbiAgICBjaCAhPT0gMHgyNCAvKiAkICovICYmXHJcbiAgICAhKGNoID49IDB4MjggLyogKCAqLyAmJiBjaCA8PSAweDJCIC8qICsgKi8pICYmXHJcbiAgICBjaCAhPT0gMHgyRSAvKiAuICovICYmXHJcbiAgICBjaCAhPT0gMHgzRiAvKiA/ICovICYmXHJcbiAgICBjaCAhPT0gMHg1QiAvKiBbICovICYmXHJcbiAgICBjaCAhPT0gMHg1RSAvKiBeICovICYmXHJcbiAgICBjaCAhPT0gMHg3QyAvKiB8ICovXHJcbiAgKSB7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIEdyb3VwU3BlY2lmaWVyIDo6XHJcbi8vICAgW2VtcHR5XVxyXG4vLyAgIGA/YCBHcm91cE5hbWVcclxucHAkMS5yZWdleHBfZ3JvdXBTcGVjaWZpZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmIChzdGF0ZS5lYXQoMHgzRiAvKiA/ICovKSkge1xyXG4gICAgaWYgKHRoaXMucmVnZXhwX2VhdEdyb3VwTmFtZShzdGF0ZSkpIHtcclxuICAgICAgaWYgKHN0YXRlLmdyb3VwTmFtZXMuaW5kZXhPZihzdGF0ZS5sYXN0U3RyaW5nVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgIHN0YXRlLnJhaXNlKFwiRHVwbGljYXRlIGNhcHR1cmUgZ3JvdXAgbmFtZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5ncm91cE5hbWVzLnB1c2goc3RhdGUubGFzdFN0cmluZ1ZhbHVlKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZ3JvdXBcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gR3JvdXBOYW1lIDo6XHJcbi8vICAgYDxgIFJlZ0V4cElkZW50aWZpZXJOYW1lIGA+YFxyXG4vLyBOb3RlOiB0aGlzIHVwZGF0ZXMgYHN0YXRlLmxhc3RTdHJpbmdWYWx1ZWAgcHJvcGVydHkgd2l0aCB0aGUgZWF0ZW4gbmFtZS5cclxucHAkMS5yZWdleHBfZWF0R3JvdXBOYW1lID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgPSBcIlwiO1xyXG4gIGlmIChzdGF0ZS5lYXQoMHgzQyAvKiA8ICovKSkge1xyXG4gICAgaWYgKHRoaXMucmVnZXhwX2VhdFJlZ0V4cElkZW50aWZpZXJOYW1lKHN0YXRlKSAmJiBzdGF0ZS5lYXQoMHgzRSAvKiA+ICovKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGNhcHR1cmUgZ3JvdXAgbmFtZVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBSZWdFeHBJZGVudGlmaWVyTmFtZSA6OlxyXG4vLyAgIFJlZ0V4cElkZW50aWZpZXJTdGFydFxyXG4vLyAgIFJlZ0V4cElkZW50aWZpZXJOYW1lIFJlZ0V4cElkZW50aWZpZXJQYXJ0XHJcbi8vIE5vdGU6IHRoaXMgdXBkYXRlcyBgc3RhdGUubGFzdFN0cmluZ1ZhbHVlYCBwcm9wZXJ0eSB3aXRoIHRoZSBlYXRlbiBuYW1lLlxyXG5wcCQxLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyTmFtZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcclxuICBpZiAodGhpcy5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllclN0YXJ0KHN0YXRlKSkge1xyXG4gICAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlICs9IGNvZGVQb2ludFRvU3RyaW5nKHN0YXRlLmxhc3RJbnRWYWx1ZSk7XHJcbiAgICB3aGlsZSAodGhpcy5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllclBhcnQoc3RhdGUpKSB7XHJcbiAgICAgIHN0YXRlLmxhc3RTdHJpbmdWYWx1ZSArPSBjb2RlUG9pbnRUb1N0cmluZyhzdGF0ZS5sYXN0SW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBSZWdFeHBJZGVudGlmaWVyU3RhcnQgOjpcclxuLy8gICBVbmljb2RlSURTdGFydFxyXG4vLyAgIGAkYFxyXG4vLyAgIGBfYFxyXG4vLyAgIGBcXGAgUmVnRXhwVW5pY29kZUVzY2FwZVNlcXVlbmNlWytVXVxyXG5wcCQxLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcclxuICB2YXIgZm9yY2VVID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDExO1xyXG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoZm9yY2VVKTtcclxuICBzdGF0ZS5hZHZhbmNlKGZvcmNlVSk7XHJcblxyXG4gIGlmIChjaCA9PT0gMHg1QyAvKiBcXCAqLyAmJiB0aGlzLnJlZ2V4cF9lYXRSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2Uoc3RhdGUsIGZvcmNlVSkpIHtcclxuICAgIGNoID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gIH1cclxuICBpZiAoaXNSZWdFeHBJZGVudGlmaWVyU3RhcnQoY2gpKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBjaDtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBzdGF0ZS5wb3MgPSBzdGFydDtcclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuZnVuY3Rpb24gaXNSZWdFeHBJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICByZXR1cm4gaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRydWUpIHx8IGNoID09PSAweDI0IC8qICQgKi8gfHwgY2ggPT09IDB4NUYgLyogXyAqL1xyXG59XHJcblxyXG4vLyBSZWdFeHBJZGVudGlmaWVyUGFydCA6OlxyXG4vLyAgIFVuaWNvZGVJRENvbnRpbnVlXHJcbi8vICAgYCRgXHJcbi8vICAgYF9gXHJcbi8vICAgYFxcYCBSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2VbK1VdXHJcbi8vICAgPFpXTko+XHJcbi8vICAgPFpXSj5cclxucHAkMS5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllclBhcnQgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcclxuICB2YXIgZm9yY2VVID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDExO1xyXG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoZm9yY2VVKTtcclxuICBzdGF0ZS5hZHZhbmNlKGZvcmNlVSk7XHJcblxyXG4gIGlmIChjaCA9PT0gMHg1QyAvKiBcXCAqLyAmJiB0aGlzLnJlZ2V4cF9lYXRSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2Uoc3RhdGUsIGZvcmNlVSkpIHtcclxuICAgIGNoID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gIH1cclxuICBpZiAoaXNSZWdFeHBJZGVudGlmaWVyUGFydChjaCkpIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5mdW5jdGlvbiBpc1JlZ0V4cElkZW50aWZpZXJQYXJ0KGNoKSB7XHJcbiAgcmV0dXJuIGlzSWRlbnRpZmllckNoYXIoY2gsIHRydWUpIHx8IGNoID09PSAweDI0IC8qICQgKi8gfHwgY2ggPT09IDB4NUYgLyogXyAqLyB8fCBjaCA9PT0gMHgyMDBDIC8qIDxaV05KPiAqLyB8fCBjaCA9PT0gMHgyMDBEIC8qIDxaV0o+ICovXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1BdG9tRXNjYXBlXHJcbnBwJDEucmVnZXhwX2VhdEF0b21Fc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmIChcclxuICAgIHRoaXMucmVnZXhwX2VhdEJhY2tSZWZlcmVuY2Uoc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZShzdGF0ZSkgfHxcclxuICAgIHRoaXMucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZShzdGF0ZSkgfHxcclxuICAgIChzdGF0ZS5zd2l0Y2hOICYmIHRoaXMucmVnZXhwX2VhdEtHcm91cE5hbWUoc3RhdGUpKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHN0YXRlLnN3aXRjaFUpIHtcclxuICAgIC8vIE1ha2UgdGhlIHNhbWUgbWVzc2FnZSBhcyBWOC5cclxuICAgIGlmIChzdGF0ZS5jdXJyZW50KCkgPT09IDB4NjMgLyogYyAqLykge1xyXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgdW5pY29kZSBlc2NhcGVcIik7XHJcbiAgICB9XHJcbiAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxucHAkMS5yZWdleHBfZWF0QmFja1JlZmVyZW5jZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXREZWNpbWFsRXNjYXBlKHN0YXRlKSkge1xyXG4gICAgdmFyIG4gPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICBpZiAoc3RhdGUuc3dpdGNoVSkge1xyXG4gICAgICAvLyBGb3IgU3ludGF4RXJyb3IgaW4gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3NlYy1hdG9tZXNjYXBlXHJcbiAgICAgIGlmIChuID4gc3RhdGUubWF4QmFja1JlZmVyZW5jZSkge1xyXG4gICAgICAgIHN0YXRlLm1heEJhY2tSZWZlcmVuY2UgPSBuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAobiA8PSBzdGF0ZS5udW1DYXB0dXJpbmdQYXJlbnMpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxucHAkMS5yZWdleHBfZWF0S0dyb3VwTmFtZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgaWYgKHN0YXRlLmVhdCgweDZCIC8qIGsgKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0R3JvdXBOYW1lKHN0YXRlKSkge1xyXG4gICAgICBzdGF0ZS5iYWNrUmVmZXJlbmNlTmFtZXMucHVzaChzdGF0ZS5sYXN0U3RyaW5nVmFsdWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIG5hbWVkIHJlZmVyZW5jZVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1hbm5leEItQ2hhcmFjdGVyRXNjYXBlXHJcbnBwJDEucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHRoaXMucmVnZXhwX2VhdENvbnRyb2xFc2NhcGUoc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRDQ29udHJvbExldHRlcihzdGF0ZSkgfHxcclxuICAgIHRoaXMucmVnZXhwX2VhdFplcm8oc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRIZXhFc2NhcGVTZXF1ZW5jZShzdGF0ZSkgfHxcclxuICAgIHRoaXMucmVnZXhwX2VhdFJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZShzdGF0ZSwgZmFsc2UpIHx8XHJcbiAgICAoIXN0YXRlLnN3aXRjaFUgJiYgdGhpcy5yZWdleHBfZWF0TGVnYWN5T2N0YWxFc2NhcGVTZXF1ZW5jZShzdGF0ZSkpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRJZGVudGl0eUVzY2FwZShzdGF0ZSlcclxuICApXHJcbn07XHJcbnBwJDEucmVnZXhwX2VhdENDb250cm9sTGV0dGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgaWYgKHN0YXRlLmVhdCgweDYzIC8qIGMgKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0Q29udHJvbExldHRlcihzdGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxucHAkMS5yZWdleHBfZWF0WmVybyA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgaWYgKHN0YXRlLmN1cnJlbnQoKSA9PT0gMHgzMCAvKiAwICovICYmICFpc0RlY2ltYWxEaWdpdChzdGF0ZS5sb29rYWhlYWQoKSkpIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDA7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNvbnRyb2xFc2NhcGVcclxucHAkMS5yZWdleHBfZWF0Q29udHJvbEVzY2FwZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudCgpO1xyXG4gIGlmIChjaCA9PT0gMHg3NCAvKiB0ICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDA5OyAvKiBcXHQgKi9cclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChjaCA9PT0gMHg2RSAvKiBuICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBBOyAvKiBcXG4gKi9cclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChjaCA9PT0gMHg3NiAvKiB2ICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBCOyAvKiBcXHYgKi9cclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChjaCA9PT0gMHg2NiAvKiBmICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBDOyAvKiBcXGYgKi9cclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChjaCA9PT0gMHg3MiAvKiByICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBEOyAvKiBcXHIgKi9cclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtQ29udHJvbExldHRlclxyXG5wcCQxLnJlZ2V4cF9lYXRDb250cm9sTGV0dGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgaWYgKGlzQ29udHJvbExldHRlcihjaCkpIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoICUgMHgyMDtcclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5mdW5jdGlvbiBpc0NvbnRyb2xMZXR0ZXIoY2gpIHtcclxuICByZXR1cm4gKFxyXG4gICAgKGNoID49IDB4NDEgLyogQSAqLyAmJiBjaCA8PSAweDVBIC8qIFogKi8pIHx8XHJcbiAgICAoY2ggPj0gMHg2MSAvKiBhICovICYmIGNoIDw9IDB4N0EgLyogeiAqLylcclxuICApXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZVxyXG5wcCQxLnJlZ2V4cF9lYXRSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2UgPSBmdW5jdGlvbihzdGF0ZSwgZm9yY2VVKSB7XHJcbiAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xyXG5cclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgdmFyIHN3aXRjaFUgPSBmb3JjZVUgfHwgc3RhdGUuc3dpdGNoVTtcclxuXHJcbiAgaWYgKHN0YXRlLmVhdCgweDc1IC8qIHUgKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMoc3RhdGUsIDQpKSB7XHJcbiAgICAgIHZhciBsZWFkID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gICAgICBpZiAoc3dpdGNoVSAmJiBsZWFkID49IDB4RDgwMCAmJiBsZWFkIDw9IDB4REJGRikge1xyXG4gICAgICAgIHZhciBsZWFkU3Vycm9nYXRlRW5kID0gc3RhdGUucG9zO1xyXG4gICAgICAgIGlmIChzdGF0ZS5lYXQoMHg1QyAvKiBcXCAqLykgJiYgc3RhdGUuZWF0KDB4NzUgLyogdSAqLykgJiYgdGhpcy5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMoc3RhdGUsIDQpKSB7XHJcbiAgICAgICAgICB2YXIgdHJhaWwgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICAgICAgICBpZiAodHJhaWwgPj0gMHhEQzAwICYmIHRyYWlsIDw9IDB4REZGRikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAobGVhZCAtIDB4RDgwMCkgKiAweDQwMCArICh0cmFpbCAtIDB4REMwMCkgKyAweDEwMDAwO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5wb3MgPSBsZWFkU3Vycm9nYXRlRW5kO1xyXG4gICAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGxlYWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgc3dpdGNoVSAmJlxyXG4gICAgICBzdGF0ZS5lYXQoMHg3QiAvKiB7ICovKSAmJlxyXG4gICAgICB0aGlzLnJlZ2V4cF9lYXRIZXhEaWdpdHMoc3RhdGUpICYmXHJcbiAgICAgIHN0YXRlLmVhdCgweDdEIC8qIH0gKi8pICYmXHJcbiAgICAgIGlzVmFsaWRVbmljb2RlKHN0YXRlLmxhc3RJbnRWYWx1ZSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKHN3aXRjaFUpIHtcclxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHVuaWNvZGUgZXNjYXBlXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuZnVuY3Rpb24gaXNWYWxpZFVuaWNvZGUoY2gpIHtcclxuICByZXR1cm4gY2ggPj0gMCAmJiBjaCA8PSAweDEwRkZGRlxyXG59XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1hbm5leEItSWRlbnRpdHlFc2NhcGVcclxucHAkMS5yZWdleHBfZWF0SWRlbnRpdHlFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIGlmIChzdGF0ZS5zd2l0Y2hVKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0U3ludGF4Q2hhcmFjdGVyKHN0YXRlKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLmVhdCgweDJGIC8qIC8gKi8pKSB7XHJcbiAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDB4MkY7IC8qIC8gKi9cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudCgpO1xyXG4gIGlmIChjaCAhPT0gMHg2MyAvKiBjICovICYmICghc3RhdGUuc3dpdGNoTiB8fCBjaCAhPT0gMHg2QiAvKiBrICovKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2g7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1EZWNpbWFsRXNjYXBlXHJcbnBwJDEucmVnZXhwX2VhdERlY2ltYWxFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDA7XHJcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudCgpO1xyXG4gIGlmIChjaCA+PSAweDMxIC8qIDEgKi8gJiYgY2ggPD0gMHgzOSAvKiA5ICovKSB7XHJcbiAgICBkbyB7XHJcbiAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDEwICogc3RhdGUubGFzdEludFZhbHVlICsgKGNoIC0gMHgzMCAvKiAwICovKTtcclxuICAgICAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gICAgfSB3aGlsZSAoKGNoID0gc3RhdGUuY3VycmVudCgpKSA+PSAweDMwIC8qIDAgKi8gJiYgY2ggPD0gMHgzOSAvKiA5ICovKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBSZXR1cm4gdmFsdWVzIHVzZWQgYnkgY2hhcmFjdGVyIHNldCBwYXJzaW5nIG1ldGhvZHMsIG5lZWRlZCB0b1xyXG4vLyBmb3JiaWQgbmVnYXRpb24gb2Ygc2V0cyB0aGF0IGNhbiBtYXRjaCBzdHJpbmdzLlxyXG52YXIgQ2hhclNldE5vbmUgPSAwOyAvLyBOb3RoaW5nIHBhcnNlZFxyXG52YXIgQ2hhclNldE9rID0gMTsgLy8gQ29uc3RydWN0IHBhcnNlZCwgY2Fubm90IGNvbnRhaW4gc3RyaW5nc1xyXG52YXIgQ2hhclNldFN0cmluZyA9IDI7IC8vIENvbnN0cnVjdCBwYXJzZWQsIGNhbiBjb250YWluIHN0cmluZ3NcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNoYXJhY3RlckNsYXNzRXNjYXBlXHJcbnBwJDEucmVnZXhwX2VhdENoYXJhY3RlckNsYXNzRXNjYXBlID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcblxyXG4gIGlmIChpc0NoYXJhY3RlckNsYXNzRXNjYXBlKGNoKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gLTE7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gQ2hhclNldE9rXHJcbiAgfVxyXG5cclxuICB2YXIgbmVnYXRlID0gZmFsc2U7XHJcbiAgaWYgKFxyXG4gICAgc3RhdGUuc3dpdGNoVSAmJlxyXG4gICAgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkgJiZcclxuICAgICgobmVnYXRlID0gY2ggPT09IDB4NTAgLyogUCAqLykgfHwgY2ggPT09IDB4NzAgLyogcCAqLylcclxuICApIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IC0xO1xyXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIGlmIChcclxuICAgICAgc3RhdGUuZWF0KDB4N0IgLyogeyAqLykgJiZcclxuICAgICAgKHJlc3VsdCA9IHRoaXMucmVnZXhwX2VhdFVuaWNvZGVQcm9wZXJ0eVZhbHVlRXhwcmVzc2lvbihzdGF0ZSkpICYmXHJcbiAgICAgIHN0YXRlLmVhdCgweDdEIC8qIH0gKi8pXHJcbiAgICApIHtcclxuICAgICAgaWYgKG5lZ2F0ZSAmJiByZXN1bHQgPT09IENoYXJTZXRTdHJpbmcpIHsgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIik7IH1cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gQ2hhclNldE5vbmVcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzQ2hhcmFjdGVyQ2xhc3NFc2NhcGUoY2gpIHtcclxuICByZXR1cm4gKFxyXG4gICAgY2ggPT09IDB4NjQgLyogZCAqLyB8fFxyXG4gICAgY2ggPT09IDB4NDQgLyogRCAqLyB8fFxyXG4gICAgY2ggPT09IDB4NzMgLyogcyAqLyB8fFxyXG4gICAgY2ggPT09IDB4NTMgLyogUyAqLyB8fFxyXG4gICAgY2ggPT09IDB4NzcgLyogdyAqLyB8fFxyXG4gICAgY2ggPT09IDB4NTcgLyogVyAqL1xyXG4gIClcclxufVxyXG5cclxuLy8gVW5pY29kZVByb3BlcnR5VmFsdWVFeHByZXNzaW9uIDo6XHJcbi8vICAgVW5pY29kZVByb3BlcnR5TmFtZSBgPWAgVW5pY29kZVByb3BlcnR5VmFsdWVcclxuLy8gICBMb25lVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWVcclxucHAkMS5yZWdleHBfZWF0VW5pY29kZVByb3BlcnR5VmFsdWVFeHByZXNzaW9uID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcblxyXG4gIC8vIFVuaWNvZGVQcm9wZXJ0eU5hbWUgYD1gIFVuaWNvZGVQcm9wZXJ0eVZhbHVlXHJcbiAgaWYgKHRoaXMucmVnZXhwX2VhdFVuaWNvZGVQcm9wZXJ0eU5hbWUoc3RhdGUpICYmIHN0YXRlLmVhdCgweDNEIC8qID0gKi8pKSB7XHJcbiAgICB2YXIgbmFtZSA9IHN0YXRlLmxhc3RTdHJpbmdWYWx1ZTtcclxuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZShzdGF0ZSkpIHtcclxuICAgICAgdmFyIHZhbHVlID0gc3RhdGUubGFzdFN0cmluZ1ZhbHVlO1xyXG4gICAgICB0aGlzLnJlZ2V4cF92YWxpZGF0ZVVuaWNvZGVQcm9wZXJ0eU5hbWVBbmRWYWx1ZShzdGF0ZSwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICByZXR1cm4gQ2hhclNldE9rXHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG5cclxuICAvLyBMb25lVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWVcclxuICBpZiAodGhpcy5yZWdleHBfZWF0TG9uZVVuaWNvZGVQcm9wZXJ0eU5hbWVPclZhbHVlKHN0YXRlKSkge1xyXG4gICAgdmFyIG5hbWVPclZhbHVlID0gc3RhdGUubGFzdFN0cmluZ1ZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXMucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWUoc3RhdGUsIG5hbWVPclZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gQ2hhclNldE5vbmVcclxufTtcclxuXHJcbnBwJDEucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZUFuZFZhbHVlID0gZnVuY3Rpb24oc3RhdGUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgaWYgKCFoYXNPd24oc3RhdGUudW5pY29kZVByb3BlcnRpZXMubm9uQmluYXJ5LCBuYW1lKSlcclxuICAgIHsgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIik7IH1cclxuICBpZiAoIXN0YXRlLnVuaWNvZGVQcm9wZXJ0aWVzLm5vbkJpbmFyeVtuYW1lXS50ZXN0KHZhbHVlKSlcclxuICAgIHsgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IHZhbHVlXCIpOyB9XHJcbn07XHJcblxyXG5wcCQxLnJlZ2V4cF92YWxpZGF0ZVVuaWNvZGVQcm9wZXJ0eU5hbWVPclZhbHVlID0gZnVuY3Rpb24oc3RhdGUsIG5hbWVPclZhbHVlKSB7XHJcbiAgaWYgKHN0YXRlLnVuaWNvZGVQcm9wZXJ0aWVzLmJpbmFyeS50ZXN0KG5hbWVPclZhbHVlKSkgeyByZXR1cm4gQ2hhclNldE9rIH1cclxuICBpZiAoc3RhdGUuc3dpdGNoViAmJiBzdGF0ZS51bmljb2RlUHJvcGVydGllcy5iaW5hcnlPZlN0cmluZ3MudGVzdChuYW1lT3JWYWx1ZSkpIHsgcmV0dXJuIENoYXJTZXRTdHJpbmcgfVxyXG4gIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBwcm9wZXJ0eSBuYW1lXCIpO1xyXG59O1xyXG5cclxuLy8gVW5pY29kZVByb3BlcnR5TmFtZSA6OlxyXG4vLyAgIFVuaWNvZGVQcm9wZXJ0eU5hbWVDaGFyYWN0ZXJzXHJcbnBwJDEucmVnZXhwX2VhdFVuaWNvZGVQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBjaCA9IDA7XHJcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcclxuICB3aGlsZSAoaXNVbmljb2RlUHJvcGVydHlOYW1lQ2hhcmFjdGVyKGNoID0gc3RhdGUuY3VycmVudCgpKSkge1xyXG4gICAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlICs9IGNvZGVQb2ludFRvU3RyaW5nKGNoKTtcclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlLmxhc3RTdHJpbmdWYWx1ZSAhPT0gXCJcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNVbmljb2RlUHJvcGVydHlOYW1lQ2hhcmFjdGVyKGNoKSB7XHJcbiAgcmV0dXJuIGlzQ29udHJvbExldHRlcihjaCkgfHwgY2ggPT09IDB4NUYgLyogXyAqL1xyXG59XHJcblxyXG4vLyBVbmljb2RlUHJvcGVydHlWYWx1ZSA6OlxyXG4vLyAgIFVuaWNvZGVQcm9wZXJ0eVZhbHVlQ2hhcmFjdGVyc1xyXG5wcCQxLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIGNoID0gMDtcclxuICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgPSBcIlwiO1xyXG4gIHdoaWxlIChpc1VuaWNvZGVQcm9wZXJ0eVZhbHVlQ2hhcmFjdGVyKGNoID0gc3RhdGUuY3VycmVudCgpKSkge1xyXG4gICAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlICs9IGNvZGVQb2ludFRvU3RyaW5nKGNoKTtcclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlLmxhc3RTdHJpbmdWYWx1ZSAhPT0gXCJcIlxyXG59O1xyXG5mdW5jdGlvbiBpc1VuaWNvZGVQcm9wZXJ0eVZhbHVlQ2hhcmFjdGVyKGNoKSB7XHJcbiAgcmV0dXJuIGlzVW5pY29kZVByb3BlcnR5TmFtZUNoYXJhY3RlcihjaCkgfHwgaXNEZWNpbWFsRGlnaXQoY2gpXHJcbn1cclxuXHJcbi8vIExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZSA6OlxyXG4vLyAgIFVuaWNvZGVQcm9wZXJ0eVZhbHVlQ2hhcmFjdGVyc1xyXG5wcCQxLnJlZ2V4cF9lYXRMb25lVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWUgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHJldHVybiB0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZShzdGF0ZSlcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNoYXJhY3RlckNsYXNzXHJcbnBwJDEucmVnZXhwX2VhdENoYXJhY3RlckNsYXNzID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICBpZiAoc3RhdGUuZWF0KDB4NUIgLyogWyAqLykpIHtcclxuICAgIHZhciBuZWdhdGUgPSBzdGF0ZS5lYXQoMHg1RSAvKiBeICovKTtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLnJlZ2V4cF9jbGFzc0NvbnRlbnRzKHN0YXRlKTtcclxuICAgIGlmICghc3RhdGUuZWF0KDB4NUQgLyogXSAqLykpXHJcbiAgICAgIHsgc3RhdGUucmFpc2UoXCJVbnRlcm1pbmF0ZWQgY2hhcmFjdGVyIGNsYXNzXCIpOyB9XHJcbiAgICBpZiAobmVnYXRlICYmIHJlc3VsdCA9PT0gQ2hhclNldFN0cmluZylcclxuICAgICAgeyBzdGF0ZS5yYWlzZShcIk5lZ2F0ZWQgY2hhcmFjdGVyIGNsYXNzIG1heSBjb250YWluIHN0cmluZ3NcIik7IH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NDb250ZW50c1xyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1DbGFzc1Jhbmdlc1xyXG5wcCQxLnJlZ2V4cF9jbGFzc0NvbnRlbnRzID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICBpZiAoc3RhdGUuY3VycmVudCgpID09PSAweDVEIC8qIF0gKi8pIHsgcmV0dXJuIENoYXJTZXRPayB9XHJcbiAgaWYgKHN0YXRlLnN3aXRjaFYpIHsgcmV0dXJuIHRoaXMucmVnZXhwX2NsYXNzU2V0RXhwcmVzc2lvbihzdGF0ZSkgfVxyXG4gIHRoaXMucmVnZXhwX25vbkVtcHR5Q2xhc3NSYW5nZXMoc3RhdGUpO1xyXG4gIHJldHVybiBDaGFyU2V0T2tcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLU5vbmVtcHR5Q2xhc3NSYW5nZXNcclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtTm9uZW1wdHlDbGFzc1Jhbmdlc05vRGFzaFxyXG5wcCQxLnJlZ2V4cF9ub25FbXB0eUNsYXNzUmFuZ2VzID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB3aGlsZSAodGhpcy5yZWdleHBfZWF0Q2xhc3NBdG9tKHN0YXRlKSkge1xyXG4gICAgdmFyIGxlZnQgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICBpZiAoc3RhdGUuZWF0KDB4MkQgLyogLSAqLykgJiYgdGhpcy5yZWdleHBfZWF0Q2xhc3NBdG9tKHN0YXRlKSkge1xyXG4gICAgICB2YXIgcmlnaHQgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICAgIGlmIChzdGF0ZS5zd2l0Y2hVICYmIChsZWZ0ID09PSAtMSB8fCByaWdodCA9PT0gLTEpKSB7XHJcbiAgICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobGVmdCAhPT0gLTEgJiYgcmlnaHQgIT09IC0xICYmIGxlZnQgPiByaWdodCkge1xyXG4gICAgICAgIHN0YXRlLnJhaXNlKFwiUmFuZ2Ugb3V0IG9mIG9yZGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNsYXNzQXRvbVxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1DbGFzc0F0b21Ob0Rhc2hcclxucHAkMS5yZWdleHBfZWF0Q2xhc3NBdG9tID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcblxyXG4gIGlmIChzdGF0ZS5lYXQoMHg1QyAvKiBcXCAqLykpIHtcclxuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRDbGFzc0VzY2FwZShzdGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5zd2l0Y2hVKSB7XHJcbiAgICAgIC8vIE1ha2UgdGhlIHNhbWUgbWVzc2FnZSBhcyBWOC5cclxuICAgICAgdmFyIGNoJDEgPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgICAgIGlmIChjaCQxID09PSAweDYzIC8qIGMgKi8gfHwgaXNPY3RhbERpZ2l0KGNoJDEpKSB7XHJcbiAgICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGNsYXNzIGVzY2FwZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgaWYgKGNoICE9PSAweDVEIC8qIF0gKi8pIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xyXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLUNsYXNzRXNjYXBlXHJcbnBwJDEucmVnZXhwX2VhdENsYXNzRXNjYXBlID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcblxyXG4gIGlmIChzdGF0ZS5lYXQoMHg2MiAvKiBiICovKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMHgwODsgLyogPEJTPiAqL1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS5zd2l0Y2hVICYmIHN0YXRlLmVhdCgweDJEIC8qIC0gKi8pKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDJEOyAvKiAtICovXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKCFzdGF0ZS5zd2l0Y2hVICYmIHN0YXRlLmVhdCgweDYzIC8qIGMgKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0Q2xhc3NDb250cm9sTGV0dGVyKHN0YXRlKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3NFc2NhcGUoc3RhdGUpIHx8XHJcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJFc2NhcGUoc3RhdGUpXHJcbiAgKVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRFeHByZXNzaW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzVW5pb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NJbnRlcnNlY3Rpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTdWJ0cmFjdGlvblxyXG5wcCQxLnJlZ2V4cF9jbGFzc1NldEV4cHJlc3Npb24gPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciByZXN1bHQgPSBDaGFyU2V0T2ssIHN1YlJlc3VsdDtcclxuICBpZiAodGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRSYW5nZShzdGF0ZSkpIDsgZWxzZSBpZiAoc3ViUmVzdWx0ID0gdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kKHN0YXRlKSkge1xyXG4gICAgaWYgKHN1YlJlc3VsdCA9PT0gQ2hhclNldFN0cmluZykgeyByZXN1bHQgPSBDaGFyU2V0U3RyaW5nOyB9XHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc0ludGVyc2VjdGlvblxyXG4gICAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gICAgd2hpbGUgKHN0YXRlLmVhdENoYXJzKFsweDI2LCAweDI2XSAvKiAmJiAqLykpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlLmN1cnJlbnQoKSAhPT0gMHgyNiAvKiAmICovICYmXHJcbiAgICAgICAgKHN1YlJlc3VsdCA9IHRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChzdGF0ZSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChzdWJSZXN1bHQgIT09IENoYXJTZXRTdHJpbmcpIHsgcmVzdWx0ID0gQ2hhclNldE9rOyB9XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgY2hhcmFjdGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICAgIH1cclxuICAgIGlmIChzdGFydCAhPT0gc3RhdGUucG9zKSB7IHJldHVybiByZXN1bHQgfVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTdWJ0cmFjdGlvblxyXG4gICAgd2hpbGUgKHN0YXRlLmVhdENoYXJzKFsweDJELCAweDJEXSAvKiAtLSAqLykpIHtcclxuICAgICAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChzdGF0ZSkpIHsgY29udGludWUgfVxyXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgY2hhcmFjdGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICAgIH1cclxuICAgIGlmIChzdGFydCAhPT0gc3RhdGUucG9zKSB7IHJldHVybiByZXN1bHQgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgY2hhcmFjdGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICB9XHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NVbmlvblxyXG4gIGZvciAoOzspIHtcclxuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldFJhbmdlKHN0YXRlKSkgeyBjb250aW51ZSB9XHJcbiAgICBzdWJSZXN1bHQgPSB0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldE9wZXJhbmQoc3RhdGUpO1xyXG4gICAgaWYgKCFzdWJSZXN1bHQpIHsgcmV0dXJuIHJlc3VsdCB9XHJcbiAgICBpZiAoc3ViUmVzdWx0ID09PSBDaGFyU2V0U3RyaW5nKSB7IHJlc3VsdCA9IENoYXJTZXRTdHJpbmc7IH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1NldFJhbmdlXHJcbnBwJDEucmVnZXhwX2VhdENsYXNzU2V0UmFuZ2UgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcclxuICBpZiAodGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRDaGFyYWN0ZXIoc3RhdGUpKSB7XHJcbiAgICB2YXIgbGVmdCA9IHN0YXRlLmxhc3RJbnRWYWx1ZTtcclxuICAgIGlmIChzdGF0ZS5lYXQoMHgyRCAvKiAtICovKSAmJiB0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldENoYXJhY3RlcihzdGF0ZSkpIHtcclxuICAgICAgdmFyIHJpZ2h0ID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gICAgICBpZiAobGVmdCAhPT0gLTEgJiYgcmlnaHQgIT09IC0xICYmIGxlZnQgPiByaWdodCkge1xyXG4gICAgICAgIHN0YXRlLnJhaXNlKFwiUmFuZ2Ugb3V0IG9mIG9yZGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRPcGVyYW5kXHJcbnBwJDEucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZCA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyKHN0YXRlKSkgeyByZXR1cm4gQ2hhclNldE9rIH1cclxuICByZXR1cm4gdGhpcy5yZWdleHBfZWF0Q2xhc3NTdHJpbmdEaXNqdW5jdGlvbihzdGF0ZSkgfHwgdGhpcy5yZWdleHBfZWF0TmVzdGVkQ2xhc3Moc3RhdGUpXHJcbn07XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1OZXN0ZWRDbGFzc1xyXG5wcCQxLnJlZ2V4cF9lYXROZXN0ZWRDbGFzcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gIGlmIChzdGF0ZS5lYXQoMHg1QiAvKiBbICovKSkge1xyXG4gICAgdmFyIG5lZ2F0ZSA9IHN0YXRlLmVhdCgweDVFIC8qIF4gKi8pO1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucmVnZXhwX2NsYXNzQ29udGVudHMoc3RhdGUpO1xyXG4gICAgaWYgKHN0YXRlLmVhdCgweDVEIC8qIF0gKi8pKSB7XHJcbiAgICAgIGlmIChuZWdhdGUgJiYgcmVzdWx0ID09PSBDaGFyU2V0U3RyaW5nKSB7XHJcbiAgICAgICAgc3RhdGUucmFpc2UoXCJOZWdhdGVkIGNoYXJhY3RlciBjbGFzcyBtYXkgY29udGFpbiBzdHJpbmdzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICBpZiAoc3RhdGUuZWF0KDB4NUMgLyogXFwgKi8pKSB7XHJcbiAgICB2YXIgcmVzdWx0JDEgPSB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZShzdGF0ZSk7XHJcbiAgICBpZiAocmVzdWx0JDEpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCQxXHJcbiAgICB9XHJcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU3RyaW5nRGlzanVuY3Rpb25cclxucHAkMS5yZWdleHBfZWF0Q2xhc3NTdHJpbmdEaXNqdW5jdGlvbiA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xyXG4gIGlmIChzdGF0ZS5lYXRDaGFycyhbMHg1QywgMHg3MV0gLyogXFxxICovKSkge1xyXG4gICAgaWYgKHN0YXRlLmVhdCgweDdCIC8qIHsgKi8pKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLnJlZ2V4cF9jbGFzc1N0cmluZ0Rpc2p1bmN0aW9uQ29udGVudHMoc3RhdGUpO1xyXG4gICAgICBpZiAoc3RhdGUuZWF0KDB4N0QgLyogfSAqLykpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE1ha2UgdGhlIHNhbWUgbWVzc2FnZSBhcyBWOC5cclxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGVzY2FwZVwiKTtcclxuICAgIH1cclxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTdHJpbmdEaXNqdW5jdGlvbkNvbnRlbnRzXHJcbnBwJDEucmVnZXhwX2NsYXNzU3RyaW5nRGlzanVuY3Rpb25Db250ZW50cyA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHRoaXMucmVnZXhwX2NsYXNzU3RyaW5nKHN0YXRlKTtcclxuICB3aGlsZSAoc3RhdGUuZWF0KDB4N0MgLyogfCAqLykpIHtcclxuICAgIGlmICh0aGlzLnJlZ2V4cF9jbGFzc1N0cmluZyhzdGF0ZSkgPT09IENoYXJTZXRTdHJpbmcpIHsgcmVzdWx0ID0gQ2hhclNldFN0cmluZzsgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn07XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1N0cmluZ1xyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1Ob25FbXB0eUNsYXNzU3RyaW5nXHJcbnBwJDEucmVnZXhwX2NsYXNzU3RyaW5nID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY291bnQgPSAwO1xyXG4gIHdoaWxlICh0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldENoYXJhY3RlcihzdGF0ZSkpIHsgY291bnQrKzsgfVxyXG4gIHJldHVybiBjb3VudCA9PT0gMSA/IENoYXJTZXRPayA6IENoYXJTZXRTdHJpbmdcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU2V0Q2hhcmFjdGVyXHJcbnBwJDEucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgaWYgKHN0YXRlLmVhdCgweDVDIC8qIFxcICovKSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJFc2NhcGUoc3RhdGUpIHx8XHJcbiAgICAgIHRoaXMucmVnZXhwX2VhdENsYXNzU2V0UmVzZXJ2ZWRQdW5jdHVhdG9yKHN0YXRlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUuZWF0KDB4NjIgLyogYiAqLykpIHtcclxuICAgICAgc3RhdGUubGFzdEludFZhbHVlID0gMHgwODsgLyogPEJTPiAqL1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudCgpO1xyXG4gIGlmIChjaCA8IDAgfHwgY2ggPT09IHN0YXRlLmxvb2thaGVhZCgpICYmIGlzQ2xhc3NTZXRSZXNlcnZlZERvdWJsZVB1bmN0dWF0b3JDaGFyYWN0ZXIoY2gpKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgaWYgKGlzQ2xhc3NTZXRTeW50YXhDaGFyYWN0ZXIoY2gpKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xyXG4gIHJldHVybiB0cnVlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1NldFJlc2VydmVkRG91YmxlUHVuY3R1YXRvclxyXG5mdW5jdGlvbiBpc0NsYXNzU2V0UmVzZXJ2ZWREb3VibGVQdW5jdHVhdG9yQ2hhcmFjdGVyKGNoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGNoID09PSAweDIxIC8qICEgKi8gfHxcclxuICAgIGNoID49IDB4MjMgLyogIyAqLyAmJiBjaCA8PSAweDI2IC8qICYgKi8gfHxcclxuICAgIGNoID49IDB4MkEgLyogKiAqLyAmJiBjaCA8PSAweDJDIC8qICwgKi8gfHxcclxuICAgIGNoID09PSAweDJFIC8qIC4gKi8gfHxcclxuICAgIGNoID49IDB4M0EgLyogOiAqLyAmJiBjaCA8PSAweDQwIC8qIEAgKi8gfHxcclxuICAgIGNoID09PSAweDVFIC8qIF4gKi8gfHxcclxuICAgIGNoID09PSAweDYwIC8qIGAgKi8gfHxcclxuICAgIGNoID09PSAweDdFIC8qIH4gKi9cclxuICApXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU2V0U3ludGF4Q2hhcmFjdGVyXHJcbmZ1bmN0aW9uIGlzQ2xhc3NTZXRTeW50YXhDaGFyYWN0ZXIoY2gpIHtcclxuICByZXR1cm4gKFxyXG4gICAgY2ggPT09IDB4MjggLyogKCAqLyB8fFxyXG4gICAgY2ggPT09IDB4MjkgLyogKSAqLyB8fFxyXG4gICAgY2ggPT09IDB4MkQgLyogLSAqLyB8fFxyXG4gICAgY2ggPT09IDB4MkYgLyogLyAqLyB8fFxyXG4gICAgY2ggPj0gMHg1QiAvKiBbICovICYmIGNoIDw9IDB4NUQgLyogXSAqLyB8fFxyXG4gICAgY2ggPj0gMHg3QiAvKiB7ICovICYmIGNoIDw9IDB4N0QgLyogfSAqL1xyXG4gIClcclxufVxyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3JcclxucHAkMS5yZWdleHBfZWF0Q2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3IgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcclxuICBpZiAoaXNDbGFzc1NldFJlc2VydmVkUHVuY3R1YXRvcihjaCkpIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xyXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1NldFJlc2VydmVkUHVuY3R1YXRvclxyXG5mdW5jdGlvbiBpc0NsYXNzU2V0UmVzZXJ2ZWRQdW5jdHVhdG9yKGNoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGNoID09PSAweDIxIC8qICEgKi8gfHxcclxuICAgIGNoID09PSAweDIzIC8qICMgKi8gfHxcclxuICAgIGNoID09PSAweDI1IC8qICUgKi8gfHxcclxuICAgIGNoID09PSAweDI2IC8qICYgKi8gfHxcclxuICAgIGNoID09PSAweDJDIC8qICwgKi8gfHxcclxuICAgIGNoID09PSAweDJEIC8qIC0gKi8gfHxcclxuICAgIGNoID49IDB4M0EgLyogOiAqLyAmJiBjaCA8PSAweDNFIC8qID4gKi8gfHxcclxuICAgIGNoID09PSAweDQwIC8qIEAgKi8gfHxcclxuICAgIGNoID09PSAweDYwIC8qIGAgKi8gfHxcclxuICAgIGNoID09PSAweDdFIC8qIH4gKi9cclxuICApXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1DbGFzc0NvbnRyb2xMZXR0ZXJcclxucHAkMS5yZWdleHBfZWF0Q2xhc3NDb250cm9sTGV0dGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgaWYgKGlzRGVjaW1hbERpZ2l0KGNoKSB8fCBjaCA9PT0gMHg1RiAvKiBfICovKSB7XHJcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBjaCAlIDB4MjA7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUhleEVzY2FwZVNlcXVlbmNlXHJcbnBwJDEucmVnZXhwX2VhdEhleEVzY2FwZVNlcXVlbmNlID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgaWYgKHN0YXRlLmVhdCgweDc4IC8qIHggKi8pKSB7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMoc3RhdGUsIDIpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUuc3dpdGNoVSkge1xyXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtRGVjaW1hbERpZ2l0c1xyXG5wcCQxLnJlZ2V4cF9lYXREZWNpbWFsRGlnaXRzID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgdmFyIGNoID0gMDtcclxuICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAwO1xyXG4gIHdoaWxlIChpc0RlY2ltYWxEaWdpdChjaCA9IHN0YXRlLmN1cnJlbnQoKSkpIHtcclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDEwICogc3RhdGUubGFzdEludFZhbHVlICsgKGNoIC0gMHgzMCAvKiAwICovKTtcclxuICAgIHN0YXRlLmFkdmFuY2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlLnBvcyAhPT0gc3RhcnRcclxufTtcclxuZnVuY3Rpb24gaXNEZWNpbWFsRGlnaXQoY2gpIHtcclxuICByZXR1cm4gY2ggPj0gMHgzMCAvKiAwICovICYmIGNoIDw9IDB4MzkgLyogOSAqL1xyXG59XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1IZXhEaWdpdHNcclxucHAkMS5yZWdleHBfZWF0SGV4RGlnaXRzID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgdmFyIGNoID0gMDtcclxuICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAwO1xyXG4gIHdoaWxlIChpc0hleERpZ2l0KGNoID0gc3RhdGUuY3VycmVudCgpKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMTYgKiBzdGF0ZS5sYXN0SW50VmFsdWUgKyBoZXhUb0ludChjaCk7XHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZS5wb3MgIT09IHN0YXJ0XHJcbn07XHJcbmZ1bmN0aW9uIGlzSGV4RGlnaXQoY2gpIHtcclxuICByZXR1cm4gKFxyXG4gICAgKGNoID49IDB4MzAgLyogMCAqLyAmJiBjaCA8PSAweDM5IC8qIDkgKi8pIHx8XHJcbiAgICAoY2ggPj0gMHg0MSAvKiBBICovICYmIGNoIDw9IDB4NDYgLyogRiAqLykgfHxcclxuICAgIChjaCA+PSAweDYxIC8qIGEgKi8gJiYgY2ggPD0gMHg2NiAvKiBmICovKVxyXG4gIClcclxufVxyXG5mdW5jdGlvbiBoZXhUb0ludChjaCkge1xyXG4gIGlmIChjaCA+PSAweDQxIC8qIEEgKi8gJiYgY2ggPD0gMHg0NiAvKiBGICovKSB7XHJcbiAgICByZXR1cm4gMTAgKyAoY2ggLSAweDQxIC8qIEEgKi8pXHJcbiAgfVxyXG4gIGlmIChjaCA+PSAweDYxIC8qIGEgKi8gJiYgY2ggPD0gMHg2NiAvKiBmICovKSB7XHJcbiAgICByZXR1cm4gMTAgKyAoY2ggLSAweDYxIC8qIGEgKi8pXHJcbiAgfVxyXG4gIHJldHVybiBjaCAtIDB4MzAgLyogMCAqL1xyXG59XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1hbm5leEItTGVnYWN5T2N0YWxFc2NhcGVTZXF1ZW5jZVxyXG4vLyBBbGxvd3Mgb25seSAwLTM3NyhvY3RhbCkgaS5lLiAwLTI1NShkZWNpbWFsKS5cclxucHAkMS5yZWdleHBfZWF0TGVnYWN5T2N0YWxFc2NhcGVTZXF1ZW5jZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgaWYgKHRoaXMucmVnZXhwX2VhdE9jdGFsRGlnaXQoc3RhdGUpKSB7XHJcbiAgICB2YXIgbjEgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0T2N0YWxEaWdpdChzdGF0ZSkpIHtcclxuICAgICAgdmFyIG4yID0gc3RhdGUubGFzdEludFZhbHVlO1xyXG4gICAgICBpZiAobjEgPD0gMyAmJiB0aGlzLnJlZ2V4cF9lYXRPY3RhbERpZ2l0KHN0YXRlKSkge1xyXG4gICAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IG4xICogNjQgKyBuMiAqIDggKyBzdGF0ZS5sYXN0SW50VmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUubGFzdEludFZhbHVlID0gbjEgKiA4ICsgbjI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IG4xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn07XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1PY3RhbERpZ2l0XHJcbnBwJDEucmVnZXhwX2VhdE9jdGFsRGlnaXQgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcclxuICBpZiAoaXNPY3RhbERpZ2l0KGNoKSkge1xyXG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2ggLSAweDMwOyAvKiAwICovXHJcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAwO1xyXG4gIHJldHVybiBmYWxzZVxyXG59O1xyXG5mdW5jdGlvbiBpc09jdGFsRGlnaXQoY2gpIHtcclxuICByZXR1cm4gY2ggPj0gMHgzMCAvKiAwICovICYmIGNoIDw9IDB4MzcgLyogNyAqL1xyXG59XHJcblxyXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1IZXg0RGlnaXRzXHJcbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUhleERpZ2l0XHJcbi8vIEFuZCBIZXhEaWdpdCBIZXhEaWdpdCBpbiBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1IZXhFc2NhcGVTZXF1ZW5jZVxyXG5wcCQxLnJlZ2V4cF9lYXRGaXhlZEhleERpZ2l0cyA9IGZ1bmN0aW9uKHN0YXRlLCBsZW5ndGgpIHtcclxuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XHJcbiAgc3RhdGUubGFzdEludFZhbHVlID0gMDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XHJcbiAgICBpZiAoIWlzSGV4RGlnaXQoY2gpKSB7XHJcbiAgICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDE2ICogc3RhdGUubGFzdEludFZhbHVlICsgaGV4VG9JbnQoY2gpO1xyXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59O1xyXG5cclxuLy8gT2JqZWN0IHR5cGUgdXNlZCB0byByZXByZXNlbnQgdG9rZW5zLiBOb3RlIHRoYXQgbm9ybWFsbHksIHRva2Vuc1xyXG4vLyBzaW1wbHkgZXhpc3QgYXMgcHJvcGVydGllcyBvbiB0aGUgcGFyc2VyIG9iamVjdC4gVGhpcyBpcyBvbmx5XHJcbi8vIHVzZWQgZm9yIHRoZSBvblRva2VuIGNhbGxiYWNrIGFuZCB0aGUgZXh0ZXJuYWwgdG9rZW5pemVyLlxyXG5cclxudmFyIFRva2VuID0gZnVuY3Rpb24gVG9rZW4ocCkge1xyXG4gIHRoaXMudHlwZSA9IHAudHlwZTtcclxuICB0aGlzLnZhbHVlID0gcC52YWx1ZTtcclxuICB0aGlzLnN0YXJ0ID0gcC5zdGFydDtcclxuICB0aGlzLmVuZCA9IHAuZW5kO1xyXG4gIGlmIChwLm9wdGlvbnMubG9jYXRpb25zKVxyXG4gICAgeyB0aGlzLmxvYyA9IG5ldyBTb3VyY2VMb2NhdGlvbihwLCBwLnN0YXJ0TG9jLCBwLmVuZExvYyk7IH1cclxuICBpZiAocC5vcHRpb25zLnJhbmdlcylcclxuICAgIHsgdGhpcy5yYW5nZSA9IFtwLnN0YXJ0LCBwLmVuZF07IH1cclxufTtcclxuXHJcbi8vICMjIFRva2VuaXplclxyXG5cclxudmFyIHBwID0gUGFyc2VyLnByb3RvdHlwZTtcclxuXHJcbi8vIE1vdmUgdG8gdGhlIG5leHQgdG9rZW5cclxuXHJcbnBwLm5leHQgPSBmdW5jdGlvbihpZ25vcmVFc2NhcGVTZXF1ZW5jZUluS2V5d29yZCkge1xyXG4gIGlmICghaWdub3JlRXNjYXBlU2VxdWVuY2VJbktleXdvcmQgJiYgdGhpcy50eXBlLmtleXdvcmQgJiYgdGhpcy5jb250YWluc0VzYylcclxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIFwiRXNjYXBlIHNlcXVlbmNlIGluIGtleXdvcmQgXCIgKyB0aGlzLnR5cGUua2V5d29yZCk7IH1cclxuICBpZiAodGhpcy5vcHRpb25zLm9uVG9rZW4pXHJcbiAgICB7IHRoaXMub3B0aW9ucy5vblRva2VuKG5ldyBUb2tlbih0aGlzKSk7IH1cclxuXHJcbiAgdGhpcy5sYXN0VG9rRW5kID0gdGhpcy5lbmQ7XHJcbiAgdGhpcy5sYXN0VG9rU3RhcnQgPSB0aGlzLnN0YXJ0O1xyXG4gIHRoaXMubGFzdFRva0VuZExvYyA9IHRoaXMuZW5kTG9jO1xyXG4gIHRoaXMubGFzdFRva1N0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcclxuICB0aGlzLm5leHRUb2tlbigpO1xyXG59O1xyXG5cclxucHAuZ2V0VG9rZW4gPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLm5leHQoKTtcclxuICByZXR1cm4gbmV3IFRva2VuKHRoaXMpXHJcbn07XHJcblxyXG4vLyBJZiB3ZSdyZSBpbiBhbiBFUzYgZW52aXJvbm1lbnQsIG1ha2UgcGFyc2VycyBpdGVyYWJsZVxyXG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICB7IHBwW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGlzJDEkMSA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMkMSQxLmdldFRva2VuKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRvbmU6IHRva2VuLnR5cGUgPT09IHR5cGVzJDEuZW9mLFxyXG4gICAgICAgICAgdmFsdWU6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTsgfVxyXG5cclxuLy8gVG9nZ2xlIHN0cmljdCBtb2RlLiBSZS1yZWFkcyB0aGUgbmV4dCBudW1iZXIgb3Igc3RyaW5nIHRvIHBsZWFzZVxyXG4vLyBwZWRhbnRpYyB0ZXN0cyAoYFwidXNlIHN0cmljdFwiOyAwMTA7YCBzaG91bGQgZmFpbCkuXHJcblxyXG4vLyBSZWFkIGEgc2luZ2xlIHRva2VuLCB1cGRhdGluZyB0aGUgcGFyc2VyIG9iamVjdCdzIHRva2VuLXJlbGF0ZWRcclxuLy8gcHJvcGVydGllcy5cclxuXHJcbnBwLm5leHRUb2tlbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjdXJDb250ZXh0ID0gdGhpcy5jdXJDb250ZXh0KCk7XHJcbiAgaWYgKCFjdXJDb250ZXh0IHx8ICFjdXJDb250ZXh0LnByZXNlcnZlU3BhY2UpIHsgdGhpcy5za2lwU3BhY2UoKTsgfVxyXG5cclxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHsgdGhpcy5zdGFydExvYyA9IHRoaXMuY3VyUG9zaXRpb24oKTsgfVxyXG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmlucHV0Lmxlbmd0aCkgeyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmVvZikgfVxyXG5cclxuICBpZiAoY3VyQ29udGV4dC5vdmVycmlkZSkgeyByZXR1cm4gY3VyQ29udGV4dC5vdmVycmlkZSh0aGlzKSB9XHJcbiAgZWxzZSB7IHRoaXMucmVhZFRva2VuKHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKSk7IH1cclxufTtcclxuXHJcbnBwLnJlYWRUb2tlbiA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAvLyBJZGVudGlmaWVyIG9yIGtleXdvcmQuICdcXHVYWFhYJyBzZXF1ZW5jZXMgYXJlIGFsbG93ZWQgaW5cclxuICAvLyBpZGVudGlmaWVycywgc28gJ1xcJyBhbHNvIGRpc3BhdGNoZXMgdG8gdGhhdC5cclxuICBpZiAoaXNJZGVudGlmaWVyU3RhcnQoY29kZSwgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHx8IGNvZGUgPT09IDkyIC8qICdcXCcgKi8pXHJcbiAgICB7IHJldHVybiB0aGlzLnJlYWRXb3JkKCkgfVxyXG5cclxuICByZXR1cm4gdGhpcy5nZXRUb2tlbkZyb21Db2RlKGNvZGUpXHJcbn07XHJcblxyXG5wcC5mdWxsQ2hhckNvZGVBdFBvcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjb2RlID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcclxuICBpZiAoY29kZSA8PSAweGQ3ZmYgfHwgY29kZSA+PSAweGRjMDApIHsgcmV0dXJuIGNvZGUgfVxyXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XHJcbiAgcmV0dXJuIG5leHQgPD0gMHhkYmZmIHx8IG5leHQgPj0gMHhlMDAwID8gY29kZSA6IChjb2RlIDw8IDEwKSArIG5leHQgLSAweDM1ZmRjMDBcclxufTtcclxuXHJcbnBwLnNraXBCbG9ja0NvbW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgc3RhcnRMb2MgPSB0aGlzLm9wdGlvbnMub25Db21tZW50ICYmIHRoaXMuY3VyUG9zaXRpb24oKTtcclxuICB2YXIgc3RhcnQgPSB0aGlzLnBvcywgZW5kID0gdGhpcy5pbnB1dC5pbmRleE9mKFwiKi9cIiwgdGhpcy5wb3MgKz0gMik7XHJcbiAgaWYgKGVuZCA9PT0gLTEpIHsgdGhpcy5yYWlzZSh0aGlzLnBvcyAtIDIsIFwiVW50ZXJtaW5hdGVkIGNvbW1lbnRcIik7IH1cclxuICB0aGlzLnBvcyA9IGVuZCArIDI7XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHtcclxuICAgIGZvciAodmFyIG5leHRCcmVhayA9ICh2b2lkIDApLCBwb3MgPSBzdGFydDsgKG5leHRCcmVhayA9IG5leHRMaW5lQnJlYWsodGhpcy5pbnB1dCwgcG9zLCB0aGlzLnBvcykpID4gLTE7KSB7XHJcbiAgICAgICsrdGhpcy5jdXJMaW5lO1xyXG4gICAgICBwb3MgPSB0aGlzLmxpbmVTdGFydCA9IG5leHRCcmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5vbkNvbW1lbnQpXHJcbiAgICB7IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQodHJ1ZSwgdGhpcy5pbnB1dC5zbGljZShzdGFydCArIDIsIGVuZCksIHN0YXJ0LCB0aGlzLnBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2MsIHRoaXMuY3VyUG9zaXRpb24oKSk7IH1cclxufTtcclxuXHJcbnBwLnNraXBMaW5lQ29tbWVudCA9IGZ1bmN0aW9uKHN0YXJ0U2tpcCkge1xyXG4gIHZhciBzdGFydCA9IHRoaXMucG9zO1xyXG4gIHZhciBzdGFydExvYyA9IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQgJiYgdGhpcy5jdXJQb3NpdGlvbigpO1xyXG4gIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArPSBzdGFydFNraXApO1xyXG4gIHdoaWxlICh0aGlzLnBvcyA8IHRoaXMuaW5wdXQubGVuZ3RoICYmICFpc05ld0xpbmUoY2gpKSB7XHJcbiAgICBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCgrK3RoaXMucG9zKTtcclxuICB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5vbkNvbW1lbnQpXHJcbiAgICB7IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQoZmFsc2UsIHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQgKyBzdGFydFNraXAsIHRoaXMucG9zKSwgc3RhcnQsIHRoaXMucG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydExvYywgdGhpcy5jdXJQb3NpdGlvbigpKTsgfVxyXG59O1xyXG5cclxuLy8gQ2FsbGVkIGF0IHRoZSBzdGFydCBvZiB0aGUgcGFyc2UgYW5kIGFmdGVyIGV2ZXJ5IHRva2VuLiBTa2lwc1xyXG4vLyB3aGl0ZXNwYWNlIGFuZCBjb21tZW50cywgYW5kLlxyXG5cclxucHAuc2tpcFNwYWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgbG9vcDogd2hpbGUgKHRoaXMucG9zIDwgdGhpcy5pbnB1dC5sZW5ndGgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XHJcbiAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICBjYXNlIDMyOiBjYXNlIDE2MDogLy8gJyAnXHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIDEzOlxyXG4gICAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT09IDEwKSB7XHJcbiAgICAgICAgKyt0aGlzLnBvcztcclxuICAgICAgfVxyXG4gICAgY2FzZSAxMDogY2FzZSA4MjMyOiBjYXNlIDgyMzM6XHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9jYXRpb25zKSB7XHJcbiAgICAgICAgKyt0aGlzLmN1ckxpbmU7XHJcbiAgICAgICAgdGhpcy5saW5lU3RhcnQgPSB0aGlzLnBvcztcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSA0NzogLy8gJy8nXHJcbiAgICAgIHN3aXRjaCAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkpIHtcclxuICAgICAgY2FzZSA0MjogLy8gJyonXHJcbiAgICAgICAgdGhpcy5za2lwQmxvY2tDb21tZW50KCk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSA0NzpcclxuICAgICAgICB0aGlzLnNraXBMaW5lQ29tbWVudCgyKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrIGxvb3BcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaWYgKGNoID4gOCAmJiBjaCA8IDE0IHx8IGNoID49IDU3NjAgJiYgbm9uQVNDSUl3aGl0ZXNwYWNlLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjaCkpKSB7XHJcbiAgICAgICAgKyt0aGlzLnBvcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicmVhayBsb29wXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBDYWxsZWQgYXQgdGhlIGVuZCBvZiBldmVyeSB0b2tlbi4gU2V0cyBgZW5kYCwgYHZhbGAsIGFuZFxyXG4vLyBtYWludGFpbnMgYGNvbnRleHRgIGFuZCBgZXhwckFsbG93ZWRgLCBhbmQgc2tpcHMgdGhlIHNwYWNlIGFmdGVyXHJcbi8vIHRoZSB0b2tlbiwgc28gdGhhdCB0aGUgbmV4dCBvbmUncyBgc3RhcnRgIHdpbGwgcG9pbnQgYXQgdGhlXHJcbi8vIHJpZ2h0IHBvc2l0aW9uLlxyXG5cclxucHAuZmluaXNoVG9rZW4gPSBmdW5jdGlvbih0eXBlLCB2YWwpIHtcclxuICB0aGlzLmVuZCA9IHRoaXMucG9zO1xyXG4gIGlmICh0aGlzLm9wdGlvbnMubG9jYXRpb25zKSB7IHRoaXMuZW5kTG9jID0gdGhpcy5jdXJQb3NpdGlvbigpOyB9XHJcbiAgdmFyIHByZXZUeXBlID0gdGhpcy50eXBlO1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbDtcclxuXHJcbiAgdGhpcy51cGRhdGVDb250ZXh0KHByZXZUeXBlKTtcclxufTtcclxuXHJcbi8vICMjIyBUb2tlbiByZWFkaW5nXHJcblxyXG4vLyBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBmZXRjaCB0aGUgbmV4dCB0b2tlbi4gSXRcclxuLy8gaXMgc29tZXdoYXQgb2JzY3VyZSwgYmVjYXVzZSBpdCB3b3JrcyBpbiBjaGFyYWN0ZXIgY29kZXMgcmF0aGVyXHJcbi8vIHRoYW4gY2hhcmFjdGVycywgYW5kIGJlY2F1c2Ugb3BlcmF0b3IgcGFyc2luZyBoYXMgYmVlbiBpbmxpbmVkXHJcbi8vIGludG8gaXQuXHJcbi8vXHJcbi8vIEFsbCBpbiB0aGUgbmFtZSBvZiBzcGVlZC5cclxuLy9cclxucHAucmVhZFRva2VuX2RvdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XHJcbiAgaWYgKG5leHQgPj0gNDggJiYgbmV4dCA8PSA1NykgeyByZXR1cm4gdGhpcy5yZWFkTnVtYmVyKHRydWUpIH1cclxuICB2YXIgbmV4dDIgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKTtcclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgbmV4dCA9PT0gNDYgJiYgbmV4dDIgPT09IDQ2KSB7IC8vIDQ2ID0gZG90ICcuJ1xyXG4gICAgdGhpcy5wb3MgKz0gMztcclxuICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuZWxsaXBzaXMpXHJcbiAgfSBlbHNlIHtcclxuICAgICsrdGhpcy5wb3M7XHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmRvdClcclxuICB9XHJcbn07XHJcblxyXG5wcC5yZWFkVG9rZW5fc2xhc2ggPSBmdW5jdGlvbigpIHsgLy8gJy8nXHJcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcclxuICBpZiAodGhpcy5leHByQWxsb3dlZCkgeyArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5yZWFkUmVnZXhwKCkgfVxyXG4gIGlmIChuZXh0ID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMikgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuc2xhc2gsIDEpXHJcbn07XHJcblxyXG5wcC5yZWFkVG9rZW5fbXVsdF9tb2R1bG9fZXhwID0gZnVuY3Rpb24oY29kZSkgeyAvLyAnJSonXHJcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcclxuICB2YXIgc2l6ZSA9IDE7XHJcbiAgdmFyIHRva2VudHlwZSA9IGNvZGUgPT09IDQyID8gdHlwZXMkMS5zdGFyIDogdHlwZXMkMS5tb2R1bG87XHJcblxyXG4gIC8vIGV4cG9uZW50aWF0aW9uIG9wZXJhdG9yICoqIGFuZCAqKj1cclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDcgJiYgY29kZSA9PT0gNDIgJiYgbmV4dCA9PT0gNDIpIHtcclxuICAgICsrc2l6ZTtcclxuICAgIHRva2VudHlwZSA9IHR5cGVzJDEuc3RhcnN0YXI7XHJcbiAgICBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMik7XHJcbiAgfVxyXG5cclxuICBpZiAobmV4dCA9PT0gNjEpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5hc3NpZ24sIHNpemUgKyAxKSB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoT3AodG9rZW50eXBlLCBzaXplKVxyXG59O1xyXG5cclxucHAucmVhZFRva2VuX3BpcGVfYW1wID0gZnVuY3Rpb24oY29kZSkgeyAvLyAnfCYnXHJcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcclxuICBpZiAobmV4dCA9PT0gY29kZSkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMikge1xyXG4gICAgICB2YXIgbmV4dDIgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKTtcclxuICAgICAgaWYgKG5leHQyID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMykgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AoY29kZSA9PT0gMTI0ID8gdHlwZXMkMS5sb2dpY2FsT1IgOiB0eXBlcyQxLmxvZ2ljYWxBTkQsIDIpXHJcbiAgfVxyXG4gIGlmIChuZXh0ID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMikgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKGNvZGUgPT09IDEyNCA/IHR5cGVzJDEuYml0d2lzZU9SIDogdHlwZXMkMS5iaXR3aXNlQU5ELCAxKVxyXG59O1xyXG5cclxucHAucmVhZFRva2VuX2NhcmV0ID0gZnVuY3Rpb24oKSB7IC8vICdeJ1xyXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XHJcbiAgaWYgKG5leHQgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCAyKSB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5iaXR3aXNlWE9SLCAxKVxyXG59O1xyXG5cclxucHAucmVhZFRva2VuX3BsdXNfbWluID0gZnVuY3Rpb24oY29kZSkgeyAvLyAnKy0nXHJcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcclxuICBpZiAobmV4dCA9PT0gY29kZSkge1xyXG4gICAgaWYgKG5leHQgPT09IDQ1ICYmICF0aGlzLmluTW9kdWxlICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpID09PSA2MiAmJlxyXG4gICAgICAgICh0aGlzLmxhc3RUb2tFbmQgPT09IDAgfHwgbGluZUJyZWFrLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsIHRoaXMucG9zKSkpKSB7XHJcbiAgICAgIC8vIEEgYC0tPmAgbGluZSBjb21tZW50XHJcbiAgICAgIHRoaXMuc2tpcExpbmVDb21tZW50KDMpO1xyXG4gICAgICB0aGlzLnNraXBTcGFjZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0VG9rZW4oKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5pbmNEZWMsIDIpXHJcbiAgfVxyXG4gIGlmIChuZXh0ID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMikgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEucGx1c01pbiwgMSlcclxufTtcclxuXHJcbnBwLnJlYWRUb2tlbl9sdF9ndCA9IGZ1bmN0aW9uKGNvZGUpIHsgLy8gJzw+J1xyXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XHJcbiAgdmFyIHNpemUgPSAxO1xyXG4gIGlmIChuZXh0ID09PSBjb2RlKSB7XHJcbiAgICBzaXplID0gY29kZSA9PT0gNjIgJiYgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMikgPT09IDYyID8gMyA6IDI7XHJcbiAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgc2l6ZSkgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCBzaXplICsgMSkgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5iaXRTaGlmdCwgc2l6ZSlcclxuICB9XHJcbiAgaWYgKG5leHQgPT09IDMzICYmIGNvZGUgPT09IDYwICYmICF0aGlzLmluTW9kdWxlICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpID09PSA0NSAmJlxyXG4gICAgICB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAzKSA9PT0gNDUpIHtcclxuICAgIC8vIGA8IS0tYCwgYW4gWE1MLXN0eWxlIGNvbW1lbnQgdGhhdCBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYSBsaW5lIGNvbW1lbnRcclxuICAgIHRoaXMuc2tpcExpbmVDb21tZW50KDQpO1xyXG4gICAgdGhpcy5za2lwU3BhY2UoKTtcclxuICAgIHJldHVybiB0aGlzLm5leHRUb2tlbigpXHJcbiAgfVxyXG4gIGlmIChuZXh0ID09PSA2MSkgeyBzaXplID0gMjsgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEucmVsYXRpb25hbCwgc2l6ZSlcclxufTtcclxuXHJcbnBwLnJlYWRUb2tlbl9lcV9leGNsID0gZnVuY3Rpb24oY29kZSkgeyAvLyAnPSEnXHJcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcclxuICBpZiAobmV4dCA9PT0gNjEpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5lcXVhbGl0eSwgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMikgPT09IDYxID8gMyA6IDIpIH1cclxuICBpZiAoY29kZSA9PT0gNjEgJiYgbmV4dCA9PT0gNjIgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHsgLy8gJz0+J1xyXG4gICAgdGhpcy5wb3MgKz0gMjtcclxuICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuYXJyb3cpXHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKGNvZGUgPT09IDYxID8gdHlwZXMkMS5lcSA6IHR5cGVzJDEucHJlZml4LCAxKVxyXG59O1xyXG5cclxucHAucmVhZFRva2VuX3F1ZXN0aW9uID0gZnVuY3Rpb24oKSB7IC8vICc/J1xyXG4gIHZhciBlY21hVmVyc2lvbiA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjtcclxuICBpZiAoZWNtYVZlcnNpb24gPj0gMTEpIHtcclxuICAgIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XHJcbiAgICBpZiAobmV4dCA9PT0gNDYpIHtcclxuICAgICAgdmFyIG5leHQyID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMik7XHJcbiAgICAgIGlmIChuZXh0MiA8IDQ4IHx8IG5leHQyID4gNTcpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5xdWVzdGlvbkRvdCwgMikgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgPT09IDYzKSB7XHJcbiAgICAgIGlmIChlY21hVmVyc2lvbiA+PSAxMikge1xyXG4gICAgICAgIHZhciBuZXh0MiQxID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMik7XHJcbiAgICAgICAgaWYgKG5leHQyJDEgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCAzKSB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5jb2FsZXNjZSwgMilcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5xdWVzdGlvbiwgMSlcclxufTtcclxuXHJcbnBwLnJlYWRUb2tlbl9udW1iZXJTaWduID0gZnVuY3Rpb24oKSB7IC8vICcjJ1xyXG4gIHZhciBlY21hVmVyc2lvbiA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjtcclxuICB2YXIgY29kZSA9IDM1OyAvLyAnIydcclxuICBpZiAoZWNtYVZlcnNpb24gPj0gMTMpIHtcclxuICAgICsrdGhpcy5wb3M7XHJcbiAgICBjb2RlID0gdGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpO1xyXG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KGNvZGUsIHRydWUpIHx8IGNvZGUgPT09IDkyIC8qICdcXCcgKi8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5wcml2YXRlSWQsIHRoaXMucmVhZFdvcmQxKCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLnJhaXNlKHRoaXMucG9zLCBcIlVuZXhwZWN0ZWQgY2hhcmFjdGVyICdcIiArIGNvZGVQb2ludFRvU3RyaW5nKGNvZGUpICsgXCInXCIpO1xyXG59O1xyXG5cclxucHAuZ2V0VG9rZW5Gcm9tQ29kZSA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAvLyBUaGUgaW50ZXJwcmV0YXRpb24gb2YgYSBkb3QgZGVwZW5kcyBvbiB3aGV0aGVyIGl0IGlzIGZvbGxvd2VkXHJcbiAgLy8gYnkgYSBkaWdpdCBvciBhbm90aGVyIHR3byBkb3RzLlxyXG4gIGNhc2UgNDY6IC8vICcuJ1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX2RvdCgpXHJcblxyXG4gIC8vIFB1bmN0dWF0aW9uIHRva2Vucy5cclxuICBjYXNlIDQwOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnBhcmVuTClcclxuICBjYXNlIDQxOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnBhcmVuUilcclxuICBjYXNlIDU5OiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnNlbWkpXHJcbiAgY2FzZSA0NDogKyt0aGlzLnBvczsgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5jb21tYSlcclxuICBjYXNlIDkxOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJyYWNrZXRMKVxyXG4gIGNhc2UgOTM6ICsrdGhpcy5wb3M7IHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuYnJhY2tldFIpXHJcbiAgY2FzZSAxMjM6ICsrdGhpcy5wb3M7IHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuYnJhY2VMKVxyXG4gIGNhc2UgMTI1OiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJyYWNlUilcclxuICBjYXNlIDU4OiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmNvbG9uKVxyXG5cclxuICBjYXNlIDk2OiAvLyAnYCdcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA2KSB7IGJyZWFrIH1cclxuICAgICsrdGhpcy5wb3M7XHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJhY2tRdW90ZSlcclxuXHJcbiAgY2FzZSA0ODogLy8gJzAnXHJcbiAgICB2YXIgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpO1xyXG4gICAgaWYgKG5leHQgPT09IDEyMCB8fCBuZXh0ID09PSA4OCkgeyByZXR1cm4gdGhpcy5yZWFkUmFkaXhOdW1iZXIoMTYpIH0gLy8gJzB4JywgJzBYJyAtIGhleCBudW1iZXJcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xyXG4gICAgICBpZiAobmV4dCA9PT0gMTExIHx8IG5leHQgPT09IDc5KSB7IHJldHVybiB0aGlzLnJlYWRSYWRpeE51bWJlcig4KSB9IC8vICcwbycsICcwTycgLSBvY3RhbCBudW1iZXJcclxuICAgICAgaWYgKG5leHQgPT09IDk4IHx8IG5leHQgPT09IDY2KSB7IHJldHVybiB0aGlzLnJlYWRSYWRpeE51bWJlcigyKSB9IC8vICcwYicsICcwQicgLSBiaW5hcnkgbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gIC8vIEFueXRoaW5nIGVsc2UgYmVnaW5uaW5nIHdpdGggYSBkaWdpdCBpcyBhbiBpbnRlZ2VyLCBvY3RhbFxyXG4gIC8vIG51bWJlciwgb3IgZmxvYXQuXHJcbiAgY2FzZSA0OTogY2FzZSA1MDogY2FzZSA1MTogY2FzZSA1MjogY2FzZSA1MzogY2FzZSA1NDogY2FzZSA1NTogY2FzZSA1NjogY2FzZSA1NzogLy8gMS05XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkTnVtYmVyKGZhbHNlKVxyXG5cclxuICAvLyBRdW90ZXMgcHJvZHVjZSBzdHJpbmdzLlxyXG4gIGNhc2UgMzQ6IGNhc2UgMzk6IC8vICdcIicsIFwiJ1wiXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkU3RyaW5nKGNvZGUpXHJcblxyXG4gIC8vIE9wZXJhdG9ycyBhcmUgcGFyc2VkIGlubGluZSBpbiB0aW55IHN0YXRlIG1hY2hpbmVzLiAnPScgKDYxKSBpc1xyXG4gIC8vIG9mdGVuIHJlZmVycmVkIHRvLiBgZmluaXNoT3BgIHNpbXBseSBza2lwcyB0aGUgYW1vdW50IG9mXHJcbiAgLy8gY2hhcmFjdGVycyBpdCBpcyBnaXZlbiBhcyBzZWNvbmQgYXJndW1lbnQsIGFuZCByZXR1cm5zIGEgdG9rZW5cclxuICAvLyBvZiB0aGUgdHlwZSBnaXZlbiBieSBpdHMgZmlyc3QgYXJndW1lbnQuXHJcbiAgY2FzZSA0NzogLy8gJy8nXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fc2xhc2goKVxyXG5cclxuICBjYXNlIDM3OiBjYXNlIDQyOiAvLyAnJSonXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fbXVsdF9tb2R1bG9fZXhwKGNvZGUpXHJcblxyXG4gIGNhc2UgMTI0OiBjYXNlIDM4OiAvLyAnfCYnXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fcGlwZV9hbXAoY29kZSlcclxuXHJcbiAgY2FzZSA5NDogLy8gJ14nXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fY2FyZXQoKVxyXG5cclxuICBjYXNlIDQzOiBjYXNlIDQ1OiAvLyAnKy0nXHJcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fcGx1c19taW4oY29kZSlcclxuXHJcbiAgY2FzZSA2MDogY2FzZSA2MjogLy8gJzw+J1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX2x0X2d0KGNvZGUpXHJcblxyXG4gIGNhc2UgNjE6IGNhc2UgMzM6IC8vICc9ISdcclxuICAgIHJldHVybiB0aGlzLnJlYWRUb2tlbl9lcV9leGNsKGNvZGUpXHJcblxyXG4gIGNhc2UgNjM6IC8vICc/J1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX3F1ZXN0aW9uKClcclxuXHJcbiAgY2FzZSAxMjY6IC8vICd+J1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5wcmVmaXgsIDEpXHJcblxyXG4gIGNhc2UgMzU6IC8vICcjJ1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX251bWJlclNpZ24oKVxyXG4gIH1cclxuXHJcbiAgdGhpcy5yYWlzZSh0aGlzLnBvcywgXCJVbmV4cGVjdGVkIGNoYXJhY3RlciAnXCIgKyBjb2RlUG9pbnRUb1N0cmluZyhjb2RlKSArIFwiJ1wiKTtcclxufTtcclxuXHJcbnBwLmZpbmlzaE9wID0gZnVuY3Rpb24odHlwZSwgc2l6ZSkge1xyXG4gIHZhciBzdHIgPSB0aGlzLmlucHV0LnNsaWNlKHRoaXMucG9zLCB0aGlzLnBvcyArIHNpemUpO1xyXG4gIHRoaXMucG9zICs9IHNpemU7XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZSwgc3RyKVxyXG59O1xyXG5cclxucHAucmVhZFJlZ2V4cCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBlc2NhcGVkLCBpbkNsYXNzLCBzdGFydCA9IHRoaXMucG9zO1xyXG4gIGZvciAoOzspIHtcclxuICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmlucHV0Lmxlbmd0aCkgeyB0aGlzLnJhaXNlKHN0YXJ0LCBcIlVudGVybWluYXRlZCByZWd1bGFyIGV4cHJlc3Npb25cIik7IH1cclxuICAgIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckF0KHRoaXMucG9zKTtcclxuICAgIGlmIChsaW5lQnJlYWsudGVzdChjaCkpIHsgdGhpcy5yYWlzZShzdGFydCwgXCJVbnRlcm1pbmF0ZWQgcmVndWxhciBleHByZXNzaW9uXCIpOyB9XHJcbiAgICBpZiAoIWVzY2FwZWQpIHtcclxuICAgICAgaWYgKGNoID09PSBcIltcIikgeyBpbkNsYXNzID0gdHJ1ZTsgfVxyXG4gICAgICBlbHNlIGlmIChjaCA9PT0gXCJdXCIgJiYgaW5DbGFzcykgeyBpbkNsYXNzID0gZmFsc2U7IH1cclxuICAgICAgZWxzZSBpZiAoY2ggPT09IFwiL1wiICYmICFpbkNsYXNzKSB7IGJyZWFrIH1cclxuICAgICAgZXNjYXBlZCA9IGNoID09PSBcIlxcXFxcIjtcclxuICAgIH0gZWxzZSB7IGVzY2FwZWQgPSBmYWxzZTsgfVxyXG4gICAgKyt0aGlzLnBvcztcclxuICB9XHJcbiAgdmFyIHBhdHRlcm4gPSB0aGlzLmlucHV0LnNsaWNlKHN0YXJ0LCB0aGlzLnBvcyk7XHJcbiAgKyt0aGlzLnBvcztcclxuICB2YXIgZmxhZ3NTdGFydCA9IHRoaXMucG9zO1xyXG4gIHZhciBmbGFncyA9IHRoaXMucmVhZFdvcmQxKCk7XHJcbiAgaWYgKHRoaXMuY29udGFpbnNFc2MpIHsgdGhpcy51bmV4cGVjdGVkKGZsYWdzU3RhcnQpOyB9XHJcblxyXG4gIC8vIFZhbGlkYXRlIHBhdHRlcm5cclxuICB2YXIgc3RhdGUgPSB0aGlzLnJlZ2V4cFN0YXRlIHx8ICh0aGlzLnJlZ2V4cFN0YXRlID0gbmV3IFJlZ0V4cFZhbGlkYXRpb25TdGF0ZSh0aGlzKSk7XHJcbiAgc3RhdGUucmVzZXQoc3RhcnQsIHBhdHRlcm4sIGZsYWdzKTtcclxuICB0aGlzLnZhbGlkYXRlUmVnRXhwRmxhZ3Moc3RhdGUpO1xyXG4gIHRoaXMudmFsaWRhdGVSZWdFeHBQYXR0ZXJuKHN0YXRlKTtcclxuXHJcbiAgLy8gQ3JlYXRlIExpdGVyYWwjdmFsdWUgcHJvcGVydHkgdmFsdWUuXHJcbiAgdmFyIHZhbHVlID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgdmFsdWUgPSBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBFU1RyZWUgcmVxdWlyZXMgbnVsbCBpZiBpdCBmYWlsZWQgdG8gaW5zdGFudGlhdGUgUmVnRXhwIG9iamVjdC5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyZWUvZXN0cmVlL2Jsb2IvYTI3MDAzYWRmNGZkN2JmYWQ0NGRlOWNlZjM3MmEyZWFjZDUyN2IxYy9lczUubWQjcmVnZXhwbGl0ZXJhbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5yZWdleHAsIHtwYXR0ZXJuOiBwYXR0ZXJuLCBmbGFnczogZmxhZ3MsIHZhbHVlOiB2YWx1ZX0pXHJcbn07XHJcblxyXG4vLyBSZWFkIGFuIGludGVnZXIgaW4gdGhlIGdpdmVuIHJhZGl4LiBSZXR1cm4gbnVsbCBpZiB6ZXJvIGRpZ2l0c1xyXG4vLyB3ZXJlIHJlYWQsIHRoZSBpbnRlZ2VyIHZhbHVlIG90aGVyd2lzZS4gV2hlbiBgbGVuYCBpcyBnaXZlbiwgdGhpc1xyXG4vLyB3aWxsIHJldHVybiBgbnVsbGAgdW5sZXNzIHRoZSBpbnRlZ2VyIGhhcyBleGFjdGx5IGBsZW5gIGRpZ2l0cy5cclxuXHJcbnBwLnJlYWRJbnQgPSBmdW5jdGlvbihyYWRpeCwgbGVuLCBtYXliZUxlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwpIHtcclxuICAvLyBgbGVuYCBpcyB1c2VkIGZvciBjaGFyYWN0ZXIgZXNjYXBlIHNlcXVlbmNlcy4gSW4gdGhhdCBjYXNlLCBkaXNhbGxvdyBzZXBhcmF0b3JzLlxyXG4gIHZhciBhbGxvd1NlcGFyYXRvcnMgPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTIgJiYgbGVuID09PSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGBtYXliZUxlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWxgIGlzIHRydWUgaWYgaXQgZG9lc24ndCBoYXZlIHByZWZpeCAoMHgsMG8sMGIpXHJcbiAgLy8gYW5kIGlzbid0IGZyYWN0aW9uIHBhcnQgbm9yIGV4cG9uZW50IHBhcnQuIEluIHRoYXQgY2FzZSwgaWYgdGhlIGZpcnN0IGRpZ2l0XHJcbiAgLy8gaXMgemVybyB0aGVuIGRpc2FsbG93IHNlcGFyYXRvcnMuXHJcbiAgdmFyIGlzTGVnYWN5T2N0YWxOdW1lcmljTGl0ZXJhbCA9IG1heWJlTGVnYWN5T2N0YWxOdW1lcmljTGl0ZXJhbCAmJiB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09PSA0ODtcclxuXHJcbiAgdmFyIHN0YXJ0ID0gdGhpcy5wb3MsIHRvdGFsID0gMCwgbGFzdENvZGUgPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwLCBlID0gbGVuID09IG51bGwgPyBJbmZpbml0eSA6IGxlbjsgaSA8IGU7ICsraSwgKyt0aGlzLnBvcykge1xyXG4gICAgdmFyIGNvZGUgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpLCB2YWwgPSAodm9pZCAwKTtcclxuXHJcbiAgICBpZiAoYWxsb3dTZXBhcmF0b3JzICYmIGNvZGUgPT09IDk1KSB7XHJcbiAgICAgIGlmIChpc0xlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLCBcIk51bWVyaWMgc2VwYXJhdG9yIGlzIG5vdCBhbGxvd2VkIGluIGxlZ2FjeSBvY3RhbCBudW1lcmljIGxpdGVyYWxzXCIpOyB9XHJcbiAgICAgIGlmIChsYXN0Q29kZSA9PT0gOTUpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLCBcIk51bWVyaWMgc2VwYXJhdG9yIG11c3QgYmUgZXhhY3RseSBvbmUgdW5kZXJzY29yZVwiKTsgfVxyXG4gICAgICBpZiAoaSA9PT0gMCkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5wb3MsIFwiTnVtZXJpYyBzZXBhcmF0b3IgaXMgbm90IGFsbG93ZWQgYXQgdGhlIGZpcnN0IG9mIGRpZ2l0c1wiKTsgfVxyXG4gICAgICBsYXN0Q29kZSA9IGNvZGU7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvZGUgPj0gOTcpIHsgdmFsID0gY29kZSAtIDk3ICsgMTA7IH0gLy8gYVxyXG4gICAgZWxzZSBpZiAoY29kZSA+PSA2NSkgeyB2YWwgPSBjb2RlIC0gNjUgKyAxMDsgfSAvLyBBXHJcbiAgICBlbHNlIGlmIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHsgdmFsID0gY29kZSAtIDQ4OyB9IC8vIDAtOVxyXG4gICAgZWxzZSB7IHZhbCA9IEluZmluaXR5OyB9XHJcbiAgICBpZiAodmFsID49IHJhZGl4KSB7IGJyZWFrIH1cclxuICAgIGxhc3RDb2RlID0gY29kZTtcclxuICAgIHRvdGFsID0gdG90YWwgKiByYWRpeCArIHZhbDtcclxuICB9XHJcblxyXG4gIGlmIChhbGxvd1NlcGFyYXRvcnMgJiYgbGFzdENvZGUgPT09IDk1KSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnBvcyAtIDEsIFwiTnVtZXJpYyBzZXBhcmF0b3IgaXMgbm90IGFsbG93ZWQgYXQgdGhlIGxhc3Qgb2YgZGlnaXRzXCIpOyB9XHJcbiAgaWYgKHRoaXMucG9zID09PSBzdGFydCB8fCBsZW4gIT0gbnVsbCAmJiB0aGlzLnBvcyAtIHN0YXJ0ICE9PSBsZW4pIHsgcmV0dXJuIG51bGwgfVxyXG5cclxuICByZXR1cm4gdG90YWxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvTnVtYmVyKHN0ciwgaXNMZWdhY3lPY3RhbE51bWVyaWNMaXRlcmFsKSB7XHJcbiAgaWYgKGlzTGVnYWN5T2N0YWxOdW1lcmljTGl0ZXJhbCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHN0ciwgOClcclxuICB9XHJcblxyXG4gIC8vIGBwYXJzZUZsb2F0KHZhbHVlKWAgc3RvcHMgcGFyc2luZyBhdCB0aGUgZmlyc3QgbnVtZXJpYyBzZXBhcmF0b3IgdGhlbiByZXR1cm5zIGEgd3JvbmcgdmFsdWUuXHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyLnJlcGxhY2UoL18vZywgXCJcIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvQmlnSW50KHN0cikge1xyXG4gIGlmICh0eXBlb2YgQmlnSW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBgQmlnSW50KHZhbHVlKWAgdGhyb3dzIHN5bnRheCBlcnJvciBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG51bWVyaWMgc2VwYXJhdG9ycy5cclxuICByZXR1cm4gQmlnSW50KHN0ci5yZXBsYWNlKC9fL2csIFwiXCIpKVxyXG59XHJcblxyXG5wcC5yZWFkUmFkaXhOdW1iZXIgPSBmdW5jdGlvbihyYWRpeCkge1xyXG4gIHZhciBzdGFydCA9IHRoaXMucG9zO1xyXG4gIHRoaXMucG9zICs9IDI7IC8vIDB4XHJcbiAgdmFyIHZhbCA9IHRoaXMucmVhZEludChyYWRpeCk7XHJcbiAgaWYgKHZhbCA9PSBudWxsKSB7IHRoaXMucmFpc2UodGhpcy5zdGFydCArIDIsIFwiRXhwZWN0ZWQgbnVtYmVyIGluIHJhZGl4IFwiICsgcmFkaXgpOyB9XHJcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMSAmJiB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09PSAxMTApIHtcclxuICAgIHZhbCA9IHN0cmluZ1RvQmlnSW50KHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKSk7XHJcbiAgICArK3RoaXMucG9zO1xyXG4gIH0gZWxzZSBpZiAoaXNJZGVudGlmaWVyU3RhcnQodGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpKSkgeyB0aGlzLnJhaXNlKHRoaXMucG9zLCBcIklkZW50aWZpZXIgZGlyZWN0bHkgYWZ0ZXIgbnVtYmVyXCIpOyB9XHJcbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5udW0sIHZhbClcclxufTtcclxuXHJcbi8vIFJlYWQgYW4gaW50ZWdlciwgb2N0YWwgaW50ZWdlciwgb3IgZmxvYXRpbmctcG9pbnQgbnVtYmVyLlxyXG5cclxucHAucmVhZE51bWJlciA9IGZ1bmN0aW9uKHN0YXJ0c1dpdGhEb3QpIHtcclxuICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcclxuICBpZiAoIXN0YXJ0c1dpdGhEb3QgJiYgdGhpcy5yZWFkSW50KDEwLCB1bmRlZmluZWQsIHRydWUpID09PSBudWxsKSB7IHRoaXMucmFpc2Uoc3RhcnQsIFwiSW52YWxpZCBudW1iZXJcIik7IH1cclxuICB2YXIgb2N0YWwgPSB0aGlzLnBvcyAtIHN0YXJ0ID49IDIgJiYgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHN0YXJ0KSA9PT0gNDg7XHJcbiAgaWYgKG9jdGFsICYmIHRoaXMuc3RyaWN0KSB7IHRoaXMucmFpc2Uoc3RhcnQsIFwiSW52YWxpZCBudW1iZXJcIik7IH1cclxuICB2YXIgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XHJcbiAgaWYgKCFvY3RhbCAmJiAhc3RhcnRzV2l0aERvdCAmJiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTEgJiYgbmV4dCA9PT0gMTEwKSB7XHJcbiAgICB2YXIgdmFsJDEgPSBzdHJpbmdUb0JpZ0ludCh0aGlzLmlucHV0LnNsaWNlKHN0YXJ0LCB0aGlzLnBvcykpO1xyXG4gICAgKyt0aGlzLnBvcztcclxuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydCh0aGlzLmZ1bGxDaGFyQ29kZUF0UG9zKCkpKSB7IHRoaXMucmFpc2UodGhpcy5wb3MsIFwiSWRlbnRpZmllciBkaXJlY3RseSBhZnRlciBudW1iZXJcIik7IH1cclxuICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEubnVtLCB2YWwkMSlcclxuICB9XHJcbiAgaWYgKG9jdGFsICYmIC9bODldLy50ZXN0KHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKSkpIHsgb2N0YWwgPSBmYWxzZTsgfVxyXG4gIGlmIChuZXh0ID09PSA0NiAmJiAhb2N0YWwpIHsgLy8gJy4nXHJcbiAgICArK3RoaXMucG9zO1xyXG4gICAgdGhpcy5yZWFkSW50KDEwKTtcclxuICAgIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xyXG4gIH1cclxuICBpZiAoKG5leHQgPT09IDY5IHx8IG5leHQgPT09IDEwMSkgJiYgIW9jdGFsKSB7IC8vICdlRSdcclxuICAgIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQoKyt0aGlzLnBvcyk7XHJcbiAgICBpZiAobmV4dCA9PT0gNDMgfHwgbmV4dCA9PT0gNDUpIHsgKyt0aGlzLnBvczsgfSAvLyAnKy0nXHJcbiAgICBpZiAodGhpcy5yZWFkSW50KDEwKSA9PT0gbnVsbCkgeyB0aGlzLnJhaXNlKHN0YXJ0LCBcIkludmFsaWQgbnVtYmVyXCIpOyB9XHJcbiAgfVxyXG4gIGlmIChpc0lkZW50aWZpZXJTdGFydCh0aGlzLmZ1bGxDaGFyQ29kZUF0UG9zKCkpKSB7IHRoaXMucmFpc2UodGhpcy5wb3MsIFwiSWRlbnRpZmllciBkaXJlY3RseSBhZnRlciBudW1iZXJcIik7IH1cclxuXHJcbiAgdmFyIHZhbCA9IHN0cmluZ1RvTnVtYmVyKHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKSwgb2N0YWwpO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEubnVtLCB2YWwpXHJcbn07XHJcblxyXG4vLyBSZWFkIGEgc3RyaW5nIHZhbHVlLCBpbnRlcnByZXRpbmcgYmFja3NsYXNoLWVzY2FwZXMuXHJcblxyXG5wcC5yZWFkQ29kZVBvaW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGNoID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKSwgY29kZTtcclxuXHJcbiAgaWYgKGNoID09PSAxMjMpIHsgLy8gJ3snXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uIDwgNikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxyXG4gICAgdmFyIGNvZGVQb3MgPSArK3RoaXMucG9zO1xyXG4gICAgY29kZSA9IHRoaXMucmVhZEhleENoYXIodGhpcy5pbnB1dC5pbmRleE9mKFwifVwiLCB0aGlzLnBvcykgLSB0aGlzLnBvcyk7XHJcbiAgICArK3RoaXMucG9zO1xyXG4gICAgaWYgKGNvZGUgPiAweDEwRkZGRikgeyB0aGlzLmludmFsaWRTdHJpbmdUb2tlbihjb2RlUG9zLCBcIkNvZGUgcG9pbnQgb3V0IG9mIGJvdW5kc1wiKTsgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb2RlID0gdGhpcy5yZWFkSGV4Q2hhcig0KTtcclxuICB9XHJcbiAgcmV0dXJuIGNvZGVcclxufTtcclxuXHJcbnBwLnJlYWRTdHJpbmcgPSBmdW5jdGlvbihxdW90ZSkge1xyXG4gIHZhciBvdXQgPSBcIlwiLCBjaHVua1N0YXJ0ID0gKyt0aGlzLnBvcztcclxuICBmb3IgKDs7KSB7XHJcbiAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5pbnB1dC5sZW5ndGgpIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIlVudGVybWluYXRlZCBzdHJpbmcgY29uc3RhbnRcIik7IH1cclxuICAgIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XHJcbiAgICBpZiAoY2ggPT09IHF1b3RlKSB7IGJyZWFrIH1cclxuICAgIGlmIChjaCA9PT0gOTIpIHsgLy8gJ1xcJ1xyXG4gICAgICBvdXQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcyk7XHJcbiAgICAgIG91dCArPSB0aGlzLnJlYWRFc2NhcGVkQ2hhcihmYWxzZSk7XHJcbiAgICAgIGNodW5rU3RhcnQgPSB0aGlzLnBvcztcclxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MjAyOCB8fCBjaCA9PT0gMHgyMDI5KSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCAxMCkgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiVW50ZXJtaW5hdGVkIHN0cmluZyBjb25zdGFudFwiKTsgfVxyXG4gICAgICArK3RoaXMucG9zO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvY2F0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY3VyTGluZSsrO1xyXG4gICAgICAgIHRoaXMubGluZVN0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc05ld0xpbmUoY2gpKSB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJVbnRlcm1pbmF0ZWQgc3RyaW5nIGNvbnN0YW50XCIpOyB9XHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG91dCArPSB0aGlzLmlucHV0LnNsaWNlKGNodW5rU3RhcnQsIHRoaXMucG9zKyspO1xyXG4gIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuc3RyaW5nLCBvdXQpXHJcbn07XHJcblxyXG4vLyBSZWFkcyB0ZW1wbGF0ZSBzdHJpbmcgdG9rZW5zLlxyXG5cclxudmFyIElOVkFMSURfVEVNUExBVEVfRVNDQVBFX0VSUk9SID0ge307XHJcblxyXG5wcC50cnlSZWFkVGVtcGxhdGVUb2tlbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuaW5UZW1wbGF0ZUVsZW1lbnQgPSB0cnVlO1xyXG4gIHRyeSB7XHJcbiAgICB0aGlzLnJlYWRUbXBsVG9rZW4oKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGlmIChlcnIgPT09IElOVkFMSURfVEVNUExBVEVfRVNDQVBFX0VSUk9SKSB7XHJcbiAgICAgIHRoaXMucmVhZEludmFsaWRUZW1wbGF0ZVRva2VuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBlcnJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuaW5UZW1wbGF0ZUVsZW1lbnQgPSBmYWxzZTtcclxufTtcclxuXHJcbnBwLmludmFsaWRTdHJpbmdUb2tlbiA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBtZXNzYWdlKSB7XHJcbiAgaWYgKHRoaXMuaW5UZW1wbGF0ZUVsZW1lbnQgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkpIHtcclxuICAgIHRocm93IElOVkFMSURfVEVNUExBVEVfRVNDQVBFX0VSUk9SXHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucmFpc2UocG9zaXRpb24sIG1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcbnBwLnJlYWRUbXBsVG9rZW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgb3V0ID0gXCJcIiwgY2h1bmtTdGFydCA9IHRoaXMucG9zO1xyXG4gIGZvciAoOzspIHtcclxuICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmlucHV0Lmxlbmd0aCkgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiVW50ZXJtaW5hdGVkIHRlbXBsYXRlXCIpOyB9XHJcbiAgICB2YXIgY2ggPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xyXG4gICAgaWYgKGNoID09PSA5NiB8fCBjaCA9PT0gMzYgJiYgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT09IDEyMykgeyAvLyAnYCcsICckeydcclxuICAgICAgaWYgKHRoaXMucG9zID09PSB0aGlzLnN0YXJ0ICYmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEudGVtcGxhdGUgfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLmludmFsaWRUZW1wbGF0ZSkpIHtcclxuICAgICAgICBpZiAoY2ggPT09IDM2KSB7XHJcbiAgICAgICAgICB0aGlzLnBvcyArPSAyO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5kb2xsYXJCcmFjZUwpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICsrdGhpcy5wb3M7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJhY2tRdW90ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb3V0ICs9IHRoaXMuaW5wdXQuc2xpY2UoY2h1bmtTdGFydCwgdGhpcy5wb3MpO1xyXG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnRlbXBsYXRlLCBvdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoY2ggPT09IDkyKSB7IC8vICdcXCdcclxuICAgICAgb3V0ICs9IHRoaXMuaW5wdXQuc2xpY2UoY2h1bmtTdGFydCwgdGhpcy5wb3MpO1xyXG4gICAgICBvdXQgKz0gdGhpcy5yZWFkRXNjYXBlZENoYXIodHJ1ZSk7XHJcbiAgICAgIGNodW5rU3RhcnQgPSB0aGlzLnBvcztcclxuICAgIH0gZWxzZSBpZiAoaXNOZXdMaW5lKGNoKSkge1xyXG4gICAgICBvdXQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcyk7XHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICAgIHN3aXRjaCAoY2gpIHtcclxuICAgICAgY2FzZSAxMzpcclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PT0gMTApIHsgKyt0aGlzLnBvczsgfVxyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2gpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHtcclxuICAgICAgICArK3RoaXMuY3VyTGluZTtcclxuICAgICAgICB0aGlzLmxpbmVTdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICB9XHJcbiAgICAgIGNodW5rU3RhcnQgPSB0aGlzLnBvcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gUmVhZHMgYSB0ZW1wbGF0ZSB0b2tlbiB0byBzZWFyY2ggZm9yIHRoZSBlbmQsIHdpdGhvdXQgdmFsaWRhdGluZyBhbnkgZXNjYXBlIHNlcXVlbmNlc1xyXG5wcC5yZWFkSW52YWxpZFRlbXBsYXRlVG9rZW4gPSBmdW5jdGlvbigpIHtcclxuICBmb3IgKDsgdGhpcy5wb3MgPCB0aGlzLmlucHV0Lmxlbmd0aDsgdGhpcy5wb3MrKykge1xyXG4gICAgc3dpdGNoICh0aGlzLmlucHV0W3RoaXMucG9zXSkge1xyXG4gICAgY2FzZSBcIlxcXFxcIjpcclxuICAgICAgKyt0aGlzLnBvcztcclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlIFwiJFwiOlxyXG4gICAgICBpZiAodGhpcy5pbnB1dFt0aGlzLnBvcyArIDFdICE9PSBcIntcIikge1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuXHJcbiAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICBjYXNlIFwiYFwiOlxyXG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmludmFsaWRUZW1wbGF0ZSwgdGhpcy5pbnB1dC5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLnBvcykpXHJcblxyXG4gICAgLy8gbm8gZGVmYXVsdFxyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiVW50ZXJtaW5hdGVkIHRlbXBsYXRlXCIpO1xyXG59O1xyXG5cclxuLy8gVXNlZCB0byByZWFkIGVzY2FwZWQgY2hhcmFjdGVyc1xyXG5cclxucHAucmVhZEVzY2FwZWRDaGFyID0gZnVuY3Rpb24oaW5UZW1wbGF0ZSkge1xyXG4gIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCgrK3RoaXMucG9zKTtcclxuICArK3RoaXMucG9zO1xyXG4gIHN3aXRjaCAoY2gpIHtcclxuICBjYXNlIDExMDogcmV0dXJuIFwiXFxuXCIgLy8gJ24nIC0+ICdcXG4nXHJcbiAgY2FzZSAxMTQ6IHJldHVybiBcIlxcclwiIC8vICdyJyAtPiAnXFxyJ1xyXG4gIGNhc2UgMTIwOiByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnJlYWRIZXhDaGFyKDIpKSAvLyAneCdcclxuICBjYXNlIDExNzogcmV0dXJuIGNvZGVQb2ludFRvU3RyaW5nKHRoaXMucmVhZENvZGVQb2ludCgpKSAvLyAndSdcclxuICBjYXNlIDExNjogcmV0dXJuIFwiXFx0XCIgLy8gJ3QnIC0+ICdcXHQnXHJcbiAgY2FzZSA5ODogcmV0dXJuIFwiXFxiXCIgLy8gJ2InIC0+ICdcXGInXHJcbiAgY2FzZSAxMTg6IHJldHVybiBcIlxcdTAwMGJcIiAvLyAndicgLT4gJ1xcdTAwMGInXHJcbiAgY2FzZSAxMDI6IHJldHVybiBcIlxcZlwiIC8vICdmJyAtPiAnXFxmJ1xyXG4gIGNhc2UgMTM6IGlmICh0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09PSAxMCkgeyArK3RoaXMucG9zOyB9IC8vICdcXHJcXG4nXHJcbiAgY2FzZSAxMDogLy8gJyBcXG4nXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvY2F0aW9ucykgeyB0aGlzLmxpbmVTdGFydCA9IHRoaXMucG9zOyArK3RoaXMuY3VyTGluZTsgfVxyXG4gICAgcmV0dXJuIFwiXCJcclxuICBjYXNlIDU2OlxyXG4gIGNhc2UgNTc6XHJcbiAgICBpZiAodGhpcy5zdHJpY3QpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkU3RyaW5nVG9rZW4oXHJcbiAgICAgICAgdGhpcy5wb3MgLSAxLFxyXG4gICAgICAgIFwiSW52YWxpZCBlc2NhcGUgc2VxdWVuY2VcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGluVGVtcGxhdGUpIHtcclxuICAgICAgdmFyIGNvZGVQb3MgPSB0aGlzLnBvcyAtIDE7XHJcblxyXG4gICAgICB0aGlzLmludmFsaWRTdHJpbmdUb2tlbihcclxuICAgICAgICBjb2RlUG9zLFxyXG4gICAgICAgIFwiSW52YWxpZCBlc2NhcGUgc2VxdWVuY2UgaW4gdGVtcGxhdGUgc3RyaW5nXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICBkZWZhdWx0OlxyXG4gICAgaWYgKGNoID49IDQ4ICYmIGNoIDw9IDU1KSB7XHJcbiAgICAgIHZhciBvY3RhbFN0ciA9IHRoaXMuaW5wdXQuc3Vic3RyKHRoaXMucG9zIC0gMSwgMykubWF0Y2goL15bMC03XSsvKVswXTtcclxuICAgICAgdmFyIG9jdGFsID0gcGFyc2VJbnQob2N0YWxTdHIsIDgpO1xyXG4gICAgICBpZiAob2N0YWwgPiAyNTUpIHtcclxuICAgICAgICBvY3RhbFN0ciA9IG9jdGFsU3RyLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICBvY3RhbCA9IHBhcnNlSW50KG9jdGFsU3RyLCA4KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBvcyArPSBvY3RhbFN0ci5sZW5ndGggLSAxO1xyXG4gICAgICBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XHJcbiAgICAgIGlmICgob2N0YWxTdHIgIT09IFwiMFwiIHx8IGNoID09PSA1NiB8fCBjaCA9PT0gNTcpICYmICh0aGlzLnN0cmljdCB8fCBpblRlbXBsYXRlKSkge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKFxyXG4gICAgICAgICAgdGhpcy5wb3MgLSAxIC0gb2N0YWxTdHIubGVuZ3RoLFxyXG4gICAgICAgICAgaW5UZW1wbGF0ZVxyXG4gICAgICAgICAgICA/IFwiT2N0YWwgbGl0ZXJhbCBpbiB0ZW1wbGF0ZSBzdHJpbmdcIlxyXG4gICAgICAgICAgICA6IFwiT2N0YWwgbGl0ZXJhbCBpbiBzdHJpY3QgbW9kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShvY3RhbClcclxuICAgIH1cclxuICAgIGlmIChpc05ld0xpbmUoY2gpKSB7XHJcbiAgICAgIC8vIFVuaWNvZGUgbmV3IGxpbmUgY2hhcmFjdGVycyBhZnRlciBcXCBnZXQgcmVtb3ZlZCBmcm9tIG91dHB1dCBpbiBib3RoXHJcbiAgICAgIC8vIHRlbXBsYXRlIGxpdGVyYWxzIGFuZCBzdHJpbmdzXHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaClcclxuICB9XHJcbn07XHJcblxyXG4vLyBVc2VkIHRvIHJlYWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZXMgKCdcXHgnLCAnXFx1JywgJ1xcVScpLlxyXG5cclxucHAucmVhZEhleENoYXIgPSBmdW5jdGlvbihsZW4pIHtcclxuICB2YXIgY29kZVBvcyA9IHRoaXMucG9zO1xyXG4gIHZhciBuID0gdGhpcy5yZWFkSW50KDE2LCBsZW4pO1xyXG4gIGlmIChuID09PSBudWxsKSB7IHRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKGNvZGVQb3MsIFwiQmFkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2VcIik7IH1cclxuICByZXR1cm4gblxyXG59O1xyXG5cclxuLy8gUmVhZCBhbiBpZGVudGlmaWVyLCBhbmQgcmV0dXJuIGl0IGFzIGEgc3RyaW5nLiBTZXRzIGB0aGlzLmNvbnRhaW5zRXNjYFxyXG4vLyB0byB3aGV0aGVyIHRoZSB3b3JkIGNvbnRhaW5lZCBhICdcXHUnIGVzY2FwZS5cclxuLy9cclxuLy8gSW5jcmVtZW50YWxseSBhZGRzIG9ubHkgZXNjYXBlZCBjaGFycywgYWRkaW5nIG90aGVyIGNodW5rcyBhcy1pc1xyXG4vLyBhcyBhIG1pY3JvLW9wdGltaXphdGlvbi5cclxuXHJcbnBwLnJlYWRXb3JkMSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuY29udGFpbnNFc2MgPSBmYWxzZTtcclxuICB2YXIgd29yZCA9IFwiXCIsIGZpcnN0ID0gdHJ1ZSwgY2h1bmtTdGFydCA9IHRoaXMucG9zO1xyXG4gIHZhciBhc3RyYWwgPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNjtcclxuICB3aGlsZSAodGhpcy5wb3MgPCB0aGlzLmlucHV0Lmxlbmd0aCkge1xyXG4gICAgdmFyIGNoID0gdGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpO1xyXG4gICAgaWYgKGlzSWRlbnRpZmllckNoYXIoY2gsIGFzdHJhbCkpIHtcclxuICAgICAgdGhpcy5wb3MgKz0gY2ggPD0gMHhmZmZmID8gMSA6IDI7XHJcbiAgICB9IGVsc2UgaWYgKGNoID09PSA5MikgeyAvLyBcIlxcXCJcclxuICAgICAgdGhpcy5jb250YWluc0VzYyA9IHRydWU7XHJcbiAgICAgIHdvcmQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcyk7XHJcbiAgICAgIHZhciBlc2NTdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KCsrdGhpcy5wb3MpICE9PSAxMTcpIC8vIFwidVwiXHJcbiAgICAgICAgeyB0aGlzLmludmFsaWRTdHJpbmdUb2tlbih0aGlzLnBvcywgXCJFeHBlY3RpbmcgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UgXFxcXHVYWFhYXCIpOyB9XHJcbiAgICAgICsrdGhpcy5wb3M7XHJcbiAgICAgIHZhciBlc2MgPSB0aGlzLnJlYWRDb2RlUG9pbnQoKTtcclxuICAgICAgaWYgKCEoZmlyc3QgPyBpc0lkZW50aWZpZXJTdGFydCA6IGlzSWRlbnRpZmllckNoYXIpKGVzYywgYXN0cmFsKSlcclxuICAgICAgICB7IHRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKGVzY1N0YXJ0LCBcIkludmFsaWQgVW5pY29kZSBlc2NhcGVcIik7IH1cclxuICAgICAgd29yZCArPSBjb2RlUG9pbnRUb1N0cmluZyhlc2MpO1xyXG4gICAgICBjaHVua1N0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgZmlyc3QgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHdvcmQgKyB0aGlzLmlucHV0LnNsaWNlKGNodW5rU3RhcnQsIHRoaXMucG9zKVxyXG59O1xyXG5cclxuLy8gUmVhZCBhbiBpZGVudGlmaWVyIG9yIGtleXdvcmQgdG9rZW4uIFdpbGwgY2hlY2sgZm9yIHJlc2VydmVkXHJcbi8vIHdvcmRzIHdoZW4gbmVjZXNzYXJ5LlxyXG5cclxucHAucmVhZFdvcmQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgd29yZCA9IHRoaXMucmVhZFdvcmQxKCk7XHJcbiAgdmFyIHR5cGUgPSB0eXBlcyQxLm5hbWU7XHJcbiAgaWYgKHRoaXMua2V5d29yZHMudGVzdCh3b3JkKSkge1xyXG4gICAgdHlwZSA9IGtleXdvcmRzW3dvcmRdO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlLCB3b3JkKVxyXG59O1xyXG5cclxuLy8gQWNvcm4gaXMgYSB0aW55LCBmYXN0IEphdmFTY3JpcHQgcGFyc2VyIHdyaXR0ZW4gaW4gSmF2YVNjcmlwdC5cclxuLy9cclxuLy8gQWNvcm4gd2FzIHdyaXR0ZW4gYnkgTWFyaWpuIEhhdmVyYmVrZSwgSW5ndmFyIFN0ZXBhbnlhbiwgYW5kXHJcbi8vIHZhcmlvdXMgY29udHJpYnV0b3JzIGFuZCByZWxlYXNlZCB1bmRlciBhbiBNSVQgbGljZW5zZS5cclxuLy9cclxuLy8gR2l0IHJlcG9zaXRvcmllcyBmb3IgQWNvcm4gYXJlIGF2YWlsYWJsZSBhdFxyXG4vL1xyXG4vLyAgICAgaHR0cDovL21hcmlqbmhhdmVyYmVrZS5ubC9naXQvYWNvcm5cclxuLy8gICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY29ybmpzL2Fjb3JuLmdpdFxyXG4vL1xyXG4vLyBQbGVhc2UgdXNlIHRoZSBbZ2l0aHViIGJ1ZyB0cmFja2VyXVtnaGJ0XSB0byByZXBvcnQgaXNzdWVzLlxyXG4vL1xyXG4vLyBbZ2hidF06IGh0dHBzOi8vZ2l0aHViLmNvbS9hY29ybmpzL2Fjb3JuL2lzc3Vlc1xyXG4vL1xyXG4vLyBbd2Fsa106IHV0aWwvd2Fsay5qc1xyXG5cclxuXHJcbnZhciB2ZXJzaW9uID0gXCI4LjExLjJcIjtcclxuXHJcblBhcnNlci5hY29ybiA9IHtcclxuICBQYXJzZXI6IFBhcnNlcixcclxuICB2ZXJzaW9uOiB2ZXJzaW9uLFxyXG4gIGRlZmF1bHRPcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcclxuICBQb3NpdGlvbjogUG9zaXRpb24sXHJcbiAgU291cmNlTG9jYXRpb246IFNvdXJjZUxvY2F0aW9uLFxyXG4gIGdldExpbmVJbmZvOiBnZXRMaW5lSW5mbyxcclxuICBOb2RlOiBOb2RlLFxyXG4gIFRva2VuVHlwZTogVG9rZW5UeXBlLFxyXG4gIHRva1R5cGVzOiB0eXBlcyQxLFxyXG4gIGtleXdvcmRUeXBlczoga2V5d29yZHMsXHJcbiAgVG9rQ29udGV4dDogVG9rQ29udGV4dCxcclxuICB0b2tDb250ZXh0czogdHlwZXMsXHJcbiAgaXNJZGVudGlmaWVyQ2hhcjogaXNJZGVudGlmaWVyQ2hhcixcclxuICBpc0lkZW50aWZpZXJTdGFydDogaXNJZGVudGlmaWVyU3RhcnQsXHJcbiAgVG9rZW46IFRva2VuLFxyXG4gIGlzTmV3TGluZTogaXNOZXdMaW5lLFxyXG4gIGxpbmVCcmVhazogbGluZUJyZWFrLFxyXG4gIGxpbmVCcmVha0c6IGxpbmVCcmVha0csXHJcbiAgbm9uQVNDSUl3aGl0ZXNwYWNlOiBub25BU0NJSXdoaXRlc3BhY2VcclxufTtcclxuXHJcbi8vIFRoZSBtYWluIGV4cG9ydGVkIGludGVyZmFjZSAodW5kZXIgYHNlbGYuYWNvcm5gIHdoZW4gaW4gdGhlXHJcbi8vIGJyb3dzZXIpIGlzIGEgYHBhcnNlYCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgY29kZSBzdHJpbmcgYW5kXHJcbi8vIHJldHVybnMgYW4gYWJzdHJhY3Qgc3ludGF4IHRyZWUgYXMgc3BlY2lmaWVkIGJ5IFtNb3ppbGxhIHBhcnNlclxyXG4vLyBBUEldW2FwaV0uXHJcbi8vXHJcbi8vIFthcGldOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1NwaWRlck1vbmtleS9QYXJzZXJfQVBJXHJcblxyXG5mdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xyXG4gIHJldHVybiBQYXJzZXIucGFyc2UoaW5wdXQsIG9wdGlvbnMpXHJcbn1cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gcGFyc2UgYSBzaW5nbGUgZXhwcmVzc2lvbiBhdCBhIGdpdmVuXHJcbi8vIG9mZnNldCBpbiBhIHN0cmluZy4gVXNlZnVsIGZvciBwYXJzaW5nIG1peGVkLWxhbmd1YWdlIGZvcm1hdHNcclxuLy8gdGhhdCBlbWJlZCBKYXZhU2NyaXB0IGV4cHJlc3Npb25zLlxyXG5cclxuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uQXQoaW5wdXQsIHBvcywgb3B0aW9ucykge1xyXG4gIHJldHVybiBQYXJzZXIucGFyc2VFeHByZXNzaW9uQXQoaW5wdXQsIHBvcywgb3B0aW9ucylcclxufVxyXG5cclxuLy8gQWNvcm4gaXMgb3JnYW5pemVkIGFzIGEgdG9rZW5pemVyIGFuZCBhIHJlY3Vyc2l2ZS1kZXNjZW50IHBhcnNlci5cclxuLy8gVGhlIGB0b2tlbml6ZXJgIGV4cG9ydCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdG8gdGhlIHRva2VuaXplci5cclxuXHJcbmZ1bmN0aW9uIHRva2VuaXplcihpbnB1dCwgb3B0aW9ucykge1xyXG4gIHJldHVybiBQYXJzZXIudG9rZW5pemVyKGlucHV0LCBvcHRpb25zKVxyXG59XHJcblxyXG5leHBvcnQgeyBOb2RlLCBQYXJzZXIsIFBvc2l0aW9uLCBTb3VyY2VMb2NhdGlvbiwgVG9rQ29udGV4dCwgVG9rZW4sIFRva2VuVHlwZSwgZGVmYXVsdE9wdGlvbnMsIGdldExpbmVJbmZvLCBpc0lkZW50aWZpZXJDaGFyLCBpc0lkZW50aWZpZXJTdGFydCwgaXNOZXdMaW5lLCBrZXl3b3JkcyBhcyBrZXl3b3JkVHlwZXMsIGxpbmVCcmVhaywgbGluZUJyZWFrRywgbm9uQVNDSUl3aGl0ZXNwYWNlLCBwYXJzZSwgcGFyc2VFeHByZXNzaW9uQXQsIHR5cGVzIGFzIHRva0NvbnRleHRzLCB0eXBlcyQxIGFzIHRva1R5cGVzLCB0b2tlbml6ZXIsIHZlcnNpb24gfTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0EsSUFBSSx3QkFBd0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxNQUFNLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHO0FBRzNoQyxJQUFJLDZCQUE2QixDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sT0FBTyxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sR0FBRyxJQUFJO0FBR3hoRSxJQUFJLDBCQUEwQjtBQUc5QixJQUFJLCtCQUEr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LEtBQUssTUFBTSxHQUM3RDtBQUFFLGFBQUssbUJBQW1CLFVBQVUsd0JBQXdCO0FBQUEsTUFBRztBQUNqRSxjQUFRLGtCQUFrQixHQUFHO0FBQzdCLG1CQUFhLEtBQUs7QUFBQSxJQUNwQixPQUFPO0FBQ0w7QUFBQSxJQUNGO0FBQ0EsWUFBUTtBQUFBLEVBQ1Y7QUFDQSxTQUFPLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxLQUFLLEdBQUc7QUFDckQ7QUFLQSxHQUFHLFdBQVcsV0FBVztBQUN2QixNQUFJLE9BQU8sS0FBSyxVQUFVO0FBQzFCLE1BQUksT0FBTyxRQUFRO0FBQ25CLE1BQUksS0FBSyxTQUFTLEtBQUssSUFBSSxHQUFHO0FBQzVCLFdBQU8sU0FBUyxJQUFJO0FBQUEsRUFDdEI7QUFDQSxTQUFPLEtBQUssWUFBWSxNQUFNLElBQUk7QUFDcEM7QUFtQkEsSUFBSSxVQUFVO0FBRWQsT0FBTyxRQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFVBQVU7QUFBQSxFQUNWLGNBQWM7QUFBQSxFQUNkO0FBQUEsRUFDQSxhQUFhO0FBQUEsRUFDYjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBU0EsU0FBU1AsT0FBTSxPQUFPLFNBQVM7QUFDN0IsU0FBTyxPQUFPLE1BQU0sT0FBTyxPQUFPO0FBQ3BDO0FBTUEsU0FBU1EsbUJBQWtCLE9BQU8sS0FBSyxTQUFTO0FBQzlDLFNBQU8sT0FBTyxrQkFBa0IsT0FBTyxLQUFLLE9BQU87QUFDckQ7QUFLQSxTQUFTQyxXQUFVLE9BQU8sU0FBUztBQUNqQyxTQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU87QUFDeEM7IiwKICAibmFtZXMiOiBbIlRva2VuVHlwZSIsICJQb3NpdGlvbiIsICJTb3VyY2VMb2NhdGlvbiIsICJvZmZzZXQiLCAiUGFyc2VyIiwgInJlZiIsICJwYXJzZSIsICJEZXN0cnVjdHVyaW5nRXJyb3JzIiwgIlRva0NvbnRleHQiLCAiU2NvcGUiLCAiTm9kZSIsICJSZWdFeHBWYWxpZGF0aW9uU3RhdGUiLCAiY3VycmVudCIsICJUb2tlbiIsICJwYXJzZUV4cHJlc3Npb25BdCIsICJ0b2tlbml6ZXIiXQp9Cg==
