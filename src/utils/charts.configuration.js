export const headLanPieLayout =
  window.screen.width < 700
    ? {
        height: 260,
        width: 280,
        font: { size: 10, color: '#18853c' },
        title: 'Languages',
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: [
          '#256F93',
          '#E97F31',
          '#E3303D',
          '#1F9184',
          '#E97F31',
          '#E3303D',
          '#F1636D',
          '#F4A164',
          '#52C8BC',
          '#8970C7',
          '#C9464F',
        ],
      }
    : {
        height: 400,
        width: 350,
        font: { size: 14, color: '#18853c' },
        title: 'Languages',
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: [
          '#256F93',
          '#E97F31',
          '#E3303D',
          '#1F9184',
          '#E97F31',
          '#E3303D',
          '#F1636D',
          '#F4A164',
          '#52C8BC',
          '#8970C7',
          '#C9464F',
        ],
      };

export const headTotalLinesPieLayout =
  window.screen.width < 700
    ? {
        height: 260,
        width: 280,
        font: { size: 10, color: '#18853c' },
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      }
    : {
        height: 400,
        width: 350,
        font: { size: 14, color: '#18853c' },
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      };

export const languageTopFilesBySizePieLayout =
  (window.screen.width < 800 && window.screen.width > 600) ||
  window.screen.width < 460
    ? {
        height: 260,
        width: 310,
        font: { size: 10, color: '#18853c' },
        title: 'Largest files',
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        legend: {
          font: { size: 9 },
        },
        colorway: [
          '#256F93',
          '#E97F31',
          '#1F9184',
          '#E3303D',
          '#F1636D',
          '#F4A164',
          '#52C8BC',
          '#8970C7',
          '#C9464F',
        ],
      }
    : {
        width: 486,
        height: 300,
        font: { size: 14, color: '#18853c' },
        title: 'Largest files',
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        legend: {
          font: { size: 13 },
        },
        colorway: [
          '#256F93',
          '#E97F31',
          '#1F9184',
          '#E3303D',
          '#F1636D',
          '#F4A164',
          '#52C8BC',
          '#8970C7',
          '#C9464F',
        ],
      };

export const languageLinesPieLayout =
  (window.screen.width < 800 && window.screen.width > 600) ||
  window.screen.width < 460
    ? {
        height: 260,
        width: 240,
        font: { size: 10, color: '#18853c' },
        title: "Line's types",
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      }
    : {
        width: 380,
        height: window.screen.width > 800 ? 360 : 280,
        font: { size: window.screen.width > 800 ? 14 : 11, color: '#18853c' },
        title: "Line's types",
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      };

export const createLanguageFilesBarLayout = (title, showticklabels) => {
  let width;
  if (window.screen.width < 768) {
    width = 480;
  }
  if (window.screen.width > 768) {
    width = 568;
  }
  if (window.screen.width > 1250) {
    width = 1000;
  }
  return {
    title,
    font: {
      size: 12,
      color: '#18853c',
    },
    showlegend: true,
    xaxis: {
      showticklabels,
      tickfont: { size: window.screen.width / 110 },
      tickangle: -15,
    },
    bargap: 0.05,
    barmode: 'stack',
    width,
    height: width / 2,
    modebar: { bgcolor: 'transparent', color: '#18853c', remove: [] },
    colorway: ['#256F93	', '#E97F31', '#E3303D'],
  };
};

export default { displaylogo: false };
