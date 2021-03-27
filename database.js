const categoryDatabase = 
  {
    "Cardiac": require("./assets/png2/040-heart.png"),
    "Lung and Pleura":require("./assets/png2/042-lungs.png"),
    "Abdominal":require("./assets/png/038-abs.png"),
    "Genitourinary":require("./assets/png2/032-kidney.png"),
    "Procedural": require("./assets/png/injection.png"),
    "OB/Gyn": require("./assets/png2/029-pelvic-area.png"),
    "Head and Neck": require("./assets/png/046-neck.png"),
    "Soft Tissue MSK": require("./assets/png2/002-shoulder.png"),
    "Trauma": require("./assets/png/injury.png"),
    "Pediatric":require("./assets/png/brothers.png"),
    "Vascular":require("./assets/png/049-blood.png")
  }


const learnDatabase = [
  {
    title: "Fundamentals",
    description:'',
    thumbnail: require("./assets/png/fundamentals.png"),
    id: 1,
    pages: {
      "Ultrasound Basics":[
        {
          title: "Ultrasound Physics",
          id: "1.1",
          captionText:"An understanding of ultrasound physics (groan) is a necessary evil in the quest to applying and mastering ultrasound at the point of care. Begin this module to start your POCUS journey!",
          headerImage:require('./assets/png/movement.png')
        },
        {
          title: "Probe Types",
          id: "1.2",
          captionText:"",
          youtube:"pending"
        },
        {
          title: "Probe Movements",
          id: "1.3",
          captionText:"",
          youtube:"pending"
        },
        {
          title: "Controls on LHSC Machines",
          id: "1.4",
          captionText:"",
          youtube:"pending"
        },
        {
          title: "Ultrasound Machine Maintenance",
          id: "1.5",
          captionText:"",
          youtube:"pending"
        },
      ],
      "Advanced":[
        {
          title: "Principles of Doppler Ultrasound",
          youtube: "mwr-wF_IMeU",
          id: "1.6",
          captionText:
            "Learn the principles of Doppler ultrasound in this 20-minute screencast from Dr. Katie Wiskar. This tutorial covers basic ultrasound physics, different Doppler modes, and multiple examples from various POCUS applications.",
        },
      ],
    },
  },
  {
    title: "Lung and Pleura",
    thumbnail: require("./assets/png2/042-lungs.png"),
    description:'Still using the Chest X-ray to look for acute causes of dyspnea? Lung ultrasound (or LUS) has been shown to have a diagnostic accurary that is not only higher than traditional chest radiography, but similar to chest CT scans. LUS can be used to rapidly identify pneumonia, pulmonary edema, pneomothorax, characterize pleural effusions and even guide therapy by locating a safe needle site for drainage. This section will address the main topics of lung and pleural ultrasound including relevant physics, signs of thoracic pathology, A lines, B lines and much more.',
    id: 2,
    pages: {
      "Fundamentals":[
        {
          title: "Basics and Physics",
          youtube: "1V1r3MMcjQU",
          id: "2.1",
          captionText:
            "An introduction to the physics involved in ultrasound imaging, some knobology and how to perform an ultrasound exam. The majority of this material will be review from the Fundamentals Module, within the added context of the lung ultrasound examination. By Dany Burke MD FRCPC Critical Care Western",
        },
        {
          title: "Artifacts",
          youtube: "bXi2ywmQHzg",
          id: "2.2",
          captionText:
            "A normal lung is filled with air and cannot be visualized anatomically using ultrasound. However, the distinct ways ultrasound beams interact with air and pulmonary structures gives us a ton of insight on the underlying anatomy and pathophysiology. This screencast offers a description and explanation of the common artifacts seen and used in lung ultrasound. By Dany Burke MD FRCPC Critical Care.",
        },
        {
          title: "Image Acquisition",
          youtube: "aYSoYXqWJ5A",
          id: "2.3",
          captionText:
            "The standard views for image acquisition of solid organs are typically dictated by what windows are possible based on external anatomy and surrounding structures.  The lungs, however, can be imaged from anywhere on the thorax.  This boundless opportunity can create confusion and, possibly, crippling anxiety as to which portions of the lungs deserve to be imaged.  The idea is, much like the way we auscultate, to take a representative sample from major lung zones and then synthesize a conclusion – clear lungs, unilateral lung disease, bilateral lung disease, etc that permits a rapid differential diagnosis for the respiratory failure that confronts you.  Efficiency and accuracy are essential. By Dr. Robert Arntfield MD FRCPC",
        },
        {
          title: "Image Interpretation",
          youtube: "uv6zI4QHYss",
          altVideo: "Y9Hv84m3kOM",
          id: "2.4",
          captionText:
            "Are you able to find the lungs and pleura on ultrasound but need a refresher on how to decode the various findings that you might see?  Lung ultrasound (more than pleural) is an artifact driven field and this tutorial seeks to educate and demystify the lung findings of A lines, B lines and sliding lung as well as the classic pleural findings of consolidation and effusion. By Dr. Robert Arntfield MD FRCPC.",
        },
      ],
      "Pathologies":[
        {
          title: "Pneumothorax",
          youtube: "y9GIZ_Fonus",
          id: "2.5",
          captionText:
            "Ultrasound plays a pivotal role in the diagnosis of pneumothorax. This screencast reviews the major findings you will see on a patient with pneumothorax, as well as the (many) pitfalls to avoid to prevent misinterpretation.",
        },
        {
          title: "Pleural Effusion",
          youtube: "hLhRKo6llMA",
          id: "2.6",
          captionText:
            "Lung ultrasound is a useful tool that can characterize the echogenicity and volume of pleural effusions, thereby guiding therapy. Pleural effusions come with many signs: Spine, Quad, Sinusoid, Plankton and Jellyfish. Take a deep dive and learn what all these signs mean in this comprehensive screencast!",
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
            "This lesson will briefly review the BLUE protocol then test your skills with 5 highly informative cases from Emergency Medicine. ",
        },
      ],
      "Advanced Applications":[
        {
          title:
            "Plerual Effusion and Consolidation - Chicken or the egg?",
          youtube: "l-BX3wVhDIg",
          id: "2.9",
          captionText:
            "Interpreting a consolidation pattern of the lung with a concomitant pleural effusion can sometimes be challenging. Is it a pneumonia pattern with secondary para-pneumonic effusion, or is there a pleural effusion with secondary compressive atelectasis? Does size of each matter, or help us with the diagnosis? Are there any other secondary signs that will help us rule in an infectious process? The answer is yes! Please check out this great screencast by Dr. Yves Landry, former critical care fellow from Western University on comparing pleural effusion to consolidation size, and secondary signs of an infectious process.",
        },
        {
          title: "Common Pitfalls in LUS",
          youtube: "58kS_jrxiMI",
          id: "2.10",
          captionText:
            "This screencast reviews common mistakes in lung ultrasound image acquisition, interpretation, and clinical integration. It aims to sharpen your lung POCUS skills and help you unlock the true potential of this powerful diagnostic modality. By Dr. Katie Wiskar, Internal Medicine.",
        },
        // {
        //   title: "Alveolar Consolidation and Shred Sign",
        //   youtube: "0qY9AghmFUs",
        //   id: "2.11",
        //   captionText:
        //     "Sliding lung, A lines and B lines – easy enough, right?  But what about the spectrum of alveolar consolidation and the so called “shred” sign.  This review by Yogesh Lala, MD, FRCPC – alumnus of our critical care program, has got YOU covered.",
        // },
        // {
        //   title: "Loss of Lung Sliding: Beyond Pneumothorax",
        //   youtube: "2AulDYEjLZs",
        //   video:
        //     "https://westernsono.ca/wp-content/uploads/2015/12/untitled.mp4?_t=1514825048",
        //   id: "2.12",
        //   captionText:
        //     "All that slides is NOT pneumothorax – we know this. When lung sliding is lost, however, the importance of this and what this could mean, is less certain. To better understand loss of lung sliding, please enjoy this excellent screencast by Dr. Paul Lee from the internal medicine program at Western University.",
        // },
        {
          title: "Acute Respiratory Distress Syndrome",
          youtube: "rAC9Y28zpG8",
          id: "2.13",
          captionText:
            "Still puzzled about the different patterns of B-lines and consolidation? Watch this case-based tutorial on differentiating between the various diffuse parenchymal diseases. Presented by Ann George, MD",
        },
        {
          title: "Respiratory Failure",
          youtube: "q_-F4fHRv5g",
          id: "2.14",
          captionText:
            "Real-life example of respiratory failure in the general medicine ward, and how a POCUS consultation can help. Dr. Lucas Ciprietti, Internal Medicine, takes you through how a POCUS consult influenced the formation of a differential diagnosis, choice of imaging, and choice of treatment in a patient initially presenting as CHF exacerbation.",
        },
      ]
    },
  },
  {
    title: "Echocardiography",
    thumbnail: require("./assets/png2/040-heart.png"),
    description:'The point of care ultrasound revolution has brought a renaissance to providers of resuscitative care: No longer is determination of shock something that requires invasive monitoring (e.g. Swan Ganz) or an ICU admission. Instead, with good image acquisition and image interpretation skills, point of care echo can answer this question anywhere in the hospital – the ED, the ward, the ICU and, the CT scanner or the cafeteria.',
    id: 3,
    pages: {
      "Basic Echo":[
        {
          title: "Essential Views and Techniques",
          youtube: "pending",
          id: "3.1",
          captionText:
            "",
        },
        {
          title: "Approach to difficult image acquisition",
          youtube: "_9GG3fiZpGs",
          id: "3.2",
          captionText:
            "This tutorial reviews methods for identifying the presence or absence of acoustic windows across the parasternal, apical and subcostal windows.  Avoid wondering if another scanner could have obtained 'better' images.  This is essential for resilience as a point-of-care scanner in the ICU!",
        },
        {
          title: "Assessment of LV Function",
          youtube: "YB0oQz1myC4",
          id: "3.3",
          captionText:
            "Assessing LV function at the point of care is typically used for patients in shock. Compromised LV function may either be the cause or may significantly complicate shock management. The “eyeball” method for addressing LV function is acceptable and even necessary in the point of care setting. Exact determination of ejection fraction (EF) is time consuming and the additional investment in acquiring a more “precise” number does not typically provide incrementally better or more detailed care. ",
        },
        {
          title: "Assessment of the RV",
          youtube: "pending",
          id: "3.4",
          captionText:
            "",
        },
        {
          title: "Pericardial Effusion",
          youtube: "pending",
          id: "3.5",
          captionText:
            "",
        },
        {
          title: "Inferior Vena Cava",
          youtube: "pending",
          id: "3.6",
          captionText:
            "",
        },
        {
          title: "Basic Valve assessment",
          youtube: "pending",
          id: "3.7",
          captionText:
            "",
        },
      ],
      "Advanced Echo":[
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
        {
          title: "McConnell's Sign",
          youtube: "1omAV8z3fmA",
          id: "3.11",
          captionText:
            "Michèle D'Amour from The University of Montreal takes us on a tour of McConnell's Sign through an illustrative case.",
        },
        {
          title: "Diastology",
          youtube: "683tSr582gI",
          id: "3.12",
          captionText:
            "This video is a distilled-down 'why' and 'how' of diastolic assessment for point-of-care ultrasound.  Brought to you by Western's acute care ultrasound fellows Mathilde Gaudreau-Simard and Zain Burhani.  Mathilde and Zain put this bloated topic on a diet and bring you the approach we use here at Western and arm you with the techniques to apply this in your patients today.",
        },
      ],
    },
  },
  {
    title: "Procedures",
    thumbnail: require("./assets/png/injection.png"),
    description:'',
    id: 4,
    pages: {
      "Vascular Access":[
        {
          title: "Peripheral IV Insertion",
          youtube: "hlGFZJYWIgw",
          id: "4.1",
          captionText: "How many times have you had a patient that needs IV access, but none can be obtained by traditional visualization or even blind technique, even by the most experienced operators (i.e. the IV team)? What do you do next? Attempt a central line instead? Not necessarily! Instead, much like arterial lines, you can use ultrasound (US) to help with venous cannulation.",
        },
        {
          title: "Central Vascular Access",
          youtube: "pending",
          id: "4.2",
          captionText: "",
        },
        {
          title: "Subclavian and Peripheral Arterial Access",
          youtube: "pending",
          id: "4.3",
          captionText: "",
        },
        {
          title: "Sterile Technique for US Guided Procedures",
          youtube: "BIZJdzqgF88",
          id: "4.4",
          captionText: "Dr Jeff Granton (Critical Care/Anesthesia) demonstrates the technique and pointers on becoming maximally sterile for an invasive procedure (such as an ultrasound guided central venous catheter insertion)",
        },
      ],
      "Free Fluid Drainage":[
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
        
      ],
      "Nerve Blocks":[
        {
          title: "Nerve Blocks for Hip Fractures",
          youtube: "7RKXLAqHaOk",
          id: "4.9",
          captionText: "",
        },
      ],
      "Others":[
        {
          title: "Fracture Management",
          youtube: "9Dd25I1b4_I",
          id: "4.6",
          captionText: "",
        },
      ]
    }
  },
  {
    title: "Genitourinary",
    thumbnail: require("./assets/png2/031-kidney-1.png"),
    description:'',
    id: 5,
    pages: {
      "Renal":[
        {
          title: "Anatomy and Sono-Anatomy",
          youtube: "llUZeU-NUQo",
          id: "5.1",
          captionText:
            "In this first part of the renal ultrasound module, Dr. Behzad Hassani introduces you to the fundamentals of renal and bladder ultrasound: its indications, pertinent anatomy, normal sonographic findings and the technique.",
        },
        {
          title: "Hydronephrosis",
          youtube: "RLxcOUQZ8G8",
          id: "5.2",
          captionText:
            "The primary goal of renal ultrasound is the diagnosis and classification of hydronephrosis. In this screencast, Dr. Hassani will review the evidence for renal POCUS in the diagnosis of hydro, go into detail about the various sonographic findings and help you classify the findings into mild, moderate and severe categories. ",
        },
        {
          title: "Hydronephrosis Mimics",
          youtube: "p4qJzOuYgb8",
          id: "5.3",
          captionText:
            "Proper identification and diagnosis of hydronephrosis can be tricky for newcomers, as there are many sonographic mimics to the condition. In this screencast, we will discuss the pearls and pitfalls of performing a renal ultrasound study and learn how to differentiate between the confounders of hydronephrosis.",
        },
        {
          title: "Stones and Masses",
          youtube: "PGBuxlmTta8",
          id: "5.4",
          captionText:
            "This final screencast in the series will introduce you to the more advanced uses of renal POCUS, that is the identification of renal and bladder calculi and masses.",
        },
      ],
      "Bladder":[
        {
          title: "Bladder Scanning",
          youtube: "oun74cJR6QE",
          id: "5.5",
          captionText:
            "",
        },
      ],
      "Testicular":[
        {
          title: "Scrotal Ultrasound",
          youtube: "xiVnNa2hCjY",
          id: "5.6",
          captionText:
            "Ultrasound has emerged as a preferred modality for evaluation of acute scrotal pain. Point-of-care ultrasound can facilitate diagnosis of most testicular pathologies, with particular emphasis on the emergent pathologies that threaten the viability of the testicle. This screencast serves as in introduction to the world of scrotal ultrasound, with discussions of its indications, scanning technique, and pertinent anatomy. ",
        },
        {
          title: "Testicular Torsion and Other Pathologies",
          youtube: "BXaCUYnM9X0",
          id: "5.7",
          captionText:
            "In this screencast, we will go over the most common pathologies you may encounter on scrotal ultrasound, with particular emphasis on interpreting findings for testicular torsion. ",
        },
      ]
    }
  },
  {
    title: "Abdomen",
    thumbnail: require("./assets/png/038-abs.png"),
    id: 6,
    pages: {
      "FAST Exam":[
        {
          title: "FAST Exam Part 1: Approach",
          youtube: "orL-bSlwBTA",
          id: "6.1",
          captionText:
            "",
        },
        {
          title: "FAST Exam Part 2: Algorithm and Pitfalls",
          youtube: "E6J06ta07QA",
          id: "6.2",
          captionText:
            "",
        },
      ],
      "Aorta":[
        {
          title: "Abdominal Aorta",
          youtube: "HAX7d3EMveg",
          id: "6.4",
          captionText:
            "Ultrasound has been shown to accurately identify both aneurysmal and normal abdominal aortas. Learn all about this core emergency medicine skill in this 12 minute screencast. By Dr. Drew Thompson.",
        },
      ],
      "Gallbladder":[
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
      "Bowel":[
        {
          title: "Small Bowel Obstruction",
          youtube: "X_Ui91kjfag",
          id: "6.3",
          captionText:
            "Is POCUS for SBO even a thing? Is it high time to say goodbye to X-rays? In this 10 minute screencast, Dr. Heather Hames explains the evidence behind using bedside ultrasound for small bowel obstructions, as well as how to generate and interpret your images.",
        },
      ]
    }
  },
  {
    title: "OB/Gyn",
    thumbnail: require("./assets/png2/029-pelvic-area.png"),
    description:'Point-of-care pelvic ultrasound is a fundamental exam performed for women of reproductive age presenting with abdominal pain, vaginal bleeding or syncope, routinely done in emergency departments and obstetrical clinics. Combined with a detailed history, physical examination and serum beta-hCG level, ultrasound is central to the accurate assessment and management of such patients. Point of care evaluations have been shown to have excellent accuracy with a sensitivity of 99.3% for detecting IUP and ruling out ectopic pregnancies. Bedside ultrasound has also been shown to reduce length of stay in the ED, thereby increasing overall efficiency. Learn all about this valuable skill in the following lectures!',
    id: 7,
    pages:{
      "Fundamentals":[
        {
          title: "Introduction to Pelvic Ultrasound and the Trans-Abdominal Technique",
          youtube: "jgyYftAAQgk",
          id: "6.5",
          captionText:
            "In this screencast, Dr. Drew Thompson introduces you to the indications and the pertinent anatomy of pelvic ultrasound, as well as the trans-abdominal approach for examining the female pelvis at the bedside. ",
        },
        {
          title: "Trans-Vaginal Technique",
          youtube: "By8TPKMRfdc",
          id: "6.6",
          captionText:
            "While the transabdominal technique should always be your first approach, in many cases a more detailed assessment is required to call a determinant study. This is where the transvaginal approach comes in. Learn all about the technique, advantages/disadvantages, pearls, pitfalls, and more in this 10 minute screencast. By Dr. Drew Thompson, Division of Emergency Medicine.",
        },
        {
          title: "Defining a Positive OB Study",
          youtube: "Ww-_VGPlqdo",
          id: "6.7",
          captionText:
            "What clinical questions are we are asking in the pelvic exam and what exactly are we looking for sonographically? This module will introduce you to the interpretation of the bedside pelvic ultrasound exam, define the positive OB study, and reinforce the criteria for an intrauterine pregnancy. By Dr. Drew Thompson, Division of Emergency Medicine.",
        },
      ],
    }
  },
  {
    title: "Miscellaneous",
    thumbnail: require("./assets/png/049-blood.png"),
    id: 8,
    pages: {
      "DVT":[
      {
        title: "DVT",
        youtube: "kenAPbRVMl0",
        id: "8.1",
        captionText:
          "",
      },
      {
        title: "Lower Extremity DVT",
        youtube: "-HERC2yB0Yk",
        id: "8.2",
        captionText:
          "Sean Spence (PGY-5 Critical Care Medicine, University of Calgary) explains how to conduct a DVT exam. He covers lower extremity vascular anatomy relevant to the DVT exam and then wraps up by demonstrating a DVT study done by himself. There are examples of both a normal study and a positive finding.",
      },
      {
        title: "Solid Organ Doppler Assessment of Venous Congestion",
        youtube: "e_bIVvFV6jE",
        id: "8.3",
        captionText:
          "In this 15-minute video, Dr Katie Wiskar covers an introduction to solid organ doppler assessment of venous congestion - the cool new kid on the POCUS block when it comes to volume status.",
      },
    ],
    "Ocular":[
      {
        title: "Common Pathologies",
        youtube: "dW8F_sMojKk",
        id: "8.4",
        captionText:
          "",
      },
    ],
    "Transcranial Doppler":[
      {
        title: "Vasospasm and Cerebral Circulatory Arrest",
        youtube: "sWR9a3tBZVY",
        video:
          "https://westernsono.ca/wp-content/uploads/2016/06/tcd-camtasia.mp4?_t=1514825049",
        id: "8.5",
        captionText:
          "",
      },
    ],
  }
 },
 {
    title: "Critical Care Hemodynamics",
    thumbnail: require("./assets/png/044-blood.png"),
    description:"The beauty of point-of-care echo is that we can generally answer our most pressing clinical questions (such as: gross LV function, RV size, IVC size and variability and pericardial effusion) rapidly without relying on measurements, or advanced “knobs” related to spectral Doppler.  The literature and our clinical experience reflect that this approach is accurate and improves confidence and speed to diagnosis.\n\nThere ARE however times when the extensive additional training and commitment to learning these skills does pay off at the point-of-care.  This could be in the resus bay in the ED, the peri-operative milieu or in the ICU. In this series of case presentations, Dr. Vincent Lau, PGY5 in critical care at Western University, articulately and visually takes us through several superb cases where one can only be inspired to possess these advanced skills.  The cases are presented in order of increasing complexity and frequently refer to the use of stroke volume determination.",
    id: 9,
    pages: {
      "":[
      {
        title: "Hypovolemic Shock",
        youtube: "THJjNqhfi54",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hypovolemia-final.mp4?_t=1514825045",
        id: "9.1",
        captionText:
          "",
      },
      {
        title: "Distributive Shock",
        youtube: "OAtiIY_Apco",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/vasoplegia-final.mp4?_t=1514825047",
        id: "9.2",
        captionText:
          "",
      },
      {
        title: "Cardiogenic Shock",
        youtube: "-sYW0xNLqkA",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/cardiogenic-shock-final.mp4?_t=1514825037",
        id: "9.3",
        captionText:
          "",
      },
      {
        title: "Sepsis with CHF",
        youtube: "MiV8lrtdKEU",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/sepsis-chf-final.mp4?_t=1514825046",
        id: "9.4",
        captionText:
          "",
      },
      {
        title: "Calcium Channel Blocker Overdose",
        youtube: "dXEGVc-JHxw",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/ccb-od-final.mp4?_t=1514825038",
        id: "9.5",
        captionText:
          "",
      },
      {
        title: "Dimensionless Index",
        youtube: "UFDpp1WtZjQ",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/dimensionless-index-final.mp4?_t=1514825042",
        id: "9.6",
        captionText:
          "",
      },
      {
        title: "Cor Pulmonale",
        youtube: "NwmMdyeV8og",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/cor-pulmonale-rv-overload-final.mp4?_t=1514825040",
        id: "9.7",
        captionText:
          "",
      },
      {
        title: "Hypertrophic Obstructive Cardiomyopathy",
        youtube: "HH1V6D-TDfo",
        video:
          "https://westernsono.ca/wp-content/uploads/2015/11/hocm-final.mp4?_t=1514825043",
        id: "9.8",
        captionText:
          "",
      },
    ],}
  },
  {
    title: "Transesophageal Echo",
    thumbnail: require("./assets/png2/038-esophagus.png"),
    description:"For most point-of-care needs, one can do both basic and more advanced applications of echocardiography with transthoracic scanning. However, there ARE times whereby having ability to perform transesophageal echocardiography (TEE) can be extremely helpful in the point-of-care. This is especially true when windows are hard to obtain in transthoracic echo (TTE) during a technically difficult study, or when a more sensitive and specific modality is required to help with various diagnoses (i.e. endocarditis, cardiac source of emboli, shunts, dissection), or during procedural guidance (i.e. veno-venous extracorporeal membrane oxygenation insertion). In this series of case presentations Dr. Rob Arntfield, MD, FRCPC and Dr. Vincent Lau, critical care medicine alumnus and critical care ultrasound fellow at Western University, introduces various advanced concepts with regards to performing critical care TEEs.",
    id: 10,
    pages: {
      "":[
      {
        title: "How to Scan",
        youtube: "IU3TRfnO7tI",
        id: "10.1",
        captionText:
          "Rob Arntfield, MD, FRCPC and Atul Jaidka, MD, PGY2 takes us through the fundamentals of performing a transesophageal echocardiography (TEE). This video uses a live demonstration to introduce probe manipulation, how to obtain different views, and how to landmark for these different views. The techniques being presented will help you in performing goal-directed TEE in critically ill patients, whether it be for visualizing valvular disorders or during a resuscitation. Make sure to check out the image acquisition screencasts afterwards to learn how to interpret your TEE findings!",
      },
      {
        title: "Left Atrial Appendage Thrombus",
        youtube: "0kCCupXD-4g",
        id: "10.2",
        captionText:
          "A common question asked when a patient has an embolic event (i.e. stroke, mesenteric ischemia, femoral artery occlusions) is whether there was a cardiac source of embolus. In this screencast done by Dr. Vince Lau, we will go over the principles of left atrial appendage interrogation using TEE, looking for a nidus for clot (spontaneous echo contrast, low flow stasis).",
      },
      {
        title: "Infective Endocarditis",
        youtube: "PbKkBgGjI4E",
        id: "10.3",
        captionText:
          "One of the concerns associated with confirmed bacteremia is the presence of endocarditis as a consequence of the bacteremia, or even as the source. This is especially true of the organisms grown on blood cultures have a preponderance to form vegetations on cardiac valves. Please enjoy this screencast by Dr. Vince Lau on infective endocarditis.",
      },
      {
        title: "Veno-Venous ECMO Initiation",
        youtube: "pwaBrjILEFE",
        id: "10.4",
        captionText:
          "Veno-venous ECMO use is increasing at many centres.  Seldom an elective procedure and typically done on patients too sick to transport, bedside guidance of ECMO cannula insertion is essential. As this tutorial (by Dr. Vince Lau) highlights, point-of-care TEE can be invaluable in these circumstances in providing real time guidance of guidewire and cannula positioning.  Further, adjustments of the cannula’s outflow port can be done using color Doppler to optimize the yield of the intervention.",
      },
      {
        title: "Shunts and Bubble Study",
        youtube: "i8J1BxGM8wo",
        id: "10.5",
        captionText:
          "Do you have a refractory hypoxemic patient who does not respond to increases in FiO2? Worried about a shunt causing said hypoxemia? Or presence of a septal defect causing paradoxical emboli? In this screencast done by Dr. Vince Lau, we will go over the principles of intra-atrial septal interrogation, performance of a bubble study, and calculating a shunt fraction (Qp:Qs).",
      },
      {
        title: "Harlequin Syndrome",
        youtube: "GXTTihsUd8o",
        id: "10.6",
        captionText:
          "A visual (no sound to this) tour of an interesting case of ECMO and its complexities managed in the ICU with the assistance of point-of-care transesophageal echo.",
      },
    ],}
  },
];

export { categoryDatabase, learnDatabase };
