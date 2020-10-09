const categoryDatabase = 
  {
    "Cardiac": require("./assets/png2/040-heart.png"),
    "Thoracic":require("./assets/png2/042-lungs.png"),
    "Abdominal":require("./assets/png/038-abs.png"),
    "Renal":require("./assets/png2/032-kidney.png"),
    "Procedural": require("./assets/png/injection.png"),
    "Pelvic": require("./assets/png2/029-pelvic-area.png"),
    "Head and Neck": require("./assets/png/043-thyroid.png"),
    "Soft Tissue": require("./assets/png2/010-ankle.png"),
    "Trauma": require("./assets/png/injury.png"),
  }


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
        title: "Probe Types",
        id: "1.2",
        captionText:""
      },
      {
        title: "Probe Movements",
        id: "1.3",
        captionText:""
      },
      {
        title: "Controls on LHSC Machines",
        id: "1.4",
        captionText:""
      },
      {
        title: "Ultrasound Machine Maintenance",
        id: "1.5",
        captionText:""
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
          "Ultrasound is an increasingly important tool in the diagnosis of pneumothorax. This screencast reviews the major findings you will see on a patient with pneumothorax, as well as the (many) pitfalls to avoid to prevent misinterpretation.",
      },
      {
        title: "Pleural Effusion",
        youtube: "hLhRKo6llMA",
        id: "2.6",
        captionText:
          "Pleural effusions come with many signs: Spine, Quad, Sinusoid, Plankton and Jellyfish. Take a deep dive and learn what all these signs mean in this 9 minute screencast!",
      },
      {
        title: "Alveolar Interstitial Syndrome and Pneumonia",
        youtube: "m_VxmbIO0Rs",
        id: "2.7",
        captionText:
          "We now turn our attention away from the pleura to the lung parenchyma. Learn to differentiate between pneumonia, atelectasis, CHF and ARDS, as well as the various sonographic signs that come with lung consolidation.",
      },
      {
        title: "Review with Cases from Emergency Medicine",
        youtube: "rzBoRbuc4-0",
        id: "2.8",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title:
          "Plerual Effusion AND Consolidation - Chicken or the egg?",
        youtube: "l-BX3wVhDIg",
        id: "2.9",
        captionText:
          "Interpreting a consolidation pattern of the lung with a concomitant pleural effusion can sometimes be challenging. Is it a pneumonia pattern with secondary para-pneumonic effusion, or is there a pleural effusion with secondary compressive atelectasis? Does size of each matter, or help us with the diagnosis? Are there any other secondary signs that will help us rule in an infectious process? The answer is yes! Please check out this great screencast by Dr. Yves Landry, critical care fellow (PGY-5) from Western University on comparing pleural effusion to consolidation size, and secondary signs of an infectious process.",
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
          "Still puzzled about the different patterns of B-lines? Watch this case-based tutorial on differentiating between the various diffuse parenchymal diseases. Presented by Ann George, MD",
      },
      {
        title: "Respiratory Failure",
        youtube: "q_-F4fHRv5g",
        id: "2.14",
        captionText:
          "Real-life example of respiratory failure in the general medicine ward, and how a POCUS consultation can help. Presented by Lucas Ciprietti PGY4 Internal Medicine",
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
        title: "Approach to difficult image acquisition",
        youtube: "bON-KPiiNCk",
        id: "3.2",
        captionText:
          "The point of care ultrasound revolution has brought a renaissance to providers of resuscitative care: No longer is determination of shock something that requires invasive monitoring (e.g. Swan Ganz) or an ICU admission. Instead, with good image acquisition and image interpretation skills, point of care echo can answer this question anywhere in the hospital – the ED, the ward, the ICU and, the CT scanner or the cafeteria.\n\nAssessing LV function at the point of care is typically used for patients in shock. Compromised LV function may either be the cause or may significantly complicate shock management. Our approach for managing shock based on LV function is shown in this flowsheet.\n\nThe “eyeball” method for addressing LV function is acceptable and even necessary in the point of care setting. Exact determination of ejection fraction (EF) is time consuming and the additional investment in acquiring a more “precise” number does not typically provide incrementally better or more detailed care. A patient with an EF of 20% and one with an EF 25% are typically resuscitated in a similar fashion, for instance.",
      },
      {
        title: "Assessment of LV Function",
        youtube: "v2SUfIwdjdI",
        id: "3.3",
        captionText:
          "The point of care ultrasound revolution has brought a renaissance to providers of resuscitative care: No longer is determination of shock something that requires invasive monitoring (e.g. Swan Ganz) or an ICU admission. Instead, with good image acquisition and image interpretation skills, point of care echo can answer this question anywhere in the hospital – the ED, the ward, the ICU and, the CT scanner or the cafeteria.\n\nAssessing LV function at the point of care is typically used for patients in shock. Compromised LV function may either be the cause or may significantly complicate shock management. Our approach for managing shock based on LV function is shown in this flowsheet.\n\nThe “eyeball” method for addressing LV function is acceptable and even necessary in the point of care setting. Exact determination of ejection fraction (EF) is time consuming and the additional investment in acquiring a more “precise” number does not typically provide incrementally better or more detailed care. A patient with an EF of 20% and one with an EF 25% are typically resuscitated in a similar fashion, for instance.",
      },
      {
        title: "Assessment of the RV",
        youtube: "bON-KPiiNCk",
        id: "3.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Pericardial Effusion",
        youtube: "bON-KPiiNCk",
        id: "3.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Inferior Vena Cava",
        youtube: "bON-KPiiNCk",
        id: "3.6",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Basic Valve assessment",
        youtube: "bON-KPiiNCk",
        id: "3.7",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Stroke Volume Determination",
        youtube: "UrQKyURqDBI",
        id: "3.8",
        captionText:
          "The eyeball method of LV function determination works. Sometimes, however, you may need a better hemodynamic understanding.  Or maybe you just like numbers and the whole “qualitative LV function” thing isn’t for you? Either way, you can learn the how and the why of stroke volume determination with point of care echo here in 10 minutes.",
      },
      {
        title: "Regional Wall Motion Abnormalities",
        youtube: "TWviIgG2V60",
        id: "3.9",
        captionText:
          "Looking for a tool to help stratify your acute coronary syndrome patients? Look no further. Dr. Erica Beatty (PGY4 Emergency Medicine) walks us through the identification of regional wall motion abnormalities (RWMA) using POCUS. Several cardiac views will be presented and their findings will be correlated with a differential diagnosis and put into clinical context.",
      },
      {
        title: "Aortic Stenosis vs. Sclerosis",
        youtube: "RDPaeCqfA2Y",
        id: "3.10",
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
        title: "Peripheral IV Insertion Part 1",
        youtube: "YVQhpcsmaHM",
        id: "4.1",
        captionText: "",
      },
      {
        title: "Peripheral IV Insertion Part 2",
        youtube: "Z6mOKmZcshI",
        id: "4.2",
        captionText: "",
      },
      {
        title: "Central Vascular Access",
        youtube: "bON-KPiiNCk",
        id: "4.3",
        captionText: "",
      },
      {
        title: "Subclavian and Peripheral Arterial Access",
        youtube: "bON-KPiiNCk",
        id: "4.4",
        captionText: "",
      },
      {
        title: "Sterile Technique for US Guided Procedures",
        youtube: "BIZJdzqgF88",
        id: "4.5",
        captionText: "",
      },
      {
        title: "Fracture Management",
        youtube: "9Dd25I1b4_I",
        id: "4.6",
        captionText: "",
      },
      {
        title: "Paracentesis",
        youtube: "WuqWGs4Kxr4",
        id: "4.7",
        captionText: "",
      },
      {
        title: "Thoracentesis",
        youtube: "Zg0d7Y3uPb4",
        id: "4.8",
        captionText: "",
      },
      {
        title: "US-guided Nerve Blocks for Hip Fractures",
        youtube: "7RKXLAqHaOk",
        id: "4.9",
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
          "Is POCUS for SBO even a thing? Is it high time to say goodbye to X-rays? In this 10 minute screencast, Dr. Heather Hames explains the evidence behind using bedside ultrasound for small bowel obstructions, as well as how to generate and interpret your images.",
      },
      {
        title: "Abdominal Aorta",
        youtube: "HAX7d3EMveg",
        id: "6.4",
        captionText:
          "Ultrasound has been shown to accurately identify both aneurysmal and normal abdominal aortas. Learn all about this core emergency medicine skill in this 12 minute screencast. By Dr. Drew Thompson.",
      },
    ],
  },
  {
    title: "Biliary",
    thumbnail: require("./assets/png2/035-liver.png"),
    id: 7,
    pages: [
      {
        title: "Introduction",
        youtube: "PwqFuc4qzvY",
        id: "7.1",
        captionText:
          "An introduction to the magical world of biliary ultrasound, including indications, probe selection, patient positioning, and gallbladder anatomy. By Dr. Frank Myslik.",
      },
      {
        title: "Stones and Mimics",
        youtube: "pY2BinfQea0",
        id: "7.2",
        captionText:
          "The biggest use of biliary ultrasound is the evaluation for gallstones. Find out about what features characterize a gallstone, and how to distinguish them from the many similar structures that can be found within the gallbladder. By Dr. Frank Myslik.",
      },
      {
        title: "Cholecystitis",
        youtube: "XMEN2ZDUtNU",
        id: "7.3",
        captionText:
          "The diagnosis of cholecystitis is based on the entire clinical picture in addition to the findings of the POCUS exam. Learn about the 4 important sonographic signs of cholecystitis, and how to distinguish them from mimics. By Dr. Frank Myslik. ",
      },
    ],
  },
  {
    title: "Female Pelvis",
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
    title: "Male Pelvis",
    thumbnail: require("./assets/png/028-testicle.png"),
    id: 9,
    pages: [
      {
        title: "Scrotal Ultrasound",
        youtube: "xiVnNa2hCjY",
        id: "9.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Testicular Torsion and Other Pathologies",
        youtube: "BXaCUYnM9X0",
        id: "9.2",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Vascular",
    thumbnail: require("./assets/png/049-blood.png"),
    id: 10,
    pages: [
      {
        title: "DVT",
        youtube: "kenAPbRVMl0",
        id: "10.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Lower Extremity DVT",
        youtube: "-HERC2yB0Yk",
        id: "10.2",
        captionText:
          "Sean Spence (PGY-5 Critical Care Medicine, University of Calgary) explains how to conduct a DVT exam. He covers lower extremity vascular anatomy relevant to the DVT exam and then wraps up by demonstrating a DVT study done by himself. There are examples of both a normal study and a positive finding.",
      },
      {
        title: "Solid Organ Doppler Assessment of Venous Congestion",
        youtube: "e_bIVvFV6jE",
        id: "10.3",
        captionText:
          "In this 15-minute video, Dr Katie Wiskar covers an introduction to solid organ doppler assessment of venous congestion - the cool new kid on the POCUS block when it comes to volume status.",
      },
    ],
  },
  {
    title: "Ocular",
    thumbnail: require("./assets/png/006-eye.png"),
    id: 11,
    pages: [
      {
        title: "Common Pathologies",
        youtube: "dW8F_sMojKk",
        id: "11.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Critical Care Hemodynamics",
    thumbnail: require("./assets/png/044-blood.png"),
    id: 12,
    pages: [
      {
        title: "Hypovolemic Shock",
        youtube: "THJjNqhfi54",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hypovolemia-final.mp4?_t=1514825045",
        id: "12.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Distributive Shock",
        youtube: "OAtiIY_Apco",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/vasoplegia-final.mp4?_t=1514825047",
        id: "12.2",
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
        id: "12.3",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Sepsis with CHF",
        youtube: "MiV8lrtdKEU",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/sepsis-chf-final.mp4?_t=1514825046",
        id: "12.4",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Calcium Channel Blocker Overdose",
        youtube: "dXEGVc-JHxw",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/ccb-od-final.mp4?_t=1514825038",
        id: "12.5",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Dimensionless Index",
        youtube: "UFDpp1WtZjQ",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/dimensionless-index-final.mp4?_t=1514825042",
        id: "12.6",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Cor Pulmonale",
        youtube: "NwmMdyeV8og",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/cor-pulmonale-rv-overload-final.mp4?_t=1514825040",
        id: "12.7",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
      {
        title: "Hypertrophic Obstructive Cardiomyopathy",
        youtube: "HH1V6D-TDfo",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hocm-final.mp4?_t=1514825043",
        id: "12.8",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
  {
    title: "Transesophageal Echo (TEE)",
    thumbnail: require("./assets/png2/038-esophagus.png"),
    id: 13,
    pages: [
      {
        title: "How to Scan",
        youtube: "IU3TRfnO7tI",
        id: "13.1",
        captionText:
          "Rob Arntfield, MD, FRCPC and Atul Jaidka, MD, PGY2 takes us through the fundamentals of performing a transesophageal echocardiography (TEE). This video uses a live demonstration to introduce probe manipulation, how to obtain different views, and how to landmark for these different views. The techniques being presented will help you in performing goal-directed TEE in critically ill patients, whether it be for visualizing valvular disorders or during a resuscitation. Make sure to check out the image acquisition screencasts afterwards to learn how to interpret your TEE findings!",
      },
      {
        title: "Left Atrial Appendage Thrombus",
        youtube: "0kCCupXD-4g",
        id: "13.2",
        captionText:
          "A common question asked when a patient has an embolic event (i.e. stroke, mesenteric ischemia, femoral artery occlusions) is whether there was a cardiac source of embolus. In this screencast done by Dr. Vince Lau, we will go over the principles of left atrial appendage interrogation using TEE, looking for a nidus for clot (spontaneous echo contrast, low flow stasis).",
      },
      {
        title: "Infective Endocarditis",
        youtube: "PbKkBgGjI4E",
        id: "13.3",
        captionText:
          "One of the concerns associated with confirmed bacteremia is the presence of endocarditis as a consequence of the bacteremia, or even as the source. This is especially true of the organisms grown on blood cultures have a preponderance to form vegetations on cardiac valves. Please enjoy this screencast by Dr. Vince Lau on infective endocarditis.",
      },
      {
        title: "Veno-Venous ECMO Initiation",
        youtube: "pwaBrjILEFE",
        id: "13.4",
        captionText:
          "Veno-venous ECMO use is increasing at many centres.  Seldom an elective procedure and typically done on patients too sick to transport, bedside guidance of ECMO cannula insertion is essential. As this tutorial (by Dr. Vince Lau) highlights, point-of-care TEE can be invaluable in these circumstances in providing real time guidance of guidewire and cannula positioning.  Further, adjustments of the cannula’s outflow port can be done using color Doppler to optimize the yield of the intervention.",
      },
      {
        title: "Shunts and Bubble Study",
        youtube: "i8J1BxGM8wo",
        id: "13.5",
        captionText:
          "Do you have a refractory hypoxemic patient who does not respond to increases in FiO2? Worried about a shunt causing said hypoxemia? Or presence of a septal defect causing paradoxical emboli? In this screencast done by Dr. Vince Lau, we will go over the principles of intra-atrial septal interrogation, performance of a bubble study, and calculating a shunt fraction (Qp:Qs).",
      },
      {
        title: "Harlequin Syndrome",
        youtube: "GXTTihsUd8o",
        id: "13.6",
        captionText:
          "A visual (no sound to this) tour of an interesting case of ECMO and its complexities managed in the ICU with the assistance of point-of-care transesophageal echo.",
      },
    ],
  },
  {
    title: "Transcranial Doppler",
    thumbnail: require("./assets/png2/060-brain.png"),
    id: 14,
    pages: [
      {
        title: "Vasospasm and Cerebral Circulatory Arrest",
        youtube: "sWR9a3tBZVY",
        video:
          "https://westernsono.ca/wp-content/uploads/2016/06/tcd-camtasia.mp4?_t=1514825049",
        id: "14.1",
        captionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
      },
    ],
  },
];

export { categoryDatabase, learnDatabase };
