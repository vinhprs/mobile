import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "react-share";
import twitter from "../../image/Mycourse/logoTwitter.png";
const ModalShare = ({ isOpen, onClose }: any) => {
  return (
    <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textColor="#272829">Chia sẻ khóa học</ModalHeader>
        <ModalCloseButton />
        <ModalBody w="100%">
          <div className="grid grid-cols-[500px_1fr] items-center mb-3">
            <div className="w-full px-2 py-3 border-[1px]">
              <span className="w-full line-clamp-1">
                https://www.udemy.com/share/101uI03@qiWI4tH3iiPHtA7GB6mlt6Ij-2TZctSasxcAghWKeYxpCRNv2Ih1NgpTu8ZqphOjNg==/
              </span>
            </div>
            <div className="px-2 py-3 bg-[#272829] text-white font-semibold cursor-pointer">
              Sao chép link
            </div>
          </div>
          <div className="flex gap-x-3">
            <TwitterShareButton url="https://www.udemy.com/share/101uI03@gr_C6f3MQmtrUmTkAzac9Dzkeop10H7OIzSjORr0c72wX7FDuNiYjDVbNuof8VGEhw==/">
              <div className="w-[50px] h-[50px] bg-[#272829] flex items-center justify-center rounded-full">
                <img alt="logo" src={twitter} className="w-[40px]" />
              </div>
            </TwitterShareButton>
            <FacebookShareButton url="https://www.udemy.com/share/101uI03@gr_C6f3MQmtrUmTkAzac9Dzkeop10H7OIzSjORr0c72wX7FDuNiYjDVbNuof8VGEhw==/">
              <FacebookIcon size={52} round={true} />
            </FacebookShareButton>
            <TelegramShareButton url="https://www.udemy.com/share/101uI03@gr_C6f3MQmtrUmTkAzac9Dzkeop10H7OIzSjORr0c72wX7FDuNiYjDVbNuof8VGEhw==/">
              <TelegramIcon size={52} round={true} />
            </TelegramShareButton>
            <FacebookMessengerShareButton
              url="https://www.udemy.com/share/101uI03@gr_C6f3MQmtrUmTkAzac9Dzkeop10H7OIzSjORr0c72wX7FDuNiYjDVbNuof8VGEhw==/"
              appId={""}
            >
              <FacebookMessengerIcon size={52} round={true} />
            </FacebookMessengerShareButton>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalShare;
