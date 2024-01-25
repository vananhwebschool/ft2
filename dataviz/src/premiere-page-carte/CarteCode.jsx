import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carte({onClickMap}) {
  const [axe, setAxe] = useState();

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 4134 4191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        onClick={() => onClickMap("Axe Sud Est") || setAxe("sudEst")}
        id="axeSudEst"
        d="M2891.5 3637V3650L2895.5 3653L3005.5 3657.5L3024.5 3678.5L3014.5 3697L3105 3711.5L3134.5 3662.5L3182 3671L3164 3602.5L3221.5 3648.5L3242.5 3635.5V3638.5L3205.5 3678.5L3164 3685.5L3179.5 3711.5L3271 3691.5L3290.5 3714L3281 3765.5L3401 3773.5L3422 3789.5L3446.5 3805L3454.5 3816L3459.5 3829H3477H3491L3496 3824L3488 3816V3805H3503L3560 3816L3554 3845.5L3566.5 3848.5L3581 3805L3642.5 3811.5V3789.5L3737 3764L3755.5 3722L3719 3715.5L3769 3645H3818.5L3839 3583L3905 3579.5V3526.5L3962 3497.5L3967.5 3510.5L4032 3460L4025.5 3432V3412.5L4092 3313L4076 3271.5L3990.5 3308L3848.5 3259.5L3800 3191L3814.5 3159L3786 3111L3811 3089V3047.5L3855.5 3034L3832.5 2975L3740.5 2934L3736.5 2881.5H3712.5L3700.5 2833L3659 2838.5L3636.5 2864.5L3570 2833L3556 2888L3592 2889.5L3607 2957.5L3497.5 2975L3425.5 3039.5L3417 3067.5L3365 3070.5L3352 3115L3375.5 3138.5L3362 3154.5L3312.5 3147L3319 3161.5L3323 3179L3296.5 3184.5L3323 3221.5L3364.5 3223.5L3391 3287.5L3390 3308.5L3354 3291L3326 3328L3281 3283.5L3213.5 3281L3212.5 3238L3095.5 3281L3091.5 3269.5L3087 3243.5L3032.5 3233L3030.5 3254L3054.5 3298.5V3333.5L3102 3386L3035.5 3455.5L3030 3538H2984L2960.5 3570.5L2972.5 3586L2891.5 3637Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "sudEst" ? "grey" : "white"}
      />
      <path
        onClick={() => onClickMap("Axe Sud Est") || setAxe("sudEst")}
        id="axeSudEst"
        d="M3032 3233.5L3030.5 3254L2984 3228.5L2960.5 3254L2933 3228.5L2900 3264L2847.5 3228.5L2823 3241L2831 3194.5L2803 3169L2757 3049.5V3032.5L2684 2971L2626 3005L2587 2926L2545 2942L2528.5 2974L2499.5 2967.5L2455 3083.5L2441.5 3015L2413.5 2974L2378.5 2971L2375 2942L2325 2983.5L2287 3072H2227L2194 3090.5L2169 3053L2181.5 3005L2147.5 2918.5L2170.5 2914.5L2158.5 2879.5L2186.5 2865L2203.5 2824.5L2194 2797.5L2244.5 2744V2710L2302.5 2724L2291.5 2553L2259 2508.5L2336.5 2437.5L2294 2294.5L2231.5 2261.5L2227 2221.5L2262 2177L2342 2161.5L2323.5 2104L2367 2071L2413 2075.5L2434.5 2046.5H2484L2535 2104L2601.5 2083.5L2619.5 2113.5L2672 2069.5L2713 2170L2803.5 2213.5V2272L2778 2290L2767 2324L2794.5 2344L2836.5 2332L2891.5 2349.5L2927.5 2320L2941 2281.5L3004 2297.5L3027 2279L3042.5 2334H3059L3111 2178.5L3150 2190L3187 2169.5L3231.5 2199L3261.5 2265L3277 2255.5L3302.5 2292.5L3349 2255.5L3373.5 2288H3420L3478.5 2220L3514.5 2233.5L3505.5 2291L3452 2311V2330.5L3450 2352L3510.5 2346L3565.5 2301L3544.5 2276L3568.5 2233.5L3587.5 2252L3624.5 2217.5L3723.5 2219L3713 2238L3745.5 2267.5L3736.5 2305L3726.5 2324.5V2337.5L3731.5 2339.5H3739.5L3750 2341L3760.5 2343.5V2352L3755 2365V2377L3772.5 2374.5L3815 2436L3787 2471.5L3767.5 2479L3736 2482V2506.5L3752 2556.5L3805.5 2573L3808.5 2639L3871 2688L3838.5 2779.5L3805.5 2781.5L3771.5 2821L3741.5 2807L3700 2833L3659 2838.5L3636.5 2864.5L3570 2833L3556 2888L3592 2889.5L3607 2957.5L3497.5 2975L3425.5 3039.5L3417 3067.5L3365 3070.5L3352 3115L3375.5 3138.5L3362 3154.5L3338.5 3151.5L3312.5 3147L3319 3161.5L3323 3179L3296.5 3184.5L3323 3221.5L3364.5 3223.5L3391 3287.5L3390 3308.5L3354 3291L3326.5 3328.5L3281 3283L3213.5 3281L3212.5 3238L3095.5 3281L3091.5 3269.5L3087 3243L3032 3233.5Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "sudEst" ? "grey" : "white"}
      />
      <path
        onClick={() => onClickMap("Axe Sud Est") || setAxe("sudEst")}
        id="axeSudEst"
        d="M1998 2887L2044.5 2938.5L2147.5 2918.23L2181.5 3005L2169 3053L2194 3090.5L2227 3072H2287L2325 2983.5L2375 2942L2378.5 2971L2413.5 2974L2441.5 3015L2455 3083.5L2499.5 2967.5L2528.5 2974L2545 2942L2587 2926L2626 3005L2684 2971L2757 3032.5V3049.5L2803 3169L2831 3194.5L2823 3241L2847.5 3228.5L2900 3264L2933 3228.5L2960.5 3254L2984 3228.5L3030 3254L3054.5 3298.5V3333.5L3102 3386L3035.5 3455.5L3030 3538H2984L2960.5 3570.5L2972.5 3586L2891.5 3637V3650L2863 3640L2852 3604L2777.5 3621.5L2639 3743.5L2612.5 3736L2549.5 3768.5L2495.5 3840L2473 3897L2476 4092L2506.5 4110L2516 4138L2442 4123L2348 4158.5V4187.5L2297.5 4190.5L2200.5 4138L2115 4185L2080.5 4138L2010.5 4113L2035 4077.5L1951.5 4035.5L1912.5 4054L1883 4000H1816.5L1782.5 3964L1644 3917L1637.5 4007L1528.5 3985.5L1505.5 4007L1469.5 3978.5L1385.5 3994.5L1352 3952.5L1319 3929.5L1296.5 3917L1291.5 3906.5L1288.5 3898V3880.5L1296.5 3874L1405.5 3712.5L1419.5 3692.5L1423 3679V3669.5L1419.5 3662L1415 3651.5V3646L1409 3639.5L1394 3642V3637L1405.5 3617L1385.5 3568H1364.5L1335.5 3563.5L1321 3545.5V3538.5L1352.5 3489.5L1355.5 3419.5L1343 3411.5L1417 3370.5L1447.5 3403L1451.5 3370.5H1463L1479.5 3377L1505.5 3354.5L1537.5 3370.5L1637.5 3333.5L1659 3356.5L1683.5 3341L1690 3327V3321.5L1696 3318.5L1698 3310.5L1701.5 3305L1729.5 3307V3303H1726.5L1722.5 3295.5V3290L1759.5 3248.5L1733 3229.5V3212.5L1735.5 3207.5V3198.5H1739.5L1752.5 3195H1798.5V3188.5H1796.5L1768 3117.5L1782 3110H1793.5L1800.5 3105L1809.5 3101.5L1933.5 2965.5V2896.5L1998 2887Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "sudEst" ? "grey" : "white"}
      />
      <path
        onClick={() => onClickMap("Axe Sud Est") || setAxe("sudEst")}
        id="axeSudEst"
        d="M2682.5 1347.5L2613 1283L2500.5 1300.5V1349.5L2462 1397.5L2489 1410L2515.5 1485L2483.5 1522V1571.5L2429.5 1606L2466 1677.5L2429.5 1691.5L2452.5 1739.5L2434 1795L2468.5 1832.5L2499.5 1936.5L2484.5 2047L2535 2104L2601.5 2083.5L2619.5 2113.5L2672 2069.5L2713 2170L2803.5 2213.5V2272L2778 2290L2767 2324L2794.5 2344L2836.5 2332L2891.5 2349.5L2927.5 2320L2941 2281.5L3004 2297.5L3027 2279L3042.5 2334H3059L3111 2178.5L3150 2190L3187 2169.5L3231.5 2199L3261.5 2265L3277 2255.5L3302.5 2292.5L3349 2255.5L3373.5 2288H3420L3479 2219.5L3507.5 2148L3602.5 2043L3599.5 1959L3693 1892.5L3792 1754.5H3736L3764.5 1684H3819L3798.5 1638.5H3783L3785.5 1581.5L3647 1477L3604.5 1504L3583.5 1480.5L3517.5 1483L3492 1445.5L3409 1490.5L3394 1531L3349 1547V1608.5L3265 1614L3246 1655L3213 1665L3186 1620L3168 1633.5L3136 1604H3117.5L3106 1572L3127.5 1553.5L3097.5 1505H3075.5L3066 1469L3029 1455H2992L2982 1483H2905L2900.5 1505L2872 1483L2840 1500L2774.5 1502.5V1476H2754.5L2721 1388.5L2695 1401.5L2670 1377.5L2682.5 1347.5Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "sudEst" ? "grey" : "white"}
      />
      <path
        onClick={() => onClickMap("Axe Est") || setAxe("est")}
        id="axeEst"
        d="M2932 540.5L2866 532L2861.5 544V639.5L2800.5 687.5L2805 812L2776 793L2747 823L2687 835.5V886L2721.5 913L2677 917L2669.5 963.5L2696.5 981.5L2683 995L2622.5 1070.5L2605 1105.5L2633 1116.5L2631 1166L2661 1178L2605 1241L2613 1250V1283L2682.5 1347.5L2670 1377.5L2695 1401.5L2721 1388.5L2754.5 1476H2774.5V1502.5L2840 1500L2872 1483L2900.5 1505L2905 1483H2982L2992 1455H3029L3066 1469L3075.5 1505H3097.5L3127.5 1553.5L3106 1572L3117.5 1604H3136L3168 1633.5L3186 1620L3213 1665L3246 1655L3265 1614L3349 1608.5V1547L3394 1531L3409 1490.5L3492 1445.5L3517.5 1483L3583.5 1480.5L3604.5 1504L3647 1477L3785.5 1581.5L3783 1638.5H3798.5L3819 1684H3845.5L3839 1711H3908.5L3965 1641.5L3938 1581.5L3969 1452.5L3948 1381L4000.5 1275.5L4019 1122L4098 1034.5L4133 963L4044 929.5L3943 936L3877.5 878L3824.5 909L3772 895.5L3757.5 915.5L3752 878L3721.5 861.5L3693.5 868V892.5L3659.5 889.5L3566 748.5L3484 734.5L3439.5 765L3395 746L3351 711.5L3259.5 746L3235.5 690.5H3205.5L3193 654L3156 651.5L3104 606H3064L3068 551.5L3039 520L3061.5 438L3014.5 463.5L3009.5 508L2932 540.5Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "est" ? "grey" : "white"}

      />
      <path
        onClick={() =>  onClickMap("Axe Atlantique") || setAxe("atlantique")}
        id="axeAtlantique"
        d="M795.5 3638.5V3632H834.5L891 3557L918.5 3497.5L1034.5 3030L1096 3022.5L1049 2978L1013.5 3030L1065 2681L1071 2628.5L1098.5 2600.5V2622.5L1180 2706L1215.5 2837L1270 2891V2887.5L1252.5 2861L1284.5 2878V2873.5L1240 2837L1215.5 2706L1187 2635.5L1049.5 2520.5V2481L1088.5 2488L1081 2457.5L1103.5 2441V2383.5H1120L1122 2380.5L1103.5 2354L1070.5 2307V2293L1081 2273.5L1092 2256.5L1099.5 2240V2235.5L1078 2256.5L1049.5 2251.5L884.5 2135L871.5 2073L787 1971L846 1877.5L762.5 1823L794 1806V1756.5H836.5L912 1794L871.5 1745H794L748 1769L673.5 1740L682 1717L678 1695.5L700.5 1685L707.5 1676.5V1666.5L700.5 1648.5L714 1645V1641L697 1634H682L666 1637.5L622.5 1641H597.5L582.5 1634L570.5 1621.5V1616.5L582.5 1621.5H612.5L622.5 1616.5L628 1605V1592L582.5 1576L565 1587.5L552 1569.5V1605L499.5 1587.5L432.5 1531.5H448V1524.5H393L374.5 1491.5L273.5 1466L239 1415.5L232.5 1433.5L179 1428.5L169.5 1455.5L104.5 1448L115.5 1415.5L80.5 1353.5L10.5 1320.5L142.5 1310L156 1286L104.5 1235.5L68.5 1264V1217.5H50.5L76.5 1190.5L89 1212.5H152.5L147 1190.5H104.5L115.5 1159.5L26.5 1179H1.5L32 1072L94.5 1041L163 1026L167.5 1050L263 1014.5L309 1066.5L328 1032L395.5 1053L405.5 997L433 979.5L468 990.5L510.5 970.5L522.5 990.5L554.5 970.5L565 974L559 997L608 1032L673.5 1159.5L743 1093L795.5 1080L804 1093L785.5 1112L789.5 1115L812.5 1105.5L819.5 1136L852.5 1127V1112L945.5 1080V1123H1032L1073 1206L1133.5 1171.5L1185 1187L1257.5 1200L1285 1225L1314 1210.5L1321 1225L1384.5 1192L1414.5 1210.5L1453 1171.5L1487.5 1192V1230L1511.5 1233V1264.5L1615 1220L1649.5 1248.5V1298.5L1759 1352.5L1777 1365.5L1784.5 1361.5L1782 1345.5L1777 1335V1320L1846.5 1253L1798.5 1139.5L1901.5 1088L1961.5 1104L2014.5 1030.5L2029.5 1060V1149L2036 1152.5L2091.5 1203L2095.5 1246L2139.5 1253.5L2159.5 1337.5L2228 1313.5L2238 1329L2287.5 1323L2327 1373.5L2303 1410L2462 1397.5L2489 1410L2515.5 1485L2483.5 1522V1571.5L2429.5 1606L2466 1677.5L2429.5 1691.5L2452.5 1739.5L2434 1795L2468.5 1832.5L2499.5 1936.5L2484.5 2047H2434.5L2413 2075L2367.5 2071L2323.5 2104L2342 2161.5L2262 2177L2227 2221.5L2231.5 2261.5L2294 2294.5L2336.5 2437.5L2259 2508.5L2291.5 2553L2302.5 2724L2244.5 2710V2744L2194 2797.5L2203.5 2824.5L2186.5 2865L2158.5 2879.5L2170.5 2914.5L2044 2938.5L1998.5 2887L1933 2896.5V2965L1826.5 3082L1809 3101L1800.5 3104.5L1793 3110.5H1781.5L1768 3117.5L1790.5 3174L1796 3188H1799.5V3195H1753.5L1739 3198.5H1735V3209L1733 3212V3230L1759 3248L1722 3290V3296.5L1724.5 3301L1726 3304H1729.5V3307H1724.5L1701.5 3305.5L1698 3311.5L1696.5 3318L1691 3321L1689.5 3328.5L1686.5 3335L1683 3342.5L1660 3356.5L1636.5 3333L1594.5 3349.5L1536.5 3371L1505 3353.5L1499 3359.5L1488.5 3369.5L1480 3377.5L1464 3371H1451L1447.5 3402.5L1417 3371L1401 3378.5L1367 3396.5L1343.5 3410.5L1350.5 3415.5L1355 3419.5V3437L1352 3468V3489.5L1348.5 3496L1330 3522.5L1320.5 3537.5V3544L1324 3550.5L1331 3560L1334.5 3565H1350.5L1363 3568.5H1386.5L1390.5 3580L1397 3593L1401 3604L1404.5 3611.5L1406 3617L1404.5 3623.5L1403.5 3627L1399.5 3632L1397 3633.5L1394.5 3636.5V3642.5V3645.5L1402 3644.5L1403.5 3642.5H1407L1409.5 3638L1414 3642.5V3652.5L1417.5 3660V3667.5L1423 3669.5V3678L1422 3686L1417.5 3692.5L1413 3699.5L1404.5 3710.5L1385 3739.5L1382 3746.5L1374 3755.5L1371 3762L1364 3769L1357.5 3780.5L1349.5 3790L1338.5 3809.5L1329 3822L1314.5 3843.5L1306 3856.5L1300 3865L1295.5 3874.5L1291.5 3877.5L1288.5 3881.5V3899.5L1291.5 3904V3914H1290H1282.5H1268.5H1263.5H1257V3917.5H1238H1233L1228.5 3919.5H1226.5L1221 3920.5L1218 3922L1215 3924.5L1212.5 3928.5L1209 3931.5H1205.5L1203.5 3932.5H1200.5V3930.5H1197.5L1196.5 3924.5L1193 3920.5L1189.5 3916L1187 3910.5L1183.5 3906V3900.5L1179 3899.5V3896H1176V3892L1172.5 3888V3882.5H1168.5L1169.5 3879H1165V3874L1161 3867.5L1158.5 3861.5L1155 3856.5L1151.5 3850L1147.5 3846H1063.5L1062.5 3843.5L1056.5 3842.5L1055.5 3839.5H1049V3835.5H1038V3832.5H1031.5V3828.5H1020.5V3826.5L1014 3825.5V3822H1006.5V3818.5H996.5V3814.5H989V3811H979L978 3807.5H971.5V3804.5H964V3769.5H961V3766H940V3776.5H936.5V3787H933V3790V3801L922 3800V3798L908 3797V3794H901.5L900.5 3783.5L897.5 3780V3775H896H894.5V3773H897.5V3769.5H900.5L904 3766L905 3761.5H908L909 3758.5L911.5 3757.5V3754.5H915.5V3751.5V3748.5L918.5 3746.5L919.5 3730L922 3720L919.5 3706H922V3691.5H918.5V3687.5H911.5V3684H904V3680.5H897.5V3678.5L891 3677V3674L883 3673H880V3670.5H874.5L873 3674H869V3677H862.5V3681.5H859V3684H855V3687.5H848.5L848 3667H806V3659.5V3656H802.5V3653.5V3649H798.5V3642V3638.5H795.5Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "atlantique" ? "grey" : "white"}

      />
      <path
        onClick={() => onClickMap("") || setAxe("vide")}
        id="axeVide"
        d="M954.5 613L960 595L1045.5 637L1164.5 625L1173 655L1143.5 691.5L1198.5 794L1215.5 772H1257L1483 831.5L1677 761L1584 749.5L1614 646.5L1754 567.5L1911.5 535.5L1994.5 473L2092.5 559L2114 625.5L2087 654.5L2104 658.5L2092.5 677.5L2093.5 753L2114 755L2092.5 795L2114 861.5L2092.5 877.5L2087 892V911L2120.5 920H2139.5L2194.5 899L2239.5 929.5L2266 911L2351 966.5L2476 971L2502.5 958H2533V994.5L2622.5 1070V1070.5L2605 1105.5L2633 1116.5L2631 1166L2661 1178L2605 1241L2613 1250V1283L2500.5 1300.5V1349.5L2462 1397.5L2303 1410L2327 1373.5L2287.5 1323L2238 1329L2228 1313.5L2159.5 1337.5L2139.5 1253.5L2095.5 1246V1245.5L2091.5 1203L2036 1152.5L2029.5 1149V1060L2014.5 1030.5L1961.5 1104L1901.5 1088L1798.5 1139.5L1846.5 1253L1777 1320V1320.5V1335L1782 1345.5L1784.5 1361.5L1777 1365.5L1759 1352.5L1649.5 1298.5V1248.5L1615 1220L1511.5 1264.5V1233L1487.5 1230V1192L1453 1171.5L1414.5 1210.5L1384.5 1192L1321 1225L1314 1210.5L1285 1225L1257.5 1200L1184.5 1187L1133.5 1171.5L1073 1206L1033 1124.5H1105.5L1044.5 1067.5V851L980 743.5L967 688L980 638.5L954.5 613Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "vide" ? "grey" : "white"}

      />
      <path
        onClick={() => onClickMap("Axe Nord") || setAxe("nord")}
        id="axeNord"
        d="M2062.5 337L2060 96.5L2173 39.5H2218L2347.5 1L2376 64L2362.5 111.5L2443.5 184H2458.5L2494.5 151L2532 147L2566 190.5L2569.5 275.5L2672.5 283.5L2704 378.5L2714.5 355H2800.5L2832.5 396.5H2851.5L2832.5 462H2851.5L2861.5 490.5L2838.5 527V534.5L2861.5 544V639.5L2800.5 687.5L2805 812L2776 793L2747 823L2687 835.5V886L2721.5 913L2677 917L2669.5 963.5L2696.5 981.5L2683 995L2622.5 1070L2533 994V958H2502.5L2476 971L2351 966.5L2266 911L2239.5 929.5L2194.5 899L2139.5 920H2120.5L2087 911V892L2092.5 877.5L2114 861.5L2092.5 795L2114 755L2093.5 753L2092.5 677.5L2104 658.5L2087 654.5L2114 625.5L2092.5 559L1994.5 473L2036.5 414L2077 429.5L2036.5 386.5L2062.5 337Z"
        stroke="black"
        strokeWidth="3"
        fill={axe === "nord" ? "grey" : "white"}
      />
    </svg>
  );
}
