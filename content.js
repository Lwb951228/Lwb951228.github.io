const siteContent = {
  zh: {
    nav: ["首页", "研究方向", "论文", "教育经历", "联系"],
    langLabel: "中文 / EN",
    name: "鲁文博",
    altName: "Wenbo Lu",
    title: "交通运输工程研究者",
    affiliation: "重庆邮电大学",
    location: "中国 重庆",
    summary:
      "研究方向包括无人系统规划控制、人工智能在物流与交通领域的应用，以及城市货运电气化。博士阶段围绕城市绿色货运配送、新能源车辆轨迹数据挖掘、轨道交通客流预测与无人机-车辆协同优化开展研究。",
    headings: {
      about: "个人简介",
      research: "研究方向",
      publications: "代表性论文",
      dissertation: "博士论文",
      education: "教育经历",
      contact: "联系"
    },
    contacts: [
      { label: "Email", value: "luwb@cqupt.edu.cn", href: "mailto:luwb@cqupt.edu.cn" },
      { label: "ORCID", value: "0000-0003-3697-1493", href: "https://orcid.org/0000-0003-3697-1493" },
      { label: "Google Scholar", value: "Wenbo Lu", href: "https://scholar.google.com/scholar?q=Wenbo+Lu+transportation" }
    ],
    research: [
      {
        title: "城市绿色货运配送电气化",
        text:
          "基于新能源货运车辆轨迹数据，研究停止行程提取、SOC预测、临时停靠点布局、地理围栏生成与充电风险评估。"
      },
      {
        title: "人工智能赋能交通运输",
        text:
          "利用深度学习、图神经网络、多时间粒度建模和多源数据融合方法，预测城市轨道交通客流与道路转向交通流。"
      },
      {
        title: "无人机-车辆协同系统",
        text:
          "面向电力巡检和低空物流场景，研究考虑风场影响、终端接载模式和群组化作业的 UAV-Vehicle 系统优化。"
      }
    ],
    education: [
      { period: "2021.09 - 2025.12", place: "东南大学交通学院", degree: "交通运输 博士" },
      { period: "2023.10 - 2024.10", place: "Monash University", degree: "交通运输工程 CSC联合培养" },
      { period: "2018.09 - 2021.06", place: "长安大学运输工程学院", degree: "交通运输工程 硕士" },
      { period: "2014.09 - 2018.06", place: "西安建筑科技大学土木工程学院", degree: "交通工程 学士" }
    ],
    publicationsIntro:
      "代表性论文按年份排列。后续只需在 content.js 的 publications 数组中追加条目并填写 year 字段，网页会自动分组显示。",
    publications: [
      {
        year: "2026",
        tag: "In press",
        text:
          "Xu J, Luo Y, Lu W, et al. Optimization of Group-Based UAV-Vehicle Systems for Power Inspection with Wind Effects and Terminal Pickup Mode. 2026, In press."
      },
      {
        year: "2025",
        tag: "Transportation Research Part E",
        text:
          "Wenbo Lu. Exploring spatiotemporal heterogeneity of urban green freight delivery parking based on new energy vehicle GPS data. Transportation Research Part E, 2025, 103870."
      },
      {
        year: "2025",
        tag: "Transportmetrica B",
        text:
          "Xu J, Lu W*, Li Y, et al. A Heterogeneous Two-Layer Graph Convolution Model for Turning Traffic Prediction with Missing Data. Transportmetrica B: Transport Dynamics, 2025, 13(1): 2497941."
      },
      {
        year: "2025",
        tag: "Journal of Intelligent Transportation Systems",
        text:
          "Lu W, Zhang Y, Vu H. L., et al. A novel integrative prediction framework for metro passenger flow. Journal of Intelligent Transportation Systems, 2025, 1-26."
      },
      {
        year: "2024",
        tag: "eTransportation",
        text:
          "Lu W, Yuan Z, Wang T, et al. Will it get there? A deep learning model for predicting next-trip state of charge in Urban Green Freight Delivery with electric vehicles. eTransportation, 2024: 100372."
      },
      {
        year: "2024",
        tag: "Physica A",
        text:
          "Xu J, Li Y, Lu W, Wu S, Li Y. A heterogeneous traffic spatio-temporal graph convolution model for traffic prediction. Physica A: Statistical Mechanics and its Applications, 2024, 641: 129746."
      },
      {
        year: "2024",
        tag: "中文EI",
        text:
          "Wenbo Lu, Yong Zhang, Peikun Li, et al. 自适应多视图融合图神经网络地铁客流预测模型. 交通运输系统工程与信息, 2024, 24(3): 194."
      },
      {
        year: "2023",
        tag: "Engineering Applications of Artificial Intelligence",
        text:
          "Wenbo Lu, Yong Zhang, Peikun Li, Ting Wang. Mul-DesLSTM: An integrative multi-time granularity deep learning prediction method for urban rail transit short-term passenger flow. Engineering Applications of Artificial Intelligence, 2023, 125: 106741."
      },
      {
        year: "2023",
        tag: "IEEE Intelligent Transportation Systems Magazine",
        text:
          "Lu W, Xu J, Zhang Y, et al. MOHP-EC: A Multiobjective Hierarchical Prediction Framework for Urban Rail Transit Passenger Flow. IEEE Intelligent Transportation Systems Magazine, 2023, 15(4): 86-105."
      },
      {
        year: "2023",
        tag: "Neural Computing and Applications",
        text:
          "Lu W, Zhang Y, Li P, et al. Estimating urban rail transit passenger inflow caused by special events occurrences fusing multi-source data. Neural Computing and Applications, 2023, 35(22): 16649-16670."
      },
      {
        year: "2022",
        tag: "Journal of Urban Planning and Development",
        text:
          "Lu W, Zhang Y, Ma C, et al. Measuring the relationship between influence factor and urban rail transit passenger flow: Correlation or causality? Journal of Urban Planning and Development, 2022, 148(3): 05022025."
      }
    ],
    dissertation: {
      title: "博士论文",
      name: "数据驱动的城市绿色货运配送电动汽车临时停靠点布局多目标优化",
      points: [
        "提出城市绿色货运配送电动汽车停止行程提取方法。",
        "构建基于停止行程特征的车辆类型信息补全方法。",
        "形成临时停靠点地理围栏自动化生成框架。",
        "建立候选临时停靠点充电风险评估框架。",
        "构建路内、路外临时停靠点协同布局多目标优化模型。"
      ]
    },
    updateNote:
      "更新提示：修改 content.js 即可维护网页内容；上传到 GitHub Pages 后，外部访问者可直接查看。"
  },
  en: {
    nav: ["Home", "Research", "Publications", "Education", "Contact"],
    langLabel: "EN / 中文",
    name: "Wenbo Lu",
    altName: "鲁文博",
    title: "Researcher in Transportation Engineering",
    affiliation: "Chongqing University of Posts and Telecommunications",
    location: "Chongqing, China",
    summary:
      "My research interests include unmanned-system planning and control, artificial intelligence for logistics and transportation, and the electrification of urban freight delivery. My doctoral research spans urban green freight delivery, electric-vehicle trajectory mining, metro passenger-flow prediction, and UAV-vehicle collaborative optimization.",
    headings: {
      about: "About Me",
      research: "Research Interests",
      publications: "Selected Publications",
      dissertation: "Doctoral Dissertation",
      education: "Education",
      contact: "Contact"
    },
    contacts: [
      { label: "Email", value: "luwb@cqupt.edu.cn", href: "mailto:luwb@cqupt.edu.cn" },
      { label: "ORCID", value: "0000-0003-3697-1493", href: "https://orcid.org/0000-0003-3697-1493" },
      { label: "Google Scholar", value: "Wenbo Lu", href: "https://scholar.google.com/scholar?q=Wenbo+Lu+transportation" }
    ],
    research: [
      {
        title: "Electric Urban Green Freight Delivery",
        text:
          "Data-driven methods for electric freight-vehicle trajectory mining, stop-trip extraction, next-trip SOC prediction, temporary loading-zone layout, geofence generation, and charging-risk assessment."
      },
      {
        title: "AI for Transportation",
        text:
          "Deep learning, graph neural networks, multi-granularity modeling, and multi-source data fusion for metro passenger-flow and turning-traffic prediction."
      },
      {
        title: "UAV-Vehicle Collaborative Systems",
        text:
          "Optimization of UAV-vehicle systems under wind effects, terminal pickup modes, and group-based operations for power inspection and low-altitude logistics."
      }
    ],
    education: [
      { period: "2021.09 - 2025.12", place: "Southeast University", degree: "Ph.D., Transportation" },
      { period: "2023.10 - 2024.10", place: "Monash University", degree: "Visiting Ph.D. Student, CSC Program" },
      { period: "2018.09 - 2021.06", place: "Chang'an University", degree: "M.Sc., Transportation Engineering" },
      { period: "2014.09 - 2018.06", place: "Xi'an University of Architecture and Technology", degree: "B.Eng., Traffic Engineering" }
    ],
    publicationsIntro:
      "Selected publications grouped by year. To add future work, append a publication object with a year field in content.js and the page will group it automatically.",
    publications: [
      {
        year: "2026",
        tag: "In press",
        text:
          "Xu J, Luo Y, Lu W, et al. Optimization of Group-Based UAV-Vehicle Systems for Power Inspection with Wind Effects and Terminal Pickup Mode. 2026, In press."
      },
      {
        year: "2025",
        tag: "Transportation Research Part E",
        text:
          "Wenbo Lu. Exploring spatiotemporal heterogeneity of urban green freight delivery parking based on new energy vehicle GPS data. Transportation Research Part E, 2025, 103870."
      },
      {
        year: "2025",
        tag: "Transportmetrica B",
        text:
          "Xu J, Lu W*, Li Y, et al. A Heterogeneous Two-Layer Graph Convolution Model for Turning Traffic Prediction with Missing Data. Transportmetrica B: Transport Dynamics, 2025, 13(1): 2497941."
      },
      {
        year: "2025",
        tag: "Journal of Intelligent Transportation Systems",
        text:
          "Lu W, Zhang Y, Vu H. L., et al. A novel integrative prediction framework for metro passenger flow. Journal of Intelligent Transportation Systems, 2025, 1-26."
      },
      {
        year: "2024",
        tag: "eTransportation",
        text:
          "Lu W, Yuan Z, Wang T, et al. Will it get there? A deep learning model for predicting next-trip state of charge in Urban Green Freight Delivery with electric vehicles. eTransportation, 2024: 100372."
      },
      {
        year: "2024",
        tag: "Physica A",
        text:
          "Xu J, Li Y, Lu W, Wu S, Li Y. A heterogeneous traffic spatio-temporal graph convolution model for traffic prediction. Physica A: Statistical Mechanics and its Applications, 2024, 641: 129746."
      },
      {
        year: "2024",
        tag: "Chinese EI",
        text:
          "Wenbo Lu, Yong Zhang, Peikun Li, et al. Adaptive multi-view fusion graph neural network model for metro passenger-flow prediction. Journal of Transportation Systems Engineering and Information Technology, 2024, 24(3): 194."
      },
      {
        year: "2023",
        tag: "Engineering Applications of Artificial Intelligence",
        text:
          "Wenbo Lu, Yong Zhang, Peikun Li, Ting Wang. Mul-DesLSTM: An integrative multi-time granularity deep learning prediction method for urban rail transit short-term passenger flow. Engineering Applications of Artificial Intelligence, 2023, 125: 106741."
      },
      {
        year: "2023",
        tag: "IEEE Intelligent Transportation Systems Magazine",
        text:
          "Lu W, Xu J, Zhang Y, et al. MOHP-EC: A Multiobjective Hierarchical Prediction Framework for Urban Rail Transit Passenger Flow. IEEE Intelligent Transportation Systems Magazine, 2023, 15(4): 86-105."
      },
      {
        year: "2023",
        tag: "Neural Computing and Applications",
        text:
          "Lu W, Zhang Y, Li P, et al. Estimating urban rail transit passenger inflow caused by special events occurrences fusing multi-source data. Neural Computing and Applications, 2023, 35(22): 16649-16670."
      },
      {
        year: "2022",
        tag: "Journal of Urban Planning and Development",
        text:
          "Lu W, Zhang Y, Ma C, et al. Measuring the relationship between influence factor and urban rail transit passenger flow: Correlation or causality? Journal of Urban Planning and Development, 2022, 148(3): 05022025."
      }
    ],
    dissertation: {
      title: "Doctoral Dissertation",
      name: "Data-driven multi-objective optimization for temporary loading-zone layout of electric vehicles in urban green freight delivery",
      points: [
        "Extracting effective loading/unloading stop trips from electric freight-vehicle trajectory data.",
        "Completing vehicle-type information using stop-trip features and machine learning.",
        "Automatically generating geofences for temporary loading zones.",
        "Assessing charging risk and range anxiety at candidate temporary loading zones.",
        "Optimizing coordinated on-street and off-street temporary loading-zone layouts."
      ]
    },
    updateNote:
      "Maintenance note: edit content.js to update the site. After deployment on GitHub Pages, external visitors can view it online."
  }
};
