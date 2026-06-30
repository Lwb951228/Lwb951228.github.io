const siteContent = {
  zh: {
    nav: ["首页", "研究方向", "论文", "教育经历"],
    langLabel: "中文 / EN",
    name: "鲁文博",
    title: "文峰副教授(讲师)",
    affiliation: "重庆邮电大学现代邮政学院",
    location: "中国 重庆",
    summaryHtml:
      '我是重庆邮电大学现代邮政学院文峰副教授(讲师)，东南大学交通运输博士。主要研究方向包括Unmanned System,Intelligent freight, Low-altitude transportation 等。',
    headings: {
      about: "个人简介",
      research: "研究方向",
      publications: "代表性论文",
      dissertation: "博士论文",
      education: "教育经历",
    },
    contacts: [
      { label: "Email", value: "luwb@cqupt.edu.cn" },
      { label: "ORCID", value: "0000-0003-3697-1493", href: "https://orcid.org/0000-0003-3697-1493" },
      { label: "Google Scholar", value: "Wenbo Lu", href: "https://scholar.google.com.hk/citations?hl=zh-CN&user=8gVNtwsAAAAJ&view_op=list_works&sortby=pubdate" }
    ],
    research: [
      {
        title: "Unmanned System",
        text:
          "面向电力巡检、低空物流与交通感知场景，研究无人机-车辆协同、路径规划、群组化作业与复杂环境下的系统优化。",
        image: "assets/research/unmanned-system.png",
        alt: "无人系统交通研究示意图"
      },
      {
        title: "Intelligent freight",
        text:
          "围绕城市绿色货运配送、新能源车辆轨迹数据、SOC预测、临时停靠点布局与智能调度，构建数据驱动的货运优化方法。",
        image: "assets/research/intelligent-freight.png",
        alt: "智能货运与城市配送研究示意图"
      },
      {
        title: "Low-altitude transportation",
        text:
          "关注低空经济背景下的城市空中交通、低空物流网络、地面交通协同以及低空运输系统规划与运行管理。",
        image: "assets/research/low-altitude-transportation.png",
        alt: "低空交通运输研究示意图"
      }
    ],
    education: [
      { period: "2021.09 - 2025.12", place: "东南大学交通学院", degree: "交通运输 博士" },
      { period: "2023.10 - 2024.10", place: "Monash University", degree: "交通运输工程 CSC联合培养" },
      { period: "2018.09 - 2021.06", place: "长安大学运输工程学院", degree: "交通运输工程 硕士" },
      { period: "2014.09 - 2018.06", place: "西安建筑科技大学土木工程学院", degree: "交通工程 学士" }
    ],
    publications: [
      {
        year: "2026",
        tag: "Electric Power Systems Research",
        text:
          "Xu J, Luo Y, <b>Lu W</b>, et al. Optimization of Group-Based UAV-Vehicle Systems for Power Inspection with Wind Effects and Terminal Pickup Mode. Electric Power Systems Research, 260, 113309."
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
  },
  en: {
    nav: ["Home", "Research", "Publications", "Education"],
    langLabel: "EN / 中文",
    name: "Wenbo Lu",
    title: "Wenfeng Associate Professor(Lecturer)",
    affiliation: "School of Modern Posts, Chongqing University of Posts and Telecommunications",
    location: "Chongqing, China",
    summaryHtml:
      "I am a Wenfeng Associate Professor(Lecturer) at the School of Modern Posts, Chongqing University of Posts and Telecommunications. I received my Ph.D. in Transportation from Southeast University. My research interests include Unmanned System, Intelligent freight, and Low-altitude transportation.",
    headings: {
      about: "About Me",
      research: "Research Interests",
      publications: "Selected Publications",
      dissertation: "Doctoral Dissertation",
      education: "Education",
    },
    contacts: [
      { label: "Email", value: "luwb@cqupt.edu.cn" },
      { label: "ORCID", value: "0000-0003-3697-1493", href: "https://orcid.org/0000-0003-3697-1493" },
      { label: "Google Scholar", value: "Wenbo Lu", href: "https://scholar.google.com.hk/citations?hl=zh-CN&user=8gVNtwsAAAAJ&view_op=list_works&sortby=pubdate" }
    ],
    research: [
      {
        title: "Unmanned System",
        text:
          "UAV-vehicle collaboration, path planning, group-based operations, and system optimization for power inspection, low-altitude logistics, and transportation sensing.",
        image: "assets/research/unmanned-system.png",
        alt: "Illustration of unmanned-system transportation research"
      },
      {
        title: "Intelligent freight",
        text:
          "Data-driven optimization for urban green freight delivery, electric freight-vehicle trajectory mining, SOC prediction, temporary loading-zone layout, and intelligent dispatching.",
        image: "assets/research/intelligent-freight.png",
        alt: "Illustration of intelligent urban freight research"
      },
      {
        title: "Low-altitude transportation",
        text:
          "Urban air mobility, low-altitude logistics networks, air-ground transportation coordination, and planning and operations of low-altitude transportation systems.",
        image: "assets/research/low-altitude-transportation.png",
        alt: "Illustration of low-altitude transportation research"
      }
    ],
    education: [
      { period: "2021.09 - 2025.12", place: "Southeast University", degree: "Ph.D., Transportation" },
      { period: "2023.10 - 2024.10", place: "Monash University", degree: "Visiting Ph.D. Student, CSC Program" },
      { period: "2018.09 - 2021.06", place: "Chang'an University", degree: "M.Sc., Transportation Engineering" },
      { period: "2014.09 - 2018.06", place: "Xi'an University of Architecture and Technology", degree: "B.Eng., Traffic Engineering" }
    ],
    publications: [
      {
        year: "2026",
        tag: "Electric Power Systems Research",
        text:
          "Xu J, Luo Y, Lu W, et al. Optimization of Group-Based UAV-Vehicle Systems for Power Inspection with Wind Effects and Terminal Pickup Mode. Electric Power Systems Research, 260, 113309."
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
  }
};
