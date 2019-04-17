import React, { Component } from "react";

export default class UmnPress extends Component {
  static displayName = "Logo.UmnPress";

  render() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="125" viewBox="0 0 46 125">
        <defs>
          <path id="umn_press-a" d="M42.8776405,3.14007892 L42.8776405,121.859939 L3.12252381,121.859939 L3.12252381,3.14007892 L42.8776405,3.14007892 L42.8776405,3.14007892 Z M46,0 L0,0 L0,125 L46,125 L46,0 Z M36.7297405,26.0188038 C36.7403442,25.9282835 36.7444802,25.8371152 36.7421167,25.746 C36.5787071,24.2551344 36.1429667,22.8149158 35.9230611,21.3322374 C35.8639,20.933321 35.7930381,20.5216097 35.705054,20.1204536 C35.5034754,19.2016846 35.2288079,18.2927183 35.1110151,17.3634674 C34.9811381,16.3387784 34.6897683,15.3513909 34.5483,14.3300979 C34.3907915,13.216968 34.1711845,12.1136224 33.8905183,11.0252831 C33.7117389,10.3241733 33.7524817,9.56782722 33.356681,8.89403269 L25.8290183,8.89403269 C24.9054952,11.8418401 23.6751595,14.6841131 22.9693333,17.8507546 C22.0343103,14.8600468 21.1457619,12.0178656 20.2403651,9.1217332 L20.0691611,8.9140602 L12.5143548,8.9140602 C12.1473222,9.98533935 12.0469254,11.0716345 11.8164873,12.1272184 C11.560731,13.2988738 11.3445857,14.4822593 11.1206278,15.6619183 C10.8876159,16.8893055 10.652231,18.1166928 10.4307556,19.3456404 C10.3409278,19.8441254 10.1421056,20.3202698 10.1368667,20.8388557 C10.1311167,21.4005806 9.9491246,21.9426452 9.83837778,22.4861415 C9.63050159,23.506278 9.45431429,24.5329496 9.24167381,25.552205 C9.17954463,25.7099395 9.20224678,25.8887007 9.30180238,26.0256693 L16.3679135,26.0256693 C16.46555,25.6560741 16.5422728,25.2812097 16.5977127,24.9028803 C16.7196492,23.5603211 16.9234,22.2264264 17.0518532,20.887612 C17.1583286,19.7780952 17.4378516,18.681465 17.3673913,17.5547293 C17.3552706,17.3611361 17.4136103,17.2217512 17.6195698,17.2824946 C18.4428238,20.2897421 19.6898619,23.1171459 20.6814357,26.0327918 L25.1372294,26.0327918 C26.2277762,22.9860216 27.5376262,20.0413532 28.5436389,16.8781445 C28.8829254,19.9631156 29.2135595,22.9695554 29.5489214,26.0189139 L36.7297405,26.0188038 Z M19.2013492,48.3912236 C19.5646032,48.6280291 25.1574548,48.6410076 25.5829365,48.3961616 C25.5401127,45.5631957 25.7758627,42.6938828 25.160631,39.8528031 L25.2818008,39.8298018 C27.1131849,42.7142775 28.944569,45.5987349 30.8012897,48.5231371 L37.1285714,48.5231371 L37.1285714,31.5738225 L30.953473,31.5738225 C30.8804358,31.7798574 30.8562947,32.0002076 30.8829762,32.2172912 C30.8791246,33.7655409 30.8926873,35.313919 30.8767151,36.8620219 C30.8608758,38.0437557 31.0101919,39.2218684 31.3202865,40.361825 C31.3778658,40.5038811 31.3525744,40.6663141 31.2545722,40.7838713 C29.3466188,37.6842635 27.4581484,34.6163277 25.5891611,31.5800639 C24.2073357,31.4058374 19.5178913,31.5112801 19.2011667,31.7232486 L19.2013492,48.3912236 Z M13.8453246,62.6656446 L14.0075476,62.6480769 C15.5761841,65.5196293 17.1448206,68.3911633 18.6687532,71.1808434 L24.0036944,71.1808434 L24.0036944,54.0813867 L18.6628571,54.0813867 C18.6628571,55.6017153 18.7099889,57.0807774 18.6495865,58.5553787 C18.5893484,60.0273916 18.8684333,61.4788998 18.9263532,62.9419912 L18.8029381,62.9544373 C17.2368389,59.982986 15.6707214,57.0115347 14.1230222,54.0749617 L8.78424762,54.0749617 L8.78424762,71.175887 L14.1098794,71.175887 C14.0157071,68.30852 14.3065659,65.4844573 13.8452881,62.6656079 L13.8453246,62.6656446 Z M37.8715079,84.9104647 C37.8374825,84.4129894 37.8747754,83.6020496 37.6587579,82.7803341 C37.3836889,81.7339838 37.0148492,80.7347193 36.397281,79.8753169 C34.7270429,77.5510975 32.4096103,76.4067391 29.569804,76.3008925 C28.9610341,76.2782032 28.3759944,76.408024 27.7798929,76.4944856 C26.9428378,76.6232516 26.13483,76.8990832 25.3928032,77.3093722 C23.9453019,78.0732294 22.7669674,79.2670233 22.0181373,80.7283127 C21.438774,81.8436203 21.0902187,83.0654522 20.9935238,84.3200111 C20.8784834,85.6344216 21.0182341,86.9587919 21.405023,88.2196485 C21.6825754,89.1709822 22.1237932,90.0660293 22.7086484,90.8641613 C23.9137519,92.4890573 25.7066267,93.5713961 27.6992833,93.8769526 C29.0182421,94.0875076 30.3928937,94.1200363 31.7393429,93.7456815 C32.8229883,93.4752038 33.8433576,92.9936032 34.7426683,92.3281522 C36.1415063,91.2456753 37.0452421,89.8177559 37.5736214,88.1394651 C37.8715079,87.1929586 37.8996008,86.2139969 37.8715079,84.9104647 Z M25.471277,99.2655282 C25.154954,100.073109 24.9596913,100.8542 24.7004119,101.614787 C24.4554254,102.333409 24.273269,103.07696 24.0254532,103.799015 C23.8544135,104.297225 23.7098786,104.805714 23.5504119,105.307118 C23.3996341,105.781353 23.264354,106.264859 23.1093778,106.740912 C22.9362937,107.272678 22.770791,107.80691 22.6128698,108.343608 C22.4200897,108.995007 22.2516238,109.653988 22.0468143,110.301403 C21.784596,111.130296 21.4635635,111.941603 21.2300405,112.778041 C21.0356175,113.474488 20.7777071,114.152303 20.6107016,114.852385 C20.5002103,115.315532 20.1301476,115.742058 20.356077,116.323828 L25.2956008,116.323828 C25.7026643,115.686105 25.670227,114.979764 26.011704,114.185235 C27.6945373,114.091614 29.4877159,114.183143 31.2629325,114.129008 C31.5237325,114.760905 31.7271087,115.41525 31.8705706,116.084031 C32.0428011,116.299641 32.3113086,116.413692 32.5850857,116.387527 C33.9322286,116.380405 35.2793714,116.384664 36.6263865,116.381873 C36.819436,116.41044 37.0145958,116.345956 37.1531778,116.207812 C35.368828,110.617658 33.5662608,104.97023 31.7454762,99.2655282 L25.471277,99.2655282 Z M19.844546,77.8789172 C18.6093548,76.9335305 17.2745333,76.5751647 15.905431,76.3461058 C14.6782629,76.1657959 13.4254206,76.3282132 12.2838437,76.815605 C10.8359389,77.3947507 9.64654683,78.3346487 8.95736825,79.8118016 C8.03736825,81.7838231 7.88686429,83.717864 9.24711349,85.5568155 C9.77213605,86.256968 10.5098358,86.7658901 11.3483825,87.0064329 C12.0226683,87.2244939 12.7123238,87.3911879 13.4115008,87.5051014 C13.7870397,87.5609251 14.2615151,87.6090389 14.5157198,88.0264409 C14.5539187,88.2683888 14.5495071,88.5152075 14.5026865,88.7556185 C14.188846,89.1690554 13.7798294,89.2771599 13.2758738,89.2932774 C12.1589135,89.3290369 11.2640675,88.8359122 10.3967667,88.2259083 C10.1138302,88.0269549 9.90832698,87.7119116 9.46063016,87.598814 C8.86774127,89.2132408 8.26134444,90.8080438 7.76624206,92.4374499 C8.25179762,92.7213963 8.68094841,92.8845168 9.09416349,93.0808085 C9.96577627,93.5003264 10.9007952,93.770892 11.8608262,93.881395 C13.7891571,94.0896554 15.7165389,94.116989 17.497031,93.0371739 C19.0767111,92.0791392 20.0037206,90.6952216 20.2829881,88.920997 C20.449299,88.0239361 20.3948528,87.0995789 20.1243976,86.2285357 C19.8374901,85.3043295 19.2670906,84.4951458 18.4949024,83.9168909 C17.3897706,83.089907 16.0391413,82.9246938 14.7647222,82.5614266 C14.4017968,82.4579665 14.0809833,82.3298895 13.9725,81.9426114 C13.9084606,81.6750194 14.037007,81.3984647 14.2822333,81.2762515 C14.6507444,81.0555083 15.0678294,80.9081932 15.5015984,81.0288906 C16.2215349,81.2292024 16.9462357,81.4102944 17.5789,81.8615284 C17.790646,82.0126251 18.030923,82.3164155 18.4163556,82.0995456 C18.8918897,80.6942237 19.3756929,79.2644319 19.844546,77.8789172 Z M32.186054,64.4910302 L36.8378587,64.4910302 L36.8378587,60.5373681 L32.1769635,60.5373681 L32.1769635,58.028165 L37.1589278,58.028165 L37.1589278,54.0747414 L26.9929095,54.0747414 L26.9929095,71.1904258 L37.3421429,71.1904258 L37.3421429,67.0643544 C37.2045461,66.9841406 37.0424364,66.9575708 36.8866333,66.9896964 C35.4985407,66.988644 34.1104542,66.9896842 32.7223738,66.9928171 C32.4600278,66.9931843 32.1657556,66.9498984 32.1460595,66.6508809 C32.0840625,65.9315114 32.0974677,65.2075797 32.186054,64.4910302 L32.186054,64.4910302 Z M17.2545452,116.339028 C17.3534836,116.156099 17.39229,115.946365 17.3654016,115.739892 C17.3666915,112.243637 17.3679085,108.747371 17.3690524,105.251092 C17.3691984,105.02286 17.3219206,104.767826 17.5309833,104.684044 C18.5073013,104.816196 19.4939638,104.853976 20.4774476,104.796866 L20.4774476,99.2596539 L8.76555556,99.2596539 L8.76555556,104.820675 C9.76094444,104.822676 10.7196063,104.849826 11.7683333,104.61794 L11.7683333,116.339028 L17.2545452,116.339028 Z M9.0118746,31.584855 L9.0118746,48.5416043 L15.4519841,48.5416043 L15.4519841,31.584855 L9.0118746,31.584855 Z M19.0451317,63.1226794 C19.1256135,63.1906004 19.1214516,63.2343819 19.0652111,63.281229 C18.9626056,63.2593658 18.9727548,63.2082048 19.0451317,63.1226794 Z M26.7351087,85.3726946 C26.677481,84.3617917 26.9348984,83.4575614 27.6931135,82.7650978 C28.9577667,81.6101106 31.1068429,81.9573888 31.841054,83.6230867 C32.1300508,84.2787261 32.3330897,84.9429567 32.2371651,85.6538691 C32.0898008,86.7452308 31.7091873,87.7182999 30.6502381,88.25304 C29.9776548,88.5794817 29.2005711,88.6108023 28.5041669,88.3395381 C27.8077626,88.0682738 27.2544086,87.5187196 26.9759698,86.8218347 C26.7812913,86.3392285 26.7789913,85.8597064 26.7351087,85.3726946 L26.7351087,85.3726946 Z M28.7296833,104.106422 C29.3112548,106.165034 29.8928444,108.223664 30.5038778,110.386543 C29.2222667,110.44099 28.046127,110.433097 26.7894508,110.391628 L28.5921579,104.073471 L28.7296833,104.106422 Z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <rect width="46" height="125"/>
          <mask id="umn_press-b" fill="#fff">
            <use href="#umn_press-a"/>
          </mask>
          <use fill="#FFF" fillRule="nonzero" href="#umn_press-a"/>
          <g fill="#FFF" mask="url(#umn_press-b)">
            <polygon points="0 125 46 125 46 0 0 0"/>
          </g>
        </g>
      </svg>
    )
  }
}
