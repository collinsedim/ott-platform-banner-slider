import Banner, { BannerPropsExport } from "./Banner";
// const dataFile = require('../assets/data.json')

export default function BannerTile(props: BannerPropsExport) {
  const { title, image, tags, description } = props;

  return (
    <Banner image={image}>
      <Banner.Title title={title} />
      <Banner.Tags tags={tags} />
      <Banner.Description description={description} />
    </Banner>
  );
}
