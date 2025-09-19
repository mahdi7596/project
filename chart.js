const chart = echarts.init(document.getElementById("radar"));

const option = {
  radar: {
    indicator: [
      { name: "Strength", max: 100 },
      { name: "Speed", max: 100 },
      { name: "Endurance", max: 100 },
      { name: "Flexibility", max: 100 },
      { name: "Skill", max: 100 },
    ],
  },
  series: [
    {
      type: "radar",
      data: [
        {
          value: [80, 60, 70, 90, 85],
        },
        {
          value: [65, 75, 80, 70, 60],
        },
      ],
    },
  ],
};

chart.setOption(option);
