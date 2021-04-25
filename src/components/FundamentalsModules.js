import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { Video } from "expo-av";
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const PhysicsModule = ({ progress, quizTrigger, quizNotAvailable }) => {
  const [position, setPosition] = useState("0");
  const navigation = useNavigation();

  const handlePress = async () => {
    if (position >= "5") {
      navigation.goBack();
    } else {
      setPosition((parseInt(position) + 1).toString());
    }
  };

  useEffect(() => {
    async function refreshProgress() {
      if (position >= "5") {
        await progress("99");
      } else {
        await progress(((position / 5) * 100).toString());
      }
    }
    refreshProgress();
  }, [position]);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Introduction</Text>
      <Text style={{ fontSize: 14, color: "gray", marginHorizontal: 15 }}>
        Authored by Dr. Chris Byrne, Brian Park, Dr. Rob Arntfield
      </Text>

      <Text style={styles.paragraph}>
        Being able to interpret any diagnostic imaging requires a firm grasp on
        the underlying physics of the modality, and this is especially true for
        ultrasound which heavily incorporates artefact-based studies in some of
        its mainstream uses.
      </Text>

      <Text style={styles.paragraph}>
        Like the name implies, ultrasound machines use sound waves to generate
        images, and is thus considered one of the safest imaging modalities
        available. This lesson will begin to illustrate just how sound waves
        become translated into the useful images you see on your screen.
      </Text>
      {position > "0" ? (
        <>
          <Text style={styles.h1}>Generation of Sound</Text>
          <Text style={styles.paragraph}>
            Ultrasound probes (or transducers) generate sound waves through
            piezoelectric materials.
          </Text>
          <Text style={styles.paragraph}>
            <Bold>Piezoelectric materials</Bold> are materials that generate an{" "}
            <Underline>electric current</Underline> when{" "}
            <Underline>applied mechanical stress</Underline> - called the{" "}
            <Bold>direct piezoelectric effect</Bold> - but can also do the
            opposite, i.e. generate{" "}
            <Underline>mechanical deformations</Underline> when{" "}
            <Underline>applied an electrical current</Underline> - called the{" "}
            <Bold>converse piezoelectric effect</Bold>
          </Text>
          <Text style={styles.paragraph}>
            The converse piezoelectric effect is how ultrasound probes generate
            sound waves. When a rapidly alternating current is applied to a
            piezoelectric material inside a transducer, it undergoes mechanical
            deformations, generating sound waves in the process. These sound
            waves travel out and away from the transducer and into the
            surroundings.{" "}
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/piezo1.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginHorizontal: 15,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 1: Converse Piezoelectric Effect</ImageCaption>
          <Text style={styles.paragraph}>
            When those sound waves encounter an interface between 2 different
            media, some of the ultrasonic energy{" "}
            <Underline>can reflect back</Underline> to its source (an{" "}
            <Bold>echo</Bold>). When this echo returns to the probe, it takes
            advantage of the direct piezoelectric effect — i.e. the echo creates
            mechanical strain on the piezoelectric material which then generates
            an electric current in response. The generated current is processed
            by the ultrasound machine to make up the grayscale images that you
            see on the screen.
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/piezo2.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginHorizontal: 15,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 2: Direct Piezoelectric Effect</ImageCaption>
        </>
      ) : null}

      {position > "1" ? (
        <>
          <Text style={styles.h1}>Sound wave characteristics</Text>
          <Text style={styles.paragraph}>
            There are several key characteristics of sound waves involved in
            ultrasound imaging, namely amplitude, frequency and power.
          </Text>
          <Text style={styles.paragraph}>
            Ultrasound machines can measure the <Bold>amplitude</Bold> or
            strength of a returning echo. The returning echo's amplitude affects
            the brightness of the echo displayed on the ultrasound machine's
            screen.
          </Text>
          <Image
            uri="https://res.cloudinary.com/dwtw3ge2z/image/upload/v1595699551/Learn/Fundamentals/1.1/Untitled_ja6yvg.png"
            style={{
              height: width * 0.5,
              width: width,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 3: Amplitudes of Waves</ImageCaption>

          <Text style={styles.highlight}>
            {"\u2B50"} Strong returning echoes, i.e. high amplitude waves,
            translate into bright and white (formally, <Bold>hyperechoic</Bold>)
            areas on the screen.
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/hyperechoic.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 5: Hyperechoic Tissue</ImageCaption>
          <Text style={styles.highlight}>
            {"\u2B50"} Weak returning echoes, i.e. low amplitude waves translate
            into dark grey and black (formally, <Bold>hypoechoic</Bold>) areas
            on the screen
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/hypoechoic.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 4: Hypoechoic Tissue</ImageCaption>

          <Text style={styles.paragraph}>
            <Bold>Frequency</Bold> is the number of sound waves per second, or
            hertz (Hz). Audible sound ranges from 20 Hz to 20 kHz, while
            ultrasound refers to sound waves at a frequency above the audible
            range (greater than 20 kHz). Typical frequencies used in medical
            ultrasound machines range from 1-15 MHz.
          </Text>
          <Image
            uri="https://res.cloudinary.com/dwtw3ge2z/image/upload/v1595699550/Learn/Fundamentals/1.1/Untitled_1_d7gshf.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 5: Frequencies of Waves</ImageCaption>

          <Text style={styles.paragraph}>
            The frequency of an ultrasound wave affects two important
            considerations of imaging: depth of penetration and resolution of
            the image:
          </Text>

          <Text style={styles.highlight}>
            {"\u2B50"} <Bold>High frequency</Bold> ultrasound waves have a
            smaller wavelength, and can therefore resolve structures that are
            smaller with greater detail. However, a downside of using high
            frequency waves is that{" "}
            <Underline>tissue penetration is limited</Underline> as they are more
            readily absorbed by tissues, preventing their reflection back to the probe. (See Attenuation
            below)
          </Text>

          <Text style={styles.highlight}>
            {"\u2B50"} <Bold>Low frequency</Bold> waves do not create as high
            resolution images as high frequency waves, but are able to penetrate
            deeper into tissue as they are not as readily absorbed by body
            tissues.
          </Text>

          <Text style={styles.paragraph}>
            Maximizing resolution while maintaining adequate depth is a key
            consideration when choosing appropriate transducer frequency. We'll
            go into more detail about the different transducer types in the next
            module.
          </Text>
          <Text style={styles.paragraph}>
            The <Bold>power</Bold> and intensity of ultrasound is also another
            important characteristic to consider. In practical terms, power will
            determine how much heat is generated in tissues. The heat generated
            from an ultrasound is generally insignificant as long as the proper
            settings are used. However, heat can be important to consider when
            dealing with certain more vulnerable tissues such as the eye.{" "}
          </Text>
        </>
      ) : null}

      {position > "2" ? (
        <>
          <Text style={styles.h1}>Resolution</Text>
          <Text style={styles.paragraph}>
            In ultrasound imaging, there are 4 aspects of resolution: axial,
            lateral, elevational and temporal.{" "}
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/resolution1.png"
            style={{
              height: width - 30,
              width: width - 30,
              marginHorizontal: 15,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 6: Resolution of Ultrasound Images. Soni, N. J., Arntfield, R., Kory, P. (2020). Point-of-care Ultrasound. Philadelphia, PA: Elsevier.</ImageCaption>
          <Text style={styles.paragraph}>
            <Bold>Axial resolution</Bold> is the ability to separate two points
            on the y-axis or x axis of the image. Higher frequency ultrasound
            transducers offer superior axial resolution.{" "}
          </Text>
          <Text style={styles.paragraph}>
            <Bold>Lateral resolution</Bold> is the ability to separate two
            points on the x-axis or the left-to-right axis of the image. This is
            optimized in a region of the beam called the focal zone. After the
            beam is generated by the transducer it initially contracts to a
            maximum at the focal zone. This is generally at the middle of the
            ultrasound screen though some machines will allow you to manipulate
            this. This means that if you want to optimize the lateral resolution
            of a structure you should place that structure in the middle of the
            screen by adjusting the depth or if your machine allows you to,
            simply by adjusting the focal zone.{" "}
          </Text>
          <Text style={styles.paragraph}>
            The same phenomenon occurs along the thickness axis of the probe
            since the image generated is a 2d image, but the ultrasound beam is
            in 3d. The image you see on the screen is a 2d compression of a
            slice of what is truly going on in the patient. This results in beam
            thickness resolution or <Bold>elevational resolution</Bold> and it
            is also optimized in the focal zone.
          </Text>
          <Text style={styles.paragraph}>
            Finally, there is also <Bold>temporal resolution</Bold> which
            determines the clarity of moving structures. Think of it as the
            frame rate. This is determined by the rate at which the transducer
            emits ultrasound pulses.
          </Text>
        </>
      ) : null}

      {position > "3" ? (
        <>
          <Text style={styles.h1}>Generation of Ultrasound Images</Text>
          <Text style={styles.paragraph}>
            After leaving the ultrasound probe, the ultrasound waves can behave
            in many different ways. Sound waves can be reflected, refracted,
            scattered, transmitted and absorbed by tissues due to differences in
            the tissues' physical properties. How a tissue will interact with an
            ultrasound wave depends on 2 key characteristics: acoustic impedance
            and attenuation.
          </Text>
          <Text style={styles.paragraph}>
            Like audible sound, an ultrasound beam must be transmitted through a
            medium. <Bold>Acoustic impedance</Bold> is the resistance to
            propagation of sound waves through tissues and is directly related
            to tissue density and the velocity of sound in that tissue.
            Differences in acoustic impedance determine reflectivity of sound
            waves at tissue interfaces.{" "}
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/acousticimpedance.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>
            Table 1: Acoustic Impedance of Different Tissues
          </ImageCaption>
          <Text style={styles.paragraph}>
            <Bold>Reflection</Bold> at an interface{" "}
            <Underline>increases</Underline> when the difference in acoustic
            impedance between two tissues at an interface increases.
          </Text>
          <Text style={styles.paragraph}>
            Homogenous tissues have fewer interfaces and low acoustic impedance.
            As a result, less reflection occurs. They will appear as hypoechoic
            structures on the screen.{" "}
          </Text>
          <Image
            uri="https://res.cloudinary.com/dwtw3ge2z/image/upload/v1595699550/Learn/Fundamentals/1.1/Untitled_2_uuaefu.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>
            Figure 7: Homogenous Tissues appear Isoechoic
          </ImageCaption>

          <Text style={styles.paragraph}>
            <Bold>Air</Bold> has a very low acoustic impedance relative to body
            tissues. As a result, sound waves will be reflected in all
            directions (also called scattering) and nearly no echos will be
            generated. This is a reason why ultrasound gel (a liquid medium) is
            required to seal the interface between the skin and the probe.{" "}
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/air.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 8: Air and Scatter</ImageCaption>

          <Text style={styles.paragraph}>
            <Bold>Bone</Bold>, calcifications and materials like metal have a
            very high acoustic impedance relative to body tissues; the majority
            of ultrasound waves will be reflected, resulting in a hyperechoic
            appearance. However, because most waves are reflected, structures
            deep to bone or metal cannot be visualized (acoustic shadowing).
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/bone.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 9: Bone and Reflection</ImageCaption>

          <Text style={styles.paragraph}>
            As sound waves travel through tissues, energy can be lost through
            absorption, deflection and divergence. This is called{" "}
            <Bold>
              <Underline>attenuation</Underline>
            </Bold>
            .{" "}
          </Text>
          <Text style={styles.paragraph}>
            An ultrasound beam can be absorbed by tissue and transferred to
            heat, and it is the most important cause of attenuation. Absorption
            is responsible for determining depth of ultrasound penetration - as
            mentioned above, high frequency waves are more readily absorbed than
            low frequency waves, and thereby are limited in its penetration.
          </Text>
          <Image
            uri="https://westernsono-library.b-cdn.net/FundamentalsTextModule/Physics/attenuation.png"
            style={{
              height: (width - 30) * 0.5,
              width: width - 30,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 10: Attenuation</ImageCaption>
        </>
      ) : null}

      {position > "4" ? (
        <>
          <Text style={styles.h1}>Ultrasound Modes</Text>
          <Text style={styles.paragraph}>
            Let's now discuss some of the basic modes of ultrasound.{" "}
          </Text>
          <Text style={styles.paragraph}>
            The majority of ultrasound imaging is done using the{" "}
            <Bold>2D or B-mode</Bold> (B for brightness). This is the default
            mode that displays the image as varying shades of gray or black or
            white depending on the amplitude of echoes that are reflected back
            to the probe.{" "}
          </Text>
          <Video
            source={{
              uri:
                "https://westernsono-library.b-cdn.net/library/Abdominal/Abdominal%20Free%20Fluid/abdo%20neg%202.mp4",
            }}
            rate={1.0}
            volume={1.0}
            useNativeControls={false}
            shouldPlay={true}
            isLooping
            resizeMode="contain"
            style={{
              width: width - 20,
              height: (width - 20) * 0.75,
              alignSelf: "center",
              marginBottom: 5,
            }}
          />
          <ImageCaption>Figure 11: 2D Mode - FAST exam</ImageCaption>
          <Text style={styles.paragraph}>
            Structures that mostly transmit ultrasound and do not reflect are
            termed anechoic and appear black on the screen. Examples of anechoic
            structures include fluid such as blood, bile, urine.
          </Text>
          <Text style={styles.paragraph}>
            Structures that reflect less sound waves than surrounding structures
            are termed hypoechoic and will appear gray, and those that reflect
            more are termed hyperechoic and appears white.{" "}
          </Text>
          <Text style={styles.paragraph}>
            Another important mode is the <Bold>M-mode</Bold> or motion mode.
            The M-mode captures a single line within the image and all the
            motion that occurs along that line. Once you've chosen the line you
            want to observe, you can get an image of all the points along that
            line on the vertical axis as they vary in time on the horizonal
            axis. In other words, we see how all the points on that line are
            changing in time but we can see all the changes in time on one
            image.
          </Text>
          <Text style={styles.paragraph}>
            Its main advantage is its great temporal resolution which makes it
            good for depicting dynamic phenomenon or making time-sensitive
            measurements such as the difference in the thickness of the
            diaphragm during inspiration and expiration
          </Text>

          <Image
            uri="https://westernsono-library.b-cdn.net/library/Cardiac/IVC/normal%202-2.jpg"
            style={{
              height: (width - 30) * 0.75,
              width: width - 30,
              marginHorizontal: 15,
            }}
            resizeMode="contain"
          />
          <ImageCaption>Figure 12: M-Mode assessment of the IVC</ImageCaption>
          <Text style={styles.paragraph}>
            The last of the main ultrasound modes is{" "}
            <Bold>Doppler imaging</Bold>, and will be discussed in great detail
            in the screencast titled "Principles of Doppler Ultrasound" by Dr.
            Katie Wiskar. Feel free to check it out after completing this
            lesson.{" "}
          </Text>
        </>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.nextButton,
            backgroundColor: position >= "5" ? "#2ecc71" : "#B19CD9",
          }}
          onPress={handlePress}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            {position >= "5" ? "Exit" : "Continue"}
          </Text>
        </TouchableOpacity>

        {position >= "5" && !quizNotAvailable ? (
          <TouchableOpacity
            style={{
              ...styles.nextButton,
              backgroundColor: "#B19CD9",
              marginLeft: 10,
            }}
            onPress={() => quizTrigger()}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Take the Quiz</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const ProbeTypes = () => {
  return <View></View>;
};

const ProbeMovements = () => {
  return <View></View>;
};

const Bold = ({ children }) => {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontFamily: Platform.OS === "android" ? "Raleway-Regular" : null,
      }}
    >
      {children}
    </Text>
  );
};

const Underline = ({ children }) => {
  return <Text style={{ textDecorationLine: "underline" }}>{children}</Text>;
};

const ImageCaption = ({ children }) => {
  return (
    <Text
      style={{
        fontSize: 12,
        color: "gray",
        marginHorizontal: 15,
        marginBottom: 15,
      }}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {},
  h1: {
    fontSize: 32,
    marginVertical: 20,
    fontFamily: Platform.OS === "android" ? "Raleway-Regular" : null,
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  nextButton: {
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#B19CD9",
    borderRadius: 20,
    marginBottom: 20,
  },
  highlight: {
    fontSize: 16,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: "#FBF3DB",
  },
});

export { PhysicsModule, ProbeTypes, ProbeMovements };
