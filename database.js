const database = [
  {
    title: "Renal Image Acquisition",
    id: "1",
    category: "Renal/GU",
    type: "rapidreview",
    tags: ["renal", "kidney", "Hydronephrosis"],
    video: "Zym9AN1rDeM",
    orientation: {
      probe: "Curvilinear",
      preset: "Abdominal",
      patient_position: "Supine",
      probe_position: "Mid-axillary Line at the level of the Xiphoid process",
      areas_of_interest: "Renal Sinus",
    },
    associated_pages: [
      {
        title: "Hydronephrosis",
        id: "19",
      },
      {
        title: "Renal Calculus",
        id: "20",
      },
      {
        title: "Renal Cyst, Mass",
        id: "21",
      },
    ],
    body: [
      {
        header: "Image Acquisition",
        content: [
          "When scanning a patient with a suspected renal pathology, consider scanning the unaffected side first to obtain a baseline image.",
          "Assess both the longitudinal and transverse views by rotating the transducer 90 degrees.",
          "Tilt or fan the transducer superiorly and inferiorly to assess the superior and inferior poles of the kidney.",
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
    ],
  },
  {
    title: "Biliary Image Acquisition",
    id: "2",
    category: "Abdominal",
    type: "rapidreview",
    tags: ["Gallbladder", "Liver", "Bile ducts"],
    video: "vf_XBY7a80A",
    orientation: {
      probe: "Curvilinear",
      preset: "Abdominal",
      patient_position: "Supine\nLeft lateral Decubitus",
      probe_position:
        "Inferior border of the costal margin lateral to the midline on the Right side",
      areas_of_interest: "Gallbladder",
    },
    associated_pages: [
      {
        title: "Cholelithiasis",
        id: "16",
      },
      {
        title: "Common Bile Duct dilation",
        id: "17",
      },
      {
        title: "Acute Cholecystitis",
        id: "18",
      },
    ],
    body: [
      {
        header: "Image Acquisition",
        content: [
          "The most important findings when performing point-of-care biliary ultrasound are: Cholelithiasis, Sonographic Murphy's sign, Gallbladder wall thickening, Pericholecystic fluid, CBD dilation.",
          "Instructing the patient to hold in a deep breath, or having the patient “puff out” their abdomen helps descend the gallbladder into view.",
          "From the starting position, slide the probe laterally and inferiorly along the costal margin until the gallbladder comes into view.",
          "In the longitudinal plane, the thick-walled portal vein and gallbladder often have an “exclamation point” appearance",
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
      {
        header: "",
        content: [
          "The CBD is located just anterior to the portal vein. The portal triad (containing the portal vein, hepatic artery and CBD) is often called the “Mickey Mouse” sign. Using the zoom function or color doppler can help distinguish the different components of the triad.",
          "The diameter of the CBD is measured from inner wall to inner wall in either a transverse or longitudinal plane at the point where the hepatic artery courses between the portal vein and CBD, and is normally < 6 mm.",
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
    ],
  },
  {
    title: "Abdominal Aorta Image Acquisition",
    id: "3",
    category: "Aorta",
    type: "rapidreview",
    tags: ["Aorta", "AAA"],
    video: "aTQe17jUQNc",
    orientation: {
      probe: "Curvilinear",
      preset: "Abdominal",
      patient_position: "Supine",
      probe_position: "Inferior to the costal margin at the midline",
      areas_of_interest: "Abdominal Aorta",
    },
    associated_pages: [
      {
        title: "Abdominal Aortic Aneurysm",
        id: "13",
      },
      {
        title: "Aortic Dissection",
        id: "14",
      },
      {
        title: "Intra-aortic device placement",
        id: "15",
      },
    ],
    body: [
      {
        header: "Image Acquisition",
        content: [
          "To find the aorta, the spine is a useful landmark. The aorta lies just anterior to the spine, slightly to the left of the midline.",
          "Once the aorta is identified, slide the transducer inferiorly on the abdominal wall, allowing for contiguous imaging of the aorta.",
          "Measurement of the aortic diameter should be obtained in both longitudinal and transverse planes.",
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
      {
        header: "",
        content: [
          'If "images" cannot be obtained due to bowel gas, drains or scarring, then the aorta can also be imaged laterally from the left or right flank. Place the transducer on the mid-axillary line',
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
    ],
  },
  {
    title: "Parasternal Views",
    id: "4",
    alt: ["PLAX", "PSAX"],
    category: "Cardiac",
    type: "rapidreview",
    tags: [],
    video: "pBQeUxcU8Wk",
    orientation: {
      probe: "Phased Array",
      preset: "Cardiac",
      patient_position: "Supine\nLeft Lateral Decubitus",
      probe_position: "Left of the sternum, 3rd/4th Intercostal space",
      areas_of_interest: "LV, LA, RVOT, Aorta, Aortic Valve, IVS",
    },
  },
  {
    title: "Apical Four Chamber View",
    id: "5",
    alt: ["a4c"],
    category: "Cardiac",
    type: "rapidreview",
    tags: [],
    video: "vFRKYDKYGr8",
    orientation: {
      probe: "Phased Array",
      preset: "Cardiac",
      patient_position: "Ideally Left Lateral Decubitus",
      probe_position: "LV Apex",
      areas_of_interest: "IVS, 4 Chambers, Mitral valve, Tricuspid valve",
    },
  },
  {
    title: "Subcostal View",
    id: "6",
    alt: ["IVC", "Subxiphoid view"],
    category: "Cardiac",
    type: "rapidreview",
    tags: [],
    video: "_4jgrIQh59M",
    orientation: {
      probe: "Phased Array",
      preset: "Cardiac",
      patient_position: "Supine",
      probe_position: "Xiphoid process",
      areas_of_interest: "",
    },
  },
  {
    title: "BLUE Protocol Image Acquisition",
    id: "7",
    category: "Lung",
    type: "rapidreview",
    tags: [],
    video: "FS9FztSI460",
    orientation: {
      probe: "Phased Array",
      preset: "Lung or Abdominal",
      patient_position: "Supine",
      probe_position: "",
      areas_of_interest: "",
    },
  },
  {
    title: "Lumbar Puncture",
    id: "8",
    category: "Procedural",
    type: "rapidreview",
    tags: [],
    video: "",
    orientation: {
      probe: "",
      preset: "",
      patient_position: "",
      probe_position: "",
      areas_of_interest: "",
    },
  },
  {
    title: "FAST Exam Image Acquisition",
    id: "9",
    category: "Abdominal",
    type: "rapidreview",
    tags: [],
    video: "3gRz01WIrgc",
    orientation: {
      probe: "Curvilinear",
      preset: "Abdominal",
      patient_position: "Supine",
      probe_position: "Mid-axillary line at level of Xiphoid process",
      areas_of_interest:
        "Interface between kidney and liver/spleen, Bladder, Pouch of Douglas",
    },
  },
  {
    title: "Pelvic Exam Image Acquisition",
    id: "10",
    category: "Pelvic",
    type: "rapidreview",
    tags: [],
    video: "lj_ApJwf3w4",
    orientation: {
      probe: "Curvilinear",
      preset: "Abdominal",
      patient_position: "Supine",
      probe_position: "",
      areas_of_interest: "Uterus",
    },
  },
  {
    title: "Reduced LV Function",
    alt: "Left Ventricle Failure",
    id: "11",
    category: "Cardiac",
    type: "image",
    tags: [],
    key_features: [
      'Grading LV systolic function focuses on an "eyeball" approach',
      "Reduced LV function can be determind by 3 key parameters: reduced endocardial excursion, reduced myocardial thickening, and reduced mitral valve excursion",
      "Regional wall motion abnormalities may cause a potential underestimation of LV systolic function",
      "Severe hypertrophy/hypertrophic cardiomyopathy may cause an overestimation of LV function",
    ],
    options: ["PSSA", "PSLA", "A4C", "Subcostal", "Color", "VTI"],
    images: [
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/1_PSLA_2D.gif",
        contributor: "John Doe, MD, Emergency Medicine",
        title: "PSLA Item 1",
        option: "PSLA",
        caption: "60 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/1_A4C_2D_1.gif",
        contributor: "John Doe, MD, Emergency Medicine",
        title: "A4C Item 1",
        option: "A4C",
        caption: "60 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/2_A4C_CD.gif",
        contributor: "Michael Scott, PGY-4, Critical Care",
        title: "Color Item 1",
        option: "Color",
        caption: "72 yo M, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/2_PSLA_AV_zoomed_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "PSLA Item 2",
        option: "PSLA",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/3_PSLA_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "PSLA Item 3",
        option: "PSLA",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/3_PSLA_AV_zoomed_colour.gif",
        contributor: "Jane Schmoe, MD",
        title: "Color Item 2",
        option: "Color",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/4_PSLA_CD.gif",
        contributor: "Jane Schmoe, MD",
        title: "Color Item 3",
        option: "Color",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/4_PSSA_AV_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "PSSA Item 1",
        option: "PSSA",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/5_A5C_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "A4C Item 2",
        option: "A4C",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/5_PSSA_AV_colour.gif",
        contributor: "Jane Schmoe, MD",
        title: "Color Item 4",
        option: "Color",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/6_A4C_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "A4C Item 3",
        option: "A4C",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/6_mitral-inflow-CW.gif",
        contributor: "Jane Schmoe, MD",
        title: "VTI Item 1",
        option: "VTI",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/7_A5C_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "A4C Item 4",
        option: "A4C",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/7_LVOT-PW.gif",
        contributor: "Jane Schmoe, MD",
        title: "VTI Item 2",
        option: "VTI",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/8_A5C_AV_focus_2D.gif",
        contributor: "Jane Schmoe, MD",
        title: "A4C Item 5",
        option: "A4C",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://westernsono.ca/wp-content/uploads/2020/02/8_AV-VTI.gif",
        contributor: "Jane Schmoe, MD",
        title: "VTI Item 3",
        option: "VTI",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/9_A5C_colour.gif",
        contributor: "Jane Schmoe, MD",
        title: "Color Item 5",
        option: "Color",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/10_AR_spetraljet.gif",
        contributor: "Jane Schmoe, MD",
        title: "VTI Item 4",
        option: "VTI",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url:
          "https://westernsono.ca/wp-content/uploads/2020/02/11_AR_AS_combined.gif",
        contributor: "Jane Schmoe, MD",
        title: "VTI Item 5",
        option: "VTI",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
    ],
  },
  {
    title: "Advanced Critical Care Quantitative Assessment Resource",
    id: "12",
    category: "Resource",
    type: "resource",
    tags: [],
    pageURL:
      "https://westernsono.ca/advanced-critical-care-ultrasound-quantitative-assessment-resource/#content",
    requestURL: "https://westernsono.ca/wp-json/wp/v2/pages/14811",
  },
  {
    title: "Abdominal Aortic Aneurysm",
    id: "13",
    category: "Aorta",
    type: "image",
    tags: [],
    key_features: ["Look for ...", "AAA's typically show a ..."],
    images: [
      {
        url: "https://via.placeholder.com/150/0000FF/808080?Text=Placeholder1",
        contributor: "John Adams, MD, Emergency Medicine",
        title: "AAA in X context",
        caption: "60 yo F, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Placeholder2",
        contributor: "Jane Adams, PGY-4, Critical Care",
        title: "AAA in Y context",
        caption: "72 yo M, presenting with [], note the X,Y,Z features",
      },
      {
        url: "https://via.placeholder.com/150/FFFF00/000000?Text=Placeholder3",
        contributor: "Name Name, MS-3",
        title: "AAA in Z context",
        caption: "25 yo F, presenting with [], note the X,Y,Z features",
      },
    ],
  },
  {
    title: "US-Guided Peripheral IV",
    id: "14",
    category: "Procedural",
    type: "rapidreview",
    tags: [],
    video: "5dIyh0kqKCs",
    orientation: {
      probe: "Curvilinear or Linear",
      preset: "Abdominal",
      patient_position: "Supine",
      probe_position: "Antecubital Fossa",
      areas_of_interest: "Cephalic, Basilic, Cubital Veins of the arm",
    },
    materials: [
      "Tourniquet",
      "Tegaderm",
      "Angiocatheter - 20G",
      "IV Tubing",
      "Saline flush",
      "Bandage",
      "Antiseptic",
      "Ultrasound Gel",
    ],
    body: [
      {
        header: "Procedure",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image:
          "https://via.placeholder.com/400.gif/09f/fff?text=Placeholder+Image",
      },
    ],
  },
];

const categoryDatabase = [
  {
    title: "Aorta",
    image: require("./assets/png/044-blood.png"),
    groups: {
      "Image Acquisition": {
        title: "Abdominal Aorta Image Acquisition",
        id: "3",
        type: "video",
      },
      "Normal Anatomy": {
        pages: [],
      },
      "Abdominal Aorta Pathology": {
        pages: [
          {
            title: "Abdominal Aortic Aneurysm",
            id: "13",
            type: "image",
          },
        ],
      },
      "Thoracic Aorta Pathology": {
        pages: [],
      },
    },
  },
  {
    title: "Cardiac",
    image: require("./assets/png2/040-heart.png"),
    groups: {
      "Cardiac Views": {
        title: "Cardiac Views",
        pages: [
          {
            title: "Parasternal Views",
            type: "video",
            id: "4",
          },
          {
            title: "Apical Four Chamber View",
            type: "video",
            id: "5",
          },
          {
            title: "Subcostal View",
            type: "video",
            id: "6",
          },
        ],
      },
      "Left Ventricle": {
        title: "Left Ventricle",
        pages: [
          {
            title: "Reduced LV Function",
            type: "image",
            id: "11",
          },
          {
            title: "LV Thrombus",
            type: "image",
            id: "xx",
          },
          {
            title: "Hyperdynamic LV",
            type: "image",
            id: "xxy",
          },
        ],
      },
      "Right Ventricle": {
        pages: [],
      },
      IVC: {
        pages: [],
      },
      Atria: {
        pages: [],
      },
      Pericardium: {
        pages: [],
      },
      Valves: {
        pages: [],
      },
    },
  },
  {
    title: "Quantitative Assessment",
    image: require("./assets/png/geometry.png"),
    type: "page",
    id: "12",
  },
  {
    title: "Lung",
    image: require("./assets/png2/042-lungs.png"),
    groups: {
      "Image Acquisition": {
        pages: [
          {
            title: "BLUE Protocol",
            type: "video",
            id: "7",
          },
        ],
      },
      Pneumothorax: {
        pages: [],
      },
    },
  },
  {
    title: "Abdominal",
    image: require("./assets/png/029-intestine.png"),
    groups: {
      Gallbladder: {
        pages: [
          {
            title: "Biliary Image Acquisition",
            type: "video",
            id: "2",
          },
        ],
      },
      Trauma: {
        pages: [
          {
            title: "FAST Exam Image Acquisition",
            type: "video",
            id: "9",
          },
        ],
      },
      Spleen: {
        pages: [],
      },
      Stomach: {
        pages: [],
      },
      "Small Intestine": {
        pages: [],
      },
      "Large Intestine": {
        pages: [],
      },
    },
  },
  {
    title: "Renal/GU",
    image: require("./assets/png2/032-kidney.png"),
    groups: {
      Kidneys: {
        pages: [
          {
            title: "Renal Image Acquisition",
            type: "video",
            id: "1",
          },
        ],
      },
      Ureters: {
        pages: [],
      },
      Bladder: {
        pages: [],
      },
      "Male Reproductive Organs": {
        pages: [],
      },
    },
  },
  {
    title: "Procedural",
    image: require("./assets/png/injection.png"),
    done: false,
    groups: {
      "Vascular Access": {
        pages: [
          {
            title: "US-Guided Peripheral IV",
            type: "video",
            id: "14",
          },
        ],
      },
      Spine: {
        pages: [],
      },
      "Nerve Blocks": {
        pages: [],
      },
    },
  },
  {
    title: "Pelvic",
    image: require("./assets/png/050-fetus.png"),
    done: false,
    groups: {
      "Image Acquisition": {
        pages: [
          {
            title: "Transabdominal Pelvic Exam",
            type: "video",
            id: "10",
          },
        ],
      },
    },
  },
  {
    title: "Nervous System",
    image: require("./assets/png/016-brain.png"),
    done: false,
    groups: {
      "Transcranial Doppler": {
        pages: [],
      },
    },
  },
  {
    title: "Musculoskeletal",
    image: require("./assets/png/039-elbow.png"),
    done: false,
    groups: {
      Fracture: {
        pages: [],
      },
    },
  },
];

const learnDatabase = [
  {
    title: "Fundamentals",
    thumbnail: require("./assets/png/fundamentals.png"),
    id: 1,
    pages: [
      {
        title: "Ultrasound Physics",
        id: "1.1",
        captionText:"An understanding of ultrasound physics (groan) is a necessary evil in the quest to applying and mastering ultrasound at the point of care. Begin this module to start your POCUS journey!",
        headerImage:require('./assets/png/movement.png')
      },
      {
        title: "Ultrasound Controls",
        id: "1.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Probe Types",
        id: "1.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Probe Movements",
        id: "1.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Ultrasound Machine Maintenance",
        id: "1.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Principles of Doppler Ultrasound",
        youtube: "mwr-wF_IMeU",
        id: "1.6",
        captionText:
          "Learn the principles of Doppler ultrasound in this 20-minute screencast from Dr. Katie Wiskar. This tutorial covers basic ultrasound physics, different Doppler modes, and multiple examples from various POCUS applications.",
      },
    ],
  },
  {
    title: "Lung and Pleura",
    thumbnail: require("./assets/png2/042-lungs.png"),
    id: 2,
    pages: [
      {
        title: "Basics and Physics",
        youtube: "1V1r3MMcjQU",
        id: "2.1",
        captionText:
          "An introduction to the physics involved in ultrasound imaging, some knobology and how to perform an ultrasound exam. The majority of this material will be review from the Fundamentals Module, feel free to skip if you feel you have a solid understanding of the basics! By Dany Burke MD FRCPC Critical Care Western PGY7",
      },
      {
        title: "Artefacts",
        youtube: "bXi2ywmQHzg",
        id: "2.2",
        captionText:
          "Lung Ultrasound is an artefact driven study. This screencast offers a description and explanation of the common artefacts seen and used in lung ultrasound. By Dany Burke MD FRCPC Critical Care Western PGY7",
      },
      {
        title: "Image Acquisition",
        youtube: "aYSoYXqWJ5A",
        video:
          "https://westernsono.ca/wp-content/uploads/2013/06/lung-acquisition.mp4?_t=1514825028",
        id: "2.3",
        captionText:
          "The standard views for image acquisition of solid organs are typically dictated by what windows are possible based on external anatomy and surrounding structures.  The lungs, however, can be imaged from anywhere on the thorax.  This boundless opportunity can create confusion and, possibly, crippling anxiety as to which portions of the lungs deserve to be imaged.  The idea is, much like the way we auscultate, to take a representative sample from major lung zones and then synthesize a conclusion – clear lungs, unilateral lung disease, bilateral lung disease, etc that permits a rapid differential diagnosis for the respiratory failure that confronts you.  Efficiency and accuracy are essential. By Dr. Rob Arntfield",
      },
      {
        title: "Image Interpretation",
        youtube: "Y9Hv84m3kOM",
        altVideo: "uv6zI4QHYss",
        id: "2.4",
        captionText:
          "Are you able to find the lungs and pleura on ultrasound but need a refresher on how to decode the various findings that you might see?  Lung ultrasound (more than pleural) is an artifact driven field and this tutorial seeks to educate and demystify the lung findings of A lines, B lines and sliding lung as well as the classic pleural findings of consolidation and effusion. By Dany Burke MD FRCPC Critical Care Western PGY7",
      },
      {
        title: "Pneumothorax",
        youtube: "y9GIZ_Fonus",
        id: "2.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Pleural Effusion",
        youtube: "hLhRKo6llMA",
        id: "2.6",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Alveolar Interstitial Syndrome and Pneumonia",
        youtube: "m_VxmbIO0Rs",
        id: "2.7",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "BLUE Protocol and Cases from Emergency Medicine",
        youtube: "rzBoRbuc4-0",
        id: "2.8",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title:
          "Plerual Effusion and Consolidation size - Pneumonia vs. Atelectasis",
        youtube: "l-BX3wVhDIg",
        id: "2.9",
        captionText:
          "Interpreting a consolidation pattern of the lung with a concomitant pleural effusion can sometimes be challenging. Is it a pneumonia pattern with secondary para-pneumonic effusion, or is there a pleural effusion with secondary compressive atelectasis? Does size of each matter, or help us with the diagnosis? Are there any other secondary signs that will help us rule in an infectious process? The answer is yes!",
      },
      {
        title: "Common Pitfalls in LUS",
        youtube: "58kS_jrxiMI",
        id: "2.10",
        captionText:
          "This 15-minute screencast reviews common mistakes in lung ultrasound image acquisition, interpretation, and clinical integration. It aims to sharpen your lung POCUS skills and help you unlock the true potential of this powerful diagnostic modality.",
      },
      {
        title: "Alveolar Consolidation and Shred Sign",
        youtube: "0qY9AghmFUs",
        id: "2.11",
        captionText:
          "Sliding lung, A lines and B lines – easy enough, right?  But what about the spectrum of alveolar consolidation and the so called “shred” sign.  This review by Yogesh Lala, MD, FRCPC – alumnus of our critical care program, has got YOU covered.",
      },
      {
        title: "Loss of Lung Sliding: Beyond Pneumothorax",
        youtube: "2AulDYEjLZs",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/12/untitled.mp4?_t=1514825048",
        id: "2.12",
        captionText:
          "All that slides is NOT pneumothorax – we know this. When lung sliding is lost, however, the importance of this and what this could mean, is less certain. To better understand loss of lung sliding, please enjoy this excellent screencast by Dr. Paul Lee from the internal medicine program at Western University.",
      },
      {
        title: "Acute Respiratory Distress Syndrome",
        youtube: "rAC9Y28zpG8",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/08/lung-ultrasonography-in-ards-2015.mp4?_t=1514825036",
        id: "2.13",
        captionText:
          "Tutorial on the use of point of care ultrasound in acute respiratory syndrome presented by Ann George, MD",
      },
      {
        title: "Respiratory Failure",
        youtube: "q_-F4fHRv5g",
        id: "2.14",
        captionText:
          "Bedside Lung ultrasound has its place beyond the ED and ICU. Enjoy this case of respiratory failure in the general medicine ward presented by Lucas Ciprietti PGY4 Internal Medicine",
      },
    ],
  },
  {
    title: "Echocardiography",
    thumbnail: require("./assets/png2/040-heart.png"),
    id: 3,
    pages: [
      {
        title: "Essential Views and Techniques",
        youtube: "bON-KPiiNCk",
        id: "3.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Assessment of LV Function",
        youtube: "v2SUfIwdjdI",
        id: "3.2",
        captionText:
          "The point of care ultrasound revolution has brought a renaissance to providers of resuscitative care: No longer is determination of shock something that requires invasive monitoring (e.g. Swan Ganz) or an ICU admission. Instead, with good image acquisition and image interpretation skills, point of care echo can answer this question anywhere in the hospital – the ED, the ward, the ICU and, the CT scanner or the cafeteria.\n\nAssessing LV function at the point of care is typically used for patients in shock. Compromised LV function may either be the cause or may significantly complicate shock management. Our approach for managing shock based on LV function is shown in this flowsheet.\n\nThe “eyeball” method for addressing LV function is acceptable and even necessary in the point of care setting. Exact determination of ejection fraction (EF) is time consuming and the additional investment in acquiring a more “precise” number does not typically provide incrementally better or more detailed care. A patient with an EF of 20% and one with an EF 25% are typically resuscitated in a similar fashion, for instance.",
      },
      {
        title: "Assessment of the RV",
        youtube: "bON-KPiiNCk",
        id: "3.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Pericardial Effusion",
        youtube: "bON-KPiiNCk",
        id: "3.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Inferior Vena Cava",
        youtube: "bON-KPiiNCk",
        id: "3.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Valve assessment",
        youtube: "bON-KPiiNCk",
        id: "3.6",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Stroke Volume Determination",
        youtube: "UrQKyURqDBI",
        id: "3.7",
        captionText:
          "The eyeball method of LV function determination works. Sometimes, however, you may need a better hemodynamic understanding.  Or maybe you just like numbers and the whole “qualitative LV function” thing isn’t for you? Either way, you can learn the how and the why of stroke volume determination with point of care echo here in 10 minutes.",
      },
      {
        title: "Regional Wall Motion Abnormalities",
        youtube: "TWviIgG2V60",
        id: "3.8",
        captionText:
          "Looking for a tool to help stratify your acute coronary syndrome patients? Look no further. Dr. Erica Beatty (PGY4 Emergency Medicine) walks us through the identification of regional wall motion abnormalities (RWMA) using POCUS. Several cardiac views will be presented and their findings will be correlated with a differential diagnosis and put into clinical context.",
      },
      {
        title: "Aortic Stenosis vs. Sclerosis",
        youtube: "RDPaeCqfA2Y",
        id: "3.9",
        captionText:
          "A short tutorial by Dr. Katie Wiskar outlining the ultrasound approach to distinguishing aortic stenosis from aortic sclerosis using POCUS and spectral Doppler.",
      },
    ],
  },
  {
    title: "Procedures",
    thumbnail: require("./assets/png/injection.png"),
    id: 4,
    pages: [
      {
        title: "US Guided Peripheral IV Insertion Part 1",
        youtube: "YVQhpcsmaHM",
        id: "4.1",
        captionText: "",
      },
      {
        title: "US Guided Peripheral IV Insertion Part 2",
        youtube: "Z6mOKmZcshI",
        id: "4.2",
        captionText: "",
      },
      {
        title: "US Guided Vascular Access for ICU Residents",
        youtube: "Z6mOKmZcshI",
        id: "4.3",
        captionText: "",
      },
      {
        title: "Sterile Technique for US Guided Central Line",
        youtube: "BIZJdzqgF88",
        id: "4.4",
        captionText: "",
      },
      {
        title: "Fracture Management",
        youtube: "9Dd25I1b4_I",
        id: "4.5",
        captionText: "",
      },
      {
        title: "Paracentesis",
        video: "bON-KPiiNCk",
        id: "4.6",
        captionText: "",
      },
      {
        title: "Thoracentesis",
        video: "bON-KPiiNCk",
        id: "4.7",
        captionText: "",
      },
    ],
  },
  {
    title: "Renal",
    thumbnail: require("./assets/png2/031-kidney-1.png"),
    id: 5,
    pages: [
      {
        title: "Anatomy and Sono-Anatomy",
        youtube: "llUZeU-NUQo",
        id: "5.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Hydronephrosis",
        youtube: "RLxcOUQZ8G8",
        id: "5.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Hydronephrosis Mimics",
        youtube: "p4qJzOuYgb8",
        id: "5.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Stones and Masses",
        youtube: "PGBuxlmTta8",
        id: "5.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Abdomen",
    thumbnail: require("./assets/png/038-abs.png"),
    id: 6,
    pages: [
      {
        title: "FAST Exam Part 1: Approach",
        youtube: "orL-bSlwBTA",
        id: "6.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "FAST Exam Part 2: Algorithm and Pitfalls",
        youtube: "E6J06ta07QA",
        id: "6.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Small Bowel Obstruction",
        youtube: "X_Ui91kjfag",
        id: "6.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Gallbladder",
    thumbnail: require("./assets/png2/005-gallbladder.png"),
    id: 7,
    pages: [
      {
        title: "Introduction",
        youtube: "PwqFuc4qzvY",
        id: "7.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Stones and Mimics",
        youtube: "pY2BinfQea0",
        id: "7.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Cholecystitis",
        youtube: "XMEN2ZDUtNU",
        id: "7.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Pelvic",
    thumbnail: require("./assets/png2/029-pelvic-area.png"),
    id: 8,
    pages: [
      {
        title: "Trans-Abdominal Technique",
        youtube: "jgyYftAAQgk",
        id: "8.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Endocavitary Approach",
        youtube: "By8TPKMRfdc",
        id: "8.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Defining a Positive OB Study",
        youtube: "Ww-_VGPlqdo",
        id: "8.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Vascular",
    thumbnail: require("./assets/png/049-blood.png"),
    id: 9,
    pages: [
      {
        title: "DVT",
        youtube: "kenAPbRVMl0",
        id: "9.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Lower Extremity DVT",
        youtube: "-HERC2yB0Yk",
        id: "9.2",
        captionText:
          "Sean Spence (PGY-5 Critical Care Medicine, University of Calgary) explains how to conduct a DVT exam. He covers lower extremity vascular anatomy relevant to the DVT exam and then wraps up by demonstrating a DVT study done by himself. There are examples of both a normal study and a positive finding.",
      },
      {
        title: "Solid Organ Doppler Assessment of Venous Congestion",
        youtube: "e_bIVvFV6jE",
        id: "9.3",
        captionText:
          "In this 15-minute video, Dr Katie Wiskar covers an introduction to solid organ doppler assessment of venous congestion - the cool new kid on the POCUS block when it comes to volume status.",
      },
    ],
  },
  {
    title: "Ocular",
    thumbnail: require("./assets/png/006-eye.png"),
    id: 10,
    pages: [
      {
        title: "Common Pathologies",
        youtube: "dW8F_sMojKk",
        id: "10.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Critical Care Hemodynamics",
    thumbnail: require("./assets/png/044-blood.png"),
    id: 11,
    pages: [
      {
        title: "Hypovolemic Shock",
        youtube: "THJjNqhfi54",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hypovolemia-final.mp4?_t=1514825045",
        id: "11.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Distributive Shock",
        youtube: "OAtiIY_Apco",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/vasoplegia-final.mp4?_t=1514825047",
        id: "11.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        transcript:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing\n\n  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      },
      {
        title: "Cardiogenic Shock",
        youtube: "-sYW0xNLqkA",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/cardiogenic-shock-final.mp4?_t=1514825037",
        id: "11.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Sepsis with CHF",
        youtube: "MiV8lrtdKEU",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/sepsis-chf-final.mp4?_t=1514825046",
        id: "11.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Calcium Channel Blocker Overdose",
        youtube: "dXEGVc-JHxw",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/ccb-od-final.mp4?_t=1514825038",
        id: "11.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Dimensionless Index",
        youtube: "UFDpp1WtZjQ",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/dimensionless-index-final.mp4?_t=1514825042",
        id: "11.6",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Cor Pulmonale",
        youtube: "NwmMdyeV8og",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/cor-pulmonale-rv-overload-final.mp4?_t=1514825040",
        id: "11.7",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Hypertrophic Obstructive Cardiomyopathy",
        youtube: "HH1V6D-TDfo",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hocm-final.mp4?_t=1514825043",
        id: "11.8",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Transesophageal Echo (TEE)",
    thumbnail: require("./assets/png2/038-esophagus.png"),
    id: 12,
    pages: [
      {
        title: "How to Scan",
        youtube: "IU3TRfnO7tI",
        id: "12.1",
        captionText:
          "Rob Arntfield, MD, FRCPC and Atul Jaidka, MD, PGY2 takes us through the fundamentals of performing a transesophageal echocardiography (TEE). This video uses a live demonstration to introduce probe manipulation, how to obtain different views, and how to landmark for these different views. The techniques being presented will help you in performing goal-directed TEE in critically ill patients, whether it be for visualizing valvular disorders or during a resuscitation. Make sure to check out the image acquisition screencasts afterwards to learn how to interpret your TEE findings!",
      },
      {
        title: "Left Atrial Appendage Thrombus",
        youtube: "0kCCupXD-4g",
        id: "12.2",
        captionText:
          "A common question asked when a patient has an embolic event (i.e. stroke, mesenteric ischemia, femoral artery occlusions) is whether there was a cardiac source of embolus. In this screencast done by Dr. Vince Lau, we will go over the principles of left atrial appendage interrogation using TEE, looking for a nidus for clot (spontaneous echo contrast, low flow stasis).",
      },
      {
        title: "Infective Endocarditis",
        youtube: "PbKkBgGjI4E",
        id: "12.3",
        captionText:
          "One of the concerns associated with confirmed bacteremia is the presence of endocarditis as a consequence of the bacteremia, or even as the source. This is especially true of the organisms grown on blood cultures have a preponderance to form vegetations on cardiac valves. Please enjoy this screencast by Dr. Vince Lau on infective endocarditis.",
      },
      {
        title: "Veno-Venous ECMO Initiation",
        youtube: "pwaBrjILEFE",
        id: "12.4",
        captionText:
          "Veno-venous ECMO use is increasing at many centres.  Seldom an elective procedure and typically done on patients too sick to transport, bedside guidance of ECMO cannula insertion is essential. As this tutorial (by Dr. Vince Lau) highlights, point-of-care TEE can be invaluable in these circumstances in providing real time guidance of guidewire and cannula positioning.  Further, adjustments of the cannula’s outflow port can be done using color Doppler to optimize the yield of the intervention.",
      },
      {
        title: "Shunts and Bubble Study",
        youtube: "i8J1BxGM8wo",
        id: "12.5",
        captionText:
          "Do you have a refractory hypoxemic patient who does not respond to increases in FiO2? Worried about a shunt causing said hypoxemia? Or presence of a septal defect causing paradoxical emboli? In this screencast done by Dr. Vince Lau, we will go over the principles of intra-atrial septal interrogation, performance of a bubble study, and calculating a shunt fraction (Qp:Qs).",
      },
      {
        title: "Harlequin Syndrome",
        youtube: "GXTTihsUd8o",
        id: "12.6",
        captionText:
          "A visual (no sound to this) tour of an interesting case of ECMO and its complexities managed in the ICU with the assistance of point-of-care transesophageal echo.",
      },
    ],
  },
  {
    title: "Trans-cranial Doppler",
    thumbnail: require("./assets/png2/060-brain.png"),
    id: 13,
    pages: [
      {
        title: "Vasospasm and Cerebral Circulatory Arrest",
        youtube: "sWR9a3tBZVY",
        video:
          "https://westernsono.ca/wp-content/uploads/2016/06/tcd-camtasia.mp4?_t=1514825049",
        id: "13.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
];

const testDatabase = [
  {
    title:"Fundamentals Module Test",
    image:require("./assets/png/fundamentals.png"),
    id:1,
    count:5,
    eta:5,
    questions:[
      {
        content:'Ultrasound gel serves to:',
        answers:[
          'Accelerate sound waves from the transducer for maximal body penetration',
          'Protect sound beams from scatter from air at the interface of the probe and the body',
          'Eliminate friction from the probe on the patient\'s body for a more pleasing scanning experience',
          'All of the above'
        ],
        correct:1,
      },
      {
        content:'Which of the following statements are correct?\n1. Low frequency waves are ideal for good penetration.\n2. High frequency waves are ideal for vascular access.\n3. Phase array probes have a small footprint, fast frame rate.\n4. The focal zone has the best lateral resolution.',
        answers:[
          '1, 3',
          '3, 4',
          '1, 2, 4',
          'All of the above'
        ],
        correct:3,
      },
      {
        content:'M-Mode',
        answers:[
          'Is a synonym for 2D or B mode',
          'Provides vivid details regarding motion of structures by plotting a time lapsed image',
          'Is applied to diminish motion artifacts',
          'Is a mode of imaging where gain is not applicable'
        ],
        correct:1,
      },
      {
        content:'Which artifact is present in this image?',
        image:'https://www.proprofs.com/api/ckeditor_images/Screen%20Shot%202014-07-22%20at%209_39_56%20PM.jpg',
        answers:[
          'Enhancement',
          'Ring down',
          'Reverberation',
          'Mirror image'
        ],
        correct:2,
      },
      {
        content:'Regarding Doppler, which of the following is FALSE',
        answers:[
          'The Doppler effect is characterized by decreasing frequencies for objects moving away from the listener and increasing frequency for objects moving toward the listener',
          'Has both a Colour and a graphical (spectral) means of being represented on an ultrasound machine',
          'In colour Doppler, objects moving toward the transducer are depicted as red and objects moving away from the transducer are depicted as being blue.',
          'Doppler can only be applied using the phased array transducer'
        ],
        correct:3,
      },
    ]
  },
  {
    title: "Lung and Pleural Ultrasound Module Test",
    image: require("./assets/png2/042-lungs.png"),
    id:2,
    count:5,
    eta:30,
    questions: [
      {
        content:'A 32 year old man with a history of IV drug use present to the ED for shortness of breath and fevers for the past 2 days. What do you suspect based on this lung ultrasound of the anterior right chest (similar findings found throughout both lung fields)?',
        video:'https://res.cloudinary.com/dwtw3ge2z/video/upload/v1595814525/Learn/Lung/moduleTest/Lung-Inflammatory-B-lines-infarct-Linear-probe_s4pg2e.mp4',
        answers:[
          "Cardiogenic pulmonary",
          'Diffuse pneumonia',
          'Septic emboli with ARDS',
          'Pulmonary embolism'
        ],
        correct:'Septic emboli with ARDS',
        explanation:'This image above shows a significant B line burden suggestive of interstitial syndrome, a thickened, irregular pleura suggestive of an inflammatory etiology (non cardiogenic), as well as a subpleural nodular hypoechogenicity compatible with subpleural infarct which suggests pulmonary embolism. Taken with the clinical context, this is suggestive of septic embolism in the context of right sided infective endocarditis, which was confirmed in this patient, or septic thrombophlebitis (a rarer occurrence).'
      },
      {
        content:'A patient is assessed post op day 2 from orthotopic liver transplant for worsening hypoxemia. Vital signs are HR 100bpm, BP 100/40, SpO292% on 50% FM and Temp 37.2C orally. Chest Xray shows small lung volumes and some haziness over the right lung field. Below is a lung ultrasound from the right PLAPS point. What is your diagnosis?',
        video:'https://res.cloudinary.com/dwtw3ge2z/video/upload/v1595814525/Learn/Lung/moduleTest/Lung-Dynamic-air-bronchograms-Sweet_gjmfwq.mp4',
        answers:[
          'Bacterial pneumonia',
          'Atelectasis',
          'Ascites causing small lung volumes',
          'Cardiogenic pulmonary edema'
        ],
        correct:'Bacterial pneumonia',
        explanation:'The image shows a large organ with tissue density. This could represent either consolidated lung or liver. The surest way to distinguish between the two would be to locate the diaphragm which should always be done.\nIn this case, the presence of air bronchograms (the hyperchogenic artefacts where air is in contact with tissue) suggests that this is much more likely to be lung (though air may be seen in the liver in case of pneumobilia or portal venous air).\nThe flowing movement of the air in the bronchi makes this a dynamic air bronchogram. This suggests the consolidation is not related to insufficient air entry into the lung (as in atelectasis) but related to abnormal material in the alveoli (generally pus as in pneumonia). Dynamic air bronchograms have a 94% Specificity but only 61% Sensitivity for the diagnosis of pneumonia in the ICU and are therefore a much better rule in tool (Positive likelihood ratio = 10) than rule out tool (Negative likelihood ratio = 0.4)'
      },
      {
        content:'A 40 year old male suffers a motor vehicle collision. He is brought to the ED. He is short of breath. His vital signs are BP 110/80, HR 110bpm, RR 28 SpO2 94% on 50% face mask. Lung ultrasound is performed to assess for pneumothorax (see below). What is shown and what do you do?',
        video:'https://res.cloudinary.com/dwtw3ge2z/video/upload/v1595814526/Learn/Lung/moduleTest/Lung-Pseudolung-point_giqmvu.mp4',
        answers:[
          'Pneumothorax - Insert chest tube',
          'Consolidation from pulmonary contusion - Intubate',
          'Pneumothorax, likely small - Wait for chest X-ray',
          'Pseudolung point - Continue assessment'
        ],
        correct:'Pseudolung point - Continue assessment',
        explanation:'The clip shown is an example of a pseudolung point: a point where normal pleura is in juxtaposition to another organ/tissue. The sudden appearance and loss of presence of lung sliding resembles a lung point. However, in a pseudolung point, when lung sliding disappears, we are able to see the adjacent organ deeper (in this case the heart).  Pseudolung points tend to arise on the chest where organs and pleura switch places during tidal ventilation (the left anterior chest due to the heart and the costophrenic angles due to the abdominal viscera). In a true lung point, the zone where lung sliding is lost should show an A-line pattern (due to air in the pleural space).'
      },
      {
        content:'A patient is assessed for hypoxemia in the ICU.  Chest X ray shows a left sided haziness with suspected consolidation. Lung ultrasound is shown below. What is the likely etiology for the patient\'s hypoxemia and what is best management?',
        video:'https://res.cloudinary.com/dwtw3ge2z/video/upload/v1595814529/Learn/Lung/moduleTest/Plankton-sign_y6bwhb.mp4',
        answers:[
          "Transudative pleural effusion due to congestive heart failure - Give diuretics",
          'Bacterial pneumonia - Give antibiotics',
          'Complex pleural effusion - Diagnostic +/- therapeutic thoracentesis',
        ],
        correct:'Complex pleural effusion - Diagnostic +/- therapeutic thoracentesis',
        explanation:'The clip shows a moderate sized mostly anechoic pleural effusion with swirling hyperchogenicities within it. When there is only one hyperechogenicity, this is termed plankton sign. It is a sign of proteinaceous, cellular or other inflammatory debris within the effusion, compatible with an exsudate. This could represent a complex parapneumonic effusion, a hemothorax, a malignant effusion, etc. Hence, diagnostic thoracentesis is indicated with consideration for therapeutic thoracentesis/chest tube placement for symptom relief or, in the case of empyema, source control.'
      },
      {
        content:'A patient is assessed for hypoxemia in the post cardiac surgery recovery unit. Chest Xray shows haziness in the right lower lung field. Lung ultrasound of the right PLAPS point is shown below, what is seen and what is the likely diagnosis?',
        video:'https://res.cloudinary.com/dwtw3ge2z/video/upload/v1595814518/Learn/Lung/moduleTest/Atelectasis-partial-inflation_i3qsp4.mp4',
        answers:[
          "Consolidation with dynamic air bronchograms - Pneumonia",
          'Consolidation with partial inspiratory recruitment - Atelectasis',
          'B - Lines - Heart failure',
        ],
        correct:'Consolidation with partial inspiratory recruitment - Atelectasis',
        explanation:'The clip shows a consolidation with air bronchograms. On inspiration, there is motion seen and the air bronchograms move which could suggest dynamic air bronchograms. However, we are not seeing the flowing motion of air within the bronchi, but rather the interface between aerated and non aerated lung if moving centrifugally (as evidence by the shred sign moving towards the probe). This suggests inspiratory recruit of the consolidation, compatible with atelectasis.'
      },
    ]
  }
]

export { database, categoryDatabase, learnDatabase, testDatabase };
