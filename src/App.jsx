import { useEffect, useState } from "react";
import { apiCatImg, apiCatMsg } from "./services/api";

function App() {

  const [message, setMessage] = useState("Click on the Cat below");
  const [catImg, setCatImg] = useState("");

  const getCatImg = async () => {
    const { data } = await apiCatImg.get("");
    setCatImg(data[0].url);
  };

  const getMsgFromCat = async () => {
    const { data } = await apiCatMsg.get("");
    setMessage(data.data[0])
  };

  useEffect(() => {
    getCatImg();
  }, [message]);

  return (
    <div className="w-full h-screen bg-catTheme flex flex-col items-center 
    justify-center gap-5 text-white text-lg bg-gradient-to-r from-catTheme 
    to-purple">

      <div className="border-white border-4 rounded-2xl p-2">
        <img className="object-cover h-52 w-80 rounded-2xl" src={catImg} />
      </div>

      <div className="h-52 w-80 overflow-auto">
        <p>{message}</p>
      </div>

      <div className="flex flex-col items-center gap-3 h-20 w-80 text-wrap">
        <button className="border border-solid border-1 border-white rounded 
        p-2 w-40 flex justify-center animate-pulse hover:scale-105" onClick={() => { getMsgFromCat() }}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="50px" height="50px" viewBox="0 0 879.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#c7ecee" stroke="none">
              <path d="M181 12786 c-16 -19 -10 -77 15 -152 9 -27 61 -138 116 -248 54 -109
        98 -200 96 -201 -2 -2 -45 -8 -97 -14 -110 -12 -147 -30 -130 -63 19 -35 174
        -177 268 -244 2 -2 -22 -91 -52 -198 -31 -107 -64 -233 -74 -279 -16 -82 -16
        -88 1 -164 10 -43 46 -159 79 -258 l61 -180 0 -157 1 -157 40 -42 c22 -23 94
        -77 160 -121 l120 -80 130 7 c187 10 301 53 620 236 141 80 221 112 365 145
        138 31 209 32 238 1 49 -52 83 -163 102 -327 6 -52 27 -167 45 -255 41 -186
        41 -194 16 -266 -20 -58 -68 -159 -76 -159 -3 0 -44 16 -91 36 -48 20 -131 51
        -186 70 -69 24 -156 68 -292 150 l-195 115 -243 60 c-427 106 -690 154 -795
        147 -137 -10 -340 -145 -403 -268 -42 -82 -12 -169 92 -266 117 -109 161 -119
        418 -88 157 18 192 13 261 -39 34 -27 58 -35 106 -41 103 -12 217 -58 315
        -128 26 -19 102 -83 168 -143 67 -61 163 -138 213 -173 273 -189 928 -546
        1046 -571 57 -12 172 0 336 33 66 14 123 22 127 18 7 -7 106 -449 132 -591 9
        -46 16 -118 16 -160 0 -113 -33 -385 -75 -616 -8 -44 -30 -168 -49 -275 -19
        -107 -42 -262 -51 -345 -29 -265 -31 -268 -195 -291 -152 -21 -219 -53 -320
        -154 -131 -129 -198 -271 -171 -360 17 -56 70 -113 134 -141 50 -23 60 -24
        302 -23 198 0 283 5 410 22 l160 22 205 -22 c200 -21 249 -22 1965 -27 l1760
        -6 58 -28 c228 -112 466 -532 564 -994 50 -236 34 -531 -52 -989 -108 -576
        -321 -1309 -476 -1641 -251 -537 -735 -1009 -1152 -1123 -251 -69 -576 -58
        -872 29 -55 16 -179 57 -275 91 -394 140 -496 163 -615 142 -84 -16 -128 -35
        -176 -79 -57 -51 -81 -104 -87 -188 -8 -124 33 -249 113 -342 124 -145 756
        -341 1340 -414 132 -17 565 -17 670 0 456 72 778 247 1130 612 384 399 722
        1012 975 1769 154 459 247 873 297 1315 21 192 24 675 5 855 -58 533 -206
        1008 -501 1601 -227 454 -263 624 -266 1244 -2 355 -4 391 -28 547 -140 896
        -542 1713 -1132 2303 -361 360 -981 795 -1605 1124 -307 163 -577 286 -979
        446 -131 53 -287 123 -347 157 -253 142 -973 483 -1079 511 -194 52 -882 156
        -1085 164 -144 6 -227 -2 -449 -42 -74 -14 -161 -25 -193 -25 -41 0 -171 29
        -434 95 -418 106 -473 116 -493 91z m3924 -5503 c11 -61 71 -201 139 -325 59
        -107 135 -225 268 -416 61 -88 71 -136 36 -168 -12 -12 -79 -44 -148 -72 -69
        -27 -174 -72 -235 -98 l-110 -49 -120 -1 c-80 -1 -132 -7 -155 -17 -48 -20
        -102 -28 -118 -18 -18 11 54 201 163 431 46 96 102 229 124 295 44 134 131
        445 131 470 0 29 18 6 25 -32z"/>
            </g>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default App
