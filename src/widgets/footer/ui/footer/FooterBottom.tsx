import s from '@/widgets/footer/ui/footer/footer.module.scss';
import { SocialLinks } from '@/shared/ui/social-links';

type PropsFooter = {
  className?: string;
};

export const FooterBottom = (props: PropsFooter) => {
  const { className } = props;

  return (
    <>
      <div className={s.copy}>
        © 2023 <span>DiveSea All Rights Reserved.</span>
      </div>
      <SocialLinks className={s.socials} />
    </>
  );
};
