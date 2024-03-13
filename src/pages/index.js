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
    <div className=" bg-slate-100">
      <AnimatedCursor
        innerSize={15}
        outerSize={0}
        color="#fff"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={0}
        innerStyle={{border: '2px solid black', backgroundColor: '#fd7f3e'}}
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
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
