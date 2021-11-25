export const headLanPieLayout =
  window.screen.width < 400
    ? {
        height: 260,
        width: 300,
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
        height: 380,
        width: 400,
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
  window.screen.width < 400
    ? {
        height: 260,
        width: 300,
        font: { size: 10, color: '#18853c' },
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      }
    : {
        height: 380,
        width: 400,
        font: { size: 14, color: '#18853c' },
        modebar: { bgcolor: 'transparent', color: 'black' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      };

export const languageTopFilesBySizePieLayout =
  window.screen.width < 500
    ? {
        height: 300,
        width: 370,
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
        height: 380,
        width: 400,
        font: { size: 14, color: '#18853c' },
        title: 'Largest files',
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        legend: {
          font: { size: 8 },
          itemwidth: 40,
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
  window.screen.width < 500
    ? {
        height: 300,
        width: 320,
        font: { size: 10, color: '#18853c' },
        title: "Line's types",
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      }
    : {
        height: 380,
        width: 400,
        font: { size: window.screen.width > 800 ? 14 : 11, color: '#18853c' },
        title: "Line's types",
        modebar: { bgcolor: 'transparent', color: '#18853c' },
        colorway: ['#256F93	', '#E97F31', '#E3303D'],
      };

export const createLanguageFilesBarLayout = (title, showticklabels) => {
  let width;
  let height;
  let yaxis = {};
  if (window.screen.width < 768) {
    width = 568;
    height = 500;
  }
  if (window.screen.width < 500) {
    width = 400;
    height = 500;
    yaxis = {
      tickfont: { size: 5 },
    };
  }

  if (window.screen.width > 768) {
    width = 568;
    height = 700;
  }
  if (window.screen.width > 1250) {
    width = 1000;
    height = width / 2 + 50;
  }
  return {
    title,
    font: {
      size: window.screen.width < 500 ? 10 : 12,
      color: '#18853c',
    },
    showlegend: true,
    xaxis: {
      showticklabels,
      tickfont: {
        size: window.screen.width < 500 ? 5 : window.screen.width / 115,
      },
      tickangle: -15,
    },
    yaxis,
    bargap: 0.05,
    barmode: 'stack',
    width,
    height,
    modebar: { bgcolor: 'transparent', color: '#18853c', remove: [] },
    colorway: ['#256F93	', '#E97F31', '#E3303D'],
  };
};

export default { displaylogo: false };
