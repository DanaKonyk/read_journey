import { Images, Picture, Wrapper } from './HeroImage.styles';
import photo from '../../images/iPhone-Black-des.png';
import iPhoneMob1x from '../../images/iPhone15mob- 1x-min.png';
import iPhoneMob2x from '../../images/iPhone15mob-2x-min.png';
import iPhoneDesc1x from '../../images/iPhone15desc- 1x-min.png';
import iPhoneDesc2x from '../../images/iPhone15desc-2x-min.png';

const HeroImage = () => {
  return (
    <Wrapper>
      <Picture>
        <source
          media="(max-width:765px)"
          srcSet={`${iPhoneMob1x} 1x, ${iPhoneMob2x} 2x`}
          type="image/png"
        />
        <source
          media="(min-width:1440px)"
          srcSet={`${iPhoneDesc1x} 1x, ${iPhoneDesc2x} 2x`}
          type="image/png"
        />
        <Images src={photo} alt="phone" />
      </Picture>
    </Wrapper>
  );
};

export default HeroImage;
