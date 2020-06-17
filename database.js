const firebaseConfig = {
    apiKey: "AIzaSyDlBJzJf4SmjoSQ0aqj_7yeMoK2Z5rZzQ4",
    authDomain: "pocus-9d28e.firebaseapp.com",
    databaseURL: "https://pocus-9d28e.firebaseio.com",
    projectId: "pocus-9d28e",
    storageBucket: "pocus-9d28e.appspot.com",
    messagingSenderId: "645095278671",
    appId: "1:645095278671:web:f49fbc1cd958acfd6c023a",
    measurementId: "G-LYVKTZXSZ9"
  };

const database = [
    {
        "title": "Renal Image Acquisition", 
        "id":"1",
        "category": "Abdomen",
        "type": "rapidreview",
        "tags": ['renal', 'kidney', 'Hydronephrosis'],
        "video": 'Zym9AN1rDeM',
        "orientation": {
            "probe": 'Curvilinear',
            "preset": 'Abdominal',
            "patient_position": 'Supine',
            "probe_position": 'Mid-axillary Line at the level of the Xiphoid process',
            "areas_of_interest": 'Renal Sinus',
        },
        "associated_pages": [
            {
                title:'Hydronephrosis',
                id:'19'
            },
            {
                title:'Renal Calculus',
                id:'20'
            },
            {
                title:'Renal Cyst, Mass',
                id:'21'
            },          
        ],
        "body": [
            {
                "header": 'Image Acquisition',
                "content": [
                    'When scanning a patient with a suspected renal pathology, consider scanning the unaffected side first to obtain a baseline image.',
                    'Assess both the longitudinal and transverse views by rotating the transducer 90 degrees.',
                    'Tilt or fan the transducer superiorly and inferiorly to assess the superior and inferior poles of the kidney.',
                ],
                "image": require('./assets/renalOverview1.png')
            },            
        ]
    },
    {
        "title": "Biliary Image Acquisition",
        "id":"2", 
        "category": "Abdomen",
        "type": "rapidreview",
        "tags": ['Gallbladder', 'Liver', 'Bile ducts'],
        "video": 'vf_XBY7a80A',
        "orientation": {
            "probe": 'Curvilinear',
            "preset": 'Abdominal',
            "patient_position": 'Supine\nLeft lateral Decubitus',
            "probe_position": 'Inferior border of the costal margin lateral to the midline on the Right side',
            "areas_of_interest": 'Gallbladder',
        },
        "associated_pages": [
            {
                title:'Cholelithiasis',
                id:'16'
            },
            {
                title:'Common Bile Duct dilation',
                id:'17'
            },
            {
                title:'Acute Cholecystitis',
                id:'18'
            },          
        ],
        "body": [
            {
                "header": 'Image Acquisition',
                "content": [
                    'The most important findings when performing point-of-care biliary ultrasound are: Cholelithiasis, Sonographic Murphy\'s sign, Gallbladder wall thickening, Pericholecystic fluid, CBD dilation.',
                    'Instructing the patient to hold in a deep breath, or having the patient “puff out” their abdomen helps descend the gallbladder into view.',
                    'From the starting position, slide the probe laterally and inferiorly along the costal margin until the gallbladder comes into view.',
                    'In the longitudinal plane, the thick-walled portal vein and gallbladder often have an “exclamation point” appearance',
                ],
                "image": require('./assets/biliaryOverview.png')
            }, 
            {
                "header": '',
                "content": [
                    'The CBD is located just anterior to the portal vein. The portal triad (containing the portal vein, hepatic artery and CBD) is often called the “Mickey Mouse” sign. Using the zoom function or color doppler can help distinguish the different components of the triad.',
                    'The diameter of the CBD is measured from inner wall to inner wall in either a transverse or longitudinal plane at the point where the hepatic artery courses between the portal vein and CBD, and is normally < 6 mm.',
                ],
                "image": require('./assets/biliaryTriad.png')
            }, 
        ]
    },
    {
        "title": "Abdominal Aorta Image Acquisition", 
        "id":"3",
        "category": "Abdomen",
        "type": "rapidreview",
        "tags": ['Aorta', 'AAA',],
        "video": 'aTQe17jUQNc',
        "orientation": {
            "probe": 'Curvilinear',
            "preset": 'Abdominal',
            "patient_position": 'Supine',
            "probe_position": 'Inferior to the costal margin at the midline',
            "areas_of_interest": 'Abdominal Aorta',
        },
        "associated_pages": [
            {
                title:'Abdominal Aortic Aneurysm',
                id:'13'
            },
            {
                title:'Aortic Dissection',
                id:'14'
            },
            {
                title:'Intra-aortic device placement',
                id:'15'
            },          
        ],
        "body": [
            {
                "header": 'Image Acquisition',
                "content": [
                    'To find the aorta, the spine is a useful landmark. The aorta lies just anterior to the spine, slightly to the left of the midline.',
                    'Once the aorta is identified, slide the transducer inferiorly on the abdominal wall, allowing for contiguous imaging of the aorta.',
                    'Measurement of the aortic diameter should be obtained in both longitudinal and transverse planes.',
                ],
                "image": require('./assets/aorta.png')
            }, 
            {
                "header": '',
                "content": [
                    'If "images" cannot be obtained due to bowel gas, drains or scarring, then the aorta can also be imaged laterally from the left or right flank. Place the transducer on the mid-axillary line',
                ],
                "image": require('./assets/aorta2.png')
            }, 
        ]
    },
    {
        "title": "Parasternal Views",
        "id":"4",
        "alt":['PLAX', 'PSAX'],
        "category": "Cardiac",
        "type": "rapidreview",
        "tags": [],
        "video":'pBQeUxcU8Wk',
        "orientation": {
            "probe": 'Phased Array',
            "preset": 'Cardiac',
            "patient_position": 'Supine\nLeft Lateral Decubitus',
            "probe_position": 'Left of the sternum, 3rd/4th Intercostal space',
            "areas_of_interest": 'LV, LA, RVOT, Aorta, Aortic Valve, IVS',
        },
    },
    {
        "title": "Apical Four Chamber View",
        "id":"5",
        "alt": ['a4c'],
        "category": "Cardiac",
        "type": "rapidreview",
        "tags": [],
        "video":'vFRKYDKYGr8',
        "orientation": {
            "probe": 'Phased Array',
            "preset": 'Cardiac',
            "patient_position": 'Ideally Left Lateral Decubitus',
            "probe_position": 'LV Apex',
            "areas_of_interest": 'IVS, 4 Chambers, Mitral valve, Tricuspid valve',
        },
    },
    {
        "title": "Subcostal View",
        "id":"6",
        "alt":['IVC','Subxiphoid view'],
        "category": "Cardiac",
        "type": "rapidreview",
        "tags": [],
        "video":'_4jgrIQh59M',
        "orientation": {
            "probe": 'Phased Array',
            "preset": 'Cardiac',
            "patient_position": 'Supine',
            "probe_position": 'Xiphoid process',
            "areas_of_interest": '',
        },
    },
    {
        "title": "BLUE Protocol Image Acquisition",
        "id":"7",
        "category": "Lung",
        "type": "rapidreview",
        "tags": [],
        "video":'FS9FztSI460',
        "orientation": {
            "probe": 'Phased Array',
            "preset": 'Lung or Abdominal',
            "patient_position": 'Supine',
            "probe_position": '',
            "areas_of_interest": '',
        },
    },
    {
        "title": "Lumbar Puncture",
        "id":"8",
        "category": "Procedural",
        "type": "rapidreview",
        "tags": [],
        "video":'',
        "orientation": {
            "probe": '',
            "preset": '',
            "patient_position": '',
            "probe_position": '',
            "areas_of_interest": '',
        },
    },
    {
        "title": "FAST Exam Image Acquisition",
        "id":"9",
        "category": "Trauma",
        "type": "rapidreview",
        "tags": [],
        "video":'3gRz01WIrgc',
        "orientation": {
            "probe": 'Curvilinear',
            "preset": 'Abdominal',
            "patient_position": 'Supine',
            "probe_position": 'Mid-axillary line at level of Xiphoid process',
            "areas_of_interest": 'Interface between kidney and liver/spleen, Bladder, Pouch of Douglas',
        },
    },
    {
        "title": "Pelvic Exam Image Acquisition",
        "id":"10",
        "category": "Pelvis",
        "type": "rapidreview",
        "tags": [],
        "video":'lj_ApJwf3w4',
        "orientation": {
            "probe": 'Curvilinear',
            "preset": 'Abdominal',
            "patient_position": 'Supine',
            "probe_position": '',
            "areas_of_interest": 'Uterus',
        },
    },
    {
        "title": "LV - Severely Depressed",
        "id":"11",
        "category": "Cardiac",
        "type": "image",
        "tags": [],
        "images":[
           {
               url: "https://westernsono.ca/wp-content/uploads/2020/02/1_A4C_2D_1.webp",
               contributor:'John Doe, MD, Emergency Medicine',
               title:'Severe LV Failure',
               caption:'60 yo F, presenting with [], note the X,Y,Z features',
           },
           {
                url:"https://westernsono.ca/wp-content/uploads/2020/02/3_PSLA_2D.webp",
                contributor:'Michael Scott, PGY-4, Critical Care',
                title:'LV failure in some context',
                caption:'72 yo M, presenting with [], note the X,Y,Z features',
            },
            {
                url: "https://westernsono.ca/wp-content/uploads/2020/02/5_A5C_2D.webp",
                contributor:'Jane Schmoe, MS-3',
                title:'LV failure in a different context',
                caption:'25 yo F, presenting with [], note the X,Y,Z features',
            },
           
        ]
    },
    {
        "title": "Advanced Critical Care Quantitative Assessment Resource",
        "id":"12",
        "category": "",
        "type": "resource",
        "tags": [],
        "pageURL": "https://westernsono.ca/advanced-critical-care-ultrasound-quantitative-assessment-resource/#content",
        "requestURL":"https://westernsono.ca/wp-json/wp/v2/pages/14811"
    },
    {
        "title": "Abdominal Aortic Aneurysm",
        "id":"13",
        "category": "Aorta",
        "type": "image",
        "tags": [],
        "images":[
           {
               url: "https://via.placeholder.com/150/0000FF/808080?Text=Placeholder1",
               contributor:'John Adams, MD, Emergency Medicine',
               title:'AAA in X context',
               caption:'60 yo F, presenting with [], note the X,Y,Z features',
           },
           {
                url:"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Placeholder2",
                contributor:'Jane Adams, PGY-4, Critical Care',
                title:'AAA in Y context',
                caption:'72 yo M, presenting with [], note the X,Y,Z features',
            },
            {
                url: "https://via.placeholder.com/150/FFFF00/000000?Text=Placeholder3",
                contributor:'Name Name, MS-3',
                title:'AAA in Z context',
                caption:'25 yo F, presenting with [], note the X,Y,Z features',
            },
           
        ]
    },
]

const categoryDatabase = [
    {
        title: 'Aorta',
        image: require('./assets/png/044-blood.png'),
        groups: {
            "Normal Anatomy":{
                title:'adsf',
                pages: [
                    {
                        title:"Abdominal Aorta Image Acquisition", 
                        id:'3',
                        type:"video",
                    },
                ],
            },
            'Abdominal Aorta Pathology':{
                pages: [
                    {
                        title:"Abdominal Aortic Aneurysm", 
                        id:'13',
                        type:"image",
                    },
                ],
            },
            "Thoracic Aorta Pathology":{
                title:'adsf',
            }
        }
    },
    {
        title: 'Cardiac',
        image: require('./assets/png/014-heart.png'),
        groups: {
            'Cardiac Views':{
                title:'Cardiac Views',
                pages: [
                    {
                        title:"Parasternal Views",
                        type:"video",
                        id:'4'
                    },
                    {
                        title:"Apical Four Chamber View",
                        type:"video",
                        id:'5'
                    },
                    {
                        title:"Subcostal View",
                        type:"video",
                        id:'6'
                    },
                ],
            },
            'Left Ventricle':{
                title: 'Left Ventricle',
                pages: [
                    {
                        title:"Severely depressed",
                        type:"image",
                        id:'11'
                    },
                ],
            },
            'Right Ventricle':{
                title: 'Right Ventricle',
            },
            'IVC':{
                title: 'IVC',
            },
            'Atria':{
                title: 'Atria',
            },
            'Pericardium':{
                title: 'Pericardium',
            },
            'Valves':{
                title: 'Valves',
            },
        }
    },
    {
        title: 'Quantitative Assessment',
        image: require('./assets/png/geometry.png'),
        type: "page",
        id:'12', 
    },
    {
        title: 'Lung',
        image: require('./assets/png/021-lungs.png'),
        groups: {
            'Image Acquisition':{
                pages: [
                    {
                        title:"BLUE Protocol",
                        type: "video",
                        id:'7',
                    }
                 ],
            },
            'Pneumothorax':{},
        }
    },
    {
        title: 'Abdominal/GI',
        image: require('./assets/png/029-intestine.png'),
        groups: {
            'Gallbladder':{
                pages: [
                   {
                       title:"Biliary Image Acquisition",
                       type: "video",
                       id:'2',
                   }
                ],
            },
            'Spleen':{},
            'Stomach':{},
            'Small Intestine':{},
            'Large Intestine':{},
        }
    },
    {
        title: 'Renal/GU',
        image: require('./assets/png/022-kidneys.png'),
        groups: {
            'Kidneys':{
                pages: [
                    {
                        title:"Renal Image Acquisition",
                        type: "video",
                        id:'1'
                    }
                ],
            },
            'Ureters':{},
            'Bladder':{},
            'Male Reproductive Organs':{},
        }
    },
    {
        title: 'Procedural',
        image: require('./assets/png/injection.png'),
        done: false,
        groups: {
            'Spine':{},
            'Vascular Access':{},
            'Nerve Blocks':{},
        }
    },
    {
        title: 'Female Pelvis',
        image: require('./assets/png/050-fetus.png'),
        done: false,
        groups: {
            'Image Acquisition':{}
        }
    },
    {
        title: 'Nervous System',
        image: require('./assets/png/016-brain.png'),
        done: false,
        groups: {
            'adsf':{}
        }
    },
    {
        title: 'Musculoskeletal',
        image: require('./assets/png/039-elbow.png'),
        done: false,
        groups: {
            'adsf':{}
        }
    },
    
]

const learnDatabase = [
    {
        title: 'Fundamentals',
        thumbnail: require('./assets/png/fundamentals.png'),
        id:1,
        pages: [
            {
                title: 'Ultrasound Physics',
                video: '',
                id:'1.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Ultrasound Controls',
                video: '',
                id:'1.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Probe Types',
                video: '',
                id:'1.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Probe Movements',
                video: '',
                id:'1.4',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Ultrasound Machine Maintenance',
                video: '',
                id:'1.5',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    {
        title: 'Lung and Pleura',
        thumbnail: require('./assets/png2/042-lungs.png'),
        id:2,
        pages: [
            {
                title: 'Basics and Physics',
                youtube: '1V1r3MMcjQU',
                id:'2.1',
                captionText: "An introduction to the physics involved in ultrasound imaging, some knobology and how to perform an ultrasound exam. Some material will be review from the Fundamentals Module, but it will highlight those fundamentals in a Lung ultrasound specific context! By Dany Burke MD FRCPC Critical Care Western PGY7",
            },
            {
                title: 'Artefacts',
                youtube: 'bXi2ywmQHzg',
                id:'2.2',
                captionText: "Lung Ultrasound is an artefact driven study. This screencast offers a description and explanation of the common artefacts seen and used in lung ultrasound. By Dany Burke MD FRCPC Critical Care Western PGY7",

            },
            {
                title: 'Image Acquisition',
                video: 'https://westernsono.ca/wp-content/uploads/2013/06/lung-acquisition.mp4?_t=1514825028',
                id:'2.3',
                captionText: "The standard views for image acquisition of solid organs are typically dictated by what windows are possible based on external anatomy and surrounding structures.  The lungs, however, can be imaged from anywhere on the thorax.  This boundless opportunity can create confusion and, possibly, crippling anxiety as to which portions of the lungs deserve to be imaged.  The idea is, much like the way we auscultate, to take a representative sample from major lung zones and then synthesize a conclusion – clear lungs, unilateral lung disease, bilateral lung disease, etc that permits a rapid differential diagnosis for the respiratory failure that confronts you.  Efficiency and accuracy are essential. By Dr. Rob Arntfield"
            },
            {
                title: 'Image Interpretation',
                youtube: 'Y9Hv84m3kOM',
                altVideo: 'uv6zI4QHYss',
                id:'2.4',
                captionText: "Are you able to find the lungs and pleura on ultrasound but need a refresher on how to decode the various findings that you might see?  Lung ultrasound (more than pleural) is an artifact driven field and this tutorial seeks to educate and demystify the lung findings of A lines, B lines and sliding lung as well as the classic pleural findings of consolidation and effusion. By Dany Burke MD FRCPC Critical Care Western PGY7",
            },
            {
                title: 'Pneumothorax',
                youtube: 'y9GIZ_Fonus',
                id:'2.5',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Consolidation',
                youtube: 'l-BX3wVhDIg',
                id:'2.6',
                captionText: "Interpreting a consolidation pattern of the lung with a concomitant pleural effusion can sometimes be challenging. Is it a pneumonia pattern with secondary para-pneumonic effusion, or is there a pleural effusion with secondary compressive atelectasis? Does size of each matter, or help us with the diagnosis? Are there any other secondary signs that will help us rule in an infectious process? The answer is yes!"
            },
            {
                title: 'Pleural Effusion',
                youtube: 'hLhRKo6llMA',
                id:'2.7',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
            },
            {
                title: 'Common Pitfalls in LUS',
                youtube: '58kS_jrxiMI',
                id:'2.8',
                captionText: "This 15-minute screencast reviews common mistakes in lung ultrasound image acquisition, interpretation, and clinical integration. It aims to sharpen your lung POCUS skills and help you unlock the true potential of this powerful diagnostic modality."
            },
            {
                title: 'Alveolar Consolidation and Shred Sign',
                youtube: '0qY9AghmFUs',
                id:'2.9',
                captionText: "Sliding lung, A lines and B lines – easy enough, right?  But what about the spectrum of alveolar consolidation and the so called “shred” sign.  This review by Yogesh Lala, MD, FRCPC – alumnus of our critical care program, has got YOU covered."
            },
            {
                title: 'Loss of Lung Sliding: Beyond Pneumothorax',
                video: 'https://westernsono.ca/wp-content/uploads/2015/12/untitled.mp4?_t=1514825048',
                id:'2.10',
                captionText: "All that slides is NOT pneumothorax – we know this. When lung sliding is lost, however, the importance of this and what this could mean, is less certain. To better understand loss of lung sliding, please enjoy this excellent screencast by Dr. Paul Lee from the internal medicine program at Western University."
            },
            {
                title: 'Acute Respiratory Distress Syndrome',
                video: 'https://westernsono.ca/wp-content/uploads/2015/08/lung-ultrasonography-in-ards-2015.mp4?_t=1514825036',
                id:'2.11',
                captionText: "Tutorial on the use of point of care ultrasound in acute respiratory syndrome presented by Ann George, MD"
            },
            {
                title: 'Respiratory Failure',
                youtube: 'q_-F4fHRv5g',
                id:'2.12',
                captionText: "Bedside Lung ultrasound has its place beyond the ED and ICU. Enjoy this case of respiratory failure in the general medicine ward presented by Lucas Ciprietti PGY4 Internal Medicine"
            },
        ]
    },
    {
        title: 'Echocardiography',
        thumbnail: require('./assets/png2/040-heart.png'),
        id:3,
        pages: [],
    },
    {
        title: 'Procedures',
        thumbnail: require('./assets/png/injection.png'),
        id:4,
        pages: [
            {
                title: 'US Guided Peripheral IV Insertion Part 1',
                youtube: 'YVQhpcsmaHM',
                id:'4.1',
                captionText: ''
            },
            {
                title: 'US Guided Peripheral IV Insertion Part 2',
                youtube: 'Z6mOKmZcshI',
                id:'4.2',
                captionText: ''
            },
            {
                title: 'US Guided Vascular Access for ICU Residents',
                youtube: 'Z6mOKmZcshI',
                id:'4.3',
                captionText: ''
            },
            {
                title: 'Sterile Technique for US Guided Central Line',
                youtube: 'BIZJdzqgF88',
                id:'4.4',
                captionText: ''
            },
            {
                title: 'Fracture Management',
                youtube: '9Dd25I1b4_I',
                id:'4.5',
                captionText: ''
            }, 
            {
                title: 'Paracentesis',
                video: '',
                id:'4.6',
                captionText: ''
            }, 
            {
                title: 'Thoracentesis',
                video: '',
                id:'4.7',
                captionText: ''
            },            
        ],
    },
    {
        title: 'Renal',
        thumbnail: require('./assets/png2/031-kidney-1.png'),
        id:5,
        pages: [
            {
                title: 'Anatomy and Sono-Anatomy',
                youtube: 'llUZeU-NUQo',
                id:'5.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Hydronephrosis',
                youtube: 'RLxcOUQZ8G8',
                id:'5.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",

            },
            {
                title: 'Hydronephrosis Mimics',
                youtube: 'p4qJzOuYgb8',
                id:'5.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",

            },
            {
                title: 'Stones and Masses',
                youtube: 'PGBuxlmTta8',
                id:'5.4',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",

            },
        ],
    },
    {
        title: 'Abdomen',
        thumbnail: require('./assets/png/038-abs.png'),
        id:6,
        pages: [
            {
                title: 'FAST Exam Part 1: Approach',
                youtube: 'orL-bSlwBTA',
                id:'6.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'FAST Exam Part 2: Algorithm and Pitfalls',
                youtube: 'E6J06ta07QA',
                id:'6.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Small Bowel Obstruction',
                youtube: 'X_Ui91kjfag',
                id:'6.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    {
        title: 'Gallbladder',
        thumbnail: require('./assets/png2/005-gallbladder.png'),
        id:7,
        pages: [
            {
                title: 'Introduction',
                youtube: 'PwqFuc4qzvY',
                id:'7.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Stones and Mimics',
                youtube: 'pY2BinfQea0',
                id:'7.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Cholecystitis',
                youtube: 'XMEN2ZDUtNU',
                id:'7.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    {
        title: 'Female Pelvis',
        thumbnail: require('./assets/png2/029-pelvic-area.png'),
        id:8,
        pages: [
            {
                title: 'Trans-Abdominal Technique',
                youtube: 'jgyYftAAQgk',
                id:'8.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Endocavitary Approach',
                youtube: 'By8TPKMRfdc',
                id:'8.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Defining a Positive OB Study',
                youtube: 'Ww-_VGPlqdo',
                id:'8.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    {
        title: 'Deep Vein Thrombosis',
        thumbnail: require('./assets/png/005-leg.png'),
        id:9,
        pages: [
            {
                title: 'DVT',
                youtube: 'kenAPbRVMl0',
                id:'9.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Lower Extremity DVT',
                youtube: '-HERC2yB0Yk',
                id:'9.2',
                captionText: "Sean Spence (PGY-5 Critical Care Medicine, University of Calgary) explains how to conduct a DVT exam. He covers lower extremity vascular anatomy relevant to the DVT exam and then wraps up by demonstrating a DVT study done by himself. There are examples of both a normal study and a positive finding.",
            },
        ],
    },
    {
        title: 'Ocular',
        thumbnail: require('./assets/png/006-eye.png'),
        id:10,
        pages: [
            {
                title: 'Common Pathologies',
                youtube: 'dW8F_sMojKk',
                id:'10.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    {
        title: 'Critical Care Hemodynamics',
        thumbnail: require('./assets/png/044-blood.png'),
        id:11,
        pages: [
            {
                title: 'Hypovolemic Shock',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/hypovolemia-final.mp4?_t=1514825045',
                id:'11.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Distributive Shock',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/vasoplegia-final.mp4?_t=1514825047',
                id:'11.2',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
                transcript:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing\n\n  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
            },
            {
                title: 'Cardiogenic Shock',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/cardiogenic-shock-final.mp4?_t=1514825037',
                id:'11.3',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Sepsis with CHF',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/sepsis-chf-final.mp4?_t=1514825046',
                id:'11.4',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Calcium Channel Blocker Overdose',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/ccb-od-final.mp4?_t=1514825038',
                id:'11.5',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Dimensionless Index',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/dimensionless-index-final.mp4?_t=1514825042',
                id:'11.6',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Cor Pulmonale',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/cor-pulmonale-rv-overload-final.mp4?_t=1514825040',
                id:'11.7',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
            {
                title: 'Hypertrophic Obstructive Cardiomyopathy',
                video: 'https://westernsono.ca/wp-content/uploads/2015/11/hocm-final.mp4?_t=1514825043',
                id:'11.8',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },

        ],
    },
    {
        title: 'Transesophageal Echo (TEE)',
        thumbnail: require('./assets/png2/038-esophagus.png'),
        id:12,
        pages: [
            {
                title: 'How to Scan',
                youtube: 'IU3TRfnO7tI',
                id:'12.1',
                captionText: "Rob Arntfield, MD, FRCPC and Atul Jaidka, MD, PGY2 takes us through the fundamentals of performing a transesophageal echocardiography (TEE). This video uses a live demonstration to introduce probe manipulation, how to obtain different views, and how to landmark for these different views. The techniques being presented will help you in performing goal-directed TEE in critically ill patients, whether it be for visualizing valvular disorders or during a resuscitation. Make sure to check out the image acquisition screencasts afterwards to learn how to interpret your TEE findings!",
            },
            {
                title: 'Left Atrial Appendage Thrombus',
                youtube: '0kCCupXD-4g',
                id:'12.2',
                captionText: "A common question asked when a patient has an embolic event (i.e. stroke, mesenteric ischemia, femoral artery occlusions) is whether there was a cardiac source of embolus. In this screencast done by Dr. Vince Lau, we will go over the principles of left atrial appendage interrogation using TEE, looking for a nidus for clot (spontaneous echo contrast, low flow stasis).",
            },
            {
                title: 'Infective Endocarditis',
                youtube: 'PbKkBgGjI4E',
                id:'12.3',
                captionText: "One of the concerns associated with confirmed bacteremia is the presence of endocarditis as a consequence of the bacteremia, or even as the source. This is especially true of the organisms grown on blood cultures have a preponderance to form vegetations on cardiac valves. Please enjoy this screencast by Dr. Vince Lau on infective endocarditis.",
            },
            {
                title: 'Veno-Venous ECMO Initiation',
                youtube: 'pwaBrjILEFE',
                id:'12.4',
                captionText: "Veno-venous ECMO use is increasing at many centres.  Seldom an elective procedure and typically done on patients too sick to transport, bedside guidance of ECMO cannula insertion is essential. As this tutorial (by Dr. Vince Lau) highlights, point-of-care TEE can be invaluable in these circumstances in providing real time guidance of guidewire and cannula positioning.  Further, adjustments of the cannula’s outflow port can be done using color Doppler to optimize the yield of the intervention.",
            },
            {
                title: 'Shunts and Bubble Study',
                youtube: 'i8J1BxGM8wo',
                id:'12.5',
                captionText: "Do you have a refractory hypoxemic patient who does not respond to increases in FiO2? Worried about a shunt causing said hypoxemia? Or presence of a septal defect causing paradoxical emboli? In this screencast done by Dr. Vince Lau, we will go over the principles of intra-atrial septal interrogation, performance of a bubble study, and calculating a shunt fraction (Qp:Qs).",
            },
            {
                title: 'Harlequin Syndrome',
                youtube: 'GXTTihsUd8o',
                id:'12.6',
                captionText: "A visual (no sound to this) tour of an interesting case of ECMO and its complexities managed in the ICU with the assistance of point-of-care transesophageal echo.",
            },
        ],
    },
    {
        title: 'Trans-cranial Doppler',
        thumbnail: require('./assets/png2/060-brain.png'),
        id:13,
        pages: [
            {
                title: 'Vasospasm and Cerebral Circulatory Arrest',
                video: 'https://westernsono.ca/wp-content/uploads/2016/06/tcd-camtasia.mp4?_t=1514825049',
                id:'13.1',
                captionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            },
        ],
    },
    
]


export {database, categoryDatabase, learnDatabase };
