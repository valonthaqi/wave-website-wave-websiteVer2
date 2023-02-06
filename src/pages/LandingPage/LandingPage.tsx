import { getContent } from "../../api/ContentApi";
import { Navigation } from "../../components/Navigation";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { IconType } from "react-icons";
import videoBg from "/videoBg3.mp4";

export const LandingPage = () => {
  return (
    <div className="h-screen w-screen">
      <VideoBg></VideoBg>
      <Content>
        <Navigation />
        
        <PageContainer>
          <SideBarContainer></SideBarContainer>
          <ContentContainer>
            <TitleContainer>
              <Title text={getContent("landing_page", "title")} />
            </TitleContainer>
            <ParagraphContainer>
              <Paragraph text={getContent("landing_page", "paragraph_1")} />
              <Paragraph text={getContent("landing_page", "paragraph_2")} />
            </ParagraphContainer>
            <ButtonContainer>
              <FilledButton text={getContent("landing_page", "button_1")} />
              <OutlinedButton text={getContent("landing_page", "button_2")} />
            </ButtonContainer>
          </ContentContainer>
          <SideBarContainer>
            <SocialMediaContainer>
              <SocialIcon Icon={CiFacebook} />
              <SocialIcon Icon={CiInstagram} />
              <SocialIcon Icon={CiLinkedin} />
            </SocialMediaContainer>
          </SideBarContainer>
        </PageContainer>
      </Content>
    </div>
  );
};

type PropsWithChildren = { children?: JSX.Element | JSX.Element[] };

type WithText = { text: string };

const SocialMediaContainer = (props: PropsWithChildren) => {
  return (
    <div className="h-full flex justify-end">
      <div className="h-full flex flex-col justify-between items-center p-8">
        <div className="bg-yellow-400 w-0.5 flex-1"></div>
        <div className="">{props.children}</div>
        <div className="bg-yellow-400 w-0.5 flex-1"></div>
      </div>
    </div>
  );
};

const SocialIcon = ({ Icon }: { Icon: IconType }) => {
  return (
    <div className="p-2 text-yellow-400">
      <Icon size={"30"}></Icon>
    </div>
  );
};

const TitleContainer = (props: PropsWithChildren) => {
  return <div className="w-full flex justify-center">{props.children}</div>;
};

const PageContainer = (props: PropsWithChildren) => {
  return <div className="w-full flex h-9/10">{props.children}</div>;
};

const ContentContainer = (props: PropsWithChildren) => {
  return <div className=" w-3/5">{props.children}</div>;
};

const SideBarContainer = (props: PropsWithChildren) => {
  return <div className="w-1/5">{props.children}</div>;
};

const ParagraphContainer = (props: PropsWithChildren) => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
};

const ButtonContainer = (props: PropsWithChildren) => {
  return (
    <div className="w-[60%] ml-[15%] flex justify-center mt-10">
      <div className="flex ml-20 justify-around items-center w-full">
        {props.children}
      </div>
    </div>
  );
};

const Paragraph = ({ text }: WithText) => {
  return <p className="w-1/2 text-white p-4">{text}</p>;
};

const Title = ({ text }: WithText) => {
  return (
    <h1 className="text-6xl font-black text-white text-center mt-10 w-full">
      {text}
    </h1>
  );
};

const FilledButton = ({ text }: WithText) => {
  return (
    <button
      type="button"
      className="p-4 text-white bg-black border-2 border-black w-1/3"
    >
      {text}
    </button>
  );
};

const OutlinedButton = ({ text }: WithText) => {
  return (
    <button
      type="button"
      className="p-4 text-yellow-400 border-2 border-yellow-400 w-1/3"
    >
      {text}
    </button>
  );
};

const Content = (props: PropsWithChildren) => {
  return <div className="w-full h-90 relative z-1">{props.children}</div>;
};

const VideoBg = (props: PropsWithChildren) => {
  return (
    <video
      src={videoBg}
      autoPlay
      loop
      muted
      id="video"
      className="absolute w-full h-full object-cover z-minus-1"
    >
      {props.children}
    </video>
  );
};
