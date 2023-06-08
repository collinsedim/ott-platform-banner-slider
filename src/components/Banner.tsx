import styled from "styled-components";

interface StyledContainerProps {
  image: string;
}

interface BannerProps {
  image: string;
  children: React.ReactNode;
}
export type BannerPropsExport = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const StyledTag = styled.div`
  padding: 0.5rem 0;
  & span {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledDescription = styled.div`
  text-align: start;
  color: rgba(255, 255, 255, 0.8);
  max-width: 50%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledContainer = styled.div<StyledContainerProps>`
  height: 400px;
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 65%, transparent),
    url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
  }
`;

const Title = ({ title }: Pick<BannerPropsExport, "title">) => (
  <StyledTitle>{title}</StyledTitle>
);

const Tags = ({ tags }: Pick<BannerPropsExport, "tags">) => {
  return (
    <StyledTag>
      {tags.map((tag: string, _i: number) => (
        <span key={`tag-${tag}-i`}>{tag}</span>
      ))}
    </StyledTag>
  );
};

const Description = ({
  description,
}: Pick<BannerPropsExport, "description">) => (
  <StyledDescription>{description}</StyledDescription>
);

const Banner = (props: BannerProps) => {
  return (
    <StyledContainer image={props.image}>
      <div>{props.children}</div>
    </StyledContainer>
  );
};

Banner.Title = Title;
Banner.Tags = Tags;
Banner.Description = Description;

export default Banner;
