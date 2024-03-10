import RootLayout from "@/components/Layout/RootLayout";
import FeaturedSection from "@/components/UI/FeaturedSection";
import HeroSection from "@/components/UI/HeroSection";
import HowDoesItWork from "@/components/UI/HowDoesItWork";
import SecondSection from "@/components/UI/SecondSection";
import ThirdSection from "@/components/UI/ThirdSection";
import Head from "next/head";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function HomePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [email, setEmail] = useState("");

  // const handleOpenModal = (email) => {
  //   setEmail(email);
  //   setIsModalOpen(true);
  // };
  return (
    <>
      <Head>
        <title>BOAST</title>
        <meta name="description" content="BOAST made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection onOpen={onOpen} />
      <FeaturedSection />
      <SecondSection />
      <ThirdSection />
      <HowDoesItWork />

      {/*  */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Join Our Wishlist
              </ModalHeader>
              <ModalBody>
                <Input type="email" variant="bordered" label="Email" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  className="bg-black text-white font-bold px-6 py-4 rounded-full"
                >
                  Join Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
