import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Button } from "@mantine/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRouter } from "next/router";
import { Grid } from '@mantine/core';

import { useMediaQuery } from "@mantine/hooks";
import Menus from "./components/Menus";

export default function Home() {
  const matchRespo = useMediaQuery("(max-width:1517px)");
  console.log(matchRespo);
  const router = useRouter();
  return (
    <div className={styles.container}>


      <section className={styles.section}>
        <div className={styles.glass_container}>
          {/* mixers */}
          <div className={styles.purple}></div>
          <div className={styles.blue}></div>
          <div className={styles.blue_last}></div>
          <div className={styles.purple_last}></div>

          {/* glass body */}
          <div className={styles.glass}>
            <div className={styles.header} style={{ justifyContent: matchRespo ? 'space-between' : '' }}>
              <div className={styles.brand}>

                <Image id="logo" src="/Bridgeon.svg" width={matchRespo ? 50 : 150} height={50} alt="logo" />
              </div>
              <div className={styles.nav} style={{ width: matchRespo ? '0' : '80%' }}>
                {matchRespo ? (
                  <div className={styles.menu_bar}>
                    <Menus />
                  </div>
                ) : (
                  <div className={styles.menu_nav}>
                    <li>Service</li>
                    <li> Explore</li>
                    <li>Works</li>
                  </div>
                )}
              </div>
              {!matchRespo &&
                <div className={styles.info}>
                  <Button
                    onClick={() => window.open("https://forms.gle/yEoFuXRr2Kwg7esi9","blank")}
                    variant="outline"
                    className={styles.contact_us}
                    sx={{ borderColor: "gray", color: "gray" }}
                  >
                    Contact us
                  </Button>
                </div>
              }
            </div>
            <div className={styles.body} align="center" >
              <Grid justify="center">
                <Grid.Col span={!matchRespo ? 6 : 12} justify="center" align="center">
                  <div className={styles.training} >
                    <div className={styles.holder} style={{ width: !matchRespo ? "" : "100%", height: !matchRespo ? "100%" : "" }}>
                      <h2 style={{ fontSize: matchRespo ? '15px' : "x-large" }}>
                        &quot;Accelerate your journey to becoming a software developer with our intensive bootcamp&quot;
                      </h2>
                      {!matchRespo ? <p style={{ fontSize: matchRespo ? '15px' : "20px" }}>
                        Are you ready to start your journey to becoming a software developer?. Our intensive training program is designed to give you the skills and knowledge you need to succeed in the fast-paced world of software development. From hands-on training and interactive workshops to expert guidance and support, we offer everything you need to accelerate your journey. So why wait? Join our bootcamp today and start your journey to success!
                      </p> : ""}
                      {/* {!matchRespo && <Button color="green" sx={{ width: "100px", marginTop: "5%", marginBottom: "3%" }} >
                        Explore
                      </Button>} */}
                    </div>
                  </div>
                </Grid.Col>
                <Grid.Col span={!matchRespo ? 6 : 12} justify="center" align="center">
                  <div className={styles.service}>
                    <div className={styles.holder} style={{ width: !matchRespo ? "" : "100%", height: !matchRespo ? "100%" : "" }}>
                      <h2 style={{ fontSize: matchRespo ? '15px' : "x-large" }}>
                        &quot;Transform your business with our cutting-edge software services&quot;
                      </h2>
                      {!matchRespo ? <p style={{ fontSize: matchRespo ? '15px' : "20px" }} >
                        We offer a wide range of innovative solutions that are designed to streamline your operations and take your business to the next level. Our software services are reliable, scalable, and secure, making them the perfect choice for businesses of all sizes. Start your journey to success with our software services today!
                      </p> : ""}
                      {/* {!matchRespo && <Button color="green" sx={{ width: "100px", marginTop: "5%", marginBottom: "3%" }} >
                        Explore
                      </Button>} */}
                    </div>
                  </div>
                </Grid.Col>
              </Grid>

            </div>
            <div className={styles.footer}>
              <InstagramIcon
                onClick={() => window.open("https://instagram.com/bridgeon.in?igshid=YmMyMTA2M2Y=")}
                className={styles.ico_insta}
                sx={{ color: "gray", cursor: "pointer" }}
              />
              <LinkedInIcon
                className={styles.ico_linkedIn}
                sx={{ color: "gray", cursor: "pointer" }}
              />
              <WhatsAppIcon
                onClick={() => window.open("https://wa.me/+917012316323")}
                className={styles.ico_wa}
                sx={{ color: "gray", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
