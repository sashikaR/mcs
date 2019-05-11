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
        data: {"result": {"minY": 51.0, "minX": 0.0, "maxY": 722.0, "series": [{"data": [[0.0, 51.0], [0.1, 99.0], [0.2, 111.0], [0.3, 118.0], [0.4, 122.0], [0.5, 126.0], [0.6, 129.0], [0.7, 131.0], [0.8, 133.0], [0.9, 136.0], [1.0, 137.0], [1.1, 139.0], [1.2, 141.0], [1.3, 142.0], [1.4, 144.0], [1.5, 145.0], [1.6, 146.0], [1.7, 148.0], [1.8, 149.0], [1.9, 150.0], [2.0, 151.0], [2.1, 152.0], [2.2, 153.0], [2.3, 154.0], [2.4, 155.0], [2.5, 156.0], [2.6, 157.0], [2.7, 157.0], [2.8, 158.0], [2.9, 159.0], [3.0, 160.0], [3.1, 161.0], [3.2, 161.0], [3.3, 162.0], [3.4, 163.0], [3.5, 164.0], [3.6, 164.0], [3.7, 165.0], [3.8, 166.0], [3.9, 166.0], [4.0, 167.0], [4.1, 168.0], [4.2, 168.0], [4.3, 169.0], [4.4, 169.0], [4.5, 170.0], [4.6, 171.0], [4.7, 171.0], [4.8, 172.0], [4.9, 172.0], [5.0, 172.0], [5.1, 173.0], [5.2, 173.0], [5.3, 174.0], [5.4, 174.0], [5.5, 175.0], [5.6, 175.0], [5.7, 176.0], [5.8, 176.0], [5.9, 177.0], [6.0, 177.0], [6.1, 177.0], [6.2, 178.0], [6.3, 178.0], [6.4, 179.0], [6.5, 179.0], [6.6, 179.0], [6.7, 180.0], [6.8, 180.0], [6.9, 181.0], [7.0, 181.0], [7.1, 181.0], [7.2, 182.0], [7.3, 182.0], [7.4, 182.0], [7.5, 183.0], [7.6, 183.0], [7.7, 183.0], [7.8, 184.0], [7.9, 184.0], [8.0, 184.0], [8.1, 185.0], [8.2, 185.0], [8.3, 185.0], [8.4, 186.0], [8.5, 186.0], [8.6, 186.0], [8.7, 187.0], [8.8, 187.0], [8.9, 187.0], [9.0, 188.0], [9.1, 188.0], [9.2, 188.0], [9.3, 189.0], [9.4, 189.0], [9.5, 189.0], [9.6, 190.0], [9.7, 190.0], [9.8, 190.0], [9.9, 190.0], [10.0, 191.0], [10.1, 191.0], [10.2, 191.0], [10.3, 192.0], [10.4, 192.0], [10.5, 192.0], [10.6, 192.0], [10.7, 193.0], [10.8, 193.0], [10.9, 193.0], [11.0, 193.0], [11.1, 194.0], [11.2, 194.0], [11.3, 194.0], [11.4, 194.0], [11.5, 195.0], [11.6, 195.0], [11.7, 195.0], [11.8, 195.0], [11.9, 196.0], [12.0, 196.0], [12.1, 196.0], [12.2, 196.0], [12.3, 196.0], [12.4, 197.0], [12.5, 197.0], [12.6, 197.0], [12.7, 198.0], [12.8, 198.0], [12.9, 198.0], [13.0, 198.0], [13.1, 198.0], [13.2, 199.0], [13.3, 199.0], [13.4, 199.0], [13.5, 199.0], [13.6, 200.0], [13.7, 200.0], [13.8, 200.0], [13.9, 200.0], [14.0, 201.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 202.0], [14.5, 202.0], [14.6, 202.0], [14.7, 202.0], [14.8, 203.0], [14.9, 203.0], [15.0, 203.0], [15.1, 203.0], [15.2, 203.0], [15.3, 204.0], [15.4, 204.0], [15.5, 204.0], [15.6, 204.0], [15.7, 205.0], [15.8, 205.0], [15.9, 205.0], [16.0, 205.0], [16.1, 205.0], [16.2, 206.0], [16.3, 206.0], [16.4, 206.0], [16.5, 206.0], [16.6, 207.0], [16.7, 207.0], [16.8, 207.0], [16.9, 207.0], [17.0, 207.0], [17.1, 208.0], [17.2, 208.0], [17.3, 208.0], [17.4, 208.0], [17.5, 208.0], [17.6, 209.0], [17.7, 209.0], [17.8, 209.0], [17.9, 209.0], [18.0, 209.0], [18.1, 210.0], [18.2, 210.0], [18.3, 210.0], [18.4, 210.0], [18.5, 210.0], [18.6, 211.0], [18.7, 211.0], [18.8, 211.0], [18.9, 211.0], [19.0, 211.0], [19.1, 212.0], [19.2, 212.0], [19.3, 212.0], [19.4, 212.0], [19.5, 212.0], [19.6, 212.0], [19.7, 213.0], [19.8, 213.0], [19.9, 213.0], [20.0, 213.0], [20.1, 213.0], [20.2, 214.0], [20.3, 214.0], [20.4, 214.0], [20.5, 214.0], [20.6, 214.0], [20.7, 214.0], [20.8, 215.0], [20.9, 215.0], [21.0, 215.0], [21.1, 215.0], [21.2, 215.0], [21.3, 215.0], [21.4, 216.0], [21.5, 216.0], [21.6, 216.0], [21.7, 216.0], [21.8, 216.0], [21.9, 216.0], [22.0, 217.0], [22.1, 217.0], [22.2, 217.0], [22.3, 217.0], [22.4, 217.0], [22.5, 218.0], [22.6, 218.0], [22.7, 218.0], [22.8, 218.0], [22.9, 218.0], [23.0, 218.0], [23.1, 219.0], [23.2, 219.0], [23.3, 219.0], [23.4, 219.0], [23.5, 219.0], [23.6, 219.0], [23.7, 220.0], [23.8, 220.0], [23.9, 220.0], [24.0, 220.0], [24.1, 220.0], [24.2, 220.0], [24.3, 221.0], [24.4, 221.0], [24.5, 221.0], [24.6, 221.0], [24.7, 221.0], [24.8, 221.0], [24.9, 222.0], [25.0, 222.0], [25.1, 222.0], [25.2, 222.0], [25.3, 222.0], [25.4, 222.0], [25.5, 223.0], [25.6, 223.0], [25.7, 223.0], [25.8, 223.0], [25.9, 223.0], [26.0, 223.0], [26.1, 224.0], [26.2, 224.0], [26.3, 224.0], [26.4, 224.0], [26.5, 224.0], [26.6, 224.0], [26.7, 225.0], [26.8, 225.0], [26.9, 225.0], [27.0, 225.0], [27.1, 225.0], [27.2, 225.0], [27.3, 226.0], [27.4, 226.0], [27.5, 226.0], [27.6, 226.0], [27.7, 226.0], [27.8, 226.0], [27.9, 226.0], [28.0, 227.0], [28.1, 227.0], [28.2, 227.0], [28.3, 227.0], [28.4, 227.0], [28.5, 227.0], [28.6, 228.0], [28.7, 228.0], [28.8, 228.0], [28.9, 228.0], [29.0, 228.0], [29.1, 228.0], [29.2, 228.0], [29.3, 229.0], [29.4, 229.0], [29.5, 229.0], [29.6, 229.0], [29.7, 229.0], [29.8, 229.0], [29.9, 229.0], [30.0, 230.0], [30.1, 230.0], [30.2, 230.0], [30.3, 230.0], [30.4, 230.0], [30.5, 230.0], [30.6, 231.0], [30.7, 231.0], [30.8, 231.0], [30.9, 231.0], [31.0, 231.0], [31.1, 231.0], [31.2, 232.0], [31.3, 232.0], [31.4, 232.0], [31.5, 232.0], [31.6, 232.0], [31.7, 232.0], [31.8, 232.0], [31.9, 233.0], [32.0, 233.0], [32.1, 233.0], [32.2, 233.0], [32.3, 233.0], [32.4, 233.0], [32.5, 234.0], [32.6, 234.0], [32.7, 234.0], [32.8, 234.0], [32.9, 234.0], [33.0, 234.0], [33.1, 234.0], [33.2, 235.0], [33.3, 235.0], [33.4, 235.0], [33.5, 235.0], [33.6, 235.0], [33.7, 235.0], [33.8, 236.0], [33.9, 236.0], [34.0, 236.0], [34.1, 236.0], [34.2, 236.0], [34.3, 236.0], [34.4, 237.0], [34.5, 237.0], [34.6, 237.0], [34.7, 237.0], [34.8, 237.0], [34.9, 237.0], [35.0, 237.0], [35.1, 237.0], [35.2, 238.0], [35.3, 238.0], [35.4, 238.0], [35.5, 238.0], [35.6, 238.0], [35.7, 238.0], [35.8, 239.0], [35.9, 239.0], [36.0, 239.0], [36.1, 239.0], [36.2, 239.0], [36.3, 239.0], [36.4, 239.0], [36.5, 240.0], [36.6, 240.0], [36.7, 240.0], [36.8, 240.0], [36.9, 240.0], [37.0, 240.0], [37.1, 240.0], [37.2, 241.0], [37.3, 241.0], [37.4, 241.0], [37.5, 241.0], [37.6, 241.0], [37.7, 241.0], [37.8, 242.0], [37.9, 242.0], [38.0, 242.0], [38.1, 242.0], [38.2, 242.0], [38.3, 242.0], [38.4, 242.0], [38.5, 243.0], [38.6, 243.0], [38.7, 243.0], [38.8, 243.0], [38.9, 243.0], [39.0, 243.0], [39.1, 243.0], [39.2, 244.0], [39.3, 244.0], [39.4, 244.0], [39.5, 244.0], [39.6, 244.0], [39.7, 244.0], [39.8, 245.0], [39.9, 245.0], [40.0, 245.0], [40.1, 245.0], [40.2, 245.0], [40.3, 245.0], [40.4, 245.0], [40.5, 246.0], [40.6, 246.0], [40.7, 246.0], [40.8, 246.0], [40.9, 246.0], [41.0, 246.0], [41.1, 246.0], [41.2, 246.0], [41.3, 247.0], [41.4, 247.0], [41.5, 247.0], [41.6, 247.0], [41.7, 247.0], [41.8, 247.0], [41.9, 247.0], [42.0, 248.0], [42.1, 248.0], [42.2, 248.0], [42.3, 248.0], [42.4, 248.0], [42.5, 248.0], [42.6, 248.0], [42.7, 249.0], [42.8, 249.0], [42.9, 249.0], [43.0, 249.0], [43.1, 249.0], [43.2, 249.0], [43.3, 250.0], [43.4, 250.0], [43.5, 250.0], [43.6, 250.0], [43.7, 250.0], [43.8, 250.0], [43.9, 250.0], [44.0, 251.0], [44.1, 251.0], [44.2, 251.0], [44.3, 251.0], [44.4, 251.0], [44.5, 251.0], [44.6, 251.0], [44.7, 252.0], [44.8, 252.0], [44.9, 252.0], [45.0, 252.0], [45.1, 252.0], [45.2, 252.0], [45.3, 252.0], [45.4, 253.0], [45.5, 253.0], [45.6, 253.0], [45.7, 253.0], [45.8, 253.0], [45.9, 253.0], [46.0, 254.0], [46.1, 254.0], [46.2, 254.0], [46.3, 254.0], [46.4, 254.0], [46.5, 254.0], [46.6, 254.0], [46.7, 255.0], [46.8, 255.0], [46.9, 255.0], [47.0, 255.0], [47.1, 255.0], [47.2, 255.0], [47.3, 255.0], [47.4, 256.0], [47.5, 256.0], [47.6, 256.0], [47.7, 256.0], [47.8, 256.0], [47.9, 256.0], [48.0, 256.0], [48.1, 257.0], [48.2, 257.0], [48.3, 257.0], [48.4, 257.0], [48.5, 257.0], [48.6, 257.0], [48.7, 257.0], [48.8, 258.0], [48.9, 258.0], [49.0, 258.0], [49.1, 258.0], [49.2, 258.0], [49.3, 258.0], [49.4, 258.0], [49.5, 259.0], [49.6, 259.0], [49.7, 259.0], [49.8, 259.0], [49.9, 259.0], [50.0, 259.0], [50.1, 259.0], [50.2, 260.0], [50.3, 260.0], [50.4, 260.0], [50.5, 260.0], [50.6, 260.0], [50.7, 260.0], [50.8, 261.0], [50.9, 261.0], [51.0, 261.0], [51.1, 261.0], [51.2, 261.0], [51.3, 261.0], [51.4, 261.0], [51.5, 262.0], [51.6, 262.0], [51.7, 262.0], [51.8, 262.0], [51.9, 262.0], [52.0, 262.0], [52.1, 262.0], [52.2, 263.0], [52.3, 263.0], [52.4, 263.0], [52.5, 263.0], [52.6, 263.0], [52.7, 263.0], [52.8, 263.0], [52.9, 264.0], [53.0, 264.0], [53.1, 264.0], [53.2, 264.0], [53.3, 264.0], [53.4, 264.0], [53.5, 265.0], [53.6, 265.0], [53.7, 265.0], [53.8, 265.0], [53.9, 265.0], [54.0, 265.0], [54.1, 266.0], [54.2, 266.0], [54.3, 266.0], [54.4, 266.0], [54.5, 266.0], [54.6, 266.0], [54.7, 266.0], [54.8, 267.0], [54.9, 267.0], [55.0, 267.0], [55.1, 267.0], [55.2, 267.0], [55.3, 267.0], [55.4, 267.0], [55.5, 268.0], [55.6, 268.0], [55.7, 268.0], [55.8, 268.0], [55.9, 268.0], [56.0, 268.0], [56.1, 269.0], [56.2, 269.0], [56.3, 269.0], [56.4, 269.0], [56.5, 269.0], [56.6, 269.0], [56.7, 270.0], [56.8, 270.0], [56.9, 270.0], [57.0, 270.0], [57.1, 270.0], [57.2, 270.0], [57.3, 270.0], [57.4, 271.0], [57.5, 271.0], [57.6, 271.0], [57.7, 271.0], [57.8, 271.0], [57.9, 271.0], [58.0, 272.0], [58.1, 272.0], [58.2, 272.0], [58.3, 272.0], [58.4, 272.0], [58.5, 272.0], [58.6, 273.0], [58.7, 273.0], [58.8, 273.0], [58.9, 273.0], [59.0, 273.0], [59.1, 273.0], [59.2, 274.0], [59.3, 274.0], [59.4, 274.0], [59.5, 274.0], [59.6, 274.0], [59.7, 274.0], [59.8, 275.0], [59.9, 275.0], [60.0, 275.0], [60.1, 275.0], [60.2, 275.0], [60.3, 275.0], [60.4, 276.0], [60.5, 276.0], [60.6, 276.0], [60.7, 276.0], [60.8, 276.0], [60.9, 276.0], [61.0, 277.0], [61.1, 277.0], [61.2, 277.0], [61.3, 277.0], [61.4, 277.0], [61.5, 277.0], [61.6, 278.0], [61.7, 278.0], [61.8, 278.0], [61.9, 278.0], [62.0, 278.0], [62.1, 278.0], [62.2, 279.0], [62.3, 279.0], [62.4, 279.0], [62.5, 279.0], [62.6, 279.0], [62.7, 279.0], [62.8, 280.0], [62.9, 280.0], [63.0, 280.0], [63.1, 280.0], [63.2, 280.0], [63.3, 280.0], [63.4, 281.0], [63.5, 281.0], [63.6, 281.0], [63.7, 281.0], [63.8, 281.0], [63.9, 281.0], [64.0, 282.0], [64.1, 282.0], [64.2, 282.0], [64.3, 282.0], [64.4, 282.0], [64.5, 282.0], [64.6, 283.0], [64.7, 283.0], [64.8, 283.0], [64.9, 283.0], [65.0, 283.0], [65.1, 284.0], [65.2, 284.0], [65.3, 284.0], [65.4, 284.0], [65.5, 284.0], [65.6, 285.0], [65.7, 285.0], [65.8, 285.0], [65.9, 285.0], [66.0, 285.0], [66.1, 285.0], [66.2, 286.0], [66.3, 286.0], [66.4, 286.0], [66.5, 286.0], [66.6, 286.0], [66.7, 286.0], [66.8, 287.0], [66.9, 287.0], [67.0, 287.0], [67.1, 287.0], [67.2, 288.0], [67.3, 288.0], [67.4, 288.0], [67.5, 288.0], [67.6, 288.0], [67.7, 288.0], [67.8, 289.0], [67.9, 289.0], [68.0, 289.0], [68.1, 289.0], [68.2, 289.0], [68.3, 290.0], [68.4, 290.0], [68.5, 290.0], [68.6, 290.0], [68.7, 290.0], [68.8, 291.0], [68.9, 291.0], [69.0, 291.0], [69.1, 291.0], [69.2, 291.0], [69.3, 291.0], [69.4, 292.0], [69.5, 292.0], [69.6, 292.0], [69.7, 292.0], [69.8, 292.0], [69.9, 293.0], [70.0, 293.0], [70.1, 293.0], [70.2, 293.0], [70.3, 294.0], [70.4, 294.0], [70.5, 294.0], [70.6, 294.0], [70.7, 294.0], [70.8, 295.0], [70.9, 295.0], [71.0, 295.0], [71.1, 295.0], [71.2, 295.0], [71.3, 296.0], [71.4, 296.0], [71.5, 296.0], [71.6, 296.0], [71.7, 297.0], [71.8, 297.0], [71.9, 297.0], [72.0, 297.0], [72.1, 297.0], [72.2, 298.0], [72.3, 298.0], [72.4, 298.0], [72.5, 298.0], [72.6, 298.0], [72.7, 299.0], [72.8, 299.0], [72.9, 299.0], [73.0, 299.0], [73.1, 299.0], [73.2, 300.0], [73.3, 300.0], [73.4, 300.0], [73.5, 300.0], [73.6, 300.0], [73.7, 301.0], [73.8, 301.0], [73.9, 301.0], [74.0, 301.0], [74.1, 301.0], [74.2, 302.0], [74.3, 302.0], [74.4, 302.0], [74.5, 302.0], [74.6, 303.0], [74.7, 303.0], [74.8, 303.0], [74.9, 303.0], [75.0, 303.0], [75.1, 304.0], [75.2, 304.0], [75.3, 304.0], [75.4, 304.0], [75.5, 305.0], [75.6, 305.0], [75.7, 305.0], [75.8, 305.0], [75.9, 305.0], [76.0, 306.0], [76.1, 306.0], [76.2, 306.0], [76.3, 306.0], [76.4, 307.0], [76.5, 307.0], [76.6, 307.0], [76.7, 307.0], [76.8, 308.0], [76.9, 308.0], [77.0, 308.0], [77.1, 308.0], [77.2, 309.0], [77.3, 309.0], [77.4, 309.0], [77.5, 309.0], [77.6, 310.0], [77.7, 310.0], [77.8, 310.0], [77.9, 310.0], [78.0, 311.0], [78.1, 311.0], [78.2, 311.0], [78.3, 311.0], [78.4, 311.0], [78.5, 312.0], [78.6, 312.0], [78.7, 312.0], [78.8, 312.0], [78.9, 313.0], [79.0, 313.0], [79.1, 313.0], [79.2, 313.0], [79.3, 314.0], [79.4, 314.0], [79.5, 314.0], [79.6, 314.0], [79.7, 315.0], [79.8, 315.0], [79.9, 315.0], [80.0, 315.0], [80.1, 316.0], [80.2, 316.0], [80.3, 316.0], [80.4, 317.0], [80.5, 317.0], [80.6, 317.0], [80.7, 317.0], [80.8, 318.0], [80.9, 318.0], [81.0, 318.0], [81.1, 318.0], [81.2, 319.0], [81.3, 319.0], [81.4, 319.0], [81.5, 320.0], [81.6, 320.0], [81.7, 320.0], [81.8, 320.0], [81.9, 321.0], [82.0, 321.0], [82.1, 321.0], [82.2, 322.0], [82.3, 322.0], [82.4, 322.0], [82.5, 323.0], [82.6, 323.0], [82.7, 323.0], [82.8, 323.0], [82.9, 324.0], [83.0, 324.0], [83.1, 325.0], [83.2, 325.0], [83.3, 325.0], [83.4, 325.0], [83.5, 326.0], [83.6, 326.0], [83.7, 326.0], [83.8, 327.0], [83.9, 327.0], [84.0, 327.0], [84.1, 328.0], [84.2, 328.0], [84.3, 328.0], [84.4, 329.0], [84.5, 329.0], [84.6, 329.0], [84.7, 330.0], [84.8, 330.0], [84.9, 331.0], [85.0, 331.0], [85.1, 331.0], [85.2, 332.0], [85.3, 332.0], [85.4, 332.0], [85.5, 333.0], [85.6, 333.0], [85.7, 333.0], [85.8, 334.0], [85.9, 334.0], [86.0, 334.0], [86.1, 335.0], [86.2, 335.0], [86.3, 335.0], [86.4, 336.0], [86.5, 336.0], [86.6, 337.0], [86.7, 337.0], [86.8, 337.0], [86.9, 338.0], [87.0, 338.0], [87.1, 338.0], [87.2, 339.0], [87.3, 339.0], [87.4, 340.0], [87.5, 340.0], [87.6, 340.0], [87.7, 341.0], [87.8, 341.0], [87.9, 342.0], [88.0, 342.0], [88.1, 343.0], [88.2, 343.0], [88.3, 343.0], [88.4, 344.0], [88.5, 344.0], [88.6, 345.0], [88.7, 345.0], [88.8, 346.0], [88.9, 346.0], [89.0, 347.0], [89.1, 347.0], [89.2, 347.0], [89.3, 348.0], [89.4, 348.0], [89.5, 349.0], [89.6, 349.0], [89.7, 350.0], [89.8, 350.0], [89.9, 351.0], [90.0, 351.0], [90.1, 352.0], [90.2, 352.0], [90.3, 353.0], [90.4, 353.0], [90.5, 354.0], [90.6, 354.0], [90.7, 355.0], [90.8, 356.0], [90.9, 356.0], [91.0, 357.0], [91.1, 357.0], [91.2, 358.0], [91.3, 358.0], [91.4, 359.0], [91.5, 359.0], [91.6, 360.0], [91.7, 361.0], [91.8, 361.0], [91.9, 362.0], [92.0, 363.0], [92.1, 363.0], [92.2, 364.0], [92.3, 365.0], [92.4, 365.0], [92.5, 366.0], [92.6, 367.0], [92.7, 367.0], [92.8, 368.0], [92.9, 369.0], [93.0, 370.0], [93.1, 370.0], [93.2, 371.0], [93.3, 372.0], [93.4, 373.0], [93.5, 374.0], [93.6, 374.0], [93.7, 375.0], [93.8, 376.0], [93.9, 377.0], [94.0, 378.0], [94.1, 378.0], [94.2, 379.0], [94.3, 380.0], [94.4, 381.0], [94.5, 382.0], [94.6, 382.0], [94.7, 383.0], [94.8, 384.0], [94.9, 385.0], [95.0, 386.0], [95.1, 387.0], [95.2, 388.0], [95.3, 389.0], [95.4, 390.0], [95.5, 391.0], [95.6, 392.0], [95.7, 393.0], [95.8, 394.0], [95.9, 395.0], [96.0, 397.0], [96.1, 398.0], [96.2, 399.0], [96.3, 400.0], [96.4, 402.0], [96.5, 403.0], [96.6, 404.0], [96.7, 406.0], [96.8, 407.0], [96.9, 409.0], [97.0, 410.0], [97.1, 412.0], [97.2, 414.0], [97.3, 415.0], [97.4, 417.0], [97.5, 419.0], [97.6, 421.0], [97.7, 423.0], [97.8, 425.0], [97.9, 428.0], [98.0, 430.0], [98.1, 433.0], [98.2, 435.0], [98.3, 438.0], [98.4, 441.0], [98.5, 443.0], [98.6, 447.0], [98.7, 450.0], [98.8, 454.0], [98.9, 458.0], [99.0, 461.0], [99.1, 466.0], [99.2, 471.0], [99.3, 477.0], [99.4, 484.0], [99.5, 492.0], [99.6, 502.0], [99.7, 515.0], [99.8, 533.0], [99.9, 566.0], [100.0, 722.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 40192.0, "series": [{"data": [[0.0, 71.0], [300.0, 15574.0], [600.0, 28.0], [700.0, 2.0], [400.0, 2250.0], [100.0, 9053.0], [200.0, 40192.0], [500.0, 252.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 277.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 67145.0, "series": [{"data": [[0.0, 67145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 277.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.954732510288066, "minX": 1.55710134E12, "maxY": 10.0, "series": [{"data": [[1.55710206E12, 10.0], [1.55710236E12, 10.0], [1.55710266E12, 10.0], [1.55710164E12, 10.0], [1.55710134E12, 10.0], [1.55710296E12, 10.0], [1.55710194E12, 10.0], [1.55710224E12, 10.0], [1.55710254E12, 10.0], [1.55710284E12, 10.0], [1.55710314E12, 9.954732510288066], [1.55710182E12, 10.0], [1.55710152E12, 10.0], [1.55710212E12, 10.0], [1.55710242E12, 10.0], [1.55710272E12, 10.0], [1.55710302E12, 10.0], [1.557102E12, 10.0], [1.5571023E12, 10.0], [1.5571026E12, 10.0], [1.5571017E12, 10.0], [1.5571014E12, 10.0], [1.5571029E12, 10.0], [1.55710176E12, 10.0], [1.55710188E12, 10.0], [1.55710146E12, 10.0], [1.55710218E12, 10.0], [1.55710248E12, 10.0], [1.55710278E12, 10.0], [1.55710308E12, 10.0], [1.55710158E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55710314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 406.0, "series": [{"data": [[8.0, 318.0], [4.0, 406.0], [2.0, 271.0], [1.0, 272.0], [9.0, 309.0], [10.0, 266.59310518742643], [5.0, 328.0], [3.0, 256.0], [7.0, 320.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.999347394025689, 266.59906262050924]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 170350.25, "minX": 1.55710134E12, "maxY": 705923.15, "series": [{"data": [[1.55710206E12, 671402.25], [1.55710236E12, 703290.2], [1.55710266E12, 681934.05], [1.55710164E12, 606163.6], [1.55710134E12, 274704.45], [1.55710296E12, 592706.3], [1.55710194E12, 700949.8], [1.55710224E12, 700657.25], [1.55710254E12, 691880.75], [1.55710284E12, 636588.8], [1.55710314E12, 284358.6], [1.55710182E12, 684859.55], [1.55710152E12, 604115.75], [1.55710212E12, 691880.75], [1.55710242E12, 699487.05], [1.55710272E12, 701827.45], [1.55710302E12, 553212.05], [1.557102E12, 689832.9], [1.5571023E12, 692465.85], [1.5571026E12, 698609.4], [1.5571017E12, 597094.55], [1.5571014E12, 644487.65], [1.5571029E12, 624886.8], [1.55710176E12, 667891.65], [1.55710188E12, 705923.15], [1.55710146E12, 639221.75], [1.55710218E12, 702412.55], [1.55710248E12, 691295.65], [1.55710278E12, 689247.8], [1.55710308E12, 576616.05], [1.55710158E12, 624301.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55710206E12, 416351.25], [1.55710236E12, 436125.6666666667], [1.55710266E12, 422882.25], [1.55710164E12, 375895.3333333333], [1.55710134E12, 170350.25], [1.55710296E12, 367550.1666666667], [1.55710194E12, 434674.3333333333], [1.55710224E12, 434492.9166666667], [1.55710254E12, 429050.4166666667], [1.55710284E12, 394762.6666666667], [1.55710314E12, 176337.0], [1.55710182E12, 424696.4166666667], [1.55710152E12, 374625.4166666667], [1.55710212E12, 429050.4166666667], [1.55710242E12, 433767.25], [1.55710272E12, 435218.5833333333], [1.55710302E12, 343058.9166666667], [1.557102E12, 427780.5], [1.5571023E12, 429413.25], [1.5571026E12, 433223.0], [1.5571017E12, 370271.4166666667], [1.5571014E12, 399660.9166666667], [1.5571029E12, 387506.0], [1.55710176E12, 414174.25], [1.55710188E12, 437758.4166666667], [1.55710146E12, 396395.4166666667], [1.55710218E12, 435581.4166666667], [1.55710248E12, 428687.5833333333], [1.55710278E12, 427417.6666666667], [1.55710308E12, 357572.25], [1.55710158E12, 387143.1666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55710314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 248.1852465810193, "minX": 1.55710134E12, "maxY": 326.72942386831267, "series": [{"data": [[1.55710206E12, 261.312854030501], [1.55710236E12, 249.42595673876855], [1.55710266E12, 257.22822822822855], [1.55710164E12, 289.3354247104251], [1.55710134E12, 293.04046858359976], [1.55710296E12, 295.6377097729517], [1.55710194E12, 250.1777963272122], [1.55710224E12, 250.68434237995797], [1.55710254E12, 253.40591966173352], [1.55710284E12, 275.6121323529408], [1.55710314E12, 326.72942386831267], [1.55710182E12, 256.1725758222978], [1.55710152E12, 290.6242130750601], [1.55710212E12, 253.40761099365776], [1.55710242E12, 250.26432455039708], [1.55710272E12, 249.91704877032123], [1.55710302E12, 317.08884188260106], [1.557102E12, 254.08608990670072], [1.5571023E12, 252.9894381073085], [1.5571026E12, 250.97278056951453], [1.5571017E12, 293.2876041156293], [1.5571014E12, 271.38039037675924], [1.5571029E12, 280.7677902621727], [1.55710176E12, 262.99036355672354], [1.55710188E12, 248.1852465810193], [1.55710146E12, 274.1272311212816], [1.55710218E12, 249.57642648896342], [1.55710248E12, 253.93313584426608], [1.55710278E12, 254.1498302207129], [1.55710308E12, 304.30644342973034], [1.55710158E12, 280.884723523899]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55710314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 244.3982594280977, "minX": 1.55710134E12, "maxY": 324.124485596708, "series": [{"data": [[1.55710206E12, 256.98039215686276], [1.55710236E12, 245.62146422628962], [1.55710266E12, 253.25182325182362], [1.55710164E12, 286.818532818533], [1.55710134E12, 290.9126730564435], [1.55710296E12, 292.90177690029566], [1.55710194E12, 246.2458263772955], [1.55710224E12, 246.6893528183713], [1.55710254E12, 249.49809725158582], [1.55710284E12, 273.004136029411], [1.55710314E12, 324.124485596708], [1.55710182E12, 252.01025202904708], [1.55710152E12, 288.1259079903157], [1.55710212E12, 249.38477801268502], [1.55710242E12, 246.58301965704752], [1.55710272E12, 246.2888703626508], [1.55710302E12, 314.53516657852987], [1.557102E12, 250.1726039016112], [1.5571023E12, 249.198563582594], [1.5571026E12, 246.83165829145744], [1.5571017E12, 290.6673199412059], [1.5571014E12, 268.8093508851565], [1.5571029E12, 278.0627340823969], [1.55710176E12, 259.4047306176089], [1.55710188E12, 244.3982594280977], [1.55710146E12, 271.93638443935913], [1.55710218E12, 245.7730112453144], [1.55710248E12, 250.24164198053316], [1.55710278E12, 250.4999999999995], [1.55710308E12, 301.3521055301875], [1.55710158E12, 278.4325210871598]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55710314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.42851222544550355, "minX": 1.55710134E12, "maxY": 3.956336528221508, "series": [{"data": [[1.55710206E12, 0.454466230936819], [1.55710236E12, 0.5153910149750419], [1.55710266E12, 0.5285285285285293], [1.55710164E12, 0.5000000000000018], [1.55710134E12, 3.956336528221508], [1.55710296E12, 0.5735439289239879], [1.55710194E12, 0.4344741235392314], [1.55710224E12, 0.5114822546972866], [1.55710254E12, 0.5463002114164903], [1.55710284E12, 0.551011029411765], [1.55710314E12, 0.5679012345679008], [1.55710182E12, 0.44938060657838547], [1.55710152E12, 0.6978208232445525], [1.55710212E12, 0.48583509513742007], [1.55710242E12, 0.5056461731493085], [1.55710272E12, 0.5168820341809114], [1.55710302E12, 0.5721840296139608], [1.557102E12, 0.4622561492790502], [1.5571023E12, 0.5289395859738073], [1.5571026E12, 0.5125628140703519], [1.5571017E12, 0.48064674179323796], [1.5571014E12, 0.8393100317748532], [1.5571029E12, 0.5613295880149818], [1.55710176E12, 0.43101182654402037], [1.55710188E12, 0.42851222544550355], [1.55710146E12, 0.7427917620137309], [1.55710218E12, 0.49937526030820434], [1.55710248E12, 0.5454930173508264], [1.55710278E12, 0.5229202037351453], [1.55710308E12, 0.5870116692034486], [1.55710158E12, 0.5534208059981257]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55710314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 51.0, "minX": 1.55710134E12, "maxY": 722.0, "series": [{"data": [[1.55710206E12, 506.0], [1.55710236E12, 494.0], [1.55710266E12, 515.0], [1.55710164E12, 593.0], [1.55710134E12, 649.0], [1.55710296E12, 722.0], [1.55710194E12, 509.0], [1.55710224E12, 491.0], [1.55710254E12, 456.0], [1.55710284E12, 575.0], [1.55710314E12, 585.0], [1.55710182E12, 505.0], [1.55710152E12, 589.0], [1.55710212E12, 493.0], [1.55710242E12, 503.0], [1.55710272E12, 479.0], [1.55710302E12, 666.0], [1.557102E12, 466.0], [1.5571023E12, 459.0], [1.5571026E12, 463.0], [1.5571017E12, 705.0], [1.5571014E12, 584.0], [1.5571029E12, 636.0], [1.55710176E12, 515.0], [1.55710188E12, 478.0], [1.55710146E12, 542.0], [1.55710218E12, 471.0], [1.55710248E12, 543.0], [1.55710278E12, 504.0], [1.55710308E12, 683.0], [1.55710158E12, 632.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55710206E12, 102.0], [1.55710236E12, 100.0], [1.55710266E12, 104.0], [1.55710164E12, 77.0], [1.55710134E12, 98.0], [1.55710296E12, 64.0], [1.55710194E12, 102.0], [1.55710224E12, 107.0], [1.55710254E12, 98.0], [1.55710284E12, 83.0], [1.55710314E12, 107.0], [1.55710182E12, 99.0], [1.55710152E12, 93.0], [1.55710212E12, 75.0], [1.55710242E12, 99.0], [1.55710272E12, 92.0], [1.55710302E12, 63.0], [1.557102E12, 74.0], [1.5571023E12, 98.0], [1.5571026E12, 94.0], [1.5571017E12, 83.0], [1.5571014E12, 80.0], [1.5571029E12, 81.0], [1.55710176E12, 87.0], [1.55710188E12, 98.0], [1.55710146E12, 51.0], [1.55710218E12, 82.0], [1.55710248E12, 96.0], [1.55710278E12, 82.0], [1.55710308E12, 71.0], [1.55710158E12, 76.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55710206E12, 333.0], [1.55710236E12, 315.0], [1.55710266E12, 329.0], [1.55710164E12, 379.0], [1.55710134E12, 384.0], [1.55710296E12, 402.29999999999995], [1.55710194E12, 319.0], [1.55710224E12, 317.0], [1.55710254E12, 321.0], [1.55710284E12, 360.0], [1.55710314E12, 426.70000000000005], [1.55710182E12, 329.0], [1.55710152E12, 382.0], [1.55710212E12, 321.0], [1.55710242E12, 320.0], [1.55710272E12, 317.0], [1.55710302E12, 434.0], [1.557102E12, 322.0], [1.5571023E12, 320.0], [1.5571026E12, 318.0], [1.5571017E12, 395.0], [1.5571014E12, 369.0], [1.5571029E12, 368.29999999999995], [1.55710176E12, 343.0], [1.55710188E12, 315.0], [1.55710146E12, 368.0], [1.55710218E12, 312.0], [1.55710248E12, 323.5999999999999], [1.55710278E12, 325.0], [1.55710308E12, 418.0], [1.55710158E12, 379.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55710206E12, 418.0799999999999], [1.55710236E12, 382.89999999999964], [1.55710266E12, 418.0], [1.55710164E12, 481.27], [1.55710134E12, 510.20000000000016], [1.55710296E12, 513.6500000000001], [1.55710194E12, 391.0300000000002], [1.55710224E12, 397.0], [1.55710254E12, 392.0], [1.55710284E12, 445.46000000000004], [1.55710314E12, 521.81], [1.55710182E12, 410.7399999999998], [1.55710152E12, 487.3599999999997], [1.55710212E12, 399.34000000000015], [1.55710242E12, 393.0799999999999], [1.55710272E12, 383.0], [1.55710302E12, 572.2399999999998], [1.557102E12, 397.0], [1.5571023E12, 403.0], [1.5571026E12, 384.22000000000025], [1.5571017E12, 538.8999999999996], [1.5571014E12, 468.96000000000004], [1.5571029E12, 472.6300000000001], [1.55710176E12, 435.15999999999985], [1.55710188E12, 389.0], [1.55710146E12, 473.4199999999996], [1.55710218E12, 383.0], [1.55710248E12, 402.0800000000004], [1.55710278E12, 431.71999999999935], [1.55710308E12, 550.0], [1.55710158E12, 472.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55710206E12, 358.0], [1.55710236E12, 333.75], [1.55710266E12, 356.0], [1.55710164E12, 413.0], [1.55710134E12, 423.0], [1.55710296E12, 442.64999999999986], [1.55710194E12, 342.0], [1.55710224E12, 344.0], [1.55710254E12, 339.6999999999998], [1.55710284E12, 390.0], [1.55710314E12, 459.0], [1.55710182E12, 355.0], [1.55710152E12, 419.0], [1.55710212E12, 345.0], [1.55710242E12, 343.0], [1.55710272E12, 340.0], [1.55710302E12, 468.0], [1.557102E12, 346.0], [1.5571023E12, 340.5999999999999], [1.5571026E12, 344.0], [1.5571017E12, 438.0], [1.5571014E12, 398.0], [1.5571029E12, 402.0], [1.55710176E12, 372.0], [1.55710188E12, 336.0], [1.55710146E12, 404.0], [1.55710218E12, 338.9000000000001], [1.55710248E12, 349.0], [1.55710278E12, 356.0], [1.55710308E12, 456.39999999999986], [1.55710158E12, 410.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55710314E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 163.0, "minX": 12.0, "maxY": 464.5, "series": [{"data": [[33.0, 295.0], [32.0, 302.0], [35.0, 277.0], [34.0, 285.0], [36.0, 274.0], [37.0, 266.0], [39.0, 251.0], [38.0, 257.0], [40.0, 248.0], [41.0, 245.0], [43.0, 239.0], [42.0, 240.0], [45.0, 229.0], [44.0, 237.0], [46.0, 239.0], [47.0, 227.0], [48.0, 206.5], [49.0, 199.0], [50.0, 199.5], [51.0, 194.0], [53.0, 191.0], [52.0, 187.0], [55.0, 180.0], [57.0, 172.0], [59.0, 163.0], [58.0, 181.0], [61.0, 174.0], [62.0, 166.0], [12.0, 464.5], [20.0, 398.5], [21.0, 401.0], [22.0, 399.0], [23.0, 382.0], [24.0, 357.5], [25.0, 358.0], [26.0, 361.0], [27.0, 342.0], [28.0, 345.0], [29.0, 332.0], [30.0, 322.0], [31.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 162.0, "minX": 12.0, "maxY": 464.0, "series": [{"data": [[33.0, 292.0], [32.0, 299.0], [35.0, 274.0], [34.0, 282.5], [36.0, 271.0], [37.0, 263.0], [39.0, 247.0], [38.0, 253.0], [40.0, 244.0], [41.0, 241.0], [43.0, 235.0], [42.0, 237.0], [45.0, 225.0], [44.0, 234.0], [46.0, 236.0], [47.0, 226.5], [48.0, 203.0], [49.0, 199.0], [50.0, 198.0], [51.0, 193.0], [53.0, 190.0], [52.0, 185.5], [55.0, 179.0], [57.0, 172.0], [59.0, 162.0], [58.0, 180.0], [61.0, 173.0], [62.0, 165.0], [12.0, 464.0], [20.0, 398.0], [21.0, 400.0], [22.0, 395.5], [23.0, 379.0], [24.0, 357.0], [25.0, 355.5], [26.0, 358.5], [27.0, 338.0], [28.0, 342.5], [29.0, 331.0], [30.0, 319.0], [31.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.816666666666666, "minX": 1.55710134E12, "maxY": 40.21666666666667, "series": [{"data": [[1.55710206E12, 38.25], [1.55710236E12, 40.06666666666667], [1.55710266E12, 38.85], [1.55710164E12, 34.53333333333333], [1.55710134E12, 15.816666666666666], [1.55710296E12, 33.766666666666666], [1.55710194E12, 39.93333333333333], [1.55710224E12, 39.916666666666664], [1.55710254E12, 39.416666666666664], [1.55710284E12, 36.266666666666666], [1.55710314E12, 16.033333333333335], [1.55710182E12, 39.016666666666666], [1.55710152E12, 34.416666666666664], [1.55710212E12, 39.416666666666664], [1.55710242E12, 39.85], [1.55710272E12, 39.983333333333334], [1.55710302E12, 31.516666666666666], [1.557102E12, 39.3], [1.5571023E12, 39.45], [1.5571026E12, 39.8], [1.5571017E12, 34.016666666666666], [1.5571014E12, 36.71666666666667], [1.5571029E12, 35.6], [1.55710176E12, 38.05], [1.55710188E12, 40.21666666666667], [1.55710146E12, 36.416666666666664], [1.55710218E12, 40.016666666666666], [1.55710248E12, 39.38333333333333], [1.55710278E12, 39.266666666666666], [1.55710308E12, 32.85], [1.55710158E12, 35.56666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55710314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.65, "minX": 1.55710134E12, "maxY": 40.21666666666667, "series": [{"data": [[1.55710206E12, 38.25], [1.55710236E12, 40.06666666666667], [1.55710266E12, 38.85], [1.55710164E12, 34.53333333333333], [1.55710134E12, 15.65], [1.55710296E12, 33.766666666666666], [1.55710194E12, 39.93333333333333], [1.55710224E12, 39.916666666666664], [1.55710254E12, 39.416666666666664], [1.55710284E12, 36.266666666666666], [1.55710314E12, 16.2], [1.55710182E12, 39.016666666666666], [1.55710152E12, 34.416666666666664], [1.55710212E12, 39.416666666666664], [1.55710242E12, 39.85], [1.55710272E12, 39.983333333333334], [1.55710302E12, 31.516666666666666], [1.557102E12, 39.3], [1.5571023E12, 39.45], [1.5571026E12, 39.8], [1.5571017E12, 34.016666666666666], [1.5571014E12, 36.71666666666667], [1.5571029E12, 35.6], [1.55710176E12, 38.05], [1.55710188E12, 40.21666666666667], [1.55710146E12, 36.416666666666664], [1.55710218E12, 40.016666666666666], [1.55710248E12, 39.38333333333333], [1.55710278E12, 39.266666666666666], [1.55710308E12, 32.85], [1.55710158E12, 35.56666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55710314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.65, "minX": 1.55710134E12, "maxY": 40.21666666666667, "series": [{"data": [[1.55710206E12, 38.25], [1.55710236E12, 40.06666666666667], [1.55710266E12, 38.85], [1.55710164E12, 34.53333333333333], [1.55710134E12, 15.65], [1.55710296E12, 33.766666666666666], [1.55710194E12, 39.93333333333333], [1.55710224E12, 39.916666666666664], [1.55710254E12, 39.416666666666664], [1.55710284E12, 36.266666666666666], [1.55710314E12, 16.2], [1.55710182E12, 39.016666666666666], [1.55710152E12, 34.416666666666664], [1.55710212E12, 39.416666666666664], [1.55710242E12, 39.85], [1.55710272E12, 39.983333333333334], [1.55710302E12, 31.516666666666666], [1.557102E12, 39.3], [1.5571023E12, 39.45], [1.5571026E12, 39.8], [1.5571017E12, 34.016666666666666], [1.5571014E12, 36.71666666666667], [1.5571029E12, 35.6], [1.55710176E12, 38.05], [1.55710188E12, 40.21666666666667], [1.55710146E12, 36.416666666666664], [1.55710218E12, 40.016666666666666], [1.55710248E12, 39.38333333333333], [1.55710278E12, 39.266666666666666], [1.55710308E12, 32.85], [1.55710158E12, 35.56666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55710314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.65, "minX": 1.55710134E12, "maxY": 40.21666666666667, "series": [{"data": [[1.55710206E12, 38.25], [1.55710236E12, 40.06666666666667], [1.55710266E12, 38.85], [1.55710164E12, 34.53333333333333], [1.55710134E12, 15.65], [1.55710296E12, 33.766666666666666], [1.55710194E12, 39.93333333333333], [1.55710224E12, 39.916666666666664], [1.55710254E12, 39.416666666666664], [1.55710284E12, 36.266666666666666], [1.55710314E12, 16.2], [1.55710182E12, 39.016666666666666], [1.55710152E12, 34.416666666666664], [1.55710212E12, 39.416666666666664], [1.55710242E12, 39.85], [1.55710272E12, 39.983333333333334], [1.55710302E12, 31.516666666666666], [1.557102E12, 39.3], [1.5571023E12, 39.45], [1.5571026E12, 39.8], [1.5571017E12, 34.016666666666666], [1.5571014E12, 36.71666666666667], [1.5571029E12, 35.6], [1.55710176E12, 38.05], [1.55710188E12, 40.21666666666667], [1.55710146E12, 36.416666666666664], [1.55710218E12, 40.016666666666666], [1.55710248E12, 39.38333333333333], [1.55710278E12, 39.266666666666666], [1.55710308E12, 32.85], [1.55710158E12, 35.56666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55710314E12, "title": "Total Transactions Per Second"}},
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

