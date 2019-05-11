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
        data: {"result": {"minY": 144.0, "minX": 0.0, "maxY": 1226.0, "series": [{"data": [[0.0, 144.0], [0.1, 328.0], [0.2, 346.0], [0.3, 359.0], [0.4, 367.0], [0.5, 374.0], [0.6, 379.0], [0.7, 383.0], [0.8, 386.0], [0.9, 390.0], [1.0, 393.0], [1.1, 395.0], [1.2, 397.0], [1.3, 399.0], [1.4, 401.0], [1.5, 404.0], [1.6, 405.0], [1.7, 408.0], [1.8, 409.0], [1.9, 411.0], [2.0, 413.0], [2.1, 414.0], [2.2, 416.0], [2.3, 417.0], [2.4, 419.0], [2.5, 420.0], [2.6, 421.0], [2.7, 423.0], [2.8, 424.0], [2.9, 425.0], [3.0, 427.0], [3.1, 428.0], [3.2, 429.0], [3.3, 430.0], [3.4, 431.0], [3.5, 433.0], [3.6, 434.0], [3.7, 434.0], [3.8, 435.0], [3.9, 436.0], [4.0, 438.0], [4.1, 439.0], [4.2, 440.0], [4.3, 441.0], [4.4, 441.0], [4.5, 442.0], [4.6, 443.0], [4.7, 443.0], [4.8, 444.0], [4.9, 445.0], [5.0, 446.0], [5.1, 447.0], [5.2, 448.0], [5.3, 449.0], [5.4, 449.0], [5.5, 450.0], [5.6, 451.0], [5.7, 451.0], [5.8, 452.0], [5.9, 453.0], [6.0, 453.0], [6.1, 454.0], [6.2, 455.0], [6.3, 455.0], [6.4, 455.0], [6.5, 456.0], [6.6, 457.0], [6.7, 457.0], [6.8, 458.0], [6.9, 458.0], [7.0, 459.0], [7.1, 460.0], [7.2, 460.0], [7.3, 461.0], [7.4, 461.0], [7.5, 462.0], [7.6, 462.0], [7.7, 463.0], [7.8, 463.0], [7.9, 464.0], [8.0, 464.0], [8.1, 465.0], [8.2, 465.0], [8.3, 466.0], [8.4, 466.0], [8.5, 467.0], [8.6, 468.0], [8.7, 468.0], [8.8, 469.0], [8.9, 469.0], [9.0, 470.0], [9.1, 470.0], [9.2, 471.0], [9.3, 471.0], [9.4, 472.0], [9.5, 472.0], [9.6, 472.0], [9.7, 473.0], [9.8, 473.0], [9.9, 474.0], [10.0, 474.0], [10.1, 474.0], [10.2, 475.0], [10.3, 475.0], [10.4, 476.0], [10.5, 476.0], [10.6, 476.0], [10.7, 477.0], [10.8, 477.0], [10.9, 478.0], [11.0, 478.0], [11.1, 478.0], [11.2, 479.0], [11.3, 479.0], [11.4, 480.0], [11.5, 480.0], [11.6, 480.0], [11.7, 481.0], [11.8, 481.0], [11.9, 481.0], [12.0, 482.0], [12.1, 482.0], [12.2, 483.0], [12.3, 483.0], [12.4, 484.0], [12.5, 484.0], [12.6, 484.0], [12.7, 485.0], [12.8, 485.0], [12.9, 486.0], [13.0, 486.0], [13.1, 486.0], [13.2, 487.0], [13.3, 487.0], [13.4, 487.0], [13.5, 488.0], [13.6, 488.0], [13.7, 488.0], [13.8, 489.0], [13.9, 489.0], [14.0, 489.0], [14.1, 490.0], [14.2, 490.0], [14.3, 490.0], [14.4, 491.0], [14.5, 491.0], [14.6, 491.0], [14.7, 492.0], [14.8, 492.0], [14.9, 492.0], [15.0, 493.0], [15.1, 493.0], [15.2, 493.0], [15.3, 494.0], [15.4, 494.0], [15.5, 494.0], [15.6, 495.0], [15.7, 495.0], [15.8, 495.0], [15.9, 496.0], [16.0, 496.0], [16.1, 496.0], [16.2, 496.0], [16.3, 497.0], [16.4, 497.0], [16.5, 497.0], [16.6, 498.0], [16.7, 498.0], [16.8, 498.0], [16.9, 499.0], [17.0, 499.0], [17.1, 499.0], [17.2, 499.0], [17.3, 500.0], [17.4, 500.0], [17.5, 500.0], [17.6, 501.0], [17.7, 501.0], [17.8, 501.0], [17.9, 502.0], [18.0, 502.0], [18.1, 502.0], [18.2, 502.0], [18.3, 503.0], [18.4, 503.0], [18.5, 503.0], [18.6, 503.0], [18.7, 504.0], [18.8, 504.0], [18.9, 504.0], [19.0, 505.0], [19.1, 505.0], [19.2, 505.0], [19.3, 505.0], [19.4, 506.0], [19.5, 506.0], [19.6, 506.0], [19.7, 507.0], [19.8, 507.0], [19.9, 507.0], [20.0, 507.0], [20.1, 508.0], [20.2, 508.0], [20.3, 508.0], [20.4, 508.0], [20.5, 509.0], [20.6, 509.0], [20.7, 509.0], [20.8, 509.0], [20.9, 510.0], [21.0, 510.0], [21.1, 510.0], [21.2, 510.0], [21.3, 511.0], [21.4, 511.0], [21.5, 511.0], [21.6, 512.0], [21.7, 512.0], [21.8, 512.0], [21.9, 512.0], [22.0, 513.0], [22.1, 513.0], [22.2, 513.0], [22.3, 514.0], [22.4, 514.0], [22.5, 514.0], [22.6, 514.0], [22.7, 515.0], [22.8, 515.0], [22.9, 515.0], [23.0, 515.0], [23.1, 516.0], [23.2, 516.0], [23.3, 516.0], [23.4, 516.0], [23.5, 516.0], [23.6, 517.0], [23.7, 517.0], [23.8, 517.0], [23.9, 518.0], [24.0, 518.0], [24.1, 518.0], [24.2, 518.0], [24.3, 519.0], [24.4, 519.0], [24.5, 519.0], [24.6, 519.0], [24.7, 520.0], [24.8, 520.0], [24.9, 520.0], [25.0, 520.0], [25.1, 520.0], [25.2, 521.0], [25.3, 521.0], [25.4, 521.0], [25.5, 521.0], [25.6, 521.0], [25.7, 522.0], [25.8, 522.0], [25.9, 522.0], [26.0, 522.0], [26.1, 523.0], [26.2, 523.0], [26.3, 523.0], [26.4, 523.0], [26.5, 524.0], [26.6, 524.0], [26.7, 524.0], [26.8, 524.0], [26.9, 525.0], [27.0, 525.0], [27.1, 525.0], [27.2, 525.0], [27.3, 526.0], [27.4, 526.0], [27.5, 526.0], [27.6, 526.0], [27.7, 526.0], [27.8, 527.0], [27.9, 527.0], [28.0, 527.0], [28.1, 527.0], [28.2, 527.0], [28.3, 528.0], [28.4, 528.0], [28.5, 528.0], [28.6, 528.0], [28.7, 529.0], [28.8, 529.0], [28.9, 529.0], [29.0, 529.0], [29.1, 529.0], [29.2, 530.0], [29.3, 530.0], [29.4, 530.0], [29.5, 530.0], [29.6, 531.0], [29.7, 531.0], [29.8, 531.0], [29.9, 531.0], [30.0, 531.0], [30.1, 532.0], [30.2, 532.0], [30.3, 532.0], [30.4, 532.0], [30.5, 532.0], [30.6, 533.0], [30.7, 533.0], [30.8, 533.0], [30.9, 533.0], [31.0, 533.0], [31.1, 534.0], [31.2, 534.0], [31.3, 534.0], [31.4, 534.0], [31.5, 535.0], [31.6, 535.0], [31.7, 535.0], [31.8, 535.0], [31.9, 536.0], [32.0, 536.0], [32.1, 536.0], [32.2, 536.0], [32.3, 537.0], [32.4, 537.0], [32.5, 537.0], [32.6, 537.0], [32.7, 537.0], [32.8, 537.0], [32.9, 538.0], [33.0, 538.0], [33.1, 538.0], [33.2, 538.0], [33.3, 539.0], [33.4, 539.0], [33.5, 539.0], [33.6, 539.0], [33.7, 539.0], [33.8, 540.0], [33.9, 540.0], [34.0, 540.0], [34.1, 540.0], [34.2, 541.0], [34.3, 541.0], [34.4, 541.0], [34.5, 541.0], [34.6, 541.0], [34.7, 542.0], [34.8, 542.0], [34.9, 542.0], [35.0, 542.0], [35.1, 542.0], [35.2, 543.0], [35.3, 543.0], [35.4, 543.0], [35.5, 543.0], [35.6, 544.0], [35.7, 544.0], [35.8, 544.0], [35.9, 544.0], [36.0, 544.0], [36.1, 545.0], [36.2, 545.0], [36.3, 545.0], [36.4, 545.0], [36.5, 545.0], [36.6, 546.0], [36.7, 546.0], [36.8, 546.0], [36.9, 546.0], [37.0, 546.0], [37.1, 547.0], [37.2, 547.0], [37.3, 547.0], [37.4, 547.0], [37.5, 547.0], [37.6, 548.0], [37.7, 548.0], [37.8, 548.0], [37.9, 548.0], [38.0, 548.0], [38.1, 548.0], [38.2, 549.0], [38.3, 549.0], [38.4, 549.0], [38.5, 549.0], [38.6, 549.0], [38.7, 550.0], [38.8, 550.0], [38.9, 550.0], [39.0, 550.0], [39.1, 550.0], [39.2, 551.0], [39.3, 551.0], [39.4, 551.0], [39.5, 551.0], [39.6, 552.0], [39.7, 552.0], [39.8, 552.0], [39.9, 552.0], [40.0, 553.0], [40.1, 553.0], [40.2, 553.0], [40.3, 553.0], [40.4, 553.0], [40.5, 554.0], [40.6, 554.0], [40.7, 554.0], [40.8, 554.0], [40.9, 554.0], [41.0, 555.0], [41.1, 555.0], [41.2, 555.0], [41.3, 555.0], [41.4, 556.0], [41.5, 556.0], [41.6, 556.0], [41.7, 556.0], [41.8, 556.0], [41.9, 557.0], [42.0, 557.0], [42.1, 557.0], [42.2, 557.0], [42.3, 558.0], [42.4, 558.0], [42.5, 558.0], [42.6, 558.0], [42.7, 558.0], [42.8, 559.0], [42.9, 559.0], [43.0, 559.0], [43.1, 559.0], [43.2, 559.0], [43.3, 559.0], [43.4, 560.0], [43.5, 560.0], [43.6, 560.0], [43.7, 560.0], [43.8, 560.0], [43.9, 561.0], [44.0, 561.0], [44.1, 561.0], [44.2, 561.0], [44.3, 561.0], [44.4, 562.0], [44.5, 562.0], [44.6, 562.0], [44.7, 562.0], [44.8, 562.0], [44.9, 563.0], [45.0, 563.0], [45.1, 563.0], [45.2, 563.0], [45.3, 563.0], [45.4, 564.0], [45.5, 564.0], [45.6, 564.0], [45.7, 564.0], [45.8, 564.0], [45.9, 565.0], [46.0, 565.0], [46.1, 565.0], [46.2, 565.0], [46.3, 565.0], [46.4, 565.0], [46.5, 566.0], [46.6, 566.0], [46.7, 566.0], [46.8, 566.0], [46.9, 566.0], [47.0, 567.0], [47.1, 567.0], [47.2, 567.0], [47.3, 567.0], [47.4, 567.0], [47.5, 568.0], [47.6, 568.0], [47.7, 568.0], [47.8, 568.0], [47.9, 568.0], [48.0, 569.0], [48.1, 569.0], [48.2, 569.0], [48.3, 569.0], [48.4, 569.0], [48.5, 570.0], [48.6, 570.0], [48.7, 570.0], [48.8, 570.0], [48.9, 570.0], [49.0, 571.0], [49.1, 571.0], [49.2, 571.0], [49.3, 571.0], [49.4, 571.0], [49.5, 571.0], [49.6, 572.0], [49.7, 572.0], [49.8, 572.0], [49.9, 572.0], [50.0, 572.0], [50.1, 573.0], [50.2, 573.0], [50.3, 573.0], [50.4, 573.0], [50.5, 573.0], [50.6, 574.0], [50.7, 574.0], [50.8, 574.0], [50.9, 574.0], [51.0, 574.0], [51.1, 575.0], [51.2, 575.0], [51.3, 575.0], [51.4, 575.0], [51.5, 575.0], [51.6, 576.0], [51.7, 576.0], [51.8, 576.0], [51.9, 576.0], [52.0, 577.0], [52.1, 577.0], [52.2, 577.0], [52.3, 577.0], [52.4, 577.0], [52.5, 578.0], [52.6, 578.0], [52.7, 578.0], [52.8, 578.0], [52.9, 578.0], [53.0, 579.0], [53.1, 579.0], [53.2, 579.0], [53.3, 579.0], [53.4, 579.0], [53.5, 580.0], [53.6, 580.0], [53.7, 580.0], [53.8, 580.0], [53.9, 580.0], [54.0, 581.0], [54.1, 581.0], [54.2, 581.0], [54.3, 581.0], [54.4, 581.0], [54.5, 582.0], [54.6, 582.0], [54.7, 582.0], [54.8, 582.0], [54.9, 583.0], [55.0, 583.0], [55.1, 583.0], [55.2, 583.0], [55.3, 583.0], [55.4, 584.0], [55.5, 584.0], [55.6, 584.0], [55.7, 584.0], [55.8, 584.0], [55.9, 585.0], [56.0, 585.0], [56.1, 585.0], [56.2, 585.0], [56.3, 586.0], [56.4, 586.0], [56.5, 586.0], [56.6, 586.0], [56.7, 586.0], [56.8, 587.0], [56.9, 587.0], [57.0, 587.0], [57.1, 587.0], [57.2, 587.0], [57.3, 588.0], [57.4, 588.0], [57.5, 588.0], [57.6, 588.0], [57.7, 589.0], [57.8, 589.0], [57.9, 589.0], [58.0, 589.0], [58.1, 589.0], [58.2, 590.0], [58.3, 590.0], [58.4, 590.0], [58.5, 590.0], [58.6, 590.0], [58.7, 591.0], [58.8, 591.0], [58.9, 591.0], [59.0, 591.0], [59.1, 591.0], [59.2, 592.0], [59.3, 592.0], [59.4, 592.0], [59.5, 592.0], [59.6, 593.0], [59.7, 593.0], [59.8, 593.0], [59.9, 593.0], [60.0, 593.0], [60.1, 594.0], [60.2, 594.0], [60.3, 594.0], [60.4, 594.0], [60.5, 595.0], [60.6, 595.0], [60.7, 595.0], [60.8, 595.0], [60.9, 596.0], [61.0, 596.0], [61.1, 596.0], [61.2, 596.0], [61.3, 596.0], [61.4, 597.0], [61.5, 597.0], [61.6, 597.0], [61.7, 597.0], [61.8, 597.0], [61.9, 598.0], [62.0, 598.0], [62.1, 598.0], [62.2, 598.0], [62.3, 599.0], [62.4, 599.0], [62.5, 599.0], [62.6, 599.0], [62.7, 600.0], [62.8, 600.0], [62.9, 600.0], [63.0, 600.0], [63.1, 601.0], [63.2, 601.0], [63.3, 601.0], [63.4, 601.0], [63.5, 602.0], [63.6, 602.0], [63.7, 602.0], [63.8, 602.0], [63.9, 603.0], [64.0, 603.0], [64.1, 603.0], [64.2, 603.0], [64.3, 603.0], [64.4, 604.0], [64.5, 604.0], [64.6, 604.0], [64.7, 604.0], [64.8, 605.0], [64.9, 605.0], [65.0, 605.0], [65.1, 605.0], [65.2, 605.0], [65.3, 606.0], [65.4, 606.0], [65.5, 606.0], [65.6, 607.0], [65.7, 607.0], [65.8, 607.0], [65.9, 607.0], [66.0, 608.0], [66.1, 608.0], [66.2, 608.0], [66.3, 608.0], [66.4, 609.0], [66.5, 609.0], [66.6, 609.0], [66.7, 609.0], [66.8, 610.0], [66.9, 610.0], [67.0, 610.0], [67.1, 610.0], [67.2, 611.0], [67.3, 611.0], [67.4, 611.0], [67.5, 611.0], [67.6, 611.0], [67.7, 612.0], [67.8, 612.0], [67.9, 612.0], [68.0, 612.0], [68.1, 613.0], [68.2, 613.0], [68.3, 613.0], [68.4, 613.0], [68.5, 614.0], [68.6, 614.0], [68.7, 614.0], [68.8, 614.0], [68.9, 615.0], [69.0, 615.0], [69.1, 615.0], [69.2, 616.0], [69.3, 616.0], [69.4, 616.0], [69.5, 616.0], [69.6, 617.0], [69.7, 617.0], [69.8, 617.0], [69.9, 617.0], [70.0, 618.0], [70.1, 618.0], [70.2, 618.0], [70.3, 618.0], [70.4, 619.0], [70.5, 619.0], [70.6, 619.0], [70.7, 619.0], [70.8, 620.0], [70.9, 620.0], [71.0, 620.0], [71.1, 621.0], [71.2, 621.0], [71.3, 621.0], [71.4, 621.0], [71.5, 622.0], [71.6, 622.0], [71.7, 622.0], [71.8, 622.0], [71.9, 623.0], [72.0, 623.0], [72.1, 623.0], [72.2, 623.0], [72.3, 624.0], [72.4, 624.0], [72.5, 624.0], [72.6, 625.0], [72.7, 625.0], [72.8, 625.0], [72.9, 625.0], [73.0, 626.0], [73.1, 626.0], [73.2, 626.0], [73.3, 626.0], [73.4, 627.0], [73.5, 627.0], [73.6, 627.0], [73.7, 628.0], [73.8, 628.0], [73.9, 628.0], [74.0, 628.0], [74.1, 629.0], [74.2, 629.0], [74.3, 629.0], [74.4, 629.0], [74.5, 630.0], [74.6, 630.0], [74.7, 631.0], [74.8, 631.0], [74.9, 631.0], [75.0, 632.0], [75.1, 632.0], [75.2, 632.0], [75.3, 633.0], [75.4, 633.0], [75.5, 633.0], [75.6, 633.0], [75.7, 634.0], [75.8, 634.0], [75.9, 634.0], [76.0, 635.0], [76.1, 635.0], [76.2, 635.0], [76.3, 636.0], [76.4, 636.0], [76.5, 636.0], [76.6, 636.0], [76.7, 637.0], [76.8, 637.0], [76.9, 637.0], [77.0, 638.0], [77.1, 638.0], [77.2, 638.0], [77.3, 639.0], [77.4, 639.0], [77.5, 639.0], [77.6, 640.0], [77.7, 640.0], [77.8, 640.0], [77.9, 641.0], [78.0, 641.0], [78.1, 641.0], [78.2, 642.0], [78.3, 642.0], [78.4, 642.0], [78.5, 643.0], [78.6, 643.0], [78.7, 643.0], [78.8, 644.0], [78.9, 644.0], [79.0, 644.0], [79.1, 644.0], [79.2, 645.0], [79.3, 645.0], [79.4, 645.0], [79.5, 646.0], [79.6, 646.0], [79.7, 646.0], [79.8, 647.0], [79.9, 647.0], [80.0, 647.0], [80.1, 648.0], [80.2, 648.0], [80.3, 648.0], [80.4, 649.0], [80.5, 649.0], [80.6, 649.0], [80.7, 650.0], [80.8, 650.0], [80.9, 650.0], [81.0, 651.0], [81.1, 651.0], [81.2, 651.0], [81.3, 652.0], [81.4, 652.0], [81.5, 652.0], [81.6, 653.0], [81.7, 653.0], [81.8, 654.0], [81.9, 654.0], [82.0, 654.0], [82.1, 655.0], [82.2, 655.0], [82.3, 656.0], [82.4, 656.0], [82.5, 656.0], [82.6, 657.0], [82.7, 657.0], [82.8, 657.0], [82.9, 658.0], [83.0, 658.0], [83.1, 659.0], [83.2, 659.0], [83.3, 659.0], [83.4, 660.0], [83.5, 660.0], [83.6, 660.0], [83.7, 661.0], [83.8, 661.0], [83.9, 662.0], [84.0, 662.0], [84.1, 662.0], [84.2, 663.0], [84.3, 663.0], [84.4, 663.0], [84.5, 664.0], [84.6, 664.0], [84.7, 665.0], [84.8, 665.0], [84.9, 666.0], [85.0, 666.0], [85.1, 666.0], [85.2, 667.0], [85.3, 667.0], [85.4, 668.0], [85.5, 668.0], [85.6, 669.0], [85.7, 669.0], [85.8, 669.0], [85.9, 670.0], [86.0, 670.0], [86.1, 671.0], [86.2, 671.0], [86.3, 672.0], [86.4, 672.0], [86.5, 672.0], [86.6, 673.0], [86.7, 673.0], [86.8, 674.0], [86.9, 674.0], [87.0, 675.0], [87.1, 675.0], [87.2, 676.0], [87.3, 676.0], [87.4, 677.0], [87.5, 677.0], [87.6, 678.0], [87.7, 678.0], [87.8, 679.0], [87.9, 679.0], [88.0, 680.0], [88.1, 680.0], [88.2, 681.0], [88.3, 681.0], [88.4, 681.0], [88.5, 682.0], [88.6, 683.0], [88.7, 683.0], [88.8, 684.0], [88.9, 684.0], [89.0, 685.0], [89.1, 685.0], [89.2, 686.0], [89.3, 686.0], [89.4, 687.0], [89.5, 687.0], [89.6, 688.0], [89.7, 688.0], [89.8, 689.0], [89.9, 690.0], [90.0, 690.0], [90.1, 691.0], [90.2, 692.0], [90.3, 692.0], [90.4, 693.0], [90.5, 693.0], [90.6, 694.0], [90.7, 695.0], [90.8, 695.0], [90.9, 696.0], [91.0, 697.0], [91.1, 698.0], [91.2, 698.0], [91.3, 699.0], [91.4, 700.0], [91.5, 700.0], [91.6, 701.0], [91.7, 702.0], [91.8, 702.0], [91.9, 703.0], [92.0, 704.0], [92.1, 705.0], [92.2, 705.0], [92.3, 706.0], [92.4, 707.0], [92.5, 708.0], [92.6, 708.0], [92.7, 709.0], [92.8, 710.0], [92.9, 711.0], [93.0, 712.0], [93.1, 713.0], [93.2, 713.0], [93.3, 715.0], [93.4, 715.0], [93.5, 717.0], [93.6, 717.0], [93.7, 718.0], [93.8, 719.0], [93.9, 720.0], [94.0, 721.0], [94.1, 722.0], [94.2, 723.0], [94.3, 724.0], [94.4, 725.0], [94.5, 726.0], [94.6, 727.0], [94.7, 728.0], [94.8, 729.0], [94.9, 730.0], [95.0, 730.0], [95.1, 732.0], [95.2, 733.0], [95.3, 734.0], [95.4, 735.0], [95.5, 737.0], [95.6, 738.0], [95.7, 739.0], [95.8, 740.0], [95.9, 741.0], [96.0, 743.0], [96.1, 744.0], [96.2, 746.0], [96.3, 747.0], [96.4, 748.0], [96.5, 750.0], [96.6, 751.0], [96.7, 753.0], [96.8, 754.0], [96.9, 756.0], [97.0, 758.0], [97.1, 760.0], [97.2, 762.0], [97.3, 763.0], [97.4, 765.0], [97.5, 767.0], [97.6, 770.0], [97.7, 772.0], [97.8, 775.0], [97.9, 778.0], [98.0, 781.0], [98.1, 783.0], [98.2, 785.0], [98.3, 789.0], [98.4, 792.0], [98.5, 795.0], [98.6, 798.0], [98.7, 802.0], [98.8, 805.0], [98.9, 810.0], [99.0, 815.0], [99.1, 820.0], [99.2, 827.0], [99.3, 833.0], [99.4, 840.0], [99.5, 852.0], [99.6, 860.0], [99.7, 874.0], [99.8, 894.0], [99.9, 929.0], [100.0, 1226.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 14110.0, "series": [{"data": [[1100.0, 2.0], [600.0, 8932.0], [300.0, 396.0], [1200.0, 1.0], [700.0, 2253.0], [800.0, 364.0], [400.0, 4954.0], [200.0, 8.0], [100.0, 2.0], [900.0, 48.0], [500.0, 14110.0], [1000.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5455.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 25621.0, "series": [{"data": [[0.0, 5455.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25621.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93548387096774, "minX": 1.557159E12, "maxY": 10.0, "series": [{"data": [[1.55716008E12, 10.0], [1.55715978E12, 10.0], [1.55715948E12, 10.0], [1.55715918E12, 10.0], [1.55715936E12, 10.0], [1.55715906E12, 10.0], [1.55716056E12, 10.0], [1.55716038E12, 10.0], [1.5571596E12, 10.0], [1.5571593E12, 10.0], [1.557159E12, 10.0], [1.5571605E12, 10.0], [1.55716074E12, 10.0], [1.5571602E12, 10.0], [1.5571599E12, 10.0], [1.55715912E12, 10.0], [1.55716044E12, 10.0], [1.5571608E12, 9.93548387096774], [1.55716014E12, 10.0], [1.55716062E12, 10.0], [1.55716032E12, 10.0], [1.55716002E12, 10.0], [1.55715972E12, 10.0], [1.55715942E12, 10.0], [1.55716068E12, 10.0], [1.55716026E12, 10.0], [1.55715996E12, 10.0], [1.55715966E12, 10.0], [1.55715984E12, 10.0], [1.55715954E12, 10.0], [1.55715924E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5571608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.0, "maxY": 582.0, "series": [{"data": [[4.0, 439.0], [2.0, 215.0], [1.0, 309.0], [9.0, 513.0], [10.0, 578.675926223968], [5.0, 357.0], [6.0, 539.0], [3.0, 336.0], [7.0, 582.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.998584116359892, 578.6307118033213]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 65666.8, "minX": 1.557159E12, "maxY": 315022.1, "series": [{"data": [[1.55716008E12, 312382.25], [1.55715978E12, 307102.55], [1.55715948E12, 282170.63333333336], [1.55715918E12, 295076.56666666665], [1.55715936E12, 296836.4666666667], [1.55715906E12, 293316.6666666667], [1.55716056E12, 308275.81666666665], [1.55716038E12, 300062.95], [1.5571596E12, 308569.13333333336], [1.5571593E12, 302409.48333333334], [1.557159E12, 106180.63333333333], [1.5571605E12, 304462.7], [1.55716074E12, 311502.3], [1.5571602E12, 302996.11666666664], [1.5571599E12, 315022.1], [1.55715912E12, 301529.5333333333], [1.55716044E12, 306222.6], [1.5571608E12, 200041.96666666667], [1.55716014E12, 298303.05], [1.55716062E12, 314728.7833333333], [1.55716032E12, 305049.3333333333], [1.55716002E12, 314142.15], [1.55715972E12, 313848.8333333333], [1.55715942E12, 288330.2833333333], [1.55716068E12, 306222.6], [1.55716026E12, 307982.5], [1.55715996E12, 312382.25], [1.55715966E12, 312675.56666666665], [1.55715984E12, 309449.0833333333], [1.55715954E12, 295956.51666666666], [1.55715924E12, 281877.31666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55716008E12, 193191.0], [1.55715978E12, 189925.8], [1.55715948E12, 174506.8], [1.55715918E12, 182488.4], [1.55715936E12, 183576.8], [1.55715906E12, 181400.0], [1.55716056E12, 190651.4], [1.55716038E12, 185572.2], [1.5571596E12, 190832.8], [1.5571593E12, 187023.4], [1.557159E12, 65666.8], [1.5571605E12, 188293.2], [1.55716074E12, 192646.8], [1.5571602E12, 187386.2], [1.5571599E12, 194823.6], [1.55715912E12, 186479.2], [1.55716044E12, 189381.6], [1.5571608E12, 123714.8], [1.55716014E12, 184483.8], [1.55716062E12, 194642.2], [1.55716032E12, 188656.0], [1.55716002E12, 194279.4], [1.55715972E12, 194098.0], [1.55715942E12, 178316.2], [1.55716068E12, 189381.6], [1.55716026E12, 190470.0], [1.55715996E12, 193191.0], [1.55715966E12, 193372.4], [1.55715984E12, 191377.0], [1.55715954E12, 183032.6], [1.55715924E12, 174325.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5571608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 558.7306616961782, "minX": 1.557159E12, "maxY": 624.5893970893951, "series": [{"data": [[1.55716008E12, 562.9652582159631], [1.55715978E12, 573.4718242597893], [1.55715948E12, 624.5893970893951], [1.55715918E12, 596.2892644135192], [1.55715936E12, 592.6729249011861], [1.55715906E12, 598.5339999999995], [1.55716056E12, 571.0580399619411], [1.55716038E12, 586.8739002932551], [1.5571596E12, 570.3412547528515], [1.5571593E12, 580.9641125121245], [1.557159E12, 567.7430939226516], [1.5571605E12, 577.468208092485], [1.55716074E12, 564.6732580037661], [1.5571602E12, 579.6272991287527], [1.5571599E12, 558.8212290502785], [1.55715912E12, 582.5466926070034], [1.55716044E12, 573.7844827586196], [1.5571608E12, 569.8856304985337], [1.55716014E12, 589.5880039331363], [1.55716062E12, 558.7306616961782], [1.55716032E12, 576.4692307692311], [1.55716002E12, 560.6517273576092], [1.55715972E12, 560.3990654205617], [1.55715942E12, 608.596134282809], [1.55716068E12, 574.0536398467432], [1.55716026E12, 571.3923809523808], [1.55715996E12, 562.7117370892023], [1.55715966E12, 561.6106941838646], [1.55715984E12, 567.6672985781989], [1.55715954E12, 594.3647175421202], [1.55715924E12, 624.3964620187305]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5571608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 558.5778191985098, "minX": 1.557159E12, "maxY": 624.4708939708929, "series": [{"data": [[1.55716008E12, 562.8563380281688], [1.55715978E12, 573.3390639923581], [1.55715948E12, 624.4708939708929], [1.55715918E12, 596.129224652087], [1.55715936E12, 592.550395256916], [1.55715906E12, 598.2999999999998], [1.55716056E12, 570.9134157944812], [1.55716038E12, 586.739002932552], [1.5571596E12, 570.2129277566535], [1.5571593E12, 580.832201745878], [1.557159E12, 567.4198895027625], [1.5571605E12, 577.3188824662814], [1.55716074E12, 564.5451977401133], [1.5571602E12, 579.5121006776383], [1.5571599E12, 558.7011173184364], [1.55715912E12, 582.3715953307396], [1.55716044E12, 573.6628352490418], [1.5571608E12, 569.7829912023451], [1.55716014E12, 589.4670599803355], [1.55716062E12, 558.5778191985098], [1.55716032E12, 576.3480769230769], [1.55716002E12, 560.530345471522], [1.55715972E12, 560.2607476635512], [1.55715942E12, 608.4567650050861], [1.55716068E12, 573.8965517241381], [1.55716026E12, 571.2647619047615], [1.55715996E12, 562.5934272300475], [1.55715966E12, 561.4887429643527], [1.55715984E12, 567.5383886255926], [1.55715954E12, 594.2378592666001], [1.55715924E12, 624.2070759625387]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5571608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4031657355679704, "minX": 1.557159E12, "maxY": 7.196132596685085, "series": [{"data": [[1.55716008E12, 0.46197183098591565], [1.55715978E12, 0.48137535816618876], [1.55715948E12, 0.706860706860707], [1.55715918E12, 0.7355864811133198], [1.55715936E12, 0.6511857707509885], [1.55715906E12, 1.287], [1.55716056E12, 0.5451950523311127], [1.55716038E12, 0.4809384164222881], [1.5571596E12, 0.5788973384030406], [1.5571593E12, 0.7536372453928216], [1.557159E12, 7.196132596685085], [1.5571605E12, 0.5289017341040468], [1.55716074E12, 0.5395480225988698], [1.5571602E12, 0.4830590513068733], [1.5571599E12, 0.4031657355679704], [1.55715912E12, 0.9202334630350204], [1.55716044E12, 0.5507662835249039], [1.5571608E12, 0.5542521994134907], [1.55716014E12, 0.5191740412979362], [1.55716062E12, 0.47623485554520045], [1.55716032E12, 0.5105769230769243], [1.55716002E12, 0.47245564892623754], [1.55715972E12, 0.5093457943925244], [1.55715942E12, 0.6907426246185148], [1.55716068E12, 0.4827586206896557], [1.55716026E12, 0.5057142857142856], [1.55715996E12, 0.4769953051643188], [1.55715966E12, 0.5178236397748593], [1.55715984E12, 0.4805687203791471], [1.55715954E12, 0.618434093161546], [1.55715924E12, 0.7877211238293432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5571608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 144.0, "minX": 1.557159E12, "maxY": 1226.0, "series": [{"data": [[1.55716008E12, 926.0], [1.55715978E12, 881.0], [1.55715948E12, 974.0], [1.55715918E12, 1063.0], [1.55715936E12, 892.0], [1.55715906E12, 944.0], [1.55716056E12, 860.0], [1.55716038E12, 1014.0], [1.5571596E12, 896.0], [1.5571593E12, 927.0], [1.557159E12, 1070.0], [1.5571605E12, 878.0], [1.55716074E12, 872.0], [1.5571602E12, 980.0], [1.5571599E12, 892.0], [1.55715912E12, 978.0], [1.55716044E12, 886.0], [1.5571608E12, 802.0], [1.55716014E12, 907.0], [1.55716062E12, 874.0], [1.55716032E12, 960.0], [1.55716002E12, 855.0], [1.55715972E12, 840.0], [1.55715942E12, 960.0], [1.55716068E12, 883.0], [1.55716026E12, 1042.0], [1.55715996E12, 946.0], [1.55715966E12, 874.0], [1.55715984E12, 1226.0], [1.55715954E12, 916.0], [1.55715924E12, 981.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55716008E12, 271.0], [1.55715978E12, 241.0], [1.55715948E12, 326.0], [1.55715918E12, 334.0], [1.55715936E12, 271.0], [1.55715906E12, 295.0], [1.55716056E12, 307.0], [1.55716038E12, 328.0], [1.5571596E12, 343.0], [1.5571593E12, 314.0], [1.557159E12, 336.0], [1.5571605E12, 357.0], [1.55716074E12, 324.0], [1.5571602E12, 288.0], [1.5571599E12, 326.0], [1.55715912E12, 330.0], [1.55716044E12, 318.0], [1.5571608E12, 215.0], [1.55716014E12, 338.0], [1.55716062E12, 328.0], [1.55716032E12, 321.0], [1.55716002E12, 335.0], [1.55715972E12, 144.0], [1.55715942E12, 346.0], [1.55716068E12, 329.0], [1.55716026E12, 354.0], [1.55715996E12, 328.0], [1.55715966E12, 335.0], [1.55715984E12, 309.0], [1.55715954E12, 314.0], [1.55715924E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55716008E12, 668.0], [1.55715978E12, 679.0], [1.55715948E12, 750.4000000000001], [1.55715918E12, 720.3000000000001], [1.55715936E12, 704.0], [1.55715906E12, 720.8], [1.55716056E12, 686.6000000000001], [1.55716038E12, 696.2], [1.5571596E12, 676.0], [1.5571593E12, 690.6000000000001], [1.557159E12, 686.7], [1.5571605E12, 680.0], [1.55716074E12, 660.7], [1.5571602E12, 685.0], [1.5571599E12, 654.5], [1.55715912E12, 704.2], [1.55716044E12, 673.5], [1.5571608E12, 665.7], [1.55716014E12, 702.2], [1.55716062E12, 669.6], [1.55716032E12, 687.9], [1.55716002E12, 667.0], [1.55715972E12, 660.0], [1.55715942E12, 730.6], [1.55716068E12, 681.0], [1.55716026E12, 675.9], [1.55715996E12, 668.4], [1.55715966E12, 662.0], [1.55715984E12, 677.0], [1.55715954E12, 710.0], [1.55715924E12, 759.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55716008E12, 789.0599999999993], [1.55715978E12, 779.04], [1.55715948E12, 861.07], [1.55715918E12, 872.2999999999995], [1.55715936E12, 844.09], [1.55715906E12, 834.0], [1.55716056E12, 774.48], [1.55716038E12, 816.56], [1.5571596E12, 815.7000000000003], [1.5571593E12, 815.0], [1.557159E12, 884.5000000000002], [1.5571605E12, 779.6099999999999], [1.55716074E12, 750.6999999999989], [1.5571602E12, 780.9799999999999], [1.5571599E12, 780.75], [1.55715912E12, 818.4200000000001], [1.55716044E12, 797.0499999999995], [1.5571608E12, 761.8899999999993], [1.55716014E12, 820.8199999999999], [1.55716062E12, 784.26], [1.55716032E12, 822.9499999999996], [1.55716002E12, 770.0], [1.55715972E12, 766.29], [1.55715942E12, 847.0], [1.55716068E12, 777.4999999999995], [1.55716026E12, 806.49], [1.55715996E12, 790.0], [1.55715966E12, 798.3299999999999], [1.55715984E12, 905.8000000000011], [1.55715954E12, 836.5999999999999], [1.55715924E12, 909.76]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55716008E12, 699.6999999999999], [1.55715978E12, 709.0], [1.55715948E12, 793.0], [1.55715918E12, 765.3], [1.55715936E12, 743.6999999999998], [1.55715906E12, 761.9499999999999], [1.55716056E12, 722.0], [1.55716038E12, 735.5999999999999], [1.5571596E12, 717.3499999999999], [1.5571593E12, 731.0], [1.557159E12, 710.8499999999999], [1.5571605E12, 717.0], [1.55716074E12, 692.8499999999999], [1.5571602E12, 723.0], [1.5571599E12, 690.5], [1.55715912E12, 737.55], [1.55716044E12, 707.0], [1.5571608E12, 703.85], [1.55716014E12, 749.0999999999999], [1.55716062E12, 702.3], [1.55716032E12, 731.9499999999999], [1.55716002E12, 703.0], [1.55715972E12, 694.0], [1.55715942E12, 774.8], [1.55716068E12, 719.5], [1.55716026E12, 715.0], [1.55715996E12, 698.0], [1.55715966E12, 698.65], [1.55715984E12, 718.3999999999999], [1.55715954E12, 755.0], [1.55715924E12, 800.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5571608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 553.5, "minX": 8.0, "maxY": 716.5, "series": [{"data": [[8.0, 707.0], [16.0, 594.0], [17.0, 574.0], [18.0, 561.0], [19.0, 555.0], [20.0, 553.5], [10.0, 568.5], [12.0, 716.5], [13.0, 680.0], [14.0, 656.0], [15.0, 617.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 553.5, "minX": 8.0, "maxY": 716.0, "series": [{"data": [[8.0, 707.0], [16.0, 594.0], [17.0, 574.0], [18.0, 561.0], [19.0, 555.0], [20.0, 553.5], [10.0, 568.5], [12.0, 716.0], [13.0, 680.0], [14.0, 656.0], [15.0, 617.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.557159E12, "maxY": 17.9, "series": [{"data": [[1.55716008E12, 17.75], [1.55715978E12, 17.45], [1.55715948E12, 16.033333333333335], [1.55715918E12, 16.766666666666666], [1.55715936E12, 16.866666666666667], [1.55715906E12, 16.666666666666668], [1.55716056E12, 17.516666666666666], [1.55716038E12, 17.05], [1.5571596E12, 17.533333333333335], [1.5571593E12, 17.183333333333334], [1.557159E12, 6.2], [1.5571605E12, 17.3], [1.55716074E12, 17.7], [1.5571602E12, 17.216666666666665], [1.5571599E12, 17.9], [1.55715912E12, 17.133333333333333], [1.55716044E12, 17.4], [1.5571608E12, 11.2], [1.55716014E12, 16.95], [1.55716062E12, 17.883333333333333], [1.55716032E12, 17.333333333333332], [1.55716002E12, 17.85], [1.55715972E12, 17.833333333333332], [1.55715942E12, 16.383333333333333], [1.55716068E12, 17.4], [1.55716026E12, 17.5], [1.55715996E12, 17.75], [1.55715966E12, 17.766666666666666], [1.55715984E12, 17.583333333333332], [1.55715954E12, 16.816666666666666], [1.55715924E12, 16.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5571608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.033333333333333, "minX": 1.557159E12, "maxY": 17.9, "series": [{"data": [[1.55716008E12, 17.75], [1.55715978E12, 17.45], [1.55715948E12, 16.033333333333335], [1.55715918E12, 16.766666666666666], [1.55715936E12, 16.866666666666667], [1.55715906E12, 16.666666666666668], [1.55716056E12, 17.516666666666666], [1.55716038E12, 17.05], [1.5571596E12, 17.533333333333335], [1.5571593E12, 17.183333333333334], [1.557159E12, 6.033333333333333], [1.5571605E12, 17.3], [1.55716074E12, 17.7], [1.5571602E12, 17.216666666666665], [1.5571599E12, 17.9], [1.55715912E12, 17.133333333333333], [1.55716044E12, 17.4], [1.5571608E12, 11.366666666666667], [1.55716014E12, 16.95], [1.55716062E12, 17.883333333333333], [1.55716032E12, 17.333333333333332], [1.55716002E12, 17.85], [1.55715972E12, 17.833333333333332], [1.55715942E12, 16.383333333333333], [1.55716068E12, 17.4], [1.55716026E12, 17.5], [1.55715996E12, 17.75], [1.55715966E12, 17.766666666666666], [1.55715984E12, 17.583333333333332], [1.55715954E12, 16.816666666666666], [1.55715924E12, 16.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5571608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.033333333333333, "minX": 1.557159E12, "maxY": 17.9, "series": [{"data": [[1.55716008E12, 17.75], [1.55715978E12, 17.45], [1.55715948E12, 16.033333333333335], [1.55715918E12, 16.766666666666666], [1.55715936E12, 16.866666666666667], [1.55715906E12, 16.666666666666668], [1.55716056E12, 17.516666666666666], [1.55716038E12, 17.05], [1.5571596E12, 17.533333333333335], [1.5571593E12, 17.183333333333334], [1.557159E12, 6.033333333333333], [1.5571605E12, 17.3], [1.55716074E12, 17.7], [1.5571602E12, 17.216666666666665], [1.5571599E12, 17.9], [1.55715912E12, 17.133333333333333], [1.55716044E12, 17.4], [1.5571608E12, 11.366666666666667], [1.55716014E12, 16.95], [1.55716062E12, 17.883333333333333], [1.55716032E12, 17.333333333333332], [1.55716002E12, 17.85], [1.55715972E12, 17.833333333333332], [1.55715942E12, 16.383333333333333], [1.55716068E12, 17.4], [1.55716026E12, 17.5], [1.55715996E12, 17.75], [1.55715966E12, 17.766666666666666], [1.55715984E12, 17.583333333333332], [1.55715954E12, 16.816666666666666], [1.55715924E12, 16.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5571608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.033333333333333, "minX": 1.557159E12, "maxY": 17.9, "series": [{"data": [[1.55716008E12, 17.75], [1.55715978E12, 17.45], [1.55715948E12, 16.033333333333335], [1.55715918E12, 16.766666666666666], [1.55715936E12, 16.866666666666667], [1.55715906E12, 16.666666666666668], [1.55716056E12, 17.516666666666666], [1.55716038E12, 17.05], [1.5571596E12, 17.533333333333335], [1.5571593E12, 17.183333333333334], [1.557159E12, 6.033333333333333], [1.5571605E12, 17.3], [1.55716074E12, 17.7], [1.5571602E12, 17.216666666666665], [1.5571599E12, 17.9], [1.55715912E12, 17.133333333333333], [1.55716044E12, 17.4], [1.5571608E12, 11.366666666666667], [1.55716014E12, 16.95], [1.55716062E12, 17.883333333333333], [1.55716032E12, 17.333333333333332], [1.55716002E12, 17.85], [1.55715972E12, 17.833333333333332], [1.55715942E12, 16.383333333333333], [1.55716068E12, 17.4], [1.55716026E12, 17.5], [1.55715996E12, 17.75], [1.55715966E12, 17.766666666666666], [1.55715984E12, 17.583333333333332], [1.55715954E12, 16.816666666666666], [1.55715924E12, 16.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5571608E12, "title": "Total Transactions Per Second"}},
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

