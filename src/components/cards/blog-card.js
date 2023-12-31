
import { jsx, Box, Flex, Image, Heading, Text } from 'theme-ui';
import { Link } from '../link';
import { rgba } from 'polished';

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image loading="lazy" src={post?.thumb} alt={post?.title} />
      </Flex>
      <Box sx={styles.meta}>
        <Heading as="h3">
          <Link path={post.link}>{post?.title}</Link>
        </Heading>
        <Text as="span" sx={styles.commentCount}>
          {post?.commentCount}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    width: 410,
    height: 300,
    mx: 20,
    my: 50
  },
  meta: {
    py: 20,
  },
  commentCount: {
    display: 'flex',
    alignItems: 'center',
    mt: ['10px', '10px', '10px', '15px', '20px'],
    fontWeight: 500,
    fontSize: [13, 14, 14, 16],
    lineHeight: 1.6,
    color: rgba('#343D48', 0.8),
    img: {
      mr: '8px',
    },
  },
};
