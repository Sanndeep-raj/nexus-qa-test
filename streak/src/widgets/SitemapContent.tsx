
interface SitemapContentProps {
  data: {
    content: string;
  }
}
const SitemapContent = (props: SitemapContentProps) => {
  return (<h6>{props?.data?.content}</h6>);
};

export default SitemapContent;