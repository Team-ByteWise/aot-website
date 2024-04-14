import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import "./NewsBulletin.css";

interface NewsItem {
  title: string;
  link: string;
}

interface NewsBulletinProps {
  newsArray: NewsItem[];
}

const NewsBulletin = ({newsArray}: NewsBulletinProps) => {
  return (
    <Box className="news-bulletin">
      <Box className="news-bulletin-content">
        {newsArray.concat(newsArray).map((item, index) => (
          <Box key={index} component="span" className="news-item">
            <Link
              key={index}
              textAlign="center"
              sx={{
                margin: { sm: "3px", md: "5px" },
              }}
              href={item.link}
              underline="none"
            >
              {item.title}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewsBulletin;
