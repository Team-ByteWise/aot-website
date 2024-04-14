import Box from "@mui/material/Box";
import "./NewsBulletin.css";

interface NewsBulletinProps {
  newsItems: Array<string>;
}

const NewsBulletin = ({ newsItems }: NewsBulletinProps) => {
  return (
    <Box className="news-bulletin">
      <Box className="news-bulletin-content">
        {newsItems.concat(newsItems).map((item, index) => (
          <Box key={index} component="span" className="news-item">
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewsBulletin;
