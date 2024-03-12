import RootLayout from "@/components/Layout/RootLayout";
import HeroSection from "@/components/UI/HeroSection";
import HowDoesItWork from "@/components/UI/HowDoesItWork";
import SecondSection from "@/components/UI/SecondSection";
import ThirdSection from "@/components/UI/ThirdSection";
import Head from "next/head";
import WishlistForm from "@/components/UI/WishlistForm";
import EligibilitySection from "@/components/UI/EligibilitySection";
import BrandSection from "@/components/UI/BrandSection";
import AnimatedCursor from "react-animated-cursor";

export default function HomePage() {
  return (
    <>
      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Head>
        <title>BOAST</title>
        <meta name="description" content="BOAST made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <CustomScrollbar>
        <p>hello</p>
      </CustomScrollbar> */}

      <HeroSection />

      <SecondSection />
      <BrandSection />
      <ThirdSection />
      <HowDoesItWork />
      <EligibilitySection />
      <WishlistForm />

      {/*  */}

      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <form action="">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    value="afsana"
                  />
                </form>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
