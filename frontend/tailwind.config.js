/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 1.5px 1px', 
      },
      borderWidth:{
        3:'2.2px'
      },
      colors: {
        inpSearch: "var(--red)",
        inpBorderL: "var(--inpBorderL)",
        navTextColor: "var(--navTextColor)",
        navMenuTextColor: "var(--navMenuTextColor)",
        sliderStoryTextColor: "var(--sliderStoryTextColor)",
        discountTextColor: "var(--discountTextColor)",
        TextColorPrice: "var(--textPrice)",
        textButton: "var(--textButton)",
        CoolerBtnFooter: "var(--CoolerBtnFooter)",
      },
      fontFamily: {
        iranyekan: ["IRANYekan", "sans-serif"],
      },
      spacing: {
        0.1: "0.1px",
        0.3: "1px",
        0.8: "3px",
        1.2:'5px',
        3.8:'14.9px',
        4.5:'18px',
        8.5:'35px',
        12.5:'52px',
        13:'50px',
        17: "4vw",
        17.5:'67px',
        18:"75px",
        21:'8 vw  ',
        22:'83px',
        22.5:'88px',
        23:'70.5px',
        24.5:'104px',
        25: "107px",
        26: "115px",
        34: "130px",
        42:'170px',
        65:'265px',
        71:'255px',
        73:'295px',
        75:'310px',
        85:"340px ",
        95:"370px ",
        99: "600px",
        99.1:'655px',
        99.4:'1235px',
        99.5:'1235px',
        99.55:'1240px',
        99.6:'86.5vw  ',
        99.7:'1345px',
        100:'97vw',
        // 99.5:'900px'
      },
      fontSize:{
        xsPlus:'15.5px',
        navTextSize:'14px',
        storyT:'13.3px',
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     // fontSize: {
//     //   sm: "15px",
//     //   xs:'12px',
//     //   base: "18px",
//     //   xl: "1.25rem",
//     //   "2xl": "1.563rem",
//     //   "3xl": "1.953rem",
//     //   "4xl": "2.441rem",
//     //   "5xl": "3.052rem",
//     // },
//     extend: {
//       space:{
//         17: "67px",
//         31: "122px",
//       }
//       // margin: {
//       //   5: '5px',
//       // },
//       // colors: {
//       //   shop: {
//       //     400: "#4338ca",
//       //   },
//       // },
//     },
//     // spacing: {
//     //   0.5: "2px",
//     //   1: "4px",
//     //   1.5: "6px",
//     //   2: "8px",
//     //   2.5: "10px",
//     //   3: "12px",
//     //   3.5: "14px",
//     //   4: "16px",
//     //   5: "20px",
//     //   6: "24px",
//     //   7: "28px",
//     //   8: "32px",
//     //   9: "36px",
//     //   10: "40px",
//     //   11: "44px",
//     //   12: "48px",
//     //   14: "56px",
//     //   16: "67px", //
//     //   20: "80px",
//     //   24: "96px",
//     //   28: "112px",
//     //   32: "122px", //
//     //   36: "144px",
//     //   40: "160px",
//     //   44: "176px",
//     //   48: "192px",
//     //   52: "208px",
//     //   56: "224px",
//     //   60: "240px",
//     //   64: "256px",
//     //   72: "288px",
//     //   80: "320px",
//     //   96: "384px",
//     // },
//   },
//   plugins: [],
// };
