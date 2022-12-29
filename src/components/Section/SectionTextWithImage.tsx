import { Layout } from "../Layout/Layout";
import { Row } from "../Row/Row";

interface SectionTextWithImageInterface {
  imageUrl: string;
  title: string;
  description: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const SectionTextWithImage: React.FunctionComponent<
  SectionTextWithImageInterface
> = ({ imageUrl, title, description, children }) => {
  return (
    <Layout.Section>
      <Row>
        <img src={imageUrl} />

        <div className="flex flex-col justify-center">
          <h2 className="mb-2 text-2xl text-gray-900">{title}</h2>
          <p className="mb-8 font-light leading-relaxed text-gray-700">
            {description}
          </p>
          {children}
        </div>
      </Row>
    </Layout.Section>
  );
};
