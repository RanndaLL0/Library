import ScreenSet from "@/components/screen_set/ScreenSet";
import ImageContainer from "@/components/header_container/HeaderContainer";
import ContentContainer from "@/components/content_container/ContentContainer"
import Entypo from '@expo/vector-icons/Entypo';

export default function HomeScreen() {
  return (
    <ScreenSet>
      <ImageContainer>
      </ImageContainer>
      <ContentContainer>
        <Entypo name="book" size={24} color="white" />
      </ContentContainer>
    </ScreenSet>
  );
}