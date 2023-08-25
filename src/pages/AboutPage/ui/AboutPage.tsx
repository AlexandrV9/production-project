import { FC } from "react";
import { useTranslation } from "react-i18next";

interface AboutPageProps {
  
}
 
const AboutPage: FC<AboutPageProps> = () => {

  const { t } = useTranslation("about");
  
  return (
    <div>
      {t("О сайтe")}
    </div>
  );
}
 
export default AboutPage;