

export const BEEBOT_HTML_PROGRAM_MODE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <style>
    .checkbox-round {
      width: 30px;
      height: 30px;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 2px solid #000;
      appearance: none;
      -webkit-appearance: none;
      /* outline: none; */
      cursor: pointer;
    }

    .checkbox-round:checked {
      background-color: #00ca69;
    }
  </style>
  <!--
style="
position: fixed;
top: 50%;
left: 50%;
width: 20%;
height: 100%;
transform: translate(-50%, -50%);
" -->
  <!--
style="
position: fixed;
top: 50%;
left: 80%;
width: 20%;
height: 60%;
background: blue;
transform: translate(-50%, -50%);
" -->

  <body style="overflow: hidden;">
    <div
      style="
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
      ">
      <svg style="width: 70%" id="svg" viewBox="0 0 303.08 396.07">
        <defs>
          <style>
            .cls-1 {
              fill: #fab718;
            }
            .cls-2 {
              letter-spacing: 0.03em;
            }
            .cls-3 {
              fill: #b51f2b;
            }
            .cls-4,
            .cls-5,
            .cls-6 {
              fill: #fff;
            }
            .cls-5 {
              font-family: ArialRoundedMTBold, 'Arial Rounded MT Bold';
              font-size: 16.11px;
              stroke-width: 0.5px;
            }
            .cls-5,
            .cls-7 {
              stroke-miterlimit: 10;
            }
            .cls-5,
            .cls-8 {
              stroke: #fff;
            }
            .cls-7 {
              fill: #f9b11e;
              stroke: #000;
            }
            .cls-9 {
              letter-spacing: -0.03em;
            }
            .cls-10 {
              letter-spacing: 0.02em;
            }
            .cls-11 {
              fill: #2e3192;
            }
            .cls-12 {
              fill: #25bf33;
            }
            .cls-13 {
              opacity: 0.68;
            }
            .cls-13,
            .cls-8 {
              fill: none;
            }
            .cls-14 {
              fill: #0071bc;
            }
            .cls-15 {
              fill: #ffce00;
            }
            .cls-16 {
              fill: #ed1c24;
            }
            .cls-17 {
              letter-spacing: 0.02em;
            }
            .cls-8 {
              stroke-dasharray: 0 2;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .cls-18 {
              fill: #12771c;
            }
            .cls-19 {
              fill: #29abe2;
            }
            .cls-20 {
              fill: #fff9c3;
            }
            .cls-6 {
              font-family: ProximaSoftCond-Bold, 'Proxima Soft Condensed';
              font-size: 11px;
              font-weight: 700;
            }
            .cls-21 {
              letter-spacing: 0.02em;
            }
          </style>
        </defs>
        <g id="_Слой_1-2">
          <path
            class="cls-7"
            d="m300.37,177.55c-3.69-21.23-11.6-40.73-23.36-58.32-.06-.02-.12-.05-.18-.07-5.71-158.17-245.07-158.22-250.95-.17-46.62,67.19-23.47,146.95,24.68,206.81,71.66,92.99,135.02,90.2,204.74-2.1,30.85-41.68,54.83-93.95,45.07-146.15Zm-85.42-76.79s.08.01.13.02c-.04,0-.08-.01-.13-.02Z" />
          <path
            class="cls-15"
            d="m279.39,148.3c-2.19-12.1-11.02-26.05-16.26-33.5-2.5-3.55-4.39-7.6-4.39-11.83,0-131.42-214.77-132.72-214.77.37,0,3.91-1.67,7.69-3.87,11.03-35.33,53.7-15.41,108.22,24.69,156.01,61.56,76.57,115.99,74.27,175.88-1.73,26.5-34.32,47.1-77.36,38.72-120.35Zm-73.37-61.28s.07.01.11.02c-.04,0-.07-.01-.11-.02Z" />
          <path
            d="m151.35,396.07c32.06,0,72.82-30.88,103.95-72.36-32.78,7.41-69.07,11.53-107.27,11.53-34.43,0-67.32-3.35-97.48-9.44,31.54,40.42,71.56,70.27,100.79,70.27Z" />
          <path
            d="m148.04,230.42c-53.94,0-104.09-1.79-145.88-4.85,2.6,14.63,7.57,29.65,14.27,44.43,38.74,6.7,83.68,10.54,131.61,10.54,51.22,0,99.03-4.39,139.5-11.97,6.23-14.49,10.8-29.19,13.18-43.51-43.1,3.38-95.79,5.36-152.69,5.36Z" />
          <path
            d="m300.37,177.55c-2.69-15.56-7.73-30.31-14.78-43.85-40.06-7.36-87.15-11.6-137.55-11.6-47.37,0-91.81,3.75-130.24,10.31-7.33,13.75-12.61,28.77-15.4,44.64,41.74-3.05,91.8-4.83,145.64-4.83,56.74,0,109.3,1.98,152.34,5.34Z" />
          <rect
            class="cls-4"
            x="92.02"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83" />
          <rect
            class="cls-4"
            x="92.02"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83"
            transform="translate(-161.06 350.77) rotate(-90)" />
          <rect
            class="cls-4"
            x="198.47"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83" />
          <rect
            class="cls-4"
            x="207.18"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83" />
          <text class="cls-5" transform="translate(137.26 207.56)">
            <tspan x="0" y="0">GO</tspan>
          </text>
          <ellipse
            class="cls-15"
            cx="106.11"
            cy="66.75"
            rx="29.85"
            ry="26.99"
            transform="translate(3.3 138.49) rotate(-67.08)" />
          <path
            class="cls-1"
            d="m81.25,56.24c.76-1.8,1.66-3.48,2.68-5.06-4.99,15.48.52,31.51,13.18,36.86,12.66,5.35,27.99-1.86,35.63-16.23-.42,1.83-1,3.65-1.76,5.44-6.42,15.19-22.76,22.79-36.49,16.99-13.73-5.8-19.66-22.82-13.24-38.01Z" />
          <ellipse
            class="cls-4"
            cx="109.51"
            cy="58.69"
            rx="19.58"
            ry="17.7"
            transform="translate(12.81 136.71) rotate(-67.08)" />
          <circle cx="112.6" cy="52.03" r="11.37" />
          <circle
            class="cls-4"
            cx="115.83"
            cy="48.83"
            r="4.01"
            transform="translate(25.75 136.5) rotate(-67.08)" />
          <ellipse
            class="cls-15"
            cx="196.97"
            cy="66.75"
            rx="26.99"
            ry="29.85"
            transform="translate(-10.45 81.97) rotate(-22.92)" />
          <path
            class="cls-1"
            d="m221.83,56.24c-.76-1.8-1.66-3.48-2.68-5.06,4.99,15.48-.52,31.51-13.18,36.86-12.66,5.35-27.99-1.86-35.62-16.23.42,1.83,1,3.65,1.76,5.44,6.42,15.19,22.76,22.79,36.49,16.99s19.66-22.82,13.24-38.01Z" />
          <ellipse
            class="cls-4"
            cx="193.56"
            cy="58.69"
            rx="17.7"
            ry="19.58"
            transform="translate(-7.58 80.01) rotate(-22.92)" />
          <circle cx="190.48" cy="52.03" r="11.37" />
          <circle
            class="cls-4"
            cx="194.66"
            cy="48.83"
            r="4.01"
            transform="translate(-3.65 79.65) rotate(-22.92)" />
          <path
            class="cls-20"
            d="m198.02,83.91c-.51-1.22,3.38-1.3,7.34-2.98s6.47-4.3,6.99-3.08-1.82,4.87-5.78,6.54-8.03.73-8.55-.49Z" />
          <path
            class="cls-20"
            d="m105.37,85.32c-.51-1.22,3.38-1.3,7.34-2.98,3.96-1.67,6.47-4.3,6.99-3.08s-1.82,4.87-5.78,6.54-8.03.73-8.55-.49Z" />
          <path
            d="m174.71,20.68c-4.27-7.76-15.16-8.3-23.18-8.5-8.24-.2-19.25,1.95-23.18,8.54,0,0-.51-.1-.51-.1,1.17-4.86,5.04-8.66,9.52-10.6,8.97-4.31,29.84-3.38,35.93,5.47,1.06,1.54,1.83,3.26,1.93,5.18h-.52Z" />
          <path
            d="m129.81,27.57c-.41-2.53-1.42-5.11-3.24-6.89-1.39-1.28-3.05-1.9-4.71-2.73-.59-.27-1.22-.46-1.87-.82v-.2c4.68-1.64,8.57,2.26,9.64,6.54.33,1.36.49,2.74.38,4.11h-.2Z" />
          <path
            d="m173.06,27.57c-.58-5.49,3.73-12.8,10.02-10.65,0,0,0,.2,0,.2-.65.37-1.28.56-1.87.82-1.66.82-3.33,1.45-4.71,2.73-1.82,1.78-2.84,4.36-3.24,6.89,0,0-.2,0-.2,0h0Z" />
          <rect
            class="cls-18"
            x="133.57"
            y="187.89"
            width="33.09"
            height="33.09"
            rx="4.02"
            ry="4.02"
            transform="translate(354.55 54.32) rotate(90)" />
          <circle class="cls-11" cx="205.66" cy="259.27" r="16.78" />
          <circle class="cls-11" cx="94.58" cy="259.27" r="16.78" />
          <circle class="cls-14" cx="205.66" cy="259.27" r="16.78" />
          <circle class="cls-14" cx="94.58" cy="259.27" r="16.78" />
          <path
            class="cls-3"
            d="m172.44,147.25l-20.33-25.99c-1.01-1.29-2.97-1.29-3.98,0l-20.33,25.99c-.63.8-.68,1.78-.32,2.58.38.86,1.22,1.51,2.31,1.51h7.92v15.44c0,2.22,1.8,4.02,4.02,4.02h16.78c2.22,0,4.02-1.8,4.02-4.02v-15.44h7.92c1.47,0,2.49-1.18,2.53-2.46.02-.55-.15-1.12-.54-1.62Z" />
          <path
            class="cls-3"
            d="m127.8,252.79l20.33,25.99c1.01,1.29,2.97,1.29,3.98,0l20.33-25.99c1.3-1.66.12-4.09-1.99-4.09h-7.92v-15.44c0-2.22-1.8-4.02-4.02-4.02h-16.78c-2.22,0-4.02,1.8-4.02,4.02v15.44h-7.92c-2.11,0-3.29,2.43-1.99,4.09Z" />
          <path
            class="cls-3"
            d="m202.89,222.34l25.99-20.33c1.29-1.01,1.29-2.97,0-3.98l-25.99-20.33c-1.66-1.3-4.09-.12-4.09,1.99v7.92h-15.44c-2.22,0-4.02,1.8-4.02,4.02v16.78c0,2.22,1.8,4.02,4.02,4.02h15.44v7.92c0,2.11,2.43,3.29,4.09,1.99Z" />
          <path
            class="cls-3"
            d="m97.35,177.7l-25.99,20.33c-.65.51-.97,1.25-.97,1.99s.32,1.49.97,1.99l25.99,20.33c1.66,1.3,4.09.12,4.09-1.99v-7.92h15.44c2.22,0,4.02-1.8,4.02-4.02v-16.78c0-2.22-1.8-4.02-4.02-4.02h-15.44v-7.92c0-2.11-2.43-3.29-4.09-1.99Z" />
          <polygon
            class="cls-3"
            points="229.85 199.92 229.85 197.09 224.52 197.09 224.52 199.72 229.85 199.92" />
          <polygon
            class="cls-3"
            points="229.85 199.92 229.85 197.09 224.52 197.09 224.52 199.72 229.85 199.92" />
          <rect class="cls-3" x="70.39" y="197.22" width="2.87" height="2.93" />
          <polyline
            class="cls-3"
            points="172.97 251.12 172.94 248.2 127.29 248.2 127.25 251.12 172.75 251.12" />
          <polyline
            class="cls-3"
            points="127.26 146.07 127.26 148.81 129.76 149.25 129.89 146.42 127.26 145.99" />
          <polygon
            class="cls-3"
            points="172.98 146.14 172.98 148.87 170.81 148.98 170.47 146.24 172.98 146.14" />
          <path
            id="forward"
            onclick="forward()"
            class="cls-16"
            d="m172.44,144.61l-20.33-25.99c-1.01-1.29-2.97-1.29-3.98,0l-20.33,25.99c-1.3,1.66-.12,4.09,1.99,4.09h7.92v15.44c0,2.22,1.8,4.02,4.02,4.02h16.78c2.22,0,4.02-1.8,4.02-4.02v-15.44h7.92c2.11,0,3.29-2.43,1.99-4.09Z" />
          <path
            id="back"
            onclick="back()"
            class="cls-16"
            d="m127.8,250.14l20.33,25.99c1.01,1.29,2.97,1.29,3.98,0l20.33-25.99c1.3-1.66.12-4.09-1.99-4.09h-7.92v-15.44c0-2.22-1.8-4.02-4.02-4.02h-16.78c-2.22,0-4.02,1.8-4.02,4.02v15.44h-7.92c-2.11,0-3.29,2.43-1.99,4.09Z" />
          <path
            id="right"
            class="cls-16"
            onclick="right()"
            d="m202.89,219.7l25.99-20.33c1.29-1.01,1.29-2.97,0-3.98l-25.99-20.33c-1.66-1.3-4.09-.12-4.09,1.99v7.92h-15.44c-2.22,0-4.02,1.8-4.02,4.02v16.78c0,2.22,1.8,4.02,4.02,4.02h15.44v7.92c0,2.11,2.43,3.29,4.09,1.99Z" />
          <path
            id="left"
            onclick="left()"
            class="cls-16"
            d="m97.35,175.05l-25.99,20.33c-1.29,1.01-1.29,2.97,0,3.98l25.99,20.33c1.66,1.3,4.09.12,4.09-1.99v-7.92h15.44c2.22,0,4.02-1.8,4.02-4.02v-16.78c0-2.22-1.8-4.02-4.02-4.02h-15.44v-7.92c0-2.11-2.43-3.29-4.09-1.99Z" />
          <rect
            id="go"
            onclick="go()"
            class="cls-12"
            x="133.57"
            y="184.78"
            width="33.09"
            height="33.09"
            rx="4.02"
            ry="4.02"
            transform="translate(351.44 51.2) rotate(90)" />
          <circle class="cls-14" cx="205.66" cy="255.91" r="16.78" />
          <circle class="cls-14" cx="94.58" cy="255.91" r="16.78" />
          <circle onclick="pause()" id="pause" class="cls-19" cx="205.66" cy="255.91" r="16.78" />
          <circle onclick="empty()" id="empty" class="cls-19" cx="94.58" cy="255.91" r="16.78" />
          <g class="cls-13">
            <path
              class="cls-14"
              d="m81.78,180.86c2.51-2.23,4.53-4.72,6.26-7.45,6.76-10.67,15.23-22.2,20.64-28.28l19.25-21.65s-6.35-8.75-7.95-11.05c-19.69-4.94-50.72,3.56-72.69,20.6-13.83,10.73-11.78,24.88-2.14,38.12,9.51,13.06,24.6,20.41,36.62,9.71Z" />
            <path
              class="cls-14"
              d="m221.3,182.32c-2.51-2.23-4.53-4.72-6.26-7.45-6.76-10.67-15.23-22.2-20.64-28.28l-19.25-21.65s6.35-8.75,7.95-11.05c19.69-4.94,50.72,3.56,72.69,20.6,13.83,10.73,11.78,24.88,2.14,38.12-9.51,13.06-24.6,20.41-36.62,9.71Z" />
          </g>
          <rect
            class="cls-4"
            onclick="empty()"
            x="92.02"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83"
            transform="translate(-153.17 142.03) rotate(-45)" />
          <rect
            class="cls-4"
            onclick="empty()"
            x="92.02"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83"
            transform="translate(-19.03 503.94) rotate(-135)" />
          <rect
            class="cls-4"
            onclick="pause()"

            x="198.47"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83" />
          <rect
          onclick="pause()"

            class="cls-4"
            x="207.18"
            y="246.8"
            width="5.66"
            height="18.22"
            rx="2.83"
            ry="2.83" />
          <text class="cls-6" transform="translate(135.71 213.97)">
            <tspan class="cls-2" x="0" y="0">С</tspan>
            <tspan class="cls-9" x="6.3" y="0">Т</tspan>
            <tspan class="cls-21" x="11.15" y="0">А</tspan>
            <tspan class="cls-10" x="17.4" y="0">Р</tspan>
            <tspan class="cls-17" x="23.51" y="0">Т</tspan>
          </text>
          <path
            class="cls-8"
            d="m155.64,189.14h2.78c1.78,0,3.22,1.44,3.22,3.22h0c0,1.78-1.44,3.22-3.22,3.22h-16.6c-1.78,0-3.22,1.44-3.22,3.22h0c0,1.78,1.44,3.22,3.22,3.22h4.11" />
          <circle class="cls-4" cx="146.94" cy="201.79" r="1.27" />
          <circle class="cls-4" cx="152.85" cy="189.14" r="1.27" />
          <path
            class="cls-20"
            d="m251.07,105.13c-1.05.17-3.02-4.6-4.01-10.68-1-6.09-.66-11.19.4-11.36s4.15,4.33,5.14,10.42-.47,11.45-1.53,11.62Z" />
          <path
            class="cls-20"
            d="m267.18,205.94c-2.76,8.92-7.01,15.52-9.5,14.76s-.42-7.97,2.34-16.88,5.19-16.18,7.67-15.41,2.25,8.62-.51,17.54Z" />
        </g>
      </svg>
      <div style="width : 30%">
        <div
          style="
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
            justify-content: center;
          ">
          <svg

            width="35%"
            height="35%"
            viewBox="0 0 28 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
            id="forward_arrow_icon"
              d="M27.6674 16.5457L15.2186 0.593822C14.6001 -0.197942 13.3999 -0.197942 12.7814 0.593822L0.332575 16.5457C-0.463467 17.5646 0.259094 19.056 1.55113 19.056L6.40086 19.056L6.40086 28.5326C6.40086 29.8952 7.50307 31 8.86247 31L19.1375 31C20.4969 31 21.5991 29.8952 21.5991 28.5326L21.5991 19.056L26.4489 19.056C27.7409 19.056 28.4635 17.5646 27.6674 16.5457Z"
              fill="#FF1515" />
          </svg>
          <input id="forward_checkbox" class="checkbox-round" type="checkbox" />
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
            justify-content: center;
          ">
          <svg

          width="35%" height="35%" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
          id="right_arrow_icon"

            d="M14.4543 27.6674L30.4062 15.2186C31.1979 14.6001 31.1979 13.3999 30.4062 12.7814L14.4543 0.332576C13.4354 -0.463466 11.944 0.259095 11.944 1.55113V6.40086H2.46736C1.10479 6.40086 0 7.50307 0 8.86247V19.1375C0 20.4969 1.10479 21.5991 2.46736 21.5991H11.944V26.4489C11.944 27.7409 13.4354 28.4635 14.4543 27.6674Z" fill="#FF1515"/>
            </svg>

          <input id="right_checkbox" class="checkbox-round" type="checkbox" />
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
            justify-content: center;
          ">

<svg

width="35%" height="35%" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
id="back_arrow_icon"

  d="M0.332574 14.4543L12.7814 30.4062C13.3999 31.1979 14.6001 31.1979 15.2186 30.4062L27.6674 14.4543C28.4635 13.4354 27.7409 11.944 26.4489 11.944L21.5991 11.944L21.5991 2.46736C21.5991 1.10479 20.4969 -3.2797e-07 19.1375 -3.87391e-07L8.86247 -8.36528e-07C7.50307 -8.95949e-07 6.40086 1.10479 6.40086 2.46736L6.40086 11.944L1.55113 11.944C0.259094 11.944 -0.463467 13.4354 0.332574 14.4543Z" fill="#FF1515"/>
  </svg>

          </svg>
          <input id="back_checkbox" class="checkbox-round" type="checkbox" />
        </div>
        <div style="display: flex; align-items: center; gap: 5px; justify-content: center;">

<svg

width="35%" height="35%" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
id="left_arrow_icon"

  d="M16.5457 0.832574L0.593822 13.2814C-0.197941 13.8999 -0.197942 15.1001 0.593822 15.7186L16.5457 28.1674C17.5646 28.9635 19.056 28.2409 19.056 26.9489L19.056 22.0991L28.5326 22.0991C29.8952 22.0991 31 20.9969 31 19.6375L31 9.36247C31 8.00307 29.8952 6.90086 28.5326 6.90086L19.056 6.90086L19.056 2.05113C19.056 0.759093 17.5646 0.0365322 16.5457 0.832574Z" fill="#FF1515"/>
  </svg>

          <input id="left_checkbox" class="checkbox-round" type="checkbox" />
        </div>
      </div>
    </div>

    <script>



      let isProgrammingStarted = false;
      let fDisabled = false;
      let bDisabled = false;
      let lDisabled = false;
      let rDisabled = false;


      //for ios
      window.addEventListener("message", (event) => {
        isProgrammingStarted = false;
        document.getElementById("forward_checkbox").disabled = false;
        document.getElementById("back_checkbox").disabled = false;
        document.getElementById("left_checkbox").disabled = false;
        document.getElementById("right_checkbox").disabled = false;
      });

      //for android
      document.addEventListener("message", (event) => {
        isProgrammingStarted = false;
        document.getElementById("forward_checkbox").disabled = false;
        document.getElementById("back_checkbox").disabled = false;
        document.getElementById("left_checkbox").disabled = false;
        document.getElementById("right_checkbox").disabled = false;
      });


      let disableAllCheckBoxesEvent = document.createEvent("Event");
      disableAllCheckBoxesEvent.initEvent("disableAllCheckBox" , true,true);

      document.addEventListener("disableAllCheckBox" , ()=>{
        document.getElementById("forward_checkbox").disabled = true;
        document.getElementById("back_checkbox").disabled = true;
        document.getElementById("left_checkbox").disabled = true;
        document.getElementById("right_checkbox").disabled = true;
      },false)





      function resetCheckBox(current){
        let array = ["forward","back","left","right"];
        array = array.filter((id)=> id !== current);

        for(let x = 0 ; x < array.length ; x++) {
          document.getElementById(array[x] + "_checkbox").checked = false;
          document.getElementById(array[x] +"_arrow_icon").setAttribute("fill" , "#FF1515");
          document.getElementById(array[x]).style.fill = '#ed1c24';
        }
        switch(current){
          case "forward" : {
            bDisabled = false;
            lDisabled = false;
            rDisabled = false;
            break;
          }
          case "back" : {
            fDisabled = false;
            lDisabled = false;
            rDisabled = false;
            break;
          }
          case "left" : {
            fDisabled = false;
            bDisabled = false;
            rDisabled = false;
            break;

          }
          case "right" : {
            fDisabled = false;
            bDisabled = false;
            lDisabled = false;
            break;
          }
          default :  {

          }
        }
      }

      document.getElementById("forward_checkbox").addEventListener("change" , (e)=>{
        let isChecked = e.target.checked;
        fDisabled = isChecked;
        if(isChecked) {
          document.getElementById("forward_arrow_icon").setAttribute("fill" , "gray");
          document.getElementById('forward').style.fill = 'gray';
        }
        else {
          document.getElementById("forward_arrow_icon").setAttribute("fill" , "#FF1515");
          document.getElementById('forward').style.fill = '#ed1c24';

        }

        // document.getElementById("back_checkbox").setAttribute("disabled" , true);
        // document.getElementById("left_checkbox").setAttribute("disabled" , true);
        // document.getElementById("right_checkbox").setAttribute("disabled" , true);
        resetCheckBox("forward");

      })


      document.getElementById("back_checkbox").addEventListener("change" , (e)=>{
        let isChecked = e.target.checked;
        bDisabled = isChecked;

        if(isChecked) {
          document.getElementById("back_arrow_icon").setAttribute("fill" , "gray");
          document.getElementById('back').style.fill = 'gray';

        }
        else {
          document.getElementById("back_arrow_icon").setAttribute("fill" , "#FF1515");
          document.getElementById('back').style.fill = '#ed1c24';
        }

        // document.getElementById("forward_checkbox").setAttribute("disabled" , true);
        // document.getElementById("left_checkbox").setAttribute("disabled" , true);
        // document.getElementById("right_checkbox").setAttribute("disabled" , true);

        resetCheckBox("back");

      })


      document.getElementById("left_checkbox").addEventListener("change" , (e)=>{
        let isChecked = e.target.checked;
        lDisabled = isChecked;

        if(isChecked) {
          document.getElementById("left_arrow_icon").setAttribute("fill" , "gray");
          document.getElementById('left').style.fill = 'gray';
        }
        else {
          document.getElementById("left_arrow_icon").setAttribute("fill" , "#FF1515");
          document.getElementById('left').style.fill = '#ed1c24';

        }

        // document.getElementById("back_checkbox").setAttribute("disabled" , true);
        // document.getElementById("forward_checkbox").setAttribute("disabled" , true);
        // document.getElementById("right_checkbox").setAttribute("disabled" , true);
        resetCheckBox("left");


      })



      document.getElementById("right_checkbox").addEventListener("change" , (e)=>{
        let isChecked = e.target.checked;
        rDisabled = isChecked;
        if(isChecked) {
          document.getElementById("right_arrow_icon").setAttribute("fill" , "gray");
          document.getElementById('right').style.fill = 'gray';
        }
        else {
          document.getElementById("right_arrow_icon").setAttribute("fill" , "#FF1515");
          document.getElementById('right').style.fill = '#ed1c24';
        }
        // document.getElementById("back_checkbox").setAttribute("disabled" , true);
        // document.getElementById("left_checkbox").setAttribute("disabled" , true);
        // document.getElementById("forward_checkbox").setAttribute("disabled" , true);
        resetCheckBox("right");


      })



      function forward() {
        if(fDisabled) return;
        allowed = false;
        document.getElementById('forward').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('forward').style.fill = '#ed1c24';
        }, [200]);
        isProgrammingStarted = true;
        document.dispatchEvent(disableAllCheckBoxesEvent);
        window.ReactNativeWebView.postMessage('f');
      }
      function back() {
        if(bDisabled) return;
        document.getElementById('back').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('back').style.fill = '#ed1c24';
        }, [200]);
        isProgrammingStarted = true;
        document.dispatchEvent(disableAllCheckBoxesEvent);
        window.ReactNativeWebView.postMessage('b');
      }
      function left() {
        if(lDisabled) return;
        document.getElementById('left').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('left').style.fill = '#ed1c24';
        }, [200]);
        isProgrammingStarted = true;
        document.dispatchEvent(disableAllCheckBoxesEvent);
        window.ReactNativeWebView.postMessage('l');
      }
      function right() {
        if(rDisabled) return;
        document.getElementById('right').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('right').style.fill = '#ed1c24';
        }, [200]);
        isProgrammingStarted = true;
        document.dispatchEvent(disableAllCheckBoxesEvent);
        window.ReactNativeWebView.postMessage('r');
      }

      function go() {
        document.getElementById('go').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('go').style.fill = '#25bf33';
        }, [200]);
        window.ReactNativeWebView.postMessage('g');
      }

      function pause() {
        document.getElementById('pause').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('pause').style.fill = '#29abe2';
        }, [200]);
        isProgrammingStarted = true;
        document.dispatchEvent(disableAllCheckBoxesEvent);
        window.ReactNativeWebView.postMessage('p');
      }

      function empty() {
        document.getElementById('empty').style.fill = '#ffffff';
        setTimeout(() => {
          document.getElementById('empty').style.fill = '#29abe2';
        }, [200]);
        document.getElementById("forward_checkbox").disabled = false;
        document.getElementById("back_checkbox").disabled = false;
        document.getElementById("left_checkbox").disabled = false;
        document.getElementById("right_checkbox").disabled = false;
        isProgrammingStarted = false;
        window.ReactNativeWebView.postMessage('c');
      }


    </script>
  </body>
</html>

`;







export const BEEBOT_HTML_REMOTE = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>


  <body>
      <svg
      style="
      position: fixed;
      top : 50%;
      left : 50%;
      width : 100%;
      height: 100%;
      transform: translate(-50%, -50%);"
      id="svg"
      viewBox="0 0 303.08 396.07">
      <defs>
        <style>
          .cls-1 {
            fill: #fab718;
          }
          .cls-2 {
            letter-spacing: 0.03em;
          }
          .cls-3 {
            fill: #b51f2b;
          }
          .cls-4,
          .cls-5,
          .cls-6 {
            fill: #fff;
          }
          .cls-5 {
            font-family: ArialRoundedMTBold, 'Arial Rounded MT Bold';
            font-size: 16.11px;
            stroke-width: 0.5px;
          }
          .cls-5,
          .cls-7 {
            stroke-miterlimit: 10;
          }
          .cls-5,
          .cls-8 {
            stroke: #fff;
          }
          .cls-7 {
            fill: #f9b11e;
            stroke: #000;
          }
          .cls-9 {
            letter-spacing: -0.03em;
          }
          .cls-10 {
            letter-spacing: 0.02em;
          }
          .cls-11 {
            fill: #2e3192;
          }
          .cls-12 {
            fill: #25bf33;
          }
          .cls-13 {
            opacity: 0.68;
          }
          .cls-13,
          .cls-8 {
            fill: none;
          }
          .cls-14 {
            fill: #0071bc;
          }
          .cls-15 {
            fill: #ffce00;
          }
          .cls-16 {
            fill: #ed1c24;
          }
          .cls-17 {
            letter-spacing: 0.02em;
          }
          .cls-8 {
            stroke-dasharray: 0 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .cls-18 {
            fill: #12771c;
          }
          .cls-19 {
            fill: #29abe2;
          }
          .cls-20 {
            fill: #fff9c3;
          }
          .cls-6 {
            font-family: ProximaSoftCond-Bold, 'Proxima Soft Condensed';
            font-size: 11px;
            font-weight: 700;
          }
          .cls-21 {
            letter-spacing: 0.02em;
          }
        </style>
      </defs>
      <g id="_Слой_1-2">
        <path
          class="cls-7"
          d="m300.37,177.55c-3.69-21.23-11.6-40.73-23.36-58.32-.06-.02-.12-.05-.18-.07-5.71-158.17-245.07-158.22-250.95-.17-46.62,67.19-23.47,146.95,24.68,206.81,71.66,92.99,135.02,90.2,204.74-2.1,30.85-41.68,54.83-93.95,45.07-146.15Zm-85.42-76.79s.08.01.13.02c-.04,0-.08-.01-.13-.02Z" />
        <path
          class="cls-15"
          d="m279.39,148.3c-2.19-12.1-11.02-26.05-16.26-33.5-2.5-3.55-4.39-7.6-4.39-11.83,0-131.42-214.77-132.72-214.77.37,0,3.91-1.67,7.69-3.87,11.03-35.33,53.7-15.41,108.22,24.69,156.01,61.56,76.57,115.99,74.27,175.88-1.73,26.5-34.32,47.1-77.36,38.72-120.35Zm-73.37-61.28s.07.01.11.02c-.04,0-.07-.01-.11-.02Z" />
        <path
          d="m151.35,396.07c32.06,0,72.82-30.88,103.95-72.36-32.78,7.41-69.07,11.53-107.27,11.53-34.43,0-67.32-3.35-97.48-9.44,31.54,40.42,71.56,70.27,100.79,70.27Z" />
        <path
          d="m148.04,230.42c-53.94,0-104.09-1.79-145.88-4.85,2.6,14.63,7.57,29.65,14.27,44.43,38.74,6.7,83.68,10.54,131.61,10.54,51.22,0,99.03-4.39,139.5-11.97,6.23-14.49,10.8-29.19,13.18-43.51-43.1,3.38-95.79,5.36-152.69,5.36Z" />
        <path
          d="m300.37,177.55c-2.69-15.56-7.73-30.31-14.78-43.85-40.06-7.36-87.15-11.6-137.55-11.6-47.37,0-91.81,3.75-130.24,10.31-7.33,13.75-12.61,28.77-15.4,44.64,41.74-3.05,91.8-4.83,145.64-4.83,56.74,0,109.3,1.98,152.34,5.34Z" />
        <rect
          class="cls-4"
          x="92.02"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83" />
        <rect
          class="cls-4"
          x="92.02"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83"
          transform="translate(-161.06 350.77) rotate(-90)" />
        <rect
          class="cls-4"
          x="198.47"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83" />
        <rect
          class="cls-4"
          x="207.18"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83" />
        <text class="cls-5" transform="translate(137.26 207.56)">
          <tspan x="0" y="0">GO</tspan>
        </text>
        <ellipse
          class="cls-15"
          cx="106.11"
          cy="66.75"
          rx="29.85"
          ry="26.99"
          transform="translate(3.3 138.49) rotate(-67.08)" />
        <path
          class="cls-1"
          d="m81.25,56.24c.76-1.8,1.66-3.48,2.68-5.06-4.99,15.48.52,31.51,13.18,36.86,12.66,5.35,27.99-1.86,35.63-16.23-.42,1.83-1,3.65-1.76,5.44-6.42,15.19-22.76,22.79-36.49,16.99-13.73-5.8-19.66-22.82-13.24-38.01Z" />
        <ellipse
          class="cls-4"
          cx="109.51"
          cy="58.69"
          rx="19.58"
          ry="17.7"
          transform="translate(12.81 136.71) rotate(-67.08)" />
        <circle cx="112.6" cy="52.03" r="11.37" />
        <circle
          class="cls-4"
          cx="115.83"
          cy="48.83"
          r="4.01"
          transform="translate(25.75 136.5) rotate(-67.08)" />
        <ellipse
          class="cls-15"
          cx="196.97"
          cy="66.75"
          rx="26.99"
          ry="29.85"
          transform="translate(-10.45 81.97) rotate(-22.92)" />
        <path
          class="cls-1"
          d="m221.83,56.24c-.76-1.8-1.66-3.48-2.68-5.06,4.99,15.48-.52,31.51-13.18,36.86-12.66,5.35-27.99-1.86-35.62-16.23.42,1.83,1,3.65,1.76,5.44,6.42,15.19,22.76,22.79,36.49,16.99s19.66-22.82,13.24-38.01Z" />
        <ellipse
          class="cls-4"
          cx="193.56"
          cy="58.69"
          rx="17.7"
          ry="19.58"
          transform="translate(-7.58 80.01) rotate(-22.92)" />
        <circle cx="190.48" cy="52.03" r="11.37" />
        <circle
          class="cls-4"
          cx="194.66"
          cy="48.83"
          r="4.01"
          transform="translate(-3.65 79.65) rotate(-22.92)" />
        <path
          class="cls-20"
          d="m198.02,83.91c-.51-1.22,3.38-1.3,7.34-2.98s6.47-4.3,6.99-3.08-1.82,4.87-5.78,6.54-8.03.73-8.55-.49Z" />
        <path
          class="cls-20"
          d="m105.37,85.32c-.51-1.22,3.38-1.3,7.34-2.98,3.96-1.67,6.47-4.3,6.99-3.08s-1.82,4.87-5.78,6.54-8.03.73-8.55-.49Z" />
        <path
          d="m174.71,20.68c-4.27-7.76-15.16-8.3-23.18-8.5-8.24-.2-19.25,1.95-23.18,8.54,0,0-.51-.1-.51-.1,1.17-4.86,5.04-8.66,9.52-10.6,8.97-4.31,29.84-3.38,35.93,5.47,1.06,1.54,1.83,3.26,1.93,5.18h-.52Z" />
        <path
          d="m129.81,27.57c-.41-2.53-1.42-5.11-3.24-6.89-1.39-1.28-3.05-1.9-4.71-2.73-.59-.27-1.22-.46-1.87-.82v-.2c4.68-1.64,8.57,2.26,9.64,6.54.33,1.36.49,2.74.38,4.11h-.2Z" />
        <path
          d="m173.06,27.57c-.58-5.49,3.73-12.8,10.02-10.65,0,0,0,.2,0,.2-.65.37-1.28.56-1.87.82-1.66.82-3.33,1.45-4.71,2.73-1.82,1.78-2.84,4.36-3.24,6.89,0,0-.2,0-.2,0h0Z" />
        <rect
          class="cls-18"
          x="133.57"
          y="187.89"
          width="33.09"
          height="33.09"
          rx="4.02"
          ry="4.02"
          transform="translate(354.55 54.32) rotate(90)" />
        <circle class="cls-11" cx="205.66" cy="259.27" r="16.78" />
        <circle class="cls-11" cx="94.58" cy="259.27" r="16.78" />
        <circle class="cls-14" cx="205.66" cy="259.27" r="16.78" />
        <circle class="cls-14" cx="94.58" cy="259.27" r="16.78" />
        <path
          class="cls-3"
          d="m172.44,147.25l-20.33-25.99c-1.01-1.29-2.97-1.29-3.98,0l-20.33,25.99c-.63.8-.68,1.78-.32,2.58.38.86,1.22,1.51,2.31,1.51h7.92v15.44c0,2.22,1.8,4.02,4.02,4.02h16.78c2.22,0,4.02-1.8,4.02-4.02v-15.44h7.92c1.47,0,2.49-1.18,2.53-2.46.02-.55-.15-1.12-.54-1.62Z" />
        <path
          class="cls-3"
          d="m127.8,252.79l20.33,25.99c1.01,1.29,2.97,1.29,3.98,0l20.33-25.99c1.3-1.66.12-4.09-1.99-4.09h-7.92v-15.44c0-2.22-1.8-4.02-4.02-4.02h-16.78c-2.22,0-4.02,1.8-4.02,4.02v15.44h-7.92c-2.11,0-3.29,2.43-1.99,4.09Z" />
        <path
          class="cls-3"
          d="m202.89,222.34l25.99-20.33c1.29-1.01,1.29-2.97,0-3.98l-25.99-20.33c-1.66-1.3-4.09-.12-4.09,1.99v7.92h-15.44c-2.22,0-4.02,1.8-4.02,4.02v16.78c0,2.22,1.8,4.02,4.02,4.02h15.44v7.92c0,2.11,2.43,3.29,4.09,1.99Z" />
        <path
          class="cls-3"
          d="m97.35,177.7l-25.99,20.33c-.65.51-.97,1.25-.97,1.99s.32,1.49.97,1.99l25.99,20.33c1.66,1.3,4.09.12,4.09-1.99v-7.92h15.44c2.22,0,4.02-1.8,4.02-4.02v-16.78c0-2.22-1.8-4.02-4.02-4.02h-15.44v-7.92c0-2.11-2.43-3.29-4.09-1.99Z" />
        <polygon
          class="cls-3"
          points="229.85 199.92 229.85 197.09 224.52 197.09 224.52 199.72 229.85 199.92" />
        <polygon
          class="cls-3"
          points="229.85 199.92 229.85 197.09 224.52 197.09 224.52 199.72 229.85 199.92" />
        <rect class="cls-3" x="70.39" y="197.22" width="2.87" height="2.93" />
        <polyline
          class="cls-3"
          points="172.97 251.12 172.94 248.2 127.29 248.2 127.25 251.12 172.75 251.12" />
        <polyline
          class="cls-3"
          points="127.26 146.07 127.26 148.81 129.76 149.25 129.89 146.42 127.26 145.99" />
        <polygon
          class="cls-3"
          points="172.98 146.14 172.98 148.87 170.81 148.98 170.47 146.24 172.98 146.14" />
        <path
          id="forward"
          onclick="forward()"
          class="cls-16"
          d="m172.44,144.61l-20.33-25.99c-1.01-1.29-2.97-1.29-3.98,0l-20.33,25.99c-1.3,1.66-.12,4.09,1.99,4.09h7.92v15.44c0,2.22,1.8,4.02,4.02,4.02h16.78c2.22,0,4.02-1.8,4.02-4.02v-15.44h7.92c2.11,0,3.29-2.43,1.99-4.09Z" />
        <path
          id="back"
          onclick="back()"
          class="cls-16"
          d="m127.8,250.14l20.33,25.99c1.01,1.29,2.97,1.29,3.98,0l20.33-25.99c1.3-1.66.12-4.09-1.99-4.09h-7.92v-15.44c0-2.22-1.8-4.02-4.02-4.02h-16.78c-2.22,0-4.02,1.8-4.02,4.02v15.44h-7.92c-2.11,0-3.29,2.43-1.99,4.09Z" />
        <path
          id="right"
          class="cls-16"
          onclick="right()"
          d="m202.89,219.7l25.99-20.33c1.29-1.01,1.29-2.97,0-3.98l-25.99-20.33c-1.66-1.3-4.09-.12-4.09,1.99v7.92h-15.44c-2.22,0-4.02,1.8-4.02,4.02v16.78c0,2.22,1.8,4.02,4.02,4.02h15.44v7.92c0,2.11,2.43,3.29,4.09,1.99Z" />
        <path
          id="left"
          onclick="left()"
          class="cls-16"
          d="m97.35,175.05l-25.99,20.33c-1.29,1.01-1.29,2.97,0,3.98l25.99,20.33c1.66,1.3,4.09.12,4.09-1.99v-7.92h15.44c2.22,0,4.02-1.8,4.02-4.02v-16.78c0-2.22-1.8-4.02-4.02-4.02h-15.44v-7.92c0-2.11-2.43-3.29-4.09-1.99Z" />
        <rect
          class="cls-12"
          x="133.57"
          y="184.78"
          width="33.09"
          height="33.09"
          rx="4.02"
          ry="4.02"
          transform="translate(351.44 51.2) rotate(90)" />
        <circle class="cls-14" cx="205.66" cy="255.91" r="16.78" />
        <circle class="cls-14" cx="94.58" cy="255.91" r="16.78" />
        <circle class="cls-19" cx="205.66" cy="255.91" r="16.78" />
        <circle class="cls-19" cx="94.58" cy="255.91" r="16.78" />
        <g class="cls-13">
          <path
            class="cls-14"
            d="m81.78,180.86c2.51-2.23,4.53-4.72,6.26-7.45,6.76-10.67,15.23-22.2,20.64-28.28l19.25-21.65s-6.35-8.75-7.95-11.05c-19.69-4.94-50.72,3.56-72.69,20.6-13.83,10.73-11.78,24.88-2.14,38.12,9.51,13.06,24.6,20.41,36.62,9.71Z" />
          <path
            class="cls-14"
            d="m221.3,182.32c-2.51-2.23-4.53-4.72-6.26-7.45-6.76-10.67-15.23-22.2-20.64-28.28l-19.25-21.65s6.35-8.75,7.95-11.05c19.69-4.94,50.72,3.56,72.69,20.6,13.83,10.73,11.78,24.88,2.14,38.12-9.51,13.06-24.6,20.41-36.62,9.71Z" />
        </g>
        <rect
          class="cls-4"
          x="92.02"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83"
          transform="translate(-153.17 142.03) rotate(-45)" />
        <rect
          class="cls-4"
          x="92.02"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83"
          transform="translate(-19.03 503.94) rotate(-135)" />
        <rect
          class="cls-4"
          x="198.47"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83" />
        <rect
          class="cls-4"
          x="207.18"
          y="246.8"
          width="5.66"
          height="18.22"
          rx="2.83"
          ry="2.83" />
        <text class="cls-6" transform="translate(135.71 213.97)">
          <tspan class="cls-2" x="0" y="0">С</tspan>
          <tspan class="cls-9" x="6.3" y="0">Т</tspan>
          <tspan class="cls-21" x="11.15" y="0">А</tspan>
          <tspan class="cls-10" x="17.4" y="0">Р</tspan>
          <tspan class="cls-17" x="23.51" y="0">Т</tspan>
        </text>
        <path
          class="cls-8"
          d="m155.64,189.14h2.78c1.78,0,3.22,1.44,3.22,3.22h0c0,1.78-1.44,3.22-3.22,3.22h-16.6c-1.78,0-3.22,1.44-3.22,3.22h0c0,1.78,1.44,3.22,3.22,3.22h4.11" />
        <circle class="cls-4" cx="146.94" cy="201.79" r="1.27" />
        <circle class="cls-4" cx="152.85" cy="189.14" r="1.27" />
        <path
          class="cls-20"
          d="m251.07,105.13c-1.05.17-3.02-4.6-4.01-10.68-1-6.09-.66-11.19.4-11.36s4.15,4.33,5.14,10.42-.47,11.45-1.53,11.62Z" />
        <path
          class="cls-20"
          d="m267.18,205.94c-2.76,8.92-7.01,15.52-9.5,14.76s-.42-7.97,2.34-16.88,5.19-16.18,7.67-15.41,2.25,8.62-.51,17.54Z" />
      </g>
    </svg>



    <script>
      function forward() {
        document.getElementById("forward").style.fill = "#ffffff";
        setTimeout(()=>{
          document.getElementById("forward").style.fill = "#ed1c24";
        },[200])
        window.ReactNativeWebView.postMessage('f');
      }
      function back() {
        document.getElementById("back").style.fill = "#ffffff";
        setTimeout(()=>{
          document.getElementById("back").style.fill = "#ed1c24";
        },[200])
        window.ReactNativeWebView.postMessage('b');
      }
      function left() {
        document.getElementById("left").style.fill = "#ffffff";
        setTimeout(()=>{
          document.getElementById("left").style.fill = "#ed1c24";
        },[200])
        window.ReactNativeWebView.postMessage('l');
      }
      function right() {
        document.getElementById("right").style.fill = "#ffffff";
        setTimeout(()=>{
          document.getElementById("right").style.fill = "#ed1c24";
        },[200])
        window.ReactNativeWebView.postMessage('r');
      }
    </script>


  </body>
</html>




`;
