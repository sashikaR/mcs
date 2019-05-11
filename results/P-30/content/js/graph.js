/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 206.0, "minX": 0.0, "maxY": 2337.0, "series": [{"data": [[0.0, 206.0], [0.1, 246.0], [0.2, 266.0], [0.3, 272.0], [0.4, 279.0], [0.5, 285.0], [0.6, 290.0], [0.7, 294.0], [0.8, 297.0], [0.9, 301.0], [1.0, 303.0], [1.1, 307.0], [1.2, 311.0], [1.3, 314.0], [1.4, 317.0], [1.5, 321.0], [1.6, 323.0], [1.7, 326.0], [1.8, 330.0], [1.9, 332.0], [2.0, 333.0], [2.1, 336.0], [2.2, 340.0], [2.3, 343.0], [2.4, 345.0], [2.5, 346.0], [2.6, 348.0], [2.7, 351.0], [2.8, 353.0], [2.9, 355.0], [3.0, 356.0], [3.1, 358.0], [3.2, 360.0], [3.3, 362.0], [3.4, 363.0], [3.5, 365.0], [3.6, 366.0], [3.7, 367.0], [3.8, 369.0], [3.9, 373.0], [4.0, 375.0], [4.1, 376.0], [4.2, 377.0], [4.3, 378.0], [4.4, 380.0], [4.5, 382.0], [4.6, 382.0], [4.7, 385.0], [4.8, 385.0], [4.9, 387.0], [5.0, 389.0], [5.1, 391.0], [5.2, 392.0], [5.3, 394.0], [5.4, 395.0], [5.5, 397.0], [5.6, 398.0], [5.7, 400.0], [5.8, 401.0], [5.9, 402.0], [6.0, 403.0], [6.1, 405.0], [6.2, 406.0], [6.3, 407.0], [6.4, 408.0], [6.5, 410.0], [6.6, 411.0], [6.7, 413.0], [6.8, 413.0], [6.9, 415.0], [7.0, 416.0], [7.1, 418.0], [7.2, 419.0], [7.3, 421.0], [7.4, 423.0], [7.5, 425.0], [7.6, 428.0], [7.7, 429.0], [7.8, 430.0], [7.9, 431.0], [8.0, 432.0], [8.1, 432.0], [8.2, 434.0], [8.3, 436.0], [8.4, 437.0], [8.5, 439.0], [8.6, 440.0], [8.7, 441.0], [8.8, 442.0], [8.9, 444.0], [9.0, 446.0], [9.1, 448.0], [9.2, 449.0], [9.3, 451.0], [9.4, 453.0], [9.5, 454.0], [9.6, 455.0], [9.7, 458.0], [9.8, 459.0], [9.9, 461.0], [10.0, 462.0], [10.1, 464.0], [10.2, 466.0], [10.3, 469.0], [10.4, 470.0], [10.5, 472.0], [10.6, 474.0], [10.7, 479.0], [10.8, 480.0], [10.9, 481.0], [11.0, 483.0], [11.1, 485.0], [11.2, 486.0], [11.3, 489.0], [11.4, 490.0], [11.5, 493.0], [11.6, 495.0], [11.7, 497.0], [11.8, 499.0], [11.9, 500.0], [12.0, 502.0], [12.1, 505.0], [12.2, 507.0], [12.3, 509.0], [12.4, 512.0], [12.5, 514.0], [12.6, 516.0], [12.7, 517.0], [12.8, 521.0], [12.9, 525.0], [13.0, 528.0], [13.1, 530.0], [13.2, 533.0], [13.3, 537.0], [13.4, 542.0], [13.5, 546.0], [13.6, 551.0], [13.7, 554.0], [13.8, 560.0], [13.9, 564.0], [14.0, 569.0], [14.1, 573.0], [14.2, 579.0], [14.3, 585.0], [14.4, 591.0], [14.5, 594.0], [14.6, 603.0], [14.7, 612.0], [14.8, 617.0], [14.9, 622.0], [15.0, 627.0], [15.1, 633.0], [15.2, 637.0], [15.3, 649.0], [15.4, 655.0], [15.5, 660.0], [15.6, 670.0], [15.7, 678.0], [15.8, 689.0], [15.9, 699.0], [16.0, 706.0], [16.1, 718.0], [16.2, 732.0], [16.3, 745.0], [16.4, 761.0], [16.5, 775.0], [16.6, 789.0], [16.7, 799.0], [16.8, 818.0], [16.9, 834.0], [17.0, 843.0], [17.1, 856.0], [17.2, 866.0], [17.3, 875.0], [17.4, 881.0], [17.5, 889.0], [17.6, 897.0], [17.7, 900.0], [17.8, 907.0], [17.9, 912.0], [18.0, 916.0], [18.1, 919.0], [18.2, 923.0], [18.3, 927.0], [18.4, 932.0], [18.5, 936.0], [18.6, 938.0], [18.7, 941.0], [18.8, 944.0], [18.9, 945.0], [19.0, 948.0], [19.1, 951.0], [19.2, 953.0], [19.3, 956.0], [19.4, 959.0], [19.5, 960.0], [19.6, 962.0], [19.7, 963.0], [19.8, 965.0], [19.9, 966.0], [20.0, 968.0], [20.1, 969.0], [20.2, 971.0], [20.3, 973.0], [20.4, 974.0], [20.5, 974.0], [20.6, 977.0], [20.7, 978.0], [20.8, 980.0], [20.9, 982.0], [21.0, 984.0], [21.1, 985.0], [21.2, 987.0], [21.3, 989.0], [21.4, 989.0], [21.5, 990.0], [21.6, 992.0], [21.7, 994.0], [21.8, 996.0], [21.9, 997.0], [22.0, 998.0], [22.1, 999.0], [22.2, 1000.0], [22.3, 1001.0], [22.4, 1003.0], [22.5, 1004.0], [22.6, 1005.0], [22.7, 1006.0], [22.8, 1007.0], [22.9, 1008.0], [23.0, 1009.0], [23.1, 1010.0], [23.2, 1011.0], [23.3, 1011.0], [23.4, 1013.0], [23.5, 1014.0], [23.6, 1015.0], [23.7, 1016.0], [23.8, 1017.0], [23.9, 1018.0], [24.0, 1019.0], [24.1, 1020.0], [24.2, 1021.0], [24.3, 1022.0], [24.4, 1024.0], [24.5, 1024.0], [24.6, 1025.0], [24.7, 1026.0], [24.8, 1028.0], [24.9, 1029.0], [25.0, 1030.0], [25.1, 1031.0], [25.2, 1031.0], [25.3, 1032.0], [25.4, 1033.0], [25.5, 1035.0], [25.6, 1035.0], [25.7, 1037.0], [25.8, 1037.0], [25.9, 1038.0], [26.0, 1039.0], [26.1, 1040.0], [26.2, 1040.0], [26.3, 1041.0], [26.4, 1041.0], [26.5, 1042.0], [26.6, 1042.0], [26.7, 1043.0], [26.8, 1045.0], [26.9, 1045.0], [27.0, 1046.0], [27.1, 1047.0], [27.2, 1047.0], [27.3, 1047.0], [27.4, 1048.0], [27.5, 1049.0], [27.6, 1049.0], [27.7, 1050.0], [27.8, 1051.0], [27.9, 1051.0], [28.0, 1051.0], [28.1, 1052.0], [28.2, 1053.0], [28.3, 1054.0], [28.4, 1055.0], [28.5, 1055.0], [28.6, 1056.0], [28.7, 1056.0], [28.8, 1057.0], [28.9, 1057.0], [29.0, 1058.0], [29.1, 1059.0], [29.2, 1060.0], [29.3, 1060.0], [29.4, 1061.0], [29.5, 1061.0], [29.6, 1062.0], [29.7, 1062.0], [29.8, 1063.0], [29.9, 1064.0], [30.0, 1064.0], [30.1, 1065.0], [30.2, 1066.0], [30.3, 1066.0], [30.4, 1067.0], [30.5, 1068.0], [30.6, 1068.0], [30.7, 1069.0], [30.8, 1069.0], [30.9, 1070.0], [31.0, 1070.0], [31.1, 1071.0], [31.2, 1072.0], [31.3, 1072.0], [31.4, 1073.0], [31.5, 1073.0], [31.6, 1074.0], [31.7, 1074.0], [31.8, 1075.0], [31.9, 1075.0], [32.0, 1075.0], [32.1, 1076.0], [32.2, 1076.0], [32.3, 1077.0], [32.4, 1077.0], [32.5, 1078.0], [32.6, 1078.0], [32.7, 1079.0], [32.8, 1079.0], [32.9, 1080.0], [33.0, 1080.0], [33.1, 1080.0], [33.2, 1081.0], [33.3, 1081.0], [33.4, 1082.0], [33.5, 1082.0], [33.6, 1083.0], [33.7, 1083.0], [33.8, 1084.0], [33.9, 1085.0], [34.0, 1085.0], [34.1, 1086.0], [34.2, 1086.0], [34.3, 1087.0], [34.4, 1087.0], [34.5, 1088.0], [34.6, 1088.0], [34.7, 1089.0], [34.8, 1089.0], [34.9, 1089.0], [35.0, 1090.0], [35.1, 1090.0], [35.2, 1090.0], [35.3, 1091.0], [35.4, 1091.0], [35.5, 1092.0], [35.6, 1092.0], [35.7, 1092.0], [35.8, 1093.0], [35.9, 1094.0], [36.0, 1094.0], [36.1, 1095.0], [36.2, 1095.0], [36.3, 1096.0], [36.4, 1096.0], [36.5, 1097.0], [36.6, 1097.0], [36.7, 1098.0], [36.8, 1098.0], [36.9, 1099.0], [37.0, 1100.0], [37.1, 1100.0], [37.2, 1101.0], [37.3, 1101.0], [37.4, 1102.0], [37.5, 1102.0], [37.6, 1102.0], [37.7, 1103.0], [37.8, 1104.0], [37.9, 1104.0], [38.0, 1104.0], [38.1, 1104.0], [38.2, 1105.0], [38.3, 1105.0], [38.4, 1106.0], [38.5, 1106.0], [38.6, 1107.0], [38.7, 1107.0], [38.8, 1108.0], [38.9, 1108.0], [39.0, 1109.0], [39.1, 1109.0], [39.2, 1109.0], [39.3, 1110.0], [39.4, 1110.0], [39.5, 1111.0], [39.6, 1112.0], [39.7, 1112.0], [39.8, 1112.0], [39.9, 1113.0], [40.0, 1114.0], [40.1, 1114.0], [40.2, 1114.0], [40.3, 1115.0], [40.4, 1116.0], [40.5, 1116.0], [40.6, 1116.0], [40.7, 1116.0], [40.8, 1117.0], [40.9, 1117.0], [41.0, 1118.0], [41.1, 1118.0], [41.2, 1118.0], [41.3, 1119.0], [41.4, 1119.0], [41.5, 1119.0], [41.6, 1120.0], [41.7, 1120.0], [41.8, 1121.0], [41.9, 1121.0], [42.0, 1122.0], [42.1, 1122.0], [42.2, 1123.0], [42.3, 1123.0], [42.4, 1123.0], [42.5, 1124.0], [42.6, 1124.0], [42.7, 1124.0], [42.8, 1125.0], [42.9, 1126.0], [43.0, 1126.0], [43.1, 1126.0], [43.2, 1126.0], [43.3, 1127.0], [43.4, 1127.0], [43.5, 1127.0], [43.6, 1128.0], [43.7, 1128.0], [43.8, 1128.0], [43.9, 1129.0], [44.0, 1129.0], [44.1, 1129.0], [44.2, 1130.0], [44.3, 1130.0], [44.4, 1131.0], [44.5, 1131.0], [44.6, 1132.0], [44.7, 1132.0], [44.8, 1132.0], [44.9, 1133.0], [45.0, 1133.0], [45.1, 1134.0], [45.2, 1134.0], [45.3, 1134.0], [45.4, 1135.0], [45.5, 1135.0], [45.6, 1136.0], [45.7, 1136.0], [45.8, 1136.0], [45.9, 1137.0], [46.0, 1137.0], [46.1, 1137.0], [46.2, 1138.0], [46.3, 1138.0], [46.4, 1138.0], [46.5, 1139.0], [46.6, 1139.0], [46.7, 1140.0], [46.8, 1140.0], [46.9, 1140.0], [47.0, 1141.0], [47.1, 1141.0], [47.2, 1142.0], [47.3, 1142.0], [47.4, 1143.0], [47.5, 1143.0], [47.6, 1143.0], [47.7, 1143.0], [47.8, 1143.0], [47.9, 1144.0], [48.0, 1144.0], [48.1, 1144.0], [48.2, 1145.0], [48.3, 1146.0], [48.4, 1146.0], [48.5, 1146.0], [48.6, 1147.0], [48.7, 1147.0], [48.8, 1147.0], [48.9, 1148.0], [49.0, 1148.0], [49.1, 1149.0], [49.2, 1149.0], [49.3, 1149.0], [49.4, 1150.0], [49.5, 1150.0], [49.6, 1150.0], [49.7, 1151.0], [49.8, 1151.0], [49.9, 1152.0], [50.0, 1152.0], [50.1, 1152.0], [50.2, 1152.0], [50.3, 1153.0], [50.4, 1153.0], [50.5, 1154.0], [50.6, 1155.0], [50.7, 1155.0], [50.8, 1155.0], [50.9, 1156.0], [51.0, 1156.0], [51.1, 1156.0], [51.2, 1157.0], [51.3, 1157.0], [51.4, 1158.0], [51.5, 1158.0], [51.6, 1159.0], [51.7, 1159.0], [51.8, 1159.0], [51.9, 1160.0], [52.0, 1160.0], [52.1, 1161.0], [52.2, 1161.0], [52.3, 1161.0], [52.4, 1162.0], [52.5, 1162.0], [52.6, 1162.0], [52.7, 1163.0], [52.8, 1163.0], [52.9, 1163.0], [53.0, 1164.0], [53.1, 1164.0], [53.2, 1164.0], [53.3, 1165.0], [53.4, 1165.0], [53.5, 1165.0], [53.6, 1166.0], [53.7, 1166.0], [53.8, 1166.0], [53.9, 1167.0], [54.0, 1167.0], [54.1, 1167.0], [54.2, 1168.0], [54.3, 1168.0], [54.4, 1168.0], [54.5, 1169.0], [54.6, 1169.0], [54.7, 1169.0], [54.8, 1170.0], [54.9, 1170.0], [55.0, 1170.0], [55.1, 1171.0], [55.2, 1172.0], [55.3, 1172.0], [55.4, 1172.0], [55.5, 1173.0], [55.6, 1173.0], [55.7, 1173.0], [55.8, 1174.0], [55.9, 1174.0], [56.0, 1175.0], [56.1, 1175.0], [56.2, 1175.0], [56.3, 1176.0], [56.4, 1176.0], [56.5, 1176.0], [56.6, 1176.0], [56.7, 1177.0], [56.8, 1177.0], [56.9, 1178.0], [57.0, 1178.0], [57.1, 1179.0], [57.2, 1179.0], [57.3, 1180.0], [57.4, 1180.0], [57.5, 1180.0], [57.6, 1180.0], [57.7, 1181.0], [57.8, 1181.0], [57.9, 1181.0], [58.0, 1182.0], [58.1, 1182.0], [58.2, 1182.0], [58.3, 1183.0], [58.4, 1183.0], [58.5, 1183.0], [58.6, 1184.0], [58.7, 1184.0], [58.8, 1184.0], [58.9, 1185.0], [59.0, 1185.0], [59.1, 1186.0], [59.2, 1186.0], [59.3, 1187.0], [59.4, 1187.0], [59.5, 1187.0], [59.6, 1187.0], [59.7, 1188.0], [59.8, 1188.0], [59.9, 1189.0], [60.0, 1189.0], [60.1, 1190.0], [60.2, 1190.0], [60.3, 1191.0], [60.4, 1191.0], [60.5, 1191.0], [60.6, 1192.0], [60.7, 1192.0], [60.8, 1193.0], [60.9, 1193.0], [61.0, 1193.0], [61.1, 1194.0], [61.2, 1194.0], [61.3, 1194.0], [61.4, 1195.0], [61.5, 1195.0], [61.6, 1195.0], [61.7, 1196.0], [61.8, 1196.0], [61.9, 1197.0], [62.0, 1197.0], [62.1, 1198.0], [62.2, 1198.0], [62.3, 1198.0], [62.4, 1199.0], [62.5, 1199.0], [62.6, 1199.0], [62.7, 1200.0], [62.8, 1200.0], [62.9, 1201.0], [63.0, 1201.0], [63.1, 1201.0], [63.2, 1201.0], [63.3, 1202.0], [63.4, 1202.0], [63.5, 1203.0], [63.6, 1203.0], [63.7, 1204.0], [63.8, 1204.0], [63.9, 1205.0], [64.0, 1205.0], [64.1, 1205.0], [64.2, 1206.0], [64.3, 1206.0], [64.4, 1207.0], [64.5, 1207.0], [64.6, 1207.0], [64.7, 1208.0], [64.8, 1208.0], [64.9, 1208.0], [65.0, 1209.0], [65.1, 1209.0], [65.2, 1209.0], [65.3, 1210.0], [65.4, 1210.0], [65.5, 1211.0], [65.6, 1211.0], [65.7, 1211.0], [65.8, 1212.0], [65.9, 1212.0], [66.0, 1212.0], [66.1, 1213.0], [66.2, 1213.0], [66.3, 1213.0], [66.4, 1214.0], [66.5, 1214.0], [66.6, 1214.0], [66.7, 1215.0], [66.8, 1215.0], [66.9, 1215.0], [67.0, 1215.0], [67.1, 1216.0], [67.2, 1216.0], [67.3, 1216.0], [67.4, 1217.0], [67.5, 1217.0], [67.6, 1218.0], [67.7, 1218.0], [67.8, 1218.0], [67.9, 1219.0], [68.0, 1219.0], [68.1, 1220.0], [68.2, 1220.0], [68.3, 1221.0], [68.4, 1221.0], [68.5, 1221.0], [68.6, 1222.0], [68.7, 1222.0], [68.8, 1223.0], [68.9, 1223.0], [69.0, 1223.0], [69.1, 1224.0], [69.2, 1224.0], [69.3, 1225.0], [69.4, 1225.0], [69.5, 1226.0], [69.6, 1226.0], [69.7, 1227.0], [69.8, 1227.0], [69.9, 1227.0], [70.0, 1228.0], [70.1, 1228.0], [70.2, 1228.0], [70.3, 1229.0], [70.4, 1229.0], [70.5, 1229.0], [70.6, 1230.0], [70.7, 1230.0], [70.8, 1230.0], [70.9, 1231.0], [71.0, 1232.0], [71.1, 1232.0], [71.2, 1232.0], [71.3, 1233.0], [71.4, 1233.0], [71.5, 1234.0], [71.6, 1234.0], [71.7, 1235.0], [71.8, 1235.0], [71.9, 1236.0], [72.0, 1236.0], [72.1, 1236.0], [72.2, 1237.0], [72.3, 1237.0], [72.4, 1238.0], [72.5, 1238.0], [72.6, 1238.0], [72.7, 1239.0], [72.8, 1239.0], [72.9, 1240.0], [73.0, 1240.0], [73.1, 1241.0], [73.2, 1241.0], [73.3, 1241.0], [73.4, 1242.0], [73.5, 1242.0], [73.6, 1243.0], [73.7, 1243.0], [73.8, 1243.0], [73.9, 1244.0], [74.0, 1244.0], [74.1, 1245.0], [74.2, 1245.0], [74.3, 1245.0], [74.4, 1246.0], [74.5, 1246.0], [74.6, 1247.0], [74.7, 1247.0], [74.8, 1248.0], [74.9, 1248.0], [75.0, 1249.0], [75.1, 1249.0], [75.2, 1249.0], [75.3, 1250.0], [75.4, 1250.0], [75.5, 1251.0], [75.6, 1251.0], [75.7, 1251.0], [75.8, 1252.0], [75.9, 1252.0], [76.0, 1253.0], [76.1, 1253.0], [76.2, 1254.0], [76.3, 1254.0], [76.4, 1255.0], [76.5, 1255.0], [76.6, 1256.0], [76.7, 1256.0], [76.8, 1257.0], [76.9, 1257.0], [77.0, 1257.0], [77.1, 1257.0], [77.2, 1258.0], [77.3, 1259.0], [77.4, 1259.0], [77.5, 1260.0], [77.6, 1260.0], [77.7, 1260.0], [77.8, 1261.0], [77.9, 1262.0], [78.0, 1262.0], [78.1, 1262.0], [78.2, 1263.0], [78.3, 1264.0], [78.4, 1264.0], [78.5, 1265.0], [78.6, 1265.0], [78.7, 1265.0], [78.8, 1266.0], [78.9, 1267.0], [79.0, 1267.0], [79.1, 1268.0], [79.2, 1269.0], [79.3, 1269.0], [79.4, 1270.0], [79.5, 1270.0], [79.6, 1271.0], [79.7, 1272.0], [79.8, 1272.0], [79.9, 1272.0], [80.0, 1273.0], [80.1, 1274.0], [80.2, 1274.0], [80.3, 1275.0], [80.4, 1275.0], [80.5, 1275.0], [80.6, 1276.0], [80.7, 1277.0], [80.8, 1277.0], [80.9, 1278.0], [81.0, 1278.0], [81.1, 1279.0], [81.2, 1279.0], [81.3, 1280.0], [81.4, 1280.0], [81.5, 1281.0], [81.6, 1282.0], [81.7, 1282.0], [81.8, 1283.0], [81.9, 1283.0], [82.0, 1284.0], [82.1, 1284.0], [82.2, 1285.0], [82.3, 1285.0], [82.4, 1286.0], [82.5, 1286.0], [82.6, 1287.0], [82.7, 1287.0], [82.8, 1288.0], [82.9, 1289.0], [83.0, 1289.0], [83.1, 1290.0], [83.2, 1290.0], [83.3, 1291.0], [83.4, 1291.0], [83.5, 1292.0], [83.6, 1293.0], [83.7, 1293.0], [83.8, 1294.0], [83.9, 1294.0], [84.0, 1295.0], [84.1, 1296.0], [84.2, 1297.0], [84.3, 1297.0], [84.4, 1298.0], [84.5, 1298.0], [84.6, 1299.0], [84.7, 1300.0], [84.8, 1300.0], [84.9, 1301.0], [85.0, 1302.0], [85.1, 1302.0], [85.2, 1303.0], [85.3, 1303.0], [85.4, 1304.0], [85.5, 1305.0], [85.6, 1306.0], [85.7, 1306.0], [85.8, 1307.0], [85.9, 1307.0], [86.0, 1308.0], [86.1, 1309.0], [86.2, 1309.0], [86.3, 1310.0], [86.4, 1311.0], [86.5, 1311.0], [86.6, 1312.0], [86.7, 1312.0], [86.8, 1313.0], [86.9, 1314.0], [87.0, 1314.0], [87.1, 1315.0], [87.2, 1316.0], [87.3, 1317.0], [87.4, 1317.0], [87.5, 1318.0], [87.6, 1319.0], [87.7, 1320.0], [87.8, 1321.0], [87.9, 1321.0], [88.0, 1322.0], [88.1, 1323.0], [88.2, 1324.0], [88.3, 1325.0], [88.4, 1325.0], [88.5, 1326.0], [88.6, 1328.0], [88.7, 1328.0], [88.8, 1330.0], [88.9, 1331.0], [89.0, 1332.0], [89.1, 1333.0], [89.2, 1333.0], [89.3, 1334.0], [89.4, 1335.0], [89.5, 1336.0], [89.6, 1336.0], [89.7, 1337.0], [89.8, 1338.0], [89.9, 1339.0], [90.0, 1340.0], [90.1, 1341.0], [90.2, 1342.0], [90.3, 1343.0], [90.4, 1344.0], [90.5, 1344.0], [90.6, 1345.0], [90.7, 1346.0], [90.8, 1347.0], [90.9, 1348.0], [91.0, 1348.0], [91.1, 1349.0], [91.2, 1350.0], [91.3, 1351.0], [91.4, 1352.0], [91.5, 1353.0], [91.6, 1354.0], [91.7, 1356.0], [91.8, 1357.0], [91.9, 1358.0], [92.0, 1359.0], [92.1, 1360.0], [92.2, 1361.0], [92.3, 1362.0], [92.4, 1363.0], [92.5, 1364.0], [92.6, 1365.0], [92.7, 1365.0], [92.8, 1367.0], [92.9, 1369.0], [93.0, 1370.0], [93.1, 1371.0], [93.2, 1372.0], [93.3, 1373.0], [93.4, 1375.0], [93.5, 1377.0], [93.6, 1378.0], [93.7, 1379.0], [93.8, 1380.0], [93.9, 1382.0], [94.0, 1383.0], [94.1, 1383.0], [94.2, 1385.0], [94.3, 1386.0], [94.4, 1387.0], [94.5, 1388.0], [94.6, 1389.0], [94.7, 1390.0], [94.8, 1391.0], [94.9, 1393.0], [95.0, 1395.0], [95.1, 1397.0], [95.2, 1399.0], [95.3, 1400.0], [95.4, 1402.0], [95.5, 1404.0], [95.6, 1405.0], [95.7, 1408.0], [95.8, 1410.0], [95.9, 1413.0], [96.0, 1415.0], [96.1, 1417.0], [96.2, 1420.0], [96.3, 1421.0], [96.4, 1423.0], [96.5, 1425.0], [96.6, 1428.0], [96.7, 1430.0], [96.8, 1431.0], [96.9, 1434.0], [97.0, 1436.0], [97.1, 1441.0], [97.2, 1443.0], [97.3, 1446.0], [97.4, 1449.0], [97.5, 1453.0], [97.6, 1455.0], [97.7, 1458.0], [97.8, 1459.0], [97.9, 1463.0], [98.0, 1467.0], [98.1, 1470.0], [98.2, 1474.0], [98.3, 1478.0], [98.4, 1483.0], [98.5, 1486.0], [98.6, 1491.0], [98.7, 1495.0], [98.8, 1501.0], [98.9, 1509.0], [99.0, 1521.0], [99.1, 1531.0], [99.2, 1549.0], [99.3, 1559.0], [99.4, 1570.0], [99.5, 1588.0], [99.6, 1626.0], [99.7, 1662.0], [99.8, 1767.0], [99.9, 1851.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2434.0, "series": [{"data": [[2200.0, 1.0], [2300.0, 1.0], [600.0, 129.0], [700.0, 75.0], [800.0, 94.0], [200.0, 84.0], [900.0, 426.0], [1000.0, 1407.0], [1100.0, 2434.0], [1200.0, 2096.0], [300.0, 456.0], [1300.0, 998.0], [1400.0, 341.0], [1500.0, 72.0], [1600.0, 18.0], [400.0, 586.0], [1700.0, 8.0], [1800.0, 10.0], [1900.0, 1.0], [2000.0, 3.0], [500.0, 256.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 114.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8247.0, "series": [{"data": [[0.0, 1135.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8247.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.0, "minX": 1.55710398E12, "maxY": 10.0, "series": [{"data": [[1.55710428E12, 10.0], [1.55710398E12, 10.0], [1.55710494E12, 10.0], [1.55710488E12, 10.0], [1.55710458E12, 10.0], [1.55710452E12, 10.0], [1.55710422E12, 10.0], [1.55710416E12, 10.0], [1.55710482E12, 10.0], [1.55710476E12, 10.0], [1.55710446E12, 10.0], [1.5571044E12, 10.0], [1.5571041E12, 10.0], [1.55710404E12, 10.0], [1.557105E12, 10.0], [1.5571047E12, 10.0], [1.55710464E12, 10.0], [1.55710434E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.557105E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1066.939553496206, "minX": 10.0, "maxY": 1066.939553496206, "series": [{"data": [[10.0, 1066.939553496206]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[10.0, 1066.939553496206]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 32107.8, "minX": 1.55710398E12, "maxY": 387178.0, "series": [{"data": [[1.55710428E12, 146365.01666666666], [1.55710398E12, 112340.28333333334], [1.55710494E12, 387178.0], [1.55710488E12, 163377.38333333333], [1.55710458E12, 145778.38333333333], [1.55710452E12, 149004.86666666667], [1.55710422E12, 146951.65], [1.55710416E12, 147538.28333333333], [1.55710482E12, 151058.08333333334], [1.55710476E12, 149884.81666666668], [1.55710446E12, 149298.18333333332], [1.5571044E12, 147538.28333333333], [1.5571041E12, 148418.23333333334], [1.55710404E12, 148124.91666666666], [1.557105E12, 51917.05], [1.5571047E12, 144898.43333333332], [1.55710464E12, 147244.96666666667], [1.55710434E12, 148418.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55710428E12, 90518.6], [1.55710398E12, 69476.2], [1.55710494E12, 239448.0], [1.55710488E12, 101039.8], [1.55710458E12, 90155.8], [1.55710452E12, 92151.2], [1.55710422E12, 90881.4], [1.55710416E12, 91244.2], [1.55710482E12, 93421.0], [1.55710476E12, 92695.4], [1.55710446E12, 92332.6], [1.5571044E12, 91244.2], [1.5571041E12, 91788.4], [1.55710404E12, 91607.0], [1.557105E12, 32107.8], [1.5571047E12, 89611.6], [1.55710464E12, 91062.8], [1.55710434E12, 91788.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.557105E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 389.21468926553683, "minX": 1.55710398E12, "maxY": 1214.453441295547, "series": [{"data": [[1.55710428E12, 1205.0581162324643], [1.55710398E12, 1212.9634464751966], [1.55710494E12, 454.4234848484853], [1.55710488E12, 1082.1472172351891], [1.55710458E12, 1206.1428571428567], [1.55710452E12, 1181.8031496062986], [1.55710422E12, 1196.3233532934132], [1.55710416E12, 1189.308151093439], [1.55710482E12, 1164.9747572815534], [1.55710476E12, 1172.8023483365955], [1.55710446E12, 1177.5756385068767], [1.5571044E12, 1195.4791252485093], [1.5571041E12, 1184.4565217391303], [1.55710404E12, 1187.5346534653452], [1.557105E12, 389.21468926553683], [1.5571047E12, 1214.453441295547], [1.55710464E12, 1191.9422310756977], [1.55710434E12, 1184.9466403162064]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.557105E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 389.19774011299455, "minX": 1.55710398E12, "maxY": 1214.3340080971661, "series": [{"data": [[1.55710428E12, 1204.8797595190365], [1.55710398E12, 1212.6240208877284], [1.55710494E12, 454.37348484848474], [1.55710488E12, 1082.017953321365], [1.55710458E12, 1206.020120724345], [1.55710452E12, 1181.6732283464548], [1.55710422E12, 1196.145708582835], [1.55710416E12, 1189.1212723658055], [1.55710482E12, 1164.8310679611654], [1.55710476E12, 1172.690802348337], [1.55710446E12, 1177.4302554027508], [1.5571044E12, 1195.3459244532794], [1.5571041E12, 1184.2411067193684], [1.55710404E12, 1187.3148514851491], [1.557105E12, 389.19774011299455], [1.5571047E12, 1214.3340080971661], [1.55710464E12, 1191.816733067729], [1.55710434E12, 1184.7984189723327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.557105E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.3000000000000003, "minX": 1.55710398E12, "maxY": 5.911227154046992, "series": [{"data": [[1.55710428E12, 0.7715430861723451], [1.55710398E12, 5.911227154046992], [1.55710494E12, 0.3000000000000003], [1.55710488E12, 0.5763016157989227], [1.55710458E12, 0.788732394366197], [1.55710452E12, 0.6712598425196854], [1.55710422E12, 0.8602794411177642], [1.55710416E12, 1.1809145129224656], [1.55710482E12, 0.6213592233009712], [1.55710476E12, 0.5988258317025438], [1.55710446E12, 0.8428290766208248], [1.5571044E12, 0.6520874751491055], [1.5571041E12, 1.2490118577075098], [1.55710404E12, 1.3366336633663352], [1.557105E12, 0.3446327683615818], [1.5571047E12, 0.6882591093117415], [1.55710464E12, 0.5816733067729087], [1.55710434E12, 0.7371541501976285]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.557105E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 206.0, "minX": 1.55710398E12, "maxY": 2337.0, "series": [{"data": [[1.55710428E12, 1663.0], [1.55710398E12, 2337.0], [1.55710494E12, 1135.0], [1.55710488E12, 1601.0], [1.55710458E12, 1909.0], [1.55710452E12, 1572.0], [1.55710422E12, 1660.0], [1.55710416E12, 1552.0], [1.55710482E12, 1597.0], [1.55710476E12, 1591.0], [1.55710446E12, 1642.0], [1.5571044E12, 1851.0], [1.5571041E12, 1550.0], [1.55710404E12, 1688.0], [1.557105E12, 570.0], [1.5571047E12, 1618.0], [1.55710464E12, 1623.0], [1.55710434E12, 1701.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55710428E12, 803.0], [1.55710398E12, 839.0], [1.55710494E12, 206.0], [1.55710488E12, 253.0], [1.55710458E12, 778.0], [1.55710452E12, 829.0], [1.55710422E12, 760.0], [1.55710416E12, 827.0], [1.55710482E12, 693.0], [1.55710476E12, 707.0], [1.55710446E12, 901.0], [1.5571044E12, 843.0], [1.5571041E12, 806.0], [1.55710404E12, 821.0], [1.557105E12, 241.0], [1.5571047E12, 867.0], [1.55710464E12, 707.0], [1.55710434E12, 833.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55710428E12, 1373.0], [1.55710398E12, 1393.2], [1.55710494E12, 604.9000000000001], [1.55710488E12, 1314.2], [1.55710458E12, 1390.2], [1.55710452E12, 1337.2], [1.55710422E12, 1364.0], [1.55710416E12, 1360.6], [1.55710482E12, 1338.8000000000002], [1.55710476E12, 1328.0], [1.55710446E12, 1332.0], [1.5571044E12, 1361.6], [1.5571041E12, 1352.3], [1.55710404E12, 1344.4], [1.557105E12, 490.80000000000007], [1.5571047E12, 1380.0], [1.55710464E12, 1348.0], [1.55710434E12, 1342.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55710428E12, 1569.0], [1.55710398E12, 2033.6399999999983], [1.55710494E12, 817.79], [1.55710488E12, 1463.8799999999994], [1.55710458E12, 1785.6199999999994], [1.55710452E12, 1472.73], [1.55710422E12, 1587.3000000000015], [1.55710416E12, 1508.5599999999997], [1.55710482E12, 1473.04], [1.55710476E12, 1502.76], [1.55710446E12, 1472.5999999999997], [1.5571044E12, 1766.5599999999997], [1.5571041E12, 1513.6000000000001], [1.55710404E12, 1544.98], [1.557105E12, 567.66], [1.5571047E12, 1513.7500000000002], [1.55710464E12, 1564.7899999999997], [1.55710434E12, 1546.3000000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55710428E12, 1444.0], [1.55710398E12, 1461.5999999999997], [1.55710494E12, 660.0], [1.55710488E12, 1363.8000000000002], [1.55710458E12, 1456.9999999999995], [1.55710452E12, 1389.0], [1.55710422E12, 1418.9], [1.55710416E12, 1402.8], [1.55710482E12, 1401.0], [1.55710476E12, 1380.7999999999997], [1.55710446E12, 1376.0], [1.5571044E12, 1459.3999999999999], [1.5571041E12, 1399.9499999999998], [1.55710404E12, 1385.0], [1.557105E12, 528.8], [1.5571047E12, 1431.0], [1.55710464E12, 1403.55], [1.55710434E12, 1406.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.557105E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 376.0, "minX": 5.0, "maxY": 1262.0, "series": [{"data": [[8.0, 1183.0], [9.0, 1183.0], [10.0, 1176.5], [11.0, 798.5], [12.0, 731.5], [13.0, 716.5], [14.0, 753.0], [15.0, 657.0], [16.0, 660.0], [17.0, 603.0], [18.0, 593.5], [19.0, 515.0], [5.0, 1262.0], [20.0, 467.0], [21.0, 459.0], [22.0, 443.5], [23.0, 428.5], [6.0, 1180.5], [24.0, 412.0], [25.0, 398.5], [26.0, 393.5], [27.0, 376.0], [7.0, 1195.0], [28.0, 376.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 376.0, "minX": 5.0, "maxY": 1261.0, "series": [{"data": [[8.0, 1183.0], [9.0, 1183.0], [10.0, 1176.5], [11.0, 798.5], [12.0, 731.5], [13.0, 716.5], [14.0, 753.0], [15.0, 657.0], [16.0, 660.0], [17.0, 603.0], [18.0, 593.5], [19.0, 515.0], [5.0, 1261.0], [20.0, 467.0], [21.0, 459.0], [22.0, 443.5], [23.0, 428.0], [6.0, 1180.0], [24.0, 412.0], [25.0, 398.5], [26.0, 393.5], [27.0, 376.0], [7.0, 1195.0], [28.0, 376.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.783333333333333, "minX": 1.55710398E12, "maxY": 22.0, "series": [{"data": [[1.55710428E12, 8.316666666666666], [1.55710398E12, 6.55], [1.55710494E12, 22.0], [1.55710488E12, 9.283333333333333], [1.55710458E12, 8.283333333333333], [1.55710452E12, 8.466666666666667], [1.55710422E12, 8.35], [1.55710416E12, 8.383333333333333], [1.55710482E12, 8.583333333333334], [1.55710476E12, 8.516666666666667], [1.55710446E12, 8.483333333333333], [1.5571044E12, 8.383333333333333], [1.5571041E12, 8.433333333333334], [1.55710404E12, 8.416666666666666], [1.557105E12, 2.783333333333333], [1.5571047E12, 8.233333333333333], [1.55710464E12, 8.366666666666667], [1.55710434E12, 8.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.557105E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.95, "minX": 1.55710398E12, "maxY": 22.0, "series": [{"data": [[1.55710428E12, 8.316666666666666], [1.55710398E12, 6.383333333333334], [1.55710494E12, 22.0], [1.55710488E12, 9.283333333333333], [1.55710458E12, 8.283333333333333], [1.55710452E12, 8.466666666666667], [1.55710422E12, 8.35], [1.55710416E12, 8.383333333333333], [1.55710482E12, 8.583333333333334], [1.55710476E12, 8.516666666666667], [1.55710446E12, 8.483333333333333], [1.5571044E12, 8.383333333333333], [1.5571041E12, 8.433333333333334], [1.55710404E12, 8.416666666666666], [1.557105E12, 2.95], [1.5571047E12, 8.233333333333333], [1.55710464E12, 8.366666666666667], [1.55710434E12, 8.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.557105E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.95, "minX": 1.55710398E12, "maxY": 22.0, "series": [{"data": [[1.55710428E12, 8.316666666666666], [1.55710398E12, 6.383333333333334], [1.55710494E12, 22.0], [1.55710488E12, 9.283333333333333], [1.55710458E12, 8.283333333333333], [1.55710452E12, 8.466666666666667], [1.55710422E12, 8.35], [1.55710416E12, 8.383333333333333], [1.55710482E12, 8.583333333333334], [1.55710476E12, 8.516666666666667], [1.55710446E12, 8.483333333333333], [1.5571044E12, 8.383333333333333], [1.5571041E12, 8.433333333333334], [1.55710404E12, 8.416666666666666], [1.557105E12, 2.95], [1.5571047E12, 8.233333333333333], [1.55710464E12, 8.366666666666667], [1.55710434E12, 8.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.557105E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.95, "minX": 1.55710398E12, "maxY": 22.0, "series": [{"data": [[1.55710428E12, 8.316666666666666], [1.55710398E12, 6.383333333333334], [1.55710494E12, 22.0], [1.55710488E12, 9.283333333333333], [1.55710458E12, 8.283333333333333], [1.55710452E12, 8.466666666666667], [1.55710422E12, 8.35], [1.55710416E12, 8.383333333333333], [1.55710482E12, 8.583333333333334], [1.55710476E12, 8.516666666666667], [1.55710446E12, 8.483333333333333], [1.5571044E12, 8.383333333333333], [1.5571041E12, 8.433333333333334], [1.55710404E12, 8.416666666666666], [1.557105E12, 2.95], [1.5571047E12, 8.233333333333333], [1.55710464E12, 8.366666666666667], [1.55710434E12, 8.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.557105E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

