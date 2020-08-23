import React from "react";
import { Page } from "@essence/app";
import { withTailwind } from "@essence/react-tailwind";
import { Block, Div, Grid } from "@essence/tags";
import { Heading1, Layout, Main, Pattern } from "@essence/ui";
import { Button, Link } from "./_components";

const ButtonSection: React.FC = () => withTailwind(
  <Grid
    gap="5"
    gridTemplateColumns="2"
    paddingBottom="12"
    xl={{
      columnGap: "8",
      gridTemplateColumns: "3"
    }}>
    <Button href="https://github.com/bconnorwhite" icon="github">GitHub</Button>
    <Button href="https://npmjs.com/~bconnorwhite" icon="npm">NPM</Button>
    <Button href="https://masciintosh.com">Masciintosh</Button>
    <Button href="https://twitter.com/bconnorwhite" icon="twitter">Twitter</Button>
    <Button href="https://www.instagram.com/bconnorwhite/" icon="instagram">Instagram</Button>
    <Button href="https://soundcloud.com/merkai-1" icon="soundcloud"> Merkai</Button>
  </Grid>
);

const Image: React.FC = () => withTailwind(
  <picture>
    <source srcSet="portrait.webp" type="image/webp" />
    <source srcSet="portrait.jpg" type="image/jpeg" />
    <img
      marginRight="12"
      marginBottom="6"
      float="left"
      shadow="2xl"
      shadowHover="3xl"
      borderRadius="xl"
      transition="default"
      transform
      translateYHover="-2px"
      duration="500"
      timingFunction="out"
      src="portrait.jpg"
      md={{
        marginRight: "16",
        width: "4in12"
      }} />
  </picture>
);

const ContentSection: React.FC = () => withTailwind(
  <Block width="10in12" paddingY="12" margin="auto" sm={{ width: "11in12" }} md={{ paddingY: "16" }}>
    <Image />
    <Heading1 paddingBottom="5" lg={{ paddingTop: "1" }} xl={{ paddingTop: "8" }} font="mono">Connor White</Heading1>
    <p font="mono">
      Connor White is a programmer working as a software architect at Olea Edge Analytics. He has previously worked as a freelance web developer for clients including the University of Texas.
    </p>
    <br />
    <p font="mono">Connor also studied at the University of Texas where he completed a Bachelor of Science in Electrical and Computer Engineering.</p>
    <br />
    <p font="mono" paddingBottom="12">
      Connor&apos;s other projects include Aven (an end-to-end encrypted messaging service), <Link href="https://masciintosh.com">Space Explorer</Link> (an ASCII-art based space exploration RPG), and <Link href="https://soundcloud.com/merkai-1">Merkai</Link> (an electronic music project).
    </p>
    <ButtonSection />
  </Block>
);

const Home: React.FC = () => {
  return withTailwind(
    <Page title="𝐶𝑜𝑛𝑛𝑜𝑟 𝑊ℎ𝑖𝑡𝑒">
      <Pattern opacity={0.03} fill="gray800" name="Circuit Board">
        <Div width="48" height="48" transform rotate="45" bgColor="gray800" marginLeft="-24" marginTop="-24" position="absolute" shadow="xl" />
        <Layout style={{ background: "linear-gradient(30deg, transparent, rgba(255,255,255,0.5))" }}>
          <Main>
            <ContentSection />
          </Main>
        </Layout>
      </Pattern>
    </Page>
  );
};

export default Home;
